(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b72c7ce","chunk-031c9228"],{"07ac":function(t,e,i){var a=i("23e7"),s=i("6f53").values;a({target:"Object",stat:!0},{values:function(t){return s(t)}})},"26e9":function(t,e,i){"use strict";var a=i("23e7"),s=i("e8b5"),r=[].reverse,n=[1,2];a({target:"Array",proto:!0,forced:String(n)===String(n.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),r.call(this)}})},"2fe6":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return n}));i("cb29");var a=i("276c"),s=i("fc11"),r={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(11, 188, 73)",blue:"rgb(120, 164, 250)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},n=function t(e){var i=e.label,n=e.fill,o=void 0!==n&&n,c=e.backgroundColor,l=void 0===c?r.red:c,u=e.borderColor,h=void 0===u?r.red:u,p=e.data;Object(a["a"])(this,t),Object(s["a"])(this,"label",void 0),Object(s["a"])(this,"fill",void 0),Object(s["a"])(this,"backgroundColor",void 0),Object(s["a"])(this,"borderColor",void 0),Object(s["a"])(this,"data",void 0),this.label=i,this.fill=o,this.backgroundColor=l,this.borderColor=h,this.data=p}},3508:function(t,e,i){},"53b0":function(t,e,i){"use strict";var a=i("e98c"),s=i.n(a);s.a},"575e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"today"},[i("ui-nav",[t._l(t.times,(function(e,a){return i("ui-nav-item",{key:e.time+a,attrs:{selected:t.time===e.time},nativeOn:{click:function(i){return t.onChangeTime(e.time)}}},[t._v(" "+t._s(e.time.toUpperCase())+" "),e.rule.date?i("span",{attrs:{title:"移除此临时捕获时间点"},on:{click:function(i){return t.onRemoveTempCapture(e.rule.capture,e.rule.date)}}},[t._v("X")]):t._e()])})),i("ui-nav-item",{attrs:{title:"设置临时捕获时间点(如大盘反弹)"},nativeOn:{click:function(e){return t.onSetTempCapture()}}},[t._v("✚")])],2),i("ui-nav",[t._l(t.vtypes,(function(e){return i("ui-nav-item",{key:e,attrs:{selected:t.vtype===e&&!t.isShowAll,title:JSON.stringify(t.validators[e],null,4)}},[i("a",{on:{click:function(i){return t.onChangeVtype(e)}}},[t._v(t._s(e.toUpperCase()))])])})),i("ui-nav-item",{attrs:{selected:t.isShowAll}},[i("a",{on:{click:function(e){return e.stopPropagation(),t.toggleAllLists(e)}}},[t._v("☰")])])],2),t.isShowAll?t._e():i("ui-nav",t._l(t.lists,(function(e){var a=e.change,s=e.name;return i("ui-nav-item",{key:t.time+t.vtype+s,attrs:{selected:t.list===s}},[t.indicatorOfList(s,t.vtype)?i("i",{staticClass:"indicator-icon"},[t._v(" "+t._s(t.indicatorOfList(s,t.vtype)))]):t._e(),i("a",{attrs:{title:t.recentChangesOfList(s,t.vtype)},on:{click:function(e){return t.onChangeList(s,t.vtype)}}},[t._v(t._s(s))]),i("a",{on:{mouseover:function(e){return t.onShowStocksBoard(e,s,t.vtype)}}},[t._v(" ("+t._s(a)+"%)")]),t.topOfList(s,t.vtype)?i("i",{staticClass:"top-icon"},[t._v(t._s(t.topOfList(s,t.vtype)))]):t._e(),t.hotOfList(s,t.vtype)?i("i",{staticClass:"hot-icon"},[t._v(" "+t._s(t.hotOfList(s,t.vtype)))]):t._e(),t.ratioOfList(s,t.vtype)?i("i",{staticClass:"ratio-icon"},[t._v(" "+t._s(t.ratioOfList(s,t.vtype)))]):t._e()])})),1),t.isShowAll?i("div",{staticClass:"all-lists"},[i("ui-nav",[i("ui-nav-item",{attrs:{selected:-1e3===t.alllistsFilter}},[i("a",{on:{click:function(e){t.alllistsFilter=-1e3,t.updateAllLists()}}},[t._v("ALL")])]),i("ui-nav-item",{attrs:{selected:0===t.alllistsFilter}},[i("a",{on:{click:function(e){t.alllistsFilter=0,t.updateAllLists()}}},[t._v(">0%")])]),i("ui-nav-item",{attrs:{selected:5===t.alllistsFilter}},[i("a",{on:{click:function(e){t.alllistsFilter=5,t.updateAllLists()}}},[t._v(">5.0%")])]),i("ui-nav-item",{attrs:{selected:10===t.alllistsFilter}},[i("a",{on:{click:function(e){t.alllistsFilter=10,t.updateAllLists()}}},[t._v(">10.0%")])]),i("ui-nav-item",{attrs:{selected:20===t.alllistsFilter}},[i("a",{on:{click:function(e){t.alllistsFilter=20,t.updateAllLists()}}},[t._v(">20.0%")])]),i("ui-nav-item",{attrs:{selected:40===t.alllistsFilter}},[i("a",{on:{click:function(e){t.alllistsFilter=40,t.updateAllLists()}}},[t._v(">40.0%")])]),i("ui-nav-item",{attrs:{selected:60===t.alllistsFilter}},[i("a",{on:{click:function(e){t.alllistsFilter=60,t.updateAllLists()}}},[t._v(">60.0%")])]),i("ui-nav-item",{attrs:{selected:80===t.alllistsFilter}},[i("a",{on:{click:function(e){t.alllistsFilter=80,t.updateAllLists()}}},[t._v(">80.0%")])]),i("ui-nav-item",{attrs:{selected:"ratio"===t.alllistsFilter}},[i("a",{on:{click:function(e){t.alllistsFilter="ratio",t.updateAllLists()}}},[t._v("S-RATIO")])])],1),t._l(t.alllists,(function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.length,expression:"lists.length"}],key:a},[i("ui-nav",{staticClass:"nav"},[i("ui-nav-item",{staticClass:"vtype-icon",staticStyle:{"pointer-events":"none"}},[t._v(t._s(a.toUpperCase()))]),t._l(e,(function(e){var s=e.change,r=e.name;return i("ui-nav-item",{key:t.time+a+r,attrs:{selected:t.list===r}},[t.indicatorOfList(r,a)?i("i",{staticClass:"indicator-icon"},[t._v(" "+t._s(t.indicatorOfList(r,a)))]):t._e(),i("a",{attrs:{title:t.recentChangesOfList(r,a)},on:{click:function(e){return t.onChangeList(r,a)}}},[t._v(t._s(r))]),i("a",{on:{mouseover:function(e){return t.onShowStocksBoard(e,r,a)}}},[t._v(" ("+t._s(s)+"%)")]),t.topOfList(r,a)?i("i",{staticClass:"top-icon"},[t._v(t._s(t.topOfList(r,a)))]):t._e(),t.hotOfList(r,a)?i("i",{staticClass:"hot-icon"},[t._v(" "+t._s(t.hotOfList(r,a))+" ")]):t._e(),t.ratioOfList(r,a)?i("i",{staticClass:"ratio-icon"},[t._v(" "+t._s(t.ratioOfList(r,a)))]):t._e()])}))],2)],1)}))],2):t._e(),i("ul",{staticClass:"date"},[i("li",{directives:[{name:"show",rawName:"v-show",value:t.date.pre,expression:"date.pre"}],staticClass:"pre"},[i("router-link",{attrs:{to:"/market/today?date="+t.date.pre}},[t._v(" ‹ "+t._s(t.date.pre)+" ")])],1),i("li",[t._v(" "+t._s(t.date.today)+" ")]),i("li",{directives:[{name:"show",rawName:"v-show",value:t.date.next,expression:"date.next"}],staticClass:"next"},[i("router-link",{attrs:{to:"/market/today?date="+t.date.next}},[t._v(t._s(t.date.next)+" › ")])],1)]),i("ui-chart",{ref:"chart"}),i("ui-gene")],1)},s=[],r=(i("a4d3"),i("e01a"),i("d28b"),i("99af"),i("caad"),i("26e9"),i("b0c0"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("2ca0"),i("ddb0"),i("4795"),i("a34a")),n=i.n(r),o=i("c964"),c=(i("96cf"),i("61b2")),l=i("af15"),u=i("763a"),h=i("ed3d"),p=i("b191"),d=i("a1e1"),v=i("2fe6"),f={data:function(){return{loadingEl:void 0,isShowAll:!1,alllists:{},alllistsFilter:-1e3,time:"",vtype:"",list:"",times:[],vtypes:[],lists:[],tempTimes:[],validators:{},trace:h["a"],capture:u["a"],traceOfLastday:h["a"],date:{today:"",next:"",pre:""}}},beforeMount:function(){var t=Object(o["a"])(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initTimesNav();case 2:return t.next=4,this.initVtypesNav();case 4:return t.next=6,this.initTrace();case 6:return t.next=8,this.onChangeList();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),watch:{$route:function(){var t=Object(o["a"])(n.a.mark((function t(e,i){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initTimesNav();case 2:return t.next=4,this.initVtypesNav();case 4:return t.next=6,this.initTrace();case 6:this.onChangeList(),this.updateAllLists();case 8:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}()},methods:{initTrace:function(){var t=Object(o["a"])(n.a.mark((function t(){var e,i,a=this;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.query.date,!e){t.next=26;break}if(t.t0=this.loadingEl,!t.t0){t.next=6;break}return t.next=6,toastr.clear(this.loadingEl);case 6:return t.next=8,toastr.loading();case 8:return this.loadingEl=t.sent,this.tradedate=new l["a"](e),this.date.pre=this.tradedate.last(),this.date.next=this.tradedate.next(),this.date.today=e,t.next=15,h["a"].create(e);case 15:return this.trace=t.sent,t.next=18,u["a"].create(e);case 18:return this.capture=t.sent,t.next=21,h["a"].create(this.date.pre);case 21:return this.traceOfLastday=t.sent,t.next=24,toastr.clear(this.loadingEl);case 24:t.next=34;break;case 26:return this.date={},this.tradedate=l["b"],this.trace=h["a"],this.capture=u["a"],i=this.tradedate.last(),t.next=33,h["a"].create(i);case 33:this.traceOfLastday=t.sent;case 34:this.trace.registerUpdateCallback("today",(function(t){var e=t.name,i="".concat(a.time,"-").concat(a.vtype);e===i&&a.onChangeList(a.list),a.isShowAll&&a.updateAllLists()}));case 35:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateAllLists:function(){if(this.isShowAll){this.alllists={};var t=!0,e=!1,i=void 0;try{for(var a,s=this.vtypes[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var r=a.value,n=this.trace.listChangesOf(this.time,r);this.alllists[r]=[];var o=!0,c=!1,l=void 0;try{for(var u,h=n[Symbol.iterator]();!(o=(u=h.next()).done);o=!0){var p=u.value;if("ratio"===this.alllistsFilter){var d=this.ratioOfList(p.name,r);+d<=10&&this.alllists[r].push(p)}else+p.change>this.alllistsFilter&&this.alllists[r].push(p)}}catch(v){c=!0,l=v}finally{try{o||null==h["return"]||h["return"]()}finally{if(c)throw l}}}}catch(v){e=!0,i=v}finally{try{t||null==s["return"]||s["return"]()}finally{if(e)throw i}}}},toggleAllLists:function(){this.isShowAll=!this.isShowAll,this.isShowAll&&this.updateAllLists()},initTimesNav:function(){var t=Object(o["a"])(n.a.mark((function t(){var e,i,a,s,r,o,u,h,p,d,v,f,m,y,_,w,b,g,k,O,L,C,x,S,A;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(e=c["a"].getCaptureRules(),i=c["a"].getIntervalRules(),a=c["a"].getTempRules(),s=[],r=[],o=l["b"].today(),u=l["b"].last(),h=!0,p=!1,d=void 0,t.prev=9,v=e[Symbol.iterator]();!(h=(f=v.next()).done);h=!0)m=f.value,r.push({time:m.capture,rule:m}),s.push({time:"t0-"+m.capture,rule:m});t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](9),p=!0,d=t.t0;case 17:t.prev=17,t.prev=18,h||null==v["return"]||v["return"]();case 20:if(t.prev=20,!p){t.next=23;break}throw d;case 23:return t.finish(20);case 24:return t.finish(17);case 25:if(this.$route.query.date){t.next=45;break}for(y=!0,_=!1,w=void 0,t.prev=29,b=a[Symbol.iterator]();!(y=(g=b.next()).done);y=!0)k=g.value,k.date===u&&r.push({time:k.capture,rule:k}),k.date===o&&s.push({time:"t0-"+k.capture,rule:k}),this.tempTimes.push(k.capture);t.next=37;break;case 33:t.prev=33,t.t1=t["catch"](29),_=!0,w=t.t1;case 37:t.prev=37,t.prev=38,y||null==b["return"]||b["return"]();case 40:if(t.prev=40,!_){t.next=43;break}throw w;case 43:return t.finish(40);case 44:return t.finish(37);case 45:for(O=!0,L=!1,C=void 0,t.prev=48,x=i[Symbol.iterator]();!(O=(S=x.next()).done);O=!0)A=S.value,r.push({time:A.capture,rule:A}),s.push({time:"t0-"+A.capture,rule:A});t.next=56;break;case 52:t.prev=52,t.t2=t["catch"](48),L=!0,C=t.t2;case 56:t.prev=56,t.prev=57,O||null==x["return"]||x["return"]();case 59:if(t.prev=59,!L){t.next=62;break}throw C;case 62:return t.finish(59);case 63:return t.finish(56);case 64:this.times=[].concat(r,s),this.time=r[0].time;case 66:case"end":return t.stop()}}),t,this,[[9,13,17,25],[18,,20,24],[29,33,37,45],[38,,40,44],[48,52,56,64],[57,,59,63]])})));function e(){return t.apply(this,arguments)}return e}(),initVtypesNav:function(){var t=c["a"].getValidators();this.vtypes=[];var e=!0,i=!1,a=void 0;try{for(var s,r=t[Symbol.iterator]();!(e=(s=r.next()).done);e=!0){var n=s.value;this.vtypes.push(n.name),this.validators[n.name]=n}}catch(o){i=!0,a=o}finally{try{e||null==r["return"]||r["return"]()}finally{if(i)throw a}}this.vtype=this.vtypes[0]},onUpdateChart:function(){if(this.$refs.chart){var t=this.trace.formatedChangesOfList(this.time,this.vtype,this.list);if(t.time.length){var e=t.time.reverse(),i=[new v["a"]({label:"Stocks PTC-Change",data:t.value})];this.$refs.chart.update({labels:e,datasets:i})}else this.$refs.chart.clear()}},onChangeTime:function(t){this.isShowAll=!1,this.time=t,this.onChangeList()},onChangeVtype:function(t){this.isShowAll=!1,this.vtype=t,this.onChangeList()},onChangeList:function(t,e){if(this.time&&this.vtype)if(e&&(this.vtype=e),this.lists=this.trace.listChangesOf(this.time,this.vtype),this.lists.length){t&&(this.list=t);var i=!1,a=!0,s=!1,r=void 0;try{for(var n,o=this.lists[Symbol.iterator]();!(a=(n=o.next()).done);a=!0){var c=n.value;c.name===this.list&&this.list&&(i=!0)}}catch(l){s=!0,r=l}finally{try{a||null==o["return"]||o["return"]()}finally{if(s)throw r}}!i&&(this.list=this.lists[0].name),this.onUpdateChart()}else this.$refs.chart&&this.$refs.chart.clear()},onSetTempCapture:function(){window.__Walle_Stock_Controller.setTempCapture(),setTimeout((function(){location.href=location.pathname}),500)},onRemoveTempCapture:function(t,e){window.__Walle_Stock_Controller.removeTempCapture(t,e),setTimeout((function(){location.href=location.pathname}),500)},onShowStocksBoard:function(t,e,i){if(this.time&&this.vtype){i=i||this.vtype;var a=t.currentTarget,s={};s=this.time.startsWith("t0")?this.capture.captureOfList(this.time,i,e):this.trace.captureOfList(this.time,i,e);var r=this.trace.traceOfList(this.time,i,e);s&&Object.keys(s).length&&Object(d["a"])(a,this.time,i,e,s,r,{update:!this.$route.query.date})}},recentChangesOfList:function(t,e){try{var i=this.trace.maxChangeOfList(this.time,e,t);if(this.tempTimes.includes(this.time.replace("t0-","")))return"最大潜在涨幅: ".concat(i,"%");var a,s,r,n,o=p["a"].listShorttermProfitOf(this.time,e,t),c=p["a"].listShorttermRankOf(this.time,e,t),l=p["a"].listLongtermProfitOf(this.time,e,t),u=p["a"].listLongtermRankOf(this.time,e,t),h=p["a"].listStrategyOf(this.time,e,t);this.time.startsWith("t0")?(n=this.trace.last2daysChangesOfList(this.time,e||this.vtype,t),r=this.trace.listRatioOf(this.time,e,t),a=this.tradedate.today(),s=this.trace.changeOfList(this.time.replace("t0-",""),e,t)):(n=this.traceOfLastday.last2daysChangesOfList(this.time,e||this.vtype,t),r=this.traceOfLastday.listRatioOf(this.time,e,t),a=this.tradedate.last(),s=this.traceOfLastday.changeOfList(this.time.replace("t0-",""),e,t));var d="长期跟踪总收益: ".concat(l,"% 排名: ").concat(u," 交易次数: ").concat(h.day.total,"\r\n");return d+="短期跟踪总收益: ".concat(o,"% 排名: ").concat(c," 交易次数: ").concat(h.day.hot,"\r\n"),d+="近三日收益: ".concat(a," ").concat(s,"%, ").concat(n[0]," ").concat(n[1],"%, ").concat(n[2]," ").concat(n[3],"%\r\n"),d+="最大潜在涨幅: ".concat(i,"% 可买入系数: ").concat(r," "),d}catch(v){}},topOfList:function(t,e){try{if(this.tempTimes.includes(this.time.replace("t0-","")))return;var i=p["a"].listLongtermRankOf(this.time,e,t);if(i&&i<=10)return"TOP"+i}catch(a){}},hotOfList:function(t,e){try{if(this.tempTimes.includes(this.time.replace("t0-","")))return;var i=p["a"].listShorttermRankOf(this.time,e,t);if(i&&i<=10)return"HOT"+i}catch(a){}},ratioOfList:function(t,e){try{if(this.tempTimes.includes(this.time.replace("t0-","")))return;var i,a;if(this.time.includes("t0")?(i=this.trace.listRatioOf(this.time,e,t),a=this.trace.listRatioRankOf(this.time,e,t)):(i=this.traceOfLastday.listRatioOf(this.time,e,t),a=this.traceOfLastday.listRatioRankOf(this.time,e,t)),a&&a<=10)return i}catch(s){}},indicatorOfList:function(t,e){try{if(this.tempTimes.includes(this.time.replace("t0-","")))return;var i=this.trace.last2daysChangesOfList(this.time,e||this.vtype,t),a=this.trace.changeOfList(this.time.replace("t0-",""),e||this.vtype,t);if(!i[1]||!a)return"";if(+i[1]<=0&&+a<=0)return"✘"}catch(s){}}}},m=f,y=(i("53b0"),i("2877")),_=Object(y["a"])(m,a,s,!1,null,"949a7294",null);e["default"]=_.exports},6067:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"board",staticClass:"board background-glass",on:{click:function(t){t.stopPropagation()}}},[t.$props.options.title?i("p",{staticClass:"title"},[t._v(t._s(t.$props.options.title))]):t._e(),Object.values(this.trace).length&&!t.$props.options.simple?i("div",[i("br"),i("p",[t._v("跟踪 "),i("span",{staticClass:"profit",class:{red:t.profit>=0,green:t.profit<0},attrs:{title:t.$props.listname+"-"+t.$props.vtype+" 达成涨幅 "+t.profit+"% 潜在涨幅 "+t.potential+"% "}},[t._v("("+t._s(t.profit)+"%)")])]),i("table",{staticClass:"table"},[i("thead",[i("tr",t._l(t.translator,(function(e,a){return i("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(a,!0),expression:"isShowOptionField(key, true)"}],key:a,attrs:{scope:"col"}},[t._v(t._s(t.translator[a]))])})),0)]),i("tbody",t._l(t.trace,(function(e,a){return i("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(s,r){return i("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(r,!0),expression:"isShowOptionField(key, true)"}],key:r,staticClass:"cursor-default",class:{animated:"rate"===r&&e.change<0&&e.rate<0,infinite:!0,shake:!0,slower:!0},attrs:{scope:"row"}},["code"===r?i("a",{attrs:{href:t.url(a,e.name),target:"_blank"}},[t._v(t._s(a))]):i("span","change"===r?[i("span",{staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"今日涨跌幅"}},[t._v(t._s(e[r]))]),t._v(" / "),i("span",{class:t.calcChange(a)>=0?"red":"green",staticStyle:{width:"40px",display:"inline-block"},attrs:{title:"两日涨跌幅"}},[t._v(t._s(t.calcChange(a)))])]:[t._v(t._s(t.toMoney(r,e[r])))]),t.isT0List&&"code"===r?i("i",{staticClass:"cursor-pointer",attrs:{title:"从榜单中移除此股票",onclick:"window.dispatchEvent(new CustomEvent('onIgnoreStockEvent', { detail: { el: this , time:'"+t.time+"', vtype:'"+t.vtype+"', listname:'"+t.listname+"', code:'"+e.code+"', name:'"+e.name+"' }}))"}},[t._v(" (x)")]):t._e()])})),0)})),0)])]):t._e(),i("div",[t.$props.options.simple?t._e():i("br"),t.$props.options.simple?t._e():i("p",[t._v("捕获")]),i("table",{staticClass:"table"},[i("thead",[i("tr",t._l(t.translator,(function(e,a){return i("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(a),expression:"isShowOptionField(key)"}],key:a,attrs:{scope:"col"}},[t._v(t._s(t.translator[a]))])})),0)]),i("tbody",t._l(t.capture,(function(e,a){return i("tr",{key:e.code,class:{red:e.change>=0,green:e.change<0}},t._l(t.translator,(function(s,r){return i("th",{directives:[{name:"show",rawName:"v-show",value:t.isShowOptionField(r),expression:"isShowOptionField(key)"}],key:r,staticClass:"cursor-default",attrs:{scope:"row"}},["code"===r?i("a",{attrs:{href:t.url(a,e.name),target:"_blank"}},[t._v(t._s(a))]):i("span",[t._v(t._s(t.toMoney(r,e[r])))]),"code"===r?i("i",{staticClass:"cursor-pointer",attrs:{title:"查看股票基因数据",onclick:"window.dispatchEvent(new CustomEvent('onShowGeneEvent', { detail: { code: '"+e.code+"', vtype:'"+t.vtype+"' }}))"}},[t._v(" (i)")]):t._e()])})),0)})),0)]),i("br")])])},s=[],r=(i("caad"),i("b680"),i("b64b"),i("d3b7"),i("07ac"),i("ac1f"),i("2532"),i("5319"),i("a34a")),n=i.n(r),o=i("c964"),c=(i("96cf"),{props:["time","vtype","listname","captureList","traceList","options"],data:function(){return{translator:{code:"股票代码",name:"股票简称",price:"股价",change:"涨跌幅",rate:"主力净占比",prevclose:"昨收",turnover:"换手率",qrr:"量比",volume:"成交量",inflow:"主力流入资金",outflow:"主力流出资金",netinflow:"主力净流入资金",hot:"热度",block:"板块"},trace:{},capture:{},profit:0,potential:0,intervalId:-1}},computed:{isT0List:function(){return this.$props.time.includes("t0")}},watch:{"$props.options":function(t,e){this.$props.options.show?(this.startAutoUpdate(),console.log("#Stock-Board# show start auto-update")):(this.stopAutoUpdate(),console.log("#Stock-Board# hidden disable auto-update"))}},created:function(){var t=Object(o["a"])(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.trace=this.$props.traceList,this.capture=this.$props.captureList,t.next=4,this.calc();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),destroyed:function(){this.stopAutoUpdate()},methods:{isShowOptionField:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var i=["hot","block"];if(e&&i.includes(t))return!1;var a=Object.values(this.$props.captureList)[0];return!!a[t]}catch(s){return!1}},toMoney:function(t,e){return["volume","inflow","outflow","netinflow"].includes(t)&&(e=Math.abs(+e)>=1e8?(+e/1e8).toFixed(2)+"亿":(+e/1e4).toFixed(2)+"万"),e},url:function(t,e){return t=t.replace("A",""),"上证指数"===e?"http://data.eastmoney.com/zjlx/zs000001.html":"http://data.eastmoney.com/zjlx/".concat(t,".html")},calc:function(){var t=Object(o["a"])(n.a.mark((function t(){var e,i,a;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.trace){t.next=3;break}return t.abrupt("return");case 3:for(a in e=0,i=0,this.trace)e+=this.calcChange(a),i+=this.calcPotentialChange(a);this.profit=+e.toFixed(2),this.potential=+i.toFixed(2),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.warn("#Stock-Board# calc",t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),calcChange:function(t){var e=this.capture[t].price,i=this.trace[t].price;return 0===i?+((this.trace[t].prevclose-this.capture[t].price)/this.capture[t].price*100).toFixed(2):+((i-e)/e*100).toFixed(2)},calcPotentialChange:function(t){return 0===this.trace[t].price?0:+(10-this.trace[t].change).toFixed(2)},stopAutoUpdate:function(){clearInterval(this.intervalId),console.log("#Stock-Board# auto-update stoped")},startAutoUpdate:function(){var t=Object(o["a"])(n.a.mark((function t(){var e=this;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(window.__Walle_Stock_Cron&&window.__Walle_Stock_Crawler){t.next=2;break}return t.abrupt("return");case 2:if(this.$props.options.update){t.next=5;break}return console.log("#Stock-Board# force disable auto-update"),t.abrupt("return");case 5:return console.log("#Stock-Board# auto-update start"),t.next=8,window.__Walle_Stock_Cron.interval(Object(o["a"])(n.a.mark((function t(){var i;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=Object.keys(e.trace),t.next=3,window.__Walle_Stock_Crawler.captureStocks(i);case 3:return e.trace=t.sent,t.next=6,e.calc();case 6:console.log("#Stock-Board# auto-update ",e.trace);case 7:case"end":return t.stop()}}),t)}))),null,30,"stock-board");case 8:this.intervalId=t.sent;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}),l=c,u=(i("99d5"),i("2877")),h=Object(u["a"])(l,a,s,!1,null,"169d5d8e",null);e["default"]=h.exports},"6f53":function(t,e,i){var a=i("83ab"),s=i("df75"),r=i("fc6a"),n=i("d1e7").f,o=function(t){return function(e){var i,o=r(e),c=s(o),l=c.length,u=0,h=[];while(l>u)i=c[u++],a&&!n.call(o,i)||h.push(t?[i,o[i]]:o[i]);return h}};t.exports={entries:o(!0),values:o(!1)}},"81d5":function(t,e,i){"use strict";var a=i("7b0b"),s=i("23cb"),r=i("50c4");t.exports=function(t){var e=a(this),i=r(e.length),n=arguments.length,o=s(n>1?arguments[1]:void 0,i),c=n>2?arguments[2]:void 0,l=void 0===c?i:s(c,i);while(l>o)e[o++]=t;return e}},"99d5":function(t,e,i){"use strict";var a=i("3508"),s=i.n(a);s.a},a1e1:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i("d3b7");var a=i("a34a"),s=i.n(a),r=i("c964"),n=(i("96cf"),i("a026")),o=i("6067"),c=i("6944");function l(t,e,i,a,s,r){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(s.a.mark((function t(e,i,a,r,l,u){var h,p,d=arguments;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:h=d.length>6&&void 0!==d[6]?d[6]:{update:!0,show:!1,title:"",simple:!1},p=new n["a"]({components:{"ui-board":o["default"]},template:'<ui-board :time="time" :vtype="vtype" :listname="listname" :capture-list="captureList" :trace-list="traceList" :options="options"></ui-board>',data:function(){return{time:i,vtype:a,listname:r,captureList:l,traceList:u,options:h}}}).$mount(),Object(c["c"])(e,p.$el,(function(t){p.$data.options=Object.assign({},h,{show:t})}));case 3:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}},cb29:function(t,e,i){var a=i("23e7"),s=i("81d5"),r=i("44d2");a({target:"Array",proto:!0},{fill:s}),r("fill")},e98c:function(t,e,i){}}]);