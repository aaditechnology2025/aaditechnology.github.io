import{S as f,j as e,r,B as d,af as w,ag as y,ah as b,ai as m,aj as a,ak as k,I as C,h as z,u as E,c as g,i as U,k as O,ay as N,C as P,l as W}from"./index-CpZD2H93.js";import{B as _}from"./BackButton-D8aQMrwN.js";import{d as A}from"./FileDownloadOutlined-sbCx2Lz_.js";import{d as H}from"./DoNotDisturbOn-Dociqe_h.js";import{d as V}from"./RadioButtonUnchecked-r_6mn_G1.js";import{L as G}from"./List1-CVRAXJd-.js";import"./Attachment-BXtOqCtF.js";const T=({name:n,checked:i,value:l,onChange:t,IsAllDeactivated:x=!1,IsExamSubmitted:j=!1})=>{const h=()=>{t({name:n,value:l,checked:!i})};return f(),e.jsx(e.Fragment,{children:i?e.jsx(H,{sx:{color:"red"},onClick:h}):e.jsx(V,{sx:{color:"green"},onClick:h})})},X=({itemList:n,downloadNotice:i,clickSingle:l})=>(r.useState(!0),e.jsx(e.Fragment,{children:e.jsx(d,{sx:{backgroundColor:"white",mb:2},children:e.jsx(w,{component:d,children:e.jsxs(y,{"aria-label":"simple table",sx:{py:1,border:t=>`1px solid ${t.palette.grey[300]}`,overflow:"hidden"},children:[e.jsx(b,{children:e.jsxs(m,{sx:{background:t=>t.palette.secondary.main,py:1},children:[e.jsx(a,{sx:{color:"white",width:"480px"},children:"Checkbox"}),e.jsx(a,{sx:{color:"white"},children:"Notice Name"}),e.jsx(a,{sx:{color:"white",textAlign:"center",py:1},children:"Download"})]})}),e.jsx(k,{children:n.map((t,x)=>e.jsx(e.Fragment,{children:e.jsxs(m,{children:[e.jsx(a,{sx:{textTransform:"capitalize",py:.5,pl:3.5},children:e.jsx(T,{name:"",value:t.id,checked:t.isActive,onChange:l})}),e.jsx(a,{sx:{textTransform:"capitalize",py:.5},children:t.header}),e.jsx(a,{sx:{textTransform:"capitalize",py:.5,textAlign:"center",minWidth:"170px"},children:t.FileName?e.jsx(C,{onClick:()=>i(t.FileName,t.IsImageNotice),children:e.jsx(A,{})}):e.jsx("span",{children:"-"})})]})}))})]})})})})),Y=({itemList:n,downloadNotice:i,clickSingle:l})=>(r.useState(!0),e.jsx(e.Fragment,{children:e.jsx(d,{sx:{backgroundColor:"white",mb:2},children:e.jsx(w,{component:d,children:e.jsxs(y,{"aria-label":"simple table",sx:{py:1,border:t=>`1px solid ${t.palette.grey[300]}`,overflow:"hidden"},children:[e.jsx(b,{children:e.jsxs(m,{sx:{background:t=>t.palette.secondary.main,py:1},children:[e.jsx(a,{sx:{color:"white",width:"480px"},children:"Checkbox"}),e.jsx(a,{sx:{color:"white",pl:3.5},children:"Notice Name"}),e.jsx(a,{sx:{color:"white",textAlign:"center",py:1},children:"Download"})]})}),e.jsx(k,{children:n.map((t,x)=>e.jsx(e.Fragment,{children:e.jsxs(m,{children:[e.jsx(a,{sx:{textTransform:"capitalize",py:.5,pl:3.5},children:e.jsx(T,{name:"",value:t.id,checked:t.isActive,onChange:l})}),e.jsx(a,{sx:{textTransform:"capitalize",py:.5,pl:3.5},children:t.header}),e.jsx(a,{sx:{textTransform:"capitalize",py:.5,textAlign:"center",minWidth:"125px"},children:t.FileName?e.jsx(C,{onClick:()=>i(t.FileName,t.IsImageNotice),children:e.jsx(A,{})}):e.jsx("span",{children:"-"})})]})}))})]})})})}));function oe(){z(),f();const n=E(),i=g(o=>o.Schoolnotice.SchoolNoticeData),l=g(o=>o.SchoolNoticeBoard.AllActiveNotices),t=localStorage.getItem("localSchoolId"),x=sessionStorage.getItem("Id"),j=g(o=>o.Schoolnotice.Loading),h={asSchoolId:t,asNoticeId:0,asUserId:x},D={asSchoolId:t,asUserId:x};r.useEffect(()=>{sessionStorage.getItem("Id")!==null&&localStorage.setItem("url",window.location.pathname),n(U(h))},[]);const[F,q]=r.useState("");r.useEffect(()=>{n(O(D))},[]),l.filter((o,s)=>F==o.id?o.FileName:"");const L=i.map((o,s)=>{const c=o.Date,v=new Date(c).getDate(),B=new Date(c).toLocaleString("default",{month:"short"}),R=new Date(c).getFullYear(),$=`${v} ${B} ${R}`;return{id:s,header:o.Name,text1:$,text2:"",linkPath:"/Common/Viewschoolnotice/"+N(o.Id),FileName:o.FileName}}),[p,u]=r.useState([]);r.useEffect(()=>{let o=[];localStorage.getItem("ImportantNotices")!==null&&(o=localStorage.getItem("ImportantNotices").split(",")),u(l.filter(s=>!o.includes(s.Id)).map((s,c)=>({id:s.Id,header:s.Name,text2:"",linkPath:"/Common/Viewschoolnotice/"+N(s.Id),FileName:s.FileName,IsText:s.IsText,IsImageNotice:s.IsImageNotice,isActive:!1})))},[l]);const I=(o,s)=>{s?window.open(localStorage.getItem("SiteURL")+"RITeSchool/Images/"+o):window.open(localStorage.getItem("SiteURL")+"RITeSchool/DOWNLOADS/School Notices/"+o)},S=o=>{let s=[];localStorage.getItem("ImportantNotices")!==null&&(s=localStorage.getItem("ImportantNotices").split(",")),console.log(localStorage.getItem("ImportantNotices"),"ImportantNotices",s),o.checked?s.push(o.value):s=s.filter(c=>c!==o.value),localStorage.setItem("ImportantNotices",s.toString()),u(p.map(c=>c.id===o.value?{...c,isActive:o.checked}:c))};return e.jsxs(d,{sx:{px:2},children:[e.jsx(P,{navLinks:[{title:"School Notice",path:""}]}),e.jsxs(d,{sx:{background:"white",p:2},children:[l.length>0&&(t==="18"?e.jsx(X,{itemList:p,downloadNotice:I,clickSingle:S}):e.jsx(Y,{itemList:p,downloadNotice:I,clickSingle:S})),sessionStorage.getItem("Id")===null&&e.jsx(_,{FromRoute:"/schoolList"}),j?e.jsx(W,{}):e.jsx(e.Fragment,{children:e.jsx(G,{items:L})})]})]})}export{oe as default};