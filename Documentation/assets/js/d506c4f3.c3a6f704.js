"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[3092],{99748:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>t});var n=i(17624),d=i(4552);const c={env:["WLJS"],update:!0,package:"wljs-graphics-d3",source:"https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js"},l=void 0,a={id:"frontend/Reference/Graphics/Rectangle",title:"Rectangle",description:"represents a basic rectangle",source:"@site/docs/frontend/Reference/Graphics/Rectangle.md",sourceDirName:"frontend/Reference/Graphics",slug:"/frontend/Reference/Graphics/Rectangle",permalink:"/frontend/Reference/Graphics/Rectangle",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1711835414,formattedLastUpdatedAt:"Mar 30, 2024",frontMatter:{env:["WLJS"],update:!0,package:"wljs-graphics-d3",source:"https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js"},sidebar:"tutorialSidebar",previous:{title:"Raster",permalink:"/frontend/Reference/Graphics/Raster"},next:{title:"Rotate",permalink:"/frontend/Reference/Graphics/Rotate"}},r={},t=[{value:"Parameters",id:"parameters",level:2},{value:"<code>RGBColor</code>",id:"rgbcolor",level:3},{value:"<code>EdgeForm</code>",id:"edgeform",level:3},{value:"<code>Opacity</code>",id:"opacity",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>Area</code>",id:"area",level:3},{value:"<code>RegionCentroid</code>",id:"regioncentroid",level:3},{value:"<code>EventHandler</code>",id:"eventhandler",level:3},{value:"Dynamics",id:"dynamics",level:2},{value:"Example",id:"example",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.M)(),...e.components},{Wl:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-mathematica",children:"Rectangle[{xmin_, ymin_}, {xmax_, ymax_}]\n"})}),"\n",(0,n.jsx)(s.p,{children:"represents a basic rectangle"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-mathematica",children:"Graphics[{Red, Rectangle[{0, 0}], Blue, Rectangle[{0.5, 0.5}]}]\n"})}),"\n",(0,n.jsx)(i,{data:"WyJHcmFwaGljcyIsWyJMaXN0IixbIlJHQkNvbG9yIiwxLDAsMF0sWyJSZWN0YW5nbGUiLFsiTGlz\ndCIsMCwwXV0sWyJSR0JDb2xvciIsMCwwLDFdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDAuNSwwLjVd\nXV1d\n",children:"Graphics[{Red, Rectangle[{0, 0}], Blue, Rectangle[{0.5, 0.5}]}]"}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.h3,{id:"rgbcolor",children:(0,n.jsx)(s.code,{children:"RGBColor"})}),"\n",(0,n.jsx)(s.p,{children:"filling color"}),"\n",(0,n.jsx)(s.h3,{id:"edgeform",children:(0,n.jsx)(s.code,{children:"EdgeForm"})}),"\n",(0,n.jsx)(s.p,{children:"stroke color"}),"\n",(0,n.jsx)(s.h3,{id:"opacity",children:(0,n.jsx)(s.code,{children:"Opacity"})}),"\n",(0,n.jsx)(s.p,{children:"global opacity of an object"}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"area",children:(0,n.jsx)(s.code,{children:"Area"})}),"\n",(0,n.jsx)(s.p,{children:"Calculates total area (symbolically as well)"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-mathematica",children:"Area[Rectangle[{x1, y1}, {x2, y2}]]\n"})}),"\n",(0,n.jsx)(s.h3,{id:"regioncentroid",children:(0,n.jsx)(s.code,{children:"RegionCentroid"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-mathematica",children:"RegionCentroid[Rectangle[{x1, y1}, {x2, y2}]]\n"})}),"\n",(0,n.jsx)(s.h3,{id:"eventhandler",children:(0,n.jsx)(s.code,{children:"EventHandler"})}),"\n",(0,n.jsxs)(s.p,{children:["One can listen to a several events produced by this primitive using ",(0,n.jsx)(s.a,{href:"/frontend/Reference/Misc/Events#%60EventHandler%60",children:(0,n.jsx)(s.code,{children:"EventHandler"})})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-mathematica",children:"EventHandler[t_Rectangle, {event_ -> handler_, ...}]\n"})}),"\n",(0,n.jsxs)(s.p,{children:["where ",(0,n.jsx)(s.code,{children:"event"})," can be"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:'"mousemove"'})," detects and sends coordinates of a mouse, when it is over this element"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:'"drag"'})," makes primitive draggable and emits coordinates"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:'"zoom"'})," detects zoom / mouse-wheel"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:'"click"'})," detects mouse clicks"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"dynamics",children:"Dynamics"}),"\n",(0,n.jsxs)(s.p,{children:["It fully supports dynamics. Use ",(0,n.jsx)(s.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})," on coordinates."]}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.p,{children:"A simple bar chart"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-mathematica",children:"data = RandomReal[{3, 10}, {10, 2}];\n\nGraphics[{\n\tEdgeForm[Black], Blue, \n\tTable[{Blue, Rectangle[{i - .4, 0}, {i, data[[i, 1]]}], \n\tRed, Rectangle[{i + .4, 0}, {i, data[[i, 2]]}]}, {i, 10}]\n}, Frame -> True]\n"})}),"\n",(0,n.jsx)(i,{data:"WyJHcmFwaGljcyIsWyJMaXN0IixbIkVkZ2VGb3JtIixbIkdyYXlMZXZlbCIsMF1dLFsiUkdCQ29s\nb3IiLDAsMCwxXSxbIkxpc3QiLFsiTGlzdCIsWyJSR0JDb2xvciIsMCwwLDFdLFsiUmVjdGFuZ2xl\nIixbIkxpc3QiLDAuNiwwXSxbIkxpc3QiLDEsNy40MDMwMDgzNTg2Njk0MjhdXSxbIlJHQkNvbG9y\nIiwxLDAsMF0sWyJSZWN0YW5nbGUiLFsiTGlzdCIsMS40LDBdLFsiTGlzdCIsMSw0Ljc2Mjg2NjQ5\nMzAzNDc2NzVdXV0sWyJMaXN0IixbIlJHQkNvbG9yIiwwLDAsMV0sWyJSZWN0YW5nbGUiLFsiTGlz\ndCIsMS42LDBdLFsiTGlzdCIsMiw0Ljg0NjIzMTA3ODAxMDQ0Nl1dLFsiUkdCQ29sb3IiLDEsMCww\nXSxbIlJlY3RhbmdsZSIsWyJMaXN0IiwyLjQsMF0sWyJMaXN0IiwyLDUuNzM5NDgwNzg1MDY5MzI1\nNV1dXSxbIkxpc3QiLFsiUkdCQ29sb3IiLDAsMCwxXSxbIlJlY3RhbmdsZSIsWyJMaXN0IiwyLjYs\nMF0sWyJMaXN0IiwzLDUuNzE1MzAwNjM0OTQ5NTY4XV0sWyJSR0JDb2xvciIsMSwwLDBdLFsiUmVj\ndGFuZ2xlIixbIkxpc3QiLDMuNCwwXSxbIkxpc3QiLDMsNS42MTM5NTk2NjEzOTA4ODZdXV0sWyJM\naXN0IixbIlJHQkNvbG9yIiwwLDAsMV0sWyJSZWN0YW5nbGUiLFsiTGlzdCIsMy42LDBdLFsiTGlz\ndCIsNCwzLjMyNDU4NDMxMTUzODA4NzVdXSxbIlJHQkNvbG9yIiwxLDAsMF0sWyJSZWN0YW5nbGUi\nLFsiTGlzdCIsNC40LDBdLFsiTGlzdCIsNCw1LjczODc1NTE3MzczOTc5MzVdXV0sWyJMaXN0Iixb\nIlJHQkNvbG9yIiwwLDAsMV0sWyJSZWN0YW5nbGUiLFsiTGlzdCIsNC42LDBdLFsiTGlzdCIsNSw0\nLjgwODA1MTU1MzI0MTUwNV1dLFsiUkdCQ29sb3IiLDEsMCwwXSxbIlJlY3RhbmdsZSIsWyJMaXN0\nIiw1LjQsMF0sWyJMaXN0Iiw1LDQuNjMzODAxMDg0MTc4OTYxXV1dLFsiTGlzdCIsWyJSR0JDb2xv\nciIsMCwwLDFdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDUuNiwwXSxbIkxpc3QiLDYsOC41NzUwMzI1\nODIyMDk5MzddXSxbIlJHQkNvbG9yIiwxLDAsMF0sWyJSZWN0YW5nbGUiLFsiTGlzdCIsNi40LDBd\nLFsiTGlzdCIsNiw2LjUyOTI0MTA3MDQ3ODQ1OF1dXSxbIkxpc3QiLFsiUkdCQ29sb3IiLDAsMCwx\nXSxbIlJlY3RhbmdsZSIsWyJMaXN0Iiw2LjYsMF0sWyJMaXN0Iiw3LDQuMTM5MDkyNTUwMzcyNTgz\nXV0sWyJSR0JDb2xvciIsMSwwLDBdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDcuNCwwXSxbIkxpc3Qi\nLDcsMy40NDU2MzY4MzIxNzgzODldXV0sWyJMaXN0IixbIlJHQkNvbG9yIiwwLDAsMV0sWyJSZWN0\nYW5nbGUiLFsiTGlzdCIsNy42LDBdLFsiTGlzdCIsOCw5LjAxODQyNDU4MjE0ODk1Nl1dLFsiUkdC\nQ29sb3IiLDEsMCwwXSxbIlJlY3RhbmdsZSIsWyJMaXN0Iiw4LjQsMF0sWyJMaXN0Iiw4LDcuNjQ0\nNTg3MjI2NzMyMzQ0NV1dXSxbIkxpc3QiLFsiUkdCQ29sb3IiLDAsMCwxXSxbIlJlY3RhbmdsZSIs\nWyJMaXN0Iiw4LjYsMF0sWyJMaXN0Iiw5LDQuNDAxMzk1ODA5OTcxNjA5XV0sWyJSR0JDb2xvciIs\nMSwwLDBdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDkuNCwwXSxbIkxpc3QiLDksMy4yODA2NDUzMTI1\nMTE1XV1dLFsiTGlzdCIsWyJSR0JDb2xvciIsMCwwLDFdLFsiUmVjdGFuZ2xlIixbIkxpc3QiLDku\nNiwwXSxbIkxpc3QiLDEwLDguNjc2NTIwOTM4NzAxNTQzXV0sWyJSR0JDb2xvciIsMSwwLDBdLFsi\nUmVjdGFuZ2xlIixbIkxpc3QiLDEuMDRlMSwwXSxbIkxpc3QiLDEwLDguNTQyMDk4MTE1ODk5OTU2\nXV1dXV0sWyJSdWxlIiwiRnJhbWUiLHRydWVdXQ==\n",children:"data = RandomReal[{3, 10}, {10, 2}];Graphics[{EdgeForm[Black], Blue, Table[{Blue, Rectangle[{i - .4, 0}, {i, data[[i, 1]]}], Red, Rectangle[{i + .4, 0}, {i, data[[i, 2]]}]}, {i, 10}]}, Frame -> True]"})]})}function x(e={}){const{wrapper:s}={...(0,d.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},4552:(e,s,i)=>{i.d(s,{I:()=>a,M:()=>l});var n=i(11504);const d={},c=n.createContext(d);function l(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);