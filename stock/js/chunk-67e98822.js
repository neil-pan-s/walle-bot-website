(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67e98822"],{"49b9":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.market.index.sse?n("div",{staticClass:"trend",class:{"full-screen":e.isFullScreen},on:{click:function(t){return e.toggle()}}},[n("div",{staticClass:"info"},[n("span",{staticClass:"cursor-pointer",class:{red:e.market.index.sse.change>=0,green:e.market.index.sse.change<0},attrs:{title:"上证指数"}},[e._v(e._s(e.market.index.sse.price)+" "+e._s(e.market.index.sse.change)+"%")]),n("span",{staticClass:"cursor-pointer",class:{red:e.market.index.szse.change>=0,green:e.market.index.szse.change<0},attrs:{title:"深成指数"}},[e._v(e._s(e.market.index.szse.price)+" "+e._s(e.market.index.szse.change)+"%")]),n("span",{staticClass:"cursor-pointer",class:e.market.index.sse.rate+e.market.index.szse.rate>=0?"red":"green",attrs:{title:"上证: "+e.market.index.sse.rate+"% 深成: "+e.market.index.szse.rate+"%"}},[e._v("主力 "+e._s((e.market.index.sse.rate+e.market.index.szse.rate).toFixed(2))+"% ")]),n("span",{staticClass:"cursor-pointer",class:e.market.index.sse.netinflow+e.market.index.szse.netinflow>=0?"red":"green",attrs:{title:"上证: "+e.toMoney(e.market.index.sse.netinflow)+" 深成: "+e.toMoney(e.market.index.szse.netinflow)}},[e._v("资金 "+e._s(e.toMoney(e.market.index.sse.netinflow+e.market.index.szse.netinflow))+" ")]),n("span",{staticClass:"cursor-pointer",class:e.market.index.north.hk2sh.dayNetAmtIn+e.market.index.north.hk2sz.dayNetAmtIn>=0?"red":"green",attrs:{title:"沪股通: "+e.toMoney(1e4*e.market.index.north.hk2sh.dayNetAmtIn)+" 仓位: "+(e.market.index.north.hk2sh.dayNetAmtIn/e.market.index.north.hk2sh.dayAmtRemain*100).toFixed(2)+"% 深股通: "+e.toMoney(1e4*e.market.index.north.hk2sz.dayNetAmtIn)+" 仓位: "+(e.market.index.north.hk2sz.dayNetAmtIn/e.market.index.north.hk2sz.dayAmtRemain*100).toFixed(2)+"%"}},[e._v("北向 "+e._s(e.toMoney(1e4*(e.market.index.north.hk2sh.dayNetAmtIn+e.market.index.north.hk2sz.dayNetAmtIn)))+" ")]),n("span",{staticClass:"cursor-pointer red",attrs:{title:"上证: "+e.toMoney(e.market.index.sse.amount)+" 深成: "+e.toMoney(e.market.index.szse.amount)}},[e._v("两市 "+e._s(e.toMoney(e.market.index.sse.amount+e.market.index.szse.amount))+" ")]),n("span",{staticClass:"cursor-pointer red",attrs:{title:"涨停: "+e.market.number.limitup+" 准涨停: "+e.market.number.prelimitup}},[e._v(" 上涨 "+e._s(e.market.number.rise)+" ")]),n("span",{staticClass:"cursor-pointer green",attrs:{title:"跌停: "+e.market.number.limitdown+" 准跌停: "+e.market.number.prelimitdown}},[e._v(" 下跌 "+e._s(e.market.number.down)+" ")]),n("span",{class:{red:(e.market.strength.full||0)>=0,green:e.market.strength.full<0}},[e._v(" 市场强度: "+e._s(e.market.strength.full||0)+"% ")]),n("span",{staticClass:"red"},[e._v("上涨 "+e._s(e.market.strength.rise||0)+"%")]),n("span",{staticClass:"green"},[e._v(" 下跌 "+e._s(e.market.strength.down||0)+"%")]),n("span",{class:{red:(e.market.strength.netinflow||0)>=0,green:e.market.strength.netinflow<0}},[e._v(" 主力净流入400 "+e._s(e.market.strength.netinflow||0)+"%")]),n("i",{directives:[{name:"show",rawName:"v-show",value:!e.isFullScreen,expression:"!isFullScreen"}],staticClass:"awesome cursor-pointer",attrs:{title:"打板候选股票 (开盘前集合竞价挂单打板)"},on:{click:function(t){return t.stopPropagation(),e.awesome.showStocks()}}},[e._v("🎯")]),n("i",{directives:[{name:"show",rawName:"v-show",value:!e.isFullScreen,expression:"!isFullScreen"}],staticClass:"awesome cursor-pointer",attrs:{title:"T0候选可转债"},on:{click:function(t){return t.stopPropagation(),e.awesome.showBonds()}}},[e._v("🚀")])]),n("ui-chart",{ref:"chart",staticClass:"chart",nativeOn:{click:function(e){e.stopPropagation()}}})],1):e._e()},a=[],s=(n("4160"),n("26e9"),n("b680"),n("159b"),n("4795"),n("a34a")),o=n.n(s),i=(n("96cf"),n("1da1")),c=n("2fe6"),u=(n("a4d3"),n("e01a"),n("d28b"),n("b0c0"),n("b64b"),n("d3b7"),n("3ca3"),n("ddb0"),n("d4ec")),l=n("bee2"),d=n("a1e1"),h=n("c1df"),k=n.n(h),p="continue-limitup-top10",f=function(){function e(){Object(u["a"])(this,e)}return Object(l["a"])(e,[{key:"captureOfStocks",value:function(){var e=Object(i["a"])(o.a.mark((function e(){var t,n,r,a,s,i,c,u,l,d,h,k,f,m,w,b;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,window.__Walle_Stock_Crawler&&window.__Walle_Stock_Validator){e.next=3;break}return e.abrupt("return",{});case 3:return e.next=5,window.__Walle_Stock_Crawler.captureList(p);case 5:t=e.sent,n={},r=[],a=!0,s=!1,i=void 0,e.prev=10,c=t[Symbol.iterator]();case 12:if(a=(u=c.next()).done){e.next=27;break}return l=u.value,d=l.code,h=l.name,e.next=18,window.__Walle_Stock_Validator.isValidStock(d,h);case 18:if(e.sent){e.next=20;break}return e.abrupt("continue",24);case 20:if(r.push(d),n[d]=l,20!==r.length){e.next=24;break}return e.abrupt("break",27);case 24:a=!0,e.next=12;break;case 27:e.next=33;break;case 29:e.prev=29,e.t0=e["catch"](10),s=!0,i=e.t0;case 33:e.prev=33,e.prev=34,a||null==c["return"]||c["return"]();case 36:if(e.prev=36,!s){e.next=39;break}throw i;case 39:return e.finish(36);case 40:return e.finish(33);case 41:return console.info("#Stock-Beat# continue limitup stocks ..."),console.table(n),e.next=45,window.__Walle_Stock_Crawler.captureStocks(r);case 45:for(k=e.sent,f={},m=0,w=r;m<w.length;m++)b=w[m],f["A".concat(b)]=k[b],f["A".concat(b)]["times"]=n[b]["times"];return e.abrupt("return",f);case 51:e.prev=51,e.t1=e["catch"](0);case 53:case"end":return e.stop()}}),e,null,[[0,51],[10,29,33,41],[34,,36,40]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"captureOfBonds",value:function(){var e=Object(i["a"])(o.a.mark((function e(){var t,n,r,a,s,i,c,u,l,d,h,k,p=arguments;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=p.length>0&&void 0!==p[0]?p[0]:"change",n=p.length>1&&void 0!==p[1]?p[1]:{isBaseOnStock:!1},e.prev=2,window.__Walle_Stock_Bond&&window.__Walle_Stock_Pool){e.next=5;break}return e.abrupt("return",{});case 5:if(window.__Walle_Stock_Pool.isRunning){e.next=7;break}return e.abrupt("return",{});case 7:if(!n.isBaseOnStock){e.next=13;break}return e.next=10,window.__Walle_Stock_Bond.listOfStock(t);case 10:e.t0=e.sent,e.next=16;break;case 13:return e.next=15,window.__Walle_Stock_Bond.listOfBond(t);case 15:e.t0=e.sent;case 16:r=e.t0,a={},s=[],i=!0,c=!1,u=void 0,e.prev=21,l=r[Symbol.iterator]();case 23:if(i=(d=l.next()).done){e.next=33;break}if(h=d.value,k=h.code,a[k]=h,s.push(k),10!==s.length){e.next=30;break}return e.abrupt("break",33);case 30:i=!0,e.next=23;break;case 33:e.next=39;break;case 35:e.prev=35,e.t1=e["catch"](21),c=!0,u=e.t1;case 39:e.prev=39,e.prev=40,i||null==l["return"]||l["return"]();case 42:if(e.prev=42,!c){e.next=45;break}throw u;case 45:return e.finish(42);case 46:return e.finish(39);case 47:return console.info("#Bonds-Beat# top bonds ..."),console.table(a),e.abrupt("return",a);case 52:e.prev=52,e.t2=e["catch"](2);case 54:case"end":return e.stop()}}),e,null,[[2,52],[21,35,39,47],[40,,42,46]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"autoShowStocks",value:function(){var e=Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.__Walle_Stock_Cron){e.next=2;break}return e.abrupt("return");case 2:if(!(+k()().format("HHmmss")>=93e3)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,window.__Walle_Stock_Cron.until("083000");case 6:return e.next=8,this.showStocks();case 8:return e.next=10,window.__Walle_Stock_Cron.until("093000");case 10:return e.next=12,this.hide();case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"showStocks",value:function(){var e=Object(i["a"])(o.a.mark((function e(){var t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.captureOfStocks();case 3:return t=e.sent,e.next=6,this.show("打板候选股票",t);case 6:e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"showBonds",value:function(){var e=Object(i["a"])(o.a.mark((function e(){var t,n=this;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{t=function(){var e=Object(i["a"])(o.a.mark((function e(t,r){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.captureOfBonds(t,r);case 2:if(a=e.sent,Object.keys(a).length){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,n.show("T0候选可转债",a,a,{update:!0,simple:!1});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),toastr.clear(),toastr.confirm("BONDS CHANGE TOP10","BONDS",(function(){return t("change")}),{type:"info"}),toastr.confirm("BONDS NETINFLOW TOP10","BONDS",(function(){return t("netinflow")}),{type:"info"}),toastr.confirm("BONDS NETINFLOWRATE TOP10","BONDS",(function(){return t("rate")}),{type:"info"}),toastr.confirm("STOCKS NETINFLOW TOP10","BONDS",(function(){return t("netinflow",{isBaseOnStock:!0})}),{type:"info"}),toastr.confirm("STOCKS NETINFLOWRATE TOP10","BONDS",(function(){return t("rate",{isBaseOnStock:!0})}),{type:"info"})}catch(r){}case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"show",value:function(){var e=Object(i["a"])(o.a.mark((function e(t,n){var r,a,s=arguments;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=s.length>2&&void 0!==s[2]?s[2]:{},a=s.length>3&&void 0!==s[3]?s[3]:{};try{d["a"].show("","","",n,r,Object.assign({title:t,update:!1,simple:!0},a))}catch(o){}case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"hide",value:function(){var e=Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d["a"].hide();case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),m=new f,w={data:function(){return{isFullScreen:!1,market:{index:{},number:{},strength:{}},awesome:m}},mounted:function(){var e=this;return Object(i["a"])(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.listen(),setTimeout((function(){e.init(),m.autoShowStocks()}),1e4);case 2:case"end":return t.stop()}}),t)})))()},methods:{init:function(){window.__Walle_Stock_Market&&window.__Walle_Stock_Market.process()},listen:function(){var e=this;window.addEventListener("__Walle_Stock_Market_Analyse_Event",(function(t){var n=t.detail;e.market=n,e.updateChart(n.rates)}))},toggle:function(){this.isFullScreen=!this.isFullScreen},formateChartData:function(e){var t={time:[],value:[]};return e?(e.forEach((function(e,n){n%2===1?t.time.unshift(e):t.value.unshift(e)})),t):t},updateChart:function(e){if(this.$refs.chart){var t=[new c["a"]({label:"指数",backgroundColor:c["b"].blue,borderColor:c["b"].blue,data:this.formateChartData(e.index).value}),new c["a"]({label:"主力净流入400",backgroundColor:c["b"].yellow,borderColor:c["b"].yellow,data:this.formateChartData(e.netinflow).value}),new c["a"]({label:"两市",backgroundColor:c["b"].orange,borderColor:c["b"].orange,data:this.formateChartData(e.full).value}),new c["a"]({label:"上涨股",backgroundColor:c["b"].red,borderColor:c["b"].red,data:this.formateChartData(e.rise).value}),new c["a"]({label:"下跌股",backgroundColor:c["b"].green,borderColor:c["b"].green,data:this.formateChartData(e.down).value})],n=this.formateChartData(e.index).time.reverse();this.$refs.chart.update({labels:n,datasets:t})}},toMoney:function(e){return e=Math.abs(+e)>=1e8?(+e/1e8).toFixed(2)+"亿":(+e/1e4).toFixed(2)+"万",e}}},b=w,_=(n("4ed3"),n("2877")),v=Object(_["a"])(b,r,a,!1,null,"03930a59",null);t["default"]=v.exports},"4ed3":function(e,t,n){"use strict";var r=n("6602"),a=n.n(r);a.a},6602:function(e,t,n){}}]);