(function(t){function e(e){for(var a,r,o=e[0],i=e[1],u=e[2],l=0,f=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==c[o]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={index:0},c={index:0},s=[];function o(t){return i.p+"js/"+({}[t]||t)+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-022dbb25":1,"chunk-35e4053c":1,"chunk-4a02497e":1,"chunk-5cac0c6e":1,"chunk-6a1bf014":1,"chunk-768b45d5":1,"chunk-77ffbfa4":1,"chunk-afa3a266":1,"chunk-f76ca4ea":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+".css",c=i.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===a||l===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||c,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}c[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("5269")},"09f8":function(t,e,n){"use strict";n("99af"),n("fb6a"),n("d3b7"),n("2ca0");var a=n("a34a"),r=n.n(a),c=n("c964"),s=(n("96cf"),{host:{prod:"https://walle.neil-pan.com/stock",dev:"http://localhost:8080"}});function o(t){var e=s.host.prod;if(t.startsWith("./")){var n=t.slice(1);t="".concat(e).concat(n)}return t}function i(t,e){return u.apply(this,arguments)}function u(){return u=Object(c["a"])(r.a.mark((function t(e,n){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var a=document.createElement("script");a.type="text/javascript",a.src=o(e),a.onload=function(){t(),n&&n()},document.body.appendChild(a)})));case 1:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function l(t,e){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(r.a.mark((function t(e,n){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a.setAttribute("href",o(e)),a.onload=function(){t(),n&&n()},document.head.appendChild(a)})));case 1:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return l}))},"440a":function(t,e,n){"use strict";n("caad");var a=n("276c"),r=n("e954"),c=n("c1df"),s=n.n(c),o=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,[{key:"today",value:function(){return s()().format("YYYYMMDD")}},{key:"last",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=0,n=1;;n++){var a=s()().subtract(n,"days");if(![6,0].includes(+a.day())&&(e++,e===t))return a.format("YYYYMMDD")}}}]),t}();e["a"]=new o},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=c,t.exports=r,r.id="4678"},5269:function(t,e,n){"use strict";n.r(e);n("d3b7");var a=n("a34a"),r=n.n(a),c=n("c964"),s=(n("96cf"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a026")),o=n("8c4f");s["a"].use(o["a"]);var i=new o["a"]({routes:[{path:"/",redirect:"/splash"},{path:"/splash",component:function(){return n.e("chunk-4a02497e").then(n.bind(null,"ae9b"))}},{path:"/market",component:function(){return n.e("chunk-77ffbfa4").then(n.bind(null,"646c"))},children:[{path:"today",alias:"",component:function(){return n.e("chunk-768b45d5").then(n.bind(null,"575e"))}},{path:"recent",component:function(){return n.e("chunk-7632e739").then(n.bind(null,"731f"))}},{path:"history",component:function(){return n.e("chunk-acd97fdc").then(n.bind(null,"9647"))}}]}]}),u=i,l=(n("caad"),n("2532"),n("4795"),n("61b2")),f=n("ed3d"),d=(n("99af"),n("fb6a"),n("b0c0"),n("276c")),h=n("e954"),p=function(){function t(){Object(d["a"])(this,t)}return Object(h["a"])(t,[{key:"listen",value:function(){var t=this;window.addEventListener("onIgnoreStockEvent",(function(e){var n=e.detail;t.onIgnoreStockEvent(n)}))}},{key:"onIgnoreStockEvent",value:function(t){var e=t.el,n=t.time,a=t.vtype,r=t.listname,c=t.code,s=t.name,o=window.confirm("Ignore Stock ".concat(c," ").concat(s,"?"));o&&(n=n.slice(3),console.log("#__Walle_Stock_Controller# ignore ",n,a,r,c,s),window.__Walle_Stock_Controller.ignore(n,a,r,c),e.parentNode.parentNode.innerHTML="")}}]),t}(),b=new p,v=n("fc11"),m=n("1157"),y=n.n(m),j=function(){return n.e("chunk-022dbb25").then(n.bind(null,"5b0d"))},k=function(){return n.e("chunk-35e4053c").then(n.bind(null,"3872"))},w=function(){return Promise.resolve().then(n.bind(null,"6067"))},g=function(){return n.e("chunk-6a1bf014").then(n.bind(null,"8d50"))},O=function(){return n.e("chunk-5cac0c6e").then(n.bind(null,"d544"))},x=function(){return n.e("chunk-afa3a266").then(n.bind(null,"d9f1"))};s["a"].component("ui-mask",j),s["a"].component("ui-gene",k),s["a"].component("ui-board",w),s["a"].component("ui-chart",g),s["a"].component("ui-nav",O),s["a"].component("ui-nav-item",x);var _=function(){function t(){var e=this;Object(d["a"])(this,t),Object(v["a"])(this,"mask",void 0),this.mask=new s["a"]({components:{"ui-mask":j},template:'<ui-mask :display="display"></ui-mask>',data:function(){return{display:!1}}}).$mount(),document.querySelector("body").append(this.mask.$el),y()(document).keydown((function(t){t.ctrlKey&&"KeyL"===t.code&&(e.toggle(),t.preventDefault())}))}return Object(h["a"])(t,[{key:"show",value:function(){this.mask.$data.display=!0}},{key:"hide",value:function(){this.mask.$data.display=!1}},{key:"toggle",value:function(){this.mask.$data.display=!this.mask.$data.display}}]),t}(),L=new _,C=n("6944"),E=(n("09f8"),n("c1df")),S=n.n(E);function z(){var t=S()().format("YYYYMMDD");setInterval((function(){var e=S()().format("YYYYMMDD");t!==e&&location.reload()}),36e5)}function T(){return M.apply(this,arguments)}function M(){return M=Object(c["a"])(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e("chunk-f76ca4ea").then(n.bind(null,"1d50"));case 2:case"end":return t.stop()}}),t)}))),M.apply(this,arguments)}function D(){return P.apply(this,arguments)}function P(){return P=Object(c["a"])(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(navigator.userAgent.includes("ostma")){t.next=2;break}return t.abrupt("return");case 2:return L.show(),z(),t.next=6,T();case 6:return t.next=8,l["a"].load();case 8:return t.next=10,f["a"].load();case 10:return t.next=12,b.listen();case 12:return t.next=14,C["a"].load();case 14:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"walle-app"}},[n("router-view")],1)},N=[],Y={name:"app"},A=Y,$=(n("cad9"),n("2877")),H=Object($["a"])(A,I,N,!1,null,null,null),q=H.exports;n("ac1f"),n("5319");function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"walle-app";document.querySelector("#"+t)&&document.querySelector("#"+t).remove();var e=document.createElement("div");e.setAttribute("id",t);var n=document.querySelector("head"),a=document.querySelector("body"),r=document.createElement("style");return r.setAttribute("type","text/css"),r.innerText="\n    /* 禁止显示原网页内容滚动条 */\n    html,body {\n      overflow: hidden !important;\n    }\n\n    /* APP 影子容器 */\n    #".concat(t," {\n      position: fixed;\n      top: 0;\n      left: 0;\n      z-index: 999;\n      width: 100%;\n      height: 100%;\n      overflow-y: scroll;\n      background: #fff;\n    }\n  ").replace(/[\r\n\s]/g,""),n.appendChild(r),a.appendChild(e),e}s["a"].config.productionTip=!1;var B=new s["a"]({router:u,render:function(t){return t(q)}});Object(c["a"])(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,D();case 2:B.$mount(R("walle-app"));case 3:case"end":return t.stop()}}),t)})))();e["default"]=B},5379:function(t,e,n){},6067:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},[n("br"),n("p",[t._v("跟踪")]),n("table",{staticClass:"table"},[n("thead",[n("tr",t._l(t.translator,(function(e,a){return n("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===a&&!t.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:a,attrs:{scope:"col"}},[t._v(t._s(t.translator[a]))])})),0)]),n("tbody",t._l(t.traceList,(function(e){return n("tr",{key:e.code},t._l(t.translator,(function(a,r){return n("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===r&&!t.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:r,staticClass:"cursor-default",attrs:{scope:"row"}},[t._v(" "+t._s(t.toMoney(r,e[r]))+" "),t.isT0List&&"code"===r?n("i",{staticClass:"cursor-pointer",attrs:{title:"从榜单中移除此股票",onclick:"window.dispatchEvent(new CustomEvent('onIgnoreStockEvent', { detail: { el: this , time:'"+t.time+"', vtype:'"+t.vtype+"', listname:'"+t.listname+"', code:'"+e.code+"', name:'"+e.name+"' }}))"}},[t._v("(x)")]):t._e()])})),0)})),0)]),n("br"),n("p",[t._v("捕获")]),n("table",{staticClass:"table"},[n("thead",[n("tr",t._l(t.translator,(function(e,a){return n("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===a&&!t.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:a,attrs:{scope:"col"}},[t._v(t._s(t.translator[a]))])})),0)]),n("tbody",t._l(t.captureList,(function(e){return n("tr",{key:e.code},t._l(t.translator,(function(a,r){return n("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===r&&!t.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:r,staticClass:"cursor-default",attrs:{scope:"row"}},[t._v(" "+t._s(t.toMoney(r,e[r]))+" "),"code"===r?n("i",{staticClass:"cursor-pointer",attrs:{title:"查看股票基因数据",onclick:"window.dispatchEvent(new CustomEvent('onShowGeneEvent', { detail: { code: '"+e.code+"', vtype:'"+t.vtype+"' }}))"}},[t._v("(i)")]):t._e()])})),0)})),0)]),n("br")])},r=[],c=(n("caad"),n("b680"),n("07ac"),n("2532"),{props:["time","vtype","listname","captureList","traceList"],data:function(){return{translator:{code:"股票代码",name:"股票简称",price:"股价",change:"涨跌幅",rate:"主力净占比",open:"开盘价",turnover:"换手率",qrr:"量比",volume:"成交量",inflow:"主力流入资金",outflow:"主力流出资金",netinflow:"主力净流入资金",hot:"热度"}}},computed:{isHotList:function(){try{var t=Object.values(this.$props.captureList)[0];return!!t.hot}catch(e){}return!1},isT0List:function(){return this.$props.time.includes("t0")}},methods:{toMoney:function(t,e){return["inflow","outflow","netinflow"].includes(t)&&(e=Math.abs(+e)>=1e8?(+e/1e8).toFixed(2)+"亿":(+e/1e4).toFixed(2)+"万"),e}}}),s=c,o=(n("8d92"),n("2877")),i=Object(o["a"])(s,a,r,!1,null,"912b9478",null);e["default"]=i.exports},"61b2":function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("d3b7"),n("3ca3"),n("ddb0");var a=n("a34a"),r=n.n(a),c=n("c964"),s=(n("96cf"),n("276c")),o=n("e954"),i=n("fc11"),u=n("a002"),l=n.n(u),f=function(){function t(){Object(s["a"])(this,t),Object(i["a"])(this,"config",{}),Object(i["a"])(this,"isInited",!1),Object(i["a"])(this,"host",{})}return Object(o["a"])(t,[{key:"load",value:function(){var t=Object(c["a"])(r.a.mark((function t(){var e;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.getItem("__Walle_Stock_Bot_Config");case 2:e=t.sent,e&&(this.config=e,this.host=e.host,this.isInited=!0);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getRule",value:function(t,e){var n=this.getRules(),a=!0,r=!1,c=void 0;try{for(var s,o=n[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var i=s.value;if(i.capture===t){if(!e)return i;if(e===i.date)return i}}}catch(u){r=!0,c=u}finally{try{a||null==o["return"]||o["return"]()}finally{if(r)throw c}}}},{key:"getValidators",value:function(){return this.config.validators||[]}},{key:"getCaptureRules",value:function(){return this.config.captures||[]}},{key:"getIntervalRules",value:function(){return this.config.intervals||[]}},{key:"getTempRules",value:function(){return this.config.temps||[]}},{key:"getRules",value:function(){return[].concat(this.config.captures||[],this.config.intervals||[],this.config.temps||[])}}]),t}();e["a"]=new f},6944:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return p}));n("d3b7");var a,r=n("a34a"),c=n.n(r),s=n("c964"),o=(n("96cf"),n("a026")),i=n("09f8"),u=n("6067");function l(){return f.apply(this,arguments)}function f(){return f=Object(s["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["b"])("./popper/popper.css");case 2:return t.next=4,Object(i["a"])("./popper/popper.min.js");case 4:return t.next=6,Object(i["a"])("./popper/tooltip.min.js");case 6:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function d(t,e){a&&a.dispose(),a=new window.Tooltip(t,{title:e,html:!0,trigger:"click",closeOnClickOutside:!0,popperOptions:{placement:"bottom",modifiers:{preventOverflow:{boundariesElement:document.querySelector("#walle-app")}}}})}function h(t){a&&a.dispose(),a=null}function p(t,e,n,a,r,c){return b.apply(this,arguments)}function b(){return b=Object(s["a"])(c.a.mark((function t(e,n,a,r,s,i){var l,f;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:l=new o["a"]({components:{"ui-board":u["default"]},template:'<ui-board :time="time" :vtype="vtype" :listname="listname" :capture-list="captureList" :trace-list="traceList"></ui-board>',data:function(){return{time:n,vtype:a,listname:r,captureList:s,traceList:i}}}).$mount(),f=l.$el.outerHTML,d(e,f);case 3:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return m=Object(s["a"])(c.a.mark((function t(e){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:h(e);case 1:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}e["a"]={load:l,showPopper:d,hidePopper:h,showBoard:p,hideBoard:v}},"8d92":function(t,e,n){"use strict";var a=n("cbaa"),r=n.n(a);r.a},cad9:function(t,e,n){"use strict";var a=n("5379"),r=n.n(a);r.a},cbaa:function(t,e,n){},ed3d:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("4160"),n("fb6a"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0");var a=n("a34a"),r=n.n(a),c=n("c964"),s=(n("96cf"),n("276c")),o=n("e954"),i=n("fc11"),u=n("440a"),l=n("a002"),f=n.n(l),d=f.a.createInstance({name:"trace",driver:f.a.INDEXEDDB}),h=function(){function t(){Object(s["a"])(this,t),Object(i["a"])(this,"today",{}),Object(i["a"])(this,"lastday",{}),Object(i["a"])(this,"last2day",{}),Object(i["a"])(this,"callback",{}),this.listen()}return Object(o["a"])(t,[{key:"listen",value:function(){var t=Object(c["a"])(r.a.mark((function t(){var e=this;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.addEventListener("__Walle_Stock_Daily_Trace_Event",function(){var t=Object(c["a"])(r.a.mark((function t(n){var a;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=n.detail,t.next=3,e.load();case 3:e.fireUpdateCallback(a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"registerUpdateCallback",value:function(t,e){this.callback[t]=e}},{key:"unregisterUpdateCallback",value:function(t){delete this.callback[t]}},{key:"fireUpdateCallback",value:function(t){for(var e in this.callback)this.callback[e](t)}},{key:"load",value:function(){var t=Object(c["a"])(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.lastdayTraceRecord();case 2:return t.next=4,this.todayTraceRecord();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"lastdayTraceRecord",value:function(){var t=Object(c["a"])(r.a.mark((function t(){var e,n,a,c;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=u["a"].last(),t.next=3,d.getItem(e);case 3:return n=t.sent,n&&(this.lastday=n),a=u["a"].last(2),t.next=8,d.getItem(a);case 8:c=t.sent,c&&(this.last2day=c);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"todayTraceRecord",value:function(){var t=Object(c["a"])(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=u["a"].today(),t.next=3,d.getItem(e);case 3:n=t.sent,n&&(this.today=n);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"changeOfList",value:function(t,e,n){try{var a="".concat(t,"-").concat(e),r=this.today[a].change[n];return r[0]}catch(c){return 0}}},{key:"changesOfList",value:function(t,e,n){try{var a="".concat(t,"-").concat(e),r=this.today[a].change[n];if(a="t0-".concat(t,"-").concat(e),this.lastday[a]){var c=this.lastday[a].change[n];return[].concat(r,c)}return[].concat(r)}catch(s){return[]}}},{key:"formatedChangesOfList",value:function(t,e,n){var a={time:[],value:[]};try{var r=this.changesOfList(t,e,n);return r.forEach((function(t,e){e%2===0?a.value.unshift(t):a.time.unshift(t)})),a}catch(c){return a}}},{key:"captureOfList",value:function(t,e,n){try{var a="".concat(t,"-").concat(e);return this.today[a].capture[n]}catch(r){return{}}}},{key:"traceOfList",value:function(t,e,n){try{var a="".concat(t,"-").concat(e);return this.today[a].trace[n]}catch(r){return{}}}},{key:"listNamesOf",value:function(t,e){try{for(var n="".concat(t,"-").concat(e),a=this.today[n].capture,r=Object.keys(a),c=[],s=0,o=r;s<o.length;s++){var i=o[s];"上证指数"===i?c.unshift(i):c.push(i)}return c}catch(u){return[]}}},{key:"listChangesOf",value:function(t,e){try{var n=this.listNamesOf(t,e),a=[],r=!0,c=!1,s=void 0;try{for(var o,i=n[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var u=o.value,l=this.changeOfList(t,e,u);a.push({name:u,change:l})}}catch(f){c=!0,s=f}finally{try{r||null==i["return"]||i["return"]()}finally{if(c)throw s}}return a}catch(d){return[]}}},{key:"recentListChangesOf",value:function(){var t=Object(c["a"])(r.a.mark((function t(e,n,a){var c;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c={date:[],open:[],close:[]},t.prev=1,t.next=4,d.iterate((function(t,r){try{var s="".concat(e,"-").concat(n),o=t[s].change[a][0],i=t[s].change[a].slice(-2,-1)[0];c.date.push(r),c.open.push(+i),c.close.push(+o)}catch(u){}}));case 4:return t.abrupt("return",c);case 7:return t.prev=7,t.t0=t["catch"](1),t.abrupt("return",c);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));function e(e,n,a){return t.apply(this,arguments)}return e}()},{key:"last2daysChangesOfList",value:function(t,e,n){var a=u["a"].last(),r=u["a"].last(2);try{var c="".concat(t,"-").concat(e),s=this.lastday[c].change[n][0],o=this.last2day[c].change[n][0];return[a,s,r,o]}catch(i){return[a,void 0,r,void 0]}}}]),t}();e["a"]=new h}});