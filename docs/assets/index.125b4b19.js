var N=Object.defineProperty,L=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var w=(e,n,t)=>n in e?N(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,_=(e,n)=>{for(var t in n||(n={}))P.call(n,t)&&w(e,t,n[t]);if(v)for(var t of v(n))A.call(n,t)&&w(e,t,n[t]);return e},b=(e,n)=>L(e,I(n));import{a as k,j as r,b as c,R as h,u as T,I as E,r as d,B as M,c as j,F as R,T as g,m as C,d as D,e as z,f as $,g as B,h as F,i as u,C as W,D as U,k as V,M as X}from"./vendor.5772d2f7.js";const q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}};q();const H="modulepreload",S={},G="/",l=function(n,t){return!t||t.length===0?n():Promise.all(t.map(i=>{if(i=`${G}${i}`,i in S)return;S[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":H,s||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),s)return new Promise((f,m)=>{o.addEventListener("load",f),o.addEventListener("error",m)})})).then(()=>n())},O={"./fab.json":()=>l(()=>import("./fab.cbb1a4f4.js"),[]),"./fad.json":()=>l(()=>import("./fad.9f89b963.js"),[]),"./fal.json":()=>l(()=>import("./fal.5b373bdb.js"),[]),"./far.json":()=>l(()=>import("./far.a50c2141.js"),[]),"./fas.json":()=>l(()=>import("./fas.31dddccd.js"),[]),"./fat.json":()=>l(()=>import("./fat.83501efa.js"),[])};window.iconsLoaded=new Promise((e,n)=>{for(const t in O)O[t]().then(i=>{k(i)}).then(e).catch(n)});var J="/peepoTalk.gif",K="/peepoTalk-idle.png";function Y({talk:e}){return r("div",{className:"select-none -z-10 left-2 ",children:c("div",{className:"relative",children:[r("img",{id:"peepo-sings",style:{width:"10vw",marginLeft:"1vw",zIndex:1},src:e?J:K}),[{x:"50%",y:"35%"},{x:"25%",y:"50%"},{x:"60%",y:"65%"}].map((t,i)=>r(Q,{x:t.x,i,paused:!e},i))]})})}function Q({i:e,paused:n}){const t=h.useRef(null);T(a=>{var y,x;if(!t.current)return;if(n&&t.current.style.display!=="none"){t.current.style.display="none";return}else t.current.style.display!=="block"&&(t.current.style.display="block");a-2e3*e<0&&(t.current.style.opacity="0");const o=(a-2e3*e)%6e3;if(o<0)return;const f=(Math.sin(o/6e3-e*5)*25+o*.02)*(o/6e3)+((x=(y=t.current.parentElement)==null?void 0:y.clientWidth)!=null?x:0)*.75,m=t.current.clientHeight*.5+o/25;t.current.style.transform=`translateY(-${m}px) translateX(${f}px)`,t.current.style.opacity=`${1-o/6e3}`});const[i,s]=h.useState(Math.random()*8+22);return r("div",{ref:t,className:"absolute -z-10 bottom-0 left-0",children:r(E,{className:"text-green-500",fontSize:i,icon:"fas:music-note"})})}function Z(){var e="Unknown OS";return navigator.userAgent.indexOf("Win")!=-1&&(e="Windows"),navigator.userAgent.indexOf("Mac")!=-1&&(e="MacOS"),navigator.userAgent.indexOf("X11")!=-1&&(e="UNIX"),navigator.userAgent.indexOf("Linux")!=-1&&(e="Linux"),e}const ee=e=>{switch(e){case"MacOS":return"fab:apple";case"Windows":return"fab:windows";case"Linux":return"fab:linux";case"UNIX":return"fab:linux";default:return"fas:question"}};function te({onClick:e}){const[n,t]=d.exports.useState("Unknown OS");return d.exports.useEffect(()=>{t(Z())},[]),c(M,{onClick:()=>{e(n)},leftIcon:r(E,{icon:ee(n)}),variant:"gradient",gradient:{from:"indigo",to:"cyan",deg:30},children:["Download for ",n]})}function ne({}){const[e,n]=j(["Moods.","Playlists.","Music.","Streams.","Content.","Cum."]);return r(R,{children:c("div",{className:"flex flex-row items-center h-min gap-2 relative",children:[r(g,{order:2,children:"Stream Better With "}),r("div",{className:"text-twitch-accent-legend  inline-block overflow-hidden w-24 font-bold relative",style:{fontFamily:"Segoe UI",fontSize:26},children:r(C.span,{style:{bottom:0,height:"100%",left:0,textAlign:"center",verticalAlign:"baseline"},children:e})})]})})}function re({}){const e=D();return c("header",{className:"App-header flex flex-col gap-4",children:[c(g,{order:1,children:["The First"," ",c("span",{className:"text-twitch-main",children:[r(z,{className:"mr-2",icon:"fab:twitch"}),"Twitch"]}),"-Centric Music Player."]}),r(ne,{}),r("div",{className:"h-24"}),r(te,{onClick:n=>{e(`/${n.toLowerCase()}`)}})]})}function se(){const[e,n]=$(!1);return d.exports.useEffect(()=>n(!0),[]),r(B,{children:c("div",{className:"App",children:[c(F,{children:[r(u,{index:!0,element:r(re,{})}),r(u,{path:"Windows",element:r(p,{})}),r(u,{path:"MacOS",element:r(p,{})}),r(u,{path:"Linux",element:r(p,{})}),r(u,{path:"*",element:r(W,{className:"w-screen h-screen",children:r(g,{order:1,children:"404"})})})]}),r("div",{className:"fixed bottom-0 left-8",children:r(Y,{talk:e})})]})})}const p=()=>(d.exports.useEffect(()=>{window.location.assign("https://github.com/Jimmyboy-dev/PeepoSings/releases/latest")}),null),oe=b(_({},U),{colorScheme:"dark"});V.render(r(h.StrictMode,{children:r(X,{withNormalizeCSS:!0,withGlobalStyles:!0,theme:oe,children:r(se,{})})}),document.getElementById("root"));
