(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76e93dda"],{"26e9":function(t,e,i){"use strict";var a=i("23e7"),s=i("e8b5"),n=[].reverse,r=[1,2];a({target:"Array",proto:!0,forced:String(r)===String(r.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),n.call(this)}})},"2b61":function(t,e,i){},"2fe6":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return r}));i("cb29");var a=i("276c"),s=i("fc11"),n={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(11, 188, 73)",blue:"rgb(120, 164, 250)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},r=function t(e){var i=e.label,r=e.fill,l=void 0!==r&&r,o=e.backgroundColor,c=void 0===o?n.red:o,h=e.borderColor,u=void 0===h?n.red:h,v=e.data;Object(a["a"])(this,t),Object(s["a"])(this,"label",void 0),Object(s["a"])(this,"fill",void 0),Object(s["a"])(this,"backgroundColor",void 0),Object(s["a"])(this,"borderColor",void 0),Object(s["a"])(this,"data",void 0),this.label=i,this.fill=l,this.backgroundColor=c,this.borderColor=u,this.data=v}},"575e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"today"},[i("ui-nav",[t._l(t.times,(function(e,a){return i("ui-nav-item",{key:e.time+a,attrs:{selected:t.time===e.time},nativeOn:{click:function(i){return t.onChangeTime(e.time)}}},[t._v(" "+t._s(e.time.toUpperCase())+" "),e.rule.date?i("span",{attrs:{title:"移除此临时捕获时间点"},on:{click:function(i){return t.onRemoveTempCapture(e.rule.capture,e.rule.date)}}},[t._v("X")]):t._e()])})),i("ui-nav-item",{attrs:{title:"设置临时捕获时间点(如大盘反弹)"},nativeOn:{click:function(e){return t.onSetTempCapture()}}},[t._v("✚")])],2),i("ui-nav",[t._l(t.vtypes,(function(e){return i("ui-nav-item",{key:e,attrs:{selected:t.vtype===e,title:JSON.stringify(t.validators[e],null,4)}},[i("a",{on:{click:function(i){return t.onChangeVtype(e)}}},[t._v(t._s(e.toUpperCase()))])])})),i("ui-nav-item",{attrs:{selected:t.isShowAll}},[i("a",{on:{click:function(e){return e.stopPropagation(),t.toggleAllLists(e)}}},[t._v("☰")])])],2),t.isShowAll?t._e():i("ui-nav",t._l(t.lists,(function(e){var a=e.change,s=e.name;return i("ui-nav-item",{key:t.time+t.vtype+s,attrs:{selected:t.list===s}},[t.indicatorOfList(s,t.vtype)?i("i",{staticClass:"indicator-icon"},[t._v(" "+t._s(t.indicatorOfList(s,t.vtype)))]):t._e(),i("a",{attrs:{title:t.recentChangesOfList(s,t.vtype)},on:{click:function(e){return t.onChangeList(s,t.vtype)}}},[t._v(t._s(s))]),i("a",{on:{mouseover:function(e){return t.onShowStocksBoard(e,s,t.vtype)}}},[t._v(" ("+t._s(a)+"%)")]),t.topOfList(s,t.vtype)?i("i",{staticClass:"top-icon"},[t._v(t._s(t.topOfList(s,t.vtype)))]):t._e(),t.hotOfList(s,t.vtype)?i("i",{staticClass:"hot-icon"},[t._v(" "+t._s(t.hotOfList(s,t.vtype)))]):t._e(),t.ratioOfList(s,t.vtype)?i("i",{staticClass:"ratio-icon"},[t._v(" "+t._s(t.ratioOfList(s,t.vtype)))]):t._e()])})),1),t.isShowAll?i("div",{staticClass:"all-lists"},[i("ui-nav",[i("ui-nav-item",{attrs:{selected:-1e3===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=-1e3,t.updateAllLists()}}},[t._v("ALL")])]),i("ui-nav-item",{attrs:{selected:0===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=0,t.updateAllLists()}}},[t._v(">0%")])]),i("ui-nav-item",{attrs:{selected:3===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=3,t.updateAllLists()}}},[t._v(">3.0%")])]),i("ui-nav-item",{attrs:{selected:5===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=5,t.updateAllLists()}}},[t._v(">5.0%")])]),i("ui-nav-item",{attrs:{selected:10===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=10,t.updateAllLists()}}},[t._v(">10.0%")])]),i("ui-nav-item",{attrs:{selected:20===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=20,t.updateAllLists()}}},[t._v(">20.0%")])])],1),t._l(t.alllists,(function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.length,expression:"lists.length"}],key:a},[i("ui-nav",{staticClass:"nav"},[i("ui-nav-item",{staticClass:"vtype-icon",staticStyle:{"pointer-events":"none"}},[t._v(t._s(a.toUpperCase()))]),t._l(e,(function(e){var s=e.change,n=e.name;return i("ui-nav-item",{directives:[{name:"show",rawName:"v-show",value:s>=t.alllistsChangeFilter,expression:"change >= alllistsChangeFilter"}],key:t.time+a+n,attrs:{selected:t.list===n}},[t.indicatorOfList(n,a)?i("i",{staticClass:"indicator-icon"},[t._v(" "+t._s(t.indicatorOfList(n,a)))]):t._e(),i("a",{attrs:{title:t.recentChangesOfList(n,a)},on:{click:function(e){return t.onChangeList(n,a)}}},[t._v(t._s(n))]),i("a",{on:{mouseover:function(e){return t.onShowStocksBoard(e,n,a)}}},[t._v(" ("+t._s(s)+"%)")]),t.topOfList(n,a)?i("i",{staticClass:"top-icon"},[t._v(t._s(t.topOfList(n,a)))]):t._e(),t.hotOfList(n,a)?i("i",{staticClass:"hot-icon"},[t._v(" "+t._s(t.hotOfList(n,a))+" ")]):t._e(),t.ratioOfList(n,a)?i("i",{staticClass:"ratio-icon"},[t._v(" "+t._s(t.ratioOfList(n,a)))]):t._e()])}))],2)],1)}))],2):t._e(),i("ul",{staticClass:"date"},[i("li",{directives:[{name:"show",rawName:"v-show",value:t.date.pre,expression:"date.pre"}],staticClass:"pre"},[i("router-link",{attrs:{to:"/market/today?date="+t.date.pre}},[t._v(" ‹ "+t._s(t.date.pre)+" ")])],1),i("li",[t._v(" "+t._s(t.date.today)+" ")]),i("li",{directives:[{name:"show",rawName:"v-show",value:t.date.next,expression:"date.next"}],staticClass:"next"},[i("router-link",{attrs:{to:"/market/today?date="+t.date.next}},[t._v(t._s(t.date.next)+" › ")])],1)]),i("ui-chart",{ref:"chart"}),i("ui-gene")],1)},s=[],n=(i("a4d3"),i("e01a"),i("d28b"),i("99af"),i("caad"),i("26e9"),i("b0c0"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("2ca0"),i("ddb0"),i("4795"),i("a34a")),r=i.n(n),l=i("c964"),o=(i("96cf"),i("61b2")),c=i("af15"),h=i("763a"),u=i("ed3d"),v=i("b191"),f=i("6944"),p=i("2fe6"),d={data:function(){return{loadingEl:void 0,isShowAll:!1,alllists:{},alllistsChangeFilter:-1e3,time:"",vtype:"",list:"",times:[],vtypes:[],lists:[],tempTimes:[],validators:{},trace:u["a"],capture:h["a"],date:{today:"",next:"",pre:""}}},beforeMount:function(){var t=Object(l["a"])(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initTimesNav();case 2:return t.next=4,this.initVtypesNav();case 4:return t.next=6,this.initTrace();case 6:return t.next=8,this.onChangeList();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),watch:{$route:function(){var t=Object(l["a"])(r.a.mark((function t(e,i){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initTrace();case 2:this.onChangeList(),this.updateAllLists();case 4:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}()},methods:{initTrace:function(){var t=Object(l["a"])(r.a.mark((function t(){var e,i,a=this;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.query.date,!e){t.next=27;break}if(t.t0=this.loadingEl,!t.t0){t.next=6;break}return t.next=6,toastr.clear(this.loadingEl);case 6:return t.next=8,toastr.loading();case 8:return this.loadingEl=t.sent,t.next=11,u["a"].create(e);case 11:return this.trace=t.sent,t.next=14,h["a"].create(e);case 14:return this.capture=t.sent,i=new c["a"](e),t.next=18,i.last();case 18:return this.date.pre=t.sent,t.next=21,i.next();case 21:return this.date.next=t.sent,this.date.today=e,t.next=25,toastr.clear(this.loadingEl);case 25:t.next=30;break;case 27:this.trace=u["a"],this.capture=h["a"],this.date={};case 30:this.trace.registerUpdateCallback("today",(function(t){var e=t.name,i="".concat(a.time,"-").concat(a.vtype);e===i&&a.onChangeList(a.list),a.isShowAll&&a.updateAllLists()}));case 31:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateAllLists:function(){if(this.isShowAll){this.alllists={};var t=!0,e=!1,i=void 0;try{for(var a,s=this.vtypes[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var n=a.value,r=this.trace.listChangesOf(this.time,n);this.alllists[n]=[];var l=!0,o=!1,c=void 0;try{for(var h,u=r[Symbol.iterator]();!(l=(h=u.next()).done);l=!0){var v=h.value;+v.change>=this.alllistsChangeFilter&&this.alllists[n].push(v)}}catch(f){o=!0,c=f}finally{try{l||null==u["return"]||u["return"]()}finally{if(o)throw c}}}}catch(f){e=!0,i=f}finally{try{t||null==s["return"]||s["return"]()}finally{if(e)throw i}}}},toggleAllLists:function(t){this.isShowAll=!this.isShowAll,this.isShowAll&&this.updateAllLists()},initTimesNav:function(){var t=Object(l["a"])(r.a.mark((function t(){var e,i,a,s,n,l,h,u,v,f,p,d,m,g,y,C,b,_,w,O,L,k,x,S,T;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=o["a"].getCaptureRules(),i=o["a"].getIntervalRules(),a=o["a"].getTempRules(),s=[],n=[],l=c["b"].today(),t.next=7,c["b"].last();case 7:for(h=t.sent,u=!0,v=!1,f=void 0,t.prev=11,p=e[Symbol.iterator]();!(u=(d=p.next()).done);u=!0)m=d.value,n.push({time:m.capture,rule:m}),s.push({time:"t0-"+m.capture,rule:m});t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](11),v=!0,f=t.t0;case 19:t.prev=19,t.prev=20,u||null==p["return"]||p["return"]();case 22:if(t.prev=22,!v){t.next=25;break}throw f;case 25:return t.finish(22);case 26:return t.finish(19);case 27:for(g=!0,y=!1,C=void 0,t.prev=30,b=a[Symbol.iterator]();!(g=(_=b.next()).done);g=!0)w=_.value,w.date===h&&n.push({time:w.capture,rule:w}),w.date===l&&s.push({time:"t0-"+w.capture,rule:w}),this.tempTimes.push(w.capture);t.next=38;break;case 34:t.prev=34,t.t1=t["catch"](30),y=!0,C=t.t1;case 38:t.prev=38,t.prev=39,g||null==b["return"]||b["return"]();case 41:if(t.prev=41,!y){t.next=44;break}throw C;case 44:return t.finish(41);case 45:return t.finish(38);case 46:for(O=!0,L=!1,k=void 0,t.prev=49,x=i[Symbol.iterator]();!(O=(S=x.next()).done);O=!0)T=S.value,n.push({time:T.capture,rule:T}),s.push({time:"t0-"+T.capture,rule:T});t.next=57;break;case 53:t.prev=53,t.t2=t["catch"](49),L=!0,k=t.t2;case 57:t.prev=57,t.prev=58,O||null==x["return"]||x["return"]();case 60:if(t.prev=60,!L){t.next=63;break}throw k;case 63:return t.finish(60);case 64:return t.finish(57);case 65:this.times=[].concat(n,s),this.time=n[0].time;case 67:case"end":return t.stop()}}),t,this,[[11,15,19,27],[20,,22,26],[30,34,38,46],[39,,41,45],[49,53,57,65],[58,,60,64]])})));function e(){return t.apply(this,arguments)}return e}(),initVtypesNav:function(){var t=o["a"].getValidators(),e=!0,i=!1,a=void 0;try{for(var s,n=t[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var r=s.value;this.vtypes.push(r.name),this.validators[r.name]=r}}catch(l){i=!0,a=l}finally{try{e||null==n["return"]||n["return"]()}finally{if(i)throw a}}this.vtype=this.vtypes[0]},onUpdateChart:function(){if(this.$refs.chart){var t=this.trace.formatedChangesOfList(this.time,this.vtype,this.list);if(t.time.length){var e=t.time.reverse(),i=[new p["a"]({label:"Stocks PTC-Change",data:t.value})];this.$refs.chart.update({labels:e,datasets:i})}else this.$refs.chart.clear()}},onChangeTime:function(t){this.isShowAll=!1,this.time=t,this.onChangeList()},onChangeVtype:function(t){this.isShowAll=!1,this.vtype=t,this.onChangeList()},onChangeList:function(t,e){if(this.time&&this.vtype)if(e&&(this.vtype=e),this.lists=this.trace.listChangesOf(this.time,this.vtype),this.lists.length){t&&(this.list=t);var i=!1,a=!0,s=!1,n=void 0;try{for(var r,l=this.lists[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var o=r.value;o.name===this.list&&this.list&&(i=!0)}}catch(c){s=!0,n=c}finally{try{a||null==l["return"]||l["return"]()}finally{if(s)throw n}}!i&&(this.list=this.lists[0].name),this.onUpdateChart()}else this.$refs.chart&&this.$refs.chart.clear()},onSetTempCapture:function(){window.__Walle_Stock_Controller.setTempCapture(),setTimeout((function(){location.href=location.pathname}),500)},onRemoveTempCapture:function(t,e){window.__Walle_Stock_Controller.removeTempCapture(t,e),setTimeout((function(){location.href=location.pathname}),500)},onShowStocksBoard:function(t,e,i){if(this.time&&this.vtype){i=i||this.vtype;var a=t.currentTarget,s={};s=this.time.startsWith("t0")?this.capture.captureOfList(this.time,i,e):this.trace.captureOfList(this.time,i,e);var n=this.trace.traceOfList(this.time,i,e);s&&Object.keys(s).length&&Object(f["c"])(a,this.time,i,e,s,n)}},recentChangesOfList:function(t,e){var i=this.trace.maxChangeOfList(this.time,e,t);if(this.tempTimes.includes(this.time.replace("t0-","")))return"最大潜在涨幅: ".concat(i,"%");var a=v["a"].listShorttermProfitOf(this.time,e,t),s=v["a"].listShorttermRankOf(this.time,e,t),n=v["a"].listLongtermProfitOf(this.time,e,t),r=v["a"].listLongtermRankOf(this.time,e,t),l=this.trace.last2daysChangesOfList(this.time,e||this.vtype,t),o=v["a"].listRatioOf(this.time,e,t),c=v["a"].listStrategyOf(this.time,e,t),h="长期跟踪总收益: ".concat(n,"% 排名: ").concat(r," 交易次数: ").concat(c.day.trade,"\r\n短期跟踪总收益: ").concat(a,"% 排名: ").concat(s," 交易次数: ").concat(c.day.hot,"\r\n近两日收益: ").concat(l[0]," ").concat(l[1],"%, ").concat(l[2]," ").concat(l[3],"%\r\n");return this.time.includes("t0")?h+="最大潜在涨幅: ".concat(i,"% 可买入系数: ").concat(o," "):h+="最大潜在涨幅: ".concat(i,"% "),h},topOfList:function(t,e){if(!this.tempTimes.includes(this.time.replace("t0-",""))){var i=v["a"].listLongtermRankOf(this.time,e,t);return i&&i<=10?"TOP"+i:void 0}},hotOfList:function(t,e){if(!this.tempTimes.includes(this.time.replace("t0-",""))){var i=v["a"].listShorttermRankOf(this.time,e,t);return i&&i<=10?"HOT"+i:void 0}},ratioOfList:function(t,e){if(!this.tempTimes.includes(this.time.replace("t0-",""))&&this.time.includes("t0")){var i=v["a"].listRatioOf(this.time,e,t);return i>.3?i:void 0}},indicatorOfList:function(t,e){if(!this.tempTimes.includes(this.time.replace("t0-",""))){var i=this.trace.last2daysChangesOfList(this.time,e||this.vtype,t);return void 0===i[1]||void 0===i[3]?"":+i[1]<=0&&+i[3]<=0?"✘":void 0}}}},m=d,g=(i("7054"),i("2877")),y=Object(g["a"])(m,a,s,!1,null,"c5d4cd18",null);e["default"]=y.exports},7054:function(t,e,i){"use strict";var a=i("2b61"),s=i.n(a);s.a},"81d5":function(t,e,i){"use strict";var a=i("7b0b"),s=i("23cb"),n=i("50c4");t.exports=function(t){var e=a(this),i=n(e.length),r=arguments.length,l=s(r>1?arguments[1]:void 0,i),o=r>2?arguments[2]:void 0,c=void 0===o?i:s(o,i);while(c>l)e[l++]=t;return e}},cb29:function(t,e,i){var a=i("23e7"),s=i("81d5"),n=i("44d2");a({target:"Array",proto:!0},{fill:s}),n("fill")}}]);