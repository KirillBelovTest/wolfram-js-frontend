"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[796],{38928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(17624),o=t(4552);const a={sidebar_position:1},r="Architecture of symbols",i={id:"interpreter/Advanced/architecture",title:"Architecture of symbols",description:"Features",source:"@site/docs/interpreter/Advanced/architecture.md",sourceDirName:"interpreter/Advanced",slug:"/interpreter/Advanced/architecture",permalink:"/interpreter/Advanced/architecture",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1710356381,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1}},l={},c=[{value:"Features",id:"features",level:2},{value:"Symbol definition",id:"symbol-definition",level:3},{value:"Contexts",id:"contexts",level:3},{value:"External  functions",id:"external--functions",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Methods | Sub-symbols",id:"methods--sub-symbols",level:4},{value:"DOM",id:"dom",level:4},{value:"Global and local memory",id:"global-and-local-memory",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"architecture-of-symbols",children:"Architecture of symbols"}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.p,{children:"Let us show the most essential parts"}),"\n",(0,s.jsx)(n.h3,{id:"symbol-definition",children:"Symbol definition"}),"\n",(0,s.jsx)(n.p,{children:"In general the rule is"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"context.Symbol = async (arguments, env) => {\n\t//evaluating arguments\n\tconst a = await interpretate(arguments[0], env);\n\t//body\n\tsome calculations\n\t//may return or not\n\treturn result;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"contexts",children:"Contexts"}),"\n",(0,s.jsx)(n.p,{children:"To prevent the mess of duplicated function names and etc, you can specify the context or let's say library of symbols using"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var library = {};\ninterpretate.extendContext(library);\n\nlibrary.Symbol = async (args, env) => {/*...*/}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The interpreter will check all available contexts and find the first match. However, you can prioritize the context providing the information in ",(0,s.jsx)(n.code,{children:"env"})," object"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"core.GrandSymbol = async (args, env) => {\n\tconst data = await interpretate(args, {...env, context: library});\n\t//...\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["More about ",(0,s.jsx)(n.code,{children:"env"})," object is here ",(0,s.jsx)(n.a,{href:"#Meta%20Data",children:"Meta Data"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In the same manner, the separation between ",(0,s.jsx)(n.code,{children:"Line[]"})," used in ",(0,s.jsx)(n.code,{children:"Graphics3D"})," and in ",(0,s.jsx)(n.code,{children:"Graphics"})," functions was made."]}),"\n",(0,s.jsx)(n.h3,{id:"external--functions",children:"External  functions"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This feature is still in development"})}),"\n",(0,s.jsxs)(n.p,{children:["If the called expression was not found in all available contexts, the interpreter will extend ",(0,s.jsx)(n.code,{children:"core"})," with a server-call, i.e. ",(0,s.jsx)(n.strong,{children:"will ask kernel to evaluate the unknown symbol and return back the result"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["By the default, those special missing expressions becomes in the end virtual containers and can call ",(0,s.jsx)(n.code,{children:"update"})," method on other containerized functions."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"../../frontend/Outdated/Advanced/Frontend%20interpretation/executables.md",children:"executables"})," and ",(0,s.jsx)(n.a,{href:"#Methods%20Sub%20symbols",children:"Sub symbols"})," for more information about methods and etc."]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsx)(n.p,{children:"To share some data between functions, to use local and global memory of the executable objects, specifying methods of evaluation and DOM access the following object is provided"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"env = {\n\telement: document.element, /* a Code Mirror widget */\n\n\tcontext: core, /* default context */\n\n\t/* subsymbol */\n\tmethod: undefined | 'update' | 'destory',\n\n\t/* global and local memory of front-end objects*/\n\tlocal: {},\n\tglobal: {call: uid},\n\n\tnumerical: false, /* keep symbolic or not */\n\thold: false /* keep exps in a List and JS Objects */\n\tunsafe: false /* allows to ask Wolfram Kernel for undefined symbols */\n\n\tnovirtual: false /* prevents creatation of virtual containers (all functions inside are executed normally) */\n\n\t/* anything you want to share */\n\troot: ExecutableObject/* a reference to the FrontEndObject container */\n\n\t...\n\t//anything else you want\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"local"})," and ",(0,s.jsx)(n.code,{children:"global"})," cannot be deeply-copied, therefore they will be the same for all nested expressions if the expression is containerized (frontend object or virtual), then ",(0,s.jsx)(n.code,{children:"local"})," will be overridden."]}),"\n",(0,s.jsx)(n.p,{children:"Ones, which ave the most influence to the process of interpreting, are"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"context"})," - prioritizes the context to fetch, the symbol to evaluate. See section ",(0,s.jsx)(n.a,{href:"#Contextes",children:"Contexts"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"method"})," - it is meant to specify a sub-symbol for the whole three of WL expression (or in practice so-called method of interpreting)"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"methods--sub-symbols",children:"Methods | Sub-symbols"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"undefined"})," (leave empty)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"update"})," - usually called when the sub-expression was updated"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"destroy"})," - used only on the wolfram frontend, when the widget was removed"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The following sub-symbols can be defined as"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"core.MySymbol = (args, env) => {}\ncore.MySymbol.update = (args, env) => {}\ncore.MySymbol.destory = (args, env) => {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can think about it if it was a class definition with a constructor and several methods."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["It is good to declare ",(0,s.jsx)(n.code,{children:"update"})," method for your function, even if you do not plan to use it explicitly, define ",(0,s.jsx)(n.code,{children:"core.MySymbol.update = core.MySymbol"})]})}),"\n",(0,s.jsx)(n.p,{children:"For the sake of performance, when something changes with the data inside the plot, there is no need to reevaluate the whole tree of WL expressions. Therefore, we can specify the method of reevaluation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"//to create a plot\ncore.ListLinePlotly = (args, env) => {\n\t...\n\tPlotly.newPlot(env.element, data)\n}\n\n//to update only the data\ncore.ListLinePlotly.update = (args, env) => {\n\t...\n\tPlotly.restyle(env.element, newdata)\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When a nested expression was changed, the nearest parent can be called using ",(0,s.jsx)(n.code,{children:"update"})," method like on a picture"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(6044).c+"",width:"914",height:"468"})}),"\n",(0,s.jsxs)(n.p,{children:["In principle, interpreter has no idea about what ",(0,s.jsx)(n.code,{children:"update"}),' and etc means, one can write any "method", which is basically just a sub-symbol.']}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"Graphics3D"})," object is crucial to use ",(0,s.jsx)(n.code,{children:"destroy"})," method, when object has removed from the editor, since it is necessary to remove the ",(0,s.jsx)(n.code,{children:"animation"})," cycle"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"core.Graphics3D.destroy = (args, env) => {\n\tcancelAnimationFrame(env.local.aid);\n\t//to cancel the animation\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"dom",children:"DOM"}),"\n",(0,s.jsxs)(n.p,{children:["When the WL expressing is called via ",(0,s.jsx)(n.code,{children:"FrontEndVirtual"})," on editor's side it creates ",(0,s.jsx)(n.code,{children:"local"})," memory and unique identifier, where one can attach DOM element using"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'AttachDOM["dom-element-id"]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["which is accessible by ",(0,s.jsx)(n.code,{children:"env.element"})," field"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"core.Canvas = (args, env) => {\n\tconst canvas = document.createElement('canvas');\n\tenv.element.append(canvas);\n\t//....\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"global-and-local-memory",children:"Global and local memory"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"env.global"})," is visible to all containers and its inner WL expressions, where ",(0,s.jsx)(n.code,{children:"env.global.stack"})," contains the call-tree"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"env.local"})," is isolated memory related to individual ",(0,s.jsx)(n.code,{children:"executable"})," functions, i.e. real or virtual containers."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"core.MyFunction = (args, env) => {\n\tenv.local  = {} //pointer to the local memory of the instance\n\tenv.global = {} //pointer to the global memory of the call tree\n\tenv //sharable memory\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6044:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/data-binding-2.excalidraw-5867e5d17733a0e0e7dc03fc5115c6c7.svg"},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>r});var s=t(11504);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);