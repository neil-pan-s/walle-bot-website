(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a6d955c"],{"35c6":function(t,i,a){"use strict";a.r(i);var r=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.ratio||0===t.ratio?a("i",{staticClass:"icon",attrs:{title:"可买入系数"}},[t._v(t._s((+t.ratio).toFixed(2)))]):t._e()},s=[],o=(a("61b2"),{props:["time","vtype","listname","trace"],data:function(){return{ratio:""}},created:function(){this.ratio=this.ratioOfList(this.$props.time,this.$props.vtype,this.$props.listname)},methods:{ratioOfList:function(t,i,a){try{var r=this.$props.trace.listRatioOf("ratio",t,i,a),s=this.$props.trace.listRatioRankOf("ratio",t,i,a);if(s&&s<=5)return r}catch(o){}}}}),e=o,n=(a("dabc"),a("2877")),c=Object(n["a"])(e,r,s,!1,null,"3ce560bf",null);i["default"]=c.exports},b26b:function(t,i,a){},dabc:function(t,i,a){"use strict";var r=a("b26b"),s=a.n(r);s.a}}]);