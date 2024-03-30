"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[68],{51148:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>t});var i=n(17624),r=n(4552);const c={env:["WLJS"],package:"wljs-graphics-d3",update:!0,source:"https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js"},d=void 0,a={id:"frontend/Reference/Graphics/Disk",title:"Disk",description:"draws a filled Circle",source:"@site/docs/frontend/Reference/Graphics/Disk.md",sourceDirName:"frontend/Reference/Graphics",slug:"/frontend/Reference/Graphics/Disk",permalink:"/frontend/Reference/Graphics/Disk",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1711835414,formattedLastUpdatedAt:"Mar 30, 2024",frontMatter:{env:["WLJS"],package:"wljs-graphics-d3",update:!0,source:"https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js"},sidebar:"tutorialSidebar",previous:{title:"Directive",permalink:"/frontend/Reference/Graphics/Directive"},next:{title:"EdgeForm",permalink:"/frontend/Reference/Graphics/EdgeForm"}},l={},t=[{value:"Dynamics",id:"dynamics",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>RGBColor</code>",id:"rgbcolor",level:3},{value:"<code>EdgeForm</code>",id:"edgeform",level:3},{value:"<code>Opacity</code>",id:"opacity",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>EventHandler</code>",id:"eventhandler",level:3}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components},{Wl:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["draws a filled ",(0,i.jsx)(s.a,{href:"/frontend/Reference/Graphics/Circle",children:"Circle"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-mathematica",children:"Disk[{x_, y_}, r_]\n"})}),"\n",(0,i.jsx)(s.p,{children:"or"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-mathematica",children:"Disk[{x_,y_}, r_, {start_, finish_}]\n"})}),"\n",(0,i.jsxs)(s.p,{children:["where ",(0,i.jsx)(s.code,{children:"start"})," and ",(0,i.jsx)(s.code,{children:"finish"})," are corresponding angles of a sector (used to make pie diagrams)"]}),"\n",(0,i.jsx)(s.p,{children:"for example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-mathematica",children:"Graphics[Table[Disk[RandomReal[{-1,1}, 2], 1], {i,10}]]\n"})}),"\n",(0,i.jsx)(n,{data:"WyJHcmFwaGljcyIsWyJMaXN0IixbIkRpc2siLFsiTGlzdCIsMC40MDE3NzI1MzA5ODcyOTQ0LC0w\nLjg0ODIzNTY4MjYwNTcxODldLDFdLFsiRGlzayIsWyJMaXN0IiwtMC43NzA2MDI3NDc2MDczODg3\nLDAuMzU5NDgzNTczMDQwOTU5MV0sMV0sWyJEaXNrIixbIkxpc3QiLDAuNjk0NjYzMzgwMDU1Njk4\nNywwLjM3NjczODExNzIxMTc0MzldLDFdLFsiRGlzayIsWyJMaXN0IiwwLjcxNzc3MTgyOTQ5OTY3\nNTYsMC40OTg1NDI0NTU1NzMzMjUzXSwxXSxbIkRpc2siLFsiTGlzdCIsMC44OTM2NDQ1OTM2ODky\nMzI1LC0wLjM5MDcyMjA5NzE2ODk4MjldLDFdLFsiRGlzayIsWyJMaXN0IiwtMC42ODE0ODEzNzY1\nNzIzMDk2LDAuMTg3NjE2Nzk4OTkyOTMzMzhdLDFdLFsiRGlzayIsWyJMaXN0IiwwLjQxMzk3NTM4\nNjY0Mjg5ODgsMC43NTI2MzM2MDc5Njg4NjIzXSwxXSxbIkRpc2siLFsiTGlzdCIsMC4yMzcwOTU4\nNjU0MjUxMzQ3MiwtMC4zNDQ4NDczMjEzNzEyMTkxXSwxXSxbIkRpc2siLFsiTGlzdCIsLTAuNzUx\nODEwNzM1NDQ5MjA0NSwwLjU3OTY2OTA4NTc3MzYzODhdLDFdLFsiRGlzayIsWyJMaXN0IiwwLjMz\nNjE0NTUzOTk4NzI1MTA1LC0yLjM1Nzg5NDE0MTM4MzA1NDVlLTJdLDFdXV0=\n",children:"Graphics[Table[Disk[RandomReal[{-1,1}, 2], 1], {i,10}]]"}),"\n",(0,i.jsx)(s.h2,{id:"dynamics",children:"Dynamics"}),"\n",(0,i.jsxs)(s.p,{children:["Fully support for a radius and coordinates. Use ",(0,i.jsx)(s.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})]}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(s.h3,{id:"rgbcolor",children:(0,i.jsx)(s.code,{children:"RGBColor"})}),"\n",(0,i.jsxs)(s.p,{children:["Color of the filling and stroke (if ",(0,i.jsx)(s.code,{children:"EdgeForm"})," is not specified)"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-mathematica",children:"{Blue, Disk[{0,0}, 1]}\n"})}),"\n",(0,i.jsx)(n,{data:"WyJHcmFwaGljcyIsWyJMaXN0IixbIlJHQkNvbG9yIiwwLDAsMV0sWyJEaXNrIixbIkxpc3QiLDAs\nMF0sMV1dXQ==\n",children:"Graphics[{Blue, Disk[{0,0}, 1]}]"}),"\n",(0,i.jsx)(s.h3,{id:"edgeform",children:(0,i.jsx)(s.code,{children:"EdgeForm"})}),"\n",(0,i.jsx)(s.p,{children:"Specifies the color of a stroke"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-mathematica",children:"{EdgeForm[Red], Blue, Disk[{0,0}, 1]}\n"})}),"\n",(0,i.jsx)(n,{data:"WyJHcmFwaGljcyIsWyJMaXN0IixbIkVkZ2VGb3JtIixbIlJHQkNvbG9yIiwxLDAsMF1dLFsiUkdC\nQ29sb3IiLDAsMCwxXSxbIkRpc2siLFsiTGlzdCIsMCwwXSwxXV1d\n",children:"Graphics[{EdgeForm[Red], Blue, Disk[{0,0}, 1]}]"}),"\n",(0,i.jsx)(s.h3,{id:"opacity",children:(0,i.jsx)(s.code,{children:"Opacity"})}),"\n",(0,i.jsx)(s.p,{children:"Defines opacity for a primitive (see [[frontend/Reference/Graphics/Opacity]])"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-mathematica",children:"{Opacity[0.5], Red, Disk[{-0.5,0}, 1], Blue, Disk[{0.5,0}, 1]}\n"})}),"\n",(0,i.jsx)(n,{data:"WyJHcmFwaGljcyIsWyJMaXN0IixbIk9wYWNpdHkiLDAuNV0sWyJSR0JDb2xvciIsMSwwLDBdLFsi\nRGlzayIsWyJMaXN0IiwtMC41LDBdLDFdLFsiUkdCQ29sb3IiLDAsMCwxXSxbIkRpc2siLFsiTGlz\ndCIsMC41LDBdLDFdXV0=\n",children:"Graphics[{Opacity[0.5], Red, Disk[{-0.5,0}, 1], Blue, Disk[{0.5,0}, 1]}]"}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"eventhandler",children:(0,i.jsx)(s.code,{children:"EventHandler"})}),"\n",(0,i.jsxs)(s.p,{children:["One can listen to a several events produced by this primitive using ",(0,i.jsx)(s.a,{href:"/frontend/Reference/Misc/Events#%60EventHandler%60",children:(0,i.jsx)(s.code,{children:"EventHandler"})})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-mathematica",children:"EventHandler[t_Disk, {event_ -> handler_, ...}]\n"})}),"\n",(0,i.jsxs)(s.p,{children:["where ",(0,i.jsx)(s.code,{children:"event"})," can be"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:'"mousemove"'})," detects and sends coordinates of a mouse, when it is over this element"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:'"drag"'})," makes primitive draggable and emits coordinates"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:'"zoom"'})," detects zoom / mouse-wheel"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:'"click"'})," detects mouse clicks"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>a,M:()=>d});var i=n(11504);const r={},c=i.createContext(r);function d(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);