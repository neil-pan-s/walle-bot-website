(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45a4a7fc"],{"0e57":function(t,e,i){"use strict";var a=i("3dbd"),s=i.n(a);s.a},"26e9":function(t,e,i){"use strict";var a=i("23e7"),s=i("e8b5"),r=[].reverse,n=[1,2];a({target:"Array",proto:!0,forced:String(n)===String(n.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),r.call(this)}})},"2fe6":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return n}));i("cb29");var a=i("276c"),s=i("fc11"),r={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(11, 188, 73)",blue:"rgb(120, 164, 250)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},n=function t(e){var i=e.label,n=e.fill,l=void 0!==n&&n,c=e.backgroundColor,o=void 0===c?r.red:c,h=e.borderColor,u=void 0===h?r.red:h,v=e.data;Object(a["a"])(this,t),Object(s["a"])(this,"label",void 0),Object(s["a"])(this,"fill",void 0),Object(s["a"])(this,"backgroundColor",void 0),Object(s["a"])(this,"borderColor",void 0),Object(s["a"])(this,"data",void 0),this.label=i,this.fill=l,this.backgroundColor=o,this.borderColor=u,this.data=v}},"3dbd":function(t,e,i){},"575e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"today"},[i("ui-nav",[t._l(t.times,(function(e,a){return i("ui-nav-item",{key:e.time+a,attrs:{selected:t.time===e.time},nativeOn:{click:function(i){return t.onChangeTime(e.time)}}},[t._v(" "+t._s(e.time.toUpperCase())+" "),e.rule.date?i("span",{attrs:{title:"移除此临时捕获时间点"},on:{click:function(i){return t.onRemoveTempCapture(e.rule.capture,e.rule.date)}}},[t._v("X")]):t._e()])})),i("ui-nav-item",{attrs:{title:"设置临时捕获时间点(如大盘反弹)"},nativeOn:{click:function(e){return t.onSetTempCapture()}}},[t._v("✚")])],2),i("ui-nav",[t._l(t.vtypes,(function(e){return i("ui-nav-item",{key:e,attrs:{selected:t.vtype===e,title:JSON.stringify(t.validators[e],null,4)}},[i("a",{on:{click:function(i){return t.onChangeVtype(e)}}},[t._v(t._s(e.toUpperCase()))])])})),i("ui-nav-item",{attrs:{selected:t.isShowAll}},[i("a",{on:{click:function(e){return e.stopPropagation(),t.toggleAllLists(e)}}},[t._v("☰")])])],2),t.isShowAll?t._e():i("ui-nav",t._l(t.lists,(function(e){var a=e.change,s=e.name;return i("ui-nav-item",{key:t.time+t.vtype+s,attrs:{selected:t.list===s}},[t.indicatorOfList(s,t.vtype)?i("i",{staticClass:"indicator-icon"},[t._v(" "+t._s(t.indicatorOfList(s,t.vtype)))]):t._e(),i("a",{attrs:{title:t.recentChangesOfList(s,t.vtype)},on:{click:function(e){return t.onChangeList(s,t.vtype)}}},[t._v(t._s(s))]),i("a",{on:{mouseover:function(e){return t.onShowStocksBoard(e,s,t.vtype)}}},[t._v(" ("+t._s(a)+"%)")]),t.topOfList(s,t.vtype)?i("i",{staticClass:"top-icon"},[t._v(t._s(t.topOfList(s,t.vtype)))]):t._e(),t.hotOfList(s,t.vtype)?i("i",{staticClass:"hot-icon"},[t._v(" "+t._s(t.hotOfList(s,t.vtype)))]):t._e(),t.ratioOfList(s,t.vtype)?i("i",{staticClass:"ratio-icon"},[t._v(" "+t._s(t.ratioOfList(s,t.vtype)))]):t._e()])})),1),t.isShowAll?i("div",{staticClass:"all-lists"},[i("ui-nav",[i("ui-nav-item",{attrs:{selected:-1e3===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=-1e3,t.updateAllLists()}}},[t._v("ALL")])]),i("ui-nav-item",{attrs:{selected:0===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=0,t.updateAllLists()}}},[t._v(">0%")])]),i("ui-nav-item",{attrs:{selected:3===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=3,t.updateAllLists()}}},[t._v(">3.0%")])]),i("ui-nav-item",{attrs:{selected:5===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=5,t.updateAllLists()}}},[t._v(">5.0%")])]),i("ui-nav-item",{attrs:{selected:10===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=10,t.updateAllLists()}}},[t._v(">10.0%")])]),i("ui-nav-item",{attrs:{selected:20===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=20,t.updateAllLists()}}},[t._v(">20.0%")])])],1),t._l(t.alllists,(function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.length,expression:"lists.length"}],key:a},[i("ui-nav",{staticClass:"nav"},[i("ui-nav-item",{staticClass:"vtype-icon",staticStyle:{"pointer-events":"none"}},[t._v(t._s(a.toUpperCase()))]),t._l(e,(function(e){var s=e.change,r=e.name;return i("ui-nav-item",{directives:[{name:"show",rawName:"v-show",value:s>=t.alllistsChangeFilter,expression:"change >= alllistsChangeFilter"}],key:t.time+a+r,attrs:{selected:t.list===r}},[t.indicatorOfList(r,a)?i("i",{staticClass:"indicator-icon"},[t._v(" "+t._s(t.indicatorOfList(r,a)))]):t._e(),i("a",{attrs:{title:t.recentChangesOfList(r,a)},on:{click:function(e){return t.onChangeList(r,a)}}},[t._v(t._s(r))]),i("a",{on:{mouseover:function(e){return t.onShowStocksBoard(e,r,a)}}},[t._v(" ("+t._s(s)+"%)")]),t.topOfList(r,a)?i("i",{staticClass:"top-icon"},[t._v(t._s(t.topOfList(r,a)))]):t._e(),t.hotOfList(r,a)?i("i",{staticClass:"hot-icon"},[t._v(" "+t._s(t.hotOfList(r,a))+" ")]):t._e(),t.ratioOfList(r,a)?i("i",{staticClass:"ratio-icon"},[t._v(" "+t._s(t.ratioOfList(r,a)))]):t._e()])}))],2)],1)}))],2):t._e(),i("ul",{staticClass:"date"},[i("li",{directives:[{name:"show",rawName:"v-show",value:t.date.pre,expression:"date.pre"}],staticClass:"pre"},[i("router-link",{attrs:{to:"/market/today?date="+t.date.pre}},[t._v(" ‹ "+t._s(t.date.pre)+" ")])],1),i("li",[t._v(" "+t._s(t.date.today)+" ")]),i("li",{directives:[{name:"show",rawName:"v-show",value:t.date.next,expression:"date.next"}],staticClass:"next"},[i("router-link",{attrs:{to:"/market/today?date="+t.date.next}},[t._v(t._s(t.date.next)+" › ")])],1)]),i("ui-chart",{ref:"chart"}),i("ui-gene")],1)},s=[],r=(i("a4d3"),i("e01a"),i("d28b"),i("99af"),i("caad"),i("26e9"),i("b0c0"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("2ca0"),i("ddb0"),i("4795"),i("a34a")),n=i.n(r),l=i("c964"),c=(i("96cf"),i("61b2")),o=i("af15"),h=i("763a"),u=i("ed3d"),v=i("b191"),f=i("6944"),d=i("2fe6"),p={data:function(){return{loadingEl:void 0,isShowAll:!1,alllists:{},alllistsChangeFilter:-1e3,time:"",vtype:"",list:"",times:[],vtypes:[],lists:[],tempTimes:[],validators:{},trace:u["a"],capture:h["a"],traceOfLastday:u["a"],date:{today:"",next:"",pre:""}}},beforeMount:function(){var t=Object(l["a"])(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initTimesNav();case 2:return t.next=4,this.initVtypesNav();case 4:return t.next=6,this.initTrace();case 6:return t.next=8,this.onChangeList();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),watch:{$route:function(){var t=Object(l["a"])(n.a.mark((function t(e,i){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initTrace();case 2:this.onChangeList(),this.updateAllLists();case 4:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}()},methods:{initTrace:function(){var t=Object(l["a"])(n.a.mark((function t(){var e,i,a=this;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.query.date,!e){t.next=26;break}if(t.t0=this.loadingEl,!t.t0){t.next=6;break}return t.next=6,toastr.clear(this.loadingEl);case 6:return t.next=8,toastr.loading();case 8:return this.loadingEl=t.sent,this.tradedate=new o["a"](e),this.date.pre=this.tradedate.last(),this.date.next=this.tradedate.next(),this.date.today=e,t.next=15,u["a"].create(e);case 15:return this.trace=t.sent,t.next=18,h["a"].create(e);case 18:return this.capture=t.sent,t.next=21,u["a"].create(this.date.pre);case 21:return this.traceOfLastday=t.sent,t.next=24,toastr.clear(this.loadingEl);case 24:t.next=34;break;case 26:return this.date={},this.tradedate=o["b"],this.trace=u["a"],this.capture=h["a"],i=this.tradedate.last(),t.next=33,u["a"].create(i);case 33:this.traceOfLastday=t.sent;case 34:this.trace.registerUpdateCallback("today",(function(t){var e=t.name,i="".concat(a.time,"-").concat(a.vtype);e===i&&a.onChangeList(a.list),a.isShowAll&&a.updateAllLists()}));case 35:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateAllLists:function(){if(this.isShowAll){this.alllists={};var t=!0,e=!1,i=void 0;try{for(var a,s=this.vtypes[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var r=a.value,n=this.trace.listChangesOf(this.time,r);this.alllists[r]=[];var l=!0,c=!1,o=void 0;try{for(var h,u=n[Symbol.iterator]();!(l=(h=u.next()).done);l=!0){var v=h.value;+v.change>=this.alllistsChangeFilter&&this.alllists[r].push(v)}}catch(f){c=!0,o=f}finally{try{l||null==u["return"]||u["return"]()}finally{if(c)throw o}}}}catch(f){e=!0,i=f}finally{try{t||null==s["return"]||s["return"]()}finally{if(e)throw i}}}},toggleAllLists:function(t){this.isShowAll=!this.isShowAll,this.isShowAll&&this.updateAllLists()},initTimesNav:function(){var t=Object(l["a"])(n.a.mark((function t(){var e,i,a,s,r,l,h,u,v,f,d,p,m,y,g,C,O,b,_,L,w,k,x,S,T;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(e=c["a"].getCaptureRules(),i=c["a"].getIntervalRules(),a=c["a"].getTempRules(),s=[],r=[],l=o["b"].today(),h=o["b"].last(),u=!0,v=!1,f=void 0,t.prev=9,d=e[Symbol.iterator]();!(u=(p=d.next()).done);u=!0)m=p.value,r.push({time:m.capture,rule:m}),s.push({time:"t0-"+m.capture,rule:m});t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](9),v=!0,f=t.t0;case 17:t.prev=17,t.prev=18,u||null==d["return"]||d["return"]();case 20:if(t.prev=20,!v){t.next=23;break}throw f;case 23:return t.finish(20);case 24:return t.finish(17);case 25:for(y=!0,g=!1,C=void 0,t.prev=28,O=a[Symbol.iterator]();!(y=(b=O.next()).done);y=!0)_=b.value,_.date===h&&r.push({time:_.capture,rule:_}),_.date===l&&s.push({time:"t0-"+_.capture,rule:_}),this.tempTimes.push(_.capture);t.next=36;break;case 32:t.prev=32,t.t1=t["catch"](28),g=!0,C=t.t1;case 36:t.prev=36,t.prev=37,y||null==O["return"]||O["return"]();case 39:if(t.prev=39,!g){t.next=42;break}throw C;case 42:return t.finish(39);case 43:return t.finish(36);case 44:for(L=!0,w=!1,k=void 0,t.prev=47,x=i[Symbol.iterator]();!(L=(S=x.next()).done);L=!0)T=S.value,r.push({time:T.capture,rule:T}),s.push({time:"t0-"+T.capture,rule:T});t.next=55;break;case 51:t.prev=51,t.t2=t["catch"](47),w=!0,k=t.t2;case 55:t.prev=55,t.prev=56,L||null==x["return"]||x["return"]();case 58:if(t.prev=58,!w){t.next=61;break}throw k;case 61:return t.finish(58);case 62:return t.finish(55);case 63:this.times=[].concat(r,s),this.time=r[0].time;case 65:case"end":return t.stop()}}),t,this,[[9,13,17,25],[18,,20,24],[28,32,36,44],[37,,39,43],[47,51,55,63],[56,,58,62]])})));function e(){return t.apply(this,arguments)}return e}(),initVtypesNav:function(){var t=c["a"].getValidators(),e=!0,i=!1,a=void 0;try{for(var s,r=t[Symbol.iterator]();!(e=(s=r.next()).done);e=!0){var n=s.value;this.vtypes.push(n.name),this.validators[n.name]=n}}catch(l){i=!0,a=l}finally{try{e||null==r["return"]||r["return"]()}finally{if(i)throw a}}this.vtype=this.vtypes[0]},onUpdateChart:function(){if(this.$refs.chart){var t=this.trace.formatedChangesOfList(this.time,this.vtype,this.list);if(t.time.length){var e=t.time.reverse(),i=[new d["a"]({label:"Stocks PTC-Change",data:t.value})];this.$refs.chart.update({labels:e,datasets:i})}else this.$refs.chart.clear()}},onChangeTime:function(t){this.isShowAll=!1,this.time=t,this.onChangeList()},onChangeVtype:function(t){this.isShowAll=!1,this.vtype=t,this.onChangeList()},onChangeList:function(t,e){if(this.time&&this.vtype)if(e&&(this.vtype=e),this.lists=this.trace.listChangesOf(this.time,this.vtype),this.lists.length){t&&(this.list=t);var i=!1,a=!0,s=!1,r=void 0;try{for(var n,l=this.lists[Symbol.iterator]();!(a=(n=l.next()).done);a=!0){var c=n.value;c.name===this.list&&this.list&&(i=!0)}}catch(o){s=!0,r=o}finally{try{a||null==l["return"]||l["return"]()}finally{if(s)throw r}}!i&&(this.list=this.lists[0].name),this.onUpdateChart()}else this.$refs.chart&&this.$refs.chart.clear()},onSetTempCapture:function(){window.__Walle_Stock_Controller.setTempCapture(),setTimeout((function(){location.href=location.pathname}),500)},onRemoveTempCapture:function(t,e){window.__Walle_Stock_Controller.removeTempCapture(t,e),setTimeout((function(){location.href=location.pathname}),500)},onShowStocksBoard:function(t,e,i){if(this.time&&this.vtype){i=i||this.vtype;var a=t.currentTarget,s={};s=this.time.startsWith("t0")?this.capture.captureOfList(this.time,i,e):this.trace.captureOfList(this.time,i,e);var r=this.trace.traceOfList(this.time,i,e);s&&Object.keys(s).length&&Object(f["c"])(a,this.time,i,e,s,r)}},recentChangesOfList:function(t,e){try{var i=this.trace.maxChangeOfList(this.time,e,t);if(this.tempTimes.includes(this.time.replace("t0-","")))return"最大潜在涨幅: ".concat(i,"%");var a,s,r,n,l=v["a"].listShorttermProfitOf(this.time,e,t),c=v["a"].listShorttermRankOf(this.time,e,t),o=v["a"].listLongtermProfitOf(this.time,e,t),h=v["a"].listLongtermRankOf(this.time,e,t),u=v["a"].listStrategyOf(this.time,e,t);this.time.startsWith("t0")?(n=this.trace.last2daysChangesOfList(this.time,e||this.vtype,t),r=this.trace.listRatioOf(this.time,e,t),a=this.tradedate.today(),s=this.trace.changeOfList(this.time.replace("t0-",""),e,t)):(n=this.traceOfLastday.last2daysChangesOfList(this.time,e||this.vtype,t),r=this.traceOfLastday.listRatioOf(this.time,e,t),a=this.tradedate.last(),s=this.traceOfLastday.changeOfList(this.time.replace("t0-",""),e,t));var f="长期跟踪总收益: ".concat(o,"% 排名: ").concat(h," 交易次数: ").concat(u.day.trade,"\r\n");return f+="短期跟踪总收益: ".concat(l,"% 排名: ").concat(c," 交易次数: ").concat(u.day.hot,"\r\n"),f+="近三日收益: ".concat(a," ").concat(s,"%, ").concat(n[0]," ").concat(n[1],"%, ").concat(n[2]," ").concat(n[3],"%\r\n"),f+="最大潜在涨幅: ".concat(i,"% 可买入系数: ").concat(r," "),f}catch(d){}},topOfList:function(t,e){try{if(this.tempTimes.includes(this.time.replace("t0-","")))return;var i=v["a"].listLongtermRankOf(this.time,e,t);if(i&&i<=10)return"TOP"+i}catch(a){}},hotOfList:function(t,e){try{if(this.tempTimes.includes(this.time.replace("t0-","")))return;var i=v["a"].listShorttermRankOf(this.time,e,t);if(i&&i<=10)return"HOT"+i}catch(a){}},ratioOfList:function(t,e){try{if(this.tempTimes.includes(this.time.replace("t0-","")))return;var i,a;if(this.time.includes("t0")?(i=this.trace.listRatioOf(this.time,e,t),a=this.trace.listRatioRankOf(this.time,e,t)):(i=this.traceOfLastday.listRatioOf("t0-"+this.time,e,t),a=this.traceOfLastday.listRatioRankOf("t0-"+this.time,e,t)),a&&a<=10)return i}catch(s){}},indicatorOfList:function(t,e){try{if(this.tempTimes.includes(this.time.replace("t0-","")))return;var i=this.trace.last2daysChangesOfList(this.time,e||this.vtype,t),a=this.trace.changeOfList(this.time.replace("t0-",""),e||this.vtype,t);if(!i[1]||!a)return"";if(+i[1]<=0&&+a<=0)return"✘"}catch(s){}}}},m=p,y=(i("0e57"),i("2877")),g=Object(y["a"])(m,a,s,!1,null,"3cbb9dc2",null);e["default"]=g.exports},"81d5":function(t,e,i){"use strict";var a=i("7b0b"),s=i("23cb"),r=i("50c4");t.exports=function(t){var e=a(this),i=r(e.length),n=arguments.length,l=s(n>1?arguments[1]:void 0,i),c=n>2?arguments[2]:void 0,o=void 0===c?i:s(c,i);while(o>l)e[l++]=t;return e}},cb29:function(t,e,i){var a=i("23e7"),s=i("81d5"),r=i("44d2");a({target:"Array",proto:!0},{fill:s}),r("fill")}}]);