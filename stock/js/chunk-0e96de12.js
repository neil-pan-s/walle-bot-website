(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e96de12"],{"03da":function(t,e,r){"use strict";var a=r("1d02"),n=r.n(a);n.a},"0d03":function(t,e,r){var a=r("6eeb"),n=Date.prototype,c="Invalid Date",o="toString",i=n[o],s=n.getTime;new Date(NaN)+""!=c&&a(n,o,(function(){var t=s.call(this);return t===t?i.call(this):c}))},"1d02":function(t,e,r){},"2fe6":function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return o}));r("cb29");var a=r("d4ec"),n=r("ade3"),c={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(11, 188, 73)",blue:"rgb(120, 164, 250)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},o=function t(e){Object(a["a"])(this,t),Object(n["a"])(this,"label",void 0),Object(n["a"])(this,"fill",void 0),Object(n["a"])(this,"backgroundColor",void 0),Object(n["a"])(this,"borderColor",void 0),Object(n["a"])(this,"data",void 0),Object.assign(this,e),this.fill=e.fill||!1,this.backgroundColor=e.backgroundColor||c.red,this.borderColor=e.borderColor||c.red}},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var a=r("ade3");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"81d5":function(t,e,r){"use strict";var a=r("7b0b"),n=r("23cb"),c=r("50c4");t.exports=function(t){var e=a(this),r=c(e.length),o=arguments.length,i=n(o>1?arguments[1]:void 0,r),s=o>2?arguments[2]:void 0,l=void 0===s?r:n(s,r);while(l>i)e[i++]=t;return e}},"91de":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"t0"},[r("ui-nav"),r("ui-nav",[r("ui-nav-item",[r("a",{on:{click:function(e){return t.onChangeType("chart")}}},[t._v("状态图")])]),r("ui-nav-item",[r("a",{on:{click:function(e){return t.onChangeType("min")}}},[t._v("分时图")])]),r("ui-nav-item",[r("a",{on:{click:function(e){return t.onShowStocks()}}},[t._v("标的池")])])],1),r("ui-chart",{directives:[{name:"show",rawName:"v-show",value:"chart"===t.type,expression:"type === 'chart'"}],ref:"chart"}),r("div",{directives:[{name:"show",rawName:"v-show",value:"min"===t.type,expression:"type === 'min'"}],staticClass:"klines"},[t.code?r("a",{staticClass:"kline"},[r("img",{attrs:{src:t.kline(t.code)}})]):t._e()]),t.stock.code?r("div",{staticClass:"tooltip"},[r("span",[t._v(t._s(t.state.toUpperCase()))]),r("span",[t._v(t._s(t.stock.code))]),r("span",[t._v(t._s(t.stock.name))]),r("span",[t._v(t._s(t.stock.price))]),r("span",{attrs:{title:"股票涨幅 / 交割涨幅"}},[t._v(t._s(t.stock.change)+"% / "+t._s(t.profit)+"%")])]):t._e()],1)},n=[],c=(r("99af"),r("cb29"),r("26e9"),r("0d03"),r("b0c0"),r("a9e3"),r("8ba4"),r("b680"),r("ac1f"),r("1276"),r("a34a")),o=r.n(c),i=r("5530"),s=(r("96cf"),r("1da1")),l=r("2fe6"),u=r("38f7"),d=r("c1df"),h=r.n(d),b=r("7366"),f=r.n(b),p={data:function(){return{interval:-1,type:"chart || min",code:"",state:"",stock:{},trend:{},profit:0,chartData:{buy:{},sell:{}}}},created:function(){var t=this;return Object(s["a"])(o.a.mark((function e(){var r,a,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$route.query.target,a=t.$route.query.key,n=t.$route.query.codes,n?u["a"].processor(r,a,n.split(",")):u["a"].processor(r,a),window.addEventListener("__Walle_Stock_Daily_Interval_Event",(function(e){var r=e.detail,a=(r.name,r.vtype,r.stock),n=r.trend,c=r.state;"L2"===c&&(t.chartData.buy={},t.chartData.sell={}),a&&("L2"===t.state&&"L3"===c&&(t.chartData.buy=Object(i["a"])({time:h()().format("HHmmss")},a)),"L4"===t.state&&"L5"===c&&(t.chartData.sell=Object(i["a"])({time:h()().format("HHmmss")},a)),t.stock=a,t.trend=n,t.code=a.code,t.state=c||"",t.profit=t.calcChange(),t.chart(a,n,c))})),e.next=7,window.__Walle_Stock_Cron.interval(Object(s["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.update());case 1:case"end":return e.stop()}}),e)}))),null,2);case 7:t.interval=e.sent,t.type="chart";case 9:case"end":return e.stop()}}),e)})))()},destroyed:function(){clearInterval(this.interval)},methods:{update:function(){try{if(!this.code)return;this.chart(this.stock,this.trend,this.state)}catch(t){}},onShowStocks:function(){return Object(s["a"])(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:u["a"].show();case 1:case"end":return t.stop()}}),t)})))()},onChangeType:function(t){this.type=t},calcChange:function(){try{if(void 0==this.chartData.buy.change)return 0;var t=this.chartData.buy.change,e=this.chartData.sell.change||this.stock.change;return+(e-t).toFixed(2)}catch(r){return 0}},chart:function(t,e,r){if(this.$refs.chart&&e){e=f()(e);var a=e.time,n=function(t,e,r){var a=new Array(t.length).fill(NaN);for(var n in t)if(+e>=+t[n]){a[n]=r;break}return a.reverse()},c=[new l["a"]({label:"Stock Buy Point",backgroundColor:l["b"].blue,borderColor:l["b"].blue,pointRadius:5,data:n(a,this.chartData.buy.time,this.chartData.buy.price)}),new l["a"]({label:"Stock Sell Point",backgroundColor:l["b"].green,borderColor:l["b"].green,pointRadius:5,data:n(a,this.chartData.sell.time,this.chartData.sell.price)}),new l["a"]({label:"Stock Price",backgroundColor:l["b"].red,borderColor:l["b"].red,data:e.price.reverse()}),new l["a"]({label:"Stock MA5",backgroundColor:l["b"].orange,borderColor:l["b"].orange,data:e.ma5.reverse()}),new l["a"]({label:"Stock MA10",backgroundColor:l["b"].yellow,borderColor:l["b"].yellow,data:e.ma10.reverse()}),new l["a"]({label:"Stock MA20",backgroundColor:l["b"].grey,borderColor:l["b"].grey,data:e.ma20.reverse()})];this.$refs.chart.update({labels:a,datasets:c})}},timestamp:function(){return(new Date).getTime()},secid:function(t){if("1.000001"===t)return"sh000001";var e=window.__Walle_Stock_Crawler.eastmoney.marketCode(t),r="0"===e?"sz":"sh",a="".concat(r).concat(t);return a},kline:function(t){var e="";if(Number.isInteger(+t)){var r=this.secid(t);e="https://image.sinajs.cn/newchart/min/n/".concat(r,".gif")}else e="https://image.sinajs.cn/newchart/futures/min/".concat(t,".gif");var a=this.timestamp();return"".concat(e,"?").concat(a)}}},v=p,g=(r("03da"),r("2877")),w=Object(g["a"])(v,a,n,!1,null,"5a2fe168",null);e["default"]=w.exports},cb29:function(t,e,r){var a=r("23e7"),n=r("81d5"),c=r("44d2");a({target:"Array",proto:!0},{fill:n}),c("fill")}}]);