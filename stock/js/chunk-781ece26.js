(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-781ece26"],{"26e9":function(t,e,i){"use strict";var a=i("23e7"),s=i("e8b5"),n=[].reverse,l=[1,2];a({target:"Array",proto:!0,forced:String(l)===String(l.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),n.call(this)}})},"2fe6":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return l}));i("cb29");var a=i("276c"),s=i("fc11"),n={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(75, 192, 192)",blue:"rgb(54, 162, 235)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},l=function t(e){var i=e.label,l=e.fill,r=void 0!==l&&l,o=e.backgroundColor,c=void 0===o?n.red:o,h=e.borderColor,u=void 0===h?n.red:h,v=e.data;Object(a["a"])(this,t),Object(s["a"])(this,"label",void 0),Object(s["a"])(this,"fill",void 0),Object(s["a"])(this,"backgroundColor",void 0),Object(s["a"])(this,"borderColor",void 0),Object(s["a"])(this,"data",void 0),this.label=i,this.fill=r,this.backgroundColor=c,this.borderColor=u,this.data=v}},5654:function(t,e,i){"use strict";var a=i("e2b4"),s=i.n(a);s.a},"575e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"today"},[i("ui-nav",[t._l(t.times,(function(e,a){return i("ui-nav-item",{key:e.time+a,attrs:{selected:t.time===e.time},nativeOn:{click:function(i){return t.onChangeTime(e.time)}}},[t._v(" "+t._s(e.time.toUpperCase())+" "),e.rule.date?i("span",{attrs:{title:"移除此临时捕获时间点"},on:{click:function(i){return t.onRemoveTempCapture(e.rule.capture,e.rule.date)}}},[t._v("X")]):t._e()])})),i("ui-nav-item",{attrs:{title:"设置临时捕获时间点(如大盘反弹)"},nativeOn:{click:function(e){return t.onSetTempCapture()}}},[t._v("✚")])],2),i("ui-nav",[t._l(t.vtypes,(function(e){return i("ui-nav-item",{key:e,attrs:{selected:t.vtype===e,title:JSON.stringify(t.validators[e],null,4)}},[i("a",{on:{click:function(i){return t.onChangeVtype(e)}}},[t._v(t._s(e.toUpperCase()))])])})),i("ui-nav-item",{attrs:{selected:t.isShowAll}},[i("a",{on:{click:function(e){return e.stopPropagation(),t.toggleAllLists(e)}}},[t._v("☰")])])],2),t.isShowAll?t._e():i("ui-nav",t._l(t.lists,(function(e){var a=e.change,s=e.name;return i("ui-nav-item",{key:t.time+t.vtype+s,attrs:{selected:t.list===s}},[t.time.includes("t0")?i("i",{attrs:{title:t.last2dayChangesOfList(s,t.vtype)}},[t._v(" "+t._s(t.indicatorOfList(s,t.vtype)))]):t._e(),i("a",{attrs:{title:t.recentChangesOfList(s,t.vtype)},on:{click:function(e){return t.onChangeList(s,t.vtype)}}},[t._v(t._s(s))]),t._v(" "),i("a",{on:{mouseover:function(e){return t.onShowStocksBoard(e,s,t.vtype)}}},[t._v(" ("+t._s(a)+"%)")]),t.hotOfList(s,t.vtype)?i("i",{staticClass:"hot-icon"},[t._v(t._s(t.hotOfList(s,t.vtype)))]):t._e()])})),1),t.isShowAll?i("div",{staticClass:"all-lists"},[i("ui-nav",[i("ui-nav-item",{attrs:{selected:-1e3===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=-1e3,t.updateAllLists()}}},[t._v("ALL")])]),i("ui-nav-item",{attrs:{selected:0===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=0,t.updateAllLists()}}},[t._v(">0%")])]),i("ui-nav-item",{attrs:{selected:3===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=3,t.updateAllLists()}}},[t._v(">3.0%")])]),i("ui-nav-item",{attrs:{selected:5===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=5,t.updateAllLists()}}},[t._v(">5.0%")])]),i("ui-nav-item",{attrs:{selected:10===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=10,t.updateAllLists()}}},[t._v(">10.0%")])]),i("ui-nav-item",{attrs:{selected:20===t.alllistsChangeFilter}},[i("a",{on:{click:function(e){t.alllistsChangeFilter=20,t.updateAllLists()}}},[t._v(">20.0%")])])],1),t._l(t.alllists,(function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.length,expression:"lists.length"}],key:a},[i("ui-nav",{staticClass:"nav"},[i("ui-nav-item",{staticClass:"vtype-icon",staticStyle:{"pointer-events":"none"}},[t._v(t._s(a.toUpperCase()))]),t._l(e,(function(e){var s=e.change,n=e.name;return i("ui-nav-item",{directives:[{name:"show",rawName:"v-show",value:s>=t.alllistsChangeFilter,expression:"change >= alllistsChangeFilter"}],key:t.time+a+n,attrs:{selected:t.list===n}},[t.time.includes("t0")?i("i",{attrs:{title:t.last2dayChangesOfList(n,a)}},[t._v(" "+t._s(t.indicatorOfList(n,a)))]):t._e(),i("a",{attrs:{title:t.recentChangesOfList(n,a)},on:{click:function(e){return t.onChangeList(n,a)}}},[t._v(t._s(n))]),t._v(" "),i("a",{on:{mouseover:function(e){return t.onShowStocksBoard(e,n,a)}}},[t._v(" ("+t._s(s)+"%)")]),t.hotOfList(n,a)?i("i",{staticClass:"hot-icon"},[t._v(t._s(t.hotOfList(n,a)))]):t._e()])}))],2)],1)}))],2):t._e(),i("ui-chart",{ref:"chart"}),i("ui-gene")],1)},s=[],n=(i("a4d3"),i("e01a"),i("d28b"),i("99af"),i("26e9"),i("b0c0"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("ddb0"),i("4795"),i("61b2")),l=i("440a"),r=i("763a"),o=i("ed3d"),c=i("b191"),h=i("6944"),u=i("2fe6"),v={data:function(){return{isShowAll:!1,alllists:{},alllistsChangeFilter:-1e3,time:"",vtype:"",list:"",times:[],vtypes:[],lists:[],validators:{}}},beforeMount:function(){var t=this;this.initTimesNav(),this.initVtypesNav(),o["a"].registerUpdateCallback("today",(function(e){var i=e.name,a="".concat(t.time,"-").concat(t.vtype);i===a&&t.onChangeList(t.list),t.isShowAll&&t.updateAllLists()}))},methods:{updateAllLists:function(){if(this.isShowAll){this.alllists={};var t=!0,e=!1,i=void 0;try{for(var a,s=this.vtypes[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var n=a.value,l=o["a"].listChangesOf(this.time,n);this.alllists[n]=[];var r=!0,c=!1,h=void 0;try{for(var u,v=l[Symbol.iterator]();!(r=(u=v.next()).done);r=!0){var f=u.value;+f.change>=this.alllistsChangeFilter&&this.alllists[n].push(f)}}catch(d){c=!0,h=d}finally{try{r||null==v["return"]||v["return"]()}finally{if(c)throw h}}}}catch(d){e=!0,i=d}finally{try{t||null==s["return"]||s["return"]()}finally{if(e)throw i}}}},toggleAllLists:function(t){this.isShowAll=!this.isShowAll,this.isShowAll&&this.updateAllLists()},initTimesNav:function(){var t=n["a"].getCaptureRules(),e=n["a"].getIntervalRules(),i=n["a"].getTempRules(),a=[],s=[],r=l["a"].today(),o=l["a"].last(),c=!0,h=!1,u=void 0;try{for(var v,f=t[Symbol.iterator]();!(c=(v=f.next()).done);c=!0){var d=v.value;s.push({time:d.capture,rule:d}),a.push({time:"t0-"+d.capture,rule:d})}}catch(A){h=!0,u=A}finally{try{c||null==f["return"]||f["return"]()}finally{if(h)throw u}}var p=!0,m=!1,y=void 0;try{for(var g,C=i[Symbol.iterator]();!(p=(g=C.next()).done);p=!0){var b=g.value;b.date===o&&s.push({time:b.capture,rule:b}),b.date===r&&a.push({time:"t0-"+b.capture,rule:b})}}catch(A){m=!0,y=A}finally{try{p||null==C["return"]||C["return"]()}finally{if(m)throw y}}var _=!0,L=!1,w=void 0;try{for(var O,k=e[Symbol.iterator]();!(_=(O=k.next()).done);_=!0){var S=O.value;s.push({time:S.capture,rule:S}),a.push({time:"t0-"+S.capture,rule:S})}}catch(A){L=!0,w=A}finally{try{_||null==k["return"]||k["return"]()}finally{if(L)throw w}}this.times=[].concat(s,a),this.time=s[0].time,this.onChangeList()},initVtypesNav:function(){var t=n["a"].getValidators(),e=!0,i=!1,a=void 0;try{for(var s,l=t[Symbol.iterator]();!(e=(s=l.next()).done);e=!0){var r=s.value;this.vtypes.push(r.name),this.validators[r.name]=r}}catch(o){i=!0,a=o}finally{try{e||null==l["return"]||l["return"]()}finally{if(i)throw a}}this.vtype=this.vtypes[0]},onUpdateChart:function(){if(this.$refs.chart){var t=o["a"].formatedChangesOfList(this.time,this.vtype,this.list);if(t.time.length){var e=t.time.reverse(),i=[new u["a"]({label:"Stocks PTC-Change",data:t.value})];this.$refs.chart.update({labels:e,datasets:i})}else this.$refs.chart.clear()}},onChangeTime:function(t){this.isShowAll=!1,this.time=t,this.onChangeList()},onChangeVtype:function(t){this.isShowAll=!1,this.vtype=t,this.onChangeList()},onChangeList:function(t,e){if(this.time&&this.vtype)if(e&&(this.vtype=e),this.lists=o["a"].listChangesOf(this.time,this.vtype),this.lists.length){t&&(this.list=t);var i=!1,a=!0,s=!1,n=void 0;try{for(var l,r=this.lists[Symbol.iterator]();!(a=(l=r.next()).done);a=!0){var c=l.value;c.name===this.list&&this.list&&(i=!0)}}catch(h){s=!0,n=h}finally{try{a||null==r["return"]||r["return"]()}finally{if(s)throw n}}!i&&(this.list=this.lists[0].name),this.onUpdateChart()}else this.$refs.chart&&this.$refs.chart.clear()},onSetTempCapture:function(){window.__Walle_Stock_Controller.setTempCapture(),setTimeout((function(){location.href=location.pathname}),500)},onRemoveTempCapture:function(t,e){window.__Walle_Stock_Controller.removeTempCapture(t,e),setTimeout((function(){location.href=location.pathname}),500)},onShowStocksBoard:function(t,e,i){if(this.time&&this.vtype){i=i||this.vtype;var a=t.currentTarget,s={};s=this.time.startsWith("t0")?r["a"].captureOfList(this.time,i,e):o["a"].captureOfList(this.time,i,e);var n=o["a"].traceOfList(this.time,i,e);s&&Object.keys(s).length&&Object(h["c"])(a,this.time,i,e,s,n)}},last2dayChangesOfList:function(t,e){var i=o["a"].last2daysChangesOfList(this.time,e||this.vtype,t);return"前两交易日跟踪收益 \r\n".concat(i[0]," : ").concat(i[1],"%, ").concat(i[2]," : ").concat(i[3],"%")},recentChangesOfList:function(t,e){var i=this.time.replace("t0-",""),a=c["a"].changeOfList(i,e,t),s=c["a"].listRankOf(i,e,t);return"近期跟踪总收益: ".concat(a,"% 排名: ").concat(s)},indicatorOfList:function(t,e){var i=o["a"].last2daysChangesOfList(this.time,e||this.vtype,t);return+i[1]>0||+i[3]>0?"✔":+i[1]<=0&&+i[3]<=0?"✘":""},hotOfList:function(t,e){if(!this.time.startsWith("t0"))return"";var i=this.time.replace("t0-",""),a=c["a"].listRankOf(i,e,t);return a<=6?"hot"+a:""}}},f=v,d=(i("5654"),i("2877")),p=Object(d["a"])(f,a,s,!1,null,"52065174",null);e["default"]=p.exports},"81d5":function(t,e,i){"use strict";var a=i("7b0b"),s=i("23cb"),n=i("50c4");t.exports=function(t){var e=a(this),i=n(e.length),l=arguments.length,r=s(l>1?arguments[1]:void 0,i),o=l>2?arguments[2]:void 0,c=void 0===o?i:s(o,i);while(c>r)e[r++]=t;return e}},cb29:function(t,e,i){var a=i("23e7"),s=i("81d5"),n=i("44d2");a({target:"Array",proto:!0},{fill:s}),n("fill")},e2b4:function(t,e,i){}}]);