(function(r,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(r=typeof globalThis<"u"?globalThis:r||self,n(r.VueMiddlewarePlugin={},r.Vue))})(this,function(r,n){"use strict";let u=n.reactive({}),d=n.reactive({}),i=n.reactive({});const f=()=>({request:u,model:d,params:i}),m=()=>d,a=async e=>{if(u=e.to.query,!e.to.meta.controller)throw new Error("Controller not defined");if(!e.to.meta.controller.length)throw new Error("Controller/Method not defined");e.to.params,i=w(e.to.params),d=new e.to.meta.controller[0];const t=e.to.meta.controller[1];await d[t](i.id),console.log(d.model.comments)};function w(e){return Object.keys(e).forEach(t=>{e[t]?e[t]=Number(e[t]):e[t]===""&&(e[t]=null)}),e}const c=(e,t,l)=>{const o=t[l];return o?(...s)=>{c(e,t,l+1),o({...e})}:e.next},h=(e,t,l)=>{if(t.meta.middleware){const o=Array.isArray(t.meta.middleware)?t.meta.middleware:[t.meta.middleware],s={from:e,to:t,router:l},b=c(s,o,1);return o[0]({...s,next:b})}},M={install:(e,t)=>{t.beforeEach((l,o)=>{h(o,l,t)})}};r.MiddlewarePlugin=M,r.requestsInjection=a,r.useController=f,r.useModel=m,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=vue-middleware-plugin.umd.cjs.map
