(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2418cfa6":"d6dfc398","chunk-71a5a779":"c5a1918c"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-71a5a779":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-2418cfa6":"31d6cfe0","chunk-71a5a779":"17624acc"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/health/admin/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2274:function(e,t,n){"use strict";n("2454")},2454:function(e,t,n){},"35aa":function(e,t,n){},"37a8":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("d4ec"),a=n("bee2"),o=n("262e"),c=n("2caf"),u=n("bc3a"),i=n.n(u),s=n("6c02"),l=n("5502"),d=Object(a["a"])((function e(){Object(r["a"])(this,e),this.profix="http://150.117.210.31/server/api/nhc/admin/",this.headers={Authorization:"Bearer ".concat(localStorage.nhc_admin_token),Accept:"application/json","Content-Type":"application/json; charset=utf-8"}})),h=function(e){Object(o["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.url="",e.router=Object(s["c"])(),e.store=Object(l["b"])(),e.dataset={},e}return Object(a["a"])(n,[{key:"Url",value:function(e){return this.url=this.profix+e,this}},{key:"ErrHdl",value:function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}},{key:"Get",value:function(){var e=this;return i.a.get(this.url,{headers:this.headers}).then((function(e){return e.data})).catch((function(t){e.ErrHdl(t)}))}},{key:"Login",value:function(e){var t=this;return i.a.post(this.url,e).then((function(e){return e.data})).catch((function(e){t.ErrHdl(e)}))}},{key:"GetAll",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return i.a.get(this.url,{headers:this.headers}).then((function(t){if(void 0===n)return e.value=t.data,t.data;e.value=t.data[n]})).catch((function(e){t.ErrHdl(e)}))}},{key:"GetNoH",value:function(e){var t=this;return i.a.get(this.url).then((function(t){return e.value=t.data,t.data})).catch((function(e){t.ErrHdl(e)}))}},{key:"Post",value:function(e){var t=this;return i.a.post(this.url,e,{headers:this.headers}).then((function(e){return e.data})).catch((function(e){t.ErrHdl(e)}))}},{key:"Patch",value:function(e,t){var n=this;return i.a.patch(this.url+"/"+e,t,{headers:this.headers}).then((function(e){return e.data})).catch((function(e){n.ErrHdl(e)}))}},{key:"Delete",value:function(e){var t=this;return i.a.delete(this.url+"/"+e,{headers:this.headers}).then((function(e){return e.data})).catch((function(e){t.ErrHdl(e)}))}},{key:"Dataset",value:function(){return this.dataset={},this}},{key:"Add",value:function(e,t){return this.dataset[e]=t,this}},{key:"AddObj",value:function(e,t){return this.dataset[e]=t.value,this}},{key:"GetDset",value:function(){return this.dataset}},{key:"EptObj",value:function(e){return 0===e.value.length}}]),n}(d)},"428c":function(e,t,n){e.exports=n.p+"static/img/logo_white.5fb377d9.png"},a1ae:function(e,t,n){"use strict";n("35aa")},a766:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"bg-gray-100 min-h-screen flex flex-col"},o={class:"flex-grow"},c=Object(r["createElementVNode"])("div",{class:"p-5 bg-gray-300 text-white text-center"},[Object(r["createElementVNode"])("div",{class:"mt-2 text-baseline"},"國立中山大學健康通行碼管理系統"),Object(r["createElementVNode"])("div",{class:"mt-2 text-sm"},"本系統由田徑隊協助建置"),Object(r["createElementVNode"])("div",{class:"mt-2 text-sm"},"© 2022 Ryan P.H. Chang")],-1);function u(e,t,n,u,i,s){var l=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("div",o,[Object(r["createVNode"])(l)]),c])}var i=Object(r["defineComponent"])({setup:function(){return{}}}),s=(n("2274"),n("a1ae"),n("6b0d")),l=n.n(s);const d=l()(i,[["render",u]]);var h=d,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),p=n("428c"),v=n.n(p),m={class:"main_bg h-full"},b={class:"m-auto w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white p-5 md:p-10 shadow rounded"},g=Object(r["createStaticVNode"])('<div class="flex items-center"><img src="'+v.a+'" class="w-16 md:w-20 mr-2"><div class="flex-grow"><div class="text-1xl md:text-2xl">中山大學健康通行碼管理平台</div><div class="text-xs md:text-xl">Nnational Sun Yat-sen University Health Passcode Admin Console</div></div></div><hr class="my-5">',2);function y(e,t,n,a,o,c){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",m,[Object(r["createElementVNode"])("div",b,[g,Object(r["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.$router.push("/scan")}),class:"full_button bg-blue-900 text-white sec_gap"},"掃碼認證"),Object(r["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(t){return e.$router.push("/list")}),class:"full_button bg-blue-900 text-white sec_gap"},"資料驗證"),Object(r["createElementVNode"])("button",{onClick:t[2]||(t[2]=function(t){return e.$router.push("/account")}),class:"full_button bg-blue-900 text-white sec_gap"},"帳號管理"),Object(r["createElementVNode"])("button",{onClick:t[3]||(t[3]=function(){return e.logout&&e.logout.apply(e,arguments)}),class:"full_button bg-blue-900 text-white"},"登出系統")])])}var j=n("37a8"),O=Object(r["defineComponent"])({setup:function(){var e=Object(f["c"])();new j["a"];function t(){localStorage.removeItem("nhc_admin_token"),localStorage.removeItem("nhc_admin_data"),e.push("/login")}return{logout:t}}});const k=l()(O,[["render",y]]);var w=k,x=[{path:"/",name:"Home",component:w},{path:"/login",name:"Login",component:function(){return n.e("chunk-2418cfa6").then(n.bind(null,"a55b"))}},{path:"/scan",name:"Scan",component:function(){return n.e("chunk-71a5a779").then(n.bind(null,"74bf"))}}],E=Object(f["a"])({history:Object(f["b"])(),routes:x});E.beforeEach((function(e,t){var n=localStorage.nhc_admin_token;if(n){var r=JSON.parse(localStorage.nhc_admin_data),a=new Date(r.expired).getTime(),o=Date.now();if(a<=o&&"/login"!=e.path)return localStorage.removeItem("nhc_admin_token"),localStorage.removeItem("nhc_admin_data"),alert("請重新登入 Please log in again"),"/login"}else if("/login"!=e.path)return alert("請先登入 Please log in first"),"/login"}));var _=E,N=n("5502"),S=Object(N["a"])({state:{},mutations:{},actions:{},modules:{}});n("a766");Object(r["createApp"])(h).use(S).use(_).mount("#app")}});
//# sourceMappingURL=app.ff6936d8.js.map