import{u as j,q as f,v as C,A as R,r as d,j as e,a0 as F,a1 as v,bd as k,E as a,H as w,F as E,a3 as I,B as T,G as o,o as u,bs as D,a5 as A,a6 as h}from"./index-CpZD2H93.js";const N=({open:p,setOpen:s,ExamName:i,TeacherName:t,ClickCloseDialogBox:S,onClickUnpublish:m})=>{j();let{Id:n}=f();n=C(n),R();const[r,b]=d.useState(""),[x,c]=d.useState("");Number(localStorage.getItem("localSchoolId")),Number(sessionStorage.getItem("AcademicYearId"));const g=()=>{r===""?c("Reason for unpublish should not be blank."):(c(""),m(!1,r),s(!1))};return e.jsx(e.Fragment,{children:e.jsxs(F,{open:p,maxWidth:"sm",fullWidth:!0,onClose:()=>{s(!1)},PaperProps:{sx:{borderRadius:"15px"}},children:[e.jsxs(v,{sx:{bgcolor:"#223354",color:l=>l.palette.common.white},children:[e.jsx(k,{onClick:()=>{s(!1)},sx:{color:"white",borderRadius:"7px",position:"absolute",top:"5px",right:"7px",cursor:"pointer","&:hover":{color:"red"}}}),e.jsx(a,{title:"Enter the reason for exam unpublish.",children:e.jsx(w,{sx:{color:"white",borderRadius:"7px",position:"absolute",top:"4px",right:"35px",cursor:"pointer","&:hover":{backgroundColor:E[600]}}})})]}),e.jsx(I,{children:e.jsxs(T,{sx:{maxHeight:"300px",overflowY:"auto",position:"relative",background:"white"},children:[e.jsx("h2",{children:"Enter reason for unpublish"}),e.jsxs(o,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(a,{title:i||"No Exam Name Available",children:e.jsx(u,{sx:{width:"100%",bgcolor:"#F0F0F0"},label:"Exam",size:"medium",value:i})})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(a,{title:t||"No Teacher Name Available",children:e.jsx(u,{sx:{width:"100%",bgcolor:"#F0F0F0"},label:"Class Teacher",size:"medium",value:t})})}),e.jsx(o,{item:!0,xs:12,marginTop:1,children:e.jsx(D,{multiline:!0,label:e.jsxs(e.Fragment,{children:["Reason for Unpublish  ",e.jsx("span",{style:{color:"red"},children:"*"})]}),value:r,onChange:l=>{b(l.target.value)},sx:{width:"100%"},error:x!=="",helperText:x})})]})]})}),e.jsxs(A,{sx:{py:2,px:3},children:[e.jsx(h,{color:"error",onClick:()=>{s(!1)},children:"Close"}),e.jsx(h,{onClick:()=>{g()},color:"error",children:"Unpublish"})]})]})})};export{N as default};