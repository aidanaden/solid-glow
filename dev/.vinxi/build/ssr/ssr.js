import{ssrElement as g,escape as d,mergeProps as q,ssr as p,renderToStream as M,getRequestEvent as F,createComponent as h,NoHydration as b,ssrHydrationKey as R,ssrAttribute as k}from"solid-js/web";import{getRequestURL as x,toWebRequest as H,getRequestIP as I,setResponseHeader as y,setResponseStatus as S,appendResponseHeader as N,getResponseHeader as L,removeResponseHeader as O,getCookie as P,setCookie as j,eventHandler as _,sendRedirect as B,setHeader as z}from"h3";import{lazy as J,createComponent as U,sharedConfig as w}from"solid-js";import{provideRequestEvent as W}from"solid-js/web/storage";const C=[],D=G(C.filter(e=>e.type==="page")),K=Q(C.filter(e=>e.type==="api"));function Y(e,s){const t=e.split("/").filter(Boolean);e:for(const n of K){const r=n.matchSegments;if(t.length<r.length||!n.wildcard&&t.length>r.length)continue;for(let i=0;i<r.length;i++){const l=r[i];if(l&&t[i]!==l)continue e}const a=n[`$${s}`];if(a==="skip"||a===void 0)return;const o={};for(const{type:i,name:l,index:c}of n.params)i===":"?o[l]=t[c]:o[l]=t.slice(c).join("/");return{handler:a,params:o}}}function G(e){function s(t,n,r,a){const o=Object.values(t).find(i=>r.startsWith(i.id+"/"));return o?(s(o.children||(o.children=[]),n,r.slice(o.id.length)),t):(t.push({...n,id:r,path:r.replace(/\/\([^)/]+\)/g,"")}),t)}return e.sort((t,n)=>t.path.length-n.path.length).reduce((t,n)=>s(t,n,n.path,n.path),[])}function Q(e){return e.flatMap(s=>T(s.path).map(n=>({...s,path:n}))).map(V).sort((s,t)=>t.score-s.score)}function T(e){let s=/(\/?\:[^\/]+)\?/.exec(e);if(!s)return[e];let t=e.slice(0,s.index),n=e.slice(s.index+s[0].length);const r=[t,t+=s[1]];for(;s=/^(\/\:[^\/]+)\?/.exec(n);)r.push(t+=s[1]),n=n.slice(s[0].length);return T(n).reduce((a,o)=>[...a,...r.map(i=>i+o)],[])}function V(e){const s=e.path.split("/").filter(Boolean),t=[],n=[];let r=0,a=!1;for(const[o,i]of s.entries())if(i[0]===":"){const l=i.slice(1);r+=3,t.push({type:":",name:l,index:o}),n.push(null)}else i[0]==="*"?(r-=1,t.push({type:"*",name:i.slice(1),index:o}),a=!0):(r+=4,i.match(/^\(.+\)$/)||n.push(i));return{...e,score:r,params:t,matchSegments:n,wildcard:a}}const E=Symbol("h3Event"),f=Symbol("fetchEvent"),X={get(e,s){return s===f?e:e[s]??e[E][s]}};function Z(e){return e.web||(e.web={url:x(e),request:H(e)}),new Proxy({request:e.web.request,clientAddress:I(e),locals:{},[E]:e},X)}function ee(e){if(!e[f]){const s=Z(e);e[f]=s}return e[f]}var te=" ";const ne={style:e=>g("style",e.attrs,()=>d(e.children),!0),link:e=>g("link",e.attrs,void 0,!0),script:e=>e.attrs.src?g("script",q(()=>e.attrs,{get id(){return e.key}}),()=>p(te),!0):null};function A(e){let{tag:s,attrs:{key:t,...n}={key:void 0},children:r}=e;return ne[s]({attrs:n,key:t,children:r})}function se(e,s,t,n="default"){return J(async()=>{{const a=(await e.import())[n],i=(await s.inputs?.[e.src].assets()).filter(c=>c.tag==="style"||c.attrs.rel==="stylesheet");return{default:c=>[...i.map(u=>A(u)),U(a,c)]}}})}function re(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,metadata:{...t.$$route?t.$$route.require().route.metadata:{},filesystem:!0},component:se(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return D.map(e)}function oe(e){const s=P(e,"flash");if(!s)return;let t=JSON.parse(s);if(!t||!t.result)return[];const n=[...t.input.slice(0,-1),new Map(t.input[t.input.length-1])];return j(e,"flash","",{maxAge:0}),{url:t.url,result:t.error?new Error(t.result):t.result,input:n}}async function ae(e){const s=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,y(e,"Content-Type","text/html"),Object.assign(e,{manifest:await s.json(),assets:[...await s.inputs[s.handler].assets()],initialSubmission:oe(e),routes:re(),components:{status:n=>(S(e,n.code,n.text),()=>S(e,200)),header:n=>(n.append?N(e,n.name,n.value):y(e,n.name,n.value),()=>{const r=L(e,n.name);if(r&&typeof r=="string"){const a=r.split(", "),o=a.indexOf(n.value);o!==-1&&a.splice(o,1),a.length?y(e,n.name,a.join(", ")):O(e,n.name)}})},$islands:new Set})}function ie(e,s={}){return _({onRequest:s.onRequest,onBeforeResponse:s.onBeforeResponse,handler:t=>{const n=ee(t);return W(n,async()=>{const r=Y(new URL(n.request.url).pathname,n.request.method);if(r){const m=(await r.handler.import())[n.request.method];return n.params=r.params,w.context={event:n},await m(n)}const a=await ae(n);let o={...s};if(o.onCompleteAll){const u=o.onCompleteAll;o.onCompleteAll=m=>{$(a)(m),u(m)}}else o.onCompleteAll=$(a);if(o.onCompleteShell){const u=o.onCompleteShell;o.onCompleteShell=m=>{v(a,t)(),u(m)}}else o.onCompleteShell=v(a,t);const i=M(()=>(w.context.event=a,e(a)),o);if(a.response&&a.response.headers.get("Location"))return B(n,a.response.headers.get("Location"));const{writable:l,readable:c}=new TransformStream;return i.pipeTo(l),c})}})}function v(e,s){return()=>{e.response&&e.response.headers.get("Location")&&(S(s,302),z(s,"Location",e.response.headers.get("Location")))}}function $(e){return({write:s})=>{const t=e.response&&e.response.headers.get("Location");t&&s(`<script>window.location="${t}"<\/script>`)}}var le=["<script",">","<\/script>"],ce=["<script",' type="module"',"><\/script>"];const ue=p("<!DOCTYPE html>");function me(e){const s=F();return h(b,{get children(){return[ue,h(e.document,{get assets(){return s.assets.map(t=>A(t))},get scripts(){return[p(le,R(),`window.manifest = ${JSON.stringify(s.manifest)}`),p(ce,R(),k("src",d(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path,!0),!1))]}})]}})}var pe=['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">',"</head>"],de=["<html",' lang="en">','<body><div id="app">',"</div><!--$-->","<!--/--></body></html>"];const Re=ie(()=>h(me,{document:({assets:e,children:s,scripts:t})=>p(de,R(),h(b,{get children(){return p(pe,d(e))}}),d(s),d(t))}));export{Re as default};