var nitro=function(r,o,d){"use strict";const i=d.createProvider(s=>({server:s,request:(n,u,a)=>s.router[n](u,o.eventHandler(e=>a({req:e.node.req,res:e.node.res,setStatusCode:t=>e.node.res.statusCode=t,setHeader:e.headers.set,setCookie:(t,c,l)=>o.setCookie(e,t,c,l)})))}));return r.nitroProvider=i,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),r}({},h3,nixle);
