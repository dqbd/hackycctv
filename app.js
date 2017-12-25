const express = require('express')
const path = require('path')
const fs = require('fs')

const Config = require('./server/config')
const Ffmpeg = require('./server/ffmpeg')
const Database = require('./server/database')
const Manifest = require('./server/manifest')

const config = new Config(path.resolve(__dirname, 'init.sh'))
const db = new Database(path.resolve(__dirname, 'app.db'), { memory: true })
const factory = new Manifest(config)

const maxAge = 7 * 24 * 60 * 60 /* keep records of one week */
const cleanupPolling = 60 /* every minute */

const app = express()
const instances = []

const mappings = {
    "OBCHOD": "rtsp://192.168.2.10:554/user=admin&password=&channel=1&stream=0.sdp?real_stream",
    "VENKU": "rtsp://192.168.2.11:554/user=admin&password=&channel=1&stream=0.sdp?real_stream",
}

const performCleanup = (folder) => {
    console.log('CLEANUP', folder)

    const toDelete = db.tooOld(folder, maxAge)

    console.time('- delete from DB')
    db.removeBulk(folder, toDelete)
    console.timeEnd('- delete from DB')

    console.time('- delete from FS')
    toDelete.forEach(({ filename }) => {
        fs.unlink(path.resolve(config.base(), folder, filename), (error) => console.error)
    })
    console.timeEnd('- delete from FS')

    setTimeout(() => performCleanup(folder), cleanupPolling * 1000)
}

const loadFolder = (folder, address) => {
    console.log('LOADFOLDER', folder, path.resolve(config.base(), folder))
    console.time(`initialize ${folder}`)

    console.time(`ls ${folder}`)
    const files = fs.readdirSync(path.resolve(config.base(), folder))
    console.timeEnd(`ls ${folder}`)

    db.insertBulk(folder, files)
    console.timeEnd(`initialize ${folder}`)

    console.time(`cleanup ${folder}`)
    performCleanup(folder)
    console.timeEnd(`cleanup ${folder}`)
    
    console.time(`watch ${folder}`)
    fs.watch(path.resolve(config.base(), folder), (event, filename) => {
        if (filename.indexOf('sg_') != 0) return
        if (fs.existsSync(path.resolve(config.base(), folder, filename))) {
            db.insert(folder, filename)
        }
    })
    console.timeEnd(`watch ${folder}`)

    instances.push(new Ffmpeg(config, folder, address))
}


app.get('/:folder/stream.m3u8', (req, res) => {
    const { folder } = req.params
    const { shift } = req.query

    if (!folder) return res.status(400).send('Invalid parameters')

    res.set('Content-Type', 'application/x-mpegURL')
    if(!shift) {
        console.log('receiving stream file')
        res.sendFile(path.join(folder, config.name()), { root: config.base() })
    } else {
        res.send(factory.getManifest(shift, db.shift(folder, shift)))
    }
})

app.get('/:folder/slice.m3u8', (req, res) => {
    if(!req.query.from) return next()
    const { folder } = req.params
    const { from, to } = req.query

    if (!folder || !from || !to) return res.status(400).send("No query parameters set")

    res.set('Content-Type', 'application/x-mpegURL')
    res.send(factory.getManifest(`${from}${to}`, db.seek(folder, from, to), true))
})

app.get('/:folder/:file', (req, res, next) => {
    const { folder, file } = req.params
    if (file.indexOf('.ts') < 0) return next()
    res.sendFile(path.join(folder, file), { root: config.base() })
})

Object.keys(mappings).forEach((folder) => loadFolder(folder, mappings[folder]))

process.on("SIGTERM", () => {
    db.close()
    instances.forEach(instance => instance.stop())
})

app.listen(8080, () => {
    instances.forEach(instance => instance.loop())
    console.log('Listening at 8080')
})
