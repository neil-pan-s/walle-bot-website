(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-efc865fa"],{"07ac":function(t,e,a){var r=a("23e7"),n=a("6f53").values;r({target:"Object",stat:!0},{values:function(t){return n(t)}})},"5d55":function(t,e,a){},6067:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"board",staticClass:"board background-glass",on:{click:function(t){t.stopPropagation()}}},[t.$props.options.title?a("p",{staticClass:"title"},[t._v(" "+t._s(t.$props.options.title)+" "),t.$props.options.simple?a("i",{staticClass:"kanban cursor-pointer fa fa-bar-chart",attrs:{title:"股票看板"},on:{click:t.kanban}}):t._e()]):t._e(),Object.values(this.trace).length&&!t.$props.options.simple?a("div",[a("br"),a("p",[t._v(" 跟踪 "),a("span",{staticClass:"profit cursor-pointer",class:{red:t.profit>=0,green:t.profit<0},attrs:{title:t.$props.time+"-"+t.$props.vtype+"-"+t.$props.listname+" 达成涨幅 "+t.profit+"% 潜在涨幅 "+t.potential+"% "}},[t._v("("+t._s(t.profit)+"%)")]),a("i",{staticClass:"refresh cursor-pointer fa fa-refresh",attrs:{title:"更新股票数据 用于榜单长期持有收益跟踪分析 亏损扭转情况和持续盈利情况"},on:{click:t.update}})]),a("table",{staticClass:"table"},[a("thead",[a("tr",t._l(t.translator,(function(e,r){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(r,!0),expression:"isShowOptionField(key, true)"}],key:r,attrs:{scope:"col"}},[t._v(t._s(t.translator[r]))])})),0)]),a("tbody",t._l(t.trace,(function(e,r){return a("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(n,s){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(s,!0),expression:"isShowOptionField(key, true)"}],key:s,staticClass:"cursor-default",class:{animated:"rate"===s&&e.change<0&&e.rate<0,infinite:!0,shake:!0,slower:!0},attrs:{scope:"row"}},["code"===s?a("span",[a("a",{attrs:{href:t.urlOfNetinflow(r,e.name),target:"_blank"}},[t._v(t._s(r))]),t.isT0List?a("i",{staticClass:"cursor-pointer",attrs:{title:"从榜单中移除此股票",onclick:"window.dispatchEvent(new CustomEvent('onIgnoreStockEvent', { detail: { el: this , time:'"+t.time+"', vtype:'"+t.vtype+"', listname:'"+t.listname+"', code:'"+e.code+"', name:'"+e.name+"' }}))"}},[t._v(" (x)")]):t._e()]):"name"===s?a("span",[a("a",{attrs:{href:t.urlOfQuote(r,e.name),target:"_blank"}},[t._v(t._s(e.name)+" ")]),t.markets.bondOfStock(r)?a("a",{attrs:{href:t.urlOfQuote(t.markets.bondOfStock(r)),target:"_blank",title:"查看可转债行情 "+t.markets.bondOfStock(r)}},[a("i",{staticClass:"fa fa-money"})]):t._e()]):"change"===s?a("span",{staticClass:"cursor-pointer"},[a("span",{staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"今日涨跌幅"}},[t._v(t._s(e[s]))]),t._v(" / "),a("span",{class:t.calcChange(r)>=0?"red":"green",staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"两日涨跌幅"}},[t._v(t._s(t.calcChange(r)))])]):a("span",[t._v(t._s(t.toMoney(s,e[s])))])])})),0)})),0)])]):t._e(),a("div",[t.$props.options.simple?t._e():a("br"),t.$props.options.simple?t._e():a("p",[t._v(" 捕获 "),a("i",{staticClass:"kanban cursor-pointer fa fa-bar-chart",attrs:{title:"股票看板"},on:{click:t.kanban}})]),a("table",{staticClass:"table"},[a("thead",[a("tr",t._l(t.translator,(function(e,r){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(r),expression:"isShowOptionField(key)"}],key:r,attrs:{scope:"col"}},[t._v(t._s(t.translator[r]))])})),0)]),a("tbody",t._l(t.capture,(function(e,r){return a("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(n,s){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(s),expression:"isShowOptionField(key)"}],key:s,staticClass:"cursor-default",attrs:{scope:"row"}},[a("span","code"===s?[a("a",{attrs:{href:t.urlOfNetinflow(r,e.name),target:"_blank"}},[t._v(t._s(r))]),r.startsWith("1")?t._e():a("i",{staticClass:"cursor-pointer",attrs:{title:"查看股票基因数据",onclick:"window.dispatchEvent(new CustomEvent('onShowGeneEvent', { detail: { code: '"+e.code+"', vtype:'"+t.vtype+"' }}))"}},[t._v(" (i)")])]:"name"===s?[a("a",{attrs:{href:t.urlOfQuote(r,e.name),target:"_blank"}},[t._v(t._s(e.name)+" ")]),t.markets.bondOfStock(r)?a("a",{attrs:{href:t.urlOfQuote(t.markets.bondOfStock(r)),target:"_blank",title:"查看可转债行情 "+t.markets.bondOfStock(r)}},[a("i",{staticClass:"fa fa-money"})]):t._e()]:[t._v(t._s(t.toMoney(s,e[s])))])])})),0)})),0)]),a("br")])])},n=[],s=(a("99af"),a("caad"),a("fb6a"),a("b0c0"),a("b680"),a("b64b"),a("07ac"),a("ac1f"),a("2532"),a("5319"),a("a34a")),o=a.n(s),c=(a("96cf"),a("1da1")),i={props:["time","vtype","listname","captureList","traceList","options"],data:function(){return{translator:{code:"股票代码",name:"股票简称",price:"股价",change:"涨跌幅",rate:"主力净占比",prevclose:"昨收",turnover:"换手率",qrr:"量比",volume:"成交量",inflow:"主力流入资金",outflow:"主力流出资金",netinflow:"主力净流入资金",hot:"热度",block:"板块",times:"连板天数"},trace:{},capture:{},profit:0,potential:0,intervalId:-1,listener:function(){},markets:window.__Walle_Stock_Markets}},computed:{isT0List:function(){return this.$props.time.includes("t0")}},watch:{"$props.options":function(t,e){this.$props.options.show?console.log("#Stock-Board# show start auto-update"):(this.stopAutoUpdate(),console.log("#Stock-Board# hidden disable auto-update"))}},created:function(){var t=this;return Object(c["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.trace=t.$props.traceList,t.capture=t.$props.captureList,e.next=4,t.calc();case 4:t.listener=function(){return t.listen.apply(t,arguments)},window.addEventListener("__Walle_Stock_Daily_Trace_Event",t.listener),t.startAutoUpdate();case 7:case"end":return e.stop()}}),e)})))()},destroyed:function(){window.removeEventListener("__Walle_Stock_Daily_Trace_Event",this.listener),this.stopAutoUpdate()},methods:{listen:function(t){var e=this,a=t.detail;return Object(c["a"])(o.a.mark((function t(){var r,n,s,c;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$props.options.update){t.next=2;break}return t.abrupt("return");case 2:if(r=a.name,a.change,n=a.trace,s=a.capture,c=e.$props.time+"-"+e.$props.vtype,c!==r){t.next=10;break}return e.trace=n[e.$props.listname],e.capture=s[e.$props.listname],t.next=9,e.calc();case 9:console.log("#Stock-Board# event update ".concat(r," ..."));case 10:case"end":return t.stop()}}),t)})))()},isShowOptionField:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var a=["hot","block","times"];if(e&&a.includes(t))return!1;var r=Object.values(this.$props.captureList)[0];return void 0!==r[t]}catch(n){return!1}},toMoney:function(t,e){return["volume","inflow","outflow","netinflow"].includes(t)&&(e=Math.abs(+e)>=1e8?(+e/1e8).toFixed(2)+"亿":(+e/1e4).toFixed(2)+"万"),e},urlOfQuote:function(t,e){t=t.replace("A","");var a={6:"sh",0:"sz",3:"sz",9:"sh",2:"sz"},r={11:"sh",12:"sz"},n=a[t[0]];return"1"===t[0]&&(n=r[t.slice(0,2)]),t="".concat(n).concat(t),"上证指数"===e?"http://quote.eastmoney.com/zs000001.html":"http://quote.eastmoney.com/".concat(t,".html")},urlOfNetinflow:function(t,e){return t=t.replace("A",""),"上证指数"===e?"http://data.eastmoney.com/zjlx/zs000001.html":"http://data.eastmoney.com/zjlx/".concat(t,".html")},kanban:function(){var t=this;return Object(c["a"])(o.a.mark((function e(){var a,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in a=[],t.capture)a.push(r.replace("A",""));window.dispatchEvent(new CustomEvent("onOpenKanbanEvent",{detail:{stocks:a}}));case 3:case"end":return e.stop()}}),e)})))()},update:function(){var t=this;return Object(c["a"])(o.a.mark((function e(){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,window.__Walle_Stock_Crawler){e.next=3;break}return e.abrupt("return");case 3:return a=Object.keys(t.trace),e.next=6,window.__Walle_Stock_Crawler.captureStocks(a);case 6:return t.trace=e.sent,e.next=9,t.calc();case 9:console.log("#Stock-Board# update ",t.trace),e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})))()},calc:function(){var t=this;return Object(c["a"])(o.a.mark((function e(){var a,r,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.trace){e.next=3;break}return e.abrupt("return");case 3:for(n in a=0,r=0,t.trace)a+=t.calcChange(n),r+=t.calcPotentialChange(n);t.profit=+a.toFixed(2),t.potential=+r.toFixed(2),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.warn("#Stock-Board# calc",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},calcChange:function(t){var e=this.capture[t].price,a=this.trace[t].price;return 0===a?+((this.trace[t].prevclose-this.capture[t].price)/this.capture[t].price*100).toFixed(2):+((a-e)/e*100).toFixed(2)},calcPotentialChange:function(t){return 0===this.trace[t].price?0:+(10-this.trace[t].change).toFixed(2)},stopAutoUpdate:function(){clearInterval(this.intervalId),console.log("#Stock-Board# auto-update stoped")},startAutoUpdate:function(){var t=this;return Object(c["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.__Walle_Stock_Cron){e.next=2;break}return e.abrupt("return");case 2:if(t.$props.options.update){e.next=5;break}return console.log("#Stock-Board# force disable auto-update"),e.abrupt("return");case 5:return console.log("#Stock-Board# auto-update start"),e.next=8,window.__Walle_Stock_Cron.interval(Object(c["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.update();case 1:case"end":return e.stop()}}),e)}))),null,30,"stock-board");case 8:t.intervalId=e.sent;case 9:case"end":return e.stop()}}),e)})))()}}},l=i,p=(a("6632"),a("2877")),u=Object(p["a"])(l,r,n,!1,null,"5fefaf0f",null);e["default"]=u.exports},6632:function(t,e,a){"use strict";var r=a("5d55"),n=a.n(r);n.a},"6f53":function(t,e,a){var r=a("83ab"),n=a("df75"),s=a("fc6a"),o=a("d1e7").f,c=function(t){return function(e){var a,c=s(e),i=n(c),l=i.length,p=0,u=[];while(l>p)a=i[p++],r&&!o.call(c,a)||u.push(t?[a,c[a]]:c[a]);return u}};t.exports={entries:c(!0),values:c(!1)}}}]);