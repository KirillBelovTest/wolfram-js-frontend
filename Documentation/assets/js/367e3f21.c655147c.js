"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[2388],{51256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=r(17624),i=r(4552);const s={env:["WLJS"],package:"wljs-graphics3d-threejs",source:"https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js",context:"JerryI`Notebook`Graphics3DUtils`"},o=void 0,c={id:"frontend/Reference/Graphics3D/Emissive",title:"Emissive",description:"specifies weather the material emits light",source:"@site/docs/frontend/Reference/Graphics3D/Emissive.md",sourceDirName:"frontend/Reference/Graphics3D",slug:"/frontend/Reference/Graphics3D/Emissive",permalink:"/frontend/Reference/Graphics3D/Emissive",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714824230,formattedLastUpdatedAt:"May 4, 2024",frontMatter:{env:["WLJS"],package:"wljs-graphics3d-threejs",source:"https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js",context:"JerryI`Notebook`Graphics3DUtils`"},sidebar:"tutorialSidebar",previous:{title:"Cylinder",permalink:"/frontend/Reference/Graphics3D/Cylinder"},next:{title:"GeometricTransformation",permalink:"/frontend/Reference/Graphics3D/GeometricTransformation"}},a={},h=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components},{Wl:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"specifies weather the material emits light"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-mathematica",children:"Emissive[color_RGBColor, intensity_:10]\n"})}),"\n",(0,n.jsx)(t.p,{children:"example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-mathematica",children:"Graphics3D[{\n    {Emissive[Red], Sphere[{0,0,2}]}, \n    {White, Sphere[]}\n}]\n"})}),"\n",(0,n.jsx)(r,{children:"Graphics3D[{{Emissive[Red], Sphere[{0,0,2}]}, {White, Sphere[]}}]"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["The best looking results can be achieved in a ",(0,n.jsx)(t.strong,{children:"Path-tracing mode"})," of ",(0,n.jsx)(t.a,{href:"/frontend/Reference/Graphics3D/",children:"Graphics3D"}),". Emissive materials cannot cast light to other objects in a normal rasterization mode, use artificial light sources such as ",(0,n.jsx)(t.a,{href:"/frontend/Reference/Graphics3D/SpotLight",children:"SpotLight"})," and ",(0,n.jsx)(t.a,{href:"/frontend/Reference/Graphics3D/PointLight",children:"PointLight"}),"..."]})})]})}function l(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,t,r)=>{r.d(t,{I:()=>c,M:()=>o});var n=r(11504);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);