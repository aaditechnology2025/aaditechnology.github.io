import{A as _,u as z,r as I,c as y,ar as J,j as e,H as ae,F as E,bE as se,bl as k,au as re,J as R,a9 as oe,bF as ie,C as le,B as g,s as de,E as ce,bG as he,G as b,T as M,n as q,bH as ue,bI as P,I as W,bJ as U,bK as xe,bL as me,bM as ge,bN as V,q as fe,v as $,bO as Se,bP as pe,bQ as Ie,bR as be,bS as je,bT as ve,bU as Ae,ay as B}from"./index-CpZD2H93.js";import{d as De}from"./PriorityHigh-GKb8m_z9.js";import{H as we,U as Ce}from"./UploadAnnualPlanner-BebrWet5.js";import{y as H}from"./yellow-BQYah5ZS.js";import{e as Ne}from"./CardStyle-CBuNm0_N.js";import"./SingleFile-VnBjWcb-.js";import"./CloudUpload-C2WsbpCZ.js";import"./Errormessage-DVJGTehf.js";import"./Card-B0aZ7mGs.js";const Ye=()=>{const c=_(),u=z(),[l,i]=I.useState(!1);localStorage.getItem("FolderName");const a=y(r=>r.AnnualPlanner.FilePath),n=JSON.parse(sessionStorage.getItem("ScreensAccessPermission"));let h=J(62);console.log(h,"AnnualPlannerAccess"),n==null||n.map(r=>{r.ScreenName==="Annual Planner"&&r.IsFullAccess});const A=[{Id:1,Icon:e.jsx(De,{}),Title:"These events may change due to unavoidable reasons without prior notice.",Action:"Note",sx:{color:"white",backgroundColor:H[700],"&:hover":{backgroundColor:H[800]}}},{Id:2,Icon:e.jsx(ae,{}),Title:"Annual planner with detailed event description of your school.",Action:"Note1",sx:{color:"white",backgroundColor:E[500],"&:hover":{backgroundColor:E[600]}}},{Id:3,Icon:e.jsx(se,{}),Title:"Events Overview",Action:"EventsOverview",sx:{color:"white",backgroundColor:k[500],"&:hover":{backgroundColor:k[600]}}},...h==="Y"?[{Id:5,Icon:e.jsx(re,{}),Title:"Add Annual Planner",Action:"AddAnnualPlanner",sx:{color:"white",backgroundColor:R[500],"&:hover":{backgroundColor:R[600]}}}]:[],...a!==""&&h==="N"?[{Id:4,Icon:e.jsx(oe,{}),Title:"Annual Planner",Action:"AddAnnualPlanner",sx:{color:"white",backgroundColor:k[500],"&:hover":{backgroundColor:k[600]}}}]:[]],d=r=>{r=="EventsOverview"&&c("/RITeSchool/Common/EventOverview",{state:{fromInternal:!0}}),r=="AddAnnualPlanner"&&(h=="N"?a!==""&&window.open(localStorage.getItem("SiteURL")+"/"+a):i(!0))};return I.useEffect(()=>{const r={aiSchoolId:localStorage.getItem("localSchoolId"),aiAcademicYearId:sessionStorage.getItem("AcademicYearId")};u(ie(r))},[]),e.jsxs(e.Fragment,{children:[e.jsx(le,{navLinks:[{title:"Annual Planner",path:"/RITeSchool/Common/AnnualPlanner"}],rightActions:e.jsx(e.Fragment,{children:e.jsx(we,{IconList:A,ClickIcon:d})})}),l&&e.jsx(Ce,{openAnnualPlannerDialog:l,setOpenAnnualPlannerDialog:i})]})},ye=({text:c,color:u})=>e.jsxs(g,{sx:{display:"flex",alignItems:"center"},children:[e.jsxs(Ne,{children:[" ",c]}),e.jsx("br",{})]}),Le=({ItemList:c,ClickItem:u,DefaultValue:l,legendColors:i,AnnualPlannerViewAccess:a})=>{const n=new Date(l),h=n.getFullYear(),v=n.getMonth(),C=new Date(h,v,1).getDay(),A=new Date(h,v+1,0).getDate(),d={height:"10px",fontSize:"15px"};function r(S,m){let o=parseInt(S.slice(1,3),16),N=parseInt(S.slice(3,5),16),D=parseInt(S.slice(5,7),16);return`rgba(${o}, ${N}, ${D}, ${m})`}const x=de(({className:S,...m})=>e.jsx(ce,{...m,classes:{popper:S}}))(({theme:S})=>({[`& .${he.tooltip}`]:{backgroundColor:"#f2f2f2",boxShadow:S.shadows[1],fontSize:11}})),j=i.map(S=>r(S,.2)),Y=()=>{const S=[];for(let m=0;m<C;m++)S.push(e.jsx(b,{item:!0,xs:12/7,md:12/7},`empty-${m}`));for(let m=1;m<=A;m++){const o=c.find(p=>{const s=new Date(p.Value);return s.getFullYear()===h&&s.getMonth()===v&&s.getDate()===m}),N=o&&(o==null?void 0:o.Text1.some(p=>p.Name.includes("Outside Academic Year"))),D=N?"rgba(200, 0, 200, 0.1)":o?j[o.Legend]:"transparent",w=a==="N"||N?"default":"pointer";S.push(e.jsx(b,{item:!0,xs:12/7,md:12/7,sx:{textAlign:"center",pt:0},border:"0.5px solid #ebebeb",children:(o==null?void 0:o.Text1.length)>0?e.jsx(x,{arrow:!0,sx:{borderRadius:"7px"},title:o==null?void 0:o.Text1.map((p,s)=>e.jsx(e.Fragment,{children:e.jsx(g,{children:e.jsx(M,{variant:"h5",color:"#38548A",children:e.jsx("b",{children:p.Name})})})})),children:e.jsxs(g,{sx:{minHeight:"90px",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",cursor:w,backgroundColor:D,...d,overflow:"hidden",fontWeight:"500",border:`1px solid ${E[300]}`},onClick:()=>o&&u(o.Value),children:[e.jsx(M,{children:m}),o&&o.Text1&&e.jsxs(g,{sx:{display:"flex",flexDirection:"column",width:"100%",gap:0},children:[o.Text1.map((p,s)=>s<=1&&e.jsx("b",{style:{width:"100%",paddingLeft:2,paddingRight:2},children:e.jsx(g,{sx:{color:i[p.Legend],overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s<=1?p.Name:""})},s)),o.Text1.length>2&&e.jsx(g,{sx:{display:"flex",width:"100%"},children:e.jsxs(M,{sx:{textAlign:"center",color:"#38548A",backgroundColor:"inherit",ml:9},children:[" ",e.jsx("b",{children:"more..."})]})})]})]})}):e.jsxs(g,{sx:{minHeight:"90px",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",cursor:w,backgroundColor:D,...d,overflow:"hidden",fontWeight:"500",border:`1px solid ${E[300]}`},onClick:()=>o&&u(o.Value),children:[e.jsx(M,{children:m}),o&&o.Text1&&e.jsx(g,{sx:{display:"flex",flexDirection:"column",width:"100%",gap:0},children:o.Text1.map((p,s)=>e.jsx("b",{style:{width:"100%",paddingLeft:2,paddingRight:2},children:e.jsx(g,{sx:{color:i[p.Legend],overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:p.Name})}))})]})},`${h}-${v}-${m}`))}return S};return e.jsx(b,{container:!0,children:Y()})},Me=()=>{const c=[{Id:1,Name:"Sun"},{Id:2,Name:"Mon"},{Id:3,Name:"Tue"},{Id:4,Name:"Wed"},{Id:5,Name:"Thu"},{Id:6,Name:"Fri"},{Id:7,Name:"Sat"}];return e.jsx(b,{container:!0,spacing:0,sx:{mt:2},children:c.map((u,l)=>e.jsx(b,{item:!0,xs:12/7,md:12/7,sx:{textAlign:"center",pt:0},children:e.jsx(g,{sx:{border:i=>`1px solid ${i.palette.grey[300]}`,p:1},children:e.jsx(M,{sx:{textTransform:"capitalize",textAlign:"center",fontWeight:"bold"},children:u.Name})})},l))})},Te=({ItemList:c,ClickItem:u,DefaultValue:l,EventType:i,ClickEventType:a,AnnualPlannerViewAccess:n})=>{const h=["#ffffff","#ff0000","#751b1b","#008000","#0207e6","#f558f5","#ffffff","#ffffff","#ffffff"],v={inputProps:{"aria-label":"Checkbox demo"}},C=d=>{a(i.map(r=>({...r,IsActive:r.Value==d?!r.IsActive:r.IsActive})))},A=d=>{let r=!1;return i.map(x=>{x.Value==d&&(r=x.IsActive)}),r};return e.jsxs(b,{container:!0,spacing:0,sx:{mt:2},children:[e.jsx(b,{item:!0,xs:12,md:12,children:e.jsx(Me,{})}),e.jsx(b,{item:!0,xs:12,md:12,children:e.jsx(Le,{legendColors:h,ItemList:c,ClickItem:u,DefaultValue:l,AnnualPlannerViewAccess:n})}),e.jsx(b,{container:!0,sx:{mt:2},children:e.jsx(b,{item:!0,sx:{},gap:6,display:"flex",xs:12,lg:12,children:i.slice(1,i.length-1).map((d,r)=>e.jsxs(q,{direction:"row",sx:{alignItems:"center"},children:[e.jsx(ue,{...v,sx:{color:h[d.Value],"&.Mui-checked":{color:h[d.Value]}},checked:A(d.Value),onChange:()=>{C(d.Value)}}),e.jsx(ye,{color:h[d.Id],text:d.Name})]},r))})})]})},ke=({ItemList:c,ClickItem:u,DefaultValue:l})=>{const i=(a,n)=>{u({Standard:n=="Standard"?a:l.Standard,StandardDivision:n=="StandardDivision"?a:l.StandardDivision,Month:n=="Month"?a:l.Month,Year:n=="Year"?a:l.Year})};return e.jsxs(b,{container:!0,spacing:2,alignItems:"center",justifyContent:"flex-end",children:[e.jsx(b,{item:!0,xs:12,sm:6,md:2,children:e.jsx(g,{sx:{minWidth:"100%"},children:e.jsx(P,{size:"small",sx:{minWidth:{xs:"40vw",sm:"15vw"}},ItemList:c.StandardList,label:"Select Standard",defaultValue:l.Standard,onChange:a=>i(a,"Standard")})})}),e.jsx(b,{item:!0,xs:12,sm:6,md:2,children:e.jsx(g,{sx:{minWidth:"100%"},children:e.jsx(P,{size:"small",sx:{minWidth:{xs:"40vw",sm:"15vw"}},ItemList:c.StandardDivisionList,label:"Select Division",defaultValue:l.StandardDivision,onChange:a=>i(a,"StandardDivision")})})}),e.jsx(b,{item:!0,xs:12,sm:6,md:2,children:e.jsx(g,{sx:{minWidth:"100%"},children:e.jsx(P,{size:"small",sx:{minWidth:{xs:"40vw",sm:"15vw"}},ItemList:c.MonthList,label:"Select Month",defaultValue:l.Month,onChange:a=>i(a,"Month")})})}),e.jsx(b,{item:!0,xs:12,sm:6,md:2,children:e.jsx(g,{sx:{minWidth:"100%"},children:e.jsx(P,{size:"small",sx:{minWidth:{xs:"40vw",sm:"15vw"}},ItemList:c.YearList,label:"Select Year",defaultValue:l.Year,onChange:a=>i(a,"Year")})})})]})},Pe=({DaysList:c,ClickDate:u,ClickCalendarItem:l,FilterList:i,ClickFilterItem:a,SelectedDate:n,SelectedFilter:h,EventType:v,ClickEventType:C,AnnualPlannerViewAccess:A})=>{const d=(x,j,Y)=>{var D,w,p,s;let S=(D=i.YearList[0])==null?void 0:D.Value,m=(w=i.YearList[i.YearList.length-1])==null?void 0:w.Value,o=Number((p=i.MonthList[0])==null?void 0:p.Value),N=Number((s=i.MonthList[i.MonthList.length-1])==null?void 0:s.Value);if(Y){if(x.toString()===m&&j+1===N)return!0}else if(x.toString()===S&&j+1===o)return!0;return!1},r=x=>{const j=new Date(n);j.setDate(1),j.setMonth(j.getMonth()-x),j.getMonth()===11&&j.setFullYear(j.getFullYear()),l(V(j))};return e.jsxs(e.Fragment,{children:[e.jsx(g,{sx:{backgroundColor:"white"},p:2,children:e.jsx(q,{direction:"row",justifyContent:"flex-end",gap:1,children:e.jsx(ke,{ItemList:i,ClickItem:a,DefaultValue:h})})}),e.jsxs(g,{sx:{backgroundColor:"white"},p:2,children:[e.jsx(g,{display:"flex",justifyContent:"space-between",alignItems:"center",children:e.jsxs(g,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(W,{color:"primary",onClick:()=>r(1),sx:{backgroundColor:x=>U(x.palette.primary.main,.2),marginRight:"20px",paddingRight:"12px"},disabled:d(new Date(n).getFullYear(),new Date(n).getMonth(),!1),children:e.jsx(xe,{})}),e.jsx(M,{m:0,variant:"h3",sx:{marginX:"-8px"},children:e.jsx("b",{children:me(n)})}),e.jsx(W,{color:"primary",onClick:()=>r(-1),sx:{backgroundColor:x=>U(x.palette.primary.main,.2),marginLeft:"20px",paddingLeft:"12px"},disabled:d(new Date(n).getFullYear(),new Date(n).getMonth(),!0),children:e.jsx(ge,{})})]})}),e.jsx(Te,{ItemList:c,ClickItem:u,DefaultValue:n,EventType:v,ClickEventType:C,AnnualPlannerViewAccess:A})]})]})},Ue=()=>{let{selectedDate:c,standardId:u,divisionId:l}=fe();c=$(c),u=$(u),l=$(l),I.useState(null);const i=_(),a=z(),n=y(t=>t.AnnualPlanerBaseScreen.ISSelectStandardList),h=y(t=>t.AnnualPlanerBaseScreen.ISSelectDivisionList),v=y(t=>t.AnnualPlanerBaseScreen.ISSelectMonthList),C=y(t=>t.AnnualPlanerBaseScreen.ISSelectYearList),A=y(t=>t.AnnualPlanerBaseScreen.ISEventsDataList),d=y(t=>t.AnnualPlanerBaseScreen.listTeacherDetail),r=sessionStorage.getItem("AcademicYearId"),x=localStorage.getItem("localSchoolId"),j=sessionStorage.getItem("Id"),Y=sessionStorage.getItem("IsClassTeacher"),S=sessionStorage.getItem("TeacherId");JSON.parse(sessionStorage.getItem("ScreensAccessPermission"));let m=J(62);const o={StandardList:n,StandardDivisionList:h,MonthList:v,YearList:C},[N,D]=I.useState([]),[w,p]=I.useState(c==null?V(new Date):V(new Date(c))),[s,O]=I.useState({Standard:u,StandardDivision:l,Month:(new Date(w).getMonth()+1).toString(),Year:new Date(w).getFullYear().toString()});I.useState(!1),I.useState(""),I.useState("");const[F,K]=I.useState([{Id:1,Name:"Weekend",Value:"1",IsActive:!0},{Id:2,Name:"Holiday",Value:"2",IsActive:!0},{Id:3,Name:"Exam",Value:"3",IsActive:!0},{Id:4,Name:"Event",Value:"4",IsActive:!0},{Id:5,Name:"Outside Academic Year",Value:"5",IsActive:!0}]);I.useEffect(()=>{const t={asSchoolId:Number(x),asAcademicYearId:Number(r),asUserId:m==="Y"?0:Number(j)};a(Se(t));const f={asSchoolId:Number(x)};a(pe(f));const G={asSchoolId:Number(x)};a(Ie(G))},[]),I.useEffect(()=>{if(Y==="Y"){const t={asSchoolId:Number(x),asAcademicYearId:Number(r),asTeacherID:Number(S)};a(be(t))}},[S]);const Q=t=>{const f=t?n.find(G=>G.Id===t.toString()):void 0;return f?f.Value:void 0};I.useEffect(()=>{if(n.length>0&&u==null){if(Y==="N")L(n[0].Value,"Standard"),T(n[0].Value);else if(d&&d.length>0){const t=Q(d[0].Standard_Id);L(t===void 0?n[0].Value:t,"Standard"),T(t===void 0?n[0].Value:t)}}},[n,d,Y]);const L=(t,f)=>{O({Standard:f=="Standard"?t:s.Standard,StandardDivision:f=="StandardDivision"?t:s.StandardDivision,Month:f=="MonthYear"?(new Date(t).getMonth()+1).toString():s.Month,Year:f=="MonthYear"?new Date(t).getFullYear().toString():s.Year})};I.useEffect(()=>{n.length>0&&(L(u??n[0].Value,"Standard"),T(n[0].Value))},[n]),I.useEffect(()=>{h.length>0&&L(l??h[0].Value,"StandardDivision")},[h]),I.useEffect(()=>{A.length>0&&D(A)},[A]);const X=()=>{let t="";return F.map(f=>{f.IsActive&&(t=t+f.Value+",")}),t};I.useEffect(()=>{const t={asSchoolId:Number(x),asAcademicYearId:Number(r),asStandardId:Number(s.Standard),asDivisionId:Number(s.StandardDivision),asMonthId:Number(s.Month),asYear:Number(s.Year),asEventType:X()};s.Standard!="0"&&s.StandardDivision!="0"&&s.Month!="0"&&s.Year!="0"&&a(je(t))},[s,F]);const T=t=>{const f={asSchoolId:Number(x),asAcademicYearId:Number(r),asStandardId:Number(t)};a(ve(f))},Z=t=>{p(t),L(t,"MonthYear")},ee=t=>{m=="Y"&&(p(t),L(t,"MonthYear"),a(Ae()),i("/RITeSchool/Common/EventManagementForm/"+B(t.replaceAll("/","-"))+"/"+B(s.Standard)+"/"+B(s.StandardDivision),{state:{fromInternal:!0}}))},te=t=>{O(t);let f=new Date;f.setDate(1),f.setMonth(t.Month-1),f.setFullYear(t.Year),p(V(new Date(f))),t.Standard!=s.Standard&&T(t.Standard)},ne=t=>{K(t)};return e.jsxs(g,{sx:{px:2},children:[e.jsx(Ye,{}),e.jsx(g,{sx:{backgroundColor:"white"},children:e.jsx(Pe,{DaysList:N,ClickCalendarItem:Z,ClickDate:ee,SelectedDate:w,FilterList:o,ClickFilterItem:te,SelectedFilter:s,EventType:F,ClickEventType:ne,AnnualPlannerViewAccess:m})})]})};export{Ue as default};