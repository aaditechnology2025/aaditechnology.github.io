import{ab as t,j as e,a6 as a,a0 as h,G as r,T as u,ac as m,n as j}from"./index-CpZD2H93.js";const k=()=>{const[c,s]=t.useState(!1),[o,l]=t.useState(""),[d,p]=t.useState(0),x=()=>{s(!0)},n=i=>{s(!1),l(i)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"contained",onClick:x,children:"Exit App"}),e.jsx(h,{onClose:n,open:c,children:e.jsxs(r,{container:!0,spacing:2,sx:{alignItems:"center",justifyContent:"center",height:"100%",padding:"10px"},children:[e.jsxs(r,{item:!0,xs:12,sx:{textAlign:"center",backgroundColor:"background.paper",boxShadow:3,padding:" 10px"},children:[e.jsx(u,{variant:"h6",component:"legend",sx:{marginBottom:"1rem",fontWeight:"bold"},children:"Rate the App!"}),e.jsx(m,{name:"simple-controlled",value:d,onChange:(i,g)=>{p(g)},size:"large"})]}),e.jsxs(j,{spacing:4,direction:"row",children:[e.jsx(a,{variant:"contained",color:"primary",onClick:()=>n(o),children:"Submit"}),e.jsx(a,{variant:"contained",color:"primary",onClick:()=>n(o),children:"Not now."})]})]})})]})};export{k as default};