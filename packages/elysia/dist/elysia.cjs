"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("nixle"),a=u.createProvider(t=>{const e=o=>(s,d)=>t[o](s,({request:i,set:r})=>(r.headers["x-powered-by"]="Nixle",d({req:i,res:null,setStatusCode:l=>r.status=l})));return{methods:{get:e("get"),post:e("post"),patch:e("patch"),put:e("put"),delete:e("delete")},server:t}});exports.elysiaProvider=a;