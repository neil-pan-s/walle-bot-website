(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91f813ae","chunk-031c9228"],{"07ac":function(t,e,a){var r=a("23e7"),n=a("6f53").values;r({target:"Object",stat:!0},{values:function(t){return n(t)}})},"26e9":function(t,e,a){"use strict";var r=a("23e7"),n=a("e8b5"),o=[].reverse,s=[1,2];r({target:"Array",proto:!0,forced:String(s)===String(s.reverse())},{reverse:function(){return n(this)&&(this.length=this.length),o.call(this)}})},"2fe6":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return s}));a("cb29");var r=a("276c"),n=a("fc11"),o={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(11, 188, 73)",blue:"rgb(120, 164, 250)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},s=function t(e){var a=e.label,s=e.fill,i=void 0!==s&&s,c=e.backgroundColor,l=void 0===c?o.red:c,u=e.borderColor,p=void 0===u?o.red:u,d=e.data;Object(r["a"])(this,t),Object(n["a"])(this,"label",void 0),Object(n["a"])(this,"fill",void 0),Object(n["a"])(this,"backgroundColor",void 0),Object(n["a"])(this,"borderColor",void 0),Object(n["a"])(this,"data",void 0),this.label=a,this.fill=i,this.backgroundColor=l,this.borderColor=p,this.data=d}},3508:function(t,e,a){},"49b9":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.market.index.price?a("div",{staticClass:"trend",class:{"full-screen":t.isFullScreen},on:{click:function(e){return t.toggle()}}},[a("div",{staticClass:"info"},[a("span",{class:{red:t.market.index.change>=0,green:t.market.index.change<0}},[a("span",[t._v("上证指数: "+t._s(t.market.index.price)+" "+t._s(t.market.index.change)+"%")]),a("span",[t._v("主力 "+t._s(t.market.index.rate)+"% ")]),a("span",[t._v("资金 "+t._s(t.toMoney(t.market.index.netinflow))+" ")]),a("span",[t._v("成交量 "+t._s(t.toMoney(t.market.index.volume))+" ")])]),a("span",{staticClass:"red"},[t._v(" 上涨 "+t._s(t.market.number.rise)+" ")]),a("span",{staticClass:"green"},[t._v(" 下跌 "+t._s(t.market.number.down)+" ")]),a("span",{class:{red:t.market.strength.full>=0,green:t.market.strength.full<0}},[t._v(" 市场强度: "+t._s(t.market.strength.full)+"% ")]),a("span",{staticClass:"red"},[t._v("上涨 "+t._s(t.market.strength.rise)+"%")]),a("span",{staticClass:"green"},[t._v(" 下跌 "+t._s(t.market.strength.down)+"%")]),a("span",{class:{red:t.market.strength.netinflow>=0,green:t.market.strength.netinflow<0}},[t._v(" 主力净流入400 "+t._s(t.market.strength.netinflow)+"%")]),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.isFullScreen,expression:"!isFullScreen"}],ref:"beat",staticClass:"limit-beat",on:{mouseover:t.showBeatStocks,click:function(t){t.stopPropagation()}}},[t._v("☰")])]),a("ui-chart",{ref:"chart",staticClass:"chart",nativeOn:{click:function(t){t.stopPropagation()}}})],1):t._e()},n=[],o=(a("4160"),a("26e9"),a("b680"),a("d3b7"),a("159b"),a("a34a")),s=a.n(o),i=a("c964"),c=(a("96cf"),a("2fe6")),l=(a("a4d3"),a("e01a"),a("d28b"),a("fb6a"),a("3ca3"),a("ddb0"),a("a1e1")),u="continue-limitup-top10";function p(){return d.apply(this,arguments)}function d(){return d=Object(i["a"])(s.a.mark((function t(){var e,a,r,n,o,i,c,l,p,d,h,f;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,window.__Walle_Stock_Crawler){t.next=3;break}return t.abrupt("return",{});case 3:return t.next=5,window.__Walle_Stock_Crawler.captureList(u);case 5:for(e=t.sent,e=e.slice(0,20),console.info("#Stock-Beat# continue limitup stocks ..."),console.table(e),a=[],r=!0,n=!1,o=void 0,t.prev=13,i=e[Symbol.iterator]();!(r=(c=i.next()).done);r=!0)l=c.value,a.push(l.code);t.next=21;break;case 17:t.prev=17,t.t0=t["catch"](13),n=!0,o=t.t0;case 21:t.prev=21,t.prev=22,r||null==i["return"]||i["return"]();case 24:if(t.prev=24,!n){t.next=27;break}throw o;case 27:return t.finish(24);case 28:return t.finish(21);case 29:return t.next=31,window.__Walle_Stock_Crawler.captureStocks(a);case 31:for(e=t.sent,p={},d=0,h=a;d<h.length;d++)f=h[d],p["A".concat(f)]=e[f];return t.abrupt("return",p);case 37:t.prev=37,t.t1=t["catch"](0);case 39:case"end":return t.stop()}}),t,null,[[0,37],[13,17,21,29],[22,,24,28]])}))),d.apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(s.a.mark((function t(e){var a;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p();case 3:a=t.sent,Object(l["a"])(e,"","","",a,{},{title:"打板股票候选",update:!1,simple:!0}),t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),f.apply(this,arguments)}var v={captureBeatStocks:p,showBeatStocks:h},b={data:function(){return{isFullScreen:!1,market:{index:{},number:{},strength:{}}}},mounted:function(){var t=Object(i["a"])(s.a.mark((function t(){return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.listen(),this.init();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{init:function(){window.__Walle_Stock_Market&&window.__Walle_Stock_Market.process()},listen:function(){var t=this;window.addEventListener("__Walle_Stock_Market_Analyse_Event",(function(e){var a=e.detail;t.market=a,t.updateChart(a.rates)}))},toggle:function(){this.isFullScreen=!this.isFullScreen},showBeatStocks:function(){v.showBeatStocks(this.$refs.beat)},formateChartData:function(t){var e={time:[],value:[]};return t?(t.forEach((function(t,a){a%2===1?e.time.unshift(t):e.value.unshift(t)})),e):e},updateChart:function(t){if(this.$refs.chart){var e=[new c["a"]({label:"上证指数",backgroundColor:c["b"].blue,borderColor:c["b"].blue,data:this.formateChartData(t.index).value}),new c["a"]({label:"主力净流入400",backgroundColor:c["b"].yellow,borderColor:c["b"].yellow,data:this.formateChartData(t.netinflow).value}),new c["a"]({label:"整体市场",backgroundColor:c["b"].orange,borderColor:c["b"].orange,data:this.formateChartData(t.full).value}),new c["a"]({label:"上涨股",backgroundColor:c["b"].red,borderColor:c["b"].red,data:this.formateChartData(t.rise).value}),new c["a"]({label:"下跌股",backgroundColor:c["b"].green,borderColor:c["b"].green,data:this.formateChartData(t.down).value})],a=this.formateChartData(t.index).time.reverse();this.$refs.chart.update({labels:a,datasets:e})}},toMoney:function(t){return t=Math.abs(+t)>=1e8?(+t/1e8).toFixed(2)+"亿":(+t/1e4).toFixed(2)+"万",t}}},w=b,_=(a("5c6b"),a("2877")),k=Object(_["a"])(w,r,n,!1,null,"27970510",null);e["default"]=k.exports},"5c6b":function(t,e,a){"use strict";var r=a("f386"),n=a.n(r);n.a},6067:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"board",staticClass:"board background-glass",on:{click:function(t){t.stopPropagation()}}},[t.$props.options.title?a("p",{staticClass:"title"},[t._v(t._s(t.$props.options.title))]):t._e(),Object.values(this.trace).length&&!t.$props.options.simple?a("div",[a("br"),a("p",[t._v("跟踪 "),a("span",{staticClass:"profit",class:{red:t.profit>=0,green:t.profit<0},attrs:{title:t.$props.listname+"-"+t.$props.vtype+" 达成涨幅 "+t.profit+"% 潜在涨幅 "+t.potential+"% "}},[t._v("("+t._s(t.profit)+"%)")])]),a("table",{staticClass:"table"},[a("thead",[a("tr",t._l(t.translator,(function(e,r){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(r,!0),expression:"isShowOptionField(key, true)"}],key:r,attrs:{scope:"col"}},[t._v(t._s(t.translator[r]))])})),0)]),a("tbody",t._l(t.trace,(function(e,r){return a("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(n,o){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(o,!0),expression:"isShowOptionField(key, true)"}],key:o,staticClass:"cursor-default",class:{animated:"rate"===o&&e.change<0&&e.rate<0,infinite:!0,shake:!0,slower:!0},attrs:{scope:"row"}},["code"===o?a("a",{attrs:{href:t.url(r,e.name),target:"_blank"}},[t._v(t._s(r))]):a("span","change"===o?[a("span",{staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"今日涨跌幅"}},[t._v(t._s(e[o]))]),t._v(" / "),a("span",{class:t.calcChange(r)>=0?"red":"green",staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"两日涨跌幅"}},[t._v(t._s(t.calcChange(r)))])]:[t._v(t._s(t.toMoney(o,e[o])))]),t.isT0List&&"code"===o?a("i",{staticClass:"cursor-pointer",attrs:{title:"从榜单中移除此股票",onclick:"window.dispatchEvent(new CustomEvent('onIgnoreStockEvent', { detail: { el: this , time:'"+t.time+"', vtype:'"+t.vtype+"', listname:'"+t.listname+"', code:'"+e.code+"', name:'"+e.name+"' }}))"}},[t._v(" (x)")]):t._e()])})),0)})),0)])]):t._e(),a("div",[t.$props.options.simple?t._e():a("br"),t.$props.options.simple?t._e():a("p",[t._v("捕获")]),a("table",{staticClass:"table"},[a("thead",[a("tr",t._l(t.translator,(function(e,r){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(r),expression:"isShowOptionField(key)"}],key:r,attrs:{scope:"col"}},[t._v(t._s(t.translator[r]))])})),0)]),a("tbody",t._l(t.capture,(function(e,r){return a("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(n,o){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(o),expression:"isShowOptionField(key)"}],key:o,staticClass:"cursor-default",attrs:{scope:"row"}},["code"===o?a("a",{attrs:{href:t.url(r,e.name),target:"_blank"}},[t._v(t._s(r))]):a("span",[t._v(t._s(t.toMoney(o,e[o])))]),"code"===o?a("i",{staticClass:"cursor-pointer",attrs:{title:"查看股票基因数据",onclick:"window.dispatchEvent(new CustomEvent('onShowGeneEvent', { detail: { code: '"+e.code+"', vtype:'"+t.vtype+"' }}))"}},[t._v(" (i)")]):t._e()])})),0)})),0)]),a("br")])])},n=[],o=(a("caad"),a("b680"),a("b64b"),a("d3b7"),a("07ac"),a("ac1f"),a("2532"),a("5319"),a("a34a")),s=a.n(o),i=a("c964"),c=(a("96cf"),{props:["time","vtype","listname","captureList","traceList","options"],data:function(){return{translator:{code:"股票代码",name:"股票简称",price:"股价",change:"涨跌幅",rate:"主力净占比",prevclose:"昨收",turnover:"换手率",qrr:"量比",volume:"成交量",inflow:"主力流入资金",outflow:"主力流出资金",netinflow:"主力净流入资金",hot:"热度",block:"板块"},trace:{},capture:{},profit:0,potential:0,intervalId:-1}},computed:{isT0List:function(){return this.$props.time.includes("t0")}},watch:{"$props.options":function(t,e){this.$props.options.show?(this.startAutoUpdate(),console.log("#Stock-Board# show start auto-update")):(this.stopAutoUpdate(),console.log("#Stock-Board# hidden disable auto-update"))}},created:function(){var t=Object(i["a"])(s.a.mark((function t(){return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.trace=this.$props.traceList,this.capture=this.$props.captureList,t.next=4,this.calc();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),destroyed:function(){this.stopAutoUpdate()},methods:{isShowOptionField:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var a=["hot","block"];if(e&&a.includes(t))return!1;var r=Object.values(this.$props.captureList)[0];return!!r[t]}catch(n){return!1}},toMoney:function(t,e){return["volume","inflow","outflow","netinflow"].includes(t)&&(e=Math.abs(+e)>=1e8?(+e/1e8).toFixed(2)+"亿":(+e/1e4).toFixed(2)+"万"),e},url:function(t,e){return t=t.replace("A",""),"上证指数"===e?"http://data.eastmoney.com/zjlx/zs000001.html":"http://data.eastmoney.com/zjlx/".concat(t,".html")},calc:function(){var t=Object(i["a"])(s.a.mark((function t(){var e,a,r;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.trace){t.next=3;break}return t.abrupt("return");case 3:for(r in e=0,a=0,this.trace)e+=this.calcChange(r),a+=this.calcPotentialChange(r);this.profit=+e.toFixed(2),this.potential=+a.toFixed(2),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.warn("#Stock-Board# calc",t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),calcChange:function(t){var e=this.capture[t].price,a=this.trace[t].price;return 0===a?+((this.trace[t].prevclose-this.capture[t].price)/this.capture[t].price*100).toFixed(2):+((a-e)/e*100).toFixed(2)},calcPotentialChange:function(t){return 0===this.trace[t].price?0:+(10-this.trace[t].change).toFixed(2)},stopAutoUpdate:function(){clearInterval(this.intervalId),console.log("#Stock-Board# auto-update stoped")},startAutoUpdate:function(){var t=Object(i["a"])(s.a.mark((function t(){var e=this;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(window.__Walle_Stock_Cron&&window.__Walle_Stock_Crawler){t.next=2;break}return t.abrupt("return");case 2:if(this.$props.options.update){t.next=5;break}return console.log("#Stock-Board# force disable auto-update"),t.abrupt("return");case 5:return console.log("#Stock-Board# auto-update start"),t.next=8,window.__Walle_Stock_Cron.interval(Object(i["a"])(s.a.mark((function t(){var a;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Object.keys(e.trace),t.next=3,window.__Walle_Stock_Crawler.captureStocks(a);case 3:return e.trace=t.sent,t.next=6,e.calc();case 6:console.log("#Stock-Board# auto-update ",e.trace);case 7:case"end":return t.stop()}}),t)}))),null,30,"stock-board");case 8:this.intervalId=t.sent;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}),l=c,u=(a("99d5"),a("2877")),p=Object(u["a"])(l,r,n,!1,null,"169d5d8e",null);e["default"]=p.exports},"6f53":function(t,e,a){var r=a("83ab"),n=a("df75"),o=a("fc6a"),s=a("d1e7").f,i=function(t){return function(e){var a,i=o(e),c=n(i),l=c.length,u=0,p=[];while(l>u)a=c[u++],r&&!s.call(i,a)||p.push(t?[a,i[a]]:i[a]);return p}};t.exports={entries:i(!0),values:i(!1)}},"81d5":function(t,e,a){"use strict";var r=a("7b0b"),n=a("23cb"),o=a("50c4");t.exports=function(t){var e=r(this),a=o(e.length),s=arguments.length,i=n(s>1?arguments[1]:void 0,a),c=s>2?arguments[2]:void 0,l=void 0===c?a:n(c,a);while(l>i)e[i++]=t;return e}},"99d5":function(t,e,a){"use strict";var r=a("3508"),n=a.n(r);n.a},a1e1:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));a("d3b7");var r=a("a34a"),n=a.n(r),o=a("c964"),s=(a("96cf"),a("a026")),i=a("6067"),c=a("6944");function l(t,e,a,r,n,o){return u.apply(this,arguments)}function u(){return u=Object(o["a"])(n.a.mark((function t(e,a,r,o,l,u){var p,d,h=arguments;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:p=h.length>6&&void 0!==h[6]?h[6]:{update:!0,show:!1,title:"",simple:!1},d=new s["a"]({components:{"ui-board":i["default"]},template:'<ui-board :time="time" :vtype="vtype" :listname="listname" :capture-list="captureList" :trace-list="traceList" :options="options"></ui-board>',data:function(){return{time:a,vtype:r,listname:o,captureList:l,traceList:u,options:p}}}).$mount(),Object(c["c"])(e,d.$el,(function(t){d.$data.options=Object.assign(p,{show:t})}));case 3:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}},cb29:function(t,e,a){var r=a("23e7"),n=a("81d5"),o=a("44d2");r({target:"Array",proto:!0},{fill:n}),o("fill")},f386:function(t,e,a){}}]);