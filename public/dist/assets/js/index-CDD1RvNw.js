import{z as wi,A as _i,B as De,C as Fe,D as Ve,E as Ci,G as Si,H as rn,r as E,d as V,h as l,I as Vn,J as nt,K as Ut,L as po,M as ki,N as lo,O as zi,P as Ri,c as u,a as g,Q as b,R as so,S as an,T as kt,U as at,V as ln,W as pe,u as Te,e as be,X as $i,f as P,g as ce,i as Oe,Y as jn,Z as Ge,b as y,$ as Pe,a0 as ze,a1 as Pi,a2 as Le,a3 as vo,F as je,a4 as Vt,a5 as Ai,a6 as Ii,a7 as bo,a8 as Ye,a9 as Ti,aa as Ne,ab as Ae,ac as mo,ad as Ht,ae as ne,af as Un,ag as Bi,ah as sn,ai as Kn,aj as $t,ak as lt,al as $e,am as Ni,an as dn,ao as xt,ap as Ei,aq as Li,ar as Mi,as as Wn,at as mt,au as rt,av as no,aw as et,ax as tt,ay as it,az as zt,aA as gt,aB as Gn,aC as Ko,aD as Je,aE as Wo,aF as Go,aG as jt,aH as qo,aI as Xo,aJ as Yo,p as Rt,aK as qn,aL as Di,aM as Fi,aN as ot,aO as We,aP as Oi,aQ as cn,aR as Hi,aS as Xn,aT as Yn,aU as ro,aV as Vi,aW as ji,aX as Ui,aY as co,aZ as Ki,a_ as un,a$ as go,b0 as Wi,b1 as Gi,b2 as qi,b3 as Xi,b4 as Yi,b5 as Zn,b6 as Zi,b7 as Qi,b8 as io,b9 as Ji,ba as He,bb as ea,bc as ta,bd as oa,be as hn,bf as na,bg as ra,bh as Mo,bi as Do,bj as ia,bk as aa,bl as la,bm as sa,t as da,bn as ke,bo as ca,bp as Qn,bq as ua,br as Pt,_ as Ce,bs as Jn,bt as he,w as re,x as J,n as Y,bu as ha,m as Ie,bv as er,q as fn,k as _e,l as ue,y as Ke,bw as Be,bx as Ze,by as tr,bz as fa,bA as Gt,bB as or,bC as Rn,bD as nr,s as pn,bE as pa,bF as va,bG as ba,bH as ma,bI as Qt,bJ as ga,j as xa,bK as ya,bL as wa}from"./index-BLlKnVia.js";import{_ as At}from"./svg-icon-PjTFhywG.js";import{c as Zo,a as rr,u as vn,b as Ue,f as Kt,B as ir,V as ar,d as lr,e as Qo,r as _a,N as Ca,p as sr,g as Sa,_ as bn,h as uo,o as ka,i as za}from"./Space-CTNa7fmN.js";function Ra(e){return e.nodeType===9?null:e.parentNode}function dr(e){if(e===null)return null;const t=Ra(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:o,overflowX:n,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(o+r+n))return t}return dr(t)}function $a(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function $n(e,t){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[t]!==void 0)return!0;o=o.parentElement}return!1}function Pa(e={},t){const o=wi({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,i=d=>{switch(d.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}n!==void 0&&Object.keys(n).forEach(c=>{if(c!==d.key)return;const h=n[c];if(typeof h=="function")h(d);else{const{stop:p=!1,prevent:v=!1}=h;p&&d.stopPropagation(),v&&d.preventDefault(),h.handler(d)}})},a=d=>{switch(d.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==d.key)return;const h=r[c];if(typeof h=="function")h(d);else{const{stop:p=!1,prevent:v=!1}=h;p&&d.stopPropagation(),v&&d.preventDefault(),h.handler(d)}})},s=()=>{(t===void 0||t.value)&&(De("keydown",document,i),De("keyup",document,a)),t!==void 0&&Fe(t,d=>{d?(De("keydown",document,i),De("keyup",document,a)):(Ve("keydown",document,i),Ve("keyup",document,a))})};return Ci()?(Si(s),rn(()=>{(t===void 0||t.value)&&(Ve("keydown",document,i),Ve("keyup",document,a))})):s(),_i(o)}function Aa(e,t,o){const n=E(e.value);let r=null;return Fe(e,i=>{r!==null&&window.clearTimeout(r),i===!0?o&&!o.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},t):n.value=!1}),n}const Ia=Zo(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Zo("&::-webkit-scrollbar",{width:0,height:0})]),Ta=V({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=E(null);function t(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const o=Vn();return Ia.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:rr,ssr:o}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...r){var i;(i=e.value)===null||i===void 0||i.scrollTo(...r)}})},render(){return l("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),Qe="v-hidden",Ba=Zo("[v-hidden]",{display:"none!important"}),Na=V({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const o=E(null),n=E(null);function r(a){const{value:s}=o,{getCounter:d,getTail:c}=e;let h;if(d!==void 0?h=d():h=n.value,!s||!h)return;h.hasAttribute(Qe)&&h.removeAttribute(Qe);const{children:p}=s;if(a.showAllItemsBeforeCalculate)for(const N of p)N.hasAttribute(Qe)&&N.removeAttribute(Qe);const v=s.offsetWidth,$=[],w=t.tail?c==null?void 0:c():null;let M=w?w.offsetWidth:0,D=!1;const H=s.children.length-(t.tail?1:0);for(let N=0;N<H-1;++N){if(N<0)continue;const _=p[N];if(D){_.hasAttribute(Qe)||_.setAttribute(Qe,"");continue}else _.hasAttribute(Qe)&&_.removeAttribute(Qe);const x=_.offsetWidth;if(M+=x,$[N]=x,M>v){const{updateCounter:m}=e;for(let A=N;A>=0;--A){const R=H-1-A;m!==void 0?m(R):h.textContent=`${R}`;const I=h.offsetWidth;if(M-=$[A],M+I<=v||A===0){D=!0,N=A-1,w&&(N===-1?(w.style.maxWidth=`${v-I}px`,w.style.boxSizing="border-box"):w.style.maxWidth="");const{onUpdateCount:F}=e;F&&F(R);break}}}}const{onUpdateOverflow:U}=e;D?U!==void 0&&U(!0):(U!==void 0&&U(!1),h.setAttribute(Qe,""))}const i=Vn();return Ba.mount({id:"vueuc/overflow",head:!0,anchorMetaName:rr,ssr:i}),po(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:o,counterRef:n,sync:r}},render(){const{$slots:e}=this;return nt(()=>this.sync({showAllItemsBeforeCalculate:!1})),l("div",{class:"v-overflow",ref:"selfRef"},[Ut(e,"default"),e.counter?e.counter():l("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Pn(e){return e.nodeName==="#document"}function Ea(e){return t=>{t?e.value=t.$el:e.value=null}}var La=/\s/;function Ma(e){for(var t=e.length;t--&&La.test(e.charAt(t)););return t}var Da=/^\s+/;function Fa(e){return e&&e.slice(0,Ma(e)+1).replace(Da,"")}var An=NaN,Oa=/^[-+]0x[0-9a-f]+$/i,Ha=/^0b[01]+$/i,Va=/^0o[0-7]+$/i,ja=parseInt;function In(e){if(typeof e=="number")return e;if(ki(e))return An;if(lo(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=lo(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Fa(e);var o=Ha.test(e);return o||Va.test(e)?ja(e.slice(2),o?2:8):Oa.test(e)?An:+e}var Fo=function(){return zi.Date.now()},Ua="Expected a function",Ka=Math.max,Wa=Math.min;function Ga(e,t,o){var n,r,i,a,s,d,c=0,h=!1,p=!1,v=!0;if(typeof e!="function")throw new TypeError(Ua);t=In(t)||0,lo(o)&&(h=!!o.leading,p="maxWait"in o,i=p?Ka(In(o.maxWait)||0,t):i,v="trailing"in o?!!o.trailing:v);function $(m){var A=n,R=r;return n=r=void 0,c=m,a=e.apply(R,A),a}function w(m){return c=m,s=setTimeout(H,t),h?$(m):a}function M(m){var A=m-d,R=m-c,I=t-A;return p?Wa(I,i-R):I}function D(m){var A=m-d,R=m-c;return d===void 0||A>=t||A<0||p&&R>=i}function H(){var m=Fo();if(D(m))return U(m);s=setTimeout(H,M(m))}function U(m){return s=void 0,v&&n?$(m):(n=r=void 0,a)}function N(){s!==void 0&&clearTimeout(s),c=0,n=d=r=s=void 0}function _(){return s===void 0?a:U(Fo())}function x(){var m=Fo(),A=D(m);if(n=arguments,r=this,d=m,A){if(s===void 0)return w(d);if(p)return clearTimeout(s),s=setTimeout(H,t),$(d)}return s===void 0&&(s=setTimeout(H,t)),a}return x.cancel=N,x.flush=_,x}var qa="Expected a function";function Oo(e,t,o){var n=!0,r=!0;if(typeof e!="function")throw new TypeError(qa);return lo(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),Ga(e,t,{leading:n,maxWait:t,trailing:r})}const Xa=V({name:"Add",render(){return l("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),Ya=V({name:"ChevronDown",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Za=V({name:"ChevronDownFilled",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Qa=V({name:"ChevronRight",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Ja=Ri("clear",()=>l("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},l("g",{fill:"currentColor","fill-rule":"nonzero"},l("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),el=V({name:"Empty",render(){return l("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),l("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),tl=V({name:"Eye",render(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),l("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),ol=V({name:"EyeOff",render(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),l("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),l("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),l("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),l("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),nl=u("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[g(">",[b("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[g("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),g("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),b("placeholder",`
 display: flex;
 `),b("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[so({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Jo=V({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return ln("-base-clear",nl,pe(e,"clsPrefix")),{handleMouseDown(t){t.preventDefault()}}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-base-clear`},l(an,null,{default:()=>{var t,o;return this.show?l("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},kt(this.$slots.icon,()=>[l(at,{clsPrefix:e},{default:()=>l(Ja,null)})])):l("div",{key:"icon",class:`${e}-base-clear__placeholder`},(o=(t=this.$slots).placeholder)===null||o===void 0?void 0:o.call(t))}}))}});function Tn(e){return Array.isArray(e)?e:[e]}const en={STOP:"STOP"};function cr(e,t){const o=t(e);e.children!==void 0&&o!==en.STOP&&e.children.forEach(n=>cr(n,t))}function rl(e,t={}){const{preserveGroup:o=!1}=t,n=[],r=o?a=>{a.isLeaf||(n.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||n.push(a.key),i(a.children))};function i(a){a.forEach(r)}return i(e),n}function il(e,t){const{isLeaf:o}=e;return o!==void 0?o:!t(e)}function al(e){return e.children}function ll(e){return e.key}function sl(){return!1}function dl(e,t){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(t(e)))}function cl(e){return e.disabled===!0}function ul(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function hl(e,t){if(e.isLeaf===!0){const o=t(e);if(Array.isArray(o)&&o.length>0)return!0}return!1}function Ho(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Vo(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function fl(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)||o.add(n)}),Array.from(o)}function pl(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)&&o.delete(n)}),Array.from(o)}function vl(e){return(e==null?void 0:e.type)==="group"}class bl extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function ml(e,t,o,n){return ho(t.concat(e),o,n,!1)}function gl(e,t){const o=new Set;return e.forEach(n=>{const r=t.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||o.has(i.key));)o.add(i.key),i=i.parent}}),o}function xl(e,t,o,n){const r=ho(t,o,n,!1),i=ho(e,o,n,!0),a=gl(e,o),s=[];return r.forEach(d=>{(i.has(d)||a.has(d))&&s.push(d)}),s.forEach(d=>r.delete(d)),r}function jo(e,t){const{checkedKeys:o,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:a,leafOnly:s,checkStrategy:d,allowNotLoaded:c}=e;if(!a)return n!==void 0?{checkedKeys:fl(o,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:pl(o,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:h}=t;let p;r!==void 0?p=xl(r,o,t,c):n!==void 0?p=ml(n,o,t,c):p=ho(o,t,c,!1);const v=d==="parent",$=d==="child"||s,w=p,M=new Set,D=Math.max.apply(null,Array.from(h.keys()));for(let H=D;H>=0;H-=1){const U=H===0,N=h.get(H);for(const _ of N){if(_.isLeaf)continue;const{key:x,shallowLoaded:m}=_;if($&&m&&_.children.forEach(F=>{!F.disabled&&!F.isLeaf&&F.shallowLoaded&&w.has(F.key)&&w.delete(F.key)}),_.disabled||!m)continue;let A=!0,R=!1,I=!0;for(const F of _.children){const Z=F.key;if(!F.disabled){if(I&&(I=!1),w.has(Z))R=!0;else if(M.has(Z)){R=!0,A=!1;break}else if(A=!1,R)break}}A&&!I?(v&&_.children.forEach(F=>{!F.disabled&&w.has(F.key)&&w.delete(F.key)}),w.add(x)):R&&M.add(x),U&&$&&w.has(x)&&w.delete(x)}}return{checkedKeys:Array.from(w),indeterminateKeys:Array.from(M)}}function ho(e,t,o,n){const{treeNodeMap:r,getChildren:i}=t,a=new Set,s=new Set(e);return e.forEach(d=>{const c=r.get(d);c!==void 0&&cr(c,h=>{if(h.disabled)return en.STOP;const{key:p}=h;if(!a.has(p)&&(a.add(p),s.add(p),ul(h.rawNode,i))){if(n)return en.STOP;if(!o)throw new bl}})}),s}function yl(e,{includeGroup:t=!1,includeSelf:o=!0},n){var r;const i=n.treeNodeMap;let a=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(t||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),o||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(d=>d.key),s}function wl(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function _l(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r+1)%n]:r===o.length-1?null:o[r+1]}function Bn(e,t,{loop:o=!1,includeDisabled:n=!1}={}){const r=t==="prev"?Cl:_l,i={reverse:t==="prev"};let a=!1,s=null;function d(c){if(c!==null){if(c===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!c.disabled||n)&&!c.ignored&&!c.isGroup){s=c;return}if(c.isGroup){const h=mn(c,i);h!==null?s=h:d(r(c,o))}else{const h=r(c,!1);if(h!==null)d(h);else{const p=Sl(c);p!=null&&p.isGroup?d(r(p,o)):o&&d(r(c,!0))}}}}return d(e),s}function Cl(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r-1+n)%n]:r===0?null:o[r-1]}function Sl(e){return e.parent}function mn(e,t={}){const{reverse:o=!1}=t,{children:n}=e;if(n){const{length:r}=n,i=o?r-1:0,a=o?-1:r,s=o?-1:1;for(let d=i;d!==a;d+=s){const c=n[d];if(!c.disabled&&!c.ignored)if(c.isGroup){const h=mn(c,t);if(h!==null)return h}else return c}}return null}const kl={getChild(){return this.ignored?null:mn(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Bn(this,"next",e)},getPrev(e={}){return Bn(this,"prev",e)}};function zl(e,t){const o=t?new Set(t):void 0,n=[];function r(i){i.forEach(a=>{n.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||o===void 0||o.has(a.key))&&r(a.children)})}return r(e),n}function Rl(e,t){const o=e.key;for(;t;){if(t.key===o)return!0;t=t.parent}return!1}function ur(e,t,o,n,r,i=null,a=0){const s=[];return e.forEach((d,c)=>{var h;hl(d,r)&&console.error("[treemate]: node",d,"is invalid");const p=Object.create(n);if(p.rawNode=d,p.siblings=s,p.level=a,p.index=c,p.isFirstChild=c===0,p.isLastChild=c+1===e.length,p.parent=i,!p.ignored){const v=r(d);Array.isArray(v)&&(p.children=ur(v,t,o,n,r,p,a+1))}s.push(p),t.set(p.key,p),o.has(a)||o.set(a,[]),(h=o.get(a))===null||h===void 0||h.push(p)}),s}function ao(e,t={}){var o;const n=new Map,r=new Map,{getDisabled:i=cl,getIgnored:a=sl,getIsGroup:s=vl,getKey:d=ll}=t,c=(o=t.getChildren)!==null&&o!==void 0?o:al,h=t.ignoreEmptyChildren?_=>{const x=c(_);return Array.isArray(x)?x.length?x:null:x}:c,p=Object.assign({get key(){return d(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return il(this.rawNode,h)},get shallowLoaded(){return dl(this.rawNode,h)},get ignored(){return a(this.rawNode)},contains(_){return Rl(this,_)}},kl),v=ur(e,n,r,p,h);function $(_){if(_==null)return null;const x=n.get(_);return x&&!x.isGroup&&!x.ignored?x:null}function w(_){if(_==null)return null;const x=n.get(_);return x&&!x.ignored?x:null}function M(_,x){const m=w(_);return m?m.getPrev(x):null}function D(_,x){const m=w(_);return m?m.getNext(x):null}function H(_){const x=w(_);return x?x.getParent():null}function U(_){const x=w(_);return x?x.getChild():null}const N={treeNodes:v,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:h,getFlattenedNodes(_){return zl(v,_)},getNode:$,getPrev:M,getNext:D,getParent:H,getChild:U,getFirstAvailableNode(){return wl(v)},getPath(_,x={}){return yl(_,x,N)},getCheckedKeys(_,x={}){const{cascade:m=!0,leafOnly:A=!1,checkStrategy:R="all",allowNotLoaded:I=!1}=x;return jo({checkedKeys:Ho(_),indeterminateKeys:Vo(_),cascade:m,leafOnly:A,checkStrategy:R,allowNotLoaded:I},N)},check(_,x,m={}){const{cascade:A=!0,leafOnly:R=!1,checkStrategy:I="all",allowNotLoaded:F=!1}=m;return jo({checkedKeys:Ho(x),indeterminateKeys:Vo(x),keysToCheck:_==null?[]:Tn(_),cascade:A,leafOnly:R,checkStrategy:I,allowNotLoaded:F},N)},uncheck(_,x,m={}){const{cascade:A=!0,leafOnly:R=!1,checkStrategy:I="all",allowNotLoaded:F=!1}=m;return jo({checkedKeys:Ho(x),indeterminateKeys:Vo(x),keysToUncheck:_==null?[]:Tn(_),cascade:A,leafOnly:R,checkStrategy:I,allowNotLoaded:F},N)},getNonLeafKeys(_={}){return rl(v,_)}};return N}const $l=u("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[b("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[g("+",[b("description",`
 margin-top: 8px;
 `)])]),b("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),b("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Pl=Object.assign(Object.assign({},be.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Al=V({name:"Empty",props:Pl,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedComponentPropsRef:n}=Te(e),r=be("Empty","-empty",$l,$i,e,t),{localeRef:i}=vn("Empty"),a=P(()=>{var h,p,v;return(h=e.description)!==null&&h!==void 0?h:(v=(p=n==null?void 0:n.value)===null||p===void 0?void 0:p.Empty)===null||v===void 0?void 0:v.description}),s=P(()=>{var h,p;return((p=(h=n==null?void 0:n.value)===null||h===void 0?void 0:h.Empty)===null||p===void 0?void 0:p.renderIcon)||(()=>l(el,null))}),d=P(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:p},self:{[ce("iconSize",h)]:v,[ce("fontSize",h)]:$,textColor:w,iconColor:M,extraTextColor:D}}=r.value;return{"--n-icon-size":v,"--n-font-size":$,"--n-bezier":p,"--n-text-color":w,"--n-icon-color":M,"--n-extra-text-color":D}}),c=o?Oe("empty",P(()=>{let h="";const{size:p}=e;return h+=p[0],h}),d,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:s,localizedDescription:P(()=>a.value||i.value.description),cssVars:o?void 0:d,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),l("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?l("div",{class:`${t}-empty__icon`},e.icon?e.icon():l(at,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?l("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?l("div",{class:`${t}-empty__extra`},e.extra()):null)}}),Il=V({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:t}){return()=>{const{clsPrefix:o}=e;return l(jn,{clsPrefix:o,class:`${o}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?l(Jo,{clsPrefix:o,show:e.showClear,onClear:e.onClear},{placeholder:()=>l(at,{clsPrefix:o,class:`${o}-base-suffix__arrow`},{default:()=>kt(t.default,()=>[l(Ya,null)])})}):null})}}}),hr=Ge("n-input"),Tl=u("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[b("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),b("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),b("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[g("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),g("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),g("&:-webkit-autofill ~",[b("placeholder","display: none;")])]),y("round",[Pe("textarea","border-radius: calc(var(--n-height) / 2);")]),b("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[g("span",`
 width: 100%;
 display: inline-block;
 `)]),y("textarea",[b("placeholder","overflow: visible;")]),Pe("autosize","width: 100%;"),y("autosize",[b("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),u("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),b("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),b("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[g("&[type=password]::-ms-reveal","display: none;"),g("+",[b("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Pe("textarea",[b("placeholder","white-space: nowrap;")]),b("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),y("textarea","width: 100%;",[u("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),y("resizable",[u("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),b("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),b("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),y("pair",[b("input-el, placeholder","text-align: center;"),b("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[u("icon",`
 color: var(--n-icon-color);
 `),u("base-icon",`
 color: var(--n-icon-color);
 `)])]),y("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[b("border","border: var(--n-border-disabled);"),b("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),b("placeholder","color: var(--n-placeholder-color-disabled);"),b("separator","color: var(--n-text-color-disabled);",[u("icon",`
 color: var(--n-icon-color-disabled);
 `),u("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),u("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),b("suffix, prefix","color: var(--n-text-color-disabled);",[u("icon",`
 color: var(--n-icon-color-disabled);
 `),u("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Pe("disabled",[b("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[g("&:hover",`
 color: var(--n-icon-color-hover);
 `),g("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),g("&:hover",[b("state-border","border: var(--n-border-hover);")]),y("focus","background-color: var(--n-color-focus);",[b("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),b("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),b("state-border",`
 border-color: #0000;
 z-index: 1;
 `),b("prefix","margin-right: 4px;"),b("suffix",`
 margin-left: 4px;
 `),b("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[u("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),u("base-clear",`
 font-size: var(--n-icon-size);
 `,[b("placeholder",[u("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),g(">",[u("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),u("base-icon",`
 font-size: var(--n-icon-size);
 `)]),u("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>y(`${e}-status`,[Pe("disabled",[u("base-loading",`
 color: var(--n-loading-color-${e})
 `),b("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),b("state-border",`
 border: var(--n-border-${e});
 `),g("&:hover",[b("state-border",`
 border: var(--n-border-hover-${e});
 `)]),g("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[b("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),y("focus",`
 background-color: var(--n-color-focus-${e});
 `,[b("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),Bl=u("input",[y("disabled",[b("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);function Nl(e){let t=0;for(const o of e)t++;return t}function Jt(e){return e===""||e==null}function El(e){const t=E(null);function o(){const{value:i}=e;if(!(i!=null&&i.focus)){r();return}const{selectionStart:a,selectionEnd:s,value:d}=i;if(a==null||s==null){r();return}t.value={start:a,end:s,beforeText:d.slice(0,a),afterText:d.slice(s)}}function n(){var i;const{value:a}=t,{value:s}=e;if(!a||!s)return;const{value:d}=s,{start:c,beforeText:h,afterText:p}=a;let v=d.length;if(d.endsWith(p))v=d.length-p.length;else if(d.startsWith(h))v=h.length;else{const $=h[c-1],w=d.indexOf($,c-1);w!==-1&&(v=w+1)}(i=s.setSelectionRange)===null||i===void 0||i.call(s,v,v)}function r(){t.value=null}return Fe(e,r),{recordCursor:o,restoreCursor:n}}const Nn=V({name:"InputWordCount",setup(e,{slots:t}){const{mergedValueRef:o,maxlengthRef:n,mergedClsPrefixRef:r,countGraphemesRef:i}=ze(hr),a=P(()=>{const{value:s}=o;return s===null||Array.isArray(s)?0:(i.value||Nl)(s)});return()=>{const{value:s}=n,{value:d}=o;return l("span",{class:`${r.value}-input-word-count`},Pi(t.default,{value:d===null||Array.isArray(d)?"":d},()=>[s===void 0?a.value:`${a.value} / ${s}`]))}}}),Ll=Object.assign(Object.assign({},be.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),fr=V({name:"Input",props:Ll,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:o,inlineThemeDisabled:n,mergedRtlRef:r}=Te(e),i=be("Input","-input",Tl,Ai,e,t);Ii&&ln("-input-safari",Bl,t);const a=E(null),s=E(null),d=E(null),c=E(null),h=E(null),p=E(null),v=E(null),$=El(v),w=E(null),{localeRef:M}=vn("Input"),D=E(e.defaultValue),H=pe(e,"value"),U=Ue(H,D),N=bo(e),{mergedSizeRef:_,mergedDisabledRef:x,mergedStatusRef:m}=N,A=E(!1),R=E(!1),I=E(!1),F=E(!1);let Z=null;const L=P(()=>{const{placeholder:f,pair:z}=e;return z?Array.isArray(f)?f:f===void 0?["",""]:[f,f]:f===void 0?[M.value.placeholder]:[f]}),ee=P(()=>{const{value:f}=I,{value:z}=U,{value:te}=L;return!f&&(Jt(z)||Array.isArray(z)&&Jt(z[0]))&&te[0]}),Q=P(()=>{const{value:f}=I,{value:z}=U,{value:te}=L;return!f&&te[1]&&(Jt(z)||Array.isArray(z)&&Jt(z[1]))}),K=Ye(()=>e.internalForceFocus||A.value),fe=Ye(()=>{if(x.value||e.readonly||!e.clearable||!K.value&&!R.value)return!1;const{value:f}=U,{value:z}=K;return e.pair?!!(Array.isArray(f)&&(f[0]||f[1]))&&(R.value||z):!!f&&(R.value||z)}),q=P(()=>{const{showPasswordOn:f}=e;if(f)return f;if(e.showPasswordToggle)return"click"}),oe=E(!1),ye=P(()=>{const{textDecoration:f}=e;return f?Array.isArray(f)?f.map(z=>({textDecoration:z})):[{textDecoration:f}]:["",""]}),ge=E(void 0),j=()=>{var f,z;if(e.type==="textarea"){const{autosize:te}=e;if(te&&(ge.value=(z=(f=w.value)===null||f===void 0?void 0:f.$el)===null||z===void 0?void 0:z.offsetWidth),!s.value||typeof te=="boolean")return;const{paddingTop:xe,paddingBottom:we,lineHeight:me}=window.getComputedStyle(s.value),ut=Number(xe.slice(0,-2)),ht=Number(we.slice(0,-2)),ft=Number(me.slice(0,-2)),{value:Mt}=d;if(!Mt)return;if(te.minRows){const Dt=Math.max(te.minRows,1),Lo=`${ut+ht+ft*Dt}px`;Mt.style.minHeight=Lo}if(te.maxRows){const Dt=`${ut+ht+ft*te.maxRows}px`;Mt.style.maxHeight=Dt}}},G=P(()=>{const{maxlength:f}=e;return f===void 0?void 0:Number(f)});po(()=>{const{value:f}=U;Array.isArray(f)||Lt(f)});const k=Ti().proxy;function X(f,z){const{onUpdateValue:te,"onUpdate:value":xe,onInput:we}=e,{nTriggerFormInput:me}=N;te&&ne(te,f,z),xe&&ne(xe,f,z),we&&ne(we,f,z),D.value=f,me()}function ie(f,z){const{onChange:te}=e,{nTriggerFormChange:xe}=N;te&&ne(te,f,z),D.value=f,xe()}function de(f){const{onBlur:z}=e,{nTriggerFormBlur:te}=N;z&&ne(z,f),te()}function se(f){const{onFocus:z}=e,{nTriggerFormFocus:te}=N;z&&ne(z,f),te()}function Re(f){const{onClear:z}=e;z&&ne(z,f)}function B(f){const{onInputBlur:z}=e;z&&ne(z,f)}function Ee(f){const{onInputFocus:z}=e;z&&ne(z,f)}function st(){const{onDeactivate:f}=e;f&&ne(f)}function Tt(){const{onActivate:f}=e;f&&ne(f)}function Bt(f){const{onClick:z}=e;z&&ne(z,f)}function dt(f){const{onWrapperFocus:z}=e;z&&ne(z,f)}function ct(f){const{onWrapperBlur:z}=e;z&&ne(z,f)}function Me(){I.value=!0}function Nt(f){I.value=!1,f.target===p.value?T(f,1):T(f,0)}function T(f,z=0,te="input"){const xe=f.target.value;if(Lt(xe),f instanceof InputEvent&&!f.isComposing&&(I.value=!1),e.type==="textarea"){const{value:me}=w;me&&me.syncUnifiedContainer()}if(Z=xe,I.value)return;$.recordCursor();const we=ae(xe);if(we)if(!e.pair)te==="input"?X(xe,{source:z}):ie(xe,{source:z});else{let{value:me}=U;Array.isArray(me)?me=[me[0],me[1]]:me=["",""],me[z]=xe,te==="input"?X(me,{source:z}):ie(me,{source:z})}k.$forceUpdate(),we||nt($.restoreCursor)}function ae(f){const{countGraphemes:z,maxlength:te,minlength:xe}=e;if(z){let me;if(te!==void 0&&(me===void 0&&(me=z(f)),me>Number(te))||xe!==void 0&&(me===void 0&&(me=z(f)),me<Number(te)))return!1}const{allowInput:we}=e;return typeof we=="function"?we(f):!0}function C(f){B(f),f.relatedTarget===a.value&&st(),f.relatedTarget!==null&&(f.relatedTarget===h.value||f.relatedTarget===p.value||f.relatedTarget===s.value)||(F.value=!1),le(f,"blur"),v.value=null}function S(f,z){Ee(f),A.value=!0,F.value=!0,Tt(),le(f,"focus"),z===0?v.value=h.value:z===1?v.value=p.value:z===2&&(v.value=s.value)}function O(f){e.passivelyActivated&&(ct(f),le(f,"blur"))}function W(f){e.passivelyActivated&&(A.value=!0,dt(f),le(f,"focus"))}function le(f,z){f.relatedTarget!==null&&(f.relatedTarget===h.value||f.relatedTarget===p.value||f.relatedTarget===s.value||f.relatedTarget===a.value)||(z==="focus"?(se(f),A.value=!0):z==="blur"&&(de(f),A.value=!1))}function ve(f,z){T(f,z,"change")}function Se(f){Bt(f)}function qe(f){Re(f),Xe()}function Xe(){e.pair?(X(["",""],{source:"clear"}),ie(["",""],{source:"clear"})):(X("",{source:"clear"}),ie("",{source:"clear"}))}function yo(f){const{onMousedown:z}=e;z&&z(f);const{tagName:te}=f.target;if(te!=="INPUT"&&te!=="TEXTAREA"){if(e.resizable){const{value:xe}=a;if(xe){const{left:we,top:me,width:ut,height:ht}=xe.getBoundingClientRect(),ft=14;if(we+ut-ft<f.clientX&&f.clientX<we+ut&&me+ht-ft<f.clientY&&f.clientY<me+ht)return}}f.preventDefault(),A.value||Xt()}}function wo(){var f;R.value=!0,e.type==="textarea"&&((f=w.value)===null||f===void 0||f.handleMouseEnterWrapper())}function _o(){var f;R.value=!1,e.type==="textarea"&&((f=w.value)===null||f===void 0||f.handleMouseLeaveWrapper())}function Co(){x.value||q.value==="click"&&(oe.value=!oe.value)}function So(f){if(x.value)return;f.preventDefault();const z=xe=>{xe.preventDefault(),Ve("mouseup",document,z)};if(De("mouseup",document,z),q.value!=="mousedown")return;oe.value=!0;const te=()=>{oe.value=!1,Ve("mouseup",document,te)};De("mouseup",document,te)}function ko(f){e.onKeyup&&ne(e.onKeyup,f)}function zo(f){switch(e.onKeydown&&ne(e.onKeydown,f),f.key){case"Escape":Et();break;case"Enter":Ro(f);break}}function Ro(f){var z,te;if(e.passivelyActivated){const{value:xe}=F;if(xe){e.internalDeactivateOnEnter&&Et();return}f.preventDefault(),e.type==="textarea"?(z=s.value)===null||z===void 0||z.focus():(te=h.value)===null||te===void 0||te.focus()}}function Et(){e.passivelyActivated&&(F.value=!1,nt(()=>{var f;(f=a.value)===null||f===void 0||f.focus()}))}function Xt(){var f,z,te;x.value||(e.passivelyActivated?(f=a.value)===null||f===void 0||f.focus():((z=s.value)===null||z===void 0||z.focus(),(te=h.value)===null||te===void 0||te.focus()))}function $o(){var f;!((f=a.value)===null||f===void 0)&&f.contains(document.activeElement)&&document.activeElement.blur()}function Po(){var f,z;(f=s.value)===null||f===void 0||f.select(),(z=h.value)===null||z===void 0||z.select()}function Ao(){x.value||(s.value?s.value.focus():h.value&&h.value.focus())}function yt(){const{value:f}=a;f!=null&&f.contains(document.activeElement)&&f!==document.activeElement&&Et()}function Io(f){if(e.type==="textarea"){const{value:z}=s;z==null||z.scrollTo(f)}else{const{value:z}=h;z==null||z.scrollTo(f)}}function Lt(f){const{type:z,pair:te,autosize:xe}=e;if(!te&&xe)if(z==="textarea"){const{value:we}=d;we&&(we.textContent=`${f??""}\r
`)}else{const{value:we}=c;we&&(f?we.textContent=f:we.innerHTML="&nbsp;")}}function To(){j()}const Yt=E({top:"0"});function Bo(f){var z;const{scrollTop:te}=f.target;Yt.value.top=`${-te}px`,(z=w.value)===null||z===void 0||z.syncUnifiedContainer()}let wt=null;Ne(()=>{const{autosize:f,type:z}=e;f&&z==="textarea"?wt=Fe(U,te=>{!Array.isArray(te)&&te!==Z&&Lt(te)}):wt==null||wt()});let _t=null;Ne(()=>{e.type==="textarea"?_t=Fe(U,f=>{var z;!Array.isArray(f)&&f!==Z&&((z=w.value)===null||z===void 0||z.syncUnifiedContainer())}):_t==null||_t()}),Ae(hr,{mergedValueRef:U,maxlengthRef:G,mergedClsPrefixRef:t,countGraphemesRef:pe(e,"countGraphemes")});const No={wrapperElRef:a,inputElRef:h,textareaElRef:s,isCompositing:I,clear:Xe,focus:Xt,blur:$o,select:Po,deactivate:yt,activate:Ao,scrollTo:Io},Eo=mo("Input",r,t),Zt=P(()=>{const{value:f}=_,{common:{cubicBezierEaseInOut:z},self:{color:te,borderRadius:xe,textColor:we,caretColor:me,caretColorError:ut,caretColorWarning:ht,textDecorationColor:ft,border:Mt,borderDisabled:Dt,borderHover:Lo,borderFocus:Lr,placeholderColor:Mr,placeholderColorDisabled:Dr,lineHeightTextarea:Fr,colorDisabled:Or,colorFocus:Hr,textColorDisabled:Vr,boxShadowFocus:jr,iconSize:Ur,colorFocusWarning:Kr,boxShadowFocusWarning:Wr,borderWarning:Gr,borderFocusWarning:qr,borderHoverWarning:Xr,colorFocusError:Yr,boxShadowFocusError:Zr,borderError:Qr,borderFocusError:Jr,borderHoverError:ei,clearSize:ti,clearColor:oi,clearColorHover:ni,clearColorPressed:ri,iconColor:ii,iconColorDisabled:ai,suffixTextColor:li,countTextColor:si,countTextColorDisabled:di,iconColorHover:ci,iconColorPressed:ui,loadingColor:hi,loadingColorError:fi,loadingColorWarning:pi,fontWeight:vi,[ce("padding",f)]:bi,[ce("fontSize",f)]:mi,[ce("height",f)]:gi}}=i.value,{left:xi,right:yi}=Ht(bi);return{"--n-bezier":z,"--n-count-text-color":si,"--n-count-text-color-disabled":di,"--n-color":te,"--n-font-size":mi,"--n-font-weight":vi,"--n-border-radius":xe,"--n-height":gi,"--n-padding-left":xi,"--n-padding-right":yi,"--n-text-color":we,"--n-caret-color":me,"--n-text-decoration-color":ft,"--n-border":Mt,"--n-border-disabled":Dt,"--n-border-hover":Lo,"--n-border-focus":Lr,"--n-placeholder-color":Mr,"--n-placeholder-color-disabled":Dr,"--n-icon-size":Ur,"--n-line-height-textarea":Fr,"--n-color-disabled":Or,"--n-color-focus":Hr,"--n-text-color-disabled":Vr,"--n-box-shadow-focus":jr,"--n-loading-color":hi,"--n-caret-color-warning":ht,"--n-color-focus-warning":Kr,"--n-box-shadow-focus-warning":Wr,"--n-border-warning":Gr,"--n-border-focus-warning":qr,"--n-border-hover-warning":Xr,"--n-loading-color-warning":pi,"--n-caret-color-error":ut,"--n-color-focus-error":Yr,"--n-box-shadow-focus-error":Zr,"--n-border-error":Qr,"--n-border-focus-error":Jr,"--n-border-hover-error":ei,"--n-loading-color-error":fi,"--n-clear-color":oi,"--n-clear-size":ti,"--n-clear-color-hover":ni,"--n-clear-color-pressed":ri,"--n-icon-color":ii,"--n-icon-color-hover":ci,"--n-icon-color-pressed":ui,"--n-icon-color-disabled":ai,"--n-suffix-text-color":li}}),Ct=n?Oe("input",P(()=>{const{value:f}=_;return f[0]}),Zt,e):void 0;return Object.assign(Object.assign({},No),{wrapperElRef:a,inputElRef:h,inputMirrorElRef:c,inputEl2Ref:p,textareaElRef:s,textareaMirrorElRef:d,textareaScrollbarInstRef:w,rtlEnabled:Eo,uncontrolledValue:D,mergedValue:U,passwordVisible:oe,mergedPlaceholder:L,showPlaceholder1:ee,showPlaceholder2:Q,mergedFocus:K,isComposing:I,activated:F,showClearButton:fe,mergedSize:_,mergedDisabled:x,textDecorationStyle:ye,mergedClsPrefix:t,mergedBordered:o,mergedShowPasswordOn:q,placeholderStyle:Yt,mergedStatus:m,textAreaScrollContainerWidth:ge,handleTextAreaScroll:Bo,handleCompositionStart:Me,handleCompositionEnd:Nt,handleInput:T,handleInputBlur:C,handleInputFocus:S,handleWrapperBlur:O,handleWrapperFocus:W,handleMouseEnter:wo,handleMouseLeave:_o,handleMouseDown:yo,handleChange:ve,handleClick:Se,handleClear:qe,handlePasswordToggleClick:Co,handlePasswordToggleMousedown:So,handleWrapperKeydown:zo,handleWrapperKeyup:ko,handleTextAreaMirrorResize:To,getTextareaScrollContainer:()=>s.value,mergedTheme:i,cssVars:n?void 0:Zt,themeClass:Ct==null?void 0:Ct.themeClass,onRender:Ct==null?void 0:Ct.onRender})},render(){var e,t;const{mergedClsPrefix:o,mergedStatus:n,themeClass:r,type:i,countGraphemes:a,onRender:s}=this,d=this.$slots;return s==null||s(),l("div",{ref:"wrapperElRef",class:[`${o}-input`,r,n&&`${o}-input--${n}-status`,{[`${o}-input--rtl`]:this.rtlEnabled,[`${o}-input--disabled`]:this.mergedDisabled,[`${o}-input--textarea`]:i==="textarea",[`${o}-input--resizable`]:this.resizable&&!this.autosize,[`${o}-input--autosize`]:this.autosize,[`${o}-input--round`]:this.round&&i!=="textarea",[`${o}-input--pair`]:this.pair,[`${o}-input--focus`]:this.mergedFocus,[`${o}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},l("div",{class:`${o}-input-wrapper`},Le(d.prefix,c=>c&&l("div",{class:`${o}-input__prefix`},c)),i==="textarea"?l(vo,{ref:"textareaScrollbarInstRef",class:`${o}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,h;const{textAreaScrollContainerWidth:p}=this,v={width:this.autosize&&p&&`${p}px`};return l(je,null,l("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${o}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(h=this.inputProps)===null||h===void 0?void 0:h.style,v],onBlur:this.handleInputBlur,onFocus:$=>{this.handleInputFocus($,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?l("div",{class:`${o}-input__placeholder`,style:[this.placeholderStyle,v],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?l(Vt,{onResize:this.handleTextAreaMirrorResize},{default:()=>l("div",{ref:"textareaMirrorElRef",class:`${o}-input__textarea-mirror`,key:"mirror"})}):null)}}):l("div",{class:`${o}-input__input`},l("input",Object.assign({type:i==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":i},this.inputProps,{ref:"inputElRef",class:[`${o}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(t=this.inputProps)===null||t===void 0?void 0:t.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,0)},onInput:c=>{this.handleInput(c,0)},onChange:c=>{this.handleChange(c,0)}})),this.showPlaceholder1?l("div",{class:`${o}-input__placeholder`},l("span",null,this.mergedPlaceholder[0])):null,this.autosize?l("div",{class:`${o}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&Le(d.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?l("div",{class:`${o}-input__suffix`},[Le(d["clear-icon-placeholder"],h=>(this.clearable||h)&&l(Jo,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>h,icon:()=>{var p,v;return(v=(p=this.$slots)["clear-icon"])===null||v===void 0?void 0:v.call(p)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?l(Il,{clsPrefix:o,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?l(Nn,null,{default:h=>{var p;const{renderCount:v}=this;return v?v(h):(p=d.count)===null||p===void 0?void 0:p.call(d,h)}}):null,this.mergedShowPasswordOn&&this.type==="password"?l("div",{class:`${o}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?kt(d["password-visible-icon"],()=>[l(at,{clsPrefix:o},{default:()=>l(tl,null)})]):kt(d["password-invisible-icon"],()=>[l(at,{clsPrefix:o},{default:()=>l(ol,null)})])):null]):null)),this.pair?l("span",{class:`${o}-input__separator`},kt(d.separator,()=>[this.separator])):null,this.pair?l("div",{class:`${o}-input-wrapper`},l("div",{class:`${o}-input__input`},l("input",{ref:"inputEl2Ref",type:this.type,class:`${o}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,1)},onInput:c=>{this.handleInput(c,1)},onChange:c=>{this.handleChange(c,1)}}),this.showPlaceholder2?l("div",{class:`${o}-input__placeholder`},l("span",null,this.mergedPlaceholder[1])):null),Le(d.suffix,c=>(this.clearable||c)&&l("div",{class:`${o}-input__suffix`},[this.clearable&&l(Jo,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var h;return(h=d["clear-icon"])===null||h===void 0?void 0:h.call(d)},placeholder:()=>{var h;return(h=d["clear-icon-placeholder"])===null||h===void 0?void 0:h.call(d)}}),c]))):null,this.mergedBordered?l("div",{class:`${o}-input__border`}):null,this.mergedBordered?l("div",{class:`${o}-input__state-border`}):null,this.showCount&&i==="textarea"?l(Nn,null,{default:c=>{var h;const{renderCount:p}=this;return p?p(c):(h=d.count)===null||h===void 0?void 0:h.call(d,c)}}):null)}}),Ml=u("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[g(">",[u("input",[g("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),u("button",[g("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[b("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),g("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[b("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),g("*",[g("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[g(">",[u("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),u("base-selection",[u("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),u("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),g("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[g(">",[u("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),u("base-selection",[u("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),u("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),b("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Dl={},pr=V({name:"InputGroup",props:Dl,setup(e){const{mergedClsPrefixRef:t}=Te(e);return ln("-input-group",Ml,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return l("div",{class:`${e}-input-group`},this.$slots)}});function Fl(e){const{popoverColor:t,textColor2:o,primaryColorHover:n,primaryColorPressed:r}=e;return Object.assign(Object.assign({},Bi),{color:t,textColor:o,iconColor:o,iconColorHover:n,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})}const Ol={common:Un,self:Fl},Hl=()=>l("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},l("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},l("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},l("g",{transform:"translate(120.000000, 4285.000000)"},l("g",{transform:"translate(7.000000, 126.000000)"},l("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},l("g",{transform:"translate(4.000000, 2.000000)"},l("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),l("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),Vl=u("back-top",`
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`,[sn(),y("transition-disabled",{transition:"none !important"}),u("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),g("svg",{pointerEvents:"none"}),g("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[u("base-icon",{color:"var(--n-icon-color-hover)"})]),g("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[u("base-icon",{color:"var(--n-icon-color-pressed)"})])]),jl=Object.assign(Object.assign({},be.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),Ul=V({name:"BackTop",inheritAttrs:!1,props:jl,setup(e){Ne(()=>{e.target!==void 0&&$e("back-top","`target` is deprecated, please use `listen-to` instead."),e.onShow!==void 0&&$e("back-top","`on-show` is deprecated, please use `on-update:show` instead."),e.onHide!==void 0&&$e("back-top","`on-hide` is deprecated, please use `on-update:show` instead.")});const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Te(e),n=E(null),r=E(!1);Ne(()=>{const{value:_}=n;if(_===null){r.value=!1;return}r.value=_>=e.visibilityHeight});const i=E(!1);Fe(r,_=>{var x;i.value&&((x=e["onUpdate:show"])===null||x===void 0||x.call(e,_))});const a=pe(e,"show"),s=Ue(a,r),d=E(!0),c=E(null),h=P(()=>({right:`calc(${Kt(e.right)} + ${Ni.value})`,bottom:Kt(e.bottom)}));let p,v;Fe(s,_=>{var x,m;i.value&&(_&&((x=e.onShow)===null||x===void 0||x.call(e)),(m=e.onHide)===null||m===void 0||m.call(e))});const $=be("BackTop","-back-top",Vl,Ol,e,t);function w(){var _;if(v)return;v=!0;const x=((_=e.target)===null||_===void 0?void 0:_.call(e))||$a(e.listenTo)||dr(c.value);if(!x){xt("back-top","Container of back-top element is not found. This could be a bug of naive-ui.");return}p=x===document.documentElement?document:x;const{to:m}=e;(typeof m=="string"?document.querySelector(m):m)||xt("back-top","Target is not found."),p.addEventListener("scroll",D),D()}function M(){(Pn(p)?document.documentElement:p).scrollTo({top:0,behavior:"smooth"})}function D(){n.value=(Pn(p)?document.documentElement:p).scrollTop,i.value||nt(()=>{i.value=!0})}function H(){d.value=!1}po(()=>{w(),d.value=s.value}),rn(()=>{p&&p.removeEventListener("scroll",D)});const U=P(()=>{const{self:{color:_,boxShadow:x,boxShadowHover:m,boxShadowPressed:A,iconColor:R,iconColorHover:I,iconColorPressed:F,width:Z,height:L,iconSize:ee,borderRadius:Q,textColor:K},common:{cubicBezierEaseInOut:fe}}=$.value;return{"--n-bezier":fe,"--n-border-radius":Q,"--n-height":L,"--n-width":Z,"--n-box-shadow":x,"--n-box-shadow-hover":m,"--n-box-shadow-pressed":A,"--n-color":_,"--n-icon-size":ee,"--n-icon-color":R,"--n-icon-color-hover":I,"--n-icon-color-pressed":F,"--n-text-color":K}}),N=o?Oe("back-top",void 0,U,e):void 0;return{placeholderRef:c,style:h,mergedShow:s,isMounted:dn(),scrollElement:E(null),scrollTop:n,DomInfoReady:i,transitionDisabled:d,mergedClsPrefix:t,handleAfterEnter:H,handleScroll:D,handleClick:M,cssVars:o?void 0:U,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){const{mergedClsPrefix:e}=this;return l("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},l(Kn,{to:this.to,show:this.mergedShow},{default:()=>l($t,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?l("div",lt(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),kt(this.$slots.default,()=>[l(at,{clsPrefix:e},{default:Hl})])):null}})}))}}),Kl=Ge("n-checkbox-group"),Wl=()=>l("svg",{viewBox:"0 0 64 64",class:"check-icon"},l("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Gl=()=>l("svg",{viewBox:"0 0 100 100",class:"line-icon"},l("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),ql=g([u("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[y("show-label","line-height: var(--n-label-line-height);"),g("&:hover",[u("checkbox-box",[b("border","border: var(--n-border-checked);")])]),g("&:focus:not(:active)",[u("checkbox-box",[b("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),y("inside-table",[u("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),y("checked",[u("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[u("checkbox-icon",[g(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),y("indeterminate",[u("checkbox-box",[u("checkbox-icon",[g(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),g(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),y("checked, indeterminate",[g("&:focus:not(:active)",[u("checkbox-box",[b("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),u("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[b("border",{border:"var(--n-border-checked)"})])]),y("disabled",{cursor:"not-allowed"},[y("checked",[u("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[b("border",{border:"var(--n-border-disabled-checked)"}),u("checkbox-icon",[g(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),u("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[b("border",`
 border: var(--n-border-disabled);
 `),u("checkbox-icon",[g(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),b("label",`
 color: var(--n-text-color-disabled);
 `)]),u("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),u("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[b("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),u("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[g(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),so({left:"1px",top:"1px"})])]),b("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[g("&:empty",{display:"none"})])]),Ei(u("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Li(u("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Xl=Object.assign(Object.assign({},be.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Yl=V({name:"Checkbox",props:Xl,setup(e){Ne(()=>{e.onChange&&$e("checkbox","`on-change` is deprecated, please use `on-update:checked` instead.")});const t=ze(Kl,null),o=E(null),{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Te(e),a=E(e.defaultChecked),s=pe(e,"checked"),d=Ue(s,a),c=Ye(()=>{if(t){const m=t.valueSetRef.value;return m&&e.value!==void 0?m.has(e.value):!1}else return d.value===e.checkedValue}),h=bo(e,{mergedSize(m){const{size:A}=e;if(A!==void 0)return A;if(t){const{value:R}=t.mergedSizeRef;if(R!==void 0)return R}if(m){const{mergedSize:R}=m;if(R!==void 0)return R.value}return"medium"},mergedDisabled(m){const{disabled:A}=e;if(A!==void 0)return A;if(t){if(t.disabledRef.value)return!0;const{maxRef:{value:R},checkedCountRef:I}=t;if(R!==void 0&&I.value>=R&&!c.value)return!0;const{minRef:{value:F}}=t;if(F!==void 0&&I.value<=F&&c.value)return!0}return m?m.disabled.value:!1}}),{mergedDisabledRef:p,mergedSizeRef:v}=h,$=be("Checkbox","-checkbox",ql,Mi,e,n);function w(m){if(t&&e.value!==void 0)t.toggleCheckbox(!c.value,e.value);else{const{onChange:A,"onUpdate:checked":R,onUpdateChecked:I}=e,{nTriggerFormInput:F,nTriggerFormChange:Z}=h,L=c.value?e.uncheckedValue:e.checkedValue;R&&ne(R,L,m),I&&ne(I,L,m),A&&ne(A,L,m),F(),Z(),a.value=L}}function M(m){p.value||w(m)}function D(m){if(!p.value)switch(m.key){case" ":case"Enter":w(m)}}function H(m){switch(m.key){case" ":m.preventDefault()}}const U={focus:()=>{var m;(m=o.value)===null||m===void 0||m.focus()},blur:()=>{var m;(m=o.value)===null||m===void 0||m.blur()}},N=mo("Checkbox",i,n),_=P(()=>{const{value:m}=v,{common:{cubicBezierEaseInOut:A},self:{borderRadius:R,color:I,colorChecked:F,colorDisabled:Z,colorTableHeader:L,colorTableHeaderModal:ee,colorTableHeaderPopover:Q,checkMarkColor:K,checkMarkColorDisabled:fe,border:q,borderFocus:oe,borderDisabled:ye,borderChecked:ge,boxShadowFocus:j,textColor:G,textColorDisabled:k,checkMarkColorDisabledChecked:X,colorDisabledChecked:ie,borderDisabledChecked:de,labelPadding:se,labelLineHeight:Re,labelFontWeight:B,[ce("fontSize",m)]:Ee,[ce("size",m)]:st}}=$.value;return{"--n-label-line-height":Re,"--n-label-font-weight":B,"--n-size":st,"--n-bezier":A,"--n-border-radius":R,"--n-border":q,"--n-border-checked":ge,"--n-border-focus":oe,"--n-border-disabled":ye,"--n-border-disabled-checked":de,"--n-box-shadow-focus":j,"--n-color":I,"--n-color-checked":F,"--n-color-table":L,"--n-color-table-modal":ee,"--n-color-table-popover":Q,"--n-color-disabled":Z,"--n-color-disabled-checked":ie,"--n-text-color":G,"--n-text-color-disabled":k,"--n-check-mark-color":K,"--n-check-mark-color-disabled":fe,"--n-check-mark-color-disabled-checked":X,"--n-font-size":Ee,"--n-label-padding":se}}),x=r?Oe("checkbox",P(()=>v.value[0]),_,e):void 0;return Object.assign(h,U,{rtlEnabled:N,selfRef:o,mergedClsPrefix:n,mergedDisabled:p,renderedChecked:c,mergedTheme:$,labelId:Wn(),handleClick:M,handleKeyUp:D,handleKeyDown:H,cssVars:r?void 0:_,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender})},render(){var e;const{$slots:t,renderedChecked:o,mergedDisabled:n,indeterminate:r,privateInsideTable:i,cssVars:a,labelId:s,label:d,mergedClsPrefix:c,focusable:h,handleKeyUp:p,handleKeyDown:v,handleClick:$}=this;(e=this.onRender)===null||e===void 0||e.call(this);const w=Le(t.default,M=>d||M?l("span",{class:`${c}-checkbox__label`,id:s},d||M):null);return l("div",{ref:"selfRef",class:[`${c}-checkbox`,this.themeClass,this.rtlEnabled&&`${c}-checkbox--rtl`,o&&`${c}-checkbox--checked`,n&&`${c}-checkbox--disabled`,r&&`${c}-checkbox--indeterminate`,i&&`${c}-checkbox--inside-table`,w&&`${c}-checkbox--show-label`],tabindex:n||!h?void 0:0,role:"checkbox","aria-checked":r?"mixed":o,"aria-labelledby":s,style:a,onKeyup:p,onKeydown:v,onClick:$,onMousedown:()=>{De("selectstart",window,M=>{M.preventDefault()},{once:!0})}},l("div",{class:`${c}-checkbox-box-wrapper`}," ",l("div",{class:`${c}-checkbox-box`},l(an,null,{default:()=>this.indeterminate?l("div",{key:"indeterminate",class:`${c}-checkbox-icon`},Gl()):l("div",{key:"check",class:`${c}-checkbox-icon`},Wl())}),l("div",{class:`${c}-checkbox-box__border`}))),w)}});function Zl(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return xt("color-picker","props.modes is invalid."),"#000000"}function Wt(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Ql(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Jl(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const es={rgb:{hex(e){return it(Je(e))},hsl(e){const[t,o,n,r]=Je(e);return rt([...Go(t,o,n),r])},hsv(e){const[t,o,n,r]=Je(e);return gt([...Wo(t,o,n),r])}},hex:{rgb(e){return et(Je(e))},hsl(e){const[t,o,n,r]=Je(e);return rt([...Go(t,o,n),r])},hsv(e){const[t,o,n,r]=Je(e);return gt([...Wo(t,o,n),r])}},hsl:{hex(e){const[t,o,n,r]=zt(e);return it([...Ko(t,o,n),r])},rgb(e){const[t,o,n,r]=zt(e);return et([...Ko(t,o,n),r])},hsv(e){const[t,o,n,r]=zt(e);return gt([...Gn(t,o,n),r])}},hsv:{hex(e){const[t,o,n,r]=mt(e);return it([...tt(t,o,n),r])},rgb(e){const[t,o,n,r]=mt(e);return et([...tt(t,o,n),r])},hsl(e){const[t,o,n,r]=mt(e);return rt([...no(t,o,n),r])}}};function vr(e,t,o){return o=o||Wt(e),o?o===t?e:es[o][t](e):null}const Ft="12px",ts=12,pt="6px",os=V({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=E(null);function o(i){!t.value||!e.rgba||(De("mousemove",document,n),De("mouseup",document,r),n(i))}function n(i){const{value:a}=t;if(!a)return;const{width:s,left:d}=a.getBoundingClientRect(),c=(i.clientX-d)/(s-ts);e.onUpdateAlpha(Jl(c))}function r(){var i;Ve("mousemove",document,n),Ve("mouseup",document,r),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:t,railBackgroundImage:P(()=>{const{rgba:i}=e;return i?`linear-gradient(to right, rgba(${i[0]}, ${i[1]}, ${i[2]}, 0) 0%, rgba(${i[0]}, ${i[1]}, ${i[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:Ft,borderRadius:pt},onMousedown:this.handleMouseDown},l("div",{style:{borderRadius:pt,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},l("div",{class:`${e}-color-picker-checkboard`}),l("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&l("div",{style:{position:"absolute",left:pt,right:pt,top:0,bottom:0}},l("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${pt})`,borderRadius:pt,width:Ft,height:Ft}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:et(this.rgba),borderRadius:pt,width:Ft,height:Ft}}))))}}),gn=Ge("n-color-picker");function ns(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function rs(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function is(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function as(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function ls(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const ss={paddingSmall:"0 4px"},En=V({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=E(""),{themeRef:o}=ze(gn,null);Ne(()=>{t.value=n()});function n(){const{value:a}=e;if(a===null)return"";const{label:s}=e;return s==="HEX"?a:s==="A"?`${Math.floor(a*100)}%`:String(Math.floor(a))}function r(a){t.value=a}function i(a){let s,d;switch(e.label){case"HEX":d=as(a),d&&e.onUpdateValue(a),t.value=n();break;case"H":s=rs(a),s===!1?t.value=n():e.onUpdateValue(s);break;case"S":case"L":case"V":s=is(a),s===!1?t.value=n():e.onUpdateValue(s);break;case"A":s=ls(a),s===!1?t.value=n():e.onUpdateValue(s);break;case"R":case"G":case"B":s=ns(a),s===!1?t.value=n():e.onUpdateValue(s);break}}return{mergedTheme:o,inputValue:t,handleInputChange:i,handleInputUpdateValue:r}},render(){const{mergedTheme:e}=this;return l(fr,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:ss,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),ds=V({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?it:jt)(o));return}let r;switch(e.valueArr===null?r=[0,0,0,0]:r=Array.from(e.valueArr),e.mode){case"hsv":r[t]=o,e.onUpdateValue((n?gt:Yo)(r));break;case"rgb":r[t]=o,e.onUpdateValue((n?et:Xo)(r));break;case"hsl":r[t]=o,e.onUpdateValue((n?rt:qo)(r));break}}}},render(){const{clsPrefix:e,modes:t}=this;return l("div",{class:`${e}-color-picker-input`},l("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),l(pr,null,{default:()=>{const{mode:o,valueArr:n,showAlpha:r}=this;if(o==="hex"){let i=null;try{i=n===null?null:(r?it:jt)(n)}catch{}return l(En,{label:"HEX",showAlpha:r,value:i,onUpdateValue:a=>{this.handleUnitUpdateValue(0,a)}})}return(o+(r?"a":"")).split("").map((i,a)=>l(En,{label:i.toUpperCase(),value:n===null?null:n[a],onUpdateValue:s=>{this.handleUnitUpdateValue(a,s)}}))}}))}});function cs(e,t){if(t==="hsv"){const[o,n,r,i]=mt(e);return et([...tt(o,n,r),i])}return e}function us(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const hs=V({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=P(()=>e.swatches.map(i=>{const a=Wt(i);return{value:i,mode:a,legalValue:cs(i,a)}}));function o(i){const{mode:a}=e;let{value:s,mode:d}=i;return d||(d="hex",/^[a-zA-Z]+$/.test(s)?s=us(s):(xt("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),d===a?s:vr(s,a,d)}function n(i){e.onUpdateColor(o(i))}function r(i,a){i.key==="Enter"&&n(a)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:r}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>l("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:o=>{this.handleSwatchKeyDown(o,t)}},l("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),fs=V({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=ze(gn,null);return()=>{const{hsla:n,value:r,clsPrefix:i,onClick:a,disabled:s}=e,d=t.label||o.value;return l("div",{class:[`${i}-color-picker-trigger`,s&&`${i}-color-picker-trigger--disabled`],onClick:s?void 0:a},l("div",{class:`${i}-color-picker-trigger__fill`},l("div",{class:`${i}-color-picker-checkboard`}),l("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?rt(n):""}}),r&&n?l("div",{class:`${i}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},d?d(r):r):null))}}}),ps=V({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=Wt(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var n;const r=o.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,vr(r.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-preview__preview`},l("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),l("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),St="12px",vs=12,vt="6px",bs=6,ms="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",gs=V({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=E(null);function o(i){t.value&&(De("mousemove",document,n),De("mouseup",document,r),n(i))}function n(i){const{value:a}=t;if(!a)return;const{width:s,left:d}=a.getBoundingClientRect(),c=Ql((i.clientX-d-bs)/(s-vs)*360);e.onUpdateHue(c)}function r(){var i;Ve("mousemove",document,n),Ve("mouseup",document,r),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-slider`,style:{height:St,borderRadius:vt}},l("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:ms,height:St,borderRadius:vt,position:"relative"},onMousedown:this.handleMouseDown},l("div",{style:{position:"absolute",left:vt,right:vt,top:0,bottom:0}},l("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${vt})`,borderRadius:vt,width:St,height:St}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:vt,width:St,height:St}})))))}}),eo="12px",to="6px",xs=V({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=E(null);function o(i){t.value&&(De("mousemove",document,n),De("mouseup",document,r),n(i))}function n(i){const{value:a}=t;if(!a)return;const{width:s,height:d,left:c,bottom:h}=a.getBoundingClientRect(),p=(h-i.clientY)/d,v=(i.clientX-c)/s,$=100*(v>1?1:v<0?0:v),w=100*(p>1?1:p<0?0:p);e.onUpdateSV($,w)}function r(){var i;Ve("mousemove",document,n),Ve("mouseup",document,r),(i=e.onComplete)===null||i===void 0||i.call(e)}return{palleteRef:t,handleColor:P(()=>{const{rgba:i}=e;return i?`rgb(${i[0]}, ${i[1]}, ${i[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},l("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),l("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&l("div",{class:`${e}-color-picker-handle`,style:{width:eo,height:eo,borderRadius:to,left:`calc(${this.displayedSv[0]}% - ${to})`,bottom:`calc(${this.displayedSv[1]}% - ${to})`}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:to,width:eo,height:eo}})))}}),ys=g([u("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),u("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[sn(),u("input",`
 text-align: center;
 `)]),u("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[g("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),u("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[b("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),g("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),u("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[b("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),u("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[b("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[y("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),u("color-picker-preview",`
 display: flex;
 `,[b("sliders",`
 flex: 1 0 auto;
 `),b("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),b("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),b("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),u("color-picker-input",`
 display: flex;
 align-items: center;
 `,[u("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),b("mode",`
 width: 72px;
 text-align: center;
 `)]),u("color-picker-control",`
 padding: 12px;
 `),u("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[u("button","margin-left: 8px;")]),u("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[b("value",`
 white-space: nowrap;
 position: relative;
 `),b("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),y("disabled","cursor: not-allowed"),u("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[g("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),u("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[u("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[b("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),g("&:focus",`
 outline: none;
 `,[b("fill",[g("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),ws=Object.assign(Object.assign({},be.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Qo.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),_s=V({name:"ColorPicker",props:ws,slots:Object,setup(e,{slots:t}){const o=E(null);let n=null;const r=bo(e),{mergedSizeRef:i,mergedDisabledRef:a}=r,{localeRef:s}=vn("global"),{mergedClsPrefixRef:d,namespaceRef:c,inlineThemeDisabled:h}=Te(e),p=be("ColorPicker","-color-picker",ys,Di,e,d);Ae(gn,{themeRef:p,renderLabelRef:pe(e,"renderLabel"),colorPickerSlots:t});const v=E(e.defaultShow),$=Ue(pe(e,"show"),v);function w(T){const{onUpdateShow:ae,"onUpdate:show":C}=e;ae&&ne(ae,T),C&&ne(C,T),v.value=T}const{defaultValue:M}=e,D=E(M===void 0?Zl(e.modes,e.showAlpha):M),H=Ue(pe(e,"value"),D),U=E([H.value]),N=E(0),_=P(()=>Wt(H.value)),{modes:x}=e,m=E(Wt(H.value)||x[0]||"rgb");function A(){const{modes:T}=e,{value:ae}=m,C=T.findIndex(S=>S===ae);~C?m.value=T[(C+1)%T.length]:m.value="rgb"}let R,I,F,Z,L,ee,Q,K;const fe=P(()=>{const{value:T}=H;if(!T)return null;switch(_.value){case"hsv":return mt(T);case"hsl":return[R,I,F,K]=zt(T),[...Gn(R,I,F),K];case"rgb":case"hex":return[L,ee,Q,K]=Je(T),[...Wo(L,ee,Q),K]}}),q=P(()=>{const{value:T}=H;if(!T)return null;switch(_.value){case"rgb":case"hex":return Je(T);case"hsv":return[R,I,Z,K]=mt(T),[...tt(R,I,Z),K];case"hsl":return[R,I,F,K]=zt(T),[...Ko(R,I,F),K]}}),oe=P(()=>{const{value:T}=H;if(!T)return null;switch(_.value){case"hsl":return zt(T);case"hsv":return[R,I,Z,K]=mt(T),[...no(R,I,Z),K];case"rgb":case"hex":return[L,ee,Q,K]=Je(T),[...Go(L,ee,Q),K]}}),ye=P(()=>{switch(m.value){case"rgb":case"hex":return q.value;case"hsv":return fe.value;case"hsl":return oe.value}}),ge=E(0),j=E(1),G=E([0,0]);function k(T,ae){const{value:C}=fe,S=ge.value,O=C?C[3]:1;G.value=[T,ae];const{showAlpha:W}=e;switch(m.value){case"hsv":de((W?gt:Yo)([S,T,ae,O]),"cursor");break;case"hsl":de((W?rt:qo)([...no(S,T,ae),O]),"cursor");break;case"rgb":de((W?et:Xo)([...tt(S,T,ae),O]),"cursor");break;case"hex":de((W?it:jt)([...tt(S,T,ae),O]),"cursor");break}}function X(T){ge.value=T;const{value:ae}=fe;if(!ae)return;const[,C,S,O]=ae,{showAlpha:W}=e;switch(m.value){case"hsv":de((W?gt:Yo)([T,C,S,O]),"cursor");break;case"rgb":de((W?et:Xo)([...tt(T,C,S),O]),"cursor");break;case"hex":de((W?it:jt)([...tt(T,C,S),O]),"cursor");break;case"hsl":de((W?rt:qo)([...no(T,C,S),O]),"cursor");break}}function ie(T){switch(m.value){case"hsv":[R,I,Z]=fe.value,de(gt([R,I,Z,T]),"cursor");break;case"rgb":[L,ee,Q]=q.value,de(et([L,ee,Q,T]),"cursor");break;case"hex":[L,ee,Q]=q.value,de(it([L,ee,Q,T]),"cursor");break;case"hsl":[R,I,F]=oe.value,de(rt([R,I,F,T]),"cursor");break}j.value=T}function de(T,ae){ae==="cursor"?n=T:n=null;const{nTriggerFormChange:C,nTriggerFormInput:S}=r,{onUpdateValue:O,"onUpdate:value":W}=e;O&&ne(O,T),W&&ne(W,T),C(),S(),D.value=T}function se(T){de(T,"input"),nt(Re)}function Re(T=!0){const{value:ae}=H;if(ae){const{nTriggerFormChange:C,nTriggerFormInput:S}=r,{onComplete:O}=e;O&&O(ae);const{value:W}=U,{value:le}=N;T&&(W.splice(le+1,W.length,ae),N.value=le+1),C(),S()}}function B(){const{value:T}=N;T-1<0||(de(U.value[T-1],"input"),Re(!1),N.value=T-1)}function Ee(){const{value:T}=N;T<0||T+1>=U.value.length||(de(U.value[T+1],"input"),Re(!1),N.value=T+1)}function st(){de(null,"input");const{onClear:T}=e;T&&T(),w(!1)}function Tt(){const{value:T}=H,{onConfirm:ae}=e;ae&&ae(T),w(!1)}const Bt=P(()=>N.value>=1),dt=P(()=>{const{value:T}=U;return T.length>1&&N.value<T.length-1});Fe($,T=>{T||(U.value=[H.value],N.value=0)}),Ne(()=>{if(!(n&&n===H.value)){const{value:T}=fe;T&&(ge.value=T[0],j.value=T[3],G.value=[T[1],T[2]])}n=null});const ct=P(()=>{const{value:T}=i,{common:{cubicBezierEaseInOut:ae},self:{textColor:C,color:S,panelFontSize:O,boxShadow:W,border:le,borderRadius:ve,dividerColor:Se,[ce("height",T)]:qe,[ce("fontSize",T)]:Xe}}=p.value;return{"--n-bezier":ae,"--n-text-color":C,"--n-color":S,"--n-panel-font-size":O,"--n-font-size":Xe,"--n-box-shadow":W,"--n-border":le,"--n-border-radius":ve,"--n-height":qe,"--n-divider-color":Se}}),Me=h?Oe("color-picker",P(()=>i.value[0]),ct,e):void 0;function Nt(){var T;const{value:ae}=q,{value:C}=ge,{internalActions:S,modes:O,actions:W}=e,{value:le}=p,{value:ve}=d;return l("div",{class:[`${ve}-color-picker-panel`,Me==null?void 0:Me.themeClass.value],onDragstart:Se=>{Se.preventDefault()},style:h?void 0:ct.value},l("div",{class:`${ve}-color-picker-control`},l(xs,{clsPrefix:ve,rgba:ae,displayedHue:C,displayedSv:G.value,onUpdateSV:k,onComplete:Re}),l("div",{class:`${ve}-color-picker-preview`},l("div",{class:`${ve}-color-picker-preview__sliders`},l(gs,{clsPrefix:ve,hue:C,onUpdateHue:X,onComplete:Re}),e.showAlpha?l(os,{clsPrefix:ve,rgba:ae,alpha:j.value,onUpdateAlpha:ie,onComplete:Re}):null),e.showPreview?l(ps,{clsPrefix:ve,mode:m.value,color:q.value&&jt(q.value),onUpdateColor:Se=>{de(Se,"input")}}):null),l(ds,{clsPrefix:ve,showAlpha:e.showAlpha,mode:m.value,modes:O,onUpdateMode:A,value:H.value,valueArr:ye.value,onUpdateValue:se}),((T=e.swatches)===null||T===void 0?void 0:T.length)&&l(hs,{clsPrefix:ve,mode:m.value,swatches:e.swatches,onUpdateColor:Se=>{de(Se,"input")}})),W!=null&&W.length?l("div",{class:`${ve}-color-picker-action`},W.includes("confirm")&&l(ot,{size:"small",onClick:Tt,theme:le.peers.Button,themeOverrides:le.peerOverrides.Button},{default:()=>s.value.confirm}),W.includes("clear")&&l(ot,{size:"small",onClick:st,disabled:!H.value,theme:le.peers.Button,themeOverrides:le.peerOverrides.Button},{default:()=>s.value.clear})):null,t.action?l("div",{class:`${ve}-color-picker-action`},{default:t.action}):S?l("div",{class:`${ve}-color-picker-action`},S.includes("undo")&&l(ot,{size:"small",onClick:B,disabled:!Bt.value,theme:le.peers.Button,themeOverrides:le.peerOverrides.Button},{default:()=>s.value.undo}),S.includes("redo")&&l(ot,{size:"small",onClick:Ee,disabled:!dt.value,theme:le.peers.Button,themeOverrides:le.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:d,namespace:c,selfRef:o,hsla:oe,rgba:q,mergedShow:$,mergedDisabled:a,isMounted:dn(),adjustedTo:Qo(e),mergedValue:H,handleTriggerClick(){w(!0)},handleClickOutside(T){var ae;!((ae=o.value)===null||ae===void 0)&&ae.contains(Fi(T))||w(!1)},renderPanel:Nt,cssVars:h?void 0:ct,themeClass:Me==null?void 0:Me.themeClass,onRender:Me==null?void 0:Me.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t==null||t(),l("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},l(ir,null,{default:()=>[l(ar,null,{default:()=>l(fs,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),l(lr,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Qo.tdkey,to:this.adjustedTo},{default:()=>l($t,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Rt(this.renderPanel(),[[qn,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),xn=Ge("n-dropdown-menu"),xo=Ge("n-dropdown"),Ln=Ge("n-dropdown-option"),br=V({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Cs=V({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=ze(xn),{renderLabelRef:o,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=ze(xo);return{labelField:n,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,d=l("div",Object.assign({class:`${t}-dropdown-option`},r==null?void 0:r(s)),l("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,n&&`${t}-dropdown-option-body__prefix--show-icon`]},We(s.icon)),l("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):We((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),l("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:d,option:s}):d}}),Ss=u("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[y("color-transition",{transition:"color .3s var(--n-bezier)"}),y("depth",{color:"var(--n-color)"},[g("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),g("svg",{height:"1em",width:"1em"})]),ks=Object.assign(Object.assign({},be.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),mr=V({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:ks,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Te(e),n=be("Icon","-icon",Ss,Oi,e,t),r=P(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:s},self:d}=n.value;if(a!==void 0){const{color:c,[`opacity${a}Depth`]:h}=d;return{"--n-bezier":s,"--n-color":c,"--n-opacity":h}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=o?Oe("icon",P(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:P(()=>{const{size:a,color:s}=e;return{fontSize:Kt(a),color:s}}),cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:n,component:r,onRender:i,themeClass:a}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&xt("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),l("i",lt(this.$attrs,{role:"img",class:[`${n}-icon`,a,{[`${n}-icon--depth`]:o,[`${n}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?l(r):this.$slots)}});function tn(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function zs(e){return e.type==="group"}function gr(e){return e.type==="divider"}function Rs(e){return e.type==="render"}const xr=V({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=ze(xo),{hoverKeyRef:o,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:d,renderLabelRef:c,renderIconRef:h,labelFieldRef:p,childrenFieldRef:v,renderOptionRef:$,nodePropsRef:w,menuPropsRef:M}=t,D=ze(Ln,null),H=ze(xn),U=ze(cn),N=P(()=>e.tmNode.rawNode),_=P(()=>{const{value:q}=v;return tn(e.tmNode.rawNode,q)}),x=P(()=>{const{disabled:q}=e.tmNode;return q}),m=P(()=>{if(!_.value)return!1;const{key:q,disabled:oe}=e.tmNode;if(oe)return!1;const{value:ye}=o,{value:ge}=n,{value:j}=r,{value:G}=i;return ye!==null?G.includes(q):ge!==null?G.includes(q)&&G[G.length-1]!==q:j!==null?G.includes(q):!1}),A=P(()=>n.value===null&&!s.value),R=Aa(m,300,A),I=P(()=>!!(D!=null&&D.enteringSubmenuRef.value)),F=E(!1);Ae(Ln,{enteringSubmenuRef:F});function Z(){F.value=!0}function L(){F.value=!1}function ee(){const{parentKey:q,tmNode:oe}=e;oe.disabled||d.value&&(r.value=q,n.value=null,o.value=oe.key)}function Q(){const{tmNode:q}=e;q.disabled||d.value&&o.value!==q.key&&ee()}function K(q){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:oe}=q;oe&&!$n({target:oe},"dropdownOption")&&!$n({target:oe},"scrollbarRail")&&(o.value=null)}function fe(){const{value:q}=_,{tmNode:oe}=e;d.value&&!q&&!oe.disabled&&(t.doSelect(oe.key,oe.rawNode),t.doUpdateShow(!1))}return{labelField:p,renderLabel:c,renderIcon:h,siblingHasIcon:H.showIconRef,siblingHasSubmenu:H.hasSubmenuRef,menuProps:M,popoverBody:U,animated:s,mergedShowSubmenu:P(()=>R.value&&!I.value),rawNode:N,hasSubmenu:_,pending:Ye(()=>{const{value:q}=i,{key:oe}=e.tmNode;return q.includes(oe)}),childActive:Ye(()=>{const{value:q}=a,{key:oe}=e.tmNode,ye=q.findIndex(ge=>oe===ge);return ye===-1?!1:ye<q.length-1}),active:Ye(()=>{const{value:q}=a,{key:oe}=e.tmNode,ye=q.findIndex(ge=>oe===ge);return ye===-1?!1:ye===q.length-1}),mergedDisabled:x,renderOption:$,nodeProps:w,handleClick:fe,handleMouseMove:Q,handleMouseEnter:ee,handleMouseLeave:K,handleSubmenuBeforeEnter:Z,handleSubmenuAfterEnter:L}},render(){var e,t;const{animated:o,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:d,renderIcon:c,renderOption:h,nodeProps:p,props:v,scrollable:$}=this;let w=null;if(r){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);w=l(yr,Object.assign({},U,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const M={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},D=p==null?void 0:p(n),H=l("div",Object.assign({class:[`${i}-dropdown-option`,D==null?void 0:D.class],"data-dropdown-option":!0},D),l("div",lt(M,v),[l("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(n):We(n.icon)]),l("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},d?d(n):We((t=n[this.labelField])!==null&&t!==void 0?t:n.title)),l("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(mr,null,{default:()=>l(Qa,null)}):null)]),this.hasSubmenu?l(ir,null,{default:()=>[l(ar,null,{default:()=>l("div",{class:`${i}-dropdown-offset-container`},l(lr,{show:this.mergedShowSubmenu,placement:this.placement,to:$&&this.popoverBody||void 0,teleportDisabled:!$},{default:()=>l("div",{class:`${i}-dropdown-menu-wrapper`},o?l($t,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>w}):w)}))})]}):null);return h?h({node:H,option:n}):H}}),$s=V({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:n}=e;return l(je,null,l(Cs,{clsPrefix:o,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:i}=r;return i.show===!1?null:gr(i)?l(br,{clsPrefix:o,key:r.key}):r.isGroup?(xt("dropdown","`group` node is not allowed to be put in `group` node."),null):l(xr,{clsPrefix:o,tmNode:r,parentKey:t,key:r.key})}))}}),Ps=V({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return l("div",t,[e==null?void 0:e()])}}),yr=V({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=ze(xo);Ae(xn,{showIconRef:P(()=>{const r=t.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>r?r(d):d.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:P(()=>{const{value:r}=o;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>tn(d,r));const{rawNode:s}=i;return tn(s,r)})})});const n=E(null);return Ae(Xn,null),Ae(Yn,null),Ae(cn,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Rs(i)?l(Ps,{tmNode:r,key:r.key}):gr(i)?l(br,{clsPrefix:t,key:r.key}):zs(i)?l($s,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):l(xr,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:o})});return l("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?l(Hi,{contentClass:`${t}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?_a({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),As=u("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[sn(),u("dropdown-option",`
 position: relative;
 `,[g("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[g("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),u("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[g("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),Pe("disabled",[y("pending",`
 color: var(--n-option-text-color-hover);
 `,[b("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),g("&::before","background-color: var(--n-option-color-hover);")]),y("active",`
 color: var(--n-option-text-color-active);
 `,[b("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),g("&::before","background-color: var(--n-option-color-active);")]),y("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[b("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),y("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),y("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[b("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[y("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),b("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[y("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),u("icon",`
 font-size: var(--n-option-icon-size);
 `)]),b("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),b("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[y("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),u("icon",`
 font-size: var(--n-option-icon-size);
 `)]),u("dropdown-menu","pointer-events: all;")]),u("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),u("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),u("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),g(">",[u("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Pe("scrollable",`
 padding: var(--n-padding);
 `),y("scrollable",[b("content",`
 padding: var(--n-padding);
 `)])]),Is={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ts=Object.keys(sr),Bs=Object.assign(Object.assign(Object.assign({},sr),Is),be.props),yn=V({name:"Dropdown",inheritAttrs:!1,props:Bs,setup(e){const t=E(!1),o=Ue(pe(e,"show"),t),n=P(()=>{const{keyField:L,childrenField:ee}=e;return ao(e.options,{getKey(Q){return Q[L]},getDisabled(Q){return Q.disabled===!0},getIgnored(Q){return Q.type==="divider"||Q.type==="render"},getChildren(Q){return Q[ee]}})}),r=P(()=>n.value.treeNodes),i=E(null),a=E(null),s=E(null),d=P(()=>{var L,ee,Q;return(Q=(ee=(L=i.value)!==null&&L!==void 0?L:a.value)!==null&&ee!==void 0?ee:s.value)!==null&&Q!==void 0?Q:null}),c=P(()=>n.value.getPath(d.value).keyPath),h=P(()=>n.value.getPath(e.value).keyPath),p=Ye(()=>e.keyboard&&o.value);Pa({keydown:{ArrowUp:{prevent:!0,handler:x},ArrowRight:{prevent:!0,handler:_},ArrowDown:{prevent:!0,handler:m},ArrowLeft:{prevent:!0,handler:N},Enter:{prevent:!0,handler:A},Escape:U}},p);const{mergedClsPrefixRef:v,inlineThemeDisabled:$}=Te(e),w=be("Dropdown","-dropdown",As,Vi,e,v);Ae(xo,{labelFieldRef:pe(e,"labelField"),childrenFieldRef:pe(e,"childrenField"),renderLabelRef:pe(e,"renderLabel"),renderIconRef:pe(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:c,activeKeyPathRef:h,animatedRef:pe(e,"animated"),mergedShowRef:o,nodePropsRef:pe(e,"nodeProps"),renderOptionRef:pe(e,"renderOption"),menuPropsRef:pe(e,"menuProps"),doSelect:M,doUpdateShow:D}),Fe(o,L=>{!e.animated&&!L&&H()});function M(L,ee){const{onSelect:Q}=e;Q&&ne(Q,L,ee)}function D(L){const{"onUpdate:show":ee,onUpdateShow:Q}=e;ee&&ne(ee,L),Q&&ne(Q,L),t.value=L}function H(){i.value=null,a.value=null,s.value=null}function U(){D(!1)}function N(){I("left")}function _(){I("right")}function x(){I("up")}function m(){I("down")}function A(){const L=R();L!=null&&L.isLeaf&&o.value&&(M(L.key,L.rawNode),D(!1))}function R(){var L;const{value:ee}=n,{value:Q}=d;return!ee||Q===null?null:(L=ee.getNode(Q))!==null&&L!==void 0?L:null}function I(L){const{value:ee}=d,{value:{getFirstAvailableNode:Q}}=n;let K=null;if(ee===null){const fe=Q();fe!==null&&(K=fe.key)}else{const fe=R();if(fe){let q;switch(L){case"down":q=fe.getNext();break;case"up":q=fe.getPrev();break;case"right":q=fe.getChild();break;case"left":q=fe.getParent();break}q&&(K=q.key)}}K!==null&&(i.value=null,a.value=K)}const F=P(()=>{const{size:L,inverted:ee}=e,{common:{cubicBezierEaseInOut:Q},self:K}=w.value,{padding:fe,dividerColor:q,borderRadius:oe,optionOpacityDisabled:ye,[ce("optionIconSuffixWidth",L)]:ge,[ce("optionSuffixWidth",L)]:j,[ce("optionIconPrefixWidth",L)]:G,[ce("optionPrefixWidth",L)]:k,[ce("fontSize",L)]:X,[ce("optionHeight",L)]:ie,[ce("optionIconSize",L)]:de}=K,se={"--n-bezier":Q,"--n-font-size":X,"--n-padding":fe,"--n-border-radius":oe,"--n-option-height":ie,"--n-option-prefix-width":k,"--n-option-icon-prefix-width":G,"--n-option-suffix-width":j,"--n-option-icon-suffix-width":ge,"--n-option-icon-size":de,"--n-divider-color":q,"--n-option-opacity-disabled":ye};return ee?(se["--n-color"]=K.colorInverted,se["--n-option-color-hover"]=K.optionColorHoverInverted,se["--n-option-color-active"]=K.optionColorActiveInverted,se["--n-option-text-color"]=K.optionTextColorInverted,se["--n-option-text-color-hover"]=K.optionTextColorHoverInverted,se["--n-option-text-color-active"]=K.optionTextColorActiveInverted,se["--n-option-text-color-child-active"]=K.optionTextColorChildActiveInverted,se["--n-prefix-color"]=K.prefixColorInverted,se["--n-suffix-color"]=K.suffixColorInverted,se["--n-group-header-text-color"]=K.groupHeaderTextColorInverted):(se["--n-color"]=K.color,se["--n-option-color-hover"]=K.optionColorHover,se["--n-option-color-active"]=K.optionColorActive,se["--n-option-text-color"]=K.optionTextColor,se["--n-option-text-color-hover"]=K.optionTextColorHover,se["--n-option-text-color-active"]=K.optionTextColorActive,se["--n-option-text-color-child-active"]=K.optionTextColorChildActive,se["--n-prefix-color"]=K.prefixColor,se["--n-suffix-color"]=K.suffixColor,se["--n-group-header-text-color"]=K.groupHeaderTextColor),se}),Z=$?Oe("dropdown",P(()=>`${e.size[0]}${e.inverted?"i":""}`),F,e):void 0;return{mergedClsPrefix:v,mergedTheme:w,tmNodes:r,mergedShow:o,handleAfterLeave:()=>{e.animated&&H()},doUpdateShow:D,cssVars:$?void 0:F,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender}},render(){const e=(n,r,i,a,s)=>{var d;const{mergedClsPrefix:c,menuProps:h}=this;(d=this.onRender)===null||d===void 0||d.call(this);const p=(h==null?void 0:h(void 0,this.tmNodes.map($=>$.rawNode)))||{},v={ref:Ea(r),class:[n,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return l(yr,lt(this.$attrs,v,p))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(Ca,Object.assign({},ro(this.$props,Ts),o),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Ns=u("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[Pe("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[Pe("no-title",`
 display: flex;
 align-items: center;
 `)]),b("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),y("title-position-left",[b("line",[y("left",{width:"28px"})])]),y("title-position-right",[b("line",[y("right",{width:"28px"})])]),y("dashed",[b("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),y("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),b("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),Pe("dashed",[b("line",{backgroundColor:"var(--n-color)"})]),y("dashed",[b("line",{borderColor:"var(--n-color)"})]),y("vertical",{backgroundColor:"var(--n-color)"})]),Es=Object.assign(Object.assign({},be.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),wr=V({name:"Divider",props:Es,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Te(e),n=be("Divider","-divider",Ns,ji,e,t),r=P(()=>{const{common:{cubicBezierEaseInOut:a},self:{color:s,textColor:d,fontWeight:c}}=n.value;return{"--n-bezier":a,"--n-color":s,"--n-text-color":d,"--n-font-weight":c}}),i=o?Oe("divider",void 0,r,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:t,titlePlacement:o,vertical:n,dashed:r,cssVars:i,mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{role:"separator",class:[`${a}-divider`,this.themeClass,{[`${a}-divider--vertical`]:n,[`${a}-divider--no-title`]:!t.default,[`${a}-divider--dashed`]:r,[`${a}-divider--title-position-${o}`]:t.default&&o}],style:i},n?null:l("div",{class:`${a}-divider__line ${a}-divider__line--left`}),!n&&t.default?l(je,null,l("div",{class:`${a}-divider__title`},this.$slots),l("div",{class:`${a}-divider__line ${a}-divider__line--right`})):null)}}),Ls=V({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=E(!!e.show),o=E(null),n=ze(un);let r=0,i="",a=null;const s=E(!1),d=E(!1),c=P(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:h,mergedRtlRef:p}=Te(e),v=mo("Drawer",p,h),$=m,w=I=>{d.value=!0,r=c.value?I.clientY:I.clientX,i=document.body.style.cursor,document.body.style.cursor=c.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",x),document.body.addEventListener("mouseleave",$),document.body.addEventListener("mouseup",m)},M=()=>{a!==null&&(window.clearTimeout(a),a=null),d.value?s.value=!0:a=window.setTimeout(()=>{s.value=!0},300)},D=()=>{a!==null&&(window.clearTimeout(a),a=null),s.value=!1},{doUpdateHeight:H,doUpdateWidth:U}=n,N=I=>{const{maxWidth:F}=e;if(F&&I>F)return F;const{minWidth:Z}=e;return Z&&I<Z?Z:I},_=I=>{const{maxHeight:F}=e;if(F&&I>F)return F;const{minHeight:Z}=e;return Z&&I<Z?Z:I};function x(I){var F,Z;if(d.value)if(c.value){let L=((F=o.value)===null||F===void 0?void 0:F.offsetHeight)||0;const ee=r-I.clientY;L+=e.placement==="bottom"?ee:-ee,L=_(L),H(L),r=I.clientY}else{let L=((Z=o.value)===null||Z===void 0?void 0:Z.offsetWidth)||0;const ee=r-I.clientX;L+=e.placement==="right"?ee:-ee,L=N(L),U(L),r=I.clientX}}function m(){d.value&&(r=0,d.value=!1,document.body.style.cursor=i,document.body.removeEventListener("mousemove",x),document.body.removeEventListener("mouseup",m),document.body.removeEventListener("mouseleave",$))}Ne(()=>{e.show&&(t.value=!0)}),Fe(()=>e.show,I=>{I||m()}),rn(()=>{m()});const A=P(()=>{const{show:I}=e,F=[[co,I]];return e.showMask||F.push([qn,e.onClickoutside,void 0,{capture:!0}]),F});function R(){var I;t.value=!1,(I=e.onAfterLeave)===null||I===void 0||I.call(e)}return Ki(P(()=>e.blockScroll&&t.value)),Ae(Yn,o),Ae(cn,null),Ae(Xn,null),{bodyRef:o,rtlEnabled:v,mergedClsPrefix:n.mergedClsPrefixRef,isMounted:n.isMountedRef,mergedTheme:n.mergedThemeRef,displayed:t,transitionName:P(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:R,bodyDirectives:A,handleMousedownResizeTrigger:w,handleMouseenterResizeTrigger:M,handleMouseleaveResizeTrigger:D,isDragging:d,isHoverOnResizeTrigger:s}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?Rt(l("div",{role:"none"},l(Ui,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>l($t,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>Rt(l("div",lt(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?l("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?l("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):l(vo,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[co,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Ms,cubicBezierEaseOut:Ds}=go;function Fs({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[g(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Ms}`}),g(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Ds}`}),g(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),g(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),g(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),g(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:Os,cubicBezierEaseOut:Hs}=go;function Vs({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[g(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Os}`}),g(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Hs}`}),g(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),g(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),g(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),g(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:js,cubicBezierEaseOut:Us}=go;function Ks({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[g(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${js}`}),g(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Us}`}),g(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),g(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),g(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),g(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Ws,cubicBezierEaseOut:Gs}=go;function qs({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[g(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Ws}`}),g(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Gs}`}),g(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),g(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),g(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),g(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const Xs=g([u("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Ks(),Vs(),qs(),Fs(),y("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),y("native-scrollbar",[u("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),b("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[y("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),u("drawer-content-wrapper",`
 box-sizing: border-box;
 `),u("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[y("native-scrollbar",[u("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),u("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),u("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),u("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[b("main",`
 flex: 1;
 `),b("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),u("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),y("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[b("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),y("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[b("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),y("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[b("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),y("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[b("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),g("body",[g(">",[u("drawer-container",`
 position: fixed;
 `)])]),u("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[g("> *",`
 pointer-events: all;
 `)]),u("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[y("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Wi({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Ys=Object.assign(Object.assign({},be.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),_r=V({name:"Drawer",inheritAttrs:!1,props:Ys,setup(e){Ne(()=>{e.drawerStyle!==void 0&&$e("drawer","`drawer-style` is deprecated, please use `style` instead."),e.drawerClass!==void 0&&$e("drawer","`drawer-class` is deprecated, please use `class` instead."),e.target!==void 0&&$e("drawer","`target` is deprecated, please use `to` instead."),e.onShow!==void 0&&$e("drawer","`on-show` is deprecated, please use `on-update:show` instead."),e.onHide!==void 0&&$e("drawer","`on-hide` is deprecated, please use `on-update:show` instead.")});const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:n}=Te(e),r=dn(),i=be("Drawer","-drawer",Xs,qi,e,t),a=E(e.defaultWidth),s=E(e.defaultHeight),d=Ue(pe(e,"width"),a),c=Ue(pe(e,"height"),s),h=P(()=>{const{placement:m}=e;return m==="top"||m==="bottom"?"":Kt(d.value)}),p=P(()=>{const{placement:m}=e;return m==="left"||m==="right"?"":Kt(c.value)}),v=m=>{const{onUpdateWidth:A,"onUpdate:width":R}=e;A&&ne(A,m),R&&ne(R,m),a.value=m},$=m=>{const{onUpdateHeight:A,"onUpdate:width":R}=e;A&&ne(A,m),R&&ne(R,m),s.value=m},w=P(()=>[{width:h.value,height:p.value},e.drawerStyle||""]);function M(m){const{onMaskClick:A,maskClosable:R}=e;R&&N(!1),A&&A(m)}function D(m){M(m)}const H=Xi();function U(m){var A;(A=e.onEsc)===null||A===void 0||A.call(e),e.show&&e.closeOnEsc&&Yi(m)&&(H.value||N(!1))}function N(m){const{onHide:A,onUpdateShow:R,"onUpdate:show":I}=e;R&&ne(R,m),I&&ne(I,m),A&&!m&&ne(A,m)}Ae(un,{isMountedRef:r,mergedThemeRef:i,mergedClsPrefixRef:t,doUpdateShow:N,doUpdateHeight:$,doUpdateWidth:v});const _=P(()=>{const{common:{cubicBezierEaseInOut:m,cubicBezierEaseIn:A,cubicBezierEaseOut:R},self:{color:I,textColor:F,boxShadow:Z,lineHeight:L,headerPadding:ee,footerPadding:Q,borderRadius:K,bodyPadding:fe,titleFontSize:q,titleTextColor:oe,titleFontWeight:ye,headerBorderBottom:ge,footerBorderTop:j,closeIconColor:G,closeIconColorHover:k,closeIconColorPressed:X,closeColorHover:ie,closeColorPressed:de,closeIconSize:se,closeSize:Re,closeBorderRadius:B,resizableTriggerColorHover:Ee}}=i.value;return{"--n-line-height":L,"--n-color":I,"--n-border-radius":K,"--n-text-color":F,"--n-box-shadow":Z,"--n-bezier":m,"--n-bezier-out":R,"--n-bezier-in":A,"--n-header-padding":ee,"--n-body-padding":fe,"--n-footer-padding":Q,"--n-title-text-color":oe,"--n-title-font-size":q,"--n-title-font-weight":ye,"--n-header-border-bottom":ge,"--n-footer-border-top":j,"--n-close-icon-color":G,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":X,"--n-close-size":Re,"--n-close-color-hover":ie,"--n-close-color-pressed":de,"--n-close-icon-size":se,"--n-close-border-radius":B,"--n-resize-trigger-color-hover":Ee}}),x=n?Oe("drawer",void 0,_,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:w,handleOutsideClick:D,handleMaskClick:M,handleEsc:U,mergedTheme:i,cssVars:n?void 0:_,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender,isMounted:r}},render(){const{mergedClsPrefix:e}=this;return l(Kn,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),Rt(l("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?l($t,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?l("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,l(Ls,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[Gi,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Zs={title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Cr=V({name:"DrawerContent",props:Zs,slots:Object,setup(){const e=ze(un,null);e||Zi("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function o(){t(!1)}return{handleCloseClick:o,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:o,mergedTheme:n,bodyClass:r,bodyStyle:i,bodyContentClass:a,bodyContentStyle:s,headerClass:d,headerStyle:c,footerClass:h,footerStyle:p,scrollbarProps:v,closable:$,$slots:w}=this;return l("div",{role:"none",class:[`${t}-drawer-content`,o&&`${t}-drawer-content--native-scrollbar`]},w.header||e||$?l("div",{class:[`${t}-drawer-header`,d],style:c,role:"none"},l("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},w.header!==void 0?w.header():e),$&&l(Zn,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,o?l("div",{class:[`${t}-drawer-body`,r],style:i,role:"none"},l("div",{class:[`${t}-drawer-body-content-wrapper`,a],style:s,role:"none"},w)):l(vo,Object.assign({themeOverrides:n.peerOverrides.Scrollbar,theme:n.peers.Scrollbar},v,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,a],contentStyle:s}),w),w.footer?l("div",{class:[`${t}-drawer-footer`,h],style:p,role:"none"},w.footer()):null)}});function Qs(){return Qi}const Js={self:Qs},ed=Object.assign(Object.assign({},be.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),td=V({name:"Flex",props:ed,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=Te(e),n=be("Flex","-flex",void 0,Js,e,t);return{rtlEnabled:mo("Flex",o,t),mergedClsPrefix:t,margin:P(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[ce("gap",i)]:a}}=n.value,{row:s,col:d}=Ji(a);return{horizontal:He(d),vertical:He(s)}})}},render(){const{vertical:e,reverse:t,align:o,inline:n,justify:r,margin:i,wrap:a,mergedClsPrefix:s,rtlEnabled:d}=this,c=io(Sa(this),!1);return c.length?l("div",{role:"none",class:[`${s}-flex`,d&&`${s}-flex--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:r,flexWrap:!a||e?"nowrap":"wrap",alignItems:o,gap:`${i.vertical}px ${i.horizontal}px`}},c):null}});function od(e){const{primaryColor:t,opacityDisabled:o,borderRadius:n,textColor3:r}=e;return Object.assign(Object.assign({},ea),{iconColor:r,textColor:"white",loadingColor:t,opacityDisabled:o,railColor:"rgba(0, 0, 0, .14)",railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${ta(t,{alpha:.2})}`})}const nd={common:Un,self:od},rd=Ge("n-layout-sider"),qt=Ge("n-menu"),wn=Ge("n-submenu"),_n=Ge("n-menu-item-group"),Mn=[g("&::before","background-color: var(--n-item-color-hover);"),b("arrow",`
 color: var(--n-arrow-color-hover);
 `),b("icon",`
 color: var(--n-item-icon-color-hover);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[g("a",`
 color: var(--n-item-text-color-hover);
 `),b("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Dn=[b("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[g("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),b("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],id=g([u("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[y("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[u("submenu","margin: 0;"),u("menu-item","margin: 0;"),u("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[g("&::before","display: none;"),y("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),u("menu-item-content",[y("selected",[b("icon","color: var(--n-item-icon-color-active-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[g("a","color: var(--n-item-text-color-active-horizontal);"),b("extra","color: var(--n-item-text-color-active-horizontal);")])]),y("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[g("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),b("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),b("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Pe("disabled",[Pe("selected, child-active",[g("&:focus-within",Dn)]),y("selected",[bt(null,[b("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[g("a","color: var(--n-item-text-color-active-hover-horizontal);"),b("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),y("child-active",[bt(null,[b("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[g("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),b("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),bt("border-bottom: 2px solid var(--n-border-color-horizontal);",Dn)]),u("menu-item-content-header",[g("a","color: var(--n-item-text-color-horizontal);")])])]),Pe("responsive",[u("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),y("collapsed",[u("menu-item-content",[y("selected",[g("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),u("menu-item-content-header","opacity: 0;"),b("arrow","opacity: 0;"),b("icon","color: var(--n-item-icon-color-collapsed);")])]),u("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),u("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[g("> *","z-index: 1;"),g("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),y("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),y("collapsed",[b("arrow","transform: rotate(0);")]),y("selected",[g("&::before","background-color: var(--n-item-color-active);"),b("arrow","color: var(--n-arrow-color-active);"),b("icon","color: var(--n-item-icon-color-active);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[g("a","color: var(--n-item-text-color-active);"),b("extra","color: var(--n-item-text-color-active);")])]),y("child-active",[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[g("a",`
 color: var(--n-item-text-color-child-active);
 `),b("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),b("arrow",`
 color: var(--n-arrow-color-child-active);
 `),b("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Pe("disabled",[Pe("selected, child-active",[g("&:focus-within",Mn)]),y("selected",[bt(null,[b("arrow","color: var(--n-arrow-color-active-hover);"),b("icon","color: var(--n-item-icon-color-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[g("a","color: var(--n-item-text-color-active-hover);"),b("extra","color: var(--n-item-text-color-active-hover);")])])]),y("child-active",[bt(null,[b("arrow","color: var(--n-arrow-color-child-active-hover);"),b("icon","color: var(--n-item-icon-color-child-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[g("a","color: var(--n-item-text-color-child-active-hover);"),b("extra","color: var(--n-item-text-color-child-active-hover);")])])]),y("selected",[bt(null,[g("&::before","background-color: var(--n-item-color-active-hover);")])]),bt(null,Mn)]),b("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),b("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),u("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[g("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[g("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),u("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[u("menu-item-content",`
 height: var(--n-item-height);
 `),u("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[oa({duration:".2s"})])]),u("menu-item-group",[u("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),u("menu-tooltip",[g("a",`
 color: inherit;
 text-decoration: none;
 `)]),u("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function bt(e,t){return[y("hover",e,t),g("&:hover",e,t)]}const Sr=V({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=ze(qt);return{menuProps:t,style:P(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:P(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:i}}=this,a=o?o(t.rawNode):We(this.icon);return l("div",{onClick:s=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},a&&l("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[a]),l("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(t.rawNode):We(this.title),this.extra||r?l("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):We(this.extra)):null),this.showArrow?l(at,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):l(Za,null)}):null)}}),oo=8;function Cn(e){const t=ze(qt),{props:o,mergedCollapsedRef:n}=t,r=ze(wn,null),i=ze(_n,null),a=P(()=>o.mode==="horizontal"),s=P(()=>a.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=P(()=>{var v;return Math.max((v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize,o.iconSize)}),c=P(()=>{var v;return!a.value&&e.root&&n.value&&(v=o.collapsedIconSize)!==null&&v!==void 0?v:o.iconSize}),h=P(()=>{if(a.value)return;const{collapsedWidth:v,indent:$,rootIndent:w}=o,{root:M,isGroup:D}=e,H=w===void 0?$:w;return M?n.value?v/2-d.value/2:H:i&&typeof i.paddingLeftRef.value=="number"?$/2+i.paddingLeftRef.value:r&&typeof r.paddingLeftRef.value=="number"?(D?$/2:$)+r.paddingLeftRef.value:0}),p=P(()=>{const{collapsedWidth:v,indent:$,rootIndent:w}=o,{value:M}=d,{root:D}=e;return a.value||!D||!n.value?oo:(w===void 0?$:w)+M+oo-(v+M)/2});return{dropdownPlacement:s,activeIconSize:c,maxIconSize:d,paddingLeft:h,iconMarginRight:p,NMenu:t,NSubmenu:r}}const Sn={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ad=V({name:"MenuDivider",setup(){const e=ze(qt),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:l("div",{class:`${t.value}-menu-divider`})}}),kr=Object.assign(Object.assign({},Sn),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),ld=hn(kr),sd=V({name:"MenuOption",props:kr,setup(e){const t=Cn(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:a}=n,s=o?o.mergedDisabledRef:{value:!1},d=P(()=>s.value||e.disabled);function c(p){const{onClick:v}=e;v&&v(p)}function h(p){d.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),c(p))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:Ye(()=>e.root&&a.value&&r.mode!=="horizontal"&&!d.value),selected:Ye(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:h}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r==null?void 0:r(o.rawNode);return l("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),l(bn,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):We(this.title),trigger:()=>l(Sr,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),zr=Object.assign(Object.assign({},Sn),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),dd=hn(zr),cd=V({name:"MenuOptionGroup",props:zr,setup(e){Ae(wn,null);const t=Cn(e);Ae(_n,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=ze(qt);return function(){const{value:r}=o,i=t.paddingLeft.value,{nodeProps:a}=n,s=a==null?void 0:a(e.tmNode.rawNode);return l("div",{class:`${r}-menu-item-group`,role:"group"},l("div",Object.assign({},s,{class:[`${r}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),We(e.title),e.extra?l(je,null," ",We(e.extra)):null),l("div",null,e.tmNodes.map(d=>kn(d,n))))}}});function on(e){return e.type==="divider"||e.type==="render"}function ud(e){return e.type==="divider"}function kn(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(on(o))return ud(o)?l(ad,Object.assign({key:e.key},o.props)):null;const{labelField:r}=t,{key:i,level:a,isGroup:s}=e,d=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:a,root:a===0,isGroup:s});return e.children?e.isGroup?l(cd,ro(d,dd,{tmNode:e,tmNodes:e.children,key:i})):l(nn,ro(d,hd,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):l(sd,ro(d,ld,{key:i,tmNode:e}))}const Rr=Object.assign(Object.assign({},Sn),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),hd=hn(Rr),nn=V({name:"Submenu",props:Rr,setup(e){const t=Cn(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:i,mergedThemeRef:a}=o,s=P(()=>{const{disabled:v}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:v}),d=E(!1);Ae(wn,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),Ae(_n,null);function c(){const{onClick:v}=e;v&&v()}function h(){s.value||(i.value||o.toggleExpand(e.internalKey),c())}function p(v){d.value=v}return{menuProps:r,mergedTheme:a,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:d,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:Ye(()=>{var v;return(v=e.virtualChildActive)!==null&&v!==void 0?v:o.activePathRef.value.includes(e.internalKey)}),collapsed:P(()=>r.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:P(()=>!s.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:p,handleClick:h}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:a,paddingLeft:s,collapsed:d,mergedDisabled:c,maxIconSize:h,activeIconSize:p,title:v,childActive:$,icon:w,handleClick:M,menuProps:{nodeProps:D},dropdownShow:H,iconMarginRight:U,tmNode:N,mergedClsPrefix:_,isEllipsisPlaceholder:x,extra:m}=this,A=D==null?void 0:D(N.rawNode);return l("div",Object.assign({},A,{class:[`${_}-menu-item`,A==null?void 0:A.class],role:"menuitem"}),l(Sr,{tmNode:N,paddingLeft:s,collapsed:d,disabled:c,iconMarginRight:U,maxIconSize:h,activeIconSize:p,title:v,extra:m,showArrow:!a,childActive:$,clsPrefix:_,icon:w,hover:H,onClick:M,isEllipsisPlaceholder:x}))},i=()=>l(na,null,{default:()=>{const{tmNodes:a,collapsed:s}=this;return s?null:l("div",{class:`${t}-submenu-children`,role:"menu"},a.map(d=>kn(d,this.menuProps)))}});return this.root?l(yn,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>l("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):l("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),i())}});function fd(e){Ne(()=>{e.items&&$e("menu","`items` is deprecated, please use `options` instead."),e.onOpenNamesChange&&$e("menu","`on-open-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.onSelect&&$e("menu","`on-select` is deprecated, please use `on-update:value` instead."),e.onExpandedNamesChange&&$e("menu","`on-expanded-names-change` is deprecated, please use `on-update:expanded-keys` instead."),e.expandedNames&&$e("menu","`expanded-names` is deprecated, please use `expanded-keys` instead."),e.defaultExpandedNames&&$e("menu","`default-expanded-names` is deprecated, please use `default-expanded-keys` instead.")})}const pd=Object.assign(Object.assign({},be.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),vd=V({name:"Menu",inheritAttrs:!1,props:pd,setup(e){fd(e);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Te(e),n=be("Menu","-menu",id,ra,e,t),r=ze(rd,null),i=P(()=>{var j;const{collapsed:G}=e;if(G!==void 0)return G;if(r){const{collapseModeRef:k,collapsedRef:X}=r;if(k.value==="width")return(j=X.value)!==null&&j!==void 0?j:!1}return!1}),a=P(()=>{const{keyField:j,childrenField:G,disabledField:k}=e;return ao(e.items||e.options,{getIgnored(X){return on(X)},getChildren(X){return X[G]},getDisabled(X){return X[k]},getKey(X){var ie;return(ie=X[j])!==null&&ie!==void 0?ie:X.name}})}),s=P(()=>new Set(a.value.treeNodes.map(j=>j.key))),{watchProps:d}=e,c=E(null);d!=null&&d.includes("defaultValue")?Ne(()=>{c.value=e.defaultValue}):c.value=e.defaultValue;const h=pe(e,"value"),p=Ue(h,c),v=E([]),$=()=>{v.value=e.defaultExpandAll?a.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||a.value.getPath(p.value,{includeSelf:!1}).keyPath};d!=null&&d.includes("defaultExpandedKeys")?Ne($):$();const w=uo(e,["expandedNames","expandedKeys"]),M=Ue(w,v),D=P(()=>a.value.treeNodes),H=P(()=>a.value.getPath(p.value).keyPath);Ae(qt,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:p,mergedExpandedKeysRef:M,activePathRef:H,mergedClsPrefixRef:t,isHorizontalRef:P(()=>e.mode==="horizontal"),invertedRef:pe(e,"inverted"),doSelect:U,toggleExpand:_});function U(j,G){const{"onUpdate:value":k,onUpdateValue:X,onSelect:ie}=e;X&&ne(X,j,G),k&&ne(k,j,G),ie&&ne(ie,j,G),c.value=j}function N(j){const{"onUpdate:expandedKeys":G,onUpdateExpandedKeys:k,onExpandedNamesChange:X,onOpenNamesChange:ie}=e;G&&ne(G,j),k&&ne(k,j),X&&ne(X,j),ie&&ne(ie,j),v.value=j}function _(j){const G=Array.from(M.value),k=G.findIndex(X=>X===j);if(~k)G.splice(k,1);else{if(e.accordion&&s.value.has(j)){const X=G.findIndex(ie=>s.value.has(ie));X>-1&&G.splice(X,1)}G.push(j)}N(G)}const x=j=>{const G=a.value.getPath(j??p.value,{includeSelf:!1}).keyPath;if(!G.length)return;const k=Array.from(M.value),X=new Set([...k,...G]);e.accordion&&s.value.forEach(ie=>{X.has(ie)&&!G.includes(ie)&&X.delete(ie)}),N(Array.from(X))},m=P(()=>{const{inverted:j}=e,{common:{cubicBezierEaseInOut:G},self:k}=n.value,{borderRadius:X,borderColorHorizontal:ie,fontSize:de,itemHeight:se,dividerColor:Re}=k,B={"--n-divider-color":Re,"--n-bezier":G,"--n-font-size":de,"--n-border-color-horizontal":ie,"--n-border-radius":X,"--n-item-height":se};return j?(B["--n-group-text-color"]=k.groupTextColorInverted,B["--n-color"]=k.colorInverted,B["--n-item-text-color"]=k.itemTextColorInverted,B["--n-item-text-color-hover"]=k.itemTextColorHoverInverted,B["--n-item-text-color-active"]=k.itemTextColorActiveInverted,B["--n-item-text-color-child-active"]=k.itemTextColorChildActiveInverted,B["--n-item-text-color-child-active-hover"]=k.itemTextColorChildActiveInverted,B["--n-item-text-color-active-hover"]=k.itemTextColorActiveHoverInverted,B["--n-item-icon-color"]=k.itemIconColorInverted,B["--n-item-icon-color-hover"]=k.itemIconColorHoverInverted,B["--n-item-icon-color-active"]=k.itemIconColorActiveInverted,B["--n-item-icon-color-active-hover"]=k.itemIconColorActiveHoverInverted,B["--n-item-icon-color-child-active"]=k.itemIconColorChildActiveInverted,B["--n-item-icon-color-child-active-hover"]=k.itemIconColorChildActiveHoverInverted,B["--n-item-icon-color-collapsed"]=k.itemIconColorCollapsedInverted,B["--n-item-text-color-horizontal"]=k.itemTextColorHorizontalInverted,B["--n-item-text-color-hover-horizontal"]=k.itemTextColorHoverHorizontalInverted,B["--n-item-text-color-active-horizontal"]=k.itemTextColorActiveHorizontalInverted,B["--n-item-text-color-child-active-horizontal"]=k.itemTextColorChildActiveHorizontalInverted,B["--n-item-text-color-child-active-hover-horizontal"]=k.itemTextColorChildActiveHoverHorizontalInverted,B["--n-item-text-color-active-hover-horizontal"]=k.itemTextColorActiveHoverHorizontalInverted,B["--n-item-icon-color-horizontal"]=k.itemIconColorHorizontalInverted,B["--n-item-icon-color-hover-horizontal"]=k.itemIconColorHoverHorizontalInverted,B["--n-item-icon-color-active-horizontal"]=k.itemIconColorActiveHorizontalInverted,B["--n-item-icon-color-active-hover-horizontal"]=k.itemIconColorActiveHoverHorizontalInverted,B["--n-item-icon-color-child-active-horizontal"]=k.itemIconColorChildActiveHorizontalInverted,B["--n-item-icon-color-child-active-hover-horizontal"]=k.itemIconColorChildActiveHoverHorizontalInverted,B["--n-arrow-color"]=k.arrowColorInverted,B["--n-arrow-color-hover"]=k.arrowColorHoverInverted,B["--n-arrow-color-active"]=k.arrowColorActiveInverted,B["--n-arrow-color-active-hover"]=k.arrowColorActiveHoverInverted,B["--n-arrow-color-child-active"]=k.arrowColorChildActiveInverted,B["--n-arrow-color-child-active-hover"]=k.arrowColorChildActiveHoverInverted,B["--n-item-color-hover"]=k.itemColorHoverInverted,B["--n-item-color-active"]=k.itemColorActiveInverted,B["--n-item-color-active-hover"]=k.itemColorActiveHoverInverted,B["--n-item-color-active-collapsed"]=k.itemColorActiveCollapsedInverted):(B["--n-group-text-color"]=k.groupTextColor,B["--n-color"]=k.color,B["--n-item-text-color"]=k.itemTextColor,B["--n-item-text-color-hover"]=k.itemTextColorHover,B["--n-item-text-color-active"]=k.itemTextColorActive,B["--n-item-text-color-child-active"]=k.itemTextColorChildActive,B["--n-item-text-color-child-active-hover"]=k.itemTextColorChildActiveHover,B["--n-item-text-color-active-hover"]=k.itemTextColorActiveHover,B["--n-item-icon-color"]=k.itemIconColor,B["--n-item-icon-color-hover"]=k.itemIconColorHover,B["--n-item-icon-color-active"]=k.itemIconColorActive,B["--n-item-icon-color-active-hover"]=k.itemIconColorActiveHover,B["--n-item-icon-color-child-active"]=k.itemIconColorChildActive,B["--n-item-icon-color-child-active-hover"]=k.itemIconColorChildActiveHover,B["--n-item-icon-color-collapsed"]=k.itemIconColorCollapsed,B["--n-item-text-color-horizontal"]=k.itemTextColorHorizontal,B["--n-item-text-color-hover-horizontal"]=k.itemTextColorHoverHorizontal,B["--n-item-text-color-active-horizontal"]=k.itemTextColorActiveHorizontal,B["--n-item-text-color-child-active-horizontal"]=k.itemTextColorChildActiveHorizontal,B["--n-item-text-color-child-active-hover-horizontal"]=k.itemTextColorChildActiveHoverHorizontal,B["--n-item-text-color-active-hover-horizontal"]=k.itemTextColorActiveHoverHorizontal,B["--n-item-icon-color-horizontal"]=k.itemIconColorHorizontal,B["--n-item-icon-color-hover-horizontal"]=k.itemIconColorHoverHorizontal,B["--n-item-icon-color-active-horizontal"]=k.itemIconColorActiveHorizontal,B["--n-item-icon-color-active-hover-horizontal"]=k.itemIconColorActiveHoverHorizontal,B["--n-item-icon-color-child-active-horizontal"]=k.itemIconColorChildActiveHorizontal,B["--n-item-icon-color-child-active-hover-horizontal"]=k.itemIconColorChildActiveHoverHorizontal,B["--n-arrow-color"]=k.arrowColor,B["--n-arrow-color-hover"]=k.arrowColorHover,B["--n-arrow-color-active"]=k.arrowColorActive,B["--n-arrow-color-active-hover"]=k.arrowColorActiveHover,B["--n-arrow-color-child-active"]=k.arrowColorChildActive,B["--n-arrow-color-child-active-hover"]=k.arrowColorChildActiveHover,B["--n-item-color-hover"]=k.itemColorHover,B["--n-item-color-active"]=k.itemColorActive,B["--n-item-color-active-hover"]=k.itemColorActiveHover,B["--n-item-color-active-collapsed"]=k.itemColorActiveCollapsed),B}),A=o?Oe("menu",P(()=>e.inverted?"a":"b"),m,e):void 0,R=Wn(),I=E(null),F=E(null);let Z=!0;const L=()=>{var j;Z?Z=!1:(j=I.value)===null||j===void 0||j.sync({showAllItemsBeforeCalculate:!0})};function ee(){return document.getElementById(R)}const Q=E(-1);function K(j){Q.value=e.options.length-j}function fe(j){j||(Q.value=-1)}const q=P(()=>{const j=Q.value;return{children:j===-1?[]:e.options.slice(j)}}),oe=P(()=>{const{childrenField:j,disabledField:G,keyField:k}=e;return ao([q.value],{getIgnored(X){return on(X)},getChildren(X){return X[j]},getDisabled(X){return X[G]},getKey(X){var ie;return(ie=X[k])!==null&&ie!==void 0?ie:X.name}})}),ye=P(()=>ao([{}]).treeNodes[0]);function ge(){var j;if(Q.value===-1)return l(nn,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:ye.value,domId:R,isEllipsisPlaceholder:!0});const G=oe.value.treeNodes[0],k=H.value,X=!!(!((j=G.children)===null||j===void 0)&&j.some(ie=>k.includes(ie.key)));return l(nn,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:X,tmNode:G,domId:R,rawNodes:G.rawNode.children||[],tmNodes:G.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:w,uncontrolledExpanededKeys:v,mergedExpandedKeys:M,uncontrolledValue:c,mergedValue:p,activePath:H,tmNodes:D,mergedTheme:n,mergedCollapsed:i,cssVars:o?void 0:m,themeClass:A==null?void 0:A.themeClass,overflowRef:I,counterRef:F,updateCounter:()=>{},onResize:L,onUpdateOverflow:fe,onUpdateCount:K,renderCounter:ge,getCounter:ee,onRender:A==null?void 0:A.onRender,showOption:x,deriveResponsiveState:L}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;n==null||n();const r=()=>this.tmNodes.map(d=>kn(d,this.$props)),a=t==="horizontal"&&this.responsive,s=()=>l("div",lt(this.$attrs,{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,a&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),a?l(Na,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:r,counter:this.renderCounter}):r());return a?l(Vt,{onResize:this.onResize},{default:s}):s()}}),bd=Object.assign(Object.assign({},be.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),md=V({name:"Scrollbar",props:bd,setup(){const e=E(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return l(vo,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),gd=u("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[b("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),b("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),b("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),u("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[so({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),b("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),b("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),b("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),g("&:focus",[b("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),y("round",[b("rail","border-radius: calc(var(--n-rail-height) / 2);",[b("button","border-radius: calc(var(--n-button-height) / 2);")])]),Pe("disabled",[Pe("icon",[y("rubber-band",[y("pressed",[b("rail",[b("button","max-width: var(--n-button-width-pressed);")])]),b("rail",[g("&:active",[b("button","max-width: var(--n-button-width-pressed);")])]),y("active",[y("pressed",[b("rail",[b("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),b("rail",[g("&:active",[b("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),y("active",[b("rail",[b("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),b("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[b("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[so()]),b("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),y("active",[b("rail","background-color: var(--n-rail-color-active);")]),y("loading",[b("rail",`
 cursor: wait;
 `)]),y("disabled",[b("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),xd=Object.assign(Object.assign({},be.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let Ot;const $r=V({name:"Switch",props:xd,slots:Object,setup(e){Ne(()=>{e.onChange&&$e("switch","`on-change` is deprecated, please use `on-update:value` instead.")}),Ot===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?Ot=CSS.supports("width","max(1px)"):Ot=!1:Ot=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Te(e),n=be("Switch","-switch",gd,nd,e,t),r=bo(e),{mergedSizeRef:i,mergedDisabledRef:a}=r,s=E(e.defaultValue),d=pe(e,"value"),c=Ue(d,s),h=P(()=>c.value===e.checkedValue),p=E(!1),v=E(!1),$=P(()=>{const{railStyle:R}=e;if(R)return R({focused:v.value,checked:h.value})});function w(R){const{"onUpdate:value":I,onChange:F,onUpdateValue:Z}=e,{nTriggerFormInput:L,nTriggerFormChange:ee}=r;I&&ne(I,R),Z&&ne(Z,R),F&&ne(F,R),s.value=R,L(),ee()}function M(){const{nTriggerFormFocus:R}=r;R()}function D(){const{nTriggerFormBlur:R}=r;R()}function H(){e.loading||a.value||(c.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue))}function U(){v.value=!0,M()}function N(){v.value=!1,D(),p.value=!1}function _(R){e.loading||a.value||R.key===" "&&(c.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue),p.value=!1)}function x(R){e.loading||a.value||R.key===" "&&(R.preventDefault(),p.value=!0)}const m=P(()=>{const{value:R}=i,{self:{opacityDisabled:I,railColor:F,railColorActive:Z,buttonBoxShadow:L,buttonColor:ee,boxShadowFocus:Q,loadingColor:K,textColor:fe,iconColor:q,[ce("buttonHeight",R)]:oe,[ce("buttonWidth",R)]:ye,[ce("buttonWidthPressed",R)]:ge,[ce("railHeight",R)]:j,[ce("railWidth",R)]:G,[ce("railBorderRadius",R)]:k,[ce("buttonBorderRadius",R)]:X},common:{cubicBezierEaseInOut:ie}}=n.value;let de,se,Re;return Ot?(de=`calc((${j} - ${oe}) / 2)`,se=`max(${j}, ${oe})`,Re=`max(${G}, calc(${G} + ${oe} - ${j}))`):(de=Do((He(j)-He(oe))/2),se=Do(Math.max(He(j),He(oe))),Re=He(j)>He(oe)?G:Do(He(G)+He(oe)-He(j))),{"--n-bezier":ie,"--n-button-border-radius":X,"--n-button-box-shadow":L,"--n-button-color":ee,"--n-button-width":ye,"--n-button-width-pressed":ge,"--n-button-height":oe,"--n-height":se,"--n-offset":de,"--n-opacity-disabled":I,"--n-rail-border-radius":k,"--n-rail-color":F,"--n-rail-color-active":Z,"--n-rail-height":j,"--n-rail-width":G,"--n-width":Re,"--n-box-shadow-focus":Q,"--n-loading-color":K,"--n-text-color":fe,"--n-icon-color":q}}),A=o?Oe("switch",P(()=>i.value[0]),m,e):void 0;return{handleClick:H,handleBlur:N,handleFocus:U,handleKeyup:_,handleKeydown:x,mergedRailStyle:$,pressed:p,mergedClsPrefix:t,mergedValue:c,checked:h,mergedDisabled:a,cssVars:o?void 0:m,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:o,mergedRailStyle:n,onRender:r,$slots:i}=this;r==null||r();const{checked:a,unchecked:s,icon:d,"checked-icon":c,"unchecked-icon":h}=i,p=!(Mo(d)&&Mo(c)&&Mo(h));return l("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,o&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},l("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},Le(a,v=>Le(s,$=>v||$?l("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},l("div",{class:`${e}-switch__rail-placeholder`},l("div",{class:`${e}-switch__button-placeholder`}),v),l("div",{class:`${e}-switch__rail-placeholder`},l("div",{class:`${e}-switch__button-placeholder`}),$)):null)),l("div",{class:`${e}-switch__button`},Le(d,v=>Le(c,$=>Le(h,w=>l(an,null,{default:()=>this.loading?l(jn,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&($||v)?l("div",{class:`${e}-switch__button-icon`,key:$?"checked-icon":"icon"},$||v):!this.checked&&(w||v)?l("div",{class:`${e}-switch__button-icon`,key:w?"unchecked-icon":"icon"},w||v):null})))),Le(a,v=>v&&l("div",{key:"checked",class:`${e}-switch__checked`},v)),Le(s,v=>v&&l("div",{key:"unchecked",class:`${e}-switch__unchecked`},v)))))}}),Pr=Ge("n-tabs"),yd={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},wd=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ia(yd,["displayDirective"])),fo=V({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:wd,setup(e){const{mergedClsPrefixRef:t,valueRef:o,typeRef:n,closableRef:r,tabStyleRef:i,addTabStyleRef:a,tabClassRef:s,addTabClassRef:d,tabChangeIdRef:c,onBeforeLeaveRef:h,triggerRef:p,handleAdd:v,activateTab:$,handleClose:w}=ze(Pr);return{trigger:p,mergedClosable:P(()=>{if(e.internalAddable)return!1;const{closable:M}=e;return M===void 0?r.value:M}),style:i,addStyle:a,tabClass:s,addTabClass:d,clsPrefix:t,value:o,type:n,handleClose(M){M.stopPropagation(),!e.disabled&&w(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){v();return}const{name:M}=e,D=++c.id;if(M!==o.value){const{value:H}=h;H?Promise.resolve(H(e.name,o.value)).then(U=>{U&&c.id===D&&$(M)}):$(M)}}}},render(){const{internalAddable:e,clsPrefix:t,name:o,disabled:n,label:r,tab:i,value:a,mergedClosable:s,trigger:d,$slots:{default:c}}=this,h=r??i;return l("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?l("div",{class:`${t}-tabs-tab-pad`}):null,l("div",Object.assign({key:o,"data-name":o,"data-disabled":n?!0:void 0},lt({class:[`${t}-tabs-tab`,a===o&&`${t}-tabs-tab--active`,n&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:d==="click"?this.activateTab:void 0,onMouseenter:d==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),l("span",{class:`${t}-tabs-tab__label`},e?l(je,null,l("div",{class:`${t}-tabs-tab__height-placeholder`}," "),l(at,{clsPrefix:t},{default:()=>l(Xa,null)})):c?c():typeof h=="object"?h:We(h??o)),s&&this.type==="card"?l(Zn,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:n}):null))}}),_d=u("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[y("segment-type",[u("tabs-rail",[g("&.transition-disabled",[u("tabs-capsule",`
 transition: none;
 `)])])]),y("top",[u("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),y("left",[u("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),y("left, right",`
 flex-direction: row;
 `,[u("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),u("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),y("right",`
 flex-direction: row-reverse;
 `,[u("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),u("tabs-bar",`
 left: 0;
 `)]),y("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[u("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),u("tabs-bar",`
 top: 0;
 `)]),u("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[u("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),u("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[u("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[y("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),g("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),y("flex",[u("tabs-nav",`
 width: 100%;
 position: relative;
 `,[u("tabs-wrapper",`
 width: 100%;
 `,[u("tabs-tab",`
 margin-right: 0;
 `)])])]),u("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[b("prefix, suffix",`
 display: flex;
 align-items: center;
 `),b("prefix","padding-right: 16px;"),b("suffix","padding-left: 16px;")]),y("top, bottom",[u("tabs-nav-scroll-wrapper",[g("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),g("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),y("shadow-start",[g("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),y("shadow-end",[g("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),y("left, right",[u("tabs-nav-scroll-content",`
 flex-direction: column;
 `),u("tabs-nav-scroll-wrapper",[g("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),g("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),y("shadow-start",[g("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),y("shadow-end",[g("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),u("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[u("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[g("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),g("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),u("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),u("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),u("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),u("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("disabled",{cursor:"not-allowed"}),b("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),b("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),u("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[g("&.transition-disabled",`
 transition: none;
 `),y("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),u("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),u("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[g("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),g("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),g("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),g("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),g("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),u("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),y("line-type, bar-type",[u("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[g("&:hover",{color:"var(--n-tab-text-color-hover)"}),y("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),y("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),u("tabs-nav",[y("line-type",[y("top",[b("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),u("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),u("tabs-bar",`
 bottom: -1px;
 `)]),y("left",[b("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),u("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),u("tabs-bar",`
 right: -1px;
 `)]),y("right",[b("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),u("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),u("tabs-bar",`
 left: -1px;
 `)]),y("bottom",[b("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),u("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),u("tabs-bar",`
 top: -1px;
 `)]),b("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),u("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),u("tabs-bar",`
 border-radius: 0;
 `)]),y("card-type",[b("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),u("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),u("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),u("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[y("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[b("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Pe("disabled",[g("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),y("closable","padding-right: 8px;"),y("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),y("disabled","color: var(--n-tab-text-color-disabled);")])]),y("left, right",`
 flex-direction: column; 
 `,[b("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),u("tabs-wrapper",`
 flex-direction: column;
 `),u("tabs-tab-wrapper",`
 flex-direction: column;
 `,[u("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),y("top",[y("card-type",[u("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),b("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),u("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[y("active",`
 border-bottom: 1px solid #0000;
 `)]),u("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),u("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),y("left",[y("card-type",[u("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),b("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),u("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[y("active",`
 border-right: 1px solid #0000;
 `)]),u("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),u("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),y("right",[y("card-type",[u("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),b("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),u("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[y("active",`
 border-left: 1px solid #0000;
 `)]),u("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),u("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),y("bottom",[y("card-type",[u("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),b("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),u("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[y("active",`
 border-top: 1px solid #0000;
 `)]),u("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),u("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Cd=Object.assign(Object.assign({},be.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Sd=V({name:"Tabs",props:Cd,slots:Object,setup(e,{slots:t}){var o,n,r,i;Ne(()=>{e.labelSize!==void 0&&$e("tabs","`label-size` is deprecated, please use `size` instead."),e.activeName!==void 0&&$e("tabs","`active-name` is deprecated, please use `value` instead."),e.onActiveNameChange!==void 0&&$e("tabs","`on-active-name-change` is deprecated, please use `on-update:value` instead.")});const{mergedClsPrefixRef:a,inlineThemeDisabled:s}=Te(e),d=be("Tabs","-tabs",_d,aa,e,a),c=E(null),h=E(null),p=E(null),v=E(null),$=E(null),w=E(null),M=E(!0),D=E(!0),H=uo(e,["labelSize","size"]),U=uo(e,["activeName","value"]),N=E((n=(o=U.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&n!==void 0?n:t.default?(i=(r=io(t.default())[0])===null||r===void 0?void 0:r.props)===null||i===void 0?void 0:i.name:null),_=Ue(U,N),x={id:0},m=P(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Fe(_,()=>{x.id=0,Z(),L()});function A(){var C;const{value:S}=_;return S===null?null:(C=c.value)===null||C===void 0?void 0:C.querySelector(`[data-name="${S}"]`)}function R(C){if(e.type==="card")return;const{value:S}=h;if(!S)return;const O=S.style.opacity==="0";if(C){const W=`${a.value}-tabs-bar--disabled`,{barWidth:le,placement:ve}=e;if(C.dataset.disabled==="true"?S.classList.add(W):S.classList.remove(W),["top","bottom"].includes(ve)){if(F(["top","maxHeight","height"]),typeof le=="number"&&C.offsetWidth>=le){const Se=Math.floor((C.offsetWidth-le)/2)+C.offsetLeft;S.style.left=`${Se}px`,S.style.maxWidth=`${le}px`}else S.style.left=`${C.offsetLeft}px`,S.style.maxWidth=`${C.offsetWidth}px`;S.style.width="8192px",O&&(S.style.transition="none"),S.offsetWidth,O&&(S.style.transition="",S.style.opacity="1")}else{if(F(["left","maxWidth","width"]),typeof le=="number"&&C.offsetHeight>=le){const Se=Math.floor((C.offsetHeight-le)/2)+C.offsetTop;S.style.top=`${Se}px`,S.style.maxHeight=`${le}px`}else S.style.top=`${C.offsetTop}px`,S.style.maxHeight=`${C.offsetHeight}px`;S.style.height="8192px",O&&(S.style.transition="none"),S.offsetHeight,O&&(S.style.transition="",S.style.opacity="1")}}}function I(){if(e.type==="card")return;const{value:C}=h;C&&(C.style.opacity="0")}function F(C){const{value:S}=h;if(S)for(const O of C)S.style[O]=""}function Z(){if(e.type==="card")return;const C=A();C?R(C):I()}function L(){var C;const S=(C=$.value)===null||C===void 0?void 0:C.$el;if(!S)return;const O=A();if(!O)return;const{scrollLeft:W,offsetWidth:le}=S,{offsetLeft:ve,offsetWidth:Se}=O;W>ve?S.scrollTo({top:0,left:ve,behavior:"smooth"}):ve+Se>W+le&&S.scrollTo({top:0,left:ve+Se-le,behavior:"smooth"})}const ee=E(null);let Q=0,K=null;function fe(C){const S=ee.value;if(S){Q=C.getBoundingClientRect().height;const O=`${Q}px`,W=()=>{S.style.height=O,S.style.maxHeight=O};K?(W(),K(),K=null):K=W}}function q(C){const S=ee.value;if(S){const O=C.getBoundingClientRect().height,W=()=>{document.body.offsetHeight,S.style.maxHeight=`${O}px`,S.style.height=`${Math.max(Q,O)}px`};K?(K(),K=null,W()):K=W}}function oe(){const C=ee.value;if(C){C.style.maxHeight="",C.style.height="";const{paneWrapperStyle:S}=e;if(typeof S=="string")C.style.cssText=S;else if(S){const{maxHeight:O,height:W}=S;O!==void 0&&(C.style.maxHeight=O),W!==void 0&&(C.style.height=W)}}}const ye={value:[]},ge=E("next");function j(C){const S=_.value;let O="next";for(const W of ye.value){if(W===S)break;if(W===C){O="prev";break}}ge.value=O,G(C)}function G(C){const{onActiveNameChange:S,onUpdateValue:O,"onUpdate:value":W}=e;S&&ne(S,C),O&&ne(O,C),W&&ne(W,C),N.value=C}function k(C){const{onClose:S}=e;S&&ne(S,C)}function X(){const{value:C}=h;if(!C)return;const S="transition-disabled";C.classList.add(S),Z(),C.classList.remove(S)}const ie=E(null);function de({transitionDisabled:C}){const S=c.value;if(!S)return;C&&S.classList.add("transition-disabled");const O=A();O&&ie.value&&(ie.value.style.width=`${O.offsetWidth}px`,ie.value.style.height=`${O.offsetHeight}px`,ie.value.style.transform=`translateX(${O.offsetLeft-He(getComputedStyle(S).paddingLeft)}px)`,C&&ie.value.offsetWidth),C&&S.classList.remove("transition-disabled")}Fe([_],()=>{e.type==="segment"&&nt(()=>{de({transitionDisabled:!1})})}),po(()=>{e.type==="segment"&&de({transitionDisabled:!0})});let se=0;function Re(C){var S;if(C.contentRect.width===0&&C.contentRect.height===0||se===C.contentRect.width)return;se=C.contentRect.width;const{type:O}=e;if((O==="line"||O==="bar")&&X(),O!=="segment"){const{placement:W}=e;dt((W==="top"||W==="bottom"?(S=$.value)===null||S===void 0?void 0:S.$el:w.value)||null)}}const B=Oo(Re,64);Fe([()=>e.justifyContent,()=>e.size],()=>{nt(()=>{const{type:C}=e;(C==="line"||C==="bar")&&X()})});const Ee=E(!1);function st(C){var S;const{target:O,contentRect:{width:W,height:le}}=C,ve=O.parentElement.parentElement.offsetWidth,Se=O.parentElement.parentElement.offsetHeight,{placement:qe}=e;if(!Ee.value)qe==="top"||qe==="bottom"?ve<W&&(Ee.value=!0):Se<le&&(Ee.value=!0);else{const{value:Xe}=v;if(!Xe)return;qe==="top"||qe==="bottom"?ve-W>Xe.$el.offsetWidth&&(Ee.value=!1):Se-le>Xe.$el.offsetHeight&&(Ee.value=!1)}dt(((S=$.value)===null||S===void 0?void 0:S.$el)||null)}const Tt=Oo(st,64);function Bt(){const{onAdd:C}=e;C&&C(),nt(()=>{const S=A(),{value:O}=$;!S||!O||O.scrollTo({left:S.offsetLeft,top:0,behavior:"smooth"})})}function dt(C){if(!C)return;const{placement:S}=e;if(S==="top"||S==="bottom"){const{scrollLeft:O,scrollWidth:W,offsetWidth:le}=C;M.value=O<=0,D.value=O+le>=W}else{const{scrollTop:O,scrollHeight:W,offsetHeight:le}=C;M.value=O<=0,D.value=O+le>=W}}const ct=Oo(C=>{dt(C.target)},64);Ae(Pr,{triggerRef:pe(e,"trigger"),tabStyleRef:pe(e,"tabStyle"),tabClassRef:pe(e,"tabClass"),addTabStyleRef:pe(e,"addTabStyle"),addTabClassRef:pe(e,"addTabClass"),paneClassRef:pe(e,"paneClass"),paneStyleRef:pe(e,"paneStyle"),mergedClsPrefixRef:a,typeRef:pe(e,"type"),closableRef:pe(e,"closable"),valueRef:_,tabChangeIdRef:x,onBeforeLeaveRef:pe(e,"onBeforeLeave"),activateTab:j,handleClose:k,handleAdd:Bt}),ka(()=>{Z(),L()}),Ne(()=>{const{value:C}=p;if(!C)return;const{value:S}=a,O=`${S}-tabs-nav-scroll-wrapper--shadow-start`,W=`${S}-tabs-nav-scroll-wrapper--shadow-end`;M.value?C.classList.remove(O):C.classList.add(O),D.value?C.classList.remove(W):C.classList.add(W)});const Me={syncBarPosition:()=>{Z()}},Nt=()=>{de({transitionDisabled:!0})},T=P(()=>{const{value:C}=H,{type:S}=e,O={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[S],W=`${C}${O}`,{self:{barColor:le,closeIconColor:ve,closeIconColorHover:Se,closeIconColorPressed:qe,tabColor:Xe,tabBorderColor:yo,paneTextColor:wo,tabFontWeight:_o,tabBorderRadius:Co,tabFontWeightActive:So,colorSegment:ko,fontWeightStrong:zo,tabColorSegment:Ro,closeSize:Et,closeIconSize:Xt,closeColorHover:$o,closeColorPressed:Po,closeBorderRadius:Ao,[ce("panePadding",C)]:yt,[ce("tabPadding",W)]:Io,[ce("tabPaddingVertical",W)]:Lt,[ce("tabGap",W)]:To,[ce("tabGap",`${W}Vertical`)]:Yt,[ce("tabTextColor",S)]:Bo,[ce("tabTextColorActive",S)]:wt,[ce("tabTextColorHover",S)]:_t,[ce("tabTextColorDisabled",S)]:No,[ce("tabFontSize",C)]:Eo},common:{cubicBezierEaseInOut:Zt}}=d.value;return{"--n-bezier":Zt,"--n-color-segment":ko,"--n-bar-color":le,"--n-tab-font-size":Eo,"--n-tab-text-color":Bo,"--n-tab-text-color-active":wt,"--n-tab-text-color-disabled":No,"--n-tab-text-color-hover":_t,"--n-pane-text-color":wo,"--n-tab-border-color":yo,"--n-tab-border-radius":Co,"--n-close-size":Et,"--n-close-icon-size":Xt,"--n-close-color-hover":$o,"--n-close-color-pressed":Po,"--n-close-border-radius":Ao,"--n-close-icon-color":ve,"--n-close-icon-color-hover":Se,"--n-close-icon-color-pressed":qe,"--n-tab-color":Xe,"--n-tab-font-weight":_o,"--n-tab-font-weight-active":So,"--n-tab-padding":Io,"--n-tab-padding-vertical":Lt,"--n-tab-gap":To,"--n-tab-gap-vertical":Yt,"--n-pane-padding-left":Ht(yt,"left"),"--n-pane-padding-right":Ht(yt,"right"),"--n-pane-padding-top":Ht(yt,"top"),"--n-pane-padding-bottom":Ht(yt,"bottom"),"--n-font-weight-strong":zo,"--n-tab-color-segment":Ro}}),ae=s?Oe("tabs",P(()=>`${H.value[0]}${e.type[0]}`),T,e):void 0;return Object.assign({mergedClsPrefix:a,mergedValue:_,renderedNames:new Set,segmentCapsuleElRef:ie,tabsPaneWrapperRef:ee,tabsElRef:c,barElRef:h,addTabInstRef:v,xScrollInstRef:$,scrollWrapperElRef:p,addTabFixed:Ee,tabWrapperStyle:m,handleNavResize:B,mergedSize:H,handleScroll:ct,handleTabsResize:Tt,cssVars:s?void 0:T,themeClass:ae==null?void 0:ae.themeClass,animationDirection:ge,renderNameListRef:ye,yScrollElRef:w,handleSegmentResize:Nt,onAnimationBeforeLeave:fe,onAnimationEnter:q,onAnimationAfterEnter:oe,onRender:ae==null?void 0:ae.onRender},Me)},render(){const{mergedClsPrefix:e,type:t,placement:o,addTabFixed:n,addable:r,mergedSize:i,renderNameListRef:a,onRender:s,paneWrapperClass:d,paneWrapperStyle:c,$slots:{default:h,prefix:p,suffix:v}}=this;s==null||s();const $=h?io(h()).filter(x=>x.type.__TAB_PANE__===!0):[],w=h?io(h()).filter(x=>x.type.__TAB__===!0):[],M=!w.length,D=t==="card",H=t==="segment",U=!D&&!H&&this.justifyContent;a.value=[];const N=()=>{const x=l("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},U?null:l("div",{class:`${e}-tabs-scroll-padding`,style:o==="top"||o==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),M?$.map((m,A)=>(a.value.push(m.props.name),Uo(l(fo,Object.assign({},m.props,{internalCreatedByPane:!0,internalLeftPadded:A!==0&&(!U||U==="center"||U==="start"||U==="end")}),m.children?{default:m.children.tab}:void 0)))):w.map((m,A)=>(a.value.push(m.props.name),Uo(A!==0&&!U?Hn(m):m))),!n&&r&&D?On(r,(M?$.length:w.length)!==0):null,U?null:l("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return l("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},D&&r?l(Vt,{onResize:this.handleTabsResize},{default:()=>x}):x,D?l("div",{class:`${e}-tabs-pad`}):null,D?null:l("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},_=H?"top":o;return l("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${i}-size`,U&&`${e}-tabs--flex`,`${e}-tabs--${_}`],style:this.cssVars},l("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${_}`,`${e}-tabs-nav`]},Le(p,x=>x&&l("div",{class:`${e}-tabs-nav__prefix`},x)),H?l(Vt,{onResize:this.handleSegmentResize},{default:()=>l("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},l("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},l("div",{class:`${e}-tabs-wrapper`},l("div",{class:`${e}-tabs-tab`}))),M?$.map((x,m)=>(a.value.push(x.props.name),l(fo,Object.assign({},x.props,{internalCreatedByPane:!0,internalLeftPadded:m!==0}),x.children?{default:x.children.tab}:void 0))):w.map((x,m)=>(a.value.push(x.props.name),m===0?x:Hn(x))))}):l(Vt,{onResize:this.handleNavResize},{default:()=>l("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(_)?l(Ta,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:N}):l("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},N()))}),n&&r&&D?On(r,!0):null,Le(v,x=>x&&l("div",{class:`${e}-tabs-nav__suffix`},x))),M&&(this.animated&&(_==="top"||_==="bottom")?l("div",{ref:"tabsPaneWrapperRef",style:c,class:[`${e}-tabs-pane-wrapper`,d]},Fn($,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Fn($,this.mergedValue,this.renderedNames)))}});function Fn(e,t,o,n,r,i,a){const s=[];return e.forEach(d=>{const{name:c,displayDirective:h,"display-directive":p}=d.props,v=w=>h===w||p===w,$=t===c;if(d.key!==void 0&&(d.key=c),$||v("show")||v("show:lazy")&&o.has(c)){o.has(c)||o.add(c);const w=!v("if");s.push(w?Rt(d,[[co,$]]):d)}}),a?l(la,{name:`${a}-transition`,onBeforeLeave:n,onEnter:r,onAfterEnter:i},{default:()=>s}):s}function On(e,t){return l(fo,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function Hn(e){const t=sa(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Uo(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const kd=u("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[y("strong",`
 font-weight: var(--n-font-weight-strong);
 `),y("italic",{fontStyle:"italic"}),y("underline",{textDecoration:"underline"}),y("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),zd=Object.assign(Object.assign({},be.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>(xt("text","`as` is deprecated, please use `tag` instead."),!0),default:void 0}}),Rd=V({name:"Text",props:zd,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Te(e),n=be("Typography","-text",kd,da,e,t),r=P(()=>{const{depth:a,type:s}=e,d=s==="default"?a===void 0?"textColor":`textColor${a}Depth`:ce("textColor",s),{common:{fontWeightStrong:c,fontFamilyMono:h,cubicBezierEaseInOut:p},self:{codeTextColor:v,codeBorderRadius:$,codeColor:w,codeBorder:M,[d]:D}}=n.value;return{"--n-bezier":p,"--n-text-color":D,"--n-font-weight-strong":c,"--n-font-famliy-mono":h,"--n-code-border-radius":$,"--n-code-text-color":v,"--n-code-color":w,"--n-code-border":M}}),i=o?Oe("text",P(()=>`${e.type[0]}${e.depth||""}`),r,e):void 0;return{mergedClsPrefix:t,compitableTag:uo(e,["as","tag"]),cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,t,o;const{mergedClsPrefix:n}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=[`${n}-text`,this.themeClass,{[`${n}-text--code`]:this.code,[`${n}-text--delete`]:this.delete,[`${n}-text--strong`]:this.strong,[`${n}-text--italic`]:this.italic,[`${n}-text--underline`]:this.underline}],i=(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t);return this.code?l("code",{class:r,style:this.cssVars},this.delete?l("del",null,i):i):this.delete?l("del",{class:r,style:this.cssVars},i):l(this.compitableTag||"span",{class:r,style:this.cssVars},i)}});function $d(e){return{SvgIconVNode:o=>{const{color:n,fontSize:r,icon:i,localIcon:a}=o,s={};if(n&&(s.color=n),r&&(s.fontSize=`${r}px`),!(!i&&!a))return()=>l(e,{icon:i,localIcon:a,style:s})}}}function Ar(){const{SvgIconVNode:e}=$d(At);return{SvgIconVNode:e}}function Pd(e){const t=[];return e.forEach(o=>{var n;(n=o.children)==null||n.forEach(r=>{var i;r.component&&((i=r.meta)!=null&&i.keepAlive)&&t.push(r.name)})}),t}function Ir(e,t=[]){return e&&e.length===0?[]:e.reduce((o,n)=>(n.children||o.push(n),n.children&&n.children.length>0&&Ir(n.children,t),o),t)}function Ad(e){const{SvgIconVNode:t}=Ar(),{name:o,path:n}=e,{title:r,i18nKey:i,icon:a=void 0,localIcon:s,iconFontSize:d}=e.meta??{},c=i?ke(i):r;return{key:o,label:c,i18nKey:i,routeKey:o,routePath:n,icon:t({icon:a,localIcon:s,fontSize:d||20})}}function Tr(e){const t=[];return e.forEach(o=>{var n,r;if(!((n=o.meta)!=null&&n.hideInMenu)){const i=Ad(o);(r=o.children)!=null&&r.some(a=>{var s;return!((s=a.meta)!=null&&s.hideInMenu)})&&(i.children=Tr(o.children)),t.push(i)}}),t}const zn=ca(ua.Route,()=>{const{bool:e,setBool:t}=Qn(),o=E([]),n=P(()=>Ir(o.value));function r(d){o.value=Tr(d),o.value}const i=E([]);function a(d){i.value=Pd(d)}async function s(d){e.value||(r(d),a(d),t(!0))}return{menus:o,searchMenus:n,cacheRoutes:i,isInitConstantRoute:e,initRoute:s,getGlobalMenus:r}}),Id=V({name:"GlobalContent",__name:"index",props:{showPadding:{type:Boolean,required:!1,default:!0}},setup(e,{expose:t}){t();const o=Pt(),n=zn(),r={appStore:o,routeStore:n};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function Td(e,t,o,n,r,i){const a=Jn("RouterView");return J(),he(a,null,{default:re(({Component:s,route:d})=>[Y($t,{name:"fade",mode:"out-in"},{default:re(()=>[(J(),he(ha,{include:n.routeStore.cacheRoutes},[n.appStore.reloadFlag?(J(),he(er(s),{key:d.fullPath,class:fn([{"p-16px":o.showPadding},"flex-grow bg-layout transition-300"])},null,8,["class"])):Ie("v-if",!0)],1032,["include"]))]),_:2},1024)]),_:1})}const Bd=Ce(Id,[["render",Td],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/global-content/index.vue"]]),Nd=V({__name:"index",setup(e,{expose:t}){t();const n={currentYear:new Date().getFullYear(),get NSpace(){return za},get NText(){return Rd}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Ed={class:"w-full bg-white dark:bg-#18181c border-t border-gray-200 dark:border-gray-700 py-6"},Ld={class:"max-w-screen-md mx-auto px-4 text-center"};function Md(e,t,o,n,r,i){return J(),_e("footer",Ed,[ue("div",Ld,[Y(n.NSpace,{vertical:"",size:"small"},{default:re(()=>[Y(n.NText,{depth:"3",class:"text-sm"},{default:re(()=>[Ke(" © "+Be(n.currentYear)+" 您的公司名称. 保留所有权利 ",1)]),_:1}),Y(n.NSpace,{justify:"center",size:"medium"},{default:re(()=>[Y(n.NText,{tag:"a",href:"#",depth:"3",class:"text-sm hover:text-primary cursor-pointer"},{default:re(()=>t[0]||(t[0]=[Ke(" 隐私政策 ")])),_:1,__:[0]}),Y(n.NText,{tag:"a",href:"#",depth:"3",class:"text-sm hover:text-primary cursor-pointer"},{default:re(()=>t[1]||(t[1]=[Ke(" 服务条款 ")])),_:1,__:[1]}),Y(n.NText,{tag:"a",href:"#",depth:"3",class:"text-sm hover:text-primary cursor-pointer"},{default:re(()=>t[2]||(t[2]=[Ke(" 联系我们 ")])),_:1,__:[2]})]),_:1})]),_:1})])])}const Dd=Ce(Nd,[["render",Md],["__scopeId","data-v-28e88ec6"],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/global-footer/index.vue"]]),Fd=V({name:"DarkModeContainer",__name:"dark-mode-container",props:{inverted:{type:Boolean,required:!1}},setup(e,{expose:t}){t();const o={};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function Od(e,t,o,n,r,i){return J(),_e("div",{class:fn(["bg-container text-base-text transition-300",{"bg-inverted text-#1f1f1f":o.inverted}])},[Ut(e.$slots,"default")],2)}const Hd=Ce(Fd,[["render",Od],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/components/common/dark-mode-container.vue"]]),Vd=V({name:"ButtonIcon",inheritAttrs:!1,__name:"button-icon",props:{class:{type:String,required:!1,default:""},icon:{type:String,required:!1,default:""},tooltipContent:{type:String,required:!1,default:""},tooltipPlacement:{type:null,required:!1,default:"bottom"},zIndex:{type:Number,required:!1,default:98}},setup(e,{expose:t}){t();const n={props:e};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),jd={class:"flex-center gap-8px"};function Ud(e,t,o,n,r,i){const a=At,s=ot,d=bn;return J(),he(d,{placement:o.tooltipPlacement,"z-index":o.zIndex,disabled:!o.tooltipContent},{trigger:re(()=>[Y(s,lt({quaternary:"",class:`h-[36px] text-icon, ${n.props.class}`},e.$attrs),{default:re(()=>[ue("div",jd,[Ut(e.$slots,"default",{},()=>[Y(a,{icon:o.icon},null,8,["icon"])])])]),_:3},16,["class"])]),default:re(()=>[Ke(" "+Be(o.tooltipContent),1)]),_:3},8,["placement","z-index","disabled"])}const It=Ce(Vd,[["render",Ud],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/components/custom/button-icon.vue"]]),Kd=V({name:"LangSwitch",__name:"lang-switch",props:{lang:{type:null,required:!0},langOptions:{type:Array,required:!0},showTooltip:{type:Boolean,required:!1,default:!0}},emits:["changeLang"],setup(e,{expose:t,emit:o}){t();const n=e,r=o,i=P(()=>n.showTooltip?ke("icon.lang"):""),a=P(()=>{const c=n.langOptions.length-1;return n.langOptions.map((h,p)=>({...h,props:{class:p<c?"mb-1":void 0}}))});function s(c){r("changeLang",c)}const d={props:n,emit:r,tooltipContent:i,dropdownOptions:a,changeLang:s};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}});function Wd(e,t,o,n,r,i){const a=At,s=It,d=yn;return J(),he(d,{value:o.lang,options:n.dropdownOptions,trigger:"hover",onSelect:n.changeLang},{default:re(()=>[ue("div",null,[Y(s,{"tooltip-content":n.tooltipContent,"tooltip-placement":"left"},{default:re(()=>[Y(a,{icon:"heroicons:language"})]),_:1},8,["tooltip-content"])])]),_:1},8,["value","options"])}const Gd=Ce(Kd,[["render",Wd],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/components/common/lang-switch.vue"]]),qd={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function Xd(e,t){return J(),_e("svg",qd,t[0]||(t[0]=[ue("path",{fill:"currentColor",d:"M21 3v6h-2V6.41l-3.29 3.3l-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3l1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29l-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29l-1.41-1.42L5 17.59V15H3v6z"},null,-1)]))}const Yd=Ze({name:"gridicons-fullscreen",render:Xd}),Zd={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function Qd(e,t){return J(),_e("svg",Zd,t[0]||(t[0]=[ue("path",{fill:"currentColor",d:"M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z"},null,-1)]))}const Jd=Ze({name:"gridicons-fullscreen-exit",render:Qd}),ec=V({name:"FullScreen",__name:"full-screen",props:{full:{type:Boolean,required:!1}},setup(e,{expose:t}){t();const o={get $t(){return ke}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function tc(e,t,o,n,r,i){const a=Jd,s=Yd,d=It;return J(),he(d,{key:String(o.full),"tooltip-content":o.full?n.$t("icon.fullscreenExit"):n.$t("icon.fullscreen")},{default:re(()=>[o.full?(J(),he(a,{key:0})):(J(),he(s,{key:1}))]),_:1},8,["tooltip-content"])}const oc=Ce(ec,[["render",tc],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/components/common/full-screen.vue"]]),nc=V({name:"SystemLogo",__name:"system-logo",setup(e,{expose:t}){t();const o={};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function rc(e,t,o,n,r,i){const a=At;return J(),he(a,{"local-icon":"logo"})}const ic=Ce(nc,[["render",rc],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/components/common/system-logo.vue"]]),ac=V({name:"GlobalLogo",__name:"index",props:{showTitle:{type:Boolean,required:!1,default:!0}},setup(e,{expose:t}){t();const o={get $t(){return ke}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function lc(e,t,o,n,r,i){const a=ic,s=Jn("RouterLink");return J(),he(s,{to:"/",class:"flex-center nowrap-hidden"},{default:re(()=>[Y(a,{class:"text-32px text-primary"}),Rt(ue("h2",{class:"pl-8px text-16px text-primary font-bold transition duration-300 ease-in-out"},Be(n.$t("system.title")),513),[[co,o.showTitle]])]),_:1})}const Br=Ce(ac,[["render",lc],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/global-logo/index.vue"]]),sc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function dc(e,t){return J(),_e("svg",sc,t[0]||(t[0]=[tr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5h-14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M19 12h-9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19h-14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M7 9l-3 3l3 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path></g>',1)]))}const cc=Ze({name:"line-md-menu-fold-left",render:dc}),uc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function hc(e,t){return J(),_e("svg",uc,t[0]||(t[0]=[tr('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M5 5h14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M5 12h9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M5 19h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M17 9l3 3l-3 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path></g>',1)]))}const fc=Ze({name:"line-md-menu-fold-right",render:hc}),pc=V({__name:"index",setup(e,{expose:t}){t();const o=fa(),n=Pt(),r=zn(),i=Gt(),{routerPushByKeyWithMetaQuery:a}=or(),s=P(()=>n.isMobile),d=P(()=>{const{hideInMenu:v,activeMenu:$}=o.meta,w=o.name;return(v?$:w)||w}),c=E(!1),h=P(()=>i.themeScheme==="dark"),p={route:o,appStore:n,routeStore:r,themeStore:i,routerPushByKeyWithMetaQuery:a,isMobile:s,selectedKey:d,isVisible:c,inverted:h,GlobalLogo:Br};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}});function vc(e,t,o,n,r,i){const a=vd,s=fc,d=cc,c=mr,h=Cr,p=_r;return J(),_e(je,null,[n.isMobile?Ie("v-if",!0):(J(),he(a,{key:0,value:n.selectedKey,mode:"horizontal",options:n.routeStore.menus,indent:18,inverted:n.inverted,responsive:"","onUpdate:value":n.routerPushByKeyWithMetaQuery,class:"flex-1 mx-6"},null,8,["value","options","inverted","onUpdate:value"])),n.isMobile?(J(),he(c,{key:1,size:"20",onClick:t[0]||(t[0]=v=>n.isVisible=!n.isVisible)},{default:re(()=>[n.isVisible?(J(),he(d,{key:1})):(J(),he(s,{key:0}))]),_:1})):Ie("v-if",!0),n.isMobile?(J(),he(p,{key:2,show:n.isVisible,"onUpdate:show":t[2]||(t[2]=v=>n.isVisible=v),width:"80%",placement:"left"},{default:re(()=>[Y(h,{"body-content-class":"pa-0!"},{header:re(()=>[Y(n.GlobalLogo)]),default:re(()=>[Y(a,{value:n.selectedKey,"onUpdate:value":[t[1]||(t[1]=v=>n.selectedKey=v),n.routerPushByKeyWithMetaQuery],mode:"vertical",options:n.routeStore.menus,inverted:n.inverted},null,8,["value","options","inverted","onUpdate:value"])]),_:1})]),_:1},8,["show"])):Ie("v-if",!0)],64)}const bc=Ce(pc,[["render",vc],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/global-menu/index.vue"]]),mc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function gc(e,t){return J(),_e("svg",mc,t[0]||(t[0]=[ue("path",{fill:"currentColor",d:"M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7"},null,-1)]))}const Nr=Ze({name:"uil-search",render:gc}),xc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function yc(e,t){return J(),_e("svg",xc,t[0]||(t[0]=[ue("path",{fill:"currentColor",d:"M1 7h6v2H3v2h4v2H3v2h4v2H1zm10 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m8 0h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2"},null,-1)]))}const wc=Ze({name:"mdi-keyboard-esc",render:yc}),_c={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function Cc(e,t){return J(),_e("svg",_c,t[0]||(t[0]=[ue("path",{fill:"currentColor",d:"M7.03 13.92h4V5l2.01-.03v8.95h3.99l-5 5Z"},null,-1)]))}const Sc=Ze({name:"mdi-arrow-down-thin",render:Cc}),kc={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function zc(e,t){return J(),_e("svg",kc,t[0]||(t[0]=[ue("path",{fill:"currentColor",d:"M7.03 9.97h4v8.92l2.01.03V9.97h3.99l-5-5Z"},null,-1)]))}const Rc=Ze({name:"mdi-arrow-up-thin",render:zc}),$c={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function Pc(e,t){return J(),_e("svg",$c,t[0]||(t[0]=[ue("path",{fill:"currentColor",d:"M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7z"},null,-1)]))}const Ac=Ze({name:"mdi-keyboard-return",render:Pc}),Ic=V({name:"SearchFooter",__name:"search-footer",setup(e,{expose:t}){t();const o={get $t(){return ke}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),Tc={class:"h-44px flex-y-center gap-14px px-24px"},Bc={class:"flex-y-center"},Nc={class:"flex-y-center"},Ec={class:"flex-y-center"};function Lc(e,t,o,n,r,i){const a=Ac,s=Rc,d=Sc,c=wc;return J(),_e("div",Tc,[ue("span",Bc,[Y(a,{class:"operate-shadow operate-item"}),ue("span",null,Be(n.$t("common.confirm")),1)]),ue("span",Nc,[Y(s,{class:"operate-shadow operate-item"}),Y(d,{class:"operate-shadow operate-item"}),ue("span",null,Be(n.$t("common.switch")),1)]),ue("span",Ec,[Y(c,{class:"operate-shadow operate-item"}),ue("span",null,Be(n.$t("common.close")),1)])])}const Mc=Ce(Ic,[["render",Lc],["__scopeId","data-v-03f6386d"],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/global-search/components/search-footer.vue"]]),Dc={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"};function Fc(e,t){return J(),_e("svg",Dc,t[0]||(t[0]=[ue("path",{fill:"currentColor",d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8"},null,-1)]))}const Oc=Ze({name:"ant-design-enter-outlined",render:Fc}),Hc=V({name:"SearchResult",__name:"search-result",props:Rn({options:{type:Array,required:!0}},{path:{type:String,required:!0},pathModifiers:{}}),emits:Rn(["enter"],["update:path"]),setup(e,{expose:t,emit:o}){t();const n=o,r=Gt(),i=nr(e,"path");async function a(c){i.value=c.routePath}function s(){n("enter")}const d={emit:n,theme:r,active:i,handleMouseEnter:a,handleTo:s,get $t(){return ke}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),Vc={class:"pb-12px"},jc=["onMouseenter"],Uc={class:"ml-5px flex-1"};function Kc(e,t,o,n,r,i){const a=Oc,s=md;return J(),he(s,null,{default:re(()=>[ue("div",Vc,[(J(!0),_e(je,null,pn(o.options,d=>(J(),_e("div",{key:d.routePath,class:"mt-8px h-56px flex-y-center cursor-pointer justify-between rounded-4px bg-#e5e7eb px-14px dark:bg-dark",style:pa({background:d.routePath===n.active?n.theme.themeColor:"",color:d.routePath===n.active?"#fff":""}),onClick:n.handleTo,onMouseenter:c=>n.handleMouseEnter(d)},[(J(),he(er(d.icon))),ue("span",Uc,Be(d.i18nKey&&n.$t(d.i18nKey)||d.label),1),Y(a,{class:"icon mr-3px p-2px text-20px"})],44,jc))),128))])]),_:1})}const Wc=Ce(Hc,[["render",Kc],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/global-search/components/search-result.vue"]]),Gc=V({name:"SearchModal",__name:"search-modal",props:{show:{type:Boolean,required:!0},showModifiers:{}},emits:["update:show"],setup(e,{expose:t}){t();const o=va(),n=Pt(),r=zn(),i=P(()=>n.isMobile),a=E(""),s=E(""),d=ba([]),c=ma(p,300),h=nr(e,"show");function p(){var N;d.value=r.searchMenus.filter(_=>{const x=a.value.toLocaleLowerCase().trim(),m=(_.i18nKey?ke(_.i18nKey):_.label).toLocaleLowerCase();return x&&m.includes(x)}),s.value=((N=d.value[0])==null?void 0:N.routePath)??""}function v(){setTimeout(()=>{h.value=!1,d.value=[],a.value=""},200)}function $(){const{length:N}=d.value;if(N===0)return;const _=M();if(_===-1)return;const x=_===0?N-1:_-1;s.value=d.value[x].routePath}function w(){const{length:N}=d.value;if(N===0)return;const _=M();if(_===-1)return;const x=_===N-1?0:_+1;s.value=d.value[x].routePath}function M(){return d.value.findIndex(N=>N.routePath===s.value)}function D(){var N;((N=d.value)==null?void 0:N.length)===0||s.value===""||(v(),o.push(s.value))}function H(){Qt("Escape",v),Qt("Enter",D),Qt("ArrowUp",$),Qt("ArrowDown",w)}H();const U={router:o,appStore:n,routeStore:r,isMobile:i,keyword:a,activePath:s,resultOptions:d,handleSearch:c,visible:h,search:p,handleClose:v,handleUp:$,handleDown:w,getActivePathIndex:M,handleEnter:D,registerShortcut:H,SearchFooter:Mc,SearchResult:Wc,get $t(){return ke}};return Object.defineProperty(U,"__isScriptSetup",{enumerable:!1,value:!0}),U}}),qc={class:"mt-20px"};function Xc(e,t,o,n,r,i){const a=Nr,s=fr,d=ot,c=pr,h=Al,p=ga;return J(),he(p,{show:n.visible,"onUpdate:show":t[2]||(t[2]=v=>n.visible=v),segmented:{footer:"soft"},closable:!1,preset:"card","auto-focus":"","footer-style":"padding: 0; margin: 0",class:fn(["fixed left-0 right-0",[n.isMobile?"size-full top-0px rounded-0":"w-630px top-50px"]]),onAfterLeave:n.handleClose},{footer:re(()=>[n.isMobile?Ie("v-if",!0):(J(),he(n.SearchFooter,{key:0}))]),default:re(()=>[Y(c,null,{default:re(()=>[Y(s,{value:n.keyword,"onUpdate:value":t[0]||(t[0]=v=>n.keyword=v),clearable:"",placeholder:n.$t("common.keywordSearch"),onInput:n.handleSearch},{prefix:re(()=>[Y(a,{class:"text-15px text-#c2c2c2"})]),_:1},8,["value","placeholder","onInput"]),n.isMobile?(J(),he(d,{key:0,type:"primary",ghost:"",onClick:n.handleClose},{default:re(()=>[Ke(Be(n.$t("common.cancel")),1)]),_:1})):Ie("v-if",!0)]),_:1}),ue("div",qc,[n.resultOptions.length===0?(J(),he(h,{key:0,description:n.$t("common.noData")},null,8,["description"])):(J(),he(n.SearchResult,{key:1,path:n.activePath,"onUpdate:path":t[1]||(t[1]=v=>n.activePath=v),options:n.resultOptions,onEnter:n.handleEnter},null,8,["path","options"]))])]),_:1},8,["show","class"])}const Yc=Ce(Gc,[["render",Xc],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/global-search/components/search-modal.vue"]]),Zc=V({name:"GlobalSearch",__name:"index",setup(e,{expose:t}){t();const{bool:o,toggle:n}=Qn(),r={show:o,toggle:n,SearchModal:Yc,get $t(){return ke}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function Qc(e,t,o,n,r,i){const a=Nr,s=It;return J(),_e(je,null,[Y(s,{"tooltip-content":n.$t("common.search"),onClick:n.toggle},{default:re(()=>[Y(a)]),_:1},8,["tooltip-content","onClick"]),Y(n.SearchModal,{show:n.show,"onUpdate:show":t[0]||(t[0]=d=>n.show=d)},null,8,["show"])],64)}const Jc=Ce(Zc,[["render",Qc],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/global-search/index.vue"]]),eu=V({name:"ThemeButton",__name:"theme-button",setup(e,{expose:t}){t();const n={appStore:Pt(),get $t(){return ke}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}});function tu(e,t,o,n,r,i){const a=It;return J(),he(a,{icon:"majesticons:color-swatch-line","tooltip-content":n.$t("icon.themeConfig"),onClick:n.appStore.openThemeDrawer},null,8,["tooltip-content","onClick"])}const ou=Ce(eu,[["render",tu],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/global-header/components/theme-button.vue"]]),nu=V({name:"UserAvatar",__name:"user-avatar",setup(e,{expose:t}){t();const o=xa(),{routerPushByKey:n,toLogin:r}=or(),{SvgIconVNode:i}=Ar();function a(){r()}const s=P(()=>[{label:ke("common.userCenter"),key:"UserCenter",icon:i({icon:"ph:user-circle",fontSize:18})},{type:"divider",key:"divider"},{label:ke("common.logout"),key:"logout",icon:i({icon:"ph:sign-out",fontSize:18})}]);function d(){var p;(p=window.$dialog)==null||p.info({title:ke("common.tip"),content:ke("common.logoutConfirm"),positiveText:ke("common.confirm"),negativeText:ke("common.cancel"),onPositiveClick:()=>{o.resetStore()}})}function c(p){p==="logout"?d():n(p)}const h={authStore:o,routerPushByKey:n,toLogin:r,SvgIconVNode:i,loginOrRegister:a,options:s,logout:d,handleDropdown:c,get $t(){return ke}};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),ru={class:"text-16px font-medium"};function iu(e,t,o,n,r,i){const a=ot,s=At,d=It,c=yn;return n.authStore.isLogin?(J(),he(c,{key:1,placement:"bottom",trigger:"click",options:n.options,onSelect:n.handleDropdown},{default:re(()=>[ue("div",null,[Y(d,null,{default:re(()=>[Y(s,{icon:"ph:user-circle",class:"text-lg"}),ue("span",ru,Be(n.authStore.userInfo.userName),1)]),_:1})])]),_:1},8,["options"])):(J(),he(a,{key:0,quaternary:"",onClick:n.loginOrRegister},{default:re(()=>[Ke(Be(n.$t("page.login.common.loginOrRegister")),1)]),_:1}))}const au=Ce(nu,[["render",iu],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/global-header/components/user-avatar.vue"]]),lu=V({name:"ThemeSchemaSwitch",__name:"theme-schema-switch",props:{themeSchema:{type:null,required:!0},showTooltip:{type:Boolean,required:!1,default:!0},tooltipPlacement:{type:null,required:!1,default:"bottom"}},emits:["switch"],setup(e,{expose:t,emit:o}){t();const n=e,r=o;function i(){r("switch")}const a={light:"material-symbols:sunny",dark:"material-symbols:nightlight-rounded",auto:"material-symbols:hdr-auto"},s=P(()=>a[n.themeSchema]),d=P(()=>n.showTooltip?ke("icon.themeSchema"):""),c={props:n,emit:r,handleSwitch:i,icons:a,icon:s,tooltipContent:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}});function su(e,t,o,n,r,i){const a=It;return J(),he(a,{icon:n.icon,"tooltip-content":n.tooltipContent,"tooltip-placement":o.tooltipPlacement,onClick:n.handleSwitch},null,8,["icon","tooltip-content","tooltip-placement"])}const du=Ce(lu,[["render",su],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/components/common/theme-schema-switch.vue"]]),cu=V({name:"GlobalHeader",__name:"index",setup(e,{expose:t}){t();const o=Pt(),n=Gt(),{isFullscreen:r,toggle:i}=ya(),a={appStore:o,themeStore:n,isFullscreen:r,toggle:i,GlobalLogo:Br,GlobalMenu:bc,GlobalSearch:Jc,ThemeButton:ou,UserAvatar:au,ThemeSchemaSwitch:du};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),uu={class:"max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between"},hu={class:"flex items-center space-x-2"};function fu(e,t,o,n,r,i){const a=oc,s=Gd,d=Hd;return J(),he(d,{class:"px-12px shadow-header sticky top-0 z-50"},{default:re(()=>[ue("header",uu,[Ie(" 左侧：Logo和系统名称 "),n.appStore.isMobile?Ie("v-if",!0):(J(),he(n.GlobalLogo,{key:0,class:"h-full"})),Ie(" 中间：导航菜单 "),Y(n.GlobalMenu),Ie(" 右侧：操作区 "),ue("div",hu,[Ie(" 搜索按钮 "),Y(n.GlobalSearch),Ie(" 全屏切换 "),n.appStore.isMobile?Ie("v-if",!0):(J(),he(a,{key:0,full:n.isFullscreen,onClick:n.toggle},null,8,["full","onClick"])),Ie(" 语言切换 "),Y(s,{lang:n.appStore.locale,"lang-options":n.appStore.localeOptions,onChangeLang:n.appStore.changeLocale},null,8,["lang","lang-options","onChangeLang"]),Ie(" 主题切换 "),Y(n.ThemeSchemaSwitch,{"theme-schema":n.themeStore.themeScheme,"is-dark":n.themeStore.darkMode,onSwitch:n.themeStore.toggleThemeScheme},null,8,["theme-schema","is-dark","onSwitch"]),Y(n.ThemeButton),Ie(" 用户头像 "),Y(n.UserAvatar)])])]),_:1})}const pu=Ce(cu,[["render",fu],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/global-header/index.vue"]]),vu=V({name:"SettingItem",__name:"setting-item",props:{label:{type:String,required:!0}},setup(e,{expose:t}){t();const o={};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),bu={class:"w-full flex-y-center justify-between"},mu={class:"pr-8px text-base-text"};function gu(e,t,o,n,r,i){return J(),_e("div",bu,[ue("div",null,[ue("span",mu,Be(o.label),1),Ut(e.$slots,"suffix")]),Ut(e.$slots,"default")])}const Er=Ce(vu,[["render",gu],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/theme-drawer/components/setting-item.vue"]]),xu=V({name:"DarkMode",__name:"dark-mode",setup(e,{expose:t}){t();const o=Gt(),n={light:"material-symbols:sunny",dark:"material-symbols:nightlight-rounded",auto:"material-symbols:hdr-auto"},r={light:"theme.themeSchema.light",dark:"theme.themeSchema.dark",auto:"theme.themeSchema.auto"};function i(c){o.setThemeScheme(c)}function a(c){o.setGrayscale(c)}function s(c){o.setColourWeakness(c)}const d={themeStore:o,icons:n,themeSchemaRecord:r,handleSegmentChange:i,handleGrayscaleChange:a,handleColourWeaknessChange:s,SettingItem:Er,get $t(){return ke}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),yu={class:"flex-col-stretch gap-16px"},wu={class:"i-flex-center"};function _u(e,t,o,n,r,i){const a=wr,s=At,d=fo,c=Sd,h=$r;return J(),_e(je,null,[Y(a,null,{default:re(()=>[Ke(Be(n.$t("theme.themeSchema.title")),1)]),_:1}),ue("div",yu,[ue("div",wu,[(J(),he(c,{key:n.themeStore.themeScheme,type:"segment",size:"small",class:"relative w-214px",value:n.themeStore.themeScheme,"onUpdate:value":n.handleSegmentChange},{default:re(()=>[(J(),_e(je,null,pn(n.themeSchemaRecord,(p,v)=>Y(d,{key:v,name:v},{default:re(()=>[Y(s,{icon:n.icons[v],class:"h-23px text-icon-small"},null,8,["icon"])]),_:2},1032,["name"])),64))]),_:1},8,["value"]))]),Y(n.SettingItem,{label:n.$t("theme.grayscale")},{default:re(()=>[Y(h,{value:n.themeStore.grayscale,"onUpdate:value":n.handleGrayscaleChange},null,8,["value"])]),_:1},8,["label"]),Y(n.SettingItem,{label:n.$t("theme.colourWeakness")},{default:re(()=>[Y(h,{value:n.themeStore.colourWeakness,"onUpdate:value":n.handleColourWeaknessChange},null,8,["value"])]),_:1},8,["label"])])],64)}const Cu=Ce(xu,[["render",_u],["__scopeId","data-v-3090231e"],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/theme-drawer/modules/dark-mode.vue"]]),Su=V({name:"ThemeColor",__name:"theme-color",setup(e,{expose:t}){t();const o=Gt();function n(a,s){o.updateThemeColors(s,a)}const i={themeStore:o,handleUpdateColor:n,swatches:["#3b82f6","#6366f1","#8b5cf6","#a855f7","#0ea5e9","#06b6d4","#f43f5e","#ef4444","#ec4899","#d946ef","#f97316","#f59e0b","#eab308","#84cc16","#22c55e","#10b981"],SettingItem:Er,get $t(){return ke}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),ku={class:"flex-col-stretch gap-12px"},zu={class:"pr-12px"};function Ru(e,t,o,n,r,i){const a=wr,s=$r,d=ot,c=bn,h=Yl,p=_s;return J(),_e(je,null,[Y(a,null,{default:re(()=>[Ke(Be(n.$t("theme.themeColor.title")),1)]),_:1}),ue("div",ku,[Y(c,{placement:"top-start"},{trigger:re(()=>[Y(n.SettingItem,{key:"recommend-color",label:n.$t("theme.recommendColor")},{default:re(()=>[Y(s,{value:n.themeStore.recommendColor,"onUpdate:value":t[0]||(t[0]=v=>n.themeStore.recommendColor=v)},null,8,["value"])]),_:1},8,["label"])]),default:re(()=>[ue("p",null,[ue("span",zu,Be(n.$t("theme.recommendColorDesc")),1),t[3]||(t[3]=ue("br",null,null,-1)),Y(d,{text:"",tag:"a",href:"https://uicolors.app/create",target:"_blank",rel:"noopener noreferrer",class:"text-gray"},{default:re(()=>t[2]||(t[2]=[Ke(" https://uicolors.app/create ")])),_:1,__:[2]})])]),_:1}),(J(!0),_e(je,null,pn(n.themeStore.themeColors,(v,$)=>(J(),he(n.SettingItem,{key:$,label:n.$t(`theme.themeColor.${$}`)},wa({default:re(()=>[Y(p,{class:"w-90px",value:n.themeStore.themeColors[$],disabled:$==="info"&&n.themeStore.isInfoFollowPrimary,"show-alpha":!1,swatches:n.swatches,"onUpdate:value":w=>n.handleUpdateColor(w,$)},null,8,["value","disabled","onUpdate:value"])]),_:2},[$==="info"?{name:"suffix",fn:re(()=>[Y(h,{checked:n.themeStore.isInfoFollowPrimary,"onUpdate:checked":t[1]||(t[1]=w=>n.themeStore.isInfoFollowPrimary=w)},{default:re(()=>[Ke(Be(n.$t("theme.themeColor.followPrimary")),1)]),_:1},8,["checked"])]),key:"0"}:void 0]),1032,["label"]))),128))])],64)}const $u=Ce(Su,[["render",Ru],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/theme-drawer/modules/theme-color.vue"]]),Pu=V({name:"ThemeDrawer",__name:"index",setup(e,{expose:t}){t();const n={appStore:Pt(),DarkMode:Cu,ThemeColor:$u,get $t(){return ke}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}});function Au(e,t,o,n,r,i){const a=Cr,s=_r;return J(),he(s,{show:n.appStore.themeDrawerVisible,"onUpdate:show":t[0]||(t[0]=d=>n.appStore.themeDrawerVisible=d),"display-directive":"show",width:360},{default:re(()=>[Y(a,{title:n.$t("theme.themeDrawerTitle"),"native-scrollbar":!1,closable:""},{default:re(()=>[Y(n.DarkMode),Y(n.ThemeColor)]),_:1},8,["title"])]),_:1},8,["show"])}const Iu=Ce(Pu,[["render",Au],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/modules/theme-drawer/index.vue"]]),Tu=V({name:"BaseLayout",__name:"index",setup(e,{expose:t}){t();const n={handleBackTop:r=>{},GlobalContent:Bd,GlobalFooter:Dd,GlobalHeader:pu,ThemeDrawer:Iu};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}});function Bu(e,t,o,n,r,i){const a=Ul,s=td;return J(),he(s,{vertical:"",class:"size-full",size:0},{default:re(()=>[Y(n.GlobalHeader),Y(n.GlobalContent),Y(n.GlobalFooter),Y(n.ThemeDrawer),Y(a,{right:100,class:"z-3","onUpdate:show":n.handleBackTop})]),_:1})}const Mu=Ce(Tu,[["render",Bu],["__file","D:/Entertainment/Rouran/PAG/AlibabaCloud/electron-template/frontend/src/layouts/base-layout/index.vue"]]);export{Mu as default};
