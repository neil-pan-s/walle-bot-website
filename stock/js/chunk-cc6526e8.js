(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc6526e8","chunk-05dc9f5c","chunk-6fd25288"],{"07ac":function(t,e,a){var i=a("23e7"),r=a("6f53").values;i({target:"Object",stat:!0},{values:function(t){return r(t)}})},"26e9":function(t,e,a){"use strict";var i=a("23e7"),r=a("e8b5"),s=[].reverse,n=[1,2];i({target:"Array",proto:!0,forced:String(n)===String(n.reverse())},{reverse:function(){return r(this)&&(this.length=this.length),s.call(this)}})},"2fe6":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return n}));a("cb29");var i=a("276c"),r=a("fc11"),s={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(11, 188, 73)",blue:"rgb(120, 164, 250)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},n=function t(e){var a=e.label,n=e.fill,o=void 0!==n&&n,c=e.backgroundColor,l=void 0===c?s.red:c,u=e.borderColor,h=void 0===u?s.red:u,p=e.data;Object(i["a"])(this,t),Object(r["a"])(this,"label",void 0),Object(r["a"])(this,"fill",void 0),Object(r["a"])(this,"backgroundColor",void 0),Object(r["a"])(this,"borderColor",void 0),Object(r["a"])(this,"data",void 0),this.label=a,this.fill=o,this.backgroundColor=l,this.borderColor=h,this.data=p}},"314b":function(t,e,a){"use strict";var i=a("70c5"),r=a.n(i);r.a},"416a":function(t,e,a){"use strict";var i=a("7794"),r=a.n(i);r.a},"575e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"today"},[a("ui-nav",[t._l(t.times,(function(e,i){return a("ui-nav-item",{key:e.time+i,attrs:{selected:t.time===e.time},nativeOn:{click:function(a){return t.onChangeTime(e.time)}}},[t._v(" "+t._s(e.time.toUpperCase())+" "),e.rule.date?a("span",{attrs:{title:"移除此临时捕获时间点"},on:{click:function(a){return t.onRemoveTempCapture(e.rule.capture,e.rule.date)}}},[t._v("X")]):t._e()])})),a("ui-nav-item",{attrs:{title:"设置临时捕获时间点(如大盘反弹)"},nativeOn:{click:function(e){return t.onSetTempCapture()}}},[t._v("✚")])],2),a("ui-nav",[t._l(t.vtypes,(function(e){return a("ui-nav-item",{key:e,attrs:{selected:t.vtype===e&&!t.isShowAll,title:JSON.stringify(t.validators[e],null,4)}},[a("a",{on:{click:function(a){return t.onChangeVtype(e)}}},[t._v(t._s(e.toUpperCase()))])])})),a("ui-nav-item",{attrs:{selected:t.isShowAll}},[a("a",{on:{click:function(e){return e.stopPropagation(),t.toggleAllLists(e)}}},[t._v("☰")])])],2),t.isShowAll?t._e():a("ui-nav",t._l(t.lists,(function(e){var i=e.change,r=e.name;return a("ui-nav-item",{key:t.time+t.vtype+r,attrs:{selected:t.list===r}},[a("ui-icon-indicator",{attrs:{time:t.time,vtype:t.vtype,listname:r,trace:t.trace}}),a("a",{attrs:{title:t.titleOfList(r,t.vtype)},on:{click:function(e){return t.onChangeList(r,t.vtype)}}},[t._v(t._s(r))]),a("a",{on:{click:function(e){return t.onShowStocksBoard(e,r,t.vtype)}}},[t._v(" ("+t._s(i)+"%)")]),a("ui-icon-top",{attrs:{time:t.time,vtype:t.vtype,listname:r}}),a("ui-icon-strategy",{attrs:{time:t.time,vtype:t.vtype,listname:r}}),a("ui-icon-up",{attrs:{time:t.time,vtype:t.vtype,listname:r}}),a("ui-icon-down",{attrs:{time:t.time,vtype:t.vtype,listname:r}}),a("ui-icon-hot",{attrs:{time:t.time,vtype:t.vtype,listname:r,trace:t.trace}}),a("ui-icon-ratio",{attrs:{time:t.time,vtype:t.vtype,listname:r,trace:t.trace}})],1)})),1),t.isShowAll?a("div",{staticClass:"all-lists"},[a("ui-nav",[a("ui-nav-item",{attrs:{selected:-1e3===t.alllistsFilter}},[a("a",{on:{click:function(e){t.alllistsFilter=-1e3,t.updateAllLists()}}},[t._v("ALL")])]),a("ui-nav-item",{attrs:{selected:0===t.alllistsFilter}},[a("a",{on:{click:function(e){t.alllistsFilter=0,t.updateAllLists()}}},[t._v(">0%")])]),a("ui-nav-item",{attrs:{selected:5===t.alllistsFilter}},[a("a",{on:{click:function(e){t.alllistsFilter=5,t.updateAllLists()}}},[t._v(">5.0%")])]),a("ui-nav-item",{attrs:{selected:10===t.alllistsFilter}},[a("a",{on:{click:function(e){t.alllistsFilter=10,t.updateAllLists()}}},[t._v(">10.0%")])]),a("ui-nav-item",{attrs:{selected:20===t.alllistsFilter}},[a("a",{on:{click:function(e){t.alllistsFilter=20,t.updateAllLists()}}},[t._v(">20.0%")])]),a("ui-nav-item",{attrs:{selected:40===t.alllistsFilter}},[a("a",{on:{click:function(e){t.alllistsFilter=40,t.updateAllLists()}}},[t._v(">40.0%")])]),a("ui-nav-item",{attrs:{selected:60===t.alllistsFilter}},[a("a",{on:{click:function(e){t.alllistsFilter=60,t.updateAllLists()}}},[t._v(">60.0%")])]),a("ui-nav-item",{attrs:{selected:80===t.alllistsFilter}},[a("a",{on:{click:function(e){t.alllistsFilter=80,t.updateAllLists()}}},[t._v(">80.0%")])]),a("ui-nav-item",{attrs:{selected:"ratio"===t.alllistsFilter}},[a("a",{on:{click:function(e){t.alllistsFilter="ratio",t.updateAllLists()}}},[t._v("S-RATIO")])])],1),t._l(t.alllists,(function(e,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.length,expression:"lists.length"}],key:i},[a("ui-nav",{staticClass:"nav"},[a("ui-nav-item",{staticClass:"vtype-icon",staticStyle:{"pointer-events":"none"}},[t._v(t._s(i.toUpperCase()))]),t._l(e,(function(e){var r=e.change,s=e.name;return a("ui-nav-item",{key:t.time+i+s,attrs:{selected:t.list===s}},[a("ui-icon-indicator",{attrs:{time:t.time,vtype:i,listname:s,trace:t.trace}}),a("a",{attrs:{title:t.titleOfList(s,i)},on:{click:function(e){return t.onChangeList(s,i)}}},[t._v(t._s(s))]),a("a",{on:{click:function(e){return t.onShowStocksBoard(e,s,i)}}},[t._v(" ("+t._s(r)+"%)")]),a("ui-icon-top",{attrs:{time:t.time,vtype:i,listname:s}}),a("ui-icon-strategy",{attrs:{time:t.time,vtype:i,listname:s}}),a("ui-icon-up",{attrs:{time:t.time,vtype:i,listname:s}}),a("ui-icon-down",{attrs:{time:t.time,vtype:i,listname:s}}),a("ui-icon-hot",{attrs:{time:t.time,vtype:i,listname:s,trace:t.trace}}),a("ui-icon-ratio",{attrs:{time:t.time,vtype:i,listname:s,trace:t.trace}})],1)}))],2)],1)}))],2):t._e(),a("ul",{staticClass:"date"},[a("li",{directives:[{name:"show",rawName:"v-show",value:t.date.pre,expression:"date.pre"}],staticClass:"pre"},[a("router-link",{attrs:{to:"/market/today?date="+t.date.pre+"&time="+t.time+"&vtype="+t.vtype+"&list="+t.list}},[t._v(" ‹ "+t._s(t.date.pre)+" ")])],1),a("li",[t._v(" "+t._s(t.date.today)+" ")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.date.next,expression:"date.next"}],staticClass:"next"},[a("router-link",{attrs:{to:"/market/today?date="+t.date.next+"&time="+t.time+"&vtype="+t.vtype+"&list="+t.list}},[t._v(t._s(t.date.next)+" › ")])],1)]),a("ui-chart",{ref:"chart"}),a("ui-gene")],1)},r=[],s=(a("a4d3"),a("e01a"),a("d28b"),a("99af"),a("caad"),a("26e9"),a("b0c0"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("2ca0"),a("ddb0"),a("4795"),a("a34a")),n=a.n(s),o=a("c964"),c=(a("96cf"),a("61b2")),l=a("af15"),u=a("763a"),h=a("ed3d"),p=a("b191"),d=a("a1e1"),v=a("2fe6"),f={data:function(){return{loadingEl:void 0,isShowAll:!1,alllists:{},alllistsFilter:-1e3,time:"",vtype:"",list:"",times:[],vtypes:[],lists:[],tempTimes:[],validators:{},trace:h["a"],capture:u["a"],traceOfLastday:h["a"],date:{today:"",next:"",pre:""}}},beforeMount:function(){var t=Object(o["a"])(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initTimesNav();case 2:return t.next=4,this.initVtypesNav();case 4:return t.next=6,this.initTrace();case 6:return this.$route.query.time&&(this.time=this.$route.query.time),this.$route.query.vtype&&(this.vtype=this.$route.query.vtype),this.$route.query.vtype&&(this.list=this.$route.query.list),t.next=11,this.onChangeList(this.$route.query.list,this.$route.query.vtype);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),watch:{$route:function(){var t=Object(o["a"])(n.a.mark((function t(e,a){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initTimesNav();case 2:return t.next=4,this.initVtypesNav();case 4:return t.next=6,this.initTrace();case 6:this.time=this.$route.query.time,this.vtype=this.$route.query.vtype,this.list=this.$route.query.list,this.onChangeList(this.list,this.vtype),this.updateAllLists();case 11:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()},methods:{initTrace:function(){var t=Object(o["a"])(n.a.mark((function t(){var e,a,i=this;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.query.date,!e){t.next=26;break}if(t.t0=this.loadingEl,!t.t0){t.next=6;break}return t.next=6,toastr.clear(this.loadingEl);case 6:return t.next=8,toastr.loading();case 8:return this.loadingEl=t.sent,this.tradedate=new l["a"](e),this.date.pre=this.tradedate.last(),this.date.next=this.tradedate.next(),this.date.today=e,t.next=15,h["a"].create(e);case 15:return this.trace=t.sent,t.next=18,u["a"].create(e);case 18:return this.capture=t.sent,t.next=21,h["a"].create(this.date.pre);case 21:return this.traceOfLastday=t.sent,t.next=24,toastr.clear(this.loadingEl);case 24:t.next=34;break;case 26:return this.date={},this.tradedate=l["b"],this.trace=h["a"],this.capture=u["a"],a=this.tradedate.last(),t.next=33,h["a"].create(a);case 33:this.traceOfLastday=t.sent;case 34:this.trace.registerUpdateCallback("today",(function(t){var e=t.name,a="".concat(i.time,"-").concat(i.vtype);e===a&&i.onChangeList(i.list),i.isShowAll&&i.updateAllLists()}));case 35:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateAllLists:function(){if(this.isShowAll){this.alllists={};var t=!0,e=!1,a=void 0;try{for(var i,r=this.vtypes[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value,n=this.trace.listChangesOf(this.time,s);this.alllists[s]=[];var o=!0,c=!1,l=void 0;try{for(var u,h=n[Symbol.iterator]();!(o=(u=h.next()).done);o=!0){var p=u.value;"ratio"===this.alllistsFilter?this.filterOfRatio(p.name,s)&&this.alllists[s].push(p):+p.change>this.alllistsFilter&&this.alllists[s].push(p)}}catch(d){c=!0,l=d}finally{try{o||null==h["return"]||h["return"]()}finally{if(c)throw l}}}}catch(d){e=!0,a=d}finally{try{t||null==r["return"]||r["return"]()}finally{if(e)throw a}}}},filterOfRatio:function(t,e){try{var a=this.trace.listRatioRankOf(this.time,e,t),i=this.trace.listHotRankOf(this.time,e,t);return a&&+a<=10||i&&+i<=10}catch(r){}},toggleAllLists:function(){this.isShowAll=!this.isShowAll,this.isShowAll&&this.updateAllLists()},initTimesNav:function(){var t=Object(o["a"])(n.a.mark((function t(){var e,a,i,r,s,o,u,h,p,d,v,f,m,y,w,b,g,k,_,x,C,O,S,L,$;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(e=c["a"].getCaptureRules(),a=c["a"].getIntervalRules(),i=c["a"].getTempRules(),r=[],s=[],o=l["b"].today(),u=l["b"].last(),h=!0,p=!1,d=void 0,t.prev=9,v=e[Symbol.iterator]();!(h=(f=v.next()).done);h=!0)m=f.value,s.push({time:m.capture,rule:m}),r.push({time:"t0-"+m.capture,rule:m});t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](9),p=!0,d=t.t0;case 17:t.prev=17,t.prev=18,h||null==v["return"]||v["return"]();case 20:if(t.prev=20,!p){t.next=23;break}throw d;case 23:return t.finish(20);case 24:return t.finish(17);case 25:if(this.$route.query.date){t.next=45;break}for(y=!0,w=!1,b=void 0,t.prev=29,g=i[Symbol.iterator]();!(y=(k=g.next()).done);y=!0)_=k.value,_.date===u&&s.push({time:_.capture,rule:_}),_.date===o&&r.push({time:"t0-"+_.capture,rule:_}),this.tempTimes.push(_.capture);t.next=37;break;case 33:t.prev=33,t.t1=t["catch"](29),w=!0,b=t.t1;case 37:t.prev=37,t.prev=38,y||null==g["return"]||g["return"]();case 40:if(t.prev=40,!w){t.next=43;break}throw b;case 43:return t.finish(40);case 44:return t.finish(37);case 45:for(x=!0,C=!1,O=void 0,t.prev=48,S=a[Symbol.iterator]();!(x=(L=S.next()).done);x=!0)$=L.value,s.push({time:$.capture,rule:$}),r.push({time:"t0-"+$.capture,rule:$});t.next=56;break;case 52:t.prev=52,t.t2=t["catch"](48),C=!0,O=t.t2;case 56:t.prev=56,t.prev=57,x||null==S["return"]||S["return"]();case 59:if(t.prev=59,!C){t.next=62;break}throw O;case 62:return t.finish(59);case 63:return t.finish(56);case 64:this.times=[].concat(s,r),this.time=s[0].time;case 66:case"end":return t.stop()}}),t,this,[[9,13,17,25],[18,,20,24],[29,33,37,45],[38,,40,44],[48,52,56,64],[57,,59,63]])})));function e(){return t.apply(this,arguments)}return e}(),initVtypesNav:function(){var t=c["a"].getValidators();this.vtypes=[];var e=!0,a=!1,i=void 0;try{for(var r,s=t[Symbol.iterator]();!(e=(r=s.next()).done);e=!0){var n=r.value;this.vtypes.push(n.name),this.validators[n.name]=n}}catch(o){a=!0,i=o}finally{try{e||null==s["return"]||s["return"]()}finally{if(a)throw i}}this.vtype=this.vtypes[0]},onUpdateChart:function(){if(this.$refs.chart){var t=this.trace.formatedChangesOfList(this.time,this.vtype,this.list);if(t.time.length){var e=t.time.reverse(),a=[new v["a"]({label:"Stocks PTC-Change",data:t.value})];this.$refs.chart.update({labels:e,datasets:a})}else this.$refs.chart.clear()}},onChangeTime:function(t){this.isShowAll=!1,this.time=t,this.onChangeList()},onChangeVtype:function(t){this.isShowAll=!1,this.vtype=t,this.onChangeList()},onChangeList:function(t,e){if(this.time&&this.vtype)if(e&&(this.vtype=e),this.lists=this.trace.listChangesOf(this.time,this.vtype),this.lists.length){t&&(this.list=t);var a=!1,i=!0,r=!1,s=void 0;try{for(var n,o=this.lists[Symbol.iterator]();!(i=(n=o.next()).done);i=!0){var c=n.value;c.name===this.list&&this.list&&(a=!0)}}catch(l){r=!0,s=l}finally{try{i||null==o["return"]||o["return"]()}finally{if(r)throw s}}!a&&(this.list=this.lists[0].name),this.onUpdateChart()}else this.$refs.chart&&this.$refs.chart.clear()},onSetTempCapture:function(){window.__Walle_Stock_Controller.setTempCapture(),setTimeout((function(){location.href=location.pathname}),500)},onRemoveTempCapture:function(t,e){window.__Walle_Stock_Controller.removeTempCapture(t,e),setTimeout((function(){location.href=location.pathname}),500)},onShowStocksBoard:function(t,e,a){if(this.time&&this.vtype){a=a||this.vtype;t.currentTarget;var i={};i=this.time.startsWith("t0")?this.capture.captureOfList(this.time,a,e):this.trace.captureOfList(this.time,a,e);var r=this.trace.traceOfList(this.time,a,e);i&&Object.keys(i).length&&d["a"].show(this.time,a,e,i,r,{update:!this.$route.query.date})}},titleOfList:function(t,e){try{var a=this.trace.potentialChangeOfList(this.time,e,t),i=this.trace.listRatioOf(this.time,e,t),r=this.trace.listRatioOfCapture(this.time,e,t),s=this.trace.rateOfList(this.time,e,t);if(this.tempTimes.includes(this.time.replace("t0-","")))return"可买入系数: ".concat(i," / ").concat(r," 榜单主力净占比: ").concat(s,"% 最大潜在涨幅: ").concat(a,"% ");var n=p["a"].listRankOf(this.time,e,t),o=p["a"].listStrategyOf(this.time,e,t),c=this.tradedate.today(),l=this.trace.listHotOf(this.time,e,t),u=this.trace.changeOfList(this.time.replace("t0-",""),e,t),h=this.trace.last2daysChangesOfList(this.time,e||this.vtype,t),d="持续交易总收益: ".concat(o.profit.normal,"% 排名: ").concat(n.longterm," 交易次数: ").concat(o.day.normal," 日盈利率: ").concat(o.profitrate.normal,"% 胜率: ").concat(o.winrate.normal,"%\n");return d+="策略交易总收益: ".concat(o.profit.strategy,"% 排名: ").concat(n.strategy," 交易次数: ").concat(o.day.trade," 日盈利率: ").concat(o.profitrate.strategy,"% 胜率: ").concat(o.winrate.strategy,"%\n"),d+="短期热度总收益: ".concat(o.profit.hot,"% 排名: ").concat(n.shortterm," 交易次数: ").concat(o.day.hot," 日盈利率: ").concat(o.profitrate.hot,"% 胜率: ").concat(o.winrate.hot,"%\n"),d+="上行交易总收益: ".concat(o.profit["up-trade"],"% 排名: ").concat(n.uptrade," 交易次数: ").concat(o.day["up-trade"]," 日盈利率: ").concat(o.profitrate["up-trade"],"% 胜率: ").concat(o.winrate["up-trade"],"%\n"),d+="下行交易总收益: ".concat(o.profit["down-trade"],"% 排名: ").concat(n.downtrade," 交易次数: ").concat(o.day["down-trade"]," 日盈利率: ").concat(o.profitrate["down-trade"],"% 胜率: ").concat(o.winrate["down-trade"],"%\n\n"),d+="可买入系数: ".concat(i," / ").concat(r," 热度趋势系数: ").concat(l," \n"),d+="榜单主力净占比: ".concat(s,"% 最大潜在涨幅: ").concat(a,"%\n"),d+="近三日收益: ".concat(c," ").concat(u,"%, ").concat(h[0]," ").concat(h[1],"%, ").concat(h[2]," ").concat(h[3],"%"),d}catch(v){}}}},m=f,y=(a("416a"),a("2877")),w=Object(y["a"])(m,i,r,!1,null,"fcc0c516",null);e["default"]=w.exports},"5b0d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return this.$props.display?i("div",{staticClass:"mask",class:{"background-glass":!1!==t.$props.glass},style:{"z-index":t.$props.zindex||9999999,background:t.$props.background+" !important"}},[t._t("default",[i("img",{attrs:{alt:"Walle Stock Market",src:a("edad")}})])],2):t._e()},r=[],s={props:["display","glass","zindex","background"]},n=s,o=(a("86e2"),a("2877")),c=Object(o["a"])(n,i,r,!1,null,"667e3519",null);e["default"]=c.exports},6067:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"board",staticClass:"board background-glass",on:{click:function(t){t.stopPropagation()}}},[t.$props.options.title?a("p",{staticClass:"title"},[t._v(t._s(t.$props.options.title))]):t._e(),Object.values(this.trace).length&&!t.$props.options.simple?a("div",[a("br"),a("p",[t._v(" 跟踪 "),a("span",{staticClass:"profit cursor-pointer",class:{red:t.profit>=0,green:t.profit<0},attrs:{title:t.$props.time+"-"+t.$props.vtype+"-"+t.$props.listname+" 达成涨幅 "+t.profit+"% 潜在涨幅 "+t.potential+"% "}},[t._v("("+t._s(t.profit)+"%)")]),a("i",{staticClass:"refresh cursor-pointer fa fa-refresh",attrs:{title:"更新股票数据 用于榜单长期持有收益跟踪分析 亏损扭转情况和持续盈利情况"},on:{click:t.update}})]),a("table",{staticClass:"table"},[a("thead",[a("tr",t._l(t.translator,(function(e,i){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(i,!0),expression:"isShowOptionField(key, true)"}],key:i,attrs:{scope:"col"}},[t._v(t._s(t.translator[i]))])})),0)]),a("tbody",t._l(t.trace,(function(e,i){return a("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(r,s){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(s,!0),expression:"isShowOptionField(key, true)"}],key:s,staticClass:"cursor-default",class:{animated:"rate"===s&&e.change<0&&e.rate<0,infinite:!0,shake:!0,slower:!0},attrs:{scope:"row"}},["code"===s?a("a",{attrs:{href:t.url(i,e.name),target:"_blank"}},[t._v(t._s(i))]):"change"===s?a("span",{staticClass:"cursor-pointer"},[a("span",{staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"今日涨跌幅"}},[t._v(t._s(e[s]))]),t._v(" / "),a("span",{class:t.calcChange(i)>=0?"red":"green",staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"两日涨跌幅"}},[t._v(t._s(t.calcChange(i)))])]):a("span",[t._v(t._s(t.toMoney(s,e[s])))]),t.isT0List&&"code"===s?a("i",{staticClass:"cursor-pointer",attrs:{title:"从榜单中移除此股票",onclick:"window.dispatchEvent(new CustomEvent('onIgnoreStockEvent', { detail: { el: this , time:'"+t.time+"', vtype:'"+t.vtype+"', listname:'"+t.listname+"', code:'"+e.code+"', name:'"+e.name+"' }}))"}},[t._v(" (x)")]):t._e()])})),0)})),0)])]):t._e(),a("div",[t.$props.options.simple?t._e():a("br"),t.$props.options.simple?t._e():a("p",[t._v("捕获")]),a("table",{staticClass:"table"},[a("thead",[a("tr",t._l(t.translator,(function(e,i){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(i),expression:"isShowOptionField(key)"}],key:i,attrs:{scope:"col"}},[t._v(t._s(t.translator[i]))])})),0)]),a("tbody",t._l(t.capture,(function(e,i){return a("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(r,s){return a("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(s),expression:"isShowOptionField(key)"}],key:s,staticClass:"cursor-default",attrs:{scope:"row"}},["code"===s?a("a",{attrs:{href:t.url(i,e.name),target:"_blank"}},[t._v(t._s(i))]):a("span",[t._v(t._s(t.toMoney(s,e[s])))]),"code"===s?a("i",{staticClass:"cursor-pointer",attrs:{title:"查看股票基因数据",onclick:"window.dispatchEvent(new CustomEvent('onShowGeneEvent', { detail: { code: '"+e.code+"', vtype:'"+t.vtype+"' }}))"}},[t._v(" (i)")]):t._e()])})),0)})),0)]),a("br")])])},r=[],s=(a("caad"),a("b680"),a("b64b"),a("d3b7"),a("07ac"),a("ac1f"),a("2532"),a("5319"),a("a34a")),n=a.n(s),o=a("c964"),c=(a("96cf"),{props:["time","vtype","listname","captureList","traceList","options"],data:function(){return{translator:{code:"股票代码",name:"股票简称",price:"股价",change:"涨跌幅",rate:"主力净占比",prevclose:"昨收",turnover:"换手率",qrr:"量比",volume:"成交量",inflow:"主力流入资金",outflow:"主力流出资金",netinflow:"主力净流入资金",hot:"热度",block:"板块",times:"连板天数"},trace:{},capture:{},profit:0,potential:0,intervalId:-1}},computed:{isT0List:function(){return this.$props.time.includes("t0")}},watch:{"$props.options":function(t,e){this.$props.options.show?console.log("#Stock-Board# show start auto-update"):(this.stopAutoUpdate(),console.log("#Stock-Board# hidden disable auto-update"))}},created:function(){var t=Object(o["a"])(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.trace=this.$props.traceList,this.capture=this.$props.captureList,t.next=4,this.calc();case 4:this.startAutoUpdate();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),destroyed:function(){this.stopAutoUpdate()},methods:{isShowOptionField:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var a=["hot","block","times"];if(e&&a.includes(t))return!1;var i=Object.values(this.$props.captureList)[0];return void 0!==i[t]}catch(r){return!1}},toMoney:function(t,e){return["volume","inflow","outflow","netinflow"].includes(t)&&(e=Math.abs(+e)>=1e8?(+e/1e8).toFixed(2)+"亿":(+e/1e4).toFixed(2)+"万"),e},url:function(t,e){return t=t.replace("A",""),"上证指数"===e?"http://data.eastmoney.com/zjlx/zs000001.html":"http://data.eastmoney.com/zjlx/".concat(t,".html")},update:function(){var t=Object(o["a"])(n.a.mark((function t(){var e;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,window.__Walle_Stock_Crawler){t.next=3;break}return t.abrupt("return");case 3:return e=Object.keys(this.trace),t.next=6,window.__Walle_Stock_Crawler.captureStocks(e);case 6:return this.trace=t.sent,t.next=9,this.calc();case 9:console.log("#Stock-Board# update ",this.trace),t.next=14;break;case 12:t.prev=12,t.t0=t["catch"](0);case 14:case"end":return t.stop()}}),t,this,[[0,12]])})));function e(){return t.apply(this,arguments)}return e}(),calc:function(){var t=Object(o["a"])(n.a.mark((function t(){var e,a,i;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.trace){t.next=3;break}return t.abrupt("return");case 3:for(i in e=0,a=0,this.trace)e+=this.calcChange(i),a+=this.calcPotentialChange(i);this.profit=+e.toFixed(2),this.potential=+a.toFixed(2),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.warn("#Stock-Board# calc",t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),calcChange:function(t){var e=this.capture[t].price,a=this.trace[t].price;return 0===a?+((this.trace[t].prevclose-this.capture[t].price)/this.capture[t].price*100).toFixed(2):+((a-e)/e*100).toFixed(2)},calcPotentialChange:function(t){return 0===this.trace[t].price?0:+(10-this.trace[t].change).toFixed(2)},stopAutoUpdate:function(){clearInterval(this.intervalId),console.log("#Stock-Board# auto-update stoped")},startAutoUpdate:function(){var t=Object(o["a"])(n.a.mark((function t(){var e=this;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(window.__Walle_Stock_Cron){t.next=2;break}return t.abrupt("return");case 2:if(this.$props.options.update){t.next=5;break}return console.log("#Stock-Board# force disable auto-update"),t.abrupt("return");case 5:return console.log("#Stock-Board# auto-update start"),t.next=8,window.__Walle_Stock_Cron.interval(Object(o["a"])(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.update();case 1:case"end":return t.stop()}}),t)}))),null,30,"stock-board");case 8:this.intervalId=t.sent;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}),l=c,u=(a("314b"),a("2877")),h=Object(u["a"])(l,i,r,!1,null,"82323c3a",null);e["default"]=h.exports},"6f53":function(t,e,a){var i=a("83ab"),r=a("df75"),s=a("fc6a"),n=a("d1e7").f,o=function(t){return function(e){var a,o=s(e),c=r(o),l=c.length,u=0,h=[];while(l>u)a=c[u++],i&&!n.call(o,a)||h.push(t?[a,o[a]]:o[a]);return h}};t.exports={entries:o(!0),values:o(!1)}},"70c5":function(t,e,a){},7794:function(t,e,a){},"81d5":function(t,e,a){"use strict";var i=a("7b0b"),r=a("23cb"),s=a("50c4");t.exports=function(t){var e=i(this),a=s(e.length),n=arguments.length,o=r(n>1?arguments[1]:void 0,a),c=n>2?arguments[2]:void 0,l=void 0===c?a:r(c,a);while(l>o)e[o++]=t;return e}},"86e2":function(t,e,a){"use strict";var i=a("c687"),r=a.n(i);r.a},a1e1:function(t,e,a){"use strict";var i=a("276c"),r=a("e954"),s=a("fc11"),n=a("a026"),o=a("6067"),c=a("5b0d"),l=function(){function t(){Object(i["a"])(this,t),Object(s["a"])(this,"vm",void 0)}return Object(r["a"])(t,[{key:"show",value:function(t,e,a,i,r,s){var l=this,u={update:!0,show:!0,title:"",simple:!1};s=Object.assign({},u,s),this.hide(),this.vm=new n["a"]({components:{"ui-mask":c["default"],"ui-board":o["default"]},template:'\n        <ui-mask @click.native=\'toggle\' :display="options.show" :glass="false" :zindex="100001">\n          <ui-board :time="time" :vtype="vtype" :listname="listname" :capture-list="captureList" :trace-list="traceList" :options="options"></ui-board>\n        </ui-mask>  \n      ',data:function(){return{time:t,vtype:e,listname:a,captureList:i,traceList:r,options:s}},methods:{toggle:function(){this.options=Object.assign({},s,{show:!this.options.show}),!this.options.show&&l.hide()}}}).$mount();var h=document.querySelector("#walle-app");h.scrollTo(0,0),document.querySelector("#walle-app").appendChild(this.vm.$el)}},{key:"hide",value:function(){this.vm&&this.vm.$el&&document.querySelector("#walle-app").removeChild(this.vm.$el),this.vm=null}}]),t}();e["a"]=new l},c687:function(t,e,a){},cb29:function(t,e,a){var i=a("23e7"),r=a("81d5"),s=a("44d2");i({target:"Array",proto:!0},{fill:r}),s("fill")},edad:function(t,e,a){t.exports=a.p+"img/logo.jpg"}}]);