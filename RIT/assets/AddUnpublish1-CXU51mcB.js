import{u,A as m,q as x,v as g,r,c as h,j as e,a0 as p,a1 as I,a3 as S,T as C,o as b,a5 as j,a6 as l}from"./index-CpZD2H93.js";const f=({open:i,setOpen:a,ClickCloseDialogbox:D,clickPublishUnpublish:n})=>{u(),m();let{Id:t}=x();t=g(t);const[o,c]=r.useState("");r.useState(""),Number(localStorage.getItem("localSchoolId")),Number(sessionStorage.getItem("AcademicYearId")),Number(sessionStorage.getItem("StandardDivisionId")),localStorage.getItem("Id"),sessionStorage.getItem("TeacherId"),localStorage.getItem("SiteURL"),h(s=>s.AddHomework.PublishUnPublishHomework);const d=()=>{o!=""&&n(0)};return e.jsxs(p,{open:i,onClose:()=>{a(!1)},fullWidth:!0,maxWidth:"sm",children:[e.jsx(I,{sx:{backgroundColor:s=>s.palette.error.main,py:1}}),e.jsxs(S,{dividers:!0,sx:{px:4},children:[e.jsx(C,{variant:"h4",sx:{mb:1},children:"Unpublish Reason"}),e.jsx(b,{multiline:!0,rows:3,value:o,onChange:s=>{c(s.target.value)},sx:{width:"100%"}})]}),e.jsxs(j,{sx:{py:2,px:3},children:[e.jsx(l,{onClick:()=>{a(!1)},color:"error",children:"Cancel"}),e.jsx(l,{onClick:()=>{d()},variant:"contained",children:"Confirm"})]})]})};export{f as default};