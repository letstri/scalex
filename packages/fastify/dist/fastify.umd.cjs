(function(f,m){typeof exports=="object"&&typeof module<"u"?m(exports,require("node:crypto"),require("nixle")):typeof define=="function"&&define.amd?define(["exports","node:crypto","nixle"],m):(f=typeof globalThis<"u"?globalThis:f||self,m(f.fastify={},f.require$$0,f.nixle))})(this,function(f,m,L){"use strict";function U(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p={exports:{}},k={exports:{}},C={exports:{}};const D=/at\s{1}(?:.*\.)?plugin\s{1}.*\n\s*(.*)/,M=/(\w*(\.\w*)*)\..*/;C.exports=function(t){if(t.name.length>0)return t.name;const r=Error.stackTraceLimit;Error.stackTraceLimit=10;try{throw new Error("anonymous function")}catch(o){return Error.stackTraceLimit=r,O(o.stack)}};function O(e){const t=e.match(D);return t?t[1].split(/[/\\]/).slice(-1)[0].match(M)[1]:"anonymous"}C.exports.extractPluginName=O;var F=C.exports,_=function(t){return t[0]==="@"&&(t=t.slice(1).replace("/","-")),t.replace(/-(.)/g,function(o,i){return i.toUpperCase()})};const K=F,W=_;let Y=0;function w(e,t={}){let r=!1;if(typeof e.default<"u"&&(e=e.default),typeof e!="function")throw new TypeError(`fastify-plugin expects a function, instead got a '${typeof e}'`);if(typeof t=="string"&&(t={fastify:t}),typeof t!="object"||Array.isArray(t)||t===null)throw new TypeError("The options object should be an object");if(t.fastify!==void 0&&typeof t.fastify!="string")throw new TypeError(`fastify-plugin expects a version string, instead got '${typeof t.fastify}'`);t.name||(r=!0,t.name=K(e)+"-auto-"+Y++),e[Symbol.for("skip-override")]=t.encapsulate!==!0,e[Symbol.for("fastify.display-name")]=t.name,e[Symbol.for("plugin-meta")]=t,e.default||(e.default=e);const o=W(t.name);return!r&&!e[o]&&(e[o]=e),e}k.exports=w,k.exports.default=w,k.exports.fastifyPlugin=w;var G=k.exports,S={};/*!
 * Adapted from https://github.com/jshttp/cookie
 *
 * (The MIT License)
 *
 * Copyright (c) 2012-2014 Roman Shtylman <shtylman@gmail.com>
 * Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */S.parse=Q,S.serialize=X;const A=decodeURIComponent,J=encodeURIComponent,y=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Q(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");const r={},o=t&&t.decode||A;let i=0,n=0,s=0;for(;n!==e.length;){if(n=e.indexOf(";",i),n=n===-1?e.length:n,s=e.indexOf("=",i),s===-1||s>n){i=n+1;continue}const a=e.substring(i,s++).trim();if(r[a]===void 0){const l=e.charCodeAt(s)===34?e.substring(s+1,n-1).trim():e.substring(s,n).trim();r[a]=o!==A||l.indexOf("%")!==-1?Z(l,o):l}i=n+1}return r}function X(e,t,r){const o=r||{},i=o.encode||J;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!y.test(e))throw new TypeError("argument name is invalid");const n=i(t);if(n&&!y.test(n))throw new TypeError("argument val is invalid");let s=e+"="+n;if(o.maxAge!=null){const a=o.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(a)}if(o.domain){if(!y.test(o.domain))throw new TypeError("option domain is invalid");s+="; Domain="+o.domain}if(o.path){if(!y.test(o.path))throw new TypeError("option path is invalid");s+="; Path="+o.path}if(o.expires){if(typeof o.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(s+="; HttpOnly"),o.secure&&(s+="; Secure"),o.partitioned&&(s+="; Partitioned"),o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s}function Z(e,t){try{return t(e)}catch{return e}}var g={exports:{}};const h=m,q=/=/gu;function d(e,t="sha256"){if(!(this instanceof d))return new d(e,t);this.secrets=Array.isArray(e)?e:[e],this.signingKey=this.secrets[0],this.algorithm=t,v(this.secrets),V(this.algorithm)}function v(e){for(let t=0;t<e.length;++t){const r=e[t];if(typeof r!="string"&&Buffer.isBuffer(r)===!1)throw new TypeError("Secret key must be a string or Buffer.")}}function V(e){try{h.createHmac(e,h.randomBytes(16))}catch{throw new TypeError(`Algorithm ${e} not supported.`)}}function N(e,t,r){if(typeof e!="string")throw new TypeError("Cookie value must be provided as a string.");return e+"."+h.createHmac(r,t).update(e).digest("base64").replace(q,"")}function j(e,t,r){if(typeof e!="string")throw new TypeError("Signed cookie string must be provided.");const o=e.slice(0,e.lastIndexOf(".")),i=Buffer.from(e.slice(e.lastIndexOf(".")+1));for(let n=0;n<t.length;++n){const s=t[n],a=Buffer.from(h.createHmac(r,s).update(o).digest("base64").replace(q,""));if(a.length===i.length&&h.timingSafeEqual(a,i))return{valid:!0,renew:s!==t[0],value:o}}return{valid:!1,renew:!1,value:null}}d.prototype.sign=function(e){return N(e,this.signingKey,this.algorithm)},d.prototype.unsign=function(e){return j(e,this.secrets,this.algorithm)};function ee(e,t,r="sha256"){const o=Array.isArray(t)?t:[t];return v(o),N(e,o[0],r)}function te(e,t,r="sha256"){const o=Array.isArray(t)?t:[t];return v(o),j(e,o,r)}g.exports=d,g.exports.signerFactory=d,g.exports.Signer=d,g.exports.sign=ee,g.exports.unsign=te;var oe=g.exports;const re=G,x=S,{Signer:b,sign:ie,unsign:ne}=oe,c=Symbol("fastify.reply.setCookies"),E=Symbol("fastify.reply.setCookiesHookRan");function z(e,t,r,o){T(e.server,e.request,e);const i=Object.assign({},o);return i.expires&&Number.isInteger(i.expires)&&(i.expires=new Date(i.expires)),i.signed&&(r=e.signCookie(r)),i.secure==="auto"&&(pe(e.request)?i.secure=!0:(i.sameSite="lax",i.secure=!1)),e[c].set(`${t};${i.domain};${i.path||"/"}`,{name:t,value:r,opts:i}),e[E]&&I(e),e}function se(e,t,r){const o=Object.assign({path:"/"},r,{expires:new Date(1),signed:void 0,maxAge:void 0});return z(e,t,"",o)}function T(e,t,r){if(r[c])return;const o=t.raw.headers.cookie;t.cookies=o?e.parseCookie(o):{},r[c]=new Map}function ae(e,t){return t==="preParsing"?function(o,i,n,s){T(e,o,i),s()}:function(o,i,n){T(e,o,i),n()}}function I(e){let t=e.getHeader("Set-Cookie");const r=t===void 0;if(r){if(e[c].size===1){for(const o of e[c].values())e.header("Set-Cookie",x.serialize(o.name,o.value,o.opts));e[c].clear();return}t=[]}else typeof t=="string"&&(t=[t]);for(const o of e[c].values())t.push(x.serialize(o.name,o.value,o.opts));r||e.removeHeader("Set-Cookie"),e.header("Set-Cookie",t),e[c].clear()}function ce(e,t,r,o){if(!t[c]){o();return}t[c].size&&I(t),t[E]=!0,o()}function ue(e,t,r){const o=t.secret,i=fe(t.hook);if(i===void 0)return r(new Error("@fastify/cookie: Invalid value provided for the hook-option. You can set the hook-option only to false, 'onRequest' , 'preParsing' , 'preValidation' or 'preHandler'"));const s=!o||typeof o.sign=="function"&&typeof o.unsign=="function"?o:new b(o,t.algorithm||"sha256");e.decorate("serializeCookie",x.serialize),e.decorate("parseCookie",a),o!==void 0&&(e.decorate("signCookie",l),e.decorate("unsignCookie",R),e.decorateRequest("signCookie",l),e.decorateRequest("unsignCookie",R),e.decorateReply("signCookie",l),e.decorateReply("unsignCookie",R)),e.decorateRequest("cookies",null),e.decorateReply(c,null),e.decorateReply(E,!1),e.decorateReply("cookie",B),e.decorateReply("setCookie",B),e.decorateReply("clearCookie",me),i&&(e.addHook(i,ae(e,i)),e.addHook("onSend",ce)),r();function a(u){return x.parse(u,t.parseOptions)}function l(u){return s.sign(u)}function R(u){return s.unsign(u)}function B(u,H,$){const he=Object.assign({},t.parseOptions,$);return z(this,u,H,he)}function me(u,H){const $=Object.assign({},t.parseOptions,H);return se(this,u,$)}}function fe(e="onRequest"){return{onRequest:"onRequest",preParsing:"preParsing",preValidation:"preValidation",preHandler:"preHandler",[!1]:!1}[e]}function pe(e){return e.raw.socket?.encrypted===!0||e.headers["x-forwarded-proto"]==="https"}const P=re(ue,{fastify:"4.x",name:"@fastify/cookie"});p.exports=P,p.exports.default=P,p.exports.fastifyCookie=P,p.exports.signerFactory=b,p.exports.Signer=b,p.exports.sign=ie,p.exports.unsign=ne;var de=p.exports;const le=U(de),ge=L.createProvider(e=>(e.register(le),{server:e,request:(t,r,o)=>e[t](r,async(i,n)=>{n.send(await o({req:i,res:n,setStatusCode:n.status,setHeader:n.header,setCookie:n.setCookie}))})}));f.fastifyProvider=ge,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
