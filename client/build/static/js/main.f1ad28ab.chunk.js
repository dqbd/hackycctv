(this["webpackJsonpclient-new"]=this["webpackJsonpclient-new"]||[]).push([[0],{18:function(e,n,t){e.exports={heading:"Home_heading__X9S2V",item:"Home_item__1BfZ_",header:"Home_header__2ZfpZ",headerContent:"Home_headerContent__X_p_L",color:"Home_color__mpilC",name:"Home_name__1YdXf",video:"Home_video__1Zmyl",list:"Home_list__3jIXi"}},48:function(e,n,t){},5:function(e,n,t){e.exports={main:"Scrobber_main__2LuF3",timeline:"Scrobber_timeline__2jotj",center:"Scrobber_center__3yVBq",timewrapper:"Scrobber_timewrapper__2nkoy",timeoffset:"Scrobber_timeoffset__29YLh",live:"Scrobber_live__38HNF",pill:"Scrobber_pill__1rtDH",margin:"Scrobber_margin__2S6hy",cover:"Scrobber_cover__3LxDf",time:"Scrobber_time__32A7e",calendar:"Scrobber_calendar__B20XD",top:"Scrobber_top__3RLJx",back:"Scrobber_back__36HQY",info:"Scrobber_info__ZStHx",name:"Scrobber_name__33Nnb",color:"Scrobber_color__2b0sF"}},58:function(e,n,t){"use strict";t.r(n);var a=t(2),o=t(0),c=t(40),r=t.n(c),i=(t(48),t(19)),l=t(7),s=t(23),u=t(4),d=Object(o.createContext)({streams:[]}),f=t(18),m=t.n(f),h=window.localStorage.getItem("host")||window.location.hostname,b="http://".concat(h,":").concat(80),j=["#EB5757","#F2994A","#F2C94C","#219653","#6FCF97","#2F80ED","#2D9CDB","#56CCF2","#9B51E0"],v=604800,O=t(42);function p(e){var n=e.src,t=e.alt,c=Object(O.a)(e,["src","alt"]),r=Object(o.useState)(Date.now()),s=Object(l.a)(r,2),u=s[0],d=s[1],f=Object(o.useState)(!1),m=Object(l.a)(f,2),h=m[0],b=m[1];return Object(o.useEffect)((function(){var e=window.setInterval((function(){d(Date.now())}),15e3);return function(){window.clearInterval(e)}}),[]),Object(a.jsx)("img",Object(i.a)({src:"".concat(n,"?q=").concat(u),alt:t,onLoad:function(){return b(!0)},onError:function(){return b(!1)},style:{opacity:h?1:0,transition:"all 0.3s"}},c))}function _(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:m.a.list,children:Object(a.jsx)(d.Consumer,{children:function(e){return e.streams.map((function(e){var n=e.key,t=e.name,o=e.color;return Object(a.jsxs)(s.b,{to:"/camera/".concat(n),className:m.a.item,children:[Object(a.jsx)("section",{className:m.a.header,children:Object(a.jsxs)("div",{className:m.a.headerContent,children:[Object(a.jsx)("h2",{className:m.a.name,children:t}),Object(a.jsx)("span",{className:m.a.color,style:{backgroundColor:o}})]})}),Object(a.jsx)("div",{className:m.a.video,children:Object(a.jsx)(p,{src:"".concat(b,"/frame/").concat(n),alt:t})})]})}))}})})})}var g=t(16),w=t(26),x=t(8),S=t(14),M=t(12),y=t(11),C=t(33),D=t.n(C);function E(e){var n=Object(o.useRef)(null);return Object(o.useEffect)((function(){var t,a,o=n.current;return e.source&&o&&(D.a.isSupported()?((a=new D.a).loadSource(e.source),a.attachMedia(o),a.on(D.a.Events.MANIFEST_PARSED,(function(){t=window.setTimeout((function(){null===o||void 0===o||o.play()}),300)}))):(o.src=e.source,t=window.setTimeout((function(){null===o||void 0===o||o.play()}),300))),function(){var e,n,c;clearTimeout(t),null===o||void 0===o||null===(e=o.pause)||void 0===e||e.call(o),null===(n=a)||void 0===n||null===(c=n.destroy)||void 0===c||c.call(n)}}),[e.source]),Object(a.jsx)("video",{ref:n,autoPlay:!0,muted:!0,playsInline:!0})}var N=t(15),H=t.n(N),Y=t(5),k=t.n(Y),F=function(e){if(e)return function(){try{navigator.vibrate(200)}catch(o){}for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return null===e||void 0===e?void 0:e.apply(void 0,t)}},T=t(27),L=t(41);function B(){var e=Object(w.a)(["\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n        "]);return B=function(){return e},e}function R(){var e=Object(w.a)(["\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        cursor: all-scroll;\n\n        height: 5em;\n      "]);return R=function(){return e},e}var W=function(e){var n=Object(o.useRef)({onDrag:function(){},onDragEnd:function(){},onWheel:function(){},onWheelEnd:function(){}}),t=Object(o.useRef)(null),a=Object(L.a)({onWheel:function(e){var t,a;null===(t=(a=n.current).onWheel)||void 0===t||t.call(a,e)},onWheelEnd:function(e){var t,a;null===(t=(a=n.current).onWheelEnd)||void 0===t||t.call(a,e)},onDrag:function(e){var t,a;null===(t=(a=n.current).onDrag)||void 0===t||t.call(a,e)},onDragEnd:function(e){var t,a;null===(t=(a=n.current).onDragEnd)||void 0===t||t.call(a,e)}});return Object(o.useLayoutEffect)((function(){var a,o=-Math.floor(e.value/1e3),c=0,r=function(n){if(n&&n.parentElement){var t=n.getContext("2d");if(t){var a=n.parentElement.getBoundingClientRect();n.width=a.width,n.height=a.height;!function(a){var o=n.getBoundingClientRect().width,c=H()(),r=c.clone().add(a,"seconds"),i=Math.min(v,c.diff(r.clone().startOf("day"),"second"));!function(a,o){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=n.getBoundingClientRect(),i=r.width,l=r.height;t.lineWidth=10,t.strokeStyle=e.color,t.beginPath(),t.moveTo(Math.min(i,Math.max(0,a+c)),l/2),t.lineTo(Math.min(i,Math.max(0,o+c)),l/2),t.closePath(),t.stroke()}(-(Math.max(0,c.diff(r.clone().endOf("day"),"second"))+a),-(i+a),o/2)}(o+c)}}},i=e.onScroll,l=e.onScrollEnd,s=function(e){c=e,c=Math.min(-o,Math.max(-604800-o,c)),null===i||void 0===i||i(1e3*-(o+c))},u=function(){null===l||void 0===l||l(1e3*-(o+c))};return n.current={onDrag:function(e){return s(-e.delta[0])},onWheel:function(e){return s(e.delta[0]||-e.delta[1])},onDragEnd:function(){return u()},onWheelEnd:function(){return u()}},function e(){r(t.current),a=window.requestAnimationFrame(e)}(),function(){a&&window.cancelAnimationFrame(a)}}),[e.value,e.color,e.onScrollEnd,e.onScroll]),Object(g.a)("div",{css:Object(T.a)(R()),children:Object(g.a)("canvas",Object(i.a)({css:Object(T.a)(B()),ref:t,height:100},a()))})},A=function(e){var n=Math.abs(e),t=Math.floor(n/1e3)%60,a=Math.floor(n/1e3/60)%60,o=Math.floor(n/1e3/60/60)%24,c=Math.floor(n/1e3/60/60/24),r=[];return(t>0||a>0||o>0)&&r.unshift("".concat(t.toFixed(0).padStart(2,"0"),"s")),(a>0||o>0)&&r.unshift("".concat(a.toFixed(0).padStart(2,"0"),"m")),o>0&&r.unshift("".concat(o.toFixed(0).padStart(2,"0"),"h")),c>0&&r.unshift("".concat(c,"d")),"".concat(Math.sign(e)<0?"-":"").concat(r.join(" "))};function I(e){var n,t,c=function(){var e=Object(o.useState)(Date.now()),n=Object(l.a)(e,2),t=n[0],a=n[1];return Object(o.useLayoutEffect)((function(){var e;return function n(){var t=Date.now(),o=Math.max(1e3-new Date(t).getMilliseconds(),0);a(t),window.clearTimeout(e),e=window.setTimeout(n,o)}(),function(){window.clearTimeout(e)}}),[]),t}(),r=Object(o.useState)(null),i=Object(l.a)(r,2),u=i[0],d=i[1],f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,n=Object(o.useState)(!0),t=Object(l.a)(n,2),a=t[0],c=t[1],r=Object(o.useRef)((function(){return c(!0)})),i=Object(o.useRef)((function(){return c(!1)}));return Object(o.useEffect)((function(){var n;return i.current=function(){window.clearTimeout(n),c(!1)},r.current=function(){window.clearTimeout(n),c(!0),n=window.setTimeout(i.current,e)},r.current(),function(){window.clearTimeout(n)}}),[e]),{visible:a,show:r,hide:i}}(1e4),m=f.visible,h=f.show,b=Object(o.useRef)({});Object(o.useEffect)((function(){var n=e.onChange,t=e.value;function a(e){d(null),n(Math.max(0,Math.min(6048e5,e)))}b.current.sliderChange=F(a),b.current.timeChange=F((function(e){var n=e.split(":").map((function(e){return Number.parseInt(e,10)})),o=Object(l.a)(n,2),c=o[0],r=o[1],i=H()(),s=i.clone().subtract(t,"milliseconds").hours(c).minutes(r);null===a||void 0===a||a(i.diff(s))})),b.current.dateChange=F((function(e){if(e){var n=H()(),o=H()().subtract(t,"milliseconds"),c=H()(e).hours(o.hours()).minutes(o.minutes()).seconds(o.seconds()).milliseconds(o.milliseconds());null===a||void 0===a||a(n.diff(c))}}))}),[e.value,e.onChange]);var j=null!=u?u:e.value,v=H()(new Date(c-j)),O=c-6048e5;O-=O%6e4;var p=c;p+=6e4-p%6e4;var _=H()(new Date(O)),g=H()(new Date(p));return Object(a.jsxs)("div",{className:k.a.main,style:{opacity:m?1:0},onTouchStart:h.current,onMouseMove:h.current,children:[Object(a.jsxs)("div",{className:k.a.top,children:[Object(a.jsx)(s.b,{to:"/",className:k.a.back,children:Object(a.jsx)("svg",{viewBox:"0 0 29 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M25 9.17424V11.8258H9.09091L16.3826 19.1174L14.5 21L4 10.5L14.5 0L16.3826 1.88258L9.09091 9.17424H25Z",fill:"currentColor"})})}),Object(a.jsxs)("div",{className:k.a.info,children:[Object(a.jsx)("span",{className:k.a.color,style:{backgroundColor:null===(n=e.stream)||void 0===n?void 0:n.color}}),Object(a.jsx)("span",{className:k.a.name,children:null===(t=e.stream)||void 0===t?void 0:t.name})]})]}),Object(a.jsx)("div",{className:k.a.timeline,children:Object(a.jsxs)("div",{className:k.a.center,children:[Object(a.jsxs)("div",{className:k.a.timewrapper,children:[Object(a.jsx)("div",{onClick:function(){var e,n;return null===(e=(n=b.current).sliderChange)||void 0===e?void 0:e.call(n,0)},className:k.a.timeoffset,children:j?A(-j):Object(a.jsx)("span",{className:k.a.live,children:"\u017div\u011b"})}),Object(a.jsxs)("div",{className:[k.a.pill,k.a.margin].join(" "),children:[Object(a.jsx)("input",{className:k.a.cover,onChange:function(e){var n,t;return null===(n=(t=b.current).timeChange)||void 0===n?void 0:n.call(t,e.target.value)},value:v.format("HH:mm"),min:_.format("HH:mm"),max:g.format("HH:mm"),type:"time"}),Object(a.jsx)("span",{className:k.a.time,children:v.format("HH:mm:ss")})]})]}),Object(a.jsxs)("div",{className:k.a.pill,children:[Object(a.jsx)("input",{className:k.a.cover,onChange:function(e){var n,t;return null===(n=(t=b.current).dateChange)||void 0===n?void 0:n.call(t,e.target.valueAsDate)},value:v.format("YYYY-MM-DD"),min:_.format("YYYY-MM-DD"),max:g.format("YYYY-MM-DD"),type:"date"}),Object(a.jsx)("span",{className:k.a.calendar,children:v.format("DD. MMMM YYYY")})]})]})}),Object(a.jsx)(W,{onScroll:d,onScrollEnd:b.current.sliderChange,value:e.value,color:e.stream.color})]})}function Z(){var e=Object(w.a)(["\n          display: flex;\n          align-items: center;\n          justify-content: center;\n\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n\n          background: #090909;\n\n          & > video {\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n            object-position: center;\n          }\n        "]);return Z=function(){return e},e}var P=function(e){Object(M.a)(t,e);var n=Object(y.a)(t);function t(){var e;Object(x.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=n.call.apply(n,[this].concat(o))).state={from:0,to:0,shift:0,showTools:!1},e.generateUrl=function(e){var n=e.name,t=e.from,a=e.to,o=e.shift,c="".concat(b,"/data/").concat(n,"/"),r="stream.m3u8",i=[];return t>0?(r="slice.m3u8",i.push("from=".concat(t)),a>0&&t<a&&i.push("to=".concat(a))):o>0&&i.push("shift=".concat(Math.ceil(o/1e3))),c+=r,i.length>0&&(c+="?"+i.join("&")),c},e}return Object(S.a)(t,[{key:"componentWillUpdate",value:function(e){this.props.name!==e.name&&this.setState({from:0,to:0,shift:0})}},{key:"render",value:function(){var e=this,n=this.props,t=n.name,a=n.streams,o=this.state,c=o.from,r=o.to,i=o.shift,l=this.generateUrl({name:t,from:c,to:r,shift:i}),s=a.find((function(e){return e.key===t}));return Object(g.b)("div",{css:Object(T.a)(Z()),children:[l&&Object(g.a)(E,{source:l}),s&&Object(g.a)(I,{onChange:function(n){return e.setState({shift:n})},value:i,stream:s})]})}}]),t}(o.Component);function X(){var e=Object(o.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1];return Object(o.useEffect)((function(){fetch("".concat(b,"/streams")).then((function(e){return e.json()})).then((function(e){var n=e.data;return c(n.map((function(e,n){return Object(i.a)(Object(i.a)({},e),{},{color:j[n%j.length]})})))}))}),[]),Object(a.jsx)(s.a,{children:Object(a.jsx)(d.Provider,{value:{streams:t},children:Object(a.jsxs)("div",{id:"app",children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:_}),Object(a.jsx)(u.a,{path:"/camera/:name",render:function(e){var n=e.match;return Object(a.jsx)(P,{name:n.params.name,streams:t})}})]})})})}r.a.render(Object(a.jsx)(X,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.f1ad28ab.chunk.js.map