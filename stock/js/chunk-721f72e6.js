(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-721f72e6","chunk-5be93be4","chunk-6fd25288"],{"07ac":function(t,e,a){var r=a("23e7"),n=a("6f53").values;r({target:"Object",stat:!0},{values:function(t){return n(t)}})},"30c5":function(t,e,a){"use strict";var r=a("715e"),n=a.n(r);n.a},"5b0d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return this.$props.display?r("div",{staticClass:"mask",class:{"background-glass":!1!==t.$props.glass},style:{"z-index":t.$props.zindex||9999999,background:t.$props.background+" !important"}},[t._t("default",[r("img",{attrs:{alt:"Walle Stock Market",src:a("edad")}})])],2):t._e()},n=[],o={props:["display","glass","zindex","background"]},s=o,c=(a("86e2"),a("2877")),i=Object(c["a"])(s,r,n,!1,null,"667e3519",null);e["default"]=i.exports},6067:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"board",staticClass:"board background-glass",on:{click:function(t){t.stopPropagation()}}},[t.$props.options.title?a("p",{staticClass:"title"},[t._v(" "+t._s(t.$props.options.title)+" "),t.$props.options.simple?a("i",{staticClass:"kanban cursor-pointer fa fa-bar-chart",attrs:{title:"股票看板"},on:{click:t.kanban}}):t._e()]):t._e(),Object.values(this.trace).length&&!t.$props.options.simple?a("div",[a("br"),a("p",[t._v(" 跟踪 "),a("span",{staticClass:"profit cursor-pointer",class:{red:t.profit>=0,green:t.profit<0},attrs:{title:t.tooltip()}},[t._v("("+t._s(t.profit)+"%)")]),a("i",{staticClass:"refresh cursor-pointer fa fa-refresh",attrs:{title:"更新股票数据 用于榜单长期持有收益跟踪分析 亏损扭转情况和持续盈利情况"},on:{click:t.update}})]),a("table",{staticClass:"table"},[a("thead",[a("tr",t._l(t.translator,(function(e,r){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(r,!0),expression:"isShowOptionField(key, true)"}],key:r,attrs:{scope:"col",title:"以"+e+"倒序排序"},on:{click:function(e){return t.sort(r,!1)}}},[t._v(t._s(t.translator[r]))])})),0)]),a("tbody",t._l(t.sortedTrace,(function(e){return a("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(r,n){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(n,!0),expression:"isShowOptionField(key, true)"}],key:n,staticClass:"cursor-default",class:{animated:"rate"===n&&e.change<0&&e.rate<0,infinite:!0,shake:!0,slower:!0},attrs:{scope:"row"}},["code"===n?a("span",[a("a",{attrs:{href:t.urlOfNetinflow(e.code,e.name),target:"_blank"}},[t._v(t._s(e.code))]),t.isT0List?a("i",{staticClass:"cursor-pointer",attrs:{title:"从榜单中移除此股票",onclick:"this.style.display = 'none'; window.dispatchEvent(new CustomEvent('onIgnoreStockEvent', { detail: { time:'"+t.time+"', vtype:'"+t.vtype+"', listname:'"+t.listname+"', code:'"+e.code+"', name:'"+e.name+"' }}))"}},[t._v(" (x)")]):t._e()]):"name"===n?a("span",[a("a",{attrs:{href:t.urlOfQuote(e.code,e.name),target:"_blank"}},[t._v(t._s(e.name)+" ")]),t.markets&&t.markets.bondOfStock(e.code)?a("a",{attrs:{href:t.urlOfQuote(t.markets.bondOfStock(e.code)),target:"_blank",title:"查看可转债行情 "+t.markets.bondOfStock(e.code)}},[a("i",{staticClass:"fa fa-money"})]):t._e()]):"change"===n?a("span",{staticClass:"cursor-pointer"},[a("span",{staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"今日涨跌幅"}},[t._v(t._s(e[n]))]),t._v(" / "),a("span",{class:t.calcChange(e.code)>=0?"red":"green",staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"两日涨跌幅"}},[t._v(t._s(t.calcChange(e.code)))])]):a("span","prevclose"===n?[t.calcPrevChange(e.code)>=9.8?a("i",{attrs:{title:"(• 表示昨日涨停)"}},[t._v("•")]):t._e(),t._v(" "+t._s(e[n])+" ")]:[t._v(t._s(t.toMoney(n,e[n])))])])})),0)})),0)])]):t._e(),a("div",[t.$props.options.simple?t._e():a("br"),t.$props.options.simple?t._e():a("p",[t._v(" 捕获 "),a("i",{staticClass:"kanban cursor-pointer fa fa-bar-chart",attrs:{title:"股票看板"},on:{click:t.kanban}})]),a("table",{staticClass:"table"},[a("thead",[a("tr",t._l(t.translator,(function(e,r){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(r),expression:"isShowOptionField(key)"}],key:r,attrs:{scope:"col",title:"以"+e+"倒序排序"},on:{click:function(e){return t.sort(r,!0)}}},[t._v(t._s(t.translator[r]))])})),0)]),a("tbody",t._l(t.sortedCapture,(function(e){return a("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(r,n){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(n),expression:"isShowOptionField(key)"}],key:n,staticClass:"cursor-default",attrs:{scope:"row"}},[a("span","code"===n?[a("a",{attrs:{href:t.urlOfNetinflow(e.code,e.name),target:"_blank"}},[t._v(t._s(e.code))]),e.code.startsWith("1")?t._e():a("i",{staticClass:"cursor-pointer",attrs:{title:"查看股票基因数据",onclick:"window.dispatchEvent(new CustomEvent('onShowGeneEvent', { detail: { code: '"+e.code+"', vtype:'"+t.vtype+"' }}))"}},[t._v(" (i)")])]:"name"===n?[a("a",{attrs:{href:t.urlOfQuote(e.code,e.name),target:"_blank"}},[t._v(t._s(e.name)+" ")]),t.markets&&t.markets.bondOfStock(e.code)?a("a",{attrs:{href:t.urlOfQuote(t.markets.bondOfStock(e.code)),target:"_blank",title:"查看可转债行情 "+t.markets.bondOfStock(e.code)}},[a("i",{staticClass:"fa fa-money"})]):t._e()]:[t._v(t._s(t.toMoney(n,e[n])))])])})),0)})),0)]),a("br")])])},n=[],o=(a("99af"),a("caad"),a("fb6a"),a("4e82"),a("b0c0"),a("b680"),a("b64b"),a("07ac"),a("ac1f"),a("2532"),a("5319"),a("a34a")),s=a.n(o),c=(a("96cf"),a("1da1")),i={props:["time","vtype","listname","captureList","traceList","options"],data:function(){return{translator:{code:"股票代码",name:"股票简称",price:"股价",change:"涨跌幅",rate:"主力净占比",prevclose:"昨收",turnover:"换手率",qrr:"量比",volume:"成交量",inflow:"主力流入资金",outflow:"主力流出资金",netinflow:"主力净流入资金",hot:"热度",block:"板块",times:"连板天数(昨日)"},trace:{},capture:{},sortedTrace:[],sortedCapture:[],profit:0,potential:0,intervalId:-1,listener:function(){},markets:window.__Walle_Stock_Markets}},computed:{isT0List:function(){return this.$props.time.includes("t0")}},watch:{"$props.options":function(t,e){this.$props.options.show?console.log("#Stock-Board# show start auto-update"):(this.stopAutoUpdate(),console.log("#Stock-Board# hidden disable auto-update"))}},created:function(){var t=this;return Object(c["a"])(s.a.mark((function e(){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.trace=t.$props.traceList,t.capture=t.$props.captureList,t.sortedTrace=t.trace?Object.values(t.trace):[],t.sortedCapture=Object.values(t.capture),e.next=6,t.calc();case 6:t.listener=function(){return t.listen.apply(t,arguments)},window.addEventListener("__Walle_Stock_Daily_Trace_Event",t.listener),t.startAutoUpdate();case 9:case"end":return e.stop()}}),e)})))()},destroyed:function(){window.removeEventListener("__Walle_Stock_Daily_Trace_Event",this.listener),this.stopAutoUpdate()},methods:{tooltip:function(){var t=" 达成涨幅 ".concat(this.profit,"% 潜在涨幅 ").concat(this.potential,"% ");return this.$props.time&&(t="".concat(this.$props.time,"-").concat(this.$props.vtype,"-").concat(this.$props.listname)+t),t},listen:function(t){var e=this,a=t.detail;return Object(c["a"])(s.a.mark((function t(){var r,n,o,c;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$props.options.update){t.next=2;break}return t.abrupt("return");case 2:if(r=a.name,a.change,n=a.trace,o=a.capture,c=e.$props.time+"-"+e.$props.vtype,c!==r){t.next=10;break}return e.trace=n[e.$props.listname],e.capture=o[e.$props.listname],t.next=9,e.calc();case 9:console.log("#Stock-Board# event update ".concat(r," ..."));case 10:case"end":return t.stop()}}),t)})))()},isShowOptionField:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var a=["hot","block","times"];if(e&&a.includes(t))return!1;var r=Object.values(this.$props.captureList)[0];return void 0!==r[t]}catch(n){return!1}},toMoney:function(t,e){return["volume","inflow","outflow","netinflow"].includes(t)&&(e=Math.abs(+e)>=1e8?(+e/1e8).toFixed(2)+"亿":(+e/1e4).toFixed(2)+"万"),e},urlOfQuote:function(t,e){t=t.replace("A","");var a={6:"sh",0:"sz",3:"sz",9:"sh",2:"sz"},r={11:"sh",12:"sz"},n=a[t[0]];return"1"===t[0]&&(n=r[t.slice(0,2)]),t="".concat(n).concat(t),"上证指数"===e?"http://quote.eastmoney.com/zs000001.html":"http://quote.eastmoney.com/".concat(t,".html")},urlOfNetinflow:function(t,e){return t=t.replace("A",""),"上证指数"===e?"http://data.eastmoney.com/zjlx/zs000001.html":"http://data.eastmoney.com/zjlx/".concat(t,".html")},kanban:function(){var t=this;return Object(c["a"])(s.a.mark((function e(){var a,r,n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in a=[],t.capture)a.push(r.replace("A",""));n=t.$props.options.title||"".concat(t.$props.time,"-").concat(t.$props.vtype,"-").concat(t.$props.listname),window.dispatchEvent(new CustomEvent("onOpenKanbanEvent",{detail:{title:n,stocks:a,capture:t.capture,trace:t.trace}}));case 4:case"end":return e.stop()}}),e)})))()},update:function(){var t=this;return Object(c["a"])(s.a.mark((function e(){var a;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,window.__Walle_Stock_Crawler){e.next=3;break}return e.abrupt("return");case 3:return a=Object.keys(t.trace),e.next=6,window.__Walle_Stock_Crawler.captureStocks(a);case 6:return t.trace=e.sent,t.sortedTrace=t.trace?Object.values(t.trace):[],e.next=10,t.calc();case 10:console.log("#Stock-Board# update ",t.trace),e.next=15;break;case 13:e.prev=13,e.t0=e["catch"](0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})))()},sort:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(c["a"])(s.a.mark((function r(){var n,o;return s.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:try{n=a?e.capture:e.trace,o=Object.values(n).sort((function(e,a){return+a[t]-e[t]})),a?e.sortedCapture=o:e.sortedTrace=o}catch(s){}case 1:case"end":return r.stop()}}),r)})))()},calc:function(){var t=this;return Object(c["a"])(s.a.mark((function e(){var a,r,n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.trace){e.next=3;break}return e.abrupt("return");case 3:for(n in a=0,r=0,t.trace)a+=t.calcChange(n),r+=t.calcPotentialChange(n);t.profit=+a.toFixed(2),t.potential=+r.toFixed(2),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.warn("#Stock-Board# calc",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},calcChange:function(t){var e=this.capture[t].price,a=this.trace[t].price;return 0===a?+((this.trace[t].prevclose-this.capture[t].price)/this.capture[t].price*100).toFixed(2):+((a-e)/e*100).toFixed(2)},calcPotentialChange:function(t){return 0===this.trace[t].price?0:+(10-this.trace[t].change).toFixed(2)},calcPrevChange:function(t){var e=this.capture[t].prevclose,a=this.trace[t].prevclose;return+((a-e)/e*100).toFixed(2)},stopAutoUpdate:function(){clearInterval(this.intervalId),console.log("#Stock-Board# auto-update stoped")},startAutoUpdate:function(){var t=this;return Object(c["a"])(s.a.mark((function e(){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.__Walle_Stock_Cron){e.next=2;break}return e.abrupt("return");case 2:if(t.$props.options.update){e.next=5;break}return console.log("#Stock-Board# force disable auto-update"),e.abrupt("return");case 5:return console.log("#Stock-Board# auto-update start"),e.next=8,window.__Walle_Stock_Cron.interval(Object(c["a"])(s.a.mark((function e(){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.update();case 1:case"end":return e.stop()}}),e)}))),null,30,"stock-board");case 8:t.intervalId=e.sent;case 9:case"end":return e.stop()}}),e)})))()}}},l=i,u=(a("30c5"),a("2877")),p=Object(u["a"])(l,r,n,!1,null,"04ee4ab7",null);e["default"]=p.exports},"6f53":function(t,e,a){var r=a("83ab"),n=a("df75"),o=a("fc6a"),s=a("d1e7").f,c=function(t){return function(e){var a,c=o(e),i=n(c),l=i.length,u=0,p=[];while(l>u)a=i[u++],r&&!s.call(c,a)||p.push(t?[a,c[a]]:c[a]);return p}};t.exports={entries:c(!0),values:c(!1)}},"715e":function(t,e,a){},"86e2":function(t,e,a){"use strict";var r=a("c687"),n=a.n(r);n.a},a1e1:function(t,e,a){"use strict";var r=a("d4ec"),n=a("bee2"),o=a("ade3"),s=a("a026"),c=a("6067"),i=a("5b0d"),l=function(){function t(){Object(r["a"])(this,t),Object(o["a"])(this,"vm",void 0)}return Object(n["a"])(t,[{key:"show",value:function(t,e,a,r,n,o){var l=this,u={update:!0,show:!0,title:"",simple:!1};o=Object.assign({},u,o),this.hide(),this.vm=new s["a"]({components:{"ui-mask":i["default"],"ui-board":c["default"]},template:'\n        <ui-mask @click.native=\'toggle\' :display="options.show" :glass="false" :zindex="100001">\n          <ui-board :time="time" :vtype="vtype" :listname="listname" :capture-list="captureList" :trace-list="traceList" :options="options"></ui-board>\n        </ui-mask>  \n      ',data:function(){return{time:t,vtype:e,listname:a,captureList:r,traceList:n,options:o}},methods:{toggle:function(){this.options=Object.assign({},o,{show:!this.options.show}),!this.options.show&&l.hide()}}}).$mount();var p=document.querySelector("#walle-app");p.scrollTo(0,0),document.querySelector("#walle-app").appendChild(this.vm.$el)}},{key:"hide",value:function(){this.vm&&this.vm.$el&&document.querySelector("#walle-app").removeChild(this.vm.$el),this.vm=null}}]),t}();e["a"]=new l},c687:function(t,e,a){},edad:function(t,e,a){t.exports=a.p+"img/logo.jpg"}}]);