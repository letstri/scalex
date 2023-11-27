"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});var ve=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Me(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ge={exports:{}};(function(t,e){(function(s,r){t.exports=r()})(ve,function(){var s=1e3,r=6e4,u=36e5,g="millisecond",m="second",S="minute",x="hour",A="day",W="week",w="month",re="quarter",T="year",Y="date",ne="Invalid Date",$e=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,me=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ye={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(l){var i=["th","st","nd","rd"],n=l%100;return"["+l+(i[(n-20)%10]||i[n]||i[0])+"]"}},q=function(l,i,n){var a=String(l);return!a||a.length>=i?l:""+Array(i+1-a.length).join(n)+l},pe={s:q,z:function(l){var i=-l.utcOffset(),n=Math.abs(i),a=Math.floor(n/60),o=n%60;return(i<=0?"+":"-")+q(a,2,"0")+":"+q(o,2,"0")},m:function l(i,n){if(i.date()<n.date())return-l(n,i);var a=12*(n.year()-i.year())+(n.month()-i.month()),o=i.clone().add(a,w),c=n-o<0,f=i.clone().add(a+(c?-1:1),w);return+(-(a+(n-o)/(c?o-f:f-o))||0)},a:function(l){return l<0?Math.ceil(l)||0:Math.floor(l)},p:function(l){return{M:w,y:T,w:W,d:A,D:Y,h:x,m:S,s:m,ms:g,Q:re}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(l){return l===void 0}},F="en",B={};B[F]=ye;var se="$isDayjsObject",K=function(l){return l instanceof U||!(!l||!l[se])},G=function l(i,n,a){var o;if(!i)return F;if(typeof i=="string"){var c=i.toLowerCase();B[c]&&(o=c),n&&(B[c]=n,o=c);var f=i.split("-");if(!o&&f.length>1)return l(f[0])}else{var d=i.name;B[d]=i,o=d}return!a&&o&&(F=o),o||!a&&F},y=function(l,i){if(K(l))return l.clone();var n=typeof i=="object"?i:{};return n.date=l,n.args=arguments,new U(n)},h=pe;h.l=G,h.i=K,h.w=function(l,i){return y(l,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var U=function(){function l(n){this.$L=G(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[se]=!0}var i=l.prototype;return i.parse=function(n){this.$d=function(a){var o=a.date,c=a.utc;if(o===null)return new Date(NaN);if(h.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var f=o.match($e);if(f){var d=f[2]-1||0,$=(f[7]||"0").substring(0,3);return c?new Date(Date.UTC(f[1],d,f[3]||1,f[4]||0,f[5]||0,f[6]||0,$)):new Date(f[1],d,f[3]||1,f[4]||0,f[5]||0,f[6]||0,$)}}return new Date(o)}(n),this.init()},i.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},i.$utils=function(){return h},i.isValid=function(){return this.$d.toString()!==ne},i.isSame=function(n,a){var o=y(n);return this.startOf(a)<=o&&o<=this.endOf(a)},i.isAfter=function(n,a){return y(n)<this.startOf(a)},i.isBefore=function(n,a){return this.endOf(a)<y(n)},i.$g=function(n,a,o){return h.u(n)?this[a]:this.set(o,n)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(n,a){var o=this,c=!!h.u(a)||a,f=h.p(n),d=function(k,M){var C=h.w(o.$u?Date.UTC(o.$y,M,k):new Date(o.$y,M,k),o);return c?C:C.endOf(A)},$=function(k,M){return h.w(o.toDate()[k].apply(o.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(M)),o)},p=this.$W,v=this.$M,O=this.$D,_="set"+(this.$u?"UTC":"");switch(f){case T:return c?d(1,0):d(31,11);case w:return c?d(1,v):d(0,v+1);case W:var j=this.$locale().weekStart||0,N=(p<j?p+7:p)-j;return d(c?O-N:O+(6-N),v);case A:case Y:return $(_+"Hours",0);case x:return $(_+"Minutes",1);case S:return $(_+"Seconds",2);case m:return $(_+"Milliseconds",3);default:return this.clone()}},i.endOf=function(n){return this.startOf(n,!1)},i.$set=function(n,a){var o,c=h.p(n),f="set"+(this.$u?"UTC":""),d=(o={},o[A]=f+"Date",o[Y]=f+"Date",o[w]=f+"Month",o[T]=f+"FullYear",o[x]=f+"Hours",o[S]=f+"Minutes",o[m]=f+"Seconds",o[g]=f+"Milliseconds",o)[c],$=c===A?this.$D+(a-this.$W):a;if(c===w||c===T){var p=this.clone().set(Y,1);p.$d[d]($),p.init(),this.$d=p.set(Y,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},i.set=function(n,a){return this.clone().$set(n,a)},i.get=function(n){return this[h.p(n)]()},i.add=function(n,a){var o,c=this;n=Number(n);var f=h.p(a),d=function(v){var O=y(c);return h.w(O.date(O.date()+Math.round(v*n)),c)};if(f===w)return this.set(w,this.$M+n);if(f===T)return this.set(T,this.$y+n);if(f===A)return d(1);if(f===W)return d(7);var $=(o={},o[S]=r,o[x]=u,o[m]=s,o)[f]||1,p=this.$d.getTime()+n*$;return h.w(p,this)},i.subtract=function(n,a){return this.add(-1*n,a)},i.format=function(n){var a=this,o=this.$locale();if(!this.isValid())return o.invalidDate||ne;var c=n||"YYYY-MM-DDTHH:mm:ssZ",f=h.z(this),d=this.$H,$=this.$m,p=this.$M,v=o.weekdays,O=o.months,_=o.meridiem,j=function(M,C,I,V){return M&&(M[C]||M(a,c))||I[C].slice(0,V)},N=function(M){return h.s(d%12||12,M,"0")},k=_||function(M,C,I){var V=M<12?"AM":"PM";return I?V.toLowerCase():V};return c.replace(me,function(M,C){return C||function(I){switch(I){case"YY":return String(a.$y).slice(-2);case"YYYY":return h.s(a.$y,4,"0");case"M":return p+1;case"MM":return h.s(p+1,2,"0");case"MMM":return j(o.monthsShort,p,O,3);case"MMMM":return j(O,p);case"D":return a.$D;case"DD":return h.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return j(o.weekdaysMin,a.$W,v,2);case"ddd":return j(o.weekdaysShort,a.$W,v,3);case"dddd":return v[a.$W];case"H":return String(d);case"HH":return h.s(d,2,"0");case"h":return N(1);case"hh":return N(2);case"a":return k(d,$,!0);case"A":return k(d,$,!1);case"m":return String($);case"mm":return h.s($,2,"0");case"s":return String(a.$s);case"ss":return h.s(a.$s,2,"0");case"SSS":return h.s(a.$ms,3,"0");case"Z":return f}return null}(M)||f.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(n,a,o){var c,f=this,d=h.p(a),$=y(n),p=($.utcOffset()-this.utcOffset())*r,v=this-$,O=function(){return h.m(f,$)};switch(d){case T:c=O()/12;break;case w:c=O();break;case re:c=O()/3;break;case W:c=(v-p)/6048e5;break;case A:c=(v-p)/864e5;break;case x:c=v/u;break;case S:c=v/r;break;case m:c=v/s;break;default:c=v}return o?c:h.a(c)},i.daysInMonth=function(){return this.endOf(w).$D},i.$locale=function(){return B[this.$L]},i.locale=function(n,a){if(!n)return this.$L;var o=this.clone(),c=G(n,a,!0);return c&&(o.$L=c),o},i.clone=function(){return h.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},l}(),oe=U.prototype;return y.prototype=oe,[["$ms",g],["$s",m],["$m",S],["$H",x],["$W",A],["$M",w],["$y",T],["$D",Y]].forEach(function(l){oe[l[1]]=function(i){return this.$g(i,l[0],l[1])}}),y.extend=function(l,i){return l.$i||(l(i,U,y),l.$i=!0),y},y.locale=G,y.isDayjs=K,y.unix=function(l){return y(1e3*l)},y.en=B[F],y.Ls=B,y.p={},y})})(ge);var Se=ge.exports;const Oe=Me(Se),Q=10,ie=(t=0)=>e=>`\x1B[${e+t}m`,ae=(t=0)=>e=>`\x1B[${38+t};5;${e}m`,ue=(t=0)=>(e,s,r)=>`\x1B[${38+t};2;${e};${s};${r}m`,b={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};Object.keys(b.modifier);const we=Object.keys(b.color),De=Object.keys(b.bgColor);[...we,...De];function Ae(){const t=new Map;for(const[e,s]of Object.entries(b)){for(const[r,u]of Object.entries(s))b[r]={open:`\x1B[${u[0]}m`,close:`\x1B[${u[1]}m`},s[r]=b[r],t.set(u[0],u[1]);Object.defineProperty(b,e,{value:s,enumerable:!1})}return Object.defineProperty(b,"codes",{value:t,enumerable:!1}),b.color.close="\x1B[39m",b.bgColor.close="\x1B[49m",b.color.ansi=ie(),b.color.ansi256=ae(),b.color.ansi16m=ue(),b.bgColor.ansi=ie(Q),b.bgColor.ansi256=ae(Q),b.bgColor.ansi16m=ue(Q),Object.defineProperties(b,{rgbToAnsi256:{value(e,s,r){return e===s&&s===r?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(s/255*5)+Math.round(r/255*5)},enumerable:!1},hexToRgb:{value(e){const s=/[a-f\d]{6}|[a-f\d]{3}/i.exec(e.toString(16));if(!s)return[0,0,0];let[r]=s;r.length===3&&(r=[...r].map(g=>g+g).join(""));const u=Number.parseInt(r,16);return[u>>16&255,u>>8&255,u&255]},enumerable:!1},hexToAnsi256:{value:e=>b.rgbToAnsi256(...b.hexToRgb(e)),enumerable:!1},ansi256ToAnsi:{value(e){if(e<8)return 30+e;if(e<16)return 90+(e-8);let s,r,u;if(e>=232)s=((e-232)*10+8)/255,r=s,u=s;else{e-=16;const S=e%36;s=Math.floor(e/36)/5,r=Math.floor(S/6)/5,u=S%6/5}const g=Math.max(s,r,u)*2;if(g===0)return 30;let m=30+(Math.round(u)<<2|Math.round(r)<<1|Math.round(s));return g===2&&(m+=60),m},enumerable:!1},rgbToAnsi:{value:(e,s,r)=>b.ansi256ToAnsi(b.rgbToAnsi256(e,s,r)),enumerable:!1},hexToAnsi:{value:e=>b.ansi256ToAnsi(b.hexToAnsi256(e)),enumerable:!1}}),b}const Te=Ae(),D=Te,J=(()=>{if(navigator.userAgentData){const t=navigator.userAgentData.brands.find(({brand:e})=>e==="Chromium");if(t&&t.version>93)return 3}return/\b(Chrome|Chromium)\//.test(navigator.userAgent)?1:0})(),le=J!==0&&{level:J,hasBasic:!0,has256:J>=2,has16m:J>=3},Ce={stdout:le,stderr:le},Be=Ce;function je(t,e,s){let r=t.indexOf(e);if(r===-1)return t;const u=e.length;let g=0,m="";do m+=t.slice(g,r)+e+s,g=r+u,r=t.indexOf(e,g);while(r!==-1);return m+=t.slice(g),m}function ke(t,e,s,r){let u=0,g="";do{const m=t[r-1]==="\r";g+=t.slice(u,m?r-1:r)+e+(m?`\r
`:`
`)+s,u=r+1,r=t.indexOf(`
`,u)}while(r!==-1);return g+=t.slice(u),g}const{stdout:ce,stderr:fe}=Be,X=Symbol("GENERATOR"),R=Symbol("STYLER"),L=Symbol("IS_EMPTY"),he=["ansi","ansi","ansi256","ansi16m"],E=Object.create(null),xe=(t,e={})=>{if(e.level&&!(Number.isInteger(e.level)&&e.level>=0&&e.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const s=ce?ce.level:0;t.level=e.level===void 0?s:e.level},Ye=t=>{const e=(...s)=>s.join(" ");return xe(e,t),Object.setPrototypeOf(e,H.prototype),e};function H(t){return Ye(t)}Object.setPrototypeOf(H.prototype,Function.prototype);for(const[t,e]of Object.entries(D))E[t]={get(){const s=Z(this,te(e.open,e.close,this[R]),this[L]);return Object.defineProperty(this,t,{value:s}),s}};E.visible={get(){const t=Z(this,this[R],!0);return Object.defineProperty(this,"visible",{value:t}),t}};const ee=(t,e,s,...r)=>t==="rgb"?e==="ansi16m"?D[s].ansi16m(...r):e==="ansi256"?D[s].ansi256(D.rgbToAnsi256(...r)):D[s].ansi(D.rgbToAnsi(...r)):t==="hex"?ee("rgb",e,s,...D.hexToRgb(...r)):D[s][t](...r),_e=["rgb","hex","ansi256"];for(const t of _e){E[t]={get(){const{level:s}=this;return function(...r){const u=te(ee(t,he[s],"color",...r),D.color.close,this[R]);return Z(this,u,this[L])}}};const e="bg"+t[0].toUpperCase()+t.slice(1);E[e]={get(){const{level:s}=this;return function(...r){const u=te(ee(t,he[s],"bgColor",...r),D.bgColor.close,this[R]);return Z(this,u,this[L])}}}}const Pe=Object.defineProperties(()=>{},{...E,level:{enumerable:!0,get(){return this[X].level},set(t){this[X].level=t}}}),te=(t,e,s)=>{let r,u;return s===void 0?(r=t,u=e):(r=s.openAll+t,u=e+s.closeAll),{open:t,close:e,openAll:r,closeAll:u,parent:s}},Z=(t,e,s)=>{const r=(...u)=>Re(r,u.length===1?""+u[0]:u.join(" "));return Object.setPrototypeOf(r,Pe),r[X]=t,r[R]=e,r[L]=s,r},Re=(t,e)=>{if(t.level<=0||!e)return t[L]?"":e;let s=t[R];if(s===void 0)return e;const{openAll:r,closeAll:u}=s;if(e.includes("\x1B"))for(;s!==void 0;)e=je(e,s.close,s.open),s=s.parent;const g=e.indexOf(`
`);return g!==-1&&(e=ke(e,u,r,g)),r+e+u};Object.defineProperties(H.prototype,E);const Ee=H();H({level:fe?fe.level:0});const P=Ee;let be={log:console.log};const Fe=t=>{be=t},z=(t,e)=>{const s=e?.type||"info",r=`🫡 ${P.bgBlue(" Nixle ")}`,u=`${Oe().format("DD/MM/YYYY, HH:mm")}`,g=P.dim(`[${s.toUpperCase()}]`),m={info:P.blue,success:P.green,error:P.red,warn:P.yellow};be?.log(`${r} ${u} ${g} ${m[s](t)}`)},Ne=(t,e)=>[t,e],Ie=t=>t({log:z}),Le=t=>t,de=t=>{const e=t.startsWith("/")?t:`/${t}`;return e.endsWith("/")?e.slice(0,-1):e},He=(t,e,s)=>{s({log:z}).forEach(r=>{const u=r.method?r.method.toLowerCase():"get",g=t.methods[u],m=de(e)+de(r.path);g(m,S=>(r.statusCode&&S.setStatusCode(r.statusCode),r.handler(S)))})},We=(t,e)=>{e.forEach(s=>{s.routers.forEach(([r,u])=>{He(t,r,u)})})},Ge=(t,{logger:e,...s})=>(e&&Fe(e),z("Starting an application..."),We(t,s.modules),z("Application successfully started"),t.server),Ue=t=>t;exports.createApp=Ge;exports.createModule=Le;exports.createProvider=Ue;exports.createRouter=Ne;exports.createService=Ie;
