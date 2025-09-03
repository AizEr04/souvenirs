import{t as g,p as e,v as l,a as n}from"./chunk-PVWAREVJ-C3l49en2.js";function L(){const t=g();return e.jsx("header",{className:"bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white shadow-lg",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-4 flex justify-between items-center",children:[e.jsx(l,{to:"/",className:"text-lg font-medium cursor-pointer hover:text-yellow-200 transition-colors",children:"SOUVENIR'S"}),e.jsxs("nav",{className:"flex space-x-6",children:[e.jsx(l,{to:"/ueber-uns",className:`hover:text-yellow-200 transition-colors ${t.pathname==="/ueber-uns"?"text-yellow-200":""}`,children:"Über uns"}),e.jsx(l,{to:"/infos",className:`hover:text-yellow-200 transition-colors ${t.pathname==="/infos"?"text-yellow-200":""}`,children:"Infos"}),e.jsx(l,{to:"/sponsoren",className:`hover:text-yellow-200 transition-colors ${t.pathname==="/sponsoren"?"text-yellow-200":""}`,children:"Sponsoren"})]})]})})}/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase()),d=t=>{const r=y(t);return r.charAt(0).toUpperCase()+r.slice(1)},m=(...t)=>t.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim(),v=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=n.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:i="",children:a,iconNode:h,...c},u)=>n.createElement("svg",{ref:u,...j,width:r,height:r,stroke:t,strokeWidth:o?Number(s)*24/Number(r):s,className:m("lucide",i),...!a&&!v(c)&&{"aria-hidden":"true"},...c},[...h.map(([p,f])=>n.createElement(p,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(t,r)=>{const s=n.forwardRef(({className:o,...i},a)=>n.createElement(b,{ref:a,iconNode:r,className:m(`lucide-${w(d(t))}`,`lucide-${t}`,o),...i}));return s.displayName=d(t),s};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],k=x("instagram",N);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],A=x("mail",C);function $(){return e.jsx("footer",{className:"bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white mt-auto shadow-2xl",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-8",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0",children:[e.jsxs("div",{className:"text-center md:text-left",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Hauptsponsor"}),e.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-lg shadow-md",children:e.jsx("span",{className:"font-medium",children:"Sponsor Name"})})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Kontakt"}),e.jsxs("div",{className:"flex space-x-4 justify-center",children:[e.jsx("a",{href:"https://instagram.com/souvenirs",target:"_blank",rel:"noopener noreferrer",className:"bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105","aria-label":"Instagram",children:e.jsx(k,{size:20})}),e.jsx("a",{href:"mailto:info@souvenirs.de",className:"bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105","aria-label":"E-Mail",children:e.jsx(A,{size:20})})]})]})]}),e.jsx("div",{className:"border-t border-gray-600 mt-6 pt-4 text-center text-gray-300",children:e.jsx("p",{children:"© 2024 Souvenir's Event Team. Alle Rechte vorbehalten."})})]})})}const I="/souvenirs/assets/image-d8ruW5kU.png";export{$ as F,L as H,I as i};
