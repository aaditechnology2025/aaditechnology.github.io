import{u as L,A as E,q as R,v as a,r as s,c as g,jn as F,jq as V,j as e,B as p,C as O,E as U,I as W,F as I,H as q,G as r,o as D,aC as A,T as z,ay as o}from"./index-CpZD2H93.js";import{D as H}from"./DatepickerLeave-BYciAoLF.js";const $=()=>{const j=L(),b=E();let{Id:l,TeacherName:n,ClassName:i,SubjectName:c,SubjectId:m,MySubject:u,TeacherId:d,SelectClass:h}=R();l=a(l),n=a(n),i=a(i),c=a(c),m=a(m),u=a(u),d=a(d),h=a(h);const[Y,S]=s.useState(""),[M,C]=s.useState(""),[_,T]=s.useState(""),[J,f]=s.useState(""),[K,y]=s.useState(""),[Q,P]=s.useState(""),k=Number(localStorage.getItem("localSchoolId")),w=Number(sessionStorage.getItem("AcademicYearId")),t=g(x=>x.ViewHomework.GetHomeworkDetail),v=g(x=>x.Homeworkdocument.GetAllHomeworkDocuments),G={asSchoolId:k,asHomeworkId:Number(l),asAcademicyearId:w};s.useEffect(()=>{j(F(G))},[]);const N={asSchoolId:k,asAcademicyearId:w,asHomeworkId:Number(l)};s.useEffect(()=>{j(V(N))},[l]),s.useEffect(()=>{t&&t.length>0&&(T(t.Id),y(t[0].AttachmentPath),S(t[0].AssignedDate),f(t[0].CompleteByDate),C(t[0].Title),P(t[0].Details))},[t]);const B=()=>{b("/RITeSchool/Teacher/HomeworkDocuments/"+o(l)+"/"+o(d)+"/"+o(n)+"/"+o(i)+"/"+o(c)+"/"+o(m)+"/"+o(u)+"/"+o(h),{state:{fromInternal:!0}})};return e.jsx(e.Fragment,{children:e.jsxs(p,{sx:{px:2},children:[e.jsx(O,{navLinks:[{title:"Assign Homework",path:"/RITeSchool/Teacher/AssignHomework"},{title:"Add Homework",path:"/RITeSchool/Teacher/AddHomeworkNew/"+d+"/"+n+"/"+i+"/"+c+"/"+m+"/"+u+"/"+h},{title:"View Homework",path:""}],rightActions:e.jsx(e.Fragment,{children:e.jsx(p,{children:e.jsx(U,{title:"User can view homework details.",children:e.jsx(W,{sx:{color:"white",backgroundColor:I[500],height:"36px !important",":hover":{backgroundColor:I[600]}},children:e.jsx(q,{})})})})})}),e.jsx(p,{sx:{background:"white",p:2},children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(D,{fullWidth:!0,label:"Subject",InputLabelProps:{shrink:!0},value:t.Subject,inputProps:{readOnly:!0}})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(D,{fullWidth:!0,label:"Title",InputLabelProps:{shrink:!0},value:t.Title,inputProps:{readOnly:!0}})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(H,{DateValue:A(t.AssignedDate),onDateChange:"",label:"Assigned Date",size:"medium",disabled:!0})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(H,{DateValue:A(t.CompleteByDate),onDateChange:"",label:"Complete Date ",size:"medium",disabled:!0})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(z,{children:[" Attachments: ",v.length>0?e.jsx("a",{href:"#",onClick:()=>B(),style:{textDecoration:"none"},children:" Attachments "}):e.jsx("span",{})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(D,{multiline:!0,fullWidth:!0,rows:3,label:"Details",InputLabelProps:{shrink:!0},InputProps:{readOnly:!0},value:t.Details})})]})})]})})};export{$ as default};