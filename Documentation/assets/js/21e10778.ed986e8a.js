"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[2616],{19556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var l=t(17624),o=t(4552);const r={env:["Wolfram Kernel"],package:"wljs-editor",context:"Notebook`CellOperations`",source:"https://github.com/JerryI/wljs-editor/blob/dev/src/RemoteCellsKernel.wl"},a=void 0,s={id:"frontend/Reference/Cells and Notebook/RemoteCellObj",title:"RemoteCellObj",description:"a remote representation of a notebook cell for evaluation Kernel",source:"@site/docs/frontend/Reference/Cells and Notebook/RemoteCellObj.md",sourceDirName:"frontend/Reference/Cells and Notebook",slug:"/frontend/Reference/Cells and Notebook/RemoteCellObj",permalink:"/frontend/Reference/Cells and Notebook/RemoteCellObj",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1711835414e3,frontMatter:{env:["Wolfram Kernel"],package:"wljs-editor",context:"Notebook`CellOperations`",source:"https://github.com/JerryI/wljs-editor/blob/dev/src/RemoteCellsKernel.wl"},sidebar:"tutorialSidebar",previous:{title:"ParentCell",permalink:"/frontend/Reference/Cells and Notebook/ParentCell"},next:{title:"RemoteNotebook",permalink:"/frontend/Reference/Cells and Notebook/RemoteNotebook"}},c={},d=[{value:"Methods",id:"methods",level:2},{value:"<code>Delete</code>",id:"delete",level:3},{value:"<code>EventHandler</code>",id:"eventhandler",level:3}];function i(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"a remote representation of a notebook cell for evaluation Kernel"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"RemoteCellObj[uid_String] _RemoteCellObj\n"})}),"\n",(0,l.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(n.h3,{id:"delete",children:(0,l.jsx)(n.code,{children:"Delete"})}),"\n",(0,l.jsx)(n.p,{children:"Deletes a given cell in the notebook"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",metastring:'title="Self destruction"',children:'With[{cell = EvaluationCell[]},\n\tEventHandler[InputButton["Bye"], Function[Null,\n\t\tcell // Delete\n\t]]\n]\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"removes an input cell"})}),"\n",(0,l.jsx)(n.h3,{id:"eventhandler",children:(0,l.jsx)(n.code,{children:"EventHandler"})}),"\n",(0,l.jsxs)(n.p,{children:["There is an adapter for ",(0,l.jsx)(n.a,{href:"/frontend/Reference/Misc/Events#%60EventHandler%60",children:(0,l.jsx)(n.code,{children:"EventHandler"})})," method. You can listen a cell's events from the evaluation Kernel"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'With[{cell = EvaluationCell[]},\n\tEventHandler[cell, {any_ :> (Print[any, ": ", #]&)}];\n]\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"listen all events from the input cell"})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>a});var l=t(11504);const o={},r=l.createContext(o);function a(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);