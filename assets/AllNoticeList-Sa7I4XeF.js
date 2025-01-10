import{U as oe,V as le,j as e,r as l,z as ae,A as ie,u as se,c as d,lK as b,B as i,C as re,bI as ne,E as r,I as n,F as y,H as ce,J as u,K as de,G as C,a7 as he,c7 as T,c1 as xe,af as ue,ag as me,ah as ge,ai as k,aj as a,ak as Se,ap as pe,aq as je,T as fe,lL as Ne,lM as be,t as Ce}from"./index-CpZD2H93.js";import{d as ve}from"./AddTwoTone-Dg32XyA0.js";import{d as we}from"./PriorityHigh-GKb8m_z9.js";import{h as P}from"./moment-CaEEsv53.js";import{y as F}from"./yellow-BQYah5ZS.js";import{R as De}from"./RadioGroup-DpIwLy2j.js";import{R as E}from"./Radio-IVxzoZco.js";import{T as Ie}from"./TablePagination-BsPHYpbC.js";import"./FormGroup-C5-m8U5s.js";import"./KeyboardArrowRight-BMnDPiZn.js";var v={},Ae=le;Object.defineProperty(v,"__esModule",{value:!0});var U=v.default=void 0,Re=Ae(oe()),ye=e,Te=(0,Re.default)((0,ye.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");U=v.default=Te;const ke=[{id:"name",label:"Link Name",minWidth:150,align1:"left"},{id:"Display_Location",label:"Display Location",minWidth:150},{id:"StartDateTime",label:"Start Date & Time",minWidth:150,align:"right",format:o=>o.toLocaleString("en-US")},{id:"EndDateTime",label:"End Date & Time",minWidth:150,align:"right",format:o=>o.toLocaleString("en-US")},{id:"sortOrder",label:"Sort Order",minWidth:150,align:"right",format:o=>o.toFixed(2)},{id:"fileName",label:"File Name",minWidth:150,align:"right",format:o=>o.toFixed(2)},{id:"select",label:"Select",minWidth:150,align:"right",format:o=>o.toFixed(2)},{id:"edit",label:"Edit",minWidth:150,align:"right",format:o=>o.toFixed(2)},{id:"delete",label:"Delete",minWidth:150,align:"right",format:o=>o.toFixed(2)}],He=()=>{const[o,w]=l.useState(0),[s,L]=l.useState(5),[m,W]=l.useState("AllFile"),[g,_]=l.useState("All"),[D,G]=l.useState([]),[S,B]=l.useState([]),[M,V]=l.useState([]),{showAlert:H,closeAlert:I}=l.useContext(ae),[Pe,O]=l.useState();localStorage.getItem("localSchoolId");const Y=localStorage.getItem("Id"),A=ie(),z=(t,x)=>{w(x)},$=t=>{L(+t.target.value),w(0)},q=t=>{W(t.target.value)},K=[{Value:"All",Name:"All"},{Value:"Both",Name:"Both"},{Value:"Control Panel",Name:"Control Panel"},{Value:"Home Page",Name:"Home Page"}],J=t=>{_(t)},c=se(),h=d(t=>t.AddSchoolNotice.ISGetAllNoticeList);d(t=>t.UpdateSelectNotice.ISUpdateSelectNotice);const R=d(t=>t.DeleteSchoolNotice.ISDeleteSchoolNotice),p=d(t=>t.GetUserRolesForSelectedNoticeId.ISGetUserRolesForSelectedNoticeId);d(t=>t.GetStandardDivisionsForSelectedNoticeId.ISGetStandardDivisionsForSelectedNoticeId),l.useEffect(()=>{p&&O(p)},[p]);const j=Number(localStorage.getItem("localSchoolId")),f={asSchoolId:j,asDisplayLocation:g,asShowAllNotices:m==="AllFile",asText:!1,asSortExpression:"StartDate desc",StartRowIndex:0,MaximumRows:s},X={asSchoolId:j,asNoticeXml:S.outSortOrder},Q={asSchoolId:j,asNoticeId:M,asUpdatedById:Y};l.useEffect(()=>{c(b(f))},[m,s,g]),l.useEffect(()=>{h&&G(h)},[h]);const Z=()=>{c(Ne(X))},ee=({NoticeId:t})=>{V(t),H({title:"Please Confirm",message:"Are you sure you want to delete this Notice?  ",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onCancel:()=>{I()},onConfirm:()=>{c(be(Q)),Ce.success(R),c(b(f)),I()}}),l.useEffect(()=>{c(b(f))},[R])},te=t=>{const x=S.indexOf(t),N=[...S];x===-1?N.push(t):N.splice(x,1),B(N)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{sx:{px:2},children:e.jsx(re,{navLinks:[{title:"School Notice",path:"/RITeSchool/Teacher/AllSchoolNotice"}],rightActions:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsx(ne,{ItemList:K,onChange:J,label:"Select Display Location",mandatory:!0,defaultValue:g,size:"small",sx:{minWidth:"17vw"}})}),e.jsx(i,{children:e.jsx(r,{title:"Select the notices from the list to be displayed on School web site under School Notices.",children:e.jsx(n,{sx:{color:"white",backgroundColor:F[600],height:"36px !important",":hover":{backgroundColor:F[700]}},children:e.jsx(we,{})})})}),e.jsx(i,{children:e.jsx(r,{title:"Displays all uploaded school notices.",children:e.jsx(n,{sx:{color:"white",backgroundColor:y[500],height:"36px !important",":hover":{backgroundColor:y[600]}},children:e.jsx(ce,{})})})}),e.jsx(i,{children:e.jsx(r,{title:"Add New Notice",children:e.jsx(n,{onClick:()=>A("/RITeSchool/Teacher/AddSchoolNotice",{state:{fromInternal:!0}}),sx:{color:"white",backgroundColor:u[500],"&:hover":{backgroundColor:u[600]}},children:e.jsx(ve,{})})})}),e.jsx(i,{children:e.jsx(r,{title:"Save Notice",children:e.jsx(n,{sx:{color:"white",backgroundColor:u[500],height:"36px !important",":hover":{backgroundColor:u[600]}},onClick:Z,children:e.jsx(de,{})})})})]})})}),e.jsx(C,{container:!0,children:e.jsx(C,{sm:12,px:2,sx:{display:"flex",justifyItems:"center"},children:e.jsx(C,{children:e.jsx(he,{component:"fieldset",children:e.jsxs(De,{row:!0,"aria-label":"options",name:"options",value:m,onChange:q,children:[e.jsx(T,{value:"AllFile",control:e.jsx(E,{}),label:"Show All Notices"}),e.jsx(T,{value:"Activefile",control:e.jsx(E,{}),label:"Show Active Notices"})]})})})})}),e.jsx(i,{m:2,children:h.length>0?e.jsxs(xe,{sx:{width:"100%",overflow:"hidden"},children:[e.jsx(ue,{children:e.jsxs(me,{stickyHeader:!0,"aria-label":"sticky table",children:[e.jsx(ge,{children:e.jsx(k,{children:ke.map(t=>e.jsx(a,{align:"center",style:{minWidth:t.minWidth,backgroundColor:"#19bed4",color:"#fff",fontSize:15,fontWeight:"600"},children:t.label},t.id))})}),e.jsx(Se,{children:D.slice(o*s,o*s+s).map(t=>e.jsxs(k,{hover:!0,role:"checkbox",children:[e.jsx(a,{children:t.NoticeName}),e.jsx(a,{children:t.DisplayLocation}),e.jsx(a,{align:"center",children:P(t.StartDate).format("DD MMM YYYY   h:mm a")}),e.jsx(a,{align:"center",children:P(t.EndDate).format("DD MMM YYYY   h:mm a")}),e.jsx(a,{align:"center",children:t.dbSortOrder}),e.jsx(a,{sx:{color:"#0000EE"},children:t.FileName}),e.jsx(a,{align:"center",children:e.jsx("input",{type:"checkbox",style:{height:"18px",width:"18px"},onChange:()=>te(t.NoticeName)})}),e.jsx(a,{align:"center",children:e.jsx(r,{title:"Edit",children:e.jsx(n,{sx:{color:"#223354","&:hover":{color:"#223354",cursor:"pointer"}},onClick:()=>A("/RITeSchool/Teacher/AddSchoolNotice",{state:t}),children:e.jsx(U,{})})})}),e.jsx(a,{align:"center",children:e.jsx(r,{title:"Delete",children:e.jsx(n,{sx:{color:"#223354","&:hover":{color:"red",backgroundColor:pe[100]}},onClick:()=>ee(t),children:e.jsx(je,{})})})})]}))})]})}),e.jsx(Ie,{rowsPerPageOptions:[10,20,100],component:"div",count:D.length,rowsPerPage:s,page:o,onPageChange:z,onRowsPerPageChange:$})]}):e.jsx(fe,{variant:"body1",sx:{textAlign:"center",marginTop:1,backgroundColor:"#324b84",padding:1,borderRadius:2,color:"white"},children:e.jsx("b",{children:"No record found."})})})]})};export{He as default};