"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("nixle"),d=o.createProvider(t=>({request:(r,s,a)=>t[r](s,async(i,e)=>{e.send(await a({req:i,res:e,setStatusCode:e.status,setHeader:e.header}))}),server:t}));exports.fastifyProvider=d;
