(function(e){function t(t){for(var a,r,i=t[0],o=t[1],u=t[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={index:0},c={index:0},s=[];function i(e){return o.p+"js/"+({}[e]||e)+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-35e4053c":1,"chunk-4a02497e":1,"chunk-5cac0c6e":1,"chunk-6a1bf014":1,"chunk-77ffbfa4":1,"chunk-804e89c6":1,"chunk-afa3a266":1,"chunk-dd46f1a8":1,"chunk-ea5424ee":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+".css",c=o.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===a||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],d.parentNode.removeChild(d),n(s)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("5269")},"09f8":function(e,t,n){"use strict";n("99af"),n("fb6a"),n("d3b7"),n("2ca0");var a=n("a34a"),r=n.n(a),c=n("c964"),s=(n("96cf"),{host:{prod:"https://walle.neil-pan.com/stock",dev:"http://localhost:8080"}});function i(e){var t=s.host.prod;if(e.startsWith("./")){var n=e.slice(1);e="".concat(t).concat(n)}return e}function o(e,t){return u.apply(this,arguments)}function u(){return u=Object(c["a"])(r.a.mark((function e(t,n){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var a=document.createElement("script");a.type="text/javascript",a.src=i(t),a.onload=function(){e(),n&&n()},document.body.appendChild(a)})));case 1:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e,t){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(r.a.mark((function e(t,n){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a.setAttribute("href",i(t)),a.onload=function(){e(),n&&n()},document.head.appendChild(a)})));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}))},"3b39":function(e,t,n){"use strict";var a=n("a152"),r=n.n(a);r.a},"440a":function(e,t,n){"use strict";n("caad");var a=n("276c"),r=n("e954"),c=n("c1df"),s=n.n(c),i=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"today",value:function(){return s()().format("YYYYMMDD")}},{key:"last",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=0,n=1;;n++){var a=s()().subtract(n,"days");if(![6,0].includes(+a.day())&&(t++,t===e))return a.format("YYYYMMDD")}}}]),e}();t["a"]=new i},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},5269:function(e,t,n){"use strict";n.r(t);n("d3b7");var a=n("a34a"),r=n.n(a),c=n("c964"),s=(n("96cf"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a026")),i=n("8c4f");s["a"].use(i["a"]);var o=new i["a"]({routes:[{path:"/",redirect:"/splash"},{path:"/splash",component:function(){return n.e("chunk-4a02497e").then(n.bind(null,"ae9b"))}},{path:"/market",component:function(){return n.e("chunk-77ffbfa4").then(n.bind(null,"646c"))},children:[{path:"today",alias:"",component:function(){return n.e("chunk-804e89c6").then(n.bind(null,"575e"))}},{path:"recent",component:function(){return n.e("chunk-7632e739").then(n.bind(null,"731f"))}},{path:"history",component:function(){return n.e("chunk-493005ad").then(n.bind(null,"9647"))}}]}]}),u=o,l=(n("caad"),n("2532"),n("4795"),n("61b2")),f=n("ed3d"),d=n("763a"),h=n("b191"),p=(n("99af"),n("b0c0"),n("ac1f"),n("5319"),n("276c")),v=n("e954"),b=function(){function e(){Object(p["a"])(this,e)}return Object(v["a"])(e,[{key:"listen",value:function(){var e=this;window.addEventListener("onIgnoreStockEvent",(function(t){var n=t.detail;e.onIgnoreStockEvent(n)}))}},{key:"onIgnoreStockEvent",value:function(e){var t=e.el,n=e.time,a=e.vtype,r=e.listname,c=e.code,s=e.name,i=window.confirm("Ignore Stock ".concat(c," ").concat(s,"?"));i&&(n=n.replace("t0-",""),console.log("#__Walle_Stock_Controller# ignore ",n,a,r,c,s),window.__Walle_Stock_Controller.ignore(n,a,r,c),t.parentNode.parentNode.innerHTML="")}}]),e}(),y=new b,m=n("fc11"),k=n("1157"),j=n.n(k),w=function(){return n.e("chunk-ea5424ee").then(n.bind(null,"5b0d"))},g=function(){return n.e("chunk-35e4053c").then(n.bind(null,"3872"))},x=function(){return Promise.resolve().then(n.bind(null,"6067"))},_=function(){return n.e("chunk-6a1bf014").then(n.bind(null,"8d50"))},O=function(){return n.e("chunk-5cac0c6e").then(n.bind(null,"d544"))},S=function(){return n.e("chunk-afa3a266").then(n.bind(null,"d9f1"))};s["a"].component("ui-mask",w),s["a"].component("ui-gene",g),s["a"].component("ui-board",x),s["a"].component("ui-chart",_),s["a"].component("ui-nav",O),s["a"].component("ui-nav-item",S);var L=function(){function e(){var t=this;Object(p["a"])(this,e),Object(m["a"])(this,"mask",void 0),this.mask=new s["a"]({components:{"ui-mask":w},template:'<ui-mask :display="display"></ui-mask>',data:function(){return{display:!1}}}).$mount(),document.querySelector("body").append(this.mask.$el),j()(document).keydown((function(e){e.ctrlKey&&"KeyL"===e.code&&(t.toggle(),e.preventDefault())}))}return Object(v["a"])(e,[{key:"show",value:function(){this.mask.$data.display=!0}},{key:"hide",value:function(){this.mask.$data.display=!1}},{key:"toggle",value:function(){this.mask.$data.display=!this.mask.$data.display}}]),e}(),E=new L,C=n("6944"),D=(n("09f8"),n("c1df")),I=n.n(D);function N(){var e=I()().format("YYYYMMDD");setInterval((function(){var t=I()().format("YYYYMMDD");e!==t&&location.reload()}),36e5)}function z(){return T.apply(this,arguments)}function T(){return T=Object(c["a"])(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return window.addEventListener("__Walle_Bootstrap_Ready_Event",e)})));case 1:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function M(){return P.apply(this,arguments)}function P(){return P=Object(c["a"])(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e("chunk-dd46f1a8").then(n.bind(null,"1d50"));case 2:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function R(){return Y.apply(this,arguments)}function Y(){return Y=Object(c["a"])(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(navigator.userAgent.includes("ostma")){e.next=2;break}return e.abrupt("return");case 2:return E.show(),e.next=5,N();case 5:return e.next=7,M();case 7:return e.next=9,z();case 9:return e.next=11,l["a"].load();case 11:return e.next=13,d["a"].load();case 13:return e.next=15,f["a"].load();case 15:return e.next=17,h["a"].load();case 17:return e.next=19,y.listen();case 19:return e.next=21,C["a"].load();case 21:case 22:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}var W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"walle-app"}},[n("router-view")],1)},$=[],A={name:"app"},B=A,H=(n("cad9"),n("2877")),q=Object(H["a"])(B,W,$,!1,null,null,null),U=q.exports;function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"walle-app";document.querySelector("#"+e)&&document.querySelector("#"+e).remove();var t=document.createElement("div");t.setAttribute("id",e);var n=document.querySelector("head"),a=document.querySelector("body"),r=document.createElement("style");return r.setAttribute("type","text/css"),r.innerText="\n    /* 禁止显示原网页内容滚动条 */\n    html,body {\n      overflow: hidden !important;\n    }\n\n    /* APP 影子容器 */\n    #".concat(e," {\n      position: fixed;\n      top: 0;\n      left: 0;\n      z-index: 100000;\n      width: 100%;\n      height: 100%;\n      overflow-y: scroll;\n      background: #fff;\n    }\n  ").replace(/[\r\n\s]/g,""),n.appendChild(r),a.appendChild(t),t}s["a"].config.productionTip=!1;var G=new s["a"]({router:u,render:function(e){return e(U)}});Object(c["a"])(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:G.$mount(F("walle-app"));case 3:case"end":return e.stop()}}),e)})))();t["default"]=G},5379:function(e,t,n){},6067:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[Object.values(this.$props.traceList).length?n("div",[n("br"),n("p",[e._v("跟踪")]),n("table",{staticClass:"table"},[n("thead",[n("tr",e._l(e.translator,(function(t,a){return n("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===a&&!e.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:a,attrs:{scope:"col"}},[e._v(e._s(e.translator[a]))])})),0)]),n("tbody",e._l(e.traceList,(function(t){return n("tr",{key:t.code},e._l(e.translator,(function(a,r){return n("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===r&&!e.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:r,staticClass:"cursor-default",attrs:{scope:"row"}},[e._v(" "+e._s(e.toMoney(r,t[r]))+" "),e.isT0List&&"code"===r?n("i",{staticClass:"cursor-pointer",attrs:{title:"从榜单中移除此股票",onclick:"window.dispatchEvent(new CustomEvent('onIgnoreStockEvent', { detail: { el: this , time:'"+e.time+"', vtype:'"+e.vtype+"', listname:'"+e.listname+"', code:'"+t.code+"', name:'"+t.name+"' }}))"}},[e._v("(x)")]):e._e()])})),0)})),0)])]):e._e(),n("div",[n("br"),n("p",[e._v("捕获")]),n("table",{staticClass:"table"},[n("thead",[n("tr",e._l(e.translator,(function(t,a){return n("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===a&&!e.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:a,attrs:{scope:"col"}},[e._v(e._s(e.translator[a]))])})),0)]),n("tbody",e._l(e.captureList,(function(t){return n("tr",{key:t.code},e._l(e.translator,(function(a,r){return n("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===r&&!e.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:r,staticClass:"cursor-default",attrs:{scope:"row"}},[e._v(" "+e._s(e.toMoney(r,t[r]))+" "),"code"===r?n("i",{staticClass:"cursor-pointer",attrs:{title:"查看股票基因数据",onclick:"window.dispatchEvent(new CustomEvent('onShowGeneEvent', { detail: { code: '"+t.code+"', vtype:'"+e.vtype+"' }}))"}},[e._v("(i)")]):e._e()])})),0)})),0)]),n("br")])])},r=[],c=(n("caad"),n("b680"),n("07ac"),n("2532"),{props:["time","vtype","listname","captureList","traceList"],data:function(){return{translator:{code:"股票代码",name:"股票简称",price:"股价",change:"涨跌幅",rate:"主力净占比",open:"开盘价",turnover:"换手率",qrr:"量比",volume:"成交量",inflow:"主力流入资金",outflow:"主力流出资金",netinflow:"主力净流入资金",hot:"热度"}}},computed:{isHotList:function(){try{var e=Object.values(this.$props.captureList)[0];return!!e.hot}catch(t){}return!1},isT0List:function(){return this.$props.time.includes("t0")}},methods:{toMoney:function(e,t){return["inflow","outflow","netinflow"].includes(e)&&(t=Math.abs(+t)>=1e8?(+t/1e8).toFixed(2)+"亿":(+t/1e4).toFixed(2)+"万"),t}}}),s=c,i=(n("3b39"),n("2877")),o=Object(i["a"])(s,a,r,!1,null,"e8eee180",null);t["default"]=o.exports},"61b2":function(e,t,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("d3b7"),n("3ca3"),n("ddb0");var a=n("a34a"),r=n.n(a),c=n("c964"),s=(n("96cf"),n("276c")),i=n("e954"),o=n("fc11"),u=n("a002"),l=n.n(u),f=function(){function e(){Object(s["a"])(this,e),Object(o["a"])(this,"config",{}),Object(o["a"])(this,"isInited",!1),Object(o["a"])(this,"host",{})}return Object(i["a"])(e,[{key:"load",value:function(){var e=Object(c["a"])(r.a.mark((function e(){var t;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.getItem("__Walle_Stock_Bot_Config");case 2:t=e.sent,t&&(this.config=t,this.host=t.host,this.isInited=!0);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getRule",value:function(e,t){var n=this.getRules(),a=!0,r=!1,c=void 0;try{for(var s,i=n[Symbol.iterator]();!(a=(s=i.next()).done);a=!0){var o=s.value;if(o.capture===e){if(!t)return o;if(t===o.date)return o}}}catch(u){r=!0,c=u}finally{try{a||null==i["return"]||i["return"]()}finally{if(r)throw c}}}},{key:"getValidators",value:function(){return this.config.validators||[]}},{key:"getCaptureRules",value:function(){return this.config.captures||[]}},{key:"getIntervalRules",value:function(){return this.config.intervals||[]}},{key:"getTempRules",value:function(){return this.config.temps||[]}},{key:"getRules",value:function(){return[].concat(this.config.captures||[],this.config.intervals||[],this.config.temps||[])}}]),e}();t["a"]=new f},6944:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return p}));n("d3b7");var a,r=n("a34a"),c=n.n(r),s=n("c964"),i=(n("96cf"),n("a026")),o=n("09f8"),u=n("6067");function l(){return f.apply(this,arguments)}function f(){return f=Object(s["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["b"])("./popper/popper.css");case 2:return e.next=4,Object(o["a"])("./popper/popper.min.js");case 4:return e.next=6,Object(o["a"])("./popper/tooltip.min.js");case 6:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function d(e,t){a&&a.dispose(),a=new window.Tooltip(e,{title:t,html:!0,trigger:"click",closeOnClickOutside:!0,popperOptions:{placement:"bottom",modifiers:{preventOverflow:{boundariesElement:document.querySelector("#walle-app")}}}})}function h(e){a&&a.dispose(),a=null}function p(e,t,n,a,r,c){return v.apply(this,arguments)}function v(){return v=Object(s["a"])(c.a.mark((function e(t,n,a,r,s,o){var l,f;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:l=new i["a"]({components:{"ui-board":u["default"]},template:'<ui-board :time="time" :vtype="vtype" :listname="listname" :capture-list="captureList" :trace-list="traceList"></ui-board>',data:function(){return{time:n,vtype:a,listname:r,captureList:s,traceList:o}}}).$mount(),f=l.$el.outerHTML,d(t,f);case 3:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return y=Object(s["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:h(t);case 1:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}t["a"]={load:l,showPopper:d,hidePopper:h,showBoard:p,hideBoard:b}},"763a":function(e,t,n){"use strict";n("99af"),n("b0c0"),n("d3b7"),n("ac1f"),n("5319");var a=n("a34a"),r=n.n(a),c=n("c964"),s=(n("96cf"),n("276c")),i=n("e954"),o=n("fc11"),u=n("440a"),l=n("a002"),f=n.n(l),d=f.a.createInstance({name:"capture",driver:f.a.INDEXEDDB}),h=function(){function e(){Object(s["a"])(this,e),Object(o["a"])(this,"today",{}),Object(o["a"])(this,"callback",{}),this.listen()}return Object(i["a"])(e,[{key:"listen",value:function(){var e=Object(c["a"])(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.addEventListener("__Walle_Stock_Daily_Capture_Event",function(){var e=Object(c["a"])(r.a.mark((function e(n){var a,c,s;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=n.detail,c=a.name,s=a.lists,t.today[c]=s,t.fireUpdateCallback(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"registerUpdateCallback",value:function(e,t){this.callback[e]=t}},{key:"unregisterUpdateCallback",value:function(e){delete this.callback[e]}},{key:"fireUpdateCallback",value:function(e){for(var t in this.callback)this.callback[t](e)}},{key:"load",value:function(){var e=Object(c["a"])(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u["a"].today(),e.next=3,d.getItem(t);case 3:n=e.sent,n&&(this.today=n);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"captureOfList",value:function(e,t,n){try{e=e.replace("t0-","");var a="".concat(e,"-").concat(t),r=window.__Walle_Stock_Define.keyOf(n);return this.today[a][r].stocks}catch(c){return{}}}}]),e}();t["a"]=new h},a152:function(e,t,n){},b191:function(e,t,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("4160"),n("fb6a"),n("4e82"),n("b0c0"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("159b"),n("ddb0");var a=n("d0af"),r=n("a34a"),c=n.n(r),s=n("c964"),i=(n("96cf"),n("276c")),o=n("e954"),u=n("fc11"),l=n("440a"),f=n("61b2"),d=n("a002"),h=n.n(d),p=h.a.createInstance({name:"trace",driver:h.a.INDEXEDDB}),v=function(){function e(){Object(i["a"])(this,e),Object(u["a"])(this,"recent",{}),Object(u["a"])(this,"strategy",{})}return Object(o["a"])(e,[{key:"analyse",value:function(){var e=Object(s["a"])(c.a.mark((function e(t,n){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",window.__Walle_Stock_Strategy.analyse(t,n));case 1:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"listnames",value:function(e){var t={};return t="interval"!==e?window.__Walle_Stock_Define.getNormalNames():window.__Walle_Stock_Define.getIntervalNames(),t}},{key:"load",value:function(){var e=Object(s["a"])(c.a.mark((function e(){var t,n,a,r,s,i,o,u,d,p,v,b,y,m,k,j,w,g,x,_;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t=l["a"].today(),f["a"].isInited){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,h.a.getItem("__Walle_Stock_Bot_Strategy");case 6:if(n=e.sent,!n||n.date!==t){e.next=10;break}return this.strategy=n.strategy,e.abrupt("return");case 10:return e.next=12,toastr.loading();case 12:console.info("#Recent# load strategy ... "),a=f["a"].getCaptureRules(),r=f["a"].getIntervalRules(),s=f["a"].getValidators(),i=[].concat(a,r),o=!0,u=!1,d=void 0,e.prev=20,p=i[Symbol.iterator]();case 22:if(o=(v=p.next()).done){e.next=55;break}b=v.value,y=!0,m=!1,k=void 0,e.prev=27,j=s[Symbol.iterator]();case 29:if(y=(w=j.next()).done){e.next=38;break}return g=w.value,x=b.capture,_=g.name,e.next=35,this.listChangesOf(x,_);case 35:y=!0,e.next=29;break;case 38:e.next=44;break;case 40:e.prev=40,e.t0=e["catch"](27),m=!0,k=e.t0;case 44:e.prev=44,e.prev=45,y||null==j["return"]||j["return"]();case 47:if(e.prev=47,!m){e.next=50;break}throw k;case 50:return e.finish(47);case 51:return e.finish(44);case 52:o=!0,e.next=22;break;case 55:e.next=61;break;case 57:e.prev=57,e.t1=e["catch"](20),u=!0,d=e.t1;case 61:e.prev=61,e.prev=62,o||null==p["return"]||p["return"]();case 64:if(e.prev=64,!u){e.next=67;break}throw d;case 67:return e.finish(64);case 68:return e.finish(61);case 69:return e.next=71,this.rank();case 71:return e.next=73,h.a.setItem("__Walle_Stock_Bot_Strategy",{strategy:this.strategy,date:t});case 73:e.next=78;break;case 75:e.prev=75,e.t2=e["catch"](0),console.warn("#Recent# load exception: ",e.t2);case 78:return e.next=80,toastr.clear();case 80:case"end":return e.stop()}}),e,this,[[0,75],[20,57,61,69],[27,40,44,52],[45,,47,51],[62,,64,68]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"rank",value:function(){var e=Object(s["a"])(c.a.mark((function e(){var t,n,r,s,i,o,u,l,f,d,h,p,v=this;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in t=[],this.strategy)for(r=n.split("-"),s=Object(a["a"])(r,2),i=s[0],o=s[1],u=Object.keys(this.strategy[n]),l=0,f=u;l<f.length;l++)d=f[l],h=this.changeOfList(i,o,d),t.push({time:i,vtype:o,listname:d,change:h});p=t.sort((function(e,t){return t.change-e.change})),p.forEach((function(e,t){var n=e.time,a=e.vtype,r=e.listname,c=(e.change,"".concat(n,"-").concat(a));v.strategy[c][r].rank=t}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"calc",value:function(){var e=Object(s["a"])(c.a.mark((function e(t,n){var a,r,s,i,o,u,f,d,h,v,b,y=this;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=l["a"].today(),r="".concat(t,"-").concat(n),e.prev=2,s=this.listnames(t),!this.strategy[r]){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,p.iterate((function(e,t){try{if(a===t)return;var n=!0,c=!1,i=void 0;try{for(var o,u=s[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var l=o.value,f=e[r].change[l][0],d=e[r].change[l].slice(-2,-1)[0];y.recent[r]||(y.recent[r]={}),y.recent[r][l]||(y.recent[r][l]={date:[],open:[],close:[]}),y.recent[r][l].date.push(t),y.recent[r][l].open.push(+d),y.recent[r][l].close.push(+f)}}catch(h){c=!0,i=h}finally{try{n||null==u["return"]||u["return"]()}finally{if(c)throw i}}}catch(p){}}));case 8:i=!0,o=!1,u=void 0,e.prev=11,f=s[Symbol.iterator]();case 13:if(i=(d=f.next()).done){e.next=24;break}return h=d.value,v=this.recent[r][h],e.next=18,this.analyse("".concat(t,"-").concat(n,"-").concat(h),v);case 18:b=e.sent,this.strategy[r]||(this.strategy[r]={}),this.strategy[r][h]={strategy:b,rank:void 0};case 21:i=!0,e.next=13;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e["catch"](11),o=!0,u=e.t0;case 30:e.prev=30,e.prev=31,i||null==f["return"]||f["return"]();case 33:if(e.prev=33,!o){e.next=36;break}throw u;case 36:return e.finish(33);case 37:return e.finish(30);case 38:e.next=42;break;case 40:e.prev=40,e.t1=e["catch"](2);case 42:case"end":return e.stop()}}),e,this,[[2,40],[11,26,30,38],[31,,33,37]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"changeOfList",value:function(e,t,n){try{var a="".concat(e,"-").concat(t),r=this.strategy[a][n]["strategy"]["daily-close-profit"];return r.slice(-1)[0]}catch(c){return 0}}},{key:"listStrategyOf",value:function(e,t,n){var a={"daily-open-profit":[],"daily-close-profit":[],"daily-open-ptcchange":[],"daily-close-ptcchange":[]};try{var r="".concat(e,"-").concat(t);return this.strategy[r][n]["strategy"]}catch(c){return a}}},{key:"listRankOf",value:function(e,t,n){try{var a="".concat(e,"-").concat(t);return this.strategy[a][n]["rank"]+1}catch(r){return""}}},{key:"listChangesOf",value:function(){var e=Object(s["a"])(c.a.mark((function e(t,n){var a,r,s,i,o,u,l,f,d;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.calc(t,n);case 3:for(a=this.listnames(t),r=[],s=!0,i=!1,o=void 0,e.prev=8,u=a[Symbol.iterator]();!(s=(l=u.next()).done);s=!0)f=l.value,d=this.changeOfList(t,n,f),r.push({name:f,change:d});e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](8),i=!0,o=e.t0;case 16:e.prev=16,e.prev=17,s||null==u["return"]||u["return"]();case 19:if(e.prev=19,!i){e.next=22;break}throw o;case 22:return e.finish(19);case 23:return e.finish(16);case 24:return e.abrupt("return",r);case 27:return e.prev=27,e.t1=e["catch"](0),e.abrupt("return",[]);case 30:case"end":return e.stop()}}),e,this,[[0,27],[8,12,16,24],[17,,19,23]])})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=new v},cad9:function(e,t,n){"use strict";var a=n("5379"),r=n.n(a);r.a},ed3d:function(e,t,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("4160"),n("caad"),n("b0c0"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var a=n("a34a"),r=n.n(a),c=n("c964"),s=(n("96cf"),n("276c")),i=n("e954"),o=n("fc11"),u=n("440a"),l=n("a002"),f=n.n(l),d=(n("c1df"),f.a.createInstance({name:"trace",driver:f.a.INDEXEDDB})),h=function(){function e(){Object(s["a"])(this,e),Object(o["a"])(this,"today",{}),Object(o["a"])(this,"lastday",{}),Object(o["a"])(this,"last2day",{}),Object(o["a"])(this,"callback",{}),this.listen()}return Object(i["a"])(e,[{key:"listen",value:function(){var e=Object(c["a"])(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.addEventListener("__Walle_Stock_Daily_Trace_Event",function(){var e=Object(c["a"])(r.a.mark((function e(n){var a,c,s,i,o;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=n.detail,c=a.name,s=a.change,i=a.trace,o=a.capture,t.today[c]||(t.today[c]={}),t.today[c].change=s,t.today[c].trace=i,t.today[c].capture=o,t.fireUpdateCallback(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"registerUpdateCallback",value:function(e,t){this.callback[e]=t}},{key:"unregisterUpdateCallback",value:function(e){delete this.callback[e]}},{key:"fireUpdateCallback",value:function(e){for(var t in this.callback)this.callback[t](e)}},{key:"load",value:function(){var e=Object(c["a"])(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.lastdayTraceRecord();case 2:return e.next=4,this.todayTraceRecord();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"lastdayTraceRecord",value:function(){var e=Object(c["a"])(r.a.mark((function e(){var t,n,a,c;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u["a"].last(),e.next=3,d.getItem(t);case 3:return n=e.sent,n&&(this.lastday=n),a=u["a"].last(2),e.next=8,d.getItem(a);case 8:c=e.sent,c&&(this.last2day=c);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"todayTraceRecord",value:function(){var e=Object(c["a"])(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u["a"].today(),e.next=3,d.getItem(t);case 3:n=e.sent,n&&(this.today=n);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"changeOfList",value:function(e,t,n){try{var a="".concat(e,"-").concat(t),r=this.today[a].change[n];return r[0]}catch(c){return 0}}},{key:"changesOfList",value:function(e,t,n){try{var a="".concat(e,"-").concat(t),r=this.today[a].change[n];if(a="t0-".concat(e,"-").concat(t),this.lastday[a]){var c=this.lastday[a].change[n];return[].concat(r,c)}return[].concat(r)}catch(s){return[]}}},{key:"formatedChangesOfList",value:function(e,t,n){var a={time:[],value:[]};try{var r=this.changesOfList(e,t,n);return r.forEach((function(e,t){t%2===0?a.value.unshift(e):a.time.unshift(e)})),a}catch(c){return a}}},{key:"captureOfList",value:function(e,t,n){try{var a="".concat(e,"-").concat(t);return this.today[a].capture[n]}catch(r){return{}}}},{key:"traceOfList",value:function(e,t,n){try{var a="".concat(e,"-").concat(t);return this.today[a].trace[n]}catch(r){return{}}}},{key:"listNamesOf",value:function(e,t){try{var n;return n=e.includes("interval")?window.__Walle_Stock_Define.getIntervalNames():window.__Walle_Stock_Define.getNormalNames(),n}catch(a){return[]}}},{key:"listChangesOf",value:function(e,t){try{var n=this.listNamesOf(e,t),a=[],r=!0,c=!1,s=void 0;try{for(var i,o=n[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var u=i.value,l=this.changeOfList(e,t,u);a.push({name:u,change:l})}}catch(f){c=!0,s=f}finally{try{r||null==o["return"]||o["return"]()}finally{if(c)throw s}}return a}catch(d){return[]}}},{key:"last2daysChangesOfList",value:function(e,t,n){var a=u["a"].last(),r=u["a"].last(2);try{var c="".concat(e,"-").concat(t).replace("t0-",""),s=this.lastday[c].change[n][0],i=this.last2day[c].change[n][0];return[a,s,r,i]}catch(o){return[a,void 0,r,void 0]}}}]),e}();t["a"]=new h}});