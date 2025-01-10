import{j as e,B as d,T as f,af as ie,ag as xe,ah as he,ai as B,aj as h,ak as ue,E as j,ao as Se,a9 as ge,L as me,M as pe,N as fe,O as je,Q as N,u as Ie,A as Ce,r as a,c as w,iN as be,iO as _,C as Te,bI as Ae,o as ye,G as Ne,c7 as we,bH as Re,I as $,F as W,H as ke,dk as ve,c1 as De,av as Ee,ay as K}from"./index-CpZD2H93.js";import{d as He}from"./ArrowCircleUp-C3u-oYJu.js";import{A as Oe}from"./ArrowCircleDown-7BHmj5tB.js";function Pe({ItemList:i,HeaderArray:x,ClickHeader:l,clickEdit:p,clickView:u}){const I=s=>{const c=x.map(r=>r.Id===s?{...r,SortOrder:r.SortOrder==="ASC"?"DESC":"ASC"}:{...r,SortOrder:null});l(c)};Number(localStorage.getItem("UserId"));const o={padding:"0.2em 1.5em"},C={height:"0.5em 1.5em"};return e.jsx("div",{children:i.length===0?e.jsx(d,{sx:{backgroundColor:"#D2FDFC"},children:e.jsx(f,{variant:"h6",align:"center",color:"blue",sx:{textAlign:"center",marginTop:1,backgroundColor:"#324b84",padding:1,borderRadius:2,color:"white"},children:"No record found."})}):e.jsx(e.Fragment,{children:e.jsx(ie,{component:d,sx:{border:s=>`1px solid ${s.palette.grey[300]}`},children:e.jsxs(xe,{"aria-label":"simple table",children:[e.jsx(he,{children:e.jsxs(B,{sx:{background:s=>s.palette.secondary.main,color:s=>s.palette.common.white,...C},children:[x.slice(0,6).map((s,c)=>e.jsx(h,{sx:{textTransform:"capitalize",color:r=>r.palette.common.white,py:1},onClick:()=>I(s.Id),children:e.jsxs("div",{style:{display:"flex",gap:1,justifyContent:s.Id===1||s.Id===2||s.Id===3||s.Id===4||s.Header.includes("Remark Template")?"left":"center"},children:[e.jsx("b",{children:s.Header}),c<4&&s.SortOrder!==null&&(s.SortOrder==="DESC"?e.jsx(Oe,{}):e.jsx(He,{}))]})},c)),x.slice(6).map((s,c)=>e.jsx(h,{sx:{textTransform:"capitalize",color:r=>r.palette.common.white,py:1},children:e.jsx("div",{style:{display:"flex",alignItems:"center",gap:1,justifyContent:s.Header.includes("Remark Template")?"flex-start ":"center",...o},children:e.jsx("b",{children:s.Header})})},c+6))]})}),e.jsx(ue,{children:i.map((s,c)=>e.jsxs(B,{children:[e.jsx(h,{sx:{textTransform:"capitalize",...o,textAlign:"left"},children:s.Text1}),e.jsx(h,{sx:{textTransform:"capitalize",...o,textAlign:"left"},children:s.Text2}),e.jsx(h,{sx:{textTransform:"capitalize",...o,textAlign:"left"},children:s.Text3}),e.jsx(h,{sx:{textTransform:"capitalize",...o,textAlign:"left"},children:s.Text4}),e.jsx(h,{sx:{textTransform:"capitalize",...o,textAlign:"center"},children:s.Text5}),e.jsx(h,{sx:{textTransform:"capitalize",textAlign:"center",...o},align:"center",children:s.IsRecordFound===!1?e.jsx(j,{title:"Add",children:e.jsx(Se,{onClick:()=>p(s.Id,s.Text4),sx:{color:"#223354","&:hover":{bgcolor:"grey.300",cursor:"pointer"}}})}):e.jsx(j,{title:"View / Edit",children:e.jsx(ge,{onClick:()=>u(s.Id,s.Text4),sx:{color:"#223354","&:hover":{bgcolor:"grey.300",cursor:"pointer"}}})})})]},c))})]})})})})}const Le=()=>{const i=["Principal and Counsellor can see those students to whom details are submitted by class teacher(s)."],x=["If Principal or Counsellor is a class teacher of any class then on selection of same class, he / she can see all students to whom details of selected class."],l=["Status column will show unread, unsubmitted student records and comments."];return e.jsx(e.Fragment,{children:e.jsxs(me,{defaultExpanded:!0,children:[e.jsx(pe,{expandIcon:e.jsx(fe,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsx(f,{style:{fontWeight:"bold",fontSize:"20px"},children:"Important Notes"})}),e.jsxs(je,{sx:{gap:1,display:"flex",flexDirection:"column"},children:[e.jsxs(N,{variant:"filled",severity:"info",children:[e.jsx("b",{children:"Note 1 : "})," ",i]}),e.jsxs(N,{variant:"filled",severity:"info",children:[e.jsx("b",{children:"Note 2 : "})," ",x]}),e.jsxs(N,{variant:"filled",severity:"info",children:[e.jsx("b",{children:"Note 3 : "})," ",l]})]})]})})},Ke=()=>{const i=Ie(),x=Ce(),[l,p]=a.useState("0"),[u,I]=a.useState(!1),[o,C]=a.useState(""),[s,c]=a.useState([]),[r,R]=a.useState(20),M=[20,50,100,200],[S,b]=a.useState(1),U=s.filter(t=>t.TotalRows!==void 0).map(t=>t.TotalRows),g=[...new Set(U)][0],Y=(S-1)*r+1,k=Math.min(S*r,g),V=Math.ceil(g/r),[v,q]=a.useState("ClassName"),[D,J]=a.useState("ASC"),E=JSON.parse(sessionStorage.getItem("ScreensAccessPermission")),H=Number(localStorage.getItem("localSchoolId")),O=Number(sessionStorage.getItem("AcademicYearId"));Number(sessionStorage.getItem("StandardDivisionId")),Number(sessionStorage.getItem("TeacherId")),localStorage.getItem("Id");const P=Number(sessionStorage.getItem("Id")),m=w(t=>t.StudentRecords.ClassTeachers),L=w(t=>t.StudentRecords.GetAssociatedTeacher),T=w(t=>t.StudentRecords.StudentStatus),[Q,X]=a.useState([{Id:1,Header:"Registration Number",SortOrder:null,sortKey:"Enrolment_Number"},{Id:2,Header:"Roll No.",SortOrder:null,sortKey:"Roll_No"},{Id:3,Header:"Class",SortOrder:"ASC",sortKey:"ClassName"},{Id:4,Header:"Name",SortOrder:null,sortKey:"StudentName"},{Id:5,Header:"Action For Me"},{Id:6,Header:"Action"}]),Z=t=>{X(t);const n=t.find(de=>de.SortOrder!==null),A=n?`${n.sortKey}`:"ClassName";q(A);const y=n?`${n.SortOrder}`:"ASC";J(y)},F=(()=>{let t="N";return E&&E.map(n=>{n.ScreenName==="Student Records"&&(t=n.IsFullAccess)}),t})(),ee=(()=>{if(m.length>0&&L.length>0){const t=l,n=L[0].AssociatedClassId;return t!==n}return!0})();a.useEffect(()=>{i(be(te))},[]),a.useEffect(()=>{m.length>0&&p(m[0].Value)},[m]),a.useEffect(()=>{c(T)},[T]),a.useEffect(()=>{i(_(G))},[l,S,r,v,D]);const te={AsSchoolId:H,AsAcademicYearId:O,AsUserId:P,AsHasFullAccess:F!="N"},G={asSchoolId:Number(H),asAcademicYearId:Number(O),asStdDivId:Number(l),asFilter:o.toString(),sortExpression:v,sortDirection:D,StartIndex:(S-1)*r,EndIndex:S*r,ShowSaved:ee,IncludeRiseAndShine:u,HasEditAccess:F=="N"?"N":"Y",UserId:P},se=t=>{p(t),R(20),b(1)},z=()=>{let t=T;o!==""&&(t=t.filter(n=>{const A=n.Text1.toLowerCase().includes(o.toLowerCase()),y=n.Text4.toLowerCase().includes(o.toLowerCase());return A||y})),u&&(t=t.filter(n=>n.RiseAndShine===!0)),c(t),i(_(G))},re=t=>{C(t)},ne=t=>{I(t)},oe=t=>{x("/RITeSchool/Teacher/AddStudentRecord/Add/"+K(l)+"/"+t,{state:{fromInternal:!0}})},ae=t=>{x("/RITeSchool/Teacher/AddStudentRecord/Edit/"+K(l)+"/"+t,{state:{fromInternal:!0}})},ce=t=>{b(t)},le=t=>{R(parseInt(t.target.value,10)),b(1)};return e.jsxs(d,{sx:{px:2},children:[e.jsx(Te,{navLinks:[{title:"Student Record List",path:"/RITeSchool/Teacher/StudentRecordBaseScreen"}],rightActions:e.jsxs(e.Fragment,{children:[e.jsx(d,{sx:{background:"white"},children:e.jsx(d,{sx:{background:"white"},children:e.jsx(Ae,{sx:{minWidth:"25vw"},ItemList:m,onChange:se,label:"Class(s) ",defaultValue:l,size:"small"})})}),e.jsx(ye,{sx:{width:"15vw"},fullWidth:!0,label:"Registration Number / Name ",value:o,variant:"outlined",size:"small",onChange:t=>{re(t.target.value)},onKeyDown:t=>{(t.key==="Enter"||t.key==="Tab")&&z()}}),e.jsx(Ne,{item:!0,xs:4,children:e.jsx(f,{margin:"1px",children:e.jsx(we,{control:e.jsx(Re,{checked:u,onChange:t=>{ne(t.target.checked)}}),label:"Show only Rise and Shine Students"})})}),e.jsx(d,{sx:{display:"flex",alignItems:"center"},children:e.jsx(j,{title:"Display list of students as per selected class and filter and it's status.",children:e.jsx($,{sx:{color:"white",backgroundColor:W[500],height:"36px !important",":hover":{backgroundColor:W[600]},marginRight:"-4px"},children:e.jsx(ke,{})})})}),e.jsx(j,{title:"Search",children:e.jsx($,{onClick:z,sx:{background:t=>t.palette.primary.main,color:"white","&:hover":{backgroundColor:t=>t.palette.primary.dark}},children:e.jsx(ve,{})})})]})}),e.jsx(De,{sx:{mb:"10px"},children:e.jsx(Le,{})}),e.jsxs(d,{sx:{background:"white",p:2},children:[g>r?e.jsx("div",{style:{flex:1,textAlign:"center"},children:e.jsxs(f,{variant:"subtitle1",sx:{margin:"16px 0",textAlign:"center"},children:[e.jsxs(d,{component:"span",fontWeight:"fontWeightBold",children:[Y," to ",k]})," ","out of"," ",e.jsx(d,{component:"span",fontWeight:"fontWeightBold",children:g})," ",g===1?"record":"records"]})}):e.jsx("span",{children:" "}),e.jsx(Pe,{ItemList:s,HeaderArray:Q,ClickHeader:Z,clickEdit:oe,clickView:ae}),k>19?e.jsx(Ee,{rowsPerPage:r,ChangeRowsPerPage:le,rowsPerPageOptions:M,PageChange:ce,pagecount:V}):e.jsx("span",{})]})]})};export{Ke as default};