"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("h3"),n=require("nixle"),a=n.createProvider(r=>({request:(t,o,d)=>r.router[t](o,u.fromNodeMiddleware((i,e)=>d({req:i,res:e,setStatusCode:s=>e.statusCode=s,setHeader:e.setHeader}))),server:r}));exports.nitroProvider=a;
