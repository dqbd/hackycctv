import React, { useRef, useLayoutEffect, useState, useEffect } from "react"
import moment from "moment"

import styles from "./Scrobber.module.css"
import { NavLink } from "react-router-dom"

import { MAX_LENGTH } from "utils/constants"
import { vibrateDecorator } from "utils/vibrateDecorator"
import { Slider } from "components/Slider"

const formatTime = (time: number) => {
  const absTime = Math.abs(time)

  const seconds = Math.floor(absTime / 1000) % 60
  const minutes = Math.floor(absTime / 1000 / 60) % 60
  const hours = Math.floor(absTime / 1000 / 60 / 60) % 24
  const days = Math.floor(absTime / 1000 / 60 / 60 / 24)

  let result = []
  if (seconds > 0 || minutes > 0 || hours > 0) {
    result.unshift(`${seconds.toFixed(0).padStart(2, "0")}s`)
  }

  if (minutes > 0 || hours > 0) {
    result.unshift(`${minutes.toFixed(0).padStart(2, "0")}m`)
  }
  if (hours > 0) {
    result.unshift(`${hours.toFixed(0).padStart(2, "0")}h`)
  }

  if (days > 0) {
    result.unshift(`${days}d`)
  }

  return `${Math.sign(time) < 0 ? "-" : ""}${result.join(" ")}`
}

const useTimer = () => {
  const [current, setCurrent] = useState(Date.now())
  useLayoutEffect(() => {
    let timer: number

    const tick = () => {
      const now = Date.now()
      const nextTimer = Math.max(1000 - new Date(now).getMilliseconds(), 0)
      setCurrent(now)

      window.clearTimeout(timer)
      timer = window.setTimeout(tick, nextTimer)
    }
    tick()

    return () => void window.clearTimeout(timer)
  }, [])

  return current
}

const useVisibleTimer = (delay = 1000) => {
  const [visible, setVisible] = useState(true)
  const show = useRef<() => void>(() => setVisible(true))
  const hide = useRef<() => void>(() => setVisible(false))

  useEffect(() => {
    let timer: number

    hide.current = () => {
      window.clearTimeout(timer)
      setVisible(false)
    }

    show.current = () => {
      window.clearTimeout(timer)
      setVisible(true)
      timer = window.setTimeout(hide.current, delay)
    }

    show.current()

    return () => void window.clearTimeout(timer)
  }, [delay])

  return { visible, show, hide }
}

export function Scrobber(props: {
  onChange: (shift: number) => void
  value: number
  stream: {
    key: string
    name: string
    color: string
  }
}) {
  const current = useTimer()
  const [scrollShift, setScrollShift] = useState<number | null>(null)
  const { visible, show } = useVisibleTimer(10 * 1000)

  const callbacks = useRef<{
    sliderChange?: ((shift: number) => void) | undefined
    timeChange?: ((value: string) => void) | undefined
    dateChange?: ((value: Date | null) => void) | undefined
  }>({})

  useEffect(() => {
    const onChange = props.onChange
    const value = props.value

    function commitShift(newShift: number) {
      setScrollShift(null)
      onChange(Math.max(0, Math.min(MAX_LENGTH * 1000, newShift)))
    }

    callbacks.current.sliderChange = vibrateDecorator(commitShift)

    callbacks.current.timeChange = vibrateDecorator((newValue: string) => {
      const [hours, minutes] = newValue
        .split(":")
        .map((item) => Number.parseInt(item, 10))
      const now = moment()
      const past = now
        .clone()
        .subtract(value, "milliseconds")
        .hours(hours)
        .minutes(minutes)

      commitShift?.(now.diff(past))
    })

    callbacks.current.dateChange = vibrateDecorator((newValue: Date | null) => {
      if (!newValue) return
      const now = moment()
      const ref = moment().subtract(value, "milliseconds")
      const past = moment(newValue)
        .hours(ref.hours())
        .minutes(ref.minutes())
        .seconds(ref.seconds())
        .milliseconds(ref.milliseconds())

      commitShift?.(now.diff(past))
    })
  }, [props.value, props.onChange])

  const contentShift = scrollShift != null ? scrollShift : props.value
  const date = moment(new Date(current - contentShift))

  let minRangeRounded = current - MAX_LENGTH * 1000
  minRangeRounded -= minRangeRounded % (60 * 1000)

  let maxRangeRounded = current
  maxRangeRounded += 60 * 1000 - (maxRangeRounded % (60 * 1000))

  const minDate = moment(new Date(minRangeRounded))
  const maxDate = moment(new Date(maxRangeRounded))

  return (
    <div
      className={styles.main}
      style={{ opacity: visible ? 1 : 0 }}
      onTouchStart={show.current}
      onMouseMove={show.current}
    >
      <div className={styles.top}>
        <NavLink to="/" className={styles.back}>
          <svg
            viewBox="0 0 29 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 9.17424V11.8258H9.09091L16.3826 19.1174L14.5 21L4 10.5L14.5 0L16.3826 1.88258L9.09091 9.17424H25Z"
              fill="currentColor"
            />
          </svg>
        </NavLink>
        <div className={styles.info}>
          <span
            className={styles.color}
            style={{ backgroundColor: props.stream?.color }}
          ></span>
          <span className={styles.name}>{props.stream?.name}</span>
        </div>
      </div>
      <div className={styles.timeline}>
        <div className={styles.center}>
          <div className={styles.timewrapper}>
            <div
              onClick={() => callbacks.current.sliderChange?.(0)}
              className={styles.timeoffset}
            >
              {!contentShift ? (
                <span className={styles.live}>Živě</span>
              ) : (
                formatTime(-contentShift)
              )}
            </div>

            <div className={[styles.pill, styles.margin].join(" ")}>
              <input
                className={styles.cover}
                onChange={(e) => callbacks.current.timeChange?.(e.target.value)}
                value={date.format("HH:mm")}
                min={minDate.format("HH:mm")}
                max={maxDate.format("HH:mm")}
                type="time"
              />
              <span className={styles.time}>
                {date.format("HH:mm:ss")}
              </span>
            </div>
          </div>
          <div className={styles.pill}>
            <input
              className={styles.cover}
              onChange={(e) =>
                callbacks.current.dateChange?.(e.target.valueAsDate)
              }
              value={date.format("YYYY-MM-DD")}
              min={minDate.format("YYYY-MM-DD")}
              max={maxDate.format("YYYY-MM-DD")}
              type="date"
            />
            <span className={styles.calendar}>
              {date.format("DD. MMMM YYYY")}
            </span>
          </div>
        </div>
      </div>
      <Slider
        onScroll={setScrollShift}
        onScrollEnd={callbacks.current.sliderChange}
        value={props.value}
        color={props.stream.color}
      />
    </div>
  )
}
