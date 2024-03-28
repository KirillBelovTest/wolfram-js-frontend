"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[2808],{9308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(17624),r=t(4552);const a={env:["WLJS"],package:"wljs-graphics3d-threejs",context:"JerryI`Notebook`Graphics3DUtils`",source:"https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js"},c=void 0,i={id:"frontend/Reference/Graphics3D/Metalness",title:"Metalness",description:"specifies metallic property of a graphics primitive (see MeshPhysicalMaterial)",source:"@site/docs/frontend/Reference/Graphics3D/Metalness.md",sourceDirName:"frontend/Reference/Graphics3D",slug:"/frontend/Reference/Graphics3D/Metalness",permalink:"/frontend/Reference/Graphics3D/Metalness",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1711450580,formattedLastUpdatedAt:"Mar 26, 2024",frontMatter:{env:["WLJS"],package:"wljs-graphics3d-threejs",context:"JerryI`Notebook`Graphics3DUtils`",source:"https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js"},sidebar:"tutorialSidebar",previous:{title:"MeshToonMaterial",permalink:"/frontend/Reference/Graphics3D/MeshToonMaterial"},next:{title:"Opacity",permalink:"/frontend/Reference/Graphics3D/Opacity"}},h={},l=[];function o(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components},{Wl:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["specifies metallic property of a graphics primitive (see ",(0,s.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/MeshPhysicalMaterial",children:"MeshPhysicalMaterial"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"Metalness[i_Real]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["where ",(0,s.jsx)(n.code,{children:"i"})," can be between ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"1"}),". In real world it either ",(0,s.jsx)(n.code,{children:"1"})," or ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"An effect is more visible, when there is an HDR map is used"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"non-metallic"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'Graphics3D[{Metalness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]\n'})}),"\n",(0,s.jsx)(t,{data:"WyJHcmFwaGljczNEIixbIkxpc3QiLFsiTWV0YWxuZXNzIiwwXSxbIlNwaGVyZSIsWyJMaXN0Iiww\nLDAsMF1dXSxbIlJ1bGUiLCInTGlnaHRpbmcnIiwiTm9uZSJdLFsiUnVsZSIsIidMaWdodG1hcCci\nLCInaHR0cHM6XC9cL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb21cL0plcnJ5SVwvTWF0aGVtYXRp\nY2EtVGhyZWVKUy1ncmFwaGljcy1lbmdpbmVcL21hc3RlclwvYXNzZXRzXC9QdXJlU2t5Lmhkcici\nXV0=\n",children:'Graphics3D[{Metalness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"metallic"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'Graphics3D[{Metalness[1], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]\n'})}),"\n",(0,s.jsx)(t,{data:"WyJHcmFwaGljczNEIixbIkxpc3QiLFsiTWV0YWxuZXNzIiwxXSxbIlNwaGVyZSIsWyJMaXN0Iiww\nLDAsMF1dXSxbIlJ1bGUiLCInTGlnaHRpbmcnIiwiTm9uZSJdLFsiUnVsZSIsIidMaWdodG1hcCci\nLCInaHR0cHM6XC9cL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb21cL0plcnJ5SVwvTWF0aGVtYXRp\nY2EtVGhyZWVKUy1ncmFwaGljcy1lbmdpbmVcL21hc3RlclwvYXNzZXRzXC9QdXJlU2t5Lmhkcici\nXV0=\n",children:'Graphics3D[{Metalness[1], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"metallic and polished"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'Graphics3D[{Metalness[1], Roughness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]\n'})}),"\n",(0,s.jsx)(t,{data:"WyJHcmFwaGljczNEIixbIkxpc3QiLFsiTWV0YWxuZXNzIiwxXSxbIlJvdWdobmVzcyIsMF0sWyJT\ncGhlcmUiLFsiTGlzdCIsMCwwLDBdXV0sWyJSdWxlIiwiJ0xpZ2h0aW5nJyIsIk5vbmUiXSxbIlJ1\nbGUiLCInTGlnaHRtYXAnIiwiJ2h0dHBzOlwvXC9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tXC9K\nZXJyeUlcL01hdGhlbWF0aWNhLVRocmVlSlMtZ3JhcGhpY3MtZW5naW5lXC9tYXN0ZXJcL2Fzc2V0\nc1wvUHVyZVNreS5oZHInIl1d\n",children:'Graphics3D[{Metalness[1], Roughness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]'})]})}function d(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>c});var s=t(11504);const r={},a=s.createContext(r);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);