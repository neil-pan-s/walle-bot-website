(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d8a36c7"],{"07ac":function(t,e,r){var n=r("23e7"),o=r("6f53").values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},1148:function(t,e,r){"use strict";var n=r("a691"),o=r("1d80");t.exports="".repeat||function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},"408a":function(t,e,r){var n=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"4f83":function(t,e,r){},6067:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"board"},[r("br"),r("p",[t._v("跟踪")]),r("table",{staticClass:"table"},[r("thead",[r("tr",t._l(t.translator,(function(e,n){return r("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===n&&!t.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:n,attrs:{scope:"col"}},[t._v(t._s(t.translator[n]))])})),0)]),r("tbody",t._l(t.traceList,(function(e){return r("tr",{key:e.code},t._l(t.translator,(function(n,o){return r("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===o&&!t.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:o,staticClass:"cursor-default",attrs:{scope:"row"}},[t._v(" "+t._s(t.toMoney(o,e[o]))+" "),t.isT0List&&"code"===o?r("i",{staticClass:"cursor-pointer",attrs:{title:"从榜单中移除此股票",onclick:"window.dispatchEvent(new CustomEvent('onIgnoreStockEvent', { detail: { el: this , time:'"+t.time+"', vtype:'"+t.vtype+"', listname:'"+t.listname+"', code:'"+e.code+"', name:'"+e.name+"' }}))"}},[t._v("(x)")]):t._e()])})),0)})),0)]),r("br"),r("p",[t._v("捕获")]),r("table",{staticClass:"table"},[r("thead",[r("tr",t._l(t.translator,(function(e,n){return r("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===n&&!t.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:n,attrs:{scope:"col"}},[t._v(t._s(t.translator[n]))])})),0)]),r("tbody",t._l(t.captureList,(function(e){return r("tr",{key:e.code},t._l(t.translator,(function(n,o){return r("th",{directives:[{name:"show",rawName:"v-show",value:!("hot"===o&&!t.isHotList),expression:"!(key === 'hot' && !isHotList)"}],key:o,staticClass:"cursor-default",attrs:{scope:"row"}},[t._v(" "+t._s(t.toMoney(o,e[o]))+" "),"code"===o?r("i",{staticClass:"cursor-pointer",attrs:{title:"查看股票基因数据",onclick:"window.dispatchEvent(new CustomEvent('onShowGeneEvent', { detail: { code: '"+e.code+"' }}))"}},[t._v("(i)")]):t._e()])})),0)})),0)]),r("br")])},o=[],i=(r("caad"),r("b680"),r("07ac"),r("2532"),{props:["time","vtype","listname","captureList","traceList"],data:function(){return{translator:{code:"股票代码",name:"股票简称",price:"股价",change:"涨跌幅",rate:"主力净占比",open:"开盘价",turnover:"换手率",qrr:"量比",volume:"成交量",inflow:"主力流入资金",outflow:"主力流出资金",netinflow:"主力净流入资金",hot:"热度"}}},computed:{isHotList:function(){try{var t=Object.values(this.$props.captureList)[0];return!!t.hot}catch(e){}return!1},isT0List:function(){return this.$props.time.includes("t0")}},methods:{toMoney:function(t,e){return["inflow","outflow","netinflow"].includes(t)&&(e=Math.abs(+e)>=1e8?(+e/1e8).toFixed(2)+"亿":(+e/1e4).toFixed(2)+"万"),e}}}),s=i,a=(r("a6ea"),r("2877")),c=Object(a["a"])(s,n,o,!1,null,"3578633e",null);e["default"]=c.exports},"6f53":function(t,e,r){var n=r("83ab"),o=r("df75"),i=r("fc6a"),s=r("d1e7").f,a=function(t){return function(e){var r,a=i(e),c=o(a),u=c.length,l=0,f=[];while(u>l)r=c[l++],n&&!s.call(a,r)||f.push(t?[r,a[r]]:a[r]);return f}};t.exports={entries:a(!0),values:a(!1)}},a6ea:function(t,e,r){"use strict";var n=r("4f83"),o=r.n(n);o.a},b680:function(t,e,r){"use strict";var n=r("23e7"),o=r("a691"),i=r("408a"),s=r("1148"),a=r("d039"),c=1..toFixed,u=Math.floor,l=function(t,e,r){return 0===e?r:e%2===1?l(t,e-1,r*t):l(t*t,e/2,r)},f=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},h=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){c.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,r,n,a,c=i(this),h=o(t),v=[0,0,0,0,0,0],d="",p="0",w=function(t,e){var r=-1,n=e;while(++r<6)n+=t*v[r],v[r]=n%1e7,n=u(n/1e7)},m=function(t){var e=6,r=0;while(--e>=0)r+=v[e],v[e]=u(r/t),r=r%t*1e7},b=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==v[t]){var r=String(v[t]);e=""===e?r:e+s.call("0",7-r.length)+r}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(d="-",c=-c),c>1e-21)if(e=f(c*l(2,69,1))-69,r=e<0?c*l(2,-e,1):c/l(2,e,1),r*=4503599627370496,e=52-e,e>0){w(0,r),n=h;while(n>=7)w(1e7,0),n-=7;w(l(10,n,1),0),n=e-1;while(n>=23)m(1<<23),n-=23;m(1<<n),w(1,1),m(2),p=b()}else w(0,r),w(1<<-e,0),p=b()+s.call("0",h);return h>0?(a=p.length,p=d+(a<=h?"0."+s.call("0",h-a)+p:p.slice(0,a-h)+"."+p.slice(a-h))):p=d+p,p}})}}]);