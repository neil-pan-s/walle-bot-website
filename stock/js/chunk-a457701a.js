(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a457701a","chunk-113b862c","chunk-6fd25288"],{"07ac":function(t,e,r){var a=r("23e7"),n=r("6f53").values;a({target:"Object",stat:!0},{values:function(t){return n(t)}})},"26e9":function(t,e,r){"use strict";var a=r("23e7"),n=r("e8b5"),s=[].reverse,o=[1,2];a({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return n(this)&&(this.length=this.length),s.call(this)}})},"2fe6":function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return o}));r("cb29");var a=r("d4ec"),n=r("ade3"),s={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(11, 188, 73)",blue:"rgb(120, 164, 250)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},o=function t(e){var r=e.label,o=e.fill,i=void 0!==o&&o,c=e.backgroundColor,l=void 0===c?s.red:c,u=e.borderColor,p=void 0===u?s.red:u,d=e.data;Object(a["a"])(this,t),Object(n["a"])(this,"label",void 0),Object(n["a"])(this,"fill",void 0),Object(n["a"])(this,"backgroundColor",void 0),Object(n["a"])(this,"borderColor",void 0),Object(n["a"])(this,"data",void 0),this.label=r,this.fill=i,this.backgroundColor=l,this.borderColor=p,this.data=d}},"49b9":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.market.index.sse?r("div",{staticClass:"trend",class:{"full-screen":t.isFullScreen},on:{click:function(e){return t.toggle()}}},[r("div",{staticClass:"info"},[r("span",{staticClass:"cursor-pointer",class:{red:t.market.index.sse.change>=0,green:t.market.index.sse.change<0},attrs:{title:"上证指数"}},[t._v(t._s(t.market.index.sse.price)+" "+t._s(t.market.index.sse.change)+"%")]),r("span",{staticClass:"cursor-pointer",class:{red:t.market.index.szse.change>=0,green:t.market.index.szse.change<0},attrs:{title:"深成指数"}},[t._v(t._s(t.market.index.szse.price)+" "+t._s(t.market.index.szse.change)+"%")]),r("span",{staticClass:"cursor-pointer",class:t.market.index.sse.rate+t.market.index.szse.rate>=0?"red":"green",attrs:{title:"上证: "+t.market.index.sse.rate+"% 深成: "+t.market.index.szse.rate+"%"}},[t._v("主力 "+t._s((t.market.index.sse.rate+t.market.index.szse.rate).toFixed(2))+"% ")]),r("span",{staticClass:"cursor-pointer",class:t.market.index.sse.netinflow+t.market.index.szse.netinflow>=0?"red":"green",attrs:{title:"上证: "+t.toMoney(t.market.index.sse.netinflow)+" 深成: "+t.toMoney(t.market.index.szse.netinflow)}},[t._v("资金 "+t._s(t.toMoney(t.market.index.sse.netinflow+t.market.index.szse.netinflow))+" ")]),r("span",{staticClass:"cursor-pointer",class:t.market.index.north.hk2sh.dayNetAmtIn+t.market.index.north.hk2sz.dayNetAmtIn>=0?"red":"green",attrs:{title:"沪股通: "+t.toMoney(1e4*t.market.index.north.hk2sh.dayNetAmtIn)+" 仓位: "+(t.market.index.north.hk2sh.dayNetAmtIn/t.market.index.north.hk2sh.dayAmtRemain*100).toFixed(2)+"% 深股通: "+t.toMoney(1e4*t.market.index.north.hk2sz.dayNetAmtIn)+" 仓位: "+(t.market.index.north.hk2sz.dayNetAmtIn/t.market.index.north.hk2sz.dayAmtRemain*100).toFixed(2)+"%"}},[t._v("北向 "+t._s(t.toMoney(1e4*(t.market.index.north.hk2sh.dayNetAmtIn+t.market.index.north.hk2sz.dayNetAmtIn)))+" ")]),r("span",{staticClass:"cursor-pointer red",attrs:{title:"上证: "+t.toMoney(t.market.index.sse.amount)+" 深成: "+t.toMoney(t.market.index.szse.amount)}},[t._v("两市 "+t._s(t.toMoney(t.market.index.sse.amount+t.market.index.szse.amount))+" ")]),r("span",{staticClass:"cursor-pointer red",attrs:{title:"涨停: "+t.market.number.limitup+" 准涨停: "+t.market.number.prelimitup}},[t._v(" 上涨 "+t._s(t.market.number.rise)+" ")]),r("span",{staticClass:"cursor-pointer green",attrs:{title:"跌停: "+t.market.number.limitdown+" 准跌停: "+t.market.number.prelimitdown}},[t._v(" 下跌 "+t._s(t.market.number.down)+" ")]),r("span",{class:{red:(t.market.strength.full||0)>=0,green:t.market.strength.full<0}},[t._v(" 市场强度: "+t._s(t.market.strength.full||0)+"% ")]),r("span",{staticClass:"red"},[t._v("上涨 "+t._s(t.market.strength.rise||0)+"%")]),r("span",{staticClass:"green"},[t._v(" 下跌 "+t._s(t.market.strength.down||0)+"%")]),r("span",{class:{red:(t.market.strength.netinflow||0)>=0,green:t.market.strength.netinflow<0}},[t._v(" 主力净流入400 "+t._s(t.market.strength.netinflow||0)+"%")]),r("i",{directives:[{name:"show",rawName:"v-show",value:!t.isFullScreen,expression:"!isFullScreen"}],staticClass:"awesome red cursor-pointer fa fa-dot-circle-o",attrs:{title:"打板候选股票 (开盘前集合竞价挂单打板)"},on:{click:function(e){return e.stopPropagation(),t.awesome.showStocks()}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:!t.isFullScreen,expression:"!isFullScreen"}],staticClass:"awesome red cursor-pointer fa fa-rocket",attrs:{title:"T0候选可转债"},on:{click:function(e){return e.stopPropagation(),t.awesome.showBonds()}}})]),r("ui-chart",{ref:"chart",staticClass:"chart",nativeOn:{click:function(t){t.stopPropagation()}}})],1):t._e()},n=[],s=(r("4160"),r("26e9"),r("b680"),r("159b"),r("4795"),r("a34a")),o=r.n(s),i=(r("96cf"),r("1da1")),c=r("2fe6"),l=(r("a4d3"),r("e01a"),r("d28b"),r("b0c0"),r("b64b"),r("d3b7"),r("3ca3"),r("ddb0"),r("d4ec")),u=r("bee2"),p=r("a1e1"),d=r("c1df"),h=r.n(d),f="continue-limitup-top10",k=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,[{key:"captureOfStocks",value:function(){var t=Object(i["a"])(o.a.mark((function t(){var e,r,a,n,s,i,c,l,u,p,d,h,k,m,v,b;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,window.__Walle_Stock_Crawler&&window.__Walle_Stock_Validator){t.next=3;break}return t.abrupt("return",{});case 3:return t.next=5,window.__Walle_Stock_Crawler.captureList(f);case 5:e=t.sent,r={},a=[],n=!0,s=!1,i=void 0,t.prev=10,c=e[Symbol.iterator]();case 12:if(n=(l=c.next()).done){t.next=27;break}return u=l.value,p=u.code,d=u.name,t.next=18,window.__Walle_Stock_Validator.isValidStock(p,d);case 18:if(t.sent){t.next=20;break}return t.abrupt("continue",24);case 20:if(a.push(p),r[p]=u,20!==a.length){t.next=24;break}return t.abrupt("break",27);case 24:n=!0,t.next=12;break;case 27:t.next=33;break;case 29:t.prev=29,t.t0=t["catch"](10),s=!0,i=t.t0;case 33:t.prev=33,t.prev=34,n||null==c["return"]||c["return"]();case 36:if(t.prev=36,!s){t.next=39;break}throw i;case 39:return t.finish(36);case 40:return t.finish(33);case 41:return console.info("#Stock-Beat# continue limitup stocks ..."),console.table(r),t.next=45,window.__Walle_Stock_Crawler.captureStocks(a);case 45:for(h=t.sent,k={},m=0,v=a;m<v.length;m++)b=v[m],k["A".concat(b)]=h[b],k["A".concat(b)]["times"]=r[b]["times"];return t.abrupt("return",k);case 51:t.prev=51,t.t1=t["catch"](0);case 53:case"end":return t.stop()}}),t,null,[[0,51],[10,29,33,41],[34,,36,40]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"captureOfBonds",value:function(){var t=Object(i["a"])(o.a.mark((function t(){var e,r,a,n,s,i,c,l,u,p,d,h,f=arguments;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=f.length>0&&void 0!==f[0]?f[0]:"change",r=f.length>1&&void 0!==f[1]?f[1]:{isBaseOnStock:!1},t.prev=2,window.__Walle_Stock_Bond&&window.__Walle_Stock_Pool){t.next=5;break}return t.abrupt("return",{});case 5:if(window.__Walle_Stock_Pool.isRunning){t.next=7;break}return t.abrupt("return",{});case 7:if(!r.isBaseOnStock){t.next=13;break}return t.next=10,window.__Walle_Stock_Bond.listOfStock(e);case 10:t.t0=t.sent,t.next=16;break;case 13:return t.next=15,window.__Walle_Stock_Bond.listOfBond(e);case 15:t.t0=t.sent;case 16:a=t.t0,n={},s=[],i=!0,c=!1,l=void 0,t.prev=21,u=a[Symbol.iterator]();case 23:if(i=(p=u.next()).done){t.next=33;break}if(d=p.value,h=d.code,n[h]=d,s.push(h),10!==s.length){t.next=30;break}return t.abrupt("break",33);case 30:i=!0,t.next=23;break;case 33:t.next=39;break;case 35:t.prev=35,t.t1=t["catch"](21),c=!0,l=t.t1;case 39:t.prev=39,t.prev=40,i||null==u["return"]||u["return"]();case 42:if(t.prev=42,!c){t.next=45;break}throw l;case 45:return t.finish(42);case 46:return t.finish(39);case 47:return console.info("#Bonds-Beat# top bonds ..."),console.table(n),t.abrupt("return",n);case 52:t.prev=52,t.t2=t["catch"](2);case 54:case"end":return t.stop()}}),t,null,[[2,52],[21,35,39,47],[40,,42,46]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"autoShowStocks",value:function(){var t=Object(i["a"])(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(window.__Walle_Stock_Cron){t.next=2;break}return t.abrupt("return");case 2:if(!(+h()().format("HHmmss")>=93e3)){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,window.__Walle_Stock_Cron.until("083000");case 6:return t.next=8,this.showStocks();case 8:return t.next=10,window.__Walle_Stock_Cron.until("093000");case 10:return t.next=12,this.hide();case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"showStocks",value:function(){var t=Object(i["a"])(o.a.mark((function t(){var e;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.captureOfStocks();case 3:return e=t.sent,t.next=6,this.show("打板候选股票",e);case 6:t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"showBonds",value:function(){var t=Object(i["a"])(o.a.mark((function t(){var e,r,a=this;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{e=function(){var t=Object(i["a"])(o.a.mark((function t(e,r){var n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.captureOfBonds(e,r);case 2:if(n=t.sent,Object.keys(n).length){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,a.show("T0候选可转债",n,n,{update:!0,simple:!1});case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),r={type:"info",timeOut:5e3,extendedTimeOut:5e3,closeButton:!0,positionClass:"toast-bottom-right"},toastr.clear(),toastr.confirm("BONDS CHANGE TOP10","BONDS",(function(){return e("change")}),r),toastr.confirm("BONDS NETINFLOW TOP10","BONDS",(function(){return e("netinflow")}),r),toastr.confirm("BONDS NETINFLOWRATE TOP10","BONDS",(function(){return e("rate")}),r),toastr.confirm("STOCKS NETINFLOW TOP10","BONDS",(function(){return e("netinflow",{isBaseOnStock:!0})}),r),toastr.confirm("STOCKS NETINFLOWRATE TOP10","BONDS",(function(){return e("rate",{isBaseOnStock:!0})}),r)}catch(n){}case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"show",value:function(){var t=Object(i["a"])(o.a.mark((function t(e,r){var a,n,s=arguments;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=s.length>2&&void 0!==s[2]?s[2]:{},n=s.length>3&&void 0!==s[3]?s[3]:{};try{p["a"].show("","","",r,a,Object.assign({title:e,update:!1,simple:!0},n))}catch(o){}case 3:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"hide",value:function(){var t=Object(i["a"])(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:p["a"].hide();case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),m=new k,v={data:function(){return{isFullScreen:!1,market:{index:{},number:{},strength:{}},awesome:m}},mounted:function(){var t=this;return Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.listen(),setTimeout((function(){t.init(),m.autoShowStocks()}),1e4);case 2:case"end":return e.stop()}}),e)})))()},methods:{init:function(){window.__Walle_Stock_Market&&window.__Walle_Stock_Market.process()},listen:function(){var t=this;window.addEventListener("__Walle_Stock_Market_Analyse_Event",(function(e){var r=e.detail;t.market=r,t.updateChart(r.rates)}))},toggle:function(){this.isFullScreen=!this.isFullScreen},formateChartData:function(t){var e={time:[],value:[]};return t?(t.forEach((function(t,r){r%2===1?e.time.unshift(t):e.value.unshift(t)})),e):e},updateChart:function(t){if(this.$refs.chart){var e=[new c["a"]({label:"指数",backgroundColor:c["b"].blue,borderColor:c["b"].blue,data:this.formateChartData(t.index).value}),new c["a"]({label:"主力净流入400",backgroundColor:c["b"].yellow,borderColor:c["b"].yellow,data:this.formateChartData(t.netinflow).value}),new c["a"]({label:"两市",backgroundColor:c["b"].orange,borderColor:c["b"].orange,data:this.formateChartData(t.full).value}),new c["a"]({label:"上涨股",backgroundColor:c["b"].red,borderColor:c["b"].red,data:this.formateChartData(t.rise).value}),new c["a"]({label:"下跌股",backgroundColor:c["b"].green,borderColor:c["b"].green,data:this.formateChartData(t.down).value})],r=this.formateChartData(t.index).time.reverse();this.$refs.chart.update({labels:r,datasets:e})}},toMoney:function(t){return t=Math.abs(+t)>=1e8?(+t/1e8).toFixed(2)+"亿":(+t/1e4).toFixed(2)+"万",t}}},b=v,w=(r("95f2"),r("2877")),_=Object(w["a"])(b,a,n,!1,null,"0198098c",null);e["default"]=_.exports},"5b0d":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.$props.display?a("div",{staticClass:"mask",class:{"background-glass":!1!==t.$props.glass},style:{"z-index":t.$props.zindex||9999999,background:t.$props.background+" !important"}},[t._t("default",[a("img",{attrs:{alt:"Walle Stock Market",src:r("edad")}})])],2):t._e()},n=[],s={props:["display","glass","zindex","background"]},o=s,i=(r("86e2"),r("2877")),c=Object(i["a"])(o,a,n,!1,null,"667e3519",null);e["default"]=c.exports},6067:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"board",staticClass:"board background-glass",on:{click:function(t){t.stopPropagation()}}},[t.$props.options.title?r("p",{staticClass:"title"},[t._v(" "+t._s(t.$props.options.title)+" "),t.$props.options.simple?r("i",{staticClass:"kanban cursor-pointer fa fa-bar-chart",attrs:{title:"股票看板"},on:{click:t.kanban}}):t._e()]):t._e(),Object.values(this.trace).length&&!t.$props.options.simple?r("div",[r("br"),r("p",[t._v(" 跟踪 "),r("span",{staticClass:"profit cursor-pointer",class:{red:t.profit>=0,green:t.profit<0},attrs:{title:t.tooltip()}},[t._v("("+t._s(t.profit)+"%)")]),r("i",{staticClass:"refresh cursor-pointer fa fa-refresh",attrs:{title:"更新股票数据 用于榜单长期持有收益跟踪分析 亏损扭转情况和持续盈利情况"},on:{click:t.update}})]),r("table",{staticClass:"table"},[r("thead",[r("tr",t._l(t.translator,(function(e,a){return r("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(a,!0),expression:"isShowOptionField(key, true)"}],key:a,attrs:{scope:"col"}},[t._v(t._s(t.translator[a]))])})),0)]),r("tbody",t._l(t.trace,(function(e,a){return r("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(n,s){return r("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(s,!0),expression:"isShowOptionField(key, true)"}],key:s,staticClass:"cursor-default",class:{animated:"rate"===s&&e.change<0&&e.rate<0,infinite:!0,shake:!0,slower:!0},attrs:{scope:"row"}},["code"===s?r("span",[r("a",{attrs:{href:t.urlOfNetinflow(a,e.name),target:"_blank"}},[t._v(t._s(a))]),t.isT0List?r("i",{staticClass:"cursor-pointer",attrs:{title:"从榜单中移除此股票",onclick:"window.dispatchEvent(new CustomEvent('onIgnoreStockEvent', { detail: { el: this , time:'"+t.time+"', vtype:'"+t.vtype+"', listname:'"+t.listname+"', code:'"+e.code+"', name:'"+e.name+"' }}))"}},[t._v(" (x)")]):t._e()]):"name"===s?r("span",[r("a",{attrs:{href:t.urlOfQuote(a,e.name),target:"_blank"}},[t._v(t._s(e.name)+" ")]),t.markets&&t.markets.bondOfStock(a)?r("a",{attrs:{href:t.urlOfQuote(t.markets.bondOfStock(a)),target:"_blank",title:"查看可转债行情 "+t.markets.bondOfStock(a)}},[r("i",{staticClass:"fa fa-money"})]):t._e()]):"change"===s?r("span",{staticClass:"cursor-pointer"},[r("span",{staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"今日涨跌幅"}},[t._v(t._s(e[s]))]),t._v(" / "),r("span",{class:t.calcChange(a)>=0?"red":"green",staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"两日涨跌幅"}},[t._v(t._s(t.calcChange(a)))])]):r("span",[t._v(t._s(t.toMoney(s,e[s])))])])})),0)})),0)])]):t._e(),r("div",[t.$props.options.simple?t._e():r("br"),t.$props.options.simple?t._e():r("p",[t._v(" 捕获 "),r("i",{staticClass:"kanban cursor-pointer fa fa-bar-chart",attrs:{title:"股票看板"},on:{click:t.kanban}})]),r("table",{staticClass:"table"},[r("thead",[r("tr",t._l(t.translator,(function(e,a){return r("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(a),expression:"isShowOptionField(key)"}],key:a,attrs:{scope:"col"}},[t._v(t._s(t.translator[a]))])})),0)]),r("tbody",t._l(t.capture,(function(e,a){return r("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(n,s){return r("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(s),expression:"isShowOptionField(key)"}],key:s,staticClass:"cursor-default",attrs:{scope:"row"}},[r("span","code"===s?[r("a",{attrs:{href:t.urlOfNetinflow(a,e.name),target:"_blank"}},[t._v(t._s(a))]),a.startsWith("1")?t._e():r("i",{staticClass:"cursor-pointer",attrs:{title:"查看股票基因数据",onclick:"window.dispatchEvent(new CustomEvent('onShowGeneEvent', { detail: { code: '"+e.code+"', vtype:'"+t.vtype+"' }}))"}},[t._v(" (i)")])]:"name"===s?[r("a",{attrs:{href:t.urlOfQuote(a,e.name),target:"_blank"}},[t._v(t._s(e.name)+" ")]),t.markets&&t.markets.bondOfStock(a)?r("a",{attrs:{href:t.urlOfQuote(t.markets.bondOfStock(a)),target:"_blank",title:"查看可转债行情 "+t.markets.bondOfStock(a)}},[r("i",{staticClass:"fa fa-money"})]):t._e()]:[t._v(t._s(t.toMoney(s,e[s])))])])})),0)})),0)]),r("br")])])},n=[],s=(r("99af"),r("caad"),r("fb6a"),r("b0c0"),r("b680"),r("b64b"),r("07ac"),r("ac1f"),r("2532"),r("5319"),r("a34a")),o=r.n(s),i=(r("96cf"),r("1da1")),c={props:["time","vtype","listname","captureList","traceList","options"],data:function(){return{translator:{code:"股票代码",name:"股票简称",price:"股价",change:"涨跌幅",rate:"主力净占比",prevclose:"昨收",turnover:"换手率",qrr:"量比",volume:"成交量",inflow:"主力流入资金",outflow:"主力流出资金",netinflow:"主力净流入资金",hot:"热度",block:"板块",times:"连板天数"},trace:{},capture:{},profit:0,potential:0,intervalId:-1,listener:function(){},markets:window.__Walle_Stock_Markets}},computed:{isT0List:function(){return this.$props.time.includes("t0")}},watch:{"$props.options":function(t,e){this.$props.options.show?console.log("#Stock-Board# show start auto-update"):(this.stopAutoUpdate(),console.log("#Stock-Board# hidden disable auto-update"))}},created:function(){var t=this;return Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.trace=t.$props.traceList,t.capture=t.$props.captureList,e.next=4,t.calc();case 4:t.listener=function(){return t.listen.apply(t,arguments)},window.addEventListener("__Walle_Stock_Daily_Trace_Event",t.listener),t.startAutoUpdate();case 7:case"end":return e.stop()}}),e)})))()},destroyed:function(){window.removeEventListener("__Walle_Stock_Daily_Trace_Event",this.listener),this.stopAutoUpdate()},methods:{tooltip:function(){var t=" 达成涨幅 ".concat(this.profit,"% 潜在涨幅 ").concat(this.potential,"% ");return this.$props.time&&(t="".concat(this.$props.time,"-").concat(this.$props.vtype,"-").concat(this.$props.listname)+t),t},listen:function(t){var e=this,r=t.detail;return Object(i["a"])(o.a.mark((function t(){var a,n,s,i;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$props.options.update){t.next=2;break}return t.abrupt("return");case 2:if(a=r.name,r.change,n=r.trace,s=r.capture,i=e.$props.time+"-"+e.$props.vtype,i!==a){t.next=10;break}return e.trace=n[e.$props.listname],e.capture=s[e.$props.listname],t.next=9,e.calc();case 9:console.log("#Stock-Board# event update ".concat(a," ..."));case 10:case"end":return t.stop()}}),t)})))()},isShowOptionField:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var r=["hot","block","times"];if(e&&r.includes(t))return!1;var a=Object.values(this.$props.captureList)[0];return void 0!==a[t]}catch(n){return!1}},toMoney:function(t,e){return["volume","inflow","outflow","netinflow"].includes(t)&&(e=Math.abs(+e)>=1e8?(+e/1e8).toFixed(2)+"亿":(+e/1e4).toFixed(2)+"万"),e},urlOfQuote:function(t,e){t=t.replace("A","");var r={6:"sh",0:"sz",3:"sz",9:"sh",2:"sz"},a={11:"sh",12:"sz"},n=r[t[0]];return"1"===t[0]&&(n=a[t.slice(0,2)]),t="".concat(n).concat(t),"上证指数"===e?"http://quote.eastmoney.com/zs000001.html":"http://quote.eastmoney.com/".concat(t,".html")},urlOfNetinflow:function(t,e){return t=t.replace("A",""),"上证指数"===e?"http://data.eastmoney.com/zjlx/zs000001.html":"http://data.eastmoney.com/zjlx/".concat(t,".html")},kanban:function(){var t=this;return Object(i["a"])(o.a.mark((function e(){var r,a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a in r=[],t.capture)r.push(a.replace("A",""));window.dispatchEvent(new CustomEvent("onOpenKanbanEvent",{detail:{stocks:r,capture:t.capture,trace:t.trace}}));case 3:case"end":return e.stop()}}),e)})))()},update:function(){var t=this;return Object(i["a"])(o.a.mark((function e(){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,window.__Walle_Stock_Crawler){e.next=3;break}return e.abrupt("return");case 3:return r=Object.keys(t.trace),e.next=6,window.__Walle_Stock_Crawler.captureStocks(r);case 6:return t.trace=e.sent,e.next=9,t.calc();case 9:console.log("#Stock-Board# update ",t.trace),e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})))()},calc:function(){var t=this;return Object(i["a"])(o.a.mark((function e(){var r,a,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.trace){e.next=3;break}return e.abrupt("return");case 3:for(n in r=0,a=0,t.trace)r+=t.calcChange(n),a+=t.calcPotentialChange(n);t.profit=+r.toFixed(2),t.potential=+a.toFixed(2),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.warn("#Stock-Board# calc",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},calcChange:function(t){var e=this.capture[t].price,r=this.trace[t].price;return 0===r?+((this.trace[t].prevclose-this.capture[t].price)/this.capture[t].price*100).toFixed(2):+((r-e)/e*100).toFixed(2)},calcPotentialChange:function(t){return 0===this.trace[t].price?0:+(10-this.trace[t].change).toFixed(2)},stopAutoUpdate:function(){clearInterval(this.intervalId),console.log("#Stock-Board# auto-update stoped")},startAutoUpdate:function(){var t=this;return Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.__Walle_Stock_Cron){e.next=2;break}return e.abrupt("return");case 2:if(t.$props.options.update){e.next=5;break}return console.log("#Stock-Board# force disable auto-update"),e.abrupt("return");case 5:return console.log("#Stock-Board# auto-update start"),e.next=8,window.__Walle_Stock_Cron.interval(Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.update();case 1:case"end":return e.stop()}}),e)}))),null,30,"stock-board");case 8:t.intervalId=e.sent;case 9:case"end":return e.stop()}}),e)})))()}}},l=c,u=(r("9d89"),r("2877")),p=Object(u["a"])(l,a,n,!1,null,"5ef06004",null);e["default"]=p.exports},"6f53":function(t,e,r){var a=r("83ab"),n=r("df75"),s=r("fc6a"),o=r("d1e7").f,i=function(t){return function(e){var r,i=s(e),c=n(i),l=c.length,u=0,p=[];while(l>u)r=c[u++],a&&!o.call(i,r)||p.push(t?[r,i[r]]:i[r]);return p}};t.exports={entries:i(!0),values:i(!1)}},"81d5":function(t,e,r){"use strict";var a=r("7b0b"),n=r("23cb"),s=r("50c4");t.exports=function(t){var e=a(this),r=s(e.length),o=arguments.length,i=n(o>1?arguments[1]:void 0,r),c=o>2?arguments[2]:void 0,l=void 0===c?r:n(c,r);while(l>i)e[i++]=t;return e}},"86e2":function(t,e,r){"use strict";var a=r("c687"),n=r.n(a);n.a},"95f2":function(t,e,r){"use strict";var a=r("dbc5"),n=r.n(a);n.a},"9d89":function(t,e,r){"use strict";var a=r("f8b5"),n=r.n(a);n.a},a1e1:function(t,e,r){"use strict";var a=r("d4ec"),n=r("bee2"),s=r("ade3"),o=r("a026"),i=r("6067"),c=r("5b0d"),l=function(){function t(){Object(a["a"])(this,t),Object(s["a"])(this,"vm",void 0)}return Object(n["a"])(t,[{key:"show",value:function(t,e,r,a,n,s){var l=this,u={update:!0,show:!0,title:"",simple:!1};s=Object.assign({},u,s),this.hide(),this.vm=new o["a"]({components:{"ui-mask":c["default"],"ui-board":i["default"]},template:'\n        <ui-mask @click.native=\'toggle\' :display="options.show" :glass="false" :zindex="100001">\n          <ui-board :time="time" :vtype="vtype" :listname="listname" :capture-list="captureList" :trace-list="traceList" :options="options"></ui-board>\n        </ui-mask>  \n      ',data:function(){return{time:t,vtype:e,listname:r,captureList:a,traceList:n,options:s}},methods:{toggle:function(){this.options=Object.assign({},s,{show:!this.options.show}),!this.options.show&&l.hide()}}}).$mount();var p=document.querySelector("#walle-app");p.scrollTo(0,0),document.querySelector("#walle-app").appendChild(this.vm.$el)}},{key:"hide",value:function(){this.vm&&this.vm.$el&&document.querySelector("#walle-app").removeChild(this.vm.$el),this.vm=null}}]),t}();e["a"]=new l},c687:function(t,e,r){},cb29:function(t,e,r){var a=r("23e7"),n=r("81d5"),s=r("44d2");a({target:"Array",proto:!0},{fill:n}),s("fill")},dbc5:function(t,e,r){},edad:function(t,e,r){t.exports=r.p+"img/logo.jpg"},f8b5:function(t,e,r){}}]);