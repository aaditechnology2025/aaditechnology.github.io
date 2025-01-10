import{j as e,af as ke,B as d,ag as ve,ah as De,ai as V,aj as l,ak as Ne,E as f,I as h,ao as Ae,a9 as Be,ap as ee,aq as Pe,u as Ee,A as He,r as n,z as Oe,c as S,t as Y,jT as We,jU as O,jV as Fe,jW as Le,C as ze,n as W,G as x,bI as _e,o as j,dk as $e,bl as J,F as X,H as Ue,J as F,a0 as Ke,a1 as Ge,bd as Me,a3 as Ve,T as D,a5 as Ye,a6 as Q,av as Je,jX as Xe,jY as Qe,ay as Z}from"./index-CpZD2H93.js";import{d as Ze}from"./AddTwoTone-Dg32XyA0.js";import{d as et}from"./RestartAlt-0rWnjZgh.js";import{d as tt}from"./ArrowCircleUp-C3u-oYJu.js";import{A as st}from"./ArrowCircleDown-7BHmj5tB.js";import{L as ot}from"./Link-QB4wltBd.js";function nt({ItemList:c,HeaderArray:u,ClickHeader:g,clickEdit:C,clickView:R,clickDelete:q,clickCancel:N}){const m=s=>{const r=u.map(i=>i.Id===s?{...i,SortOrder:i.SortOrder==="desc"?"asc":"desc"}:{...i,SortOrder:null});g(r)},I=Number(localStorage.getItem("UserId"));return e.jsx(e.Fragment,{children:e.jsx(ke,{component:d,sx:{border:s=>`1px solid ${s.palette.grey[300]}`},children:e.jsxs(ve,{"aria-label":"simple table",children:[e.jsx(De,{children:e.jsxs(V,{sx:{background:s=>s.palette.secondary.main,color:s=>s.palette.common.white},children:[u.slice(0,6).map((s,r)=>e.jsx(l,{sx:{textTransform:"capitalize",color:i=>i.palette.common.white,py:1},onClick:s.Id!==3?()=>m(s.Id):null,children:e.jsxs("div",{style:{display:"flex",alignItems:"left",gap:2,justifyContent:s.Header.includes("Remark Template")?"flex-start ":"left"},children:[e.jsx("b",{children:s.Header}),s.SortOrder!==null&&s.Id!==3?s.SortOrder==="desc"?e.jsx(tt,{}):e.jsx(st,{}):null]})},r)),u.slice(6).map((s,r)=>e.jsx(l,{sx:{textTransform:"capitalize",color:i=>i.palette.common.white,py:1},children:e.jsx("div",{style:{display:"flex",alignItems:"left",gap:1,justifyContent:s.Header.includes("Remark Template")?"flex-start ":"center"},children:e.jsx("b",{children:s.Header})})},r+6))]})}),e.jsx(Ne,{children:c.map((s,r)=>e.jsxs(V,{children:[e.jsx(l,{sx:{textTransform:"capitalize",textAlign:"left",paddingTop:"2.5px",paddingBottom:"2.5px"},children:s.RequisitionCode}),e.jsx(l,{sx:{textTransform:"capitalize",textAlign:"left",paddingTop:"2.5px",paddingBottom:"2.5px"},children:s.RequisitionName}),e.jsx(l,{sx:{textTransform:"capitalize",textAlign:"left",paddingTop:"2.5px",paddingBottom:"2.5px"},children:s.StatusName}),e.jsx(l,{sx:{textTransform:"capitalize",textAlign:"left",paddingTop:"2.5px",paddingBottom:"2.5px"},children:s.CreaterName}),e.jsx(l,{sx:{textTransform:"capitalize",textAlign:"left",paddingTop:"2.5px",paddingBottom:"2.5px"},children:s.Created_Date}),e.jsx(l,{sx:{textTransform:"capitalize",textAlign:"left",paddingTop:"2.5px",paddingBottom:"2.5px"},children:s.ExpiryDate}),e.jsx(l,{sx:{textTransform:"capitalize",textAlign:"center",paddingTop:"2.5px",paddingBottom:"2.5px"},align:"center",children:s.Editble==="1"?e.jsx(f,{title:"Edit",children:e.jsx(h,{onClick:()=>C(s.Id),sx:{color:"#223354","&:hover":{color:"#223354",cursor:"pointer"}},children:e.jsx(Ae,{})})}):e.jsx(f,{title:"View",children:e.jsx(h,{onClick:()=>R(s.Id),sx:{color:"#223354","&:hover":{color:"#223354",cursor:"pointer"}},children:e.jsx(Be,{})})})}),e.jsx(l,{sx:{textTransform:"capitalize",textAlign:"center",paddingTop:"2.5px",paddingBottom:"2.5px"},children:s.IsDelete==="True"?e.jsx(f,{title:"Delete",children:e.jsx(h,{onClick:()=>q(s.Id),sx:{color:"#223354","&:hover":{color:"red",backgroundColor:ee[100]}},children:e.jsx(Pe,{})})}):e.jsx("span",{})}),e.jsx(l,{sx:{textTransform:"capitalize",textAlign:"center"},children:(s.StatusID=="3"||s.StatusID=="8")&&s.CreatedId!=I?e.jsx(ot,{onClick:()=>N(s.Id),sx:{color:"blue"},children:"Cancel"}):null})]},r))})]})})})}const xt=()=>{const c=Ee(),u=He(),g=Number(localStorage.getItem("localSchoolId")),C=Number(localStorage.getItem("UserId")),[R,q]=n.useState(0),[N,m]=n.useState(!1),[I,s]=n.useState(""),[r,i]=n.useState([]);n.useState(0);const[w,L]=n.useState(""),[b,te]=n.useState(),[z,se]=n.useState("Created_Date desc"),[p,_]=n.useState(20),oe=[20,50,100,200],{showAlert:$,closeAlert:T}=n.useContext(Oe),[y,A]=n.useState(1),[ne,ie]=n.useState([{Id:1,Header:"Code",SortOrder:null,sortKey:"RequisitionCode"},{Id:2,Header:"Requisition",SortOrder:null,sortKey:"RequisitionName"},{Id:3,Header:"Status",SortOrder:null,sortKey:"StatusName"},{Id:4,Header:"Requestor",SortOrder:null,sortKey:"CreaterName"},{Id:5,Header:"Request Date",SortOrder:"desc",sortKey:"Created_Date"},{Id:6,Header:"Expiry Date",SortOrder:null,sortKey:"ExpiryDate"},{Id:7,Header:"Edit/view"},{Id:8,Header:"Delete"},{Id:9,Header:"Cancel"}]),re=t=>{ie(t);const o=t.find(ye=>ye.SortOrder!==null),H=o?`${o.sortKey} ${o.SortOrder}`:"Created_Date desc";se(H)},k=S(t=>t.SliceRequisition.Requisition),a=S(t=>t.SliceRequisition.RequisitionList),v=S(t=>t.SliceRequisition.RequisitionListCount),B=S(t=>t.SliceRequisition.ISDeleteRequisition),P=S(t=>t.SliceRequisition.ISCancelRequisition),ae={asSchoolId:g},U=(y-1)*p,le=U+p,E={asSchoolId:g,asStartIndex:U,asEndIndex:le,asSortExp:`ORDER BY ${z}`,asStatusID:R,asUserId:Number(C)},ce=t=>{te(t),m(!0)},K=t=>{m(!1)},de=()=>{const t={asRequisitionId:b,asReasonText:I,asSchoolId:g,asUpdatedById:Number(C),asCanceledById:Number(C)};if(I.trim()==""){$({title:"Please Confirm",message:"Reason should not be blank.",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onCancel:()=>{T()},onConfirm:()=>{T()}});return}c(Xe(t))},xe=()=>{let t="";return a.map(o=>{o.Id==b&&(t=o.RequisitionCode)}),t},ue=()=>{let t="";return a.map(o=>{o.Id==b&&(t=o.RequisitionName)}),t},pe=()=>{let t="";return a.map(o=>{o.Id==b&&(t=o.StatusName)}),t},he=()=>{let t="";return a.map(o=>{o.Id==b&&(t=o.CreaterName)}),t},ge=t=>{s(t.target.value)},me=t=>{const o={asRequisitionId:t,asSchoolId:g};$({title:"Please Confirm",message:"Are you sure you want to delete this requisition?  ",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onCancel:()=>{T()},onConfirm:()=>{c(Qe(o)),T()}})},je=t=>{q(t),_(20),A(1)},fe=t=>{u("/RITeSchool/Teacher/RequistionView/"+Z(t),{state:{fromInternal:!0}})},Ce=t=>{u("/RITeSchool/Teacher/AddRequisition/"+Z(t),{state:{fromInternal:!0}})},Re=()=>{i(a),L("")},G=()=>{i(w===""?a:a.filter(t=>{const o=t.RequisitionCode.toLowerCase().includes(w.toLowerCase()),H=t.RequisitionName.toLowerCase().includes(w.toLowerCase());return o||H}))},Ie=t=>{L(t)},be=t=>{u("/RITeSchool/Teacher/AddRequisition",{state:{fromInternal:!0}})};n.useEffect(()=>{a&&i(a)},[a]),n.useEffect(()=>{B!=""&&(Y.success(B),c(We()),c(O(E)))},[B]),n.useEffect(()=>{P!=""&&(Y.success(P),c(Fe()),s(""),m(!1),c(O(E)))},[P]),n.useEffect(()=>{k.length>0&&q(k[0].Value)},[k]),n.useEffect(()=>{i(a)},[a]),n.useEffect(()=>{c(Le(ae))},[]);const Se=(y-1)*p+1,M=Math.min(y*p,v.TotalCount),qe=Math.ceil(v.TotalCount/p),we=t=>{_(parseInt(t.target.value,10)),A(1)},Te=t=>{A(t)};return n.useEffect(()=>{c(O(E))},[y,R,z,p]),e.jsxs(d,{sx:{px:2},children:[e.jsx(ze,{navLinks:[{title:"Requisition",path:"/RITeSchool/Teacher/Requisition"}],rightActions:e.jsxs(W,{direction:{xs:"column",sm:"row"},alignItems:"right",spacing:2,sx:{mt:{xs:0,sm:0},flexWrap:{xs:"nowrap",sm:"nowrap"}},children:[e.jsx(x,{item:!0,xs:12,sm:8,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-start"},children:e.jsx(W,{direction:"row",gap:1,alignItems:"left",sx:{flexWrap:{xs:"wrap",sm:"nowrap"},justifyContent:{xs:"flex-start",sm:"flex-start"}},children:e.jsx(d,{children:e.jsx(_e,{sx:{minWidth:{xs:"40vw",sm:"15vw"}},ItemList:k,onChange:je,label:"Status",defaultValue:R.toString(),mandatory:!0,size:"small"})})})}),e.jsx(d,{children:e.jsx(j,{sx:{minWidth:{xs:"40vw",sm:"15vw"}},fullWidth:!0,label:"Item Code/ Requisition",value:w,variant:"outlined",size:"small",onChange:t=>{Ie(t.target.value)},onKeyDown:t=>{(t.key==="Enter"||t.key==="Tab")&&G()}})}),e.jsxs(W,{direction:{xs:"row",sm:"row"},spacing:1,alignItems:"center",justifyContent:"flex-start",sx:{width:"100%",flexWrap:{xs:"wrap",sm:"nowrap"}},children:[e.jsx(h,{onClick:G,sx:{background:t=>t.palette.primary.main,color:"white","&:hover":{backgroundColor:t=>t.palette.primary.dark}},children:e.jsx($e,{})}),e.jsx(f,{title:"Reset",children:e.jsx(h,{sx:{color:"white",backgroundColor:J[500],"&:hover":{backgroundColor:J[600]}},onClick:Re,children:e.jsx(et,{})})}),e.jsx(d,{children:e.jsx(f,{title:"Here you can see list of existing requisition according to status.",children:e.jsx(h,{sx:{color:"white",backgroundColor:X[500],"&:hover":{backgroundColor:X[600]}},children:e.jsx(Ue,{})})})}),e.jsx(d,{children:e.jsx(f,{title:"Add Requisition",children:e.jsx(h,{onClick:be,sx:{color:"white",backgroundColor:F[500],height:"36px !important",":hover":{backgroundColor:F[600]}},children:e.jsx(Ze,{})})})})]})]})}),e.jsxs(Ke,{open:N,maxWidth:"sm",fullWidth:!0,onClose:()=>m(!1),PaperProps:{sx:{borderRadius:"15px"}},children:[e.jsx(Ge,{sx:{bgcolor:"#223354"},children:e.jsx(Me,{onClick:K,sx:{color:"white",borderRadius:"7px",position:"absolute",top:"5px",right:"8px",cursor:"pointer","&:hover":{color:"red"}}})}),e.jsxs(Ve,{children:[e.jsx("h1",{children:"Cancel Approved Requisition"}),e.jsxs(d,{sx:{background:"white",pl:4.6,top:"1px"},children:[e.jsx(x,{container:!0,spacing:1,alignItems:"center",children:e.jsx(x,{item:!0,xs:2,children:e.jsx(j,{sx:{minWidth:"30vw",bgcolor:"#F0F0F0"},label:"Requisition Code",variant:"outlined",value:xe(),inputProps:{style:{color:"rgb(0, 0, 0)"}}})})}),e.jsx("br",{}),e.jsx(x,{container:!0,spacing:1,alignItems:"center",children:e.jsx(x,{item:!0,xs:2,children:e.jsx(j,{sx:{minWidth:"30vw",bgcolor:"#F0F0F0"},label:"Requisition Name",value:ue(),inputProps:{style:{color:"rgb(0, 0, 0)"}}})})}),e.jsx("br",{}),e.jsx(x,{container:!0,spacing:1,alignItems:"center",children:e.jsx(x,{item:!0,xs:2,children:e.jsx(j,{sx:{minWidth:"30vw",bgcolor:"#F0F0F0"},label:"Requisition Status",value:pe(),inputProps:{style:{color:"rgb(0, 0, 0)"}}})})}),e.jsx("br",{}),e.jsx(x,{container:!0,spacing:1,alignItems:"center",children:e.jsx(x,{item:!0,xs:2,children:e.jsx(j,{sx:{minWidth:"30vw",bgcolor:"#F0F0F0"},label:"Requester",value:he(),inputProps:{style:{color:"rgb(0, 0, 0)"}}})})}),e.jsx("br",{}),e.jsxs(D,{variant:"h4",sx:{mb:1},children:["Reason to cancel   ",e.jsx(D,{component:"span",sx:{color:ee[500]},children:"*"})]}),e.jsx(j,{multiline:!0,rows:3,type:"text",value:I,onChange:ge,sx:{width:"90%"}})]})]}),e.jsxs(Ye,{sx:{py:2,px:3},children:[e.jsx(Q,{color:"error",onClick:K,children:"Cancel"}),e.jsx(Q,{onClick:de,sx:{color:"green","&:hover":{color:"green",backgroundColor:F[100]}},children:"Save"})]})]}),e.jsxs(d,{mb:1,sx:{p:2,background:"white"},children:[r.length>0?e.jsx("div",{style:{flex:1,textAlign:"center"},children:e.jsxs(D,{variant:"subtitle1",sx:{margin:"16px 0",textAlign:"center"},children:[e.jsxs(d,{component:"span",fontWeight:"fontWeightBold",children:[Se," to ",M]})," ","out of"," ",e.jsx(d,{component:"span",fontWeight:"fontWeightBold",children:v.TotalCount})," ",v.TotalCount===1?"record":"records"]})}):e.jsx("span",{}),r&&r.length===0?e.jsx(D,{variant:"body1",sx:{textAlign:"center",marginTop:1,backgroundColor:"#324b84",padding:1,borderRadius:2,color:"white"},children:e.jsx("b",{children:"No record found."})}):e.jsx(nt,{HeaderArray:ne,ItemList:r,ClickHeader:re,clickEdit:Ce,clickView:fe,clickDelete:me,clickCancel:ce}),M>19?e.jsx(Je,{rowsPerPage:p,ChangeRowsPerPage:we,rowsPerPageOptions:oe,PageChange:Te,pagecount:qe}):e.jsx("span",{})]})]})};export{xt as default};