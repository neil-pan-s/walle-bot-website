(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df1c2190"],{"26e9":function(e,t,r){"use strict";var n=r("23e7"),a=r("e8b5"),s=[].reverse,o=[1,2];n({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),s.call(this)}})},"2fe6":function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return o}));r("cb29");var n=r("d4ec"),a=r("ade3"),s={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(11, 188, 73)",blue:"rgb(120, 164, 250)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},o=function e(t){var r=t.label,o=t.fill,i=void 0!==o&&o,c=t.backgroundColor,u=void 0===c?s.red:c,l=t.borderColor,d=void 0===l?s.red:l,h=t.data;Object(n["a"])(this,e),Object(a["a"])(this,"label",void 0),Object(a["a"])(this,"fill",void 0),Object(a["a"])(this,"backgroundColor",void 0),Object(a["a"])(this,"borderColor",void 0),Object(a["a"])(this,"data",void 0),this.label=r,this.fill=i,this.backgroundColor=u,this.borderColor=d,this.data=h}},"3da8":function(e,t,r){},"49b9":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.market.index.sse?r("div",{staticClass:"trend",class:{"full-screen":e.isFullScreen},on:{click:function(t){return e.toggle()}}},[r("div",{staticClass:"info"},[r("span",{staticClass:"cursor-pointer",class:{red:e.market.index.sse.change>=0,green:e.market.index.sse.change<0},attrs:{title:"上证指数"}},[e._v(e._s(e.market.index.sse.price)+" "+e._s(e.market.index.sse.change)+"%")]),r("span",{staticClass:"cursor-pointer",class:{red:e.market.index.szse.change>=0,green:e.market.index.szse.change<0},attrs:{title:"深成指数"}},[e._v(e._s(e.market.index.szse.price)+" "+e._s(e.market.index.szse.change)+"%")]),r("span",{staticClass:"cursor-pointer",class:e.market.index.sse.rate+e.market.index.szse.rate>=0?"red":"green",attrs:{title:"上证: "+e.market.index.sse.rate+"% 深成: "+e.market.index.szse.rate+"%"}},[e._v("主力 "+e._s((e.market.index.sse.rate+e.market.index.szse.rate).toFixed(2))+"% ")]),r("span",{staticClass:"cursor-pointer",class:e.market.index.sse.netinflow+e.market.index.szse.netinflow>=0?"red":"green",attrs:{title:"上证: "+e.toMoney(e.market.index.sse.netinflow)+" 深成: "+e.toMoney(e.market.index.szse.netinflow)}},[e._v("资金 "+e._s(e.toMoney(e.market.index.sse.netinflow+e.market.index.szse.netinflow))+" ")]),r("span",{staticClass:"cursor-pointer",class:e.market.index.north.hk2sh.dayNetAmtIn+e.market.index.north.hk2sz.dayNetAmtIn>=0?"red":"green",attrs:{title:"沪股通: "+e.toMoney(1e4*e.market.index.north.hk2sh.dayNetAmtIn)+" 仓位: "+(e.market.index.north.hk2sh.dayNetAmtIn/e.market.index.north.hk2sh.dayAmtRemain*100).toFixed(2)+"% 深股通: "+e.toMoney(1e4*e.market.index.north.hk2sz.dayNetAmtIn)+" 仓位: "+(e.market.index.north.hk2sz.dayNetAmtIn/e.market.index.north.hk2sz.dayAmtRemain*100).toFixed(2)+"%"}},[e._v("北向 "+e._s(e.toMoney(1e4*(e.market.index.north.hk2sh.dayNetAmtIn+e.market.index.north.hk2sz.dayNetAmtIn)))+" ")]),r("span",{staticClass:"cursor-pointer red",attrs:{title:"上证: "+e.toMoney(e.market.index.sse.amount)+" 深成: "+e.toMoney(e.market.index.szse.amount)}},[e._v("两市 "+e._s(e.toMoney(e.market.index.sse.amount+e.market.index.szse.amount))+" ")]),r("span",{staticClass:"cursor-pointer red",attrs:{title:"涨停: "+e.market.number.limitup+" 准涨停: "+e.market.number.prelimitup}},[e._v(" 上涨 "+e._s(e.market.number.rise)+" ")]),r("span",{staticClass:"cursor-pointer green",attrs:{title:"跌停: "+e.market.number.limitdown+" 准跌停: "+e.market.number.prelimitdown}},[e._v(" 下跌 "+e._s(e.market.number.down)+" ")]),r("span",{class:{red:(e.market.strength.full||0)>=0,green:e.market.strength.full<0}},[e._v(" 市场强度: "+e._s(e.market.strength.full||0)+"% ")]),r("span",{staticClass:"red"},[e._v("上涨 "+e._s(e.market.strength.rise||0)+"%")]),r("span",{staticClass:"green"},[e._v(" 下跌 "+e._s(e.market.strength.down||0)+"%")]),r("span",{class:{red:(e.market.strength.netinflow||0)>=0,green:e.market.strength.netinflow<0}},[e._v(" 主力净流入400 "+e._s(e.market.strength.netinflow||0)+"%")]),r("i",{directives:[{name:"show",rawName:"v-show",value:!e.isFullScreen,expression:"!isFullScreen"}],staticClass:"awesome red cursor-pointer fa fa-dot-circle-o",attrs:{title:"潜力股票池"},on:{click:function(t){return t.stopPropagation(),e.awesome.showComponds()}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:!e.isFullScreen,expression:"!isFullScreen"}],staticClass:"awesome red cursor-pointer fa fa-rocket",attrs:{title:"打板候选股票 (开盘前集合竞价挂单打板)"},on:{click:function(t){return t.stopPropagation(),e.awesome.showStocks()}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:!e.isFullScreen,expression:"!isFullScreen"}],staticClass:"awesome red cursor-pointer fa fa-money",attrs:{title:"T0候选可转债 (开盘前集合竞价挂单高胜率超短时T0交易)"},on:{click:function(t){return t.stopPropagation(),e.awesome.showBonds()}}})]),r("ui-chart",{ref:"chart",staticClass:"chart",nativeOn:{click:function(e){e.stopPropagation()}}})],1):e._e()},a=[],s=(r("4160"),r("26e9"),r("b680"),r("159b"),r("4795"),r("a34a")),o=r.n(s),i=(r("96cf"),r("1da1")),c=r("2fe6"),u=(r("a4d3"),r("e01a"),r("d28b"),r("b0c0"),r("b64b"),r("d3b7"),r("07ac"),r("3ca3"),r("ddb0"),r("d4ec")),l=r("bee2"),d=r("a1e1"),h=r("c1df"),p=r.n(h),f="continue-limitup-top10",k="trend-top10",b=function(){function e(){Object(u["a"])(this,e)}return Object(l["a"])(e,[{key:"captureOfComponds",value:function(){var e=Object(i["a"])(o.a.mark((function e(){var t,r,n,a,s,i,c,u,l,d,h,p,f,b,w,m;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,window.__Walle_Stock_Crawler&&window.__Walle_Stock_Validator){e.next=3;break}return e.abrupt("return",{});case 3:return e.next=5,window.__Walle_Stock_Crawler.captureList(k);case 5:t=e.sent,r={},n=[],a=!0,s=!1,i=void 0,e.prev=10,c=t[Symbol.iterator]();case 12:if(a=(u=c.next()).done){e.next=27;break}return l=u.value,d=l.code,h=l.name,e.next=18,window.__Walle_Stock_Validator.isValidStock(d,h);case 18:if(e.sent){e.next=20;break}return e.abrupt("continue",24);case 20:if(n.push(d),r[d]=l,20!==n.length){e.next=24;break}return e.abrupt("break",27);case 24:a=!0,e.next=12;break;case 27:e.next=33;break;case 29:e.prev=29,e.t0=e["catch"](10),s=!0,i=e.t0;case 33:e.prev=33,e.prev=34,a||null==c["return"]||c["return"]();case 36:if(e.prev=36,!s){e.next=39;break}throw i;case 39:return e.finish(36);case 40:return e.finish(33);case 41:return console.info("#Stock-Beat# componds indicator stocks ..."),console.table(r),e.next=45,window.__Walle_Stock_Crawler.captureStocks(n);case 45:for(p=e.sent,f={},b=0,w=n;b<w.length;b++)m=w[b],f["A".concat(m)]=p[m];return e.abrupt("return",f);case 51:e.prev=51,e.t1=e["catch"](0);case 53:case"end":return e.stop()}}),e,null,[[0,51],[10,29,33,41],[34,,36,40]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"captureOfStocks",value:function(){var e=Object(i["a"])(o.a.mark((function e(){var t,r,n,a,s,i,c,u,l,d,h,p,k,b,w,m,v;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,window.__Walle_Stock_Crawler&&window.__Walle_Stock_Validator){e.next=3;break}return e.abrupt("return",{});case 3:return e.next=5,window.__Walle_Stock_Crawler.captureList(f);case 5:t=e.sent,r={},n=[],a=!0,s=!1,i=void 0,e.prev=10,c=t[Symbol.iterator]();case 12:if(a=(u=c.next()).done){e.next=27;break}return l=u.value,d=l.code,h=l.name,e.next=18,window.__Walle_Stock_Validator.isValidStock(d,h);case 18:if(e.sent){e.next=20;break}return e.abrupt("continue",24);case 20:if(n.push(d),r[d]=l,20!==n.length){e.next=24;break}return e.abrupt("break",27);case 24:a=!0,e.next=12;break;case 27:e.next=33;break;case 29:e.prev=29,e.t0=e["catch"](10),s=!0,i=e.t0;case 33:e.prev=33,e.prev=34,a||null==c["return"]||c["return"]();case 36:if(e.prev=36,!s){e.next=39;break}throw i;case 39:return e.finish(36);case 40:return e.finish(33);case 41:return console.info("#Stock-Beat# continue limitup stocks ..."),console.table(r),e.next=45,window.__Walle_Stock_Crawler.captureStocks(n);case 45:for(p=e.sent,k={},b=0,w=n;b<w.length;b++)m=w[b],v=r[m]["times"],v&&v>0&&(k["A".concat(m)]=p[m],k["A".concat(m)]["times"]=r[m]["times"]);return e.abrupt("return",k);case 51:e.prev=51,e.t1=e["catch"](0);case 53:case"end":return e.stop()}}),e,null,[[0,51],[10,29,33,41],[34,,36,40]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"captureOfBonds",value:function(){var e=Object(i["a"])(o.a.mark((function e(){var t,r,n,a,s,i,c,u,l,d,h,p,f=arguments;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=f.length>0&&void 0!==f[0]?f[0]:"change",r=f.length>1&&void 0!==f[1]?f[1]:{isBaseOnStock:!1},e.prev=2,window.__Walle_Stock_Bond&&window.__Walle_Stock_Pool){e.next=5;break}return e.abrupt("return",{});case 5:if(window.__Walle_Stock_Pool.isRunning){e.next=7;break}return e.abrupt("return",{});case 7:if(!r.isBaseOnStock){e.next=13;break}return e.next=10,window.__Walle_Stock_Bond.listOfStock(t);case 10:e.t0=e.sent,e.next=16;break;case 13:return e.next=15,window.__Walle_Stock_Bond.listOfBond(t);case 15:e.t0=e.sent;case 16:n=e.t0,a={},s=[],i=!0,c=!1,u=void 0,e.prev=21,l=n[Symbol.iterator]();case 23:if(i=(d=l.next()).done){e.next=33;break}if(h=d.value,p=h.code,a[p]=h,s.push(p),10!==s.length){e.next=30;break}return e.abrupt("break",33);case 30:i=!0,e.next=23;break;case 33:e.next=39;break;case 35:e.prev=35,e.t1=e["catch"](21),c=!0,u=e.t1;case 39:e.prev=39,e.prev=40,i||null==l["return"]||l["return"]();case 42:if(e.prev=42,!c){e.next=45;break}throw u;case 45:return e.finish(42);case 46:return e.finish(39);case 47:return console.info("#Bonds-Beat# top bonds ..."),console.table(a),e.abrupt("return",a);case 52:e.prev=52,e.t2=e["catch"](2);case 54:case"end":return e.stop()}}),e,null,[[2,52],[21,35,39,47],[40,,42,46]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"autoShowStocks",value:function(){var e=Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.__Walle_Stock_Cron){e.next=2;break}return e.abrupt("return");case 2:if(!(+p()().format("HHmmss")>=93e3)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,window.__Walle_Stock_Cron.until("083000");case 6:return e.next=8,this.showStocks();case 8:return e.next=10,window.__Walle_Stock_Cron.until("093000");case 10:return e.next=12,this.hide();case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"showComponds",value:function(){var e=Object(i["a"])(o.a.mark((function e(){var t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.captureOfComponds();case 3:return t=e.sent,e.next=6,this.show("潜力股票池",t);case 6:e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"showStocks",value:function(){var e=Object(i["a"])(o.a.mark((function e(){var t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.captureOfStocks();case 3:return t=e.sent,e.next=6,this.show("打板候选股票",t);case 6:e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"showBonds",value:function(){var e=Object(i["a"])(o.a.mark((function e(){var t,r,n=this;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{t=function(){var e=Object(i["a"])(o.a.mark((function e(t,r,a){var s;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.captureOfBonds(r,a);case 2:if(s=e.sent,Object.keys(s).length){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,n.show(t||"T0候选可转债",s,s,{update:!0,simple:!1});case 7:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),r={type:"info",timeOut:5e3,extendedTimeOut:5e3,closeButton:!0,positionClass:"toast-bottom-right"},toastr.clear(),toastr.confirm("T0候选可转债-涨幅TOP10","BONDS",(function(){return t("T0候选可转债-涨幅TOP10","change")}),r),toastr.confirm("T0候选可转债-净流入TOP10","BONDS",(function(){return t("T0候选可转债-净流入TOP10","netinflow")}),r),toastr.confirm("T0候选可转债-净占比TOP10","BONDS",(function(){return t("T0候选可转债-净占比TOP10","rate")}),r),toastr.confirm("T0候选可转债-正股净流入TOP10","BONDS",(function(){return t("T0候选可转债-正股净流入TOP10","netinflow",{isBaseOnStock:!0})}),r),toastr.confirm("T0候选可转债-正股净占比TOP10","BONDS",(function(){return t("T0候选可转债-正股净占比TOP10","rate",{isBaseOnStock:!0})}),r)}catch(a){}case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"show",value:function(){var e=Object(i["a"])(o.a.mark((function e(t,r){var n,a,s=arguments;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=s.length>2&&void 0!==s[2]?s[2]:{},a=s.length>3&&void 0!==s[3]?s[3]:{},e.prev=2,Object.values(r).length){e.next=5;break}return e.abrupt("return");case 5:d["a"].show("","","",r,n,Object.assign({title:t,update:!1,simple:!0},a)),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](2);case 10:case"end":return e.stop()}}),e,null,[[2,8]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"hide",value:function(){var e=Object(i["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d["a"].hide();case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),w=new b,m={data:function(){return{isFullScreen:!1,market:{index:{},number:{},strength:{}},awesome:w}},mounted:function(){var e=this;return Object(i["a"])(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.listen(),setTimeout((function(){e.init(),w.autoShowStocks()}),1e4);case 2:case"end":return t.stop()}}),t)})))()},methods:{init:function(){window.__Walle_Stock_Market&&window.__Walle_Stock_Market.process()},listen:function(){var e=this;window.addEventListener("__Walle_Stock_Market_Analyse_Event",(function(t){var r=t.detail;e.market=r,e.updateChart(r.rates)}))},toggle:function(){this.isFullScreen=!this.isFullScreen},formateChartData:function(e){var t={time:[],value:[]};return e?(e.forEach((function(e,r){r%2===1?t.time.unshift(e):t.value.unshift(e)})),t):t},updateChart:function(e){if(this.$refs.chart){var t=[new c["a"]({label:"指数",backgroundColor:c["b"].blue,borderColor:c["b"].blue,data:this.formateChartData(e.index).value}),new c["a"]({label:"主力净流入400",backgroundColor:c["b"].yellow,borderColor:c["b"].yellow,data:this.formateChartData(e.netinflow).value}),new c["a"]({label:"两市",backgroundColor:c["b"].orange,borderColor:c["b"].orange,data:this.formateChartData(e.full).value}),new c["a"]({label:"上涨股",backgroundColor:c["b"].red,borderColor:c["b"].red,data:this.formateChartData(e.rise).value}),new c["a"]({label:"下跌股",backgroundColor:c["b"].green,borderColor:c["b"].green,data:this.formateChartData(e.down).value})],r=this.formateChartData(e.index).time.reverse();this.$refs.chart.update({labels:r,datasets:t})}},toMoney:function(e){return e=Math.abs(+e)>=1e8?(+e/1e8).toFixed(2)+"亿":(+e/1e4).toFixed(2)+"万",e}}},v=m,_=(r("4f1e"),r("2877")),x=Object(_["a"])(v,n,a,!1,null,"3abe3048",null);t["default"]=x.exports},"4f1e":function(e,t,r){"use strict";var n=r("3da8"),a=r.n(n);a.a},"81d5":function(e,t,r){"use strict";var n=r("7b0b"),a=r("23cb"),s=r("50c4");e.exports=function(e){var t=n(this),r=s(t.length),o=arguments.length,i=a(o>1?arguments[1]:void 0,r),c=o>2?arguments[2]:void 0,u=void 0===c?r:a(c,r);while(u>i)t[i++]=e;return t}},cb29:function(e,t,r){var n=r("23e7"),a=r("81d5"),s=r("44d2");n({target:"Array",proto:!0},{fill:a}),s("fill")}}]);