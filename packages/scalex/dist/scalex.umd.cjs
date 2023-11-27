(function(w,I){typeof exports=="object"&&typeof module<"u"?I(exports,require("express"),require("fastify"),require("elysia")):typeof define=="function"&&define.amd?define(["exports","express","fastify","elysia"],I):(w=typeof globalThis<"u"?globalThis:w||self,I(w.scalex={}))})(this,function(w){"use strict";var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function me(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var se={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(I,function(){var n=1e3,r=6e4,u=36e5,h="millisecond",g="second",y="minute",T="hour",A="day",J="week",D="month",ge="quarter",j="year",E="date",be="Invalid Date",Ge=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Ue=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,qe={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(l){var i=["th","st","nd","rd"],s=l%100;return"["+l+(i[(s-20)%10]||i[s]||i[0])+"]"}},re=function(l,i,s){var a=String(l);return!a||a.length>=i?l:""+Array(i+1-a.length).join(s)+l},Ve={s:re,z:function(l){var i=-l.utcOffset(),s=Math.abs(i),a=Math.floor(s/60),o=s%60;return(i<=0?"+":"-")+re(a,2,"0")+":"+re(o,2,"0")},m:function l(i,s){if(i.date()<s.date())return-l(s,i);var a=12*(s.year()-i.year())+(s.month()-i.month()),o=i.clone().add(a,D),c=s-o<0,f=i.clone().add(a+(c?-1:1),D);return+(-(a+(s-o)/(c?o-f:f-o))||0)},a:function(l){return l<0?Math.ceil(l)||0:Math.floor(l)},p:function(l){return{M:D,y:j,w:J,d:A,D:E,h:T,m:y,s:g,ms:h,Q:ge}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(l){return l===void 0}},H="en",x={};x[H]=qe;var ye="$isDayjsObject",ne=function(l){return l instanceof Z||!(!l||!l[ye])},X=function l(i,s,a){var o;if(!i)return H;if(typeof i=="string"){var c=i.toLowerCase();x[c]&&(o=c),s&&(x[c]=s,o=c);var f=i.split("-");if(!o&&f.length>1)return l(f[0])}else{var b=i.name;x[b]=i,o=b}return!a&&o&&(H=o),o||!a&&H},$=function(l,i){if(ne(l))return l.clone();var s=typeof i=="object"?i:{};return s.date=l,s.args=arguments,new Z(s)},d=Ve;d.l=X,d.i=ne,d.w=function(l,i){return $(l,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var Z=function(){function l(s){this.$L=X(s.locale,null,!0),this.parse(s),this.$x=this.$x||s.x||{},this[ye]=!0}var i=l.prototype;return i.parse=function(s){this.$d=function(a){var o=a.date,c=a.utc;if(o===null)return new Date(NaN);if(d.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var f=o.match(Ge);if(f){var b=f[2]-1||0,m=(f[7]||"0").substring(0,3);return c?new Date(Date.UTC(f[1],b,f[3]||1,f[4]||0,f[5]||0,f[6]||0,m)):new Date(f[1],b,f[3]||1,f[4]||0,f[5]||0,f[6]||0,m)}}return new Date(o)}(s),this.init()},i.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},i.$utils=function(){return d},i.isValid=function(){return this.$d.toString()!==be},i.isSame=function(s,a){var o=$(s);return this.startOf(a)<=o&&o<=this.endOf(a)},i.isAfter=function(s,a){return $(s)<this.startOf(a)},i.isBefore=function(s,a){return this.endOf(a)<$(s)},i.$g=function(s,a,o){return d.u(s)?this[a]:this.set(o,s)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(s,a){var o=this,c=!!d.u(a)||a,f=d.p(s),b=function(P,S){var B=d.w(o.$u?Date.UTC(o.$y,S,P):new Date(o.$y,S,P),o);return c?B:B.endOf(A)},m=function(P,S){return d.w(o.toDate()[P].apply(o.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(S)),o)},v=this.$W,M=this.$M,O=this.$D,F="set"+(this.$u?"UTC":"");switch(f){case j:return c?b(1,0):b(31,11);case D:return c?b(1,M):b(0,M+1);case J:var k=this.$locale().weekStart||0,W=(v<k?v+7:v)-k;return b(c?O-W:O+(6-W),M);case A:case E:return m(F+"Hours",0);case T:return m(F+"Minutes",1);case y:return m(F+"Seconds",2);case g:return m(F+"Milliseconds",3);default:return this.clone()}},i.endOf=function(s){return this.startOf(s,!1)},i.$set=function(s,a){var o,c=d.p(s),f="set"+(this.$u?"UTC":""),b=(o={},o[A]=f+"Date",o[E]=f+"Date",o[D]=f+"Month",o[j]=f+"FullYear",o[T]=f+"Hours",o[y]=f+"Minutes",o[g]=f+"Seconds",o[h]=f+"Milliseconds",o)[c],m=c===A?this.$D+(a-this.$W):a;if(c===D||c===j){var v=this.clone().set(E,1);v.$d[b](m),v.init(),this.$d=v.set(E,Math.min(this.$D,v.daysInMonth())).$d}else b&&this.$d[b](m);return this.init(),this},i.set=function(s,a){return this.clone().$set(s,a)},i.get=function(s){return this[d.p(s)]()},i.add=function(s,a){var o,c=this;s=Number(s);var f=d.p(a),b=function(M){var O=$(c);return d.w(O.date(O.date()+Math.round(M*s)),c)};if(f===D)return this.set(D,this.$M+s);if(f===j)return this.set(j,this.$y+s);if(f===A)return b(1);if(f===J)return b(7);var m=(o={},o[y]=r,o[T]=u,o[g]=n,o)[f]||1,v=this.$d.getTime()+s*m;return d.w(v,this)},i.subtract=function(s,a){return this.add(-1*s,a)},i.format=function(s){var a=this,o=this.$locale();if(!this.isValid())return o.invalidDate||be;var c=s||"YYYY-MM-DDTHH:mm:ssZ",f=d.z(this),b=this.$H,m=this.$m,v=this.$M,M=o.weekdays,O=o.months,F=o.meridiem,k=function(S,B,G,z){return S&&(S[B]||S(a,c))||G[B].slice(0,z)},W=function(S){return d.s(b%12||12,S,"0")},P=F||function(S,B,G){var z=S<12?"AM":"PM";return G?z.toLowerCase():z};return c.replace(Ue,function(S,B){return B||function(G){switch(G){case"YY":return String(a.$y).slice(-2);case"YYYY":return d.s(a.$y,4,"0");case"M":return v+1;case"MM":return d.s(v+1,2,"0");case"MMM":return k(o.monthsShort,v,O,3);case"MMMM":return k(O,v);case"D":return a.$D;case"DD":return d.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return k(o.weekdaysMin,a.$W,M,2);case"ddd":return k(o.weekdaysShort,a.$W,M,3);case"dddd":return M[a.$W];case"H":return String(b);case"HH":return d.s(b,2,"0");case"h":return W(1);case"hh":return W(2);case"a":return P(b,m,!0);case"A":return P(b,m,!1);case"m":return String(m);case"mm":return d.s(m,2,"0");case"s":return String(a.$s);case"ss":return d.s(a.$s,2,"0");case"SSS":return d.s(a.$ms,3,"0");case"Z":return f}return null}(S)||f.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(s,a,o){var c,f=this,b=d.p(a),m=$(s),v=(m.utcOffset()-this.utcOffset())*r,M=this-m,O=function(){return d.m(f,m)};switch(b){case j:c=O()/12;break;case D:c=O();break;case ge:c=O()/3;break;case J:c=(M-v)/6048e5;break;case A:c=(M-v)/864e5;break;case T:c=M/u;break;case y:c=M/r;break;case g:c=M/n;break;default:c=M}return o?c:d.a(c)},i.daysInMonth=function(){return this.endOf(D).$D},i.$locale=function(){return x[this.$L]},i.locale=function(s,a){if(!s)return this.$L;var o=this.clone(),c=X(s,a,!0);return c&&(o.$L=c),o},i.clone=function(){return d.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},l}(),pe=Z.prototype;return $.prototype=pe,[["$ms",h],["$s",g],["$m",y],["$H",T],["$W",A],["$M",D],["$y",j],["$D",E]].forEach(function(l){pe[l[1]]=function(i){return this.$g(i,l[0],l[1])}}),$.extend=function(l,i){return l.$i||(l(i,Z,$),l.$i=!0),$},$.locale=X,$.isDayjs=ne,$.unix=function(l){return $(1e3*l)},$.en=x[H],$.Ls=x,$.p={},$})})(se);var $e=se.exports;const ve=me($e),K=10,oe=(t=0)=>e=>`\x1B[${e+t}m`,ie=(t=0)=>e=>`\x1B[${38+t};5;${e}m`,ae=(t=0)=>(e,n,r)=>`\x1B[${38+t};2;${e};${n};${r}m`,p={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};Object.keys(p.modifier);const Me=Object.keys(p.color),Se=Object.keys(p.bgColor);[...Me,...Se];function we(){const t=new Map;for(const[e,n]of Object.entries(p)){for(const[r,u]of Object.entries(n))p[r]={open:`\x1B[${u[0]}m`,close:`\x1B[${u[1]}m`},n[r]=p[r],t.set(u[0],u[1]);Object.defineProperty(p,e,{value:n,enumerable:!1})}return Object.defineProperty(p,"codes",{value:t,enumerable:!1}),p.color.close="\x1B[39m",p.bgColor.close="\x1B[49m",p.color.ansi=oe(),p.color.ansi256=ie(),p.color.ansi16m=ae(),p.bgColor.ansi=oe(K),p.bgColor.ansi256=ie(K),p.bgColor.ansi16m=ae(K),Object.defineProperties(p,{rgbToAnsi256:{value(e,n,r){return e===n&&n===r?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},enumerable:!1},hexToRgb:{value(e){const n=/[a-f\d]{6}|[a-f\d]{3}/i.exec(e.toString(16));if(!n)return[0,0,0];let[r]=n;r.length===3&&(r=[...r].map(h=>h+h).join(""));const u=Number.parseInt(r,16);return[u>>16&255,u>>8&255,u&255]},enumerable:!1},hexToAnsi256:{value:e=>p.rgbToAnsi256(...p.hexToRgb(e)),enumerable:!1},ansi256ToAnsi:{value(e){if(e<8)return 30+e;if(e<16)return 90+(e-8);let n,r,u;if(e>=232)n=((e-232)*10+8)/255,r=n,u=n;else{e-=16;const y=e%36;n=Math.floor(e/36)/5,r=Math.floor(y/6)/5,u=y%6/5}const h=Math.max(n,r,u)*2;if(h===0)return 30;let g=30+(Math.round(u)<<2|Math.round(r)<<1|Math.round(n));return h===2&&(g+=60),g},enumerable:!1},rgbToAnsi:{value:(e,n,r)=>p.ansi256ToAnsi(p.rgbToAnsi256(e,n,r)),enumerable:!1},hexToAnsi:{value:e=>p.ansi256ToAnsi(p.hexToAnsi256(e)),enumerable:!1}}),p}const C=we(),U=(()=>{if(navigator.userAgentData){const t=navigator.userAgentData.brands.find(({brand:e})=>e==="Chromium");if(t&&t.version>93)return 3}return/\b(Chrome|Chromium)\//.test(navigator.userAgent)?1:0})(),ue=U!==0&&{level:U,hasBasic:!0,has256:U>=2,has16m:U>=3},Oe={stdout:ue,stderr:ue};function De(t,e,n){let r=t.indexOf(e);if(r===-1)return t;const u=e.length;let h=0,g="";do g+=t.slice(h,r)+e+n,h=r+u,r=t.indexOf(e,h);while(r!==-1);return g+=t.slice(h),g}function Ce(t,e,n,r){let u=0,h="";do{const g=t[r-1]==="\r";h+=t.slice(u,g?r-1:r)+e+(g?`\r
`:`
`)+n,u=r+1,r=t.indexOf(`
`,u)}while(r!==-1);return h+=t.slice(u),h}const{stdout:le,stderr:ce}=Oe,Q=Symbol("GENERATOR"),Y=Symbol("STYLER"),L=Symbol("IS_EMPTY"),fe=["ansi","ansi","ansi256","ansi16m"],_=Object.create(null),Te=(t,e={})=>{if(e.level&&!(Number.isInteger(e.level)&&e.level>=0&&e.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const n=le?le.level:0;t.level=e.level===void 0?n:e.level},Ae=t=>{const e=(...n)=>n.join(" ");return Te(e,t),Object.setPrototypeOf(e,N.prototype),e};function N(t){return Ae(t)}Object.setPrototypeOf(N.prototype,Function.prototype);for(const[t,e]of Object.entries(C))_[t]={get(){const n=q(this,te(e.open,e.close,this[Y]),this[L]);return Object.defineProperty(this,t,{value:n}),n}};_.visible={get(){const t=q(this,this[Y],!0);return Object.defineProperty(this,"visible",{value:t}),t}};const ee=(t,e,n,...r)=>t==="rgb"?e==="ansi16m"?C[n].ansi16m(...r):e==="ansi256"?C[n].ansi256(C.rgbToAnsi256(...r)):C[n].ansi(C.rgbToAnsi(...r)):t==="hex"?ee("rgb",e,n,...C.hexToRgb(...r)):C[n][t](...r),je=["rgb","hex","ansi256"];for(const t of je){_[t]={get(){const{level:n}=this;return function(...r){const u=te(ee(t,fe[n],"color",...r),C.color.close,this[Y]);return q(this,u,this[L])}}};const e="bg"+t[0].toUpperCase()+t.slice(1);_[e]={get(){const{level:n}=this;return function(...r){const u=te(ee(t,fe[n],"bgColor",...r),C.bgColor.close,this[Y]);return q(this,u,this[L])}}}}const Be=Object.defineProperties(()=>{},{..._,level:{enumerable:!0,get(){return this[Q].level},set(t){this[Q].level=t}}}),te=(t,e,n)=>{let r,u;return n===void 0?(r=t,u=e):(r=n.openAll+t,u=e+n.closeAll),{open:t,close:e,openAll:r,closeAll:u,parent:n}},q=(t,e,n)=>{const r=(...u)=>xe(r,u.length===1?""+u[0]:u.join(" "));return Object.setPrototypeOf(r,Be),r[Q]=t,r[Y]=e,r[L]=n,r},xe=(t,e)=>{if(t.level<=0||!e)return t[L]?"":e;let n=t[Y];if(n===void 0)return e;const{openAll:r,closeAll:u}=n;if(e.includes("\x1B"))for(;n!==void 0;)e=De(e,n.close,n.open),n=n.parent;const h=e.indexOf(`
`);return h!==-1&&(e=Ce(e,u,r,h)),r+e+u};Object.defineProperties(N.prototype,_);const ke=N();N({level:ce?ce.level:0});const R=ke;let he={log:console.log};const Pe=t=>{he=t},V=(t,e)=>{const n=e?.type||"info",r=`🫡 ${R.bgBlue(" ScaleX ")}`,u=`${ve().format("DD/MM/YYYY, HH:mm")}`,h=R.dim(`[${n.toUpperCase()}]`),g={info:R.blue,success:R.green,error:R.red,warn:R.yellow};he?.log(`${r} ${u} ${h} ${g[n](t)}`)},Ye=(t,e)=>[t,e],_e=t=>t({log:V}),Re=t=>t,de=t=>{const e=t.startsWith("/")?t:`/${t}`;return e.endsWith("/")?e.slice(0,-1):e},Ee=(t,e,n)=>{n({log:V}).forEach(r=>{const u=r.method?r.method.toLowerCase():"get",h=t.methods[u],g=de(e)+de(r.path);h(g,y=>(r.statusCode&&y.setStatusCode(r.statusCode),r.handler(y)))})},Fe=(t,e)=>{e.forEach(n=>{n.routers.forEach(([r,u])=>{Ee(t,r,u)})})},Ie=(t,{logger:e,...n})=>(e&&Pe(e),V("Starting an application..."),Fe(t,n.modules),V("Application successfully started"),t.server),Le=t=>t,Ne=t=>{const e=r=>(u,h)=>t[r](u,async(g,y)=>{y.setHeader("x-powered-by","ScaleX"),y.send(await h({req:g,res:y,setStatusCode:y.status}))});return{methods:{get:e("get"),post:e("post"),patch:e("patch"),put:e("put"),delete:e("delete")},server:t}},He=t=>{const e=r=>(u,h)=>t[r](u,async(g,y)=>{y.header("x-powered-by","ScaleX"),y.send(await h({req:g,res:y,setStatusCode:y.status}))});return{methods:{get:e("get"),post:e("post"),patch:e("patch"),put:e("put"),delete:e("delete")},server:t}},We=t=>{const e=r=>(u,h)=>t[r](u,({request:g,set:y})=>(y.headers["x-powered-by"]="ScaleX",h({req:g,res:null,setStatusCode:T=>y.status=T})));return{methods:{get:e("get"),post:e("post"),patch:e("patch"),put:e("put"),delete:e("delete")},server:t}};w.createApp=Ie,w.createModule=Re,w.createProvider=Le,w.createRouter=Ye,w.createService=_e,w.elysiaProvider=We,w.expressProvider=Ne,w.fastifyProvider=He,Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});
