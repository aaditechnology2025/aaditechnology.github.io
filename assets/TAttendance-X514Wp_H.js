import{U as Le,V as Fe,j as e,r as a,B as f,bJ as de,T,bj as ft,I as R,E as P,ap as Ee,aq as bt,bE as Me,az as St,gB as W,G as g,ab as Pe,gC as Ct,o as ue,gD as jt,gE as At,gF as It,gG as vt,h as Dt,F as Y,P as Ie,c7 as yt,bH as kt,u as Re,A as _e,c as w,gi as Be,gH as Ye,a0 as wt,a1 as Tt,H as We,bd as Nt,a3 as Lt,ag as Ft,ah as Et,ai as ve,aj as De,ak as Mt,n as Oe,q as ye,S as Pt,z as Rt,v as _t,cm as ke,gI as Bt,gJ as Yt,gK as Wt,gL as q,gM as ne,t as we,gN as Ot,gO as Vt,C as Ht,bl as E,bI as zt,ay as O,gP as ce,gQ as Gt,J as Te,K as $t,gR as Jt,gS as Ut}from"./index-CpZD2H93.js";import{d as qt}from"./ChevronRightTwoTone-CAnY7-jl.js";import{D as X}from"./DotLegendAttandaceCalender-CglCrcbT.js";import{t as Xt,u as Kt}from"./CardStyle-CBuNm0_N.js";import{C as Qt}from"./CheckboxImg-BrcA302U.js";import{L as Zt}from"./ListHeaderCard3ColSel-e-z25ypD.js";import"./DotLegendStyled-CQchpEqY.js";import"./Card-B0aZ7mGs.js";import"./RadioButtonUnchecked-r_6mn_G1.js";import"./DoNotDisturbOn-Dociqe_h.js";const es={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5"},ts=es;var xe={},ss=Fe;Object.defineProperty(xe,"__esModule",{value:!0});var Ve=xe.default=void 0,ns=ss(Le()),as=e,rs=(0,ns.default)((0,as.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");Ve=xe.default=rs;var he={},os=Fe;Object.defineProperty(he,"__esModule",{value:!0});var He=he.default=void 0,ls=os(Le()),is=e,cs=(0,ls.default)((0,is.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"}),"ChevronLeftTwoTone");He=he.default=cs;function Ne({item:s,clickItem:i,DefaultValue:u,options:r=void 0,assignedDate:x,color:j}){a.useState(!1);const c=n=>{s.IsClickable&&i(n)};return e.jsx("div",{children:e.jsxs(f,{sx:{height:"90px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",cursor:"pointer",backgroundColor:n=>{var h;return((h=s.Value)==null?void 0:h.replaceAll("-"," "))===x?(c(s.Value),de(n.palette.primary.main,.2)):j}},onClick:()=>c(s.Value),style:{color:s.ForeColur},children:[e.jsx(T,{children:s.Name}),e.jsx("b",{children:e.jsx(f,{dangerouslySetInnerHTML:{__html:s.Text1},sx:{fontSize:{xs:"9px",sm:"14px",md:"16px"}}})})]})})}function ds({ItemList:s,ClickItem:i,formattedDate:u,DefaultValue:r,assignedDate:x,ArrayList:j=[],getAssignedDateStatus:c,ClickDeleteAttendance:n,clickNav:h,Standardid:D}){const m=s.map(d=>{const b=new Date(d.Value),l=new Date(u),v=l.getMonth(),y=l.getFullYear(),p=b.getMonth()===v&&b.getFullYear()===y;return{...d,isCurrentMonth:p}}),A=d=>{let b;u.split(" ").length===2?b=new Date("1 "+u):b=new Date(u);const l=b.getMonth()+d;d<0?b=new Date(b.getFullYear(),l,1):(b.setDate(1),b.setMonth(l));const v=new Date;b.getMonth()===v.getMonth()&&b.getFullYear()===v.getFullYear()&&(b=v),i(W(b))};let _=new Date(new Date(u).getFullYear(),new Date(u).getMonth(),1).getDay();const L=a.useRef(null);return ft("sm"),e.jsxs(f,{p:2,children:[e.jsxs(f,{sx:{mt:1,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(f,{children:e.jsxs(T,{sx:{fontWeight:"normal !important",display:"flex",alignItems:"center",gap:1},variant:"h3",children:[e.jsxs("div",{style:{whiteSpace:"nowrap"},children:[e.jsx(R,{onClick:()=>A(-1),sx:{color:d=>d.palette.primary.main,backgroundColor:d=>de(d.palette.primary.main,.2),marginRight:"8px"},children:e.jsx(He,{})}),u," ",e.jsx(R,{onClick:()=>A(1),sx:{color:d=>d.palette.primary.main,backgroundColor:d=>de(d.palette.primary.main,.2),marginLeft:"8px"},children:e.jsx(qt,{})})]}),e.jsx("div",{style:{fontWeight:"bold",fontSize:"16px",color:ts[500]}})]})}),e.jsxs(f,{sx:{display:"flex",alignItems:"center",gap:1},children:[c()=="Done"&&e.jsx(P,{title:"Delete",children:e.jsx(R,{sx:{color:"#223354","&:hover":{color:"red",backgroundColor:Ee[100]}},onClick:()=>n(),children:e.jsx(bt,{})})}),e.jsxs(R,{color:"primary",onClick:()=>{L.current.showPicker()},children:[e.jsx(Me,{}),e.jsx("input",{ref:L,style:{position:"absolute",visibility:"hidden"},type:"date",max:new Date().toISOString().split("T")[0],value:St(u),onChange:d=>{i(W(d.target.value))}})]}),"          "]})]}),e.jsx(g,{container:!0,sx:{mt:2},children:j.map((d,b)=>e.jsx(Pe.Fragment,{children:e.jsx(g,{item:!0,xs:12/7,md:12/7,sx:{display:"flex",alignItems:"center",justifyContent:"center",py:1,border:l=>`1px solid ${l.palette.divider}`},children:e.jsxs(T,{sx:{textTransform:"capitalize"},children:[" ",e.jsx("b",{children:d.Header})]},b)})},b))}),e.jsxs(g,{container:!0,children:[e.jsx(g,{item:!0,md:12/7*_,xs:12/7*_,sx:{textAlign:"center",pt:0}}),m.map((d,b)=>{if(d.isCurrentMonth){let l;switch(Ct(d.Text1)){case"Done":l="#00FF0020";break;case"Not Done":l="#9e9e9e20";break;case"Weekend":l="#FF000020";break;case"Holiday":l="#751b1b20";break;case"Outside Academic Year":l="#f0629220";break;default:l="#f0629220"}return e.jsx(g,{item:!0,xs:12/7,md:12/7,sx:{textAlign:"center",border:v=>`1px solid ${v.palette.divider}`,"&:hover":{backgroundColor:"rgba(128, 128, 128, 0.2)"}},children:e.jsx(Ne,{item:d,clickItem:()=>i(d.Value),DefaultValue:r,assignedDate:u,color:l})},b)}else return e.jsx(g,{item:!0,xs:12/7,md:12/7,sx:{textAlign:"center"},children:e.jsx(Ne,{item:{},clickItem:()=>i(),DefaultValue:"",assignedDate:"",color:void 0})})})]}),e.jsxs(g,{mt:2,item:!0,xs:12,sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(X,{color:"primary",text:"Done "}),e.jsx(X,{color:"info",text:"Not Done"}),e.jsx(X,{color:"Holiday",text:"Holiday"}),e.jsx(X,{color:"Warning",text:"Weekend"}),e.jsx(X,{color:"Suceess",text:"Outside Academic Year"})]})]})}const us=({name:s,textarray:i,validarray:u,changeText:r,getLabel:x,assignedDate:j})=>{const c="Absent Student "+s;let n="";const h=D=>{n="";let m=D.split(","),A=m[m.length-1];u.length===0?n="There is no "+s:A!==""?(vt(A)||(n="Enter number only"),jt(A,u)||(n="Invalid "+s)):m.length>1&&(m[m.length-2].length===0&&(n="Enter "+s),At(m[m.length-2],m)||(n="Do not repeat "+s),It(m[m.length-2],u)||(n="Invalid "+s)),r(n===""?{text:D,getLabel:c}:{text:i,getLabel:n})};return e.jsx(f,{sx:{backgroundColor:"white",width:"100%"},children:e.jsx(ue,{InputLabelProps:{shrink:!0},fullWidth:!0,value:i,error:x!==c,label:x,onChange:D=>h(D.target.value),InputProps:{readOnly:!0,sx:{height:"30px",padding:"0 0px","& .MuiOutlinedInput-root":{height:"30px","& fieldset":{top:0,height:"100%","& legend":{display:"none"}}},"& .MuiInputBase-input":{padding:"5px 14px",height:"20px",boxSizing:"border-box"}}},sx:{margin:"8px 0"}})})},xs=({Item:s,onChange:i,assignedDate:u})=>{s.joinDate;const r=s.joinDate.split(" ")[0].split("-");parseInt(r[0]),parseInt(r[1]),parseInt(r[2]);const x=s.joinDate.split(/[- :]/),j=new Date(x[2],x[1]-1,x[0],x[3],x[4],x[5]),c=new Date(u),n=j>c?"#e1bee7":"",h=j>c?"bold":"normal",D=Dt();return s.text1==="49"&&s.text2==="Master Soham Bhagade"&&j>c,e.jsx(e.Fragment,{children:e.jsxs(f,{bgcolor:s.isActive?`${D.colors.gradients.selectedlistColor}`:`${D.colors.gradients.listColor}`,sx:{backgroundColor:n,display:"flex",alignItems:"center",justifyContent:"center",pb:"5px"},children:[e.jsx(g,{item:!0,xs:1,sx:{paddingLeft:"15px",display:"flex",alignItems:"center"},children:j>c?null:e.jsx(Qt,{name:s.text1,value:0,checked:s.isActive,onChange:i,IsExamSubmitted:s.IsExamSubmitted})}),e.jsx(g,{item:!0,xs:2.5,alignItems:"center",children:e.jsx(Xt,{children:e.jsx(T,{color:s.isError?"primary":"error",fontWeight:h,sx:{textAlign:"center"},children:s.text1})})}),e.jsx(g,{item:!0,xs:8.5,children:e.jsx(Kt,{children:e.jsx(T,{color:s.isError?"primary":"error",fontWeight:h,children:s.text2})})})]})})},hs=({Itemlist:s,refreshData:i,assignedDate:u,setIsDirty:r})=>{let x=s.filter(n=>!n.IsExamSubmitted).some(n=>n.isActive===!1)?s.filter(n=>!n.IsExamSubmitted).some(n=>n.isActive===!0)?2:0:1;const j=n=>{s=s.map(h=>({...h,isActive:h.IsExamSubmitted?!1:n})),i(s),r(!0)},c=n=>{s=s.map(h=>h.text1===n.name?{...h,isActive:n.checked}:h),i(s),r(!0)};return e.jsxs(f,{px:2,sx:{backgroundColor:"white",pb:2},children:[e.jsx(f,{sx:{height:"50px",backgroundColor:"white"},children:e.jsx(Zt,{Item:{text1:"Roll No.",text2:"Student Name",isActive:x},onChange:j})}),s.map((n,h)=>e.jsx(f,{sx:{border:`1px solid ${Y[300]}`,backgroundColor:"white"},children:e.jsx(xs,{assignedDate:u,Item:n,onChange:c})},h))]})};ze.propTypes={Dataa:Ie.any,getAbsetNumber:Ie.any};function ze({Dataa:s,getAbsetNumber:i,assignedDate:u,sendmeassagestudent:r,handleCheckboxChange:x,setIsDirty:j}){const[c,n]=a.useState(""),[h,D]=a.useState("Absent Student Roll Number"),[m,A]=a.useState([]),[_,L]=a.useState([]),d=l=>{let v=[],y=[];const p=new Date(u);l.forEach(C=>{const K=C.joinDate.split(/[- :]/),o=new Date(K[2],K[1]-1,K[0]);!C.isActive&&o<=p&&v.push(C.text1),o>p&&y.push(C.text1)}),n(v.join(",")),D("Absent Student Roll Number"),i(v.join(","),l),A(l),L(y)};a.useEffect(()=>{d(s)},[s]);const b=l=>{n(l.text),D(l.getLabel),i(l.text);let v=l.text.split(",");A(m.map(y=>v.includes(y.text1)&&!y.IsExamSubmitted?{...y,isActive:!1}:{...y,isActive:!0}))};return e.jsxs(e.Fragment,{children:[e.jsx(f,{mr:2,children:e.jsxs(g,{container:!0,spacing:2,sx:{backgroundColor:"white",pb:1,m:0},children:[e.jsx(g,{item:!0,xs:12,sm:8,md:6,children:e.jsx(us,{name:"Roll Number",textarray:c,validarray:m.map(l=>l.text1).filter(l=>!_.includes(l)),changeText:b,getLabel:h,assignedDate:u})}),e.jsx(g,{item:!0,xs:12,sm:4,md:6,sx:{display:"flex",alignItems:"center",justifyContent:"flex-start"},children:e.jsx(yt,{control:e.jsx(kt,{checked:r,onChange:l=>x(l.target.checked)}),label:"Send Message to Absent Student(s)"})})]})}),e.jsx(hs,{Itemlist:m,refreshData:d,assignedDate:u,setIsDirty:j})]})}const ms=({open:s,setOpen:i,ClickCloseDialogbox:u,Classname:r,Date:x,ClassId:j})=>{const c=Re();_e();const[n,h]=a.useState(W(x)),[D,m]=a.useState(r),A=Number(localStorage.getItem("localSchoolId")),_=Number(sessionStorage.getItem("AcademicYearId"));Number(localStorage.getItem("UserId"));const L=w(p=>p.AbsentStudentDetail.getlistAbsentStudentDetails),d=w(p=>p.AbsentStudent.IsGetSchoolSettings),b={asSchoolId:Number(A)},l={asSchoolId:Number(A),asAcademicYearId:Number(_),asStandardDivId:Number(j),asSelectedDate:W(x),asMaxDaysLimit:Number(d)};a.useEffect(()=>{c(Be(b)),c(Ye(l))},[]);const v=[{id:"studentName",label:"Name",renderCell:p=>p.Text1}],y=()=>{i(!1)};return e.jsxs(wt,{open:s,onClose:()=>i(!1),fullWidth:!0,maxWidth:"sm",PaperProps:{sx:{borderRadius:"15px"}},children:[e.jsxs(Tt,{sx:{backgroundColor:"#324b84",position:"relative"},children:[e.jsx(P,{title:"Displays absent student details.",placement:"bottom-end",children:e.jsx(We,{sx:{color:"white",borderRadius:"10px",position:"absolute",top:"4px",right:"35px",cursor:"pointer","&:hover":{backgroundColor:Y[600]}}})}),e.jsx(Nt,{onClick:y,sx:{color:"white",borderRadius:"7px",position:"absolute",top:"5px",right:"8px",cursor:"pointer","&:hover":{color:"red"}}})]}),e.jsx(T,{variant:"h3",sx:{pt:1,pl:2},children:"Absent Student Details"}),e.jsxs(Lt,{children:[e.jsxs(g,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(g,{item:!0,xs:12,sm:6,md:6,children:e.jsx(ue,{sx:{minWidth:"15vw",bgcolor:"#F0F0F0"},label:"Class Name",fullWidth:!0,size:"small",value:D})}),e.jsx(g,{item:!0,xs:12,sm:6,md:6,children:e.jsx(ue,{sx:{minWidth:"15vw",bgcolor:"#F0F0F0"},label:"Date",fullWidth:!0,size:"small",value:n})})]}),e.jsxs(f,{sx:{backgroundColor:p=>p.palette.info.main,color:p=>"#0A0A0A",padding:"10px 18px",boxShadow:"none",fontSize:"14px",mt:1},children:["Student(s) is absent for ",d," or more working days."]}),L&&L.length>0?e.jsxs(f,{mt:1,sx:{justifyContent:"center"},children:[e.jsx(T,{sx:{mt:1,mb:1},children:"Absent Student(s) :"}),e.jsxs(Ft,{"aria-label":"simple table",sx:{border:p=>`1px solid ${p.palette.divider}`,width:"100%",textAlign:"center"},children:[e.jsx(Et,{children:e.jsx(ve,{sx:{background:p=>p.palette.secondary.main,color:p=>p.palette.common.white},children:v.map((p,C)=>e.jsx(De,{sx:{textTransform:"capitalize",color:"white",textAlign:"left",whiteSpace:"nowrap"},children:e.jsx("b",{children:p.label})},p.id))})}),e.jsx(Mt,{children:L.map(p=>e.jsx(Pe.Fragment,{children:e.jsx(ve,{children:v.map(C=>e.jsx(De,{sx:{paddingTop:"10px",paddingBottom:"10px",textAlign:"left"},children:C.renderCell(p)},C.id))})},p.Id))})]})]}):e.jsx(f,{sx:{backgroundColor:"#D2FDFC"},children:e.jsx(T,{variant:"h6",align:"center",sx:{textAlign:"center",marginTop:1,backgroundColor:"#324b84",padding:1,borderRadius:2,color:"white"},children:"No record found."})})]})]})},gs=({SummaryCountforAttendance:s,assignedDate:i})=>e.jsx(g,{container:!0,spacing:1,children:s.map((u,r)=>e.jsx(g,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(f,{sx:{background:x=>x.palette.common.white,p:{xs:1,sm:2},textAlign:"center"},children:[e.jsx(T,{variant:"h6",color:u.Color,sx:{marginBottom:0,fontSize:{xs:"16px",sm:"16px",md:"18px"},textTransform:"capitalize"},children:u.Name}),e.jsx(Oe,{direction:"row",gap:2,alignItems:"center",justifyContent:"space-between",children:e.jsx(g,{container:!0,spacing:1,children:u.Values.map((x,j)=>e.jsxs(g,{item:!0,xs:4,sm:4,children:[e.jsx(T,{variant:"subtitle2",sx:{fontSize:{xs:"12px",sm:"14px",md:"16px"}},children:x.Name}),e.jsx(f,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(T,{variant:"body1",textAlign:"center",sx:{fontSize:{xs:"14px",sm:"16px",md:"18px"}},children:x.Value})})]},j))})})]})}))}),Ls=()=>{ye();const[s,i]=a.useState(!1),u=[{Id:1,Header:"Sun"},{Id:2,Header:"Mon"},{Id:3,Header:"Tue"},{Id:4,Header:"Wed"},{Id:5,Header:"Thu"},{Id:6,Header:"Fri"},{Id:7,Header:"Sat"}],r=Re(),x=_e();Pt();const{showAlert:j,closeAlert:c}=a.useContext(Rt);let{SelectClasstecahernew:n,AssignedDate:h}=ye();a.useEffect(()=>{n&&h&&(n=n,h=_t(h),Q("01-11-2024"),console.log("AssignedDate",h))},[n,h]);const D=sessionStorage.getItem("StandardDivisionId"),m=localStorage.getItem("localSchoolId"),A=sessionStorage.getItem("AcademicYearId");let[_,L]=a.useState("0"),d=sessionStorage.getItem("IsClassTeacher");sessionStorage.getItem("StandardDivisionId");const b=sessionStorage.getItem("TeacherId");a.useState(!0),a.useState(!1);const[l,v]=a.useState(!1);a.useState(D);const[y,p]=a.useState(),[C,K]=a.useState(""),[o,Q]=a.useState(""),[me,Z]=a.useState(!1),[ps,ge]=a.useState("none"),[fs,Ge]=a.useState("");a.useState(new Date().toISOString());const[$e,bs]=a.useState(),[I,H]=a.useState(n),[Ss,ae]=a.useState(""),[z,re]=a.useState(""),[Je,Ue]=a.useState([]),pe=JSON.parse(sessionStorage.getItem("ScreensAccessPermission")),fe=w(t=>t.AbsentStudentDetail.getlistAbsentStudentDetails),be=w(t=>t.AbsentStudent.IsGetSchoolSettings),ee=w(t=>t.StandardAttendance.stdlist),qe=w(t=>t.AttendanceList.StudentList);w(t=>t.AttendanceList.StudentAbsent);const k=w(t=>t.AttendanceList.AttendanceStatus),oe=w(t=>t.AttendanceList.SaveResponse);let Xe=w(t=>t.AttendanceList.AYStatus);const F=w(t=>t.AttendanceList.ISGetSummaryCountforAttendance),G=w(t=>t.AttendanceList.listAttendanceCalender),le=w(t=>t.AttendanceList.DeleteAttendance),N=w(t=>t.AttendanceList.ISClassTeacherList),te=w(t=>t.AttendanceList.GetAcademicDates),Ke=()=>{let t=G.filter(S=>S.Value==o);return t.length>0?t[0].Text3:""},$=()=>{let t="N";return pe&&pe.map(S=>{S.ScreenName==="Attendance"&&(t=S.IsFullAccess)}),t},[Se,Ce]=a.useState(!0),J={asStdDivId:I,asDate:o,asAcademicYearId:A,asSchoolId:m},Qe={asSchoolId:Number(m),asAcademicYearId:Number(A),asStandardDivId:Number(I)},se={asSchoolId:Number(m),asAcademicYearId:Number(A),asStandardDivisionId:Number(I),asAttendanceDate:o,asUserId:$e},Ze={asSchoolId:Number(m),asAttendanceDate:o,asAcademicYearId:Number(A),asStdDivId:Number(I),asUserId:Number(b)},et={asSchoolId:Number(m),asAcademicYearId:Number(A),asStandardDivId:Number(I),asSelectedDate:o,asMaxDaysLimit:Number(be)},je=()=>{let t="";return N.map(S=>{S.Value==I&&(t=S.Id)}),t},tt=()=>{let t="";return N.map(S=>{S.Value==I&&(t=S.StandardDivision)}),t},st=a.useCallback(ke(t=>{r(Bt(t))},500),[r]);a.useEffect(()=>{const t={asSchoolId:Number(m),asAcadmicYearId:Number(A),asTeacher_id:$()==="Y"?0:je()?Number(je()):n!=null?Number(n):Number(I)};st(t)},[]),a.useEffect(()=>{N.length>0&&n==null&&H(N[0].Value)},[N]),a.useEffect(()=>{if(N&&N.length>0&&n==null&&h==null)if($()==="Y")H(N[0].Value),console.log($(),"ClassTeachers 2",N[0].Value);else{const t=sessionStorage.getItem("StandardDivisionId");t!==null&&H(t)}},[N]);const nt=a.useCallback(ke(t=>{r(Yt(t))},500),[r]);a.useEffect(()=>{nt(Qe)},[I,o]),a.useEffect(()=>{const t=JSON.parse(sessionStorage.getItem("ScreensAccessPermission"));let S="N",V=sessionStorage.getItem("TeacherId"),M=sessionStorage.getItem("ClassName");t==null||t.map(Ae=>{Ae.ScreenName==="Attendance"&&(S=Ae.IsFullAccess)}),d=="Y"&&M.length>1&&S!="Y"&&L(V!=null&&V!=""?V:"0"),r(Wt({asSchoolId:m,asAcademicyearId:A,asTeacherId:_})),rt(new Date),(h!=null||n!=null)&&(H(I),Q(h),ge(""))},[]),a.useEffect(()=>{o!=null&&o!=""&&(r(q(J)),r(ne(se)))},[y,o,I,te]);const at=()=>{i(!0),j({title:"Please Confirm",message:"Are you sure you want to delete attendance of date  : "+W(o),variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onCancel:()=>{c()},onConfirm:()=>{r(Jt(Ze)),c()}})};a.useEffect(()=>{o!=null&&o!=""&&(r(q(J)),r(ne(se)))},[y,o,I]);const rt=t=>{Q(W(t))},ot=(t,S)=>{let V=S.filter(M=>!M.IsExamSubmitted).some(M=>M.isActive===!1)?S.filter(M=>!M.IsExamSubmitted).some(M=>M.isActive===!0)?2:0:1;re(V===1?"P":V===0?"N":""),ae(t),Ue(S)},lt=()=>{let t="";return Je.map(S=>{t=t+'<SchoolWiseAttendance school_id="'+m+'" attendance_date="'+o+'" Student_Id="'+S.StudentId+'" is_present="'+(S.isActive?"Y":"N")+'" is_halfdaypresent="N" Standard_Division_Id="'+I+'" Academic_Year_Id="'+A+'" />'}),"<Attendance>"+t+"</Attendance>"},it=sessionStorage.getItem("Id"),U=()=>{const t={asSchoolId:Number(m),asInsertedById:Number(it),asStudentsAttendanceXML:lt(),asAttendanceDate:o,asStandardDivisionId:Number(I),asSendMessage:l};r(Ut(t))},ct={asSchoolId:Number(m)};a.useEffect(()=>{r(Be(ct))},[]),a.useEffect(()=>{le!=""&&(we.success(le),r(Ot()),r(q(J)),r(ne(se)))},[le]),a.useEffect(()=>{ee.length==1&&(Ge(ee[0].Name),p(ee[0].Value),ge(""))},[ee]);const dt=()=>{if(!Se||!s)return;const t=k.toLowerCase();let S="";t==="selected date is holiday."||t==="selected date is weekend."?(t==="selected date is holiday."?S="Are you sure to mark attendance on selected holiday?":t==="selected date is weekend."&&(S="Are you sure to mark attendance on selected weekend?"),j({title:"Please Confirm",message:S,variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onCancel:()=>{c()},onConfirm:()=>{ae(""),c(),z==="P"?j({title:"Please Confirm",message:"All the students are marked as present. Are you sure you want to save the attendance?",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onCancel:()=>{c()},onConfirm:()=>{U(),c(),i(!1)}}):z==="N"?j({title:"Please Confirm",message:"All the students are marked as absent. Are you sure you want to save the attendance?",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onCancel:()=>{c()},onConfirm:()=>{U(),c(),i(!1)}}):(U(),i(!1))}})):z==="P"||z==="N"?j({title:"Please Confirm",message:"All the students are marked as "+(z==="P"?"present":"absent")+". Are you sure you want to save the attendance?",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onCancel:()=>{c()},onConfirm:()=>{U(),c(),i(!1)}}):(ae(""),U(),c(),i(!1))};a.useEffect(()=>{oe!=""&&(fe.length>0&&Z(!0),r(q(J)),we.success(oe,{toastId:"success1"}),r(Vt()),r(ne(se)),r(Ye(et)))},[oe,fe]);const ut=()=>{Z(!0)},xt=()=>{Z(!1)},ht=t=>{x(`/${location.pathname.split("/")[1]}/Teacher/TAttendance/`+O(t),{state:{fromInternal:!0}})},ie=()=>{x("/RITeSchool/Teacher/SchoolAttendanceOverview/"+O(I)+"/"+O(ce(o)),{state:{fromInternal:!0}})},mt=t=>{i(!0),Q(t)},gt=t=>{i(!0),H(t),r(q(J))},pt=t=>{i(!0),v(t)};a.useEffect(()=>{G.length>0&&o!=""&&G.map((t,S)=>{t.Value===o&&(t.Text1.includes("Outside")||new Date(o)>new Date?Ce(!1):Ce(!0))})},[G,o]);const B=t=>t?new Date(t)>new Date:!1;return e.jsxs(f,{sx:{px:2},children:[e.jsx(Ht,{navLinks:[{title:"Attendance",path:"/RITeSchool/Teacher/TAttendance"}],rightActions:e.jsxs(Oe,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"left",gap:1,sx:{flexWrap:{xs:"nowrap",sm:"nowrap"}},children:[e.jsxs(g,{item:!0,xs:12,sm:12,md:12,lg:12,gap:1,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-end"},children:[e.jsx(T,{color:C||B(o)?Y[500]:E[500],fontWeight:"bold",sx:{cursor:C||B(o)?"not-allowed":"pointer",mt:{xs:"4px",sm:"7px"}},onClick:()=>{!C&&!B(o)&&ie()},children:"Overview"}),e.jsx(T,{color:C||B(o)?Y[500]:E[500],fontWeight:"bold",sx:{alignItems:"center",mt:{xs:"4px",sm:"7px"}},children:"-"}),e.jsx(T,{color:C||B(o)?Y[500]:E[500],sx:{cursor:"pointer",display:"flex",alignItems:"center",gap:1},fontWeight:"bold",onClick:()=>{!C&&!B(o)&&ie()},children:e.jsx(P,{title:"Present Students / Total Students",children:e.jsx(f,{children:F==null?void 0:F.TotalStudents})})}),e.jsx(f,{sx:{height:"25px",border:"1px solid grey"}}),e.jsx(T,{color:C||B(o)?Y[500]:E[500],sx:{cursor:"pointer",display:"flex",alignItems:"center",gap:1},fontWeight:"bold",onClick:()=>{!C&&!B(o)&&ie()},children:e.jsx(P,{title:"Attendance marked Divisions / Total Divisions",children:e.jsx(f,{children:F==null?void 0:F.TotalDivisions})})})]}),e.jsx(g,{item:!0,xs:12,sm:6,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-end"},children:e.jsx(zt,{label:"",sx:{mb:{xs:"10px",sm:"0px"},minWidth:{xs:"35vh",sm:"17vw"}},ItemList:N,onChange:gt,defaultValue:I,size:"small",DisableClearable:$()==="N",disabled:$()==="N"})}),e.jsxs(g,{item:!0,xs:12,sm:6,gap:1,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-end"},children:[e.jsx(P,{title:'Mark attendance of each student from your class for the select date .Click on "Delete" button to delete attendance of selected date.Delete facility will be available only if user have "Edit" facility.',children:e.jsx("span",{children:e.jsx(R,{sx:{color:"white",backgroundColor:Y[500],height:"36px !important",":hover":{backgroundColor:Y[600]}},children:e.jsx(We,{})})})}),e.jsx(P,{title:"Individual Attendance",children:e.jsx("span",{children:e.jsx(R,{onClick:()=>x("/RITeSchool/Teacher/IndidualAttendance/"+O(I)+"/"+O(ce(o)),{state:{fromInternal:!0}}),sx:{color:"white",backgroundColor:E[500],"&:hover":{backgroundColor:E[600]}},disabled:!!C,children:e.jsx(Ve,{})})})}),e.jsx(P,{title:"Month Wise Attendance",children:e.jsx("span",{children:e.jsx(R,{onClick:()=>x("/RITeSchool/Teacher/MonthwiseAttendance/"+O(I)+"/"+O(ce(o)),{state:{fromInternal:!0}}),sx:{color:"white",backgroundColor:E[500],"&:hover":{backgroundColor:E[600]}},disabled:!!C,children:e.jsx(Me,{})})})}),be!=="0"&&e.jsx(P,{title:"Absent Student Details",children:e.jsx("span",{children:e.jsx(R,{onClick:ut,sx:{backgroundColor:E[500],color:"white","&:hover":{backgroundColor:E[600]}},children:e.jsx(Gt,{})})})}),e.jsx(P,{title:"Save Attendance",children:e.jsx("span",{children:e.jsx(R,{onClick:dt,sx:{color:"white",backgroundColor:Te[500],"&:hover":{backgroundColor:Te[600]}},disabled:!!C,children:e.jsx($t,{})})})})]})]})}),(F==null?void 0:F.GetSummaryCountList.length)>0&&e.jsx(gs,{assignedDate:o,SummaryCountforAttendance:F.GetSummaryCountList}),e.jsxs(g,{container:!0,spacing:1,mt:0,children:[e.jsx(g,{item:!0,xs:12,md:6,children:e.jsx(f,{sx:{backgroundColor:"white",pt:2},children:e.jsx(g,{justifyContent:"center",children:e.jsxs(f,{sx:{backgroundColor:"white"},children:[C?e.jsx("div",{style:{fontWeight:"bold",fontSize:"16px",color:Ee[500],background:"#FFCCCC",marginTop:"12px",marginLeft:"10px",marginBottom:"0px",padding:"5px",border:C?"1px solid black":"none"},children:C}):null,!C&&k&&e.jsx("div",{style:{fontWeight:"bold",fontSize:"16px",marginTop:"12px",marginLeft:"10px",marginRight:"10px",color:k.includes("Attendance not yet marked.")||k.includes("Attendance date should be within current academic year")||k.includes("Term Start & End dates have not been configured")?"red":k.includes("Attendance is already marked")?"green":"red",backgroundColor:k.includes("Attendance not yet marked.")||k.includes("Attendance date should be within current academic year")||k.includes("Term Start & End dates have not been configured")?"#FFCCCC":k.includes("Attendance is already marked")?"#CCFFCC":"#FFCCCC",border:(k.includes("Attendance not yet marked.")||k.includes("Attendance date should be within current academic year")||k.includes("Term Start & End dates have not been configured")||k.includes("Attendance is already marked"),"1px solid black"),padding:"5px"},children:k}),e.jsx(ds,{ItemList:G,ClickItem:mt,formattedDate:W(o),DefaultValue:!0,assignedDate:W(o),ArrayList:u,ClickDeleteAttendance:at,Standardid:y,clickNav:ht,getAssignedDateStatus:Ke})]})})})}),Se?e.jsx(g,{item:!0,xs:12,md:6,children:e.jsx(f,{children:N?e.jsx(f,{sx:{display:Xe},children:te&&te.StartDate&&te.EndDate&&e.jsx(f,{sx:{mb:{xs:5,md:0}},children:e.jsx(ze,{sendmeassagestudent:l,handleCheckboxChange:pt,Dataa:qe,getAbsetNumber:ot,assignedDate:o,setIsDirty:i})})}):null})}):e.jsx(g,{item:!0,xs:12,md:6})]}),e.jsx(f,{sx:{display:"flex",justifyContent:"flex-start",gap:"8px"},children:me&&e.jsx(ms,{open:me,setOpen:Z,ClickCloseDialogbox:xt,Classname:tt(),Date:o,ClassId:I})})]})};export{Ls as default};