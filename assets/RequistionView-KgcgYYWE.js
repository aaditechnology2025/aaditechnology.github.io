import{j as e,d5 as H,af as A,B as c,ag as v,ah as U,ai as g,aj as a,ak as k,ap as i,u as z,q as F,v as N,r as m,az as f,c as h,jZ as Q,C as G,E as M,I as O,F as D,H as E,G as d,o as p}from"./index-CpZD2H93.js";import{R as P}from"./Requisioneditlist-DwbfLHGT.js";const B=({DateValue:r,onDateChange:n,label:t,size:o})=>e.jsx(e.Fragment,{children:e.jsx(H,{value:r?new Date(r):null,onChange:n,format:"dd MMM yyyy",label:t?e.jsx(e.Fragment,{children:t}):"Select Date",views:["year","month","day"],slotProps:{textField:{variant:"outlined",fullWidth:!0,size:o||"medium"}}})});function V({ItemList:r,HeaderArray:n}){return e.jsx(A,{component:c,children:e.jsxs(v,{"aria-label":"simple table",sx:{border:t=>`1px solid ${t.palette.grey[300]}`},children:[e.jsx(U,{sx:{overflow:"auto"},children:e.jsx(g,{sx:{background:t=>t.palette.secondary.main,color:t=>t.palette.common.white},children:n.map((t,o)=>e.jsx(a,{sx:{textTransform:"capitalize",color:u=>u.palette.common.white,py:1},children:e.jsx("div",{style:{display:"flex",alignItems:"left",gap:1,justifyContent:t.Header.includes("Remark Template")?"flex-start":"left"},children:e.jsx("b",{children:t.Header})})},o))})}),e.jsx(k,{children:r.map(t=>e.jsxs(g,{children:[e.jsx(a,{sx:{textTransform:"capitalize",textAlign:"left",color:t.ItemStatus==="Denied"?i[500]:""},children:t.ItemCode}),e.jsx(a,{sx:{textTransform:"capitalize",textAlign:"left",color:t.ItemStatus==="Denied"?i[500]:""},children:t.ItemName}),e.jsx(a,{sx:{textTransform:"capitalize",textAlign:"left",color:t.ItemStatus==="Denied"?i[500]:""},children:t.CurrentStock}),e.jsxs(a,{sx:{textTransform:"capitalize",textAlign:"left",color:t.ItemStatus==="Denied"?i[500]:""},children:[t.ItemQty," ",t.UOMUnit]}),e.jsxs(a,{sx:{textTransform:"capitalize",textAlign:"left",color:t.ItemStatus==="Denied"?i[500]:""},children:[t.ItemOrgQty," ",t.UOMUnit]}),e.jsxs(a,{sx:{textTransform:"capitalize",textAlign:"left",color:t.ItemStatus==="Denied"?i[500]:""},children:[t.IssueQty," ",t.UOMUnit]}),e.jsxs(a,{sx:{textTransform:"capitalize",textAlign:"left",color:t.ItemStatus==="Denied"?i[500]:""},children:[t.ReturnQty," ",t.UOMUnit]}),e.jsxs(a,{sx:{textTransform:"capitalize",textAlign:"left",color:t.ItemStatus==="Denied"?i[500]:""},children:[t.CancelQty," ",t.UOMUnit]})]},t.ItemID))})]})})}const Y=()=>{const r=z(),{ViewId:n}=F(),t=N(n),[o,u]=m.useState(f(new Date)),b=(s,x)=>{const I=new Date(s);return I.setDate(s.getDate()+x),f(I)};m.useEffect(()=>{const x=b(new Date,10);u(x)},[]),Number(sessionStorage.getItem("AcademicYearId"));const R=Number(localStorage.getItem("localSchoolId"));Number(localStorage.getItem("UserId"));const l=h(s=>s.SliceAddRequisition.ISGetRequisitionDetails),j=h(s=>s.SliceAddRequisition.ISGetRequisitionDetails1);h(s=>s.SliceAddRequisition.ISGetRequisitionDetails2);const y=l.map(s=>s.RequisitionName),S=l.map(s=>s.RequisitionDescription),q=l.map(s=>s.ActionComment),w=[{Id:1,Header:"Item Code"},{Id:2,Header:"Item Name"},{Id:3,Header:"Current Stock"},{Id:4,Header:"Item Quantity"},{Id:5,Header:"Original Qty"},{Id:6,Header:"Issued Qty"},{Id:7,Header:"Returned Qty"},{Id:8,Header:"Cancelled Qty"}],T=[{Id:1,Header:"Status Changed by"},{Id:2,Header:"Request Status"},{Id:3,Header:"Date"}],C={asSchoolId:R,asRequisitionId:Number(t),asMode:"View"};return m.useEffect(()=>{r(Q(C))},[atob(n)]),e.jsxs(c,{sx:{px:2},children:[e.jsx(G,{navLinks:[{title:"Requisition",path:"/RITeSchool/Teacher/Requisition"},{title:"Requisition Details",path:"/RITeSchool/Teacher/AddRequisition"}],rightActions:e.jsx(e.Fragment,{children:e.jsx(M,{title:"Here you can create, modify, view, approve, denied requisition.",children:e.jsx(O,{sx:{color:"white",backgroundColor:D[500],height:"36px !important",":hover":{backgroundColor:D[600]}},children:e.jsx(E,{})})})})}),l.length>0?e.jsxs(c,{mb:1,sx:{p:2,background:"white"},children:[e.jsx(V,{ItemList:l,HeaderArray:w}),e.jsx("br",{}),e.jsx(d,{item:!0,xs:12,children:e.jsx(p,{label:e.jsx("span",{children:"Requisition Name"}),sx:{bgcolor:"#F0F0F0",width:"100%"},rows:3,value:y[0],fullWidth:!0,disabled:!0})}),e.jsx("br",{}),e.jsx(d,{item:!0,xs:12,children:e.jsx(p,{label:e.jsx("span",{children:"Requisition Description"}),multiline:!0,rows:3,value:S[0],fullWidth:!0,disabled:!0})}),e.jsx("br",{}),e.jsx(d,{item:!0,xs:12,children:e.jsx(p,{label:e.jsx("span",{children:"Comment"}),multiline:!0,rows:3,value:q[0],fullWidth:!0,disabled:!0})}),e.jsx("br",{}),e.jsx(d,{container:!0,spacing:2,children:e.jsx(d,{item:!0,xs:6,sm:2,md:2,lg:2,children:e.jsx(B,{DateValue:o,onDateChange:"",label:"Expiry Date",size:"small"})})})]}):null,j!=""&&l.length>0?e.jsx(c,{mb:1,sx:{p:2,background:"white"},children:e.jsx(P,{ItemList:j,HeaderArray:T})}):e.jsx("span",{})]})};export{Y as default};