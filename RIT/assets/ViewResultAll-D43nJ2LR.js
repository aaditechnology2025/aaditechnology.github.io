import{cc as Ie,j as s,A as be,u as xe,q as ge,r as a,v as Te,c,l4 as we,iy as _e,ix as Ne,l5 as De,l6 as ye,l7 as je,l8 as Re,B as H,C as Ce,n as ke,G as P,bI as X,E as F,I as M,F as $,H as Ae,bl as w,T as ve,Q as Ge,l9 as Ve}from"./index-CpZD2H93.js";import{d as Pe}from"./Print-DbQKPBf4.js";import{d as Fe}from"./VisibilityTwoTone-D8CNpUsR.js";import{f as Me}from"./fxp-DGqQnM-q.js";import{V as Le}from"./ViewResultAllTable-BPRaBUSW.js";const Ee=Ie(s.jsx("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");function Ye(_){var S,j,N,h;return{listGreaceDetails:[{GraceMark:"0"}],listMarksDetails:(S=_.Result??[])==null?void 0:S.map(e=>{var r,d,l,p,n;return{Grade_Name:e==null?void 0:e.Grade_Name,Grade_id:(r=e==null?void 0:e.Grade_id)==null?void 0:r.toString(),Percentage:(d=e==null?void 0:e.Percentage)==null?void 0:d.toString(),Result:e==null?void 0:e.Result,Subjects_Total_Marks:(l=e==null?void 0:e.Subjects_Total_Marks)==null?void 0:l.toString(),Total_Marks_Scored:(p=e==null?void 0:e.Total_Marks_Scored)==null?void 0:p.toString(),rank:(n=e==null?void 0:e.rank)==null?void 0:n.toString()}}),listParcentageDetails:(j=_.grades??[])==null?void 0:j.map(e=>{var r;return{Grade:e==null?void 0:e.Grade_Name,Marks_Grades_Configuration_Detail_ID:(r=e==null?void 0:e.Marks_Grades_Configuration_Detail_ID)==null?void 0:r.toString(),Remarks:e==null?void 0:e.Remarks}}),listParentsubjectDetails:[],listStudentDetail:(N=_.Header??[])==null?void 0:N.map(e=>{var r,d,l,p,n;return{Academic_Year:e==null?void 0:e.Academic_Year,Division_Name:e==null?void 0:e.Division_Name,IsFailCriteriaNotApplicable:e==null?void 0:e.IsFailCriteriaNotApplicable,IsPreprimaryStandard:(e==null?void 0:e.IsPreprimaryStandard)===0?"False":"True",Roll_No:(r=e==null?void 0:e.Roll_No)==null?void 0:r.toString(),School_Name:e==null?void 0:e.School_Name,School_Orgn_Name:e==null?void 0:e.School_Orgn_Name,ShowOnlyGrades:e==null?void 0:e.ShowOnlyGrades.toString(),Standard_Division_Id:(d=e==null?void 0:e.Standard_Division_Id)==null?void 0:d.toString(),Standard_Id:(l=e==null?void 0:e.Standard_Id)==null?void 0:l.toString(),Standard_Name:(p=e==null?void 0:e.Standard_Name)==null?void 0:p.toString(),Student_Name:e==null?void 0:e.Student_Name,YearWise_Student_Id:(n=e==null?void 0:e.YearWise_Student_Id)==null?void 0:n.toString()}}),listSubjectDetails:(h=_.Subjects??[])==null?void 0:h.map(e=>{var r,d,l;return{ID_Num:(r=e==null?void 0:e.ID_Num)==null?void 0:r.toString(),Parent_Subject_Id:(d=e==null?void 0:e.Parent_Subject_Id)==null?void 0:d.toString(),Subject_Id:(l=e==null?void 0:e.Subject_Id)==null?void 0:l.toString(),Subject_Name:e==null?void 0:e.Subject_Name,Total_Consideration:e==null?void 0:e.Total_Consideration}})}}const $e=_=>{var W;be();const f=xe();let{StandardDivisionId:S}=ge();a.useEffect(()=>{S!==void 0&&(S=Te(S))},[S]);const j=sessionStorage.getItem("StandardDivisionId"),N=sessionStorage.getItem("TeacherId"),[h,e]=a.useState(j),[r,d]=a.useState(!1),[l,p]=a.useState(!1);a.useState(null);const[n,L]=a.useState("0"),[D,E]=a.useState([]),Y=JSON.parse(sessionStorage.getItem("ScreensAccessPermission")),u=Number(localStorage.getItem("localSchoolId")),x=Number(sessionStorage.getItem("AcademicYearId")),A=Number(sessionStorage.getItem("StandardDivisionId")),q=Number(sessionStorage.getItem("Id")),R=c(t=>t.VeiwResult.ClassTeachers),g=c(t=>t.VeiwResult.StudentName),I=c(t=>t.VeiwResult.StudentResultList),C=c(t=>t.FinalResultGenerateAll.ISEntireStudentFinalResult),J=c(t=>t.VeiwResult.StudentsingleResult);c(t=>t.VeiwResult.getMarkDetailsView);const v=c(t=>t.VeiwResult.getSubjectDetailsView);c(t=>t.VeiwResult.getGradesDetailsView),c(t=>t.VeiwResult.getTotalPerGradeView),c(t=>t.VeiwResult.getPerDetails);const G=c(t=>t.VeiwResult.iscofigred),k=c(t=>t.VeiwResult.unpublishexam);c(t=>t.VeiwResult.notResultList);const B=c(t=>t.FinalResult.ClassTeachers);v.filter(t=>t.Grade==""),v.filter(t=>t.Marks==""),J.some(t=>t.ShowOnlyGrades.trim()==="true"),v.filter(t=>t.Total_Consideration==="N");const b=c(t=>t.ProgressReportNew.IsGetSchoolSettings),Q=(W=b==null?void 0:b.GetSchoolSettingsResult)==null?void 0:W.ToppersCount,[K,Z]=a.useState("");a.useEffect(()=>{var t;b!=null&&Z((t=b==null?void 0:b.GetSchoolSettingsResult)==null?void 0:t.IsTotalConsiderForProgressReport)},[b]),a.useEffect(()=>{},[g]);const U={asSchoolId:u,asAcademicYearId:x,asTeacherId:N},ee={asSchoolId:Number(u)},te={asSchoolId:u,asAcademicYearId:x,asStandardDivisionId:Number(h)},se={asSchoolId:u,asAcademicYrId:x,asStdDivId:A,asStartIndex:0,PageCount:10,asTestId:1},ae={asSchoolId:u,asAcademicYrId:54,asStdDivId:1266,asStartIndex:0,PageCount:10,asTestId:608},oe={asSchoolId:u,asAcademicYrId:x,asStdDivId:A},ne={asSchoolId:u,asAcademicYrId:x,asStdDivId:A},ie={asSchoolId:Number(u),asAcademicYearId:x,asStudentId:Number(n),asInsertedById:Number(q),asWithGrace:1};a.useEffect(()=>{f(we(ie))},[h,n]),a.useEffect(()=>{f(_e(ee))},[]);const ce=t=>{e(t)},re=t=>{d(!1),L(t),p(!1)},le={asSchoolId:Number(u),asAcademicYearId:Number(x),asStudentsIds:n==="0"?[]:[n],asStdDivId:Number(h),asWithGrace:1},de=async t=>{await f(Ve(le)),d(!0),p(!0)};a.useEffect(()=>{f(Ne(U))},[]),a.useEffect(()=>{f(De(te))},[h]),a.useEffect(()=>{g.length>0&&L(g[0].Id)},[g]),a.useEffect(()=>{S!==void 0&&D.length===1&&e(S)},[g]);const Se=new Me.XMLParser,[Be,me]=a.useState([]),fe=t=>t?Array.isArray(t)?t:[t]:[],m=(t,o)=>{if(!t)return[];const T=Se.parse(t);return fe(o.split(".").reduce((y,i)=>y==null?void 0:y[i],T))};a.useEffect(()=>{var t,o;if(I!==null&&((t=I==null?void 0:I.listMarksDetiles)==null?void 0:t.length)>0){const T=(o=I==null?void 0:I.listMarksDetiles)==null?void 0:o.map(i=>({Student_id:i.Student_id,Header:m(i.Header,"NewDataSet.Table"),Marks:m(i.Marks,"NewDataSet.Table3"),Result:m(i.Result,"NewDataSet.Table4"),SubjectTestType:m(i.SubjectTestType,"NewDataSet.Table7"),SubjectTestTypeGroupTotal:m(i.SubjectTestTypeGroupTotal,"NewDataSet.Table6"),SubjectgroupTotal:m(i.SubjectgroupTotal,"NewDataSet.Table5"),Subjects:m(i.Subjects,"NewDataSet.Table1"),TestTypes:m(i.TestTypes,"NewDataSet.Table8"),Tests:m(i.Tests,"NewDataSet.Table2"),grades:m(i.grades,"NewDataSet.Table9")}));let y=T==null?void 0:T.map(i=>Ye(i));me(y)}},[I]),a.useEffect(()=>{f(ye(n==="0"?ae:se))},[h,n]),a.useEffect(()=>{f(je(oe)),f(Re(ne))},[]);const O=()=>{let t="N";return Y&&Y.map(o=>{o.ScreenName==="Final veiw result"&&(t=o.IsFullAccess)}),t},he=()=>{let t="";return g.map(o=>{o.Value==n&&(t=o.Name)}),t};let z=[];const ue=()=>{R.map(t=>{t.TeacherId==N&&z.push({Id:t.Id,Value:t.Value,Name:t.Name})}),E(z)};he(),a.useEffect(()=>{R!=null&&E(R),ue()},[R]),a.useEffect(()=>{D!=null&&D.length>0&&e(D[0].Id)},[D]);const V=a.useRef(null),pe=()=>{if(V.current){const t=V.current.innerHTML,o=window.open("","","height=600,width=800");o.document.write("<html><head><title>Print</title>"+`
              <style>
                body {
                  font-family: 'Roboto', sans-serif;
                  margin: 0;
                  padding: 20px;
                }
                h1, h2, h3, h4 {
                  margin: 0 0 10px;
                  font-family: 'Roboto', sans-serif;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                }
                table, th, td {
                  border: 1px solid black;
                }
                th, td {
                  padding: 8px;
                  text-align: center;
                }
                .MuiTypography-root {
                  font-family: 'Roboto', sans-serif;
                  font-size: 16px;
                  margin-bottom: 8px;
                  text-align: center;
                }
                .MuiTableCell-root {
                  font-family: 'Roboto', sans-serif;
                }
                  
                .custom-typography {
                  font-family: 'Roboto', sans-serif;
                  color: #38548a;
                  font-size: 24px;
                  margin-top: 16px;
                  text-align: left;
                }
              </style>
          `+"</head><body>"),o.document.write(t),o.document.write("</body></html>"),o.document.close(),o.print()}};return s.jsxs(H,{sx:{px:2},children:[s.jsx(Ce,{navLinks:[{title:"Final Result",path:"/RITeSchool/Teacher/FinalResult/"+S},{title:"View Result All",path:""}],rightActions:s.jsx(s.Fragment,{children:s.jsxs(ke,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"left",gap:1,sx:{mt:{xs:0,sm:0},flexWrap:{xs:"nowrap",sm:"nowrap"}},children:[s.jsx(P,{item:!0,xs:12,sm:6,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-start"},children:s.jsx(X,{sx:{width:{xs:"60vw",sm:"18vw"},bgcolor:O()==="N"?"#F0F0F0":"inherit"},ItemList:B,onChange:ce,defaultValue:h,size:"small",label:"Class Teacher",DisableClearable:O()==="N",mandatory:!0,disabled:B.length===2})}),s.jsx(P,{item:!0,xs:12,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-start"},children:s.jsx(X,{ItemList:g,onChange:re,defaultValue:n,label:"Student Name ",size:"small",sx:{width:{xs:"60vw",sm:"20vw"}}})}),s.jsxs(P,{item:!0,xs:12,gap:1,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-start"},children:[s.jsx(F,{title:"View result of all / selected student .",children:s.jsx(M,{sx:{color:"white",backgroundColor:$[500],"&:hover":{backgroundColor:$[600]}},children:s.jsx(Ae,{})})}),s.jsx(F,{title:"Show",children:s.jsx(M,{sx:{color:"white",backgroundColor:w[500],"&:hover":{backgroundColor:w[600]}},onClick:de,children:s.jsx(Fe,{})})}),s.jsx(F,{title:"Print",children:s.jsx(M,{sx:{color:"white",backgroundColor:l?w[500]:w[200],"&:hover":{backgroundColor:l?w[600]:w[200]}},onClick:pe,disabled:!l,children:s.jsx(Pe,{})})})]})]})})}),s.jsx(ve,{variant:"h6",textAlign:"center",color:"primary",mb:2,children:(G==null?void 0:G.IsConfiged)==="0"&&r?s.jsx("div",{children:(k==null?void 0:k.length)>0&&s.jsx(Ge,{variant:"filled",color:"info",sx:{mb:2},icon:s.jsx(Ee,{}),children:s.jsxs("b",{style:{color:"blue"},children:[" All configured exams are not published - ",k.map(t=>t.SchoolWise_Test_Name).join(", ")]})})}):s.jsx("span",{children:" "})}),s.jsx(H,{sx:{mt:1,background:"white"},ref:V,children:r&&s.jsx(s.Fragment,{children:C.length>0&&(C==null?void 0:C.map((t,o)=>s.jsx(s.Fragment,{children:s.jsx(Le,{stdFinalResult:t,IsTotalConsiderForProgressReport:K,ToppersCount:Q,isAllStdSelect:n==="0"},o)})))})})]})};export{$e as default};