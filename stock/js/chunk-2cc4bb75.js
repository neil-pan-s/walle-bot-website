(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cc4bb75"],{"26e9":function(t,e,i){"use strict";var a=i("23e7"),s=i("e8b5"),n=[].reverse,r=[1,2];a({target:"Array",proto:!0,forced:String(r)===String(r.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),n.call(this)}})},"2fe6":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return r}));i("cb29");var a=i("276c"),s=i("fc11"),n={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(75, 192, 192)",blue:"rgb(54, 162, 235)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},r=function t(e){var i=e.label,r=e.fill,l=void 0!==r&&r,o=e.backgroundColor,c=void 0===o?n.red:o,u=e.borderColor,h=void 0===u?n.red:u,v=e.data;Object(a["a"])(this,t),Object(s["a"])(this,"label",void 0),Object(s["a"])(this,"fill",void 0),Object(s["a"])(this,"backgroundColor",void 0),Object(s["a"])(this,"borderColor",void 0),Object(s["a"])(this,"data",void 0),this.label=i,this.fill=l,this.backgroundColor=c,this.borderColor=h,this.data=v}},"575e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"today"},[i("ui-nav",[t._l(t.times,(function(e,a){return i("ui-nav-item",{key:e.time+a,attrs:{selected:t.time===e.time},nativeOn:{click:function(i){return t.onChangeTime(e.time)}}},[t._v(" "+t._s(e.time.toUpperCase())+" "),e.rule.date?i("span",{attrs:{title:"移除此临时捕获时间点"},on:{click:function(i){return t.onRemoveTempCapture(e.rule.capture,e.rule.date)}}},[t._v("X")]):t._e()])})),i("ui-nav-item",{attrs:{title:"设置临时捕获时间点(如大盘反弹)"},nativeOn:{click:function(e){return t.onSetTempCapture()}}},[t._v("✚")])],2),i("ui-nav",[t._l(t.vtypes,(function(e){return i("ui-nav-item",{key:e,attrs:{selected:t.vtype===e,title:JSON.stringify(t.validators[e],null,4)}},[i("a",{on:{click:function(i){return t.onChangeVtype(e)}}},[t._v(t._s(e.toUpperCase()))])])})),i("ui-nav-item",{attrs:{selected:t.isShowAll}},[i("a",{on:{click:function(e){return e.stopPropagation(),t.toggleAllLists(e)}}},[t._v("☰")])])],2),t.isShowAll?t._e():i("ui-nav",t._l(t.lists,(function(e){var a=e.change,s=e.name;return i("ui-nav-item",{key:t.time+t.vtype+s,attrs:{selected:t.list===s}},[t.time.includes("t0")?i("i",{attrs:{title:t.last2dayChangesOfList(s,t.vtype)}},[t._v(" "+t._s(t.indicatorOfList(s,t.vtype)))]):t._e(),i("a",{attrs:{title:t.recentChangesOfList(s,t.vtype)},on:{click:function(e){return t.onChangeList(s,t.vtype)}}},[t._v(t._s(s))]),t._v(" "),i("a",{on:{mouseover:function(e){return t.onShowStocksBoard(e,s,t.vtype)}}},[t._v(" ("+t._s(a)+"%)")]),t.hotOfList(s,t.vtype)?i("i",{staticClass:"hot-icon"},[t._v(t._s(t.hotOfList(s,t.vtype)))]):t._e()])})),1),t.isShowAll?i("div",{staticClass:"all-lists"},[i("ui-nav",[i("ui-nav-item",{attrs:{selected:-1e3===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=-1e3,t.updateAllLists()}}},[t._v("ALL")])]),i("ui-nav-item",{attrs:{selected:0===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=0,t.updateAllLists()}}},[t._v(">0%")])]),i("ui-nav-item",{attrs:{selected:3===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=3,t.updateAllLists()}}},[t._v(">3.0%")])]),i("ui-nav-item",{attrs:{selected:5===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=5,t.updateAllLists()}}},[t._v(">5.0%")])]),i("ui-nav-item",{attrs:{selected:10===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=10,t.updateAllLists()}}},[t._v(">10.0%")])]),i("ui-nav-item",{attrs:{selected:20===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=20,t.updateAllLists()}}},[t._v(">20.0%")])])],1),t._l(t.alllists,(function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.length,expression:"lists.length"}],key:a},[i("ui-nav",{staticClass:"nav"},[i("ui-nav-item",{staticClass:"vtype-icon",staticStyle:{"pointer-events":"none"}},[t._v(t._s(a.toUpperCase()))]),t._l(e,(function(e){var s=e.change,n=e.name;return i("ui-nav-item",{directives:[{name:"show",rawName:"v-show",value:s>=t.alllistsChangeFilter,expression:"change >= alllistsChangeFilter"}],key:t.time+a+n,attrs:{selected:t.list===n}},[t.time.includes("t0")?i("i",{attrs:{title:t.last2dayChangesOfList(n,a)}},[t._v(" "+t._s(t.indicatorOfList(n,a)))]):t._e(),i("a",{attrs:{title:t.recentChangesOfList(n,a)},on:{click:function(e){return t.onChangeList(n,a)}}},[t._v(t._s(n))]),t._v(" "),i("a",{on:{mouseover:function(e){return t.onShowStocksBoard(e,n,a)}}},[t._v(" ("+t._s(s)+"%)")]),t.hotOfList(n,a)?i("i",{staticClass:"hot-icon"},[t._v(t._s(t.hotOfList(n,a)))]):t._e()])}))],2)],1)}))],2):t._e(),i("ul",{staticClass:"date"},[i("li",{directives:[{name:"show",rawName:"v-show",value:t.date.pre,expression:"date.pre"}],staticClass:"pre"},[i("router-link",{attrs:{to:"/market/today?date="+t.date.pre}},[t._v(" ‹ "+t._s(t.date.pre)+" ")])],1),i("li",[t._v(" "+t._s(this.$route.query.date)+" ")]),i("li",{directives:[{name:"show",rawName:"v-show",value:t.date.next,expression:"date.next"}],staticClass:"next"},[i("router-link",{attrs:{to:"/market/today?date="+t.date.next}},[t._v(t._s(t.date.next)+" › ")])],1)]),i("ui-chart",{ref:"chart"}),i("ui-gene")],1)},s=[],n=(i("a4d3"),i("e01a"),i("d28b"),i("99af"),i("26e9"),i("b0c0"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("ddb0"),i("4795"),i("a34a")),r=i.n(n),l=i("c964"),o=(i("96cf"),i("61b2")),c=i("440a"),u=i("763a"),h=i("ed3d"),v=i("b191"),f=i("6944"),d=i("2fe6"),p={data:function(){return{isShowAll:!1,alllists:{},alllistsChangeFilter:-1e3,time:"",vtype:"",list:"",times:[],vtypes:[],lists:[],validators:{},trace:h["a"],capture:u["a"],date:{next:"",pre:""}}},beforeMount:function(){var t=Object(l["a"])(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.initTimesNav(),this.initVtypesNav(),t.next=4,this.initTrace();case 4:this.onChangeList();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),watch:{$route:function(){var t=Object(l["a"])(r.a.mark((function t(e,i){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initTrace();case 2:this.onChangeList(),this.updateAllLists();case 4:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}()},methods:{initTrace:function(){var t=Object(l["a"])(r.a.mark((function t(){var e,i,a=this;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.query.date,!e){t.next=19;break}return t.next=4,toastr.clear();case 4:return t.next=6,toastr.loading();case 6:return t.next=8,h["a"].create(e);case 8:return this.trace=t.sent,t.next=11,u["a"].create(e);case 11:return this.capture=t.sent,i=new c["a"](e),this.date.pre=i.last(),+i.next()<=+c["b"].today()?this.date.next=i.next():this.date.next="",t.next=17,toastr.clear();case 17:t.next=22;break;case 19:this.trace=h["a"],this.capture=u["a"],this.date={};case 22:this.trace.registerUpdateCallback("today",(function(t){var e=t.name,i="".concat(a.time,"-").concat(a.vtype);e===i&&a.onChangeList(a.list),a.isShowAll&&a.updateAllLists()}));case 23:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateAllLists:function(){if(this.isShowAll){this.alllists={};var t=!0,e=!1,i=void 0;try{for(var a,s=this.vtypes[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var n=a.value,r=this.trace.listChangesOf(this.time,n);this.alllists[n]=[];var l=!0,o=!1,c=void 0;try{for(var u,h=r[Symbol.iterator]();!(l=(u=h.next()).done);l=!0){var v=u.value;+v.change>=this.alllistsChangeFilter&&this.alllists[n].push(v)}}catch(f){o=!0,c=f}finally{try{l||null==h["return"]||h["return"]()}finally{if(o)throw c}}}}catch(f){e=!0,i=f}finally{try{t||null==s["return"]||s["return"]()}finally{if(e)throw i}}}},toggleAllLists:function(t){this.isShowAll=!this.isShowAll,this.isShowAll&&this.updateAllLists()},initTimesNav:function(){var t=o["a"].getCaptureRules(),e=o["a"].getIntervalRules(),i=o["a"].getTempRules(),a=[],s=[],n=c["b"].today(),r=c["b"].last(),l=!0,u=!1,h=void 0;try{for(var v,f=t[Symbol.iterator]();!(l=(v=f.next()).done);l=!0){var d=v.value;s.push({time:d.capture,rule:d}),a.push({time:"t0-"+d.capture,rule:d})}}catch(S){u=!0,h=S}finally{try{l||null==f["return"]||f["return"]()}finally{if(u)throw h}}var p=!0,m=!1,y=void 0;try{for(var g,C=i[Symbol.iterator]();!(p=(g=C.next()).done);p=!0){var b=g.value;b.date===r&&s.push({time:b.capture,rule:b}),b.date===n&&a.push({time:"t0-"+b.capture,rule:b})}}catch(S){m=!0,y=S}finally{try{p||null==C["return"]||C["return"]()}finally{if(m)throw y}}var _=!0,w=!1,k=void 0;try{for(var L,O=e[Symbol.iterator]();!(_=(L=O.next()).done);_=!0){var x=L.value;s.push({time:x.capture,rule:x}),a.push({time:"t0-"+x.capture,rule:x})}}catch(S){w=!0,k=S}finally{try{_||null==O["return"]||O["return"]()}finally{if(w)throw k}}this.times=[].concat(s,a),this.time=s[0].time},initVtypesNav:function(){var t=o["a"].getValidators(),e=!0,i=!1,a=void 0;try{for(var s,n=t[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var r=s.value;this.vtypes.push(r.name),this.validators[r.name]=r}}catch(l){i=!0,a=l}finally{try{e||null==n["return"]||n["return"]()}finally{if(i)throw a}}this.vtype=this.vtypes[0]},onUpdateChart:function(){if(this.$refs.chart){var t=this.trace.formatedChangesOfList(this.time,this.vtype,this.list);if(t.time.length){var e=t.time.reverse(),i=[new d["a"]({label:"Stocks PTC-Change",data:t.value})];this.$refs.chart.update({labels:e,datasets:i})}else this.$refs.chart.clear()}},onChangeTime:function(t){this.isShowAll=!1,this.time=t,this.onChangeList()},onChangeVtype:function(t){this.isShowAll=!1,this.vtype=t,this.onChangeList()},onChangeList:function(t,e){if(this.time&&this.vtype)if(e&&(this.vtype=e),this.lists=this.trace.listChangesOf(this.time,this.vtype),this.lists.length){t&&(this.list=t);var i=!1,a=!0,s=!1,n=void 0;try{for(var r,l=this.lists[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var o=r.value;o.name===this.list&&this.list&&(i=!0)}}catch(c){s=!0,n=c}finally{try{a||null==l["return"]||l["return"]()}finally{if(s)throw n}}!i&&(this.list=this.lists[0].name),this.onUpdateChart()}else this.$refs.chart&&this.$refs.chart.clear()},onSetTempCapture:function(){window.__Walle_Stock_Controller.setTempCapture(),setTimeout((function(){location.href=location.pathname}),500)},onRemoveTempCapture:function(t,e){window.__Walle_Stock_Controller.removeTempCapture(t,e),setTimeout((function(){location.href=location.pathname}),500)},onShowStocksBoard:function(t,e,i){if(this.time&&this.vtype){i=i||this.vtype;var a=t.currentTarget,s={};s=this.time.startsWith("t0")?this.capture.captureOfList(this.time,i,e):this.trace.captureOfList(this.time,i,e);var n=this.trace.traceOfList(this.time,i,e);s&&Object.keys(s).length&&Object(f["c"])(a,this.time,i,e,s,n)}},last2dayChangesOfList:function(t,e){var i=this.trace.last2daysChangesOfList(this.time,e||this.vtype,t);return"前两交易日跟踪收益 \r\n".concat(i[0]," : ").concat(i[1],"%, ").concat(i[2]," : ").concat(i[3],"%")},recentChangesOfList:function(t,e){var i=this.time.replace("t0-",""),a=v["a"].changeOfList(i,e,t),s=v["a"].listRankOf(i,e,t);return"近期跟踪总收益: ".concat(a,"% 排名: ").concat(s)},indicatorOfList:function(t,e){var i=this.trace.last2daysChangesOfList(this.time,e||this.vtype,t);return+i[1]>0||+i[3]>0?"✔":+i[1]<=0&&+i[3]<=0?"✘":""},hotOfList:function(t,e){var i=this.time.replace("t0-",""),a=v["a"].listRankOf(i,e,t);return a<=10?"hot"+a:""}}},m=p,y=(i("7727"),i("2877")),g=Object(y["a"])(m,a,s,!1,null,"ae4be988",null);e["default"]=g.exports},7727:function(t,e,i){"use strict";var a=i("a18b"),s=i.n(a);s.a},"81d5":function(t,e,i){"use strict";var a=i("7b0b"),s=i("23cb"),n=i("50c4");t.exports=function(t){var e=a(this),i=n(e.length),r=arguments.length,l=s(r>1?arguments[1]:void 0,i),o=r>2?arguments[2]:void 0,c=void 0===o?i:s(o,i);while(c>l)e[l++]=t;return e}},a18b:function(t,e,i){},cb29:function(t,e,i){var a=i("23e7"),s=i("81d5"),n=i("44d2");a({target:"Array",proto:!0},{fill:s}),n("fill")}}]);