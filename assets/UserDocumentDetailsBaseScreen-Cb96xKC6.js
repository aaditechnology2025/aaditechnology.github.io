import{j as e,B as n,C as d,E as s,I as o,F as l,af as x,c1 as m,ag as h,ah as p,ai as i,aj as t,ak as j}from"./index-CpZD2H93.js";import{d as u}from"./FileDownloadOutlined-sbCx2Lz_.js";import{Q as f}from"./QuestionMark-B_7MKkiz.js";var g={};const y=[{name:"Form No. - 16",year:"2024 - 2025",file:"From.pdf"},{name:"Medical Card",year:"2024 - 2025",file:"dummy.pdf"}],C=()=>{const c=a=>{const r=document.createElement("a");r.href=`${g.PUBLIC_URL}/${a}`,r.download=a,document.body.appendChild(r),r.click(),document.body.removeChild(r)};return e.jsxs(n,{px:2,children:[e.jsx(d,{navLinks:[{title:"User Document Details",path:"/RITeSchool/Teacher/UserDocumentDetailsBaseScreen"}],rightActions:e.jsx(e.Fragment,{children:e.jsx(s,{title:"Displays/ download documents details.",children:e.jsx(o,{sx:{color:"white",backgroundColor:l[500],"&:hover":{backgroundColor:l[600]}},children:e.jsx(f,{})})})})}),e.jsx(n,{sx:{backgroundColor:a=>a.palette.common.white,p:2},children:e.jsx(x,{component:m,children:e.jsxs(h,{"aria-label":"simple table",sx:{border:a=>`1px solid ${a.palette.grey[300]}`},children:[e.jsx(p,{children:e.jsxs(i,{sx:{background:a=>a.palette.secondary.main,color:a=>a.palette.common.white},children:[e.jsx(t,{sx:{textTransform:"capitalize",color:"white",py:1.5},children:e.jsx("strong",{children:"Document Name"})}),e.jsx(t,{sx:{textTransform:"capitalize",color:"white",py:1.5,textAlign:"center"},children:e.jsx("strong",{children:"Year"})}),e.jsx(t,{sx:{textTransform:"capitalize",color:"white",py:1.5,textAlign:"center"},children:e.jsx("strong",{children:"Download"})})]})}),e.jsx(j,{children:y.map((a,r)=>e.jsxs(i,{children:[e.jsx(t,{sx:{textTransform:"capitalize",py:.5},children:a.name}),e.jsx(t,{sx:{textTransform:"capitalize",py:.5,textAlign:"center"},children:a.year}),e.jsx(t,{sx:{textTransform:"capitalize",py:.5,textAlign:"center"},children:e.jsx(s,{title:"Download",children:e.jsx(o,{onClick:()=>c(a.file),children:e.jsx(u,{})})})})]},r))})]})})})]})};export{C as default};