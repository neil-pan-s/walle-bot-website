(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41821445","chunk-1c93f8c2","chunk-6fd25288"],{"07ac":function(t,e,a){var n=a("23e7"),r=a("6f53").values;n({target:"Object",stat:!0},{values:function(t){return r(t)}})},"5b0d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.$props.display?n("div",{staticClass:"mask",class:{"background-glass":!1!==t.$props.glass},style:{"z-index":t.$props.zindex||9999999,background:t.$props.background+" !important"}},[t._t("default",[n("img",{attrs:{alt:"Walle Stock Market",src:a("edad")}})])],2):t._e()},r=[],s={props:["display","glass","zindex","background"]},o=s,i=(a("86e2"),a("2877")),c=Object(i["a"])(o,n,r,!1,null,"667e3519",null);e["default"]=c.exports},6067:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"board",staticClass:"board background-glass",on:{click:function(t){t.stopPropagation()}}},[t.$props.options.title?a("p",{staticClass:"title"},[t._v(" "+t._s(t.$props.options.title)+" "),t.$props.options.simple?a("i",{staticClass:"kanban cursor-pointer fa fa-bar-chart",attrs:{title:"股票看板"},on:{click:t.kanban}}):t._e()]):t._e(),Object.values(this.trace).length&&!t.$props.options.simple?a("div",[a("br"),a("p",[t._v(" 跟踪 "),a("span",{staticClass:"profit cursor-pointer",class:{red:t.profit>=0,green:t.profit<0},attrs:{title:t.tooltip()}},[t._v("("+t._s(t.profit)+"%)")]),a("i",{staticClass:"refresh cursor-pointer fa fa-refresh",attrs:{title:"更新股票数据 用于榜单长期持有收益跟踪分析 亏损扭转情况和持续盈利情况"},on:{click:t.update}})]),a("table",{staticClass:"table"},[a("thead",[a("tr",t._l(t.translator,(function(e,n){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(n,!0),expression:"isShowOptionField(key, true)"}],key:n,attrs:{scope:"col"}},[t._v(t._s(t.translator[n]))])})),0)]),a("tbody",t._l(t.trace,(function(e,n){return a("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(r,s){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(s,!0),expression:"isShowOptionField(key, true)"}],key:s,staticClass:"cursor-default",class:{animated:"rate"===s&&e.change<0&&e.rate<0,infinite:!0,shake:!0,slower:!0},attrs:{scope:"row"}},["code"===s?a("span",[a("a",{attrs:{href:t.urlOfNetinflow(n,e.name),target:"_blank"}},[t._v(t._s(n))]),t.isT0List?a("i",{staticClass:"cursor-pointer",attrs:{title:"从榜单中移除此股票",onclick:"this.style.display = 'none'; window.dispatchEvent(new CustomEvent('onIgnoreStockEvent', { detail: { time:'"+t.time+"', vtype:'"+t.vtype+"', listname:'"+t.listname+"', code:'"+e.code+"', name:'"+e.name+"' }}))"}},[t._v(" (x)")]):t._e()]):"name"===s?a("span",[a("a",{attrs:{href:t.urlOfQuote(n,e.name),target:"_blank"}},[t._v(t._s(e.name)+" ")]),t.markets&&t.markets.bondOfStock(n)?a("a",{attrs:{href:t.urlOfQuote(t.markets.bondOfStock(n)),target:"_blank",title:"查看可转债行情 "+t.markets.bondOfStock(n)}},[a("i",{staticClass:"fa fa-money"})]):t._e()]):"change"===s?a("span",{staticClass:"cursor-pointer"},[a("span",{staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"今日涨跌幅"}},[t._v(t._s(e[s]))]),t._v(" / "),a("span",{class:t.calcChange(n)>=0?"red":"green",staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"两日涨跌幅"}},[t._v(t._s(t.calcChange(n)))])]):a("span","prevclose"===s?[t.calcPrevChange(n)>=9.8?a("i",{attrs:{title:"(• 表示昨日涨停)"}},[t._v("•")]):t._e(),t._v(" "+t._s(e[s])+" ")]:[t._v(t._s(t.toMoney(s,e[s])))])])})),0)})),0)])]):t._e(),a("div",[t.$props.options.simple?t._e():a("br"),t.$props.options.simple?t._e():a("p",[t._v(" 捕获 "),a("i",{staticClass:"kanban cursor-pointer fa fa-bar-chart",attrs:{title:"股票看板"},on:{click:t.kanban}})]),a("table",{staticClass:"table"},[a("thead",[a("tr",t._l(t.translator,(function(e,n){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(n),expression:"isShowOptionField(key)"}],key:n,attrs:{scope:"col"}},[t._v(t._s(t.translator[n]))])})),0)]),a("tbody",t._l(t.capture,(function(e,n){return a("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(r,s){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(s),expression:"isShowOptionField(key)"}],key:s,staticClass:"cursor-default",attrs:{scope:"row"}},[a("span","code"===s?[a("a",{attrs:{href:t.urlOfNetinflow(n,e.name),target:"_blank"}},[t._v(t._s(n))]),n.startsWith("1")?t._e():a("i",{staticClass:"cursor-pointer",attrs:{title:"查看股票基因数据",onclick:"window.dispatchEvent(new CustomEvent('onShowGeneEvent', { detail: { code: '"+e.code+"', vtype:'"+t.vtype+"' }}))"}},[t._v(" (i)")])]:"name"===s?[a("a",{attrs:{href:t.urlOfQuote(n,e.name),target:"_blank"}},[t._v(t._s(e.name)+" ")]),t.markets&&t.markets.bondOfStock(n)?a("a",{attrs:{href:t.urlOfQuote(t.markets.bondOfStock(n)),target:"_blank",title:"查看可转债行情 "+t.markets.bondOfStock(n)}},[a("i",{staticClass:"fa fa-money"})]):t._e()]:[t._v(t._s(t.toMoney(s,e[s])))])])})),0)})),0)]),a("br")])])},r=[],s=(a("99af"),a("caad"),a("fb6a"),a("b0c0"),a("b680"),a("b64b"),a("07ac"),a("ac1f"),a("2532"),a("5319"),a("a34a")),o=a.n(s),i=(a("96cf"),a("1da1")),c={props:["time","vtype","listname","captureList","traceList","options"],data:function(){return{translator:{code:"股票代码",name:"股票简称",price:"股价",change:"涨跌幅",rate:"主力净占比",prevclose:"昨收",turnover:"换手率",qrr:"量比",volume:"成交量",inflow:"主力流入资金",outflow:"主力流出资金",netinflow:"主力净流入资金",hot:"热度",block:"板块",times:"连板天数"},trace:{},capture:{},profit:0,potential:0,intervalId:-1,listener:function(){},markets:window.__Walle_Stock_Markets}},computed:{isT0List:function(){return this.$props.time.includes("t0")}},watch:{"$props.options":function(t,e){this.$props.options.show?console.log("#Stock-Board# show start auto-update"):(this.stopAutoUpdate(),console.log("#Stock-Board# hidden disable auto-update"))}},created:function(){var t=this;return Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.trace=t.$props.traceList,t.capture=t.$props.captureList,e.next=4,t.calc();case 4:t.listener=function(){return t.listen.apply(t,arguments)},window.addEventListener("__Walle_Stock_Daily_Trace_Event",t.listener),t.startAutoUpdate();case 7:case"end":return e.stop()}}),e)})))()},destroyed:function(){window.removeEventListener("__Walle_Stock_Daily_Trace_Event",this.listener),this.stopAutoUpdate()},methods:{tooltip:function(){var t=" 达成涨幅 ".concat(this.profit,"% 潜在涨幅 ").concat(this.potential,"% ");return this.$props.time&&(t="".concat(this.$props.time,"-").concat(this.$props.vtype,"-").concat(this.$props.listname)+t),t},listen:function(t){var e=this,a=t.detail;return Object(i["a"])(o.a.mark((function t(){var n,r,s,i;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$props.options.update){t.next=2;break}return t.abrupt("return");case 2:if(n=a.name,a.change,r=a.trace,s=a.capture,i=e.$props.time+"-"+e.$props.vtype,i!==n){t.next=10;break}return e.trace=r[e.$props.listname],e.capture=s[e.$props.listname],t.next=9,e.calc();case 9:console.log("#Stock-Board# event update ".concat(n," ..."));case 10:case"end":return t.stop()}}),t)})))()},isShowOptionField:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var a=["hot","block","times"];if(e&&a.includes(t))return!1;var n=Object.values(this.$props.captureList)[0];return void 0!==n[t]}catch(r){return!1}},toMoney:function(t,e){return["volume","inflow","outflow","netinflow"].includes(t)&&(e=Math.abs(+e)>=1e8?(+e/1e8).toFixed(2)+"亿":(+e/1e4).toFixed(2)+"万"),e},urlOfQuote:function(t,e){t=t.replace("A","");var a={6:"sh",0:"sz",3:"sz",9:"sh",2:"sz"},n={11:"sh",12:"sz"},r=a[t[0]];return"1"===t[0]&&(r=n[t.slice(0,2)]),t="".concat(r).concat(t),"上证指数"===e?"http://quote.eastmoney.com/zs000001.html":"http://quote.eastmoney.com/".concat(t,".html")},urlOfNetinflow:function(t,e){return t=t.replace("A",""),"上证指数"===e?"http://data.eastmoney.com/zjlx/zs000001.html":"http://data.eastmoney.com/zjlx/".concat(t,".html")},kanban:function(){var t=this;return Object(i["a"])(o.a.mark((function e(){var a,n,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in a=[],t.capture)a.push(n.replace("A",""));r=t.$props.options.title||"".concat(t.$props.time,"-").concat(t.$props.vtype,"-").concat(t.$props.listname),window.dispatchEvent(new CustomEvent("onOpenKanbanEvent",{detail:{title:r,stocks:a,capture:t.capture,trace:t.trace}}));case 4:case"end":return e.stop()}}),e)})))()},update:function(){var t=this;return Object(i["a"])(o.a.mark((function e(){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,window.__Walle_Stock_Crawler){e.next=3;break}return e.abrupt("return");case 3:return a=Object.keys(t.trace),e.next=6,window.__Walle_Stock_Crawler.captureStocks(a);case 6:return t.trace=e.sent,e.next=9,t.calc();case 9:console.log("#Stock-Board# update ",t.trace),e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})))()},calc:function(){var t=this;return Object(i["a"])(o.a.mark((function e(){var a,n,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.trace){e.next=3;break}return e.abrupt("return");case 3:for(r in a=0,n=0,t.trace)a+=t.calcChange(r),n+=t.calcPotentialChange(r);t.profit=+a.toFixed(2),t.potential=+n.toFixed(2),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.warn("#Stock-Board# calc",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},calcChange:function(t){var e=this.capture[t].price,a=this.trace[t].price;return 0===a?+((this.trace[t].prevclose-this.capture[t].price)/this.capture[t].price*100).toFixed(2):+((a-e)/e*100).toFixed(2)},calcPotentialChange:function(t){return 0===this.trace[t].price?0:+(10-this.trace[t].change).toFixed(2)},calcPrevChange:function(t){var e=this.capture[t].price,a=this.trace[t].prevclose,n=(a-e)/e*100;return+this.capture[t].change+n},stopAutoUpdate:function(){clearInterval(this.intervalId),console.log("#Stock-Board# auto-update stoped")},startAutoUpdate:function(){var t=this;return Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.__Walle_Stock_Cron){e.next=2;break}return e.abrupt("return");case 2:if(t.$props.options.update){e.next=5;break}return console.log("#Stock-Board# force disable auto-update"),e.abrupt("return");case 5:return console.log("#Stock-Board# auto-update start"),e.next=8,window.__Walle_Stock_Cron.interval(Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.update();case 1:case"end":return e.stop()}}),e)}))),null,30,"stock-board");case 8:t.intervalId=e.sent;case 9:case"end":return e.stop()}}),e)})))()}}},l=c,p=(a("c5dc"),a("2877")),u=Object(p["a"])(l,n,r,!1,null,"c7d7a74a",null);e["default"]=u.exports},"6ca1":function(t,e,a){},"6f53":function(t,e,a){var n=a("83ab"),r=a("df75"),s=a("fc6a"),o=a("d1e7").f,i=function(t){return function(e){var a,i=s(e),c=r(i),l=c.length,p=0,u=[];while(l>p)a=c[p++],n&&!o.call(i,a)||u.push(t?[a,i[a]]:i[a]);return u}};t.exports={entries:i(!0),values:i(!1)}},"86e2":function(t,e,a){"use strict";var n=a("c687"),r=a.n(n);r.a},a1e1:function(t,e,a){"use strict";var n=a("d4ec"),r=a("bee2"),s=a("ade3"),o=a("a026"),i=a("6067"),c=a("5b0d"),l=function(){function t(){Object(n["a"])(this,t),Object(s["a"])(this,"vm",void 0)}return Object(r["a"])(t,[{key:"show",value:function(t,e,a,n,r,s){var l=this,p={update:!0,show:!0,title:"",simple:!1};s=Object.assign({},p,s),this.hide(),this.vm=new o["a"]({components:{"ui-mask":c["default"],"ui-board":i["default"]},template:'\n        <ui-mask @click.native=\'toggle\' :display="options.show" :glass="false" :zindex="100001">\n          <ui-board :time="time" :vtype="vtype" :listname="listname" :capture-list="captureList" :trace-list="traceList" :options="options"></ui-board>\n        </ui-mask>  \n      ',data:function(){return{time:t,vtype:e,listname:a,captureList:n,traceList:r,options:s}},methods:{toggle:function(){this.options=Object.assign({},s,{show:!this.options.show}),!this.options.show&&l.hide()}}}).$mount();var u=document.querySelector("#walle-app");u.scrollTo(0,0),document.querySelector("#walle-app").appendChild(this.vm.$el)}},{key:"hide",value:function(){this.vm&&this.vm.$el&&document.querySelector("#walle-app").removeChild(this.vm.$el),this.vm=null}}]),t}();e["a"]=new l},c5dc:function(t,e,a){"use strict";var n=a("6ca1"),r=a.n(n);r.a},c687:function(t,e,a){},edad:function(t,e,a){t.exports=a.p+"img/logo.jpg"}}]);