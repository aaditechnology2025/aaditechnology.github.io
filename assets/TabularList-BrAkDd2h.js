import{j as r,B as l,bJ as c,n as a,T as x,G as j,E as t,I as i,ao as h,ap as u,aq as p}from"./index-CpZD2H93.js";function m({item:e,clickEdit:s,clickDelete:n}){return r.jsx(r.Fragment,{children:r.jsx(l,{sx:{mb:1,p:1,background:o=>`${c(o.palette.primary.main,.2)}`},children:r.jsxs(a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[r.jsx(x,{sx:{wordBreak:"break-word"},children:e.Text1}),r.jsx(j,{item:!0,xs:2,md:2}),r.jsxs(a,{direction:"row",gap:1,children:[r.jsx(t,{title:"Edit",children:r.jsx(i,{onClick:()=>s(e.Id),sx:{color:"#223354","&:hover":{color:"#223354",cursor:"pointer"}},children:r.jsx(h,{})})}),r.jsx(t,{title:"Delete",children:r.jsx(i,{onClick:()=>n(e.Id),sx:{color:"#223354","&:hover":{color:"red",backgroundColor:u[100]}},children:r.jsx(p,{})})})]})]})})})}function g({ItemList:e,clickEdit:s,clickDelete:n}){return r.jsx("div",{children:r.jsx(r.Fragment,{children:e.map((o,d)=>r.jsx("div",{children:r.jsx(m,{item:o,clickEdit:s,clickDelete:n})},d))})})}export{g as T};