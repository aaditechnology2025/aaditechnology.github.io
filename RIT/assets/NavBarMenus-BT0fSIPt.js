import{u as $,c as g,r as u,g3 as w,j as t,B as i,G as a,o as q,T as j,g4 as A,g5 as J}from"./index-CpZD2H93.js";import{d as K}from"./Refresh-DQlbduBZ.js";import{d as O}from"./Search-DF8Yf9lp.js";import{E as x}from"./ErrorMessages-Cl09dz4o.js";import{P as Q}from"./PageHeader-C9ChZO91.js";import X from"./NavContent-D4zDcatR.js";import{C as Y}from"./Container-Dbura8Eg.js";import{H as Z}from"./Hidden-BOlgbOvj.js";import{C as f}from"./Card-B0aZ7mGs.js";import"./Link-QB4wltBd.js";function ce(o){var s=document.createElement("div");s.innerHTML=o;var l=s.textContent||s.innerText||"";return l}function he(){const o=$(),s=g(e=>e.NavbarMenu.GetNavbarMenuDetails),l=g(e=>e.NavbarMenu.MenuDescription),c=g(e=>e.NavbarMenu.ChildMenuId),R=sessionStorage.getItem("RoleId"),S=Number(localStorage.getItem("localSchoolId")),[ee,D]=u.useState([]),[C,P]=u.useState([]),[p,H]=u.useState(""),[v,N]=u.useState(!1),[y,b]=u.useState([]);u.useState(0);const[h,B]=u.useState({MenuId:0,ParentMenuId:0}),[F,G]=u.useState(0),[L,E]=u.useState(""),k={aiSchoolId:S,aiUserRoleId:R,IsRefresh:!1};u.useEffect(()=>{if(h.MenuId==0)b(s.filter(e=>e.LevelIndex==1));else{let e=[],n=[h.MenuId];s.map(r=>{n.includes(r.MenuId)&&(n.includes(r.ParentMenuId)||n.push(r.ParentMenuId))}),s.map(r=>{n.includes(r.MenuId)&&(n.includes(r.ParentMenuId)||n.push(r.ParentMenuId))}),s.map(r=>{n.includes(r.MenuId)&&(n.includes(r.ParentMenuId)||n.push(r.ParentMenuId))}),s.map(r=>{n.includes(r.MenuId)&&e.push(r)}),b(e),D(s.filter(r=>r.ParentMenuId==h.MenuId))}},[s,h]),u.useEffect(()=>{T(),m()},[F,c]);const M=e=>{E(""),N(!1),G(e.ParentMenuId),o(A(e.MenuId)),B(e);let n=I(e.MenuId);(n==null?void 0:n.MenuTypeId)=="2"&&o(J({aiMenuId:n.MenuId,aiSchoolId:S}))};u.useEffect(()=>{l.length>0&&E(l[0].MenuContent)},[l]),u.useEffect(()=>{o(w({...k,IsRefresh:!1}))},[]);const V=()=>{o(w({...k,IsRefresh:!0}))},W=()=>{N(!0);let e=p;e.length>3?(e.split(" "),e.length>3&&P(s.filter(n=>n.MenuName.toLowerCase().includes(e.toLowerCase())))):P([])},z=e=>e*4,I=e=>{let n=[],r=null;return s.filter(d=>d.MenuId==e).map(d=>{n.includes(d.MenuId)||(n.push(d.MenuId),r=d)}),r},T=()=>{let e=[],n=c,r=I(n);for(;r!==null;)e=[r,...e],n=r.ParentMenuId,r=I(n);return e};u.useState([]);const m=()=>{let e=[],n=[];return s.filter(r=>r.ParentMenuId==c).map(r=>{e.includes(r.MenuId)||(e.push(r.MenuId),n.push(r))}),n},U=()=>{let e=!1;return s.filter(n=>n.MenuId==c).map((n,r)=>{n.FilePath!=""&&(e=!0)}),e},_=()=>{let e=U();return L!=""&&(e=!0),e};return t.jsxs(Y,{maxWidth:"xl",children:[t.jsx(Q,{heading:"School Menus",subheading:""}),t.jsx(Z,{smUp:!0,children:t.jsx(i,{sx:{float:"right",mt:"-45px"},children:t.jsx(K,{onClick:()=>{V()},fontSize:"medium"})})}),v&&t.jsxs(a,{container:!0,children:[t.jsx(a,{item:!0,xs:6,children:t.jsx(q,{label:"Search",fullWidth:!0,onChange:e=>{H(e.target.value)},value:p})}),t.jsx(a,{item:!0,xs:6,children:t.jsx(O,{fontSize:"large",onClick:W,sx:{marginTop:"8px",cursor:"pointer"}})})]}),v?p.length<=3?t.jsx(x,{Error:"Please enter more than 3 characters"}):C.length==0?t.jsx(x,{Error:"No records found"}):t.jsx(a,{container:!0,children:C.map((e,n)=>t.jsx(a,{item:!0,xs:12,onClick:()=>{M(e)},children:t.jsx(f,{component:i,padding:1,mt:1,children:e.MenuName})},n))}):t.jsxs(t.Fragment,{children:[t.jsx(j,{variant:"h4",sx:{backgroundColor:"white",p:1},children:"Menu"}),y.length==0?t.jsx(x,{Error:"No records found"}):t.jsxs(a,{container:!0,children:[t.jsx(a,{item:!0,xs:12,onClick:()=>{M({ParentMenuId:"0",MenuId:"0"})},children:t.jsx(f,{component:i,padding:1,mt:1,children:"Home"})}),T().map((e,n)=>t.jsx(a,{item:!0,xs:12,onClick:()=>{M(e)},children:t.jsx(f,{component:i,padding:1,mt:1,ml:e.ParentMenuId?z(n+1):4,children:e.MenuName})},n))]}),t.jsx("br",{}),_()&&t.jsxs(t.Fragment,{children:[t.jsx(j,{variant:"h4",sx:{backgroundColor:"white",p:1},children:"Content"}),t.jsx(X,{})," "]}),t.jsx("br",{}),t.jsx(j,{variant:"h4",sx:{backgroundColor:"white",p:1},children:"Sub-Menu"}),m().length==0?t.jsx(x,{Error:"No records found"}):t.jsx(a,{container:!0,children:m().map((e,n)=>t.jsx(a,{item:!0,xs:12,onClick:()=>{M(e)},children:t.jsx(f,{component:i,padding:1,mt:1,children:e.MenuName})},n))})]})]})}export{he as default,ce as getWithoutHTML};