(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0433b4ee"],{"234b":function(e,t,a){"use strict";var n=a("9c4c"),r=a.n(n);r.a},"2fe6":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));a("cb29");var n=a("d4ec"),r=a("ade3"),o={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(11, 188, 73)",blue:"rgb(120, 164, 250)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},i=function e(t){Object(n["a"])(this,e),Object(r["a"])(this,"label",void 0),Object(r["a"])(this,"fill",void 0),Object(r["a"])(this,"backgroundColor",void 0),Object(r["a"])(this,"borderColor",void 0),Object(r["a"])(this,"data",void 0),Object.assign(this,t),this.fill=t.fill||!1,this.backgroundColor=t.backgroundColor||o.red,this.borderColor=t.borderColor||o.red}},"6f7a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"t0"},[a("ui-nav",[a("ui-nav-item",{attrs:{selected:1===e.day},nativeOn:{click:function(t){return e.onChangeDay(1)}}},[e._v("周一")]),a("ui-nav-item",{attrs:{selected:2===e.day},nativeOn:{click:function(t){return e.onChangeDay(2)}}},[e._v("周二")]),a("ui-nav-item",{attrs:{selected:3===e.day},nativeOn:{click:function(t){return e.onChangeDay(3)}}},[e._v("周三")]),a("ui-nav-item",{attrs:{selected:4===e.day},nativeOn:{click:function(t){return e.onChangeDay(4)}}},[e._v("周四")]),a("ui-nav-item",{attrs:{selected:5===e.day},nativeOn:{click:function(t){return e.onChangeDay(5)}}},[e._v("周五")]),a("ui-nav-item",{attrs:{selected:5===e.day},nativeOn:{click:function(t){return e.onRealtime()}}},[e._v("实时")])],1),a("ui-nav",[a("ui-nav-item",{attrs:{selected:"total"===e.type}},[a("a",{on:{click:function(t){return e.onChangeType("total")}}},[e._v("交易汇总")])]),a("ui-nav-item",{attrs:{selected:"detail"===e.type}},[a("a",{on:{click:function(t){return e.onChangeType("detail")}}},[e._v("逐笔还原")])])],1),a("ul",{staticClass:"times"},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.before,expression:"before"}],staticClass:"pre",on:{click:function(t){return e.onShowBefore()}}},[e._v(" ‹ "+e._s(e.before)+" ")]),a("li",[e._v(" "+e._s(e.tooltip)+" ")]),a("li",{directives:[{name:"show",rawName:"v-show",value:e.next,expression:"next"}],staticClass:"next",on:{click:function(t){return e.onShowNext()}}},[e._v(" "+e._s(e.next)+" › ")])]),a("ui-chart",{ref:"chart"})],1)},r=[],o=(a("99af"),a("cb29"),a("26e9"),a("fb6a"),a("b0c0"),a("b680"),a("a34a")),i=a.n(o),c=(a("96cf"),a("1da1")),l=a("2fe6"),s=a("c1df"),u=a.n(s),d=a("38f7"),h=a("7366"),b=a.n(h),f={data:function(){return{day:u()().day(),type:"total",next:"",before:"",tooltip:""}},mounted:function(){var e=this;return Object(c["a"])(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.onChangeDay(e.day);case 1:case"end":return t.stop()}}),t)})))()},methods:{onRealtime:function(){return Object(c["a"])(i.a.mark((function e(){var t;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t="#/s/t0",t=parent?parent.location.origin+parent.location.pathname+t:location.origin+location.pathname+t,window.open(t);case 3:case"end":return e.stop()}}),e)})))()},onChangeDay:function(e){var t=this;return Object(c["a"])(i.a.mark((function a(){return i.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.day=e,t.type="total",t.next="",t.before="",t.tooltip="",t.$refs.chart&&t.$refs.chart.clear(),a.next=8,d["a"].load(e);case 8:return a.next=10,t.onChangeType("total");case 10:case"end":return a.stop()}}),a)})))()},onChangeType:function(e){var t=this;return Object(c["a"])(i.a.mark((function a(){return i.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.type=e,"total"===e?t.onShowTotalChart():t.onShowDetailChart();case 2:case"end":return a.stop()}}),a)})))()},onShowBefore:function(){d["a"].stepToBefore(),this.onShowDetailChart()},onShowNext:function(){d["a"].stepToNext(),this.onShowDetailChart()},onShowTotalChart:function(){if(this.$refs.chart){var e=d["a"].total(),t=e.total.slice(-1)[0]||0;if(d["a"].date()){this.next="",this.before="",this.tooltip=d["a"].date()+" "+t+"% "+" ( ".concat(e.time.length," times )");var a=[new l["a"]({label:"Stocks Total PTCChange",backgroundColor:l["b"].red,borderColor:l["b"].red,data:e["total"]}),new l["a"]({label:"Stock PTCChange",backgroundColor:l["b"].yellow,borderColor:l["b"].yellow,data:e["change"]})],n=e.time;this.$refs.chart.update({labels:n,datasets:a})}}},onShowDetailChart:function(){if(this.$refs.chart&&d["a"].date()){var e=d["a"].next(),t=d["a"].before();this.next=e&&u()(e,"HHmmss").format("HH:mm:ss"),this.before=t&&u()(t,"HHmmss").format("HH:mm:ss");var a=d["a"].current(),n=d["a"].detail(a),r=n.buy.change||0,o=n.sell.change||0;n.code&&n.name&&(this.tooltip="".concat(n.code," ").concat(n.name," ").concat(+(o-r).toFixed(2),"%"));var i=b()(n),c=i.trend.time,s=function(e,t,a){var n=new Array(e.length).fill(NaN);for(var r in e)if(+t>=+e[r]){n[r-1]=a;break}return n.reverse()},h=[new l["a"]({label:"Stock Buy Point",backgroundColor:l["b"].blue,borderColor:l["b"].blue,pointRadius:5,data:s(c,i.buy.time,i.buy.price)}),new l["a"]({label:"Stock Sell Point",backgroundColor:l["b"].green,borderColor:l["b"].green,pointRadius:5,data:s(c,i.sell.time,i.sell.price)}),new l["a"]({label:"Stock Price",backgroundColor:l["b"].red,borderColor:l["b"].red,data:i.trend.price.reverse()}),new l["a"]({label:"Stock MA",backgroundColor:l["b"].yellow,borderColor:l["b"].yellow,data:i.trend.ma.reverse()})];this.$refs.chart.update({labels:c,datasets:h})}}}},v=f,p=(a("234b"),a("2877")),w=Object(p["a"])(v,n,r,!1,null,"068898d4",null);t["default"]=w.exports},"81d5":function(e,t,a){"use strict";var n=a("7b0b"),r=a("23cb"),o=a("50c4");e.exports=function(e){var t=n(this),a=o(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,a),l=i>2?arguments[2]:void 0,s=void 0===l?a:r(l,a);while(s>c)t[c++]=e;return t}},"9c4c":function(e,t,a){},cb29:function(e,t,a){var n=a("23e7"),r=a("81d5"),o=a("44d2");n({target:"Array",proto:!0},{fill:r}),o("fill")}}]);