import{ad as me,u as xe,c as u,r as a,kH as be,kI as D,t as ge,kJ as he,j as s,B as v,C as Se,ay as S,n as je,G as i,o as A,E as $,I as z,J as B,bI as j,T,af as pe,ag as Ie,ah as fe,ai as X,aj as x,ak as ye,id as Le,fx as Pe,kK as Ce}from"./index-CpZD2H93.js";import{S as Oe}from"./Save-Pq9d8yJY.js";import{Q as we}from"./QuestionMark-B_7MKkiz.js";const ke=()=>{const E=me(),{EditStatusId:r,ClassName:Y,Assesment:H,SelectTerm:b,SubjectName:M,SubjectId:p,StandardDivisionId:k,selectTeacher:I}=E.state||{},f=Number(localStorage.getItem("localSchoolId")),y=Number(sessionStorage.getItem("AcademicYearId")),g=xe(),V=u(e=>e.AssignPrePrimaryGrades.ISXseedStudentsList),W=u(e=>e.AssignPrePrimaryGrades.ISXseedSubjectSectionList),G=u(e=>e.AssignPrePrimaryGrades.ISXseedGradesList),o=u(e=>e.AssignPrePrimaryGrades.ISListLearningOutcomeDetails),m=u(e=>e.AssignPrePrimaryGrades.ISListObsDetails),L=u(e=>e.AssignPrePrimaryGrades.ISInsertStudentGradesMsg);u(e=>e.AssignPrePrimaryGrades.Loading),localStorage.getItem("localSchoolId");const[c,J]=a.useState("0"),[l,Q]=a.useState("0"),[K,P]=a.useState("0"),[h,C]=a.useState({}),[U,q]=a.useState(""),[Z,_]=a.useState(""),[ee,N]=a.useState(!1),[O,F]=a.useState(""),[se,te]=a.useState(""),[ae,re]=a.useState(""),w={padding:"0.2em 1.5em"};a.useEffect(()=>{m.length>0&&(q(m[0].LearningOutcomeObsId),_(m[0].subRemark),F(m[0].obs),re(m[0].obs))},[m]),a.useEffect(()=>{const e={asSchoolId:Number(f),asAcademicYearId:Number(y),asStandardDivisionId:Number(k),asAssessmentId:Number(b),asSubjectId:Number(p)};g(be(e))},[]);const R={asSchoolId:Number(f),asAcademicYearId:Number(y),asAssessmentId:Number(b),asSubjectSectionConfigurationId:Number(l),asYearwiseStudentId:Number(c),asSubjectId:Number(p)};a.useEffect(()=>{c!=="0"&&l!=="0"&&(g(D(R)),P("0"))},[c,l]),a.useEffect(()=>{L!==""&&(ge.success(L),g(he()),g(D(R)),P("0"))},[L]),a.useEffect(()=>{if(o.length>0){const e=o.reduce((n,t)=>(n[t.Text1]=`${t.Text4}-${t.Text5}`,n),{});C(e),te(JSON.stringify(e))}},[o]);function ne(e){Q(e)}function ie(e){J(e)}function oe(e){P(e);const n=o.reduce((t,d)=>(t[d.Text1]=`${e}-${d.Text5}`,t),{});C(n)}const de=(e,n,t)=>{C(d=>({...d,[e]:`${n}-${t}`}))};function ce(){const e={asSchoolId:Number(f),asAcademicYearId:Number(y),asYearwiseStudentId:Number(c),asLearningOutcomeXML:le(),asInsertedById:Number(sessionStorage.getItem("Id")),asSubjectSectionConfigurationId:Number(l),asObservation:O,asAssessmentId:Number(b),asLearningOutcomesObservationId:Number(U),asSubjectRemark:Z,asSubjectId:Number(p)};(se!==JSON.stringify(h)||ae!==O)&&g(Ce(e))}function le(){let e="";return o.forEach(n=>{const t=n.Text1,d=h[t].split("-")[0],ue=h[t].split("-")[1];e+=`<LearningOutcomes GradeId='${d}' LearningOutcomeConfigId='${t}' LearningOutcomeGradeId='${ue}'/>`}),e=`<LearningOutcomes>${e}</LearningOutcomes>`,e}return s.jsxs(v,{sx:{px:2},children:[s.jsx(Se,{navLinks:[{title:I==="RP"?"Pre-Primary Pro...":"Assign Pre-Pri...",path:I==="RP"?`/RITeSchool/Teacher/PrePrimaryResult/${S(b)}/${S(k)}`:"/RITeSchool/Teacher/AssignPrePrimaryGrades/"+S(b)+"/"+S(I)},{title:"Pre-Primary Progress Report Subject Grades",path:""}],rightActions:s.jsx(s.Fragment,{children:s.jsxs(je,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"right",gap:1,sx:{mt:{xs:0,sm:0},flexWrap:{xs:"nowrap",sm:"nowrap"}},children:[s.jsx(i,{item:!0,xs:12,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-end"},children:s.jsx(A,{label:"Class",value:Y,sx:{bgcolor:"#F0F0F0",width:{xs:"40vw",sm:"12vw"}},size:"small",InputProps:{readOnly:!0}})}),s.jsx(i,{item:!0,xs:12,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-end"},children:s.jsx(A,{label:"Assessment",value:H,sx:{bgcolor:"#F0F0F0",width:{xs:"40vw",sm:"12vw"}},size:"small",InputProps:{readOnly:!0}})}),s.jsx(i,{item:!0,xs:12,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-end"},children:s.jsx(A,{label:"Subject Name",value:M,sx:{bgcolor:"#F0F0F0",width:{xs:"40vw",sm:"12vw"}},size:"small",InputProps:{readOnly:!0}})}),s.jsxs(i,{item:!0,xs:12,gap:1,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-end "},children:[r!=="3"&&r!=="3P"&&c!=="0"&&l!=="0"&&s.jsx($,{title:"Save",children:s.jsx(z,{onClick:ce,sx:{background:B[500],color:"white","&:hover":{backgroundColor:B[600]}},children:s.jsx(Oe,{})})}),s.jsx($,{title:`Assign grades to each student in the class for the selected subject section and click on "Save".
                                Once grades are submitted to class-teacher you can modify it from xseed results.`,children:s.jsx(z,{sx:{bgcolor:"grey.500",color:"white","&:hover":{bgcolor:"grey.600"}},children:s.jsx(we,{})})})]})]})})}),s.jsxs(i,{container:!0,spacing:2,children:[s.jsx(i,{item:!0,xs:12,sm:4,md:3,lg:3,children:s.jsx(j,{ItemList:V,defaultValue:c,label:"Student ",sx:{minWidth:"15vw"},size:"small",onChange:ie,mandatory:!0})}),s.jsx(i,{item:!0,xs:12,sm:4,md:3,lg:3,children:s.jsx(j,{ItemList:W,defaultValue:l,label:"Subject Section",sx:{minWidth:"15vw"},size:"small",onChange:ne,mandatory:!0})})]}),r==="3"&&s.jsx(T,{variant:"body1",sx:{textAlign:"center",marginBottom:1,backgroundColor:"#324b84",padding:1,borderRadius:2,color:"white",mt:2},children:s.jsx("b",{children:"Student grades are already submitted."})}),r==="3P"&&s.jsx(T,{variant:"body1",sx:{textAlign:"center",marginBottom:1,backgroundColor:"#324b84",padding:1,borderRadius:2,color:"white",mt:2},children:s.jsx("b",{children:"Results for this assessment has been published. You need to unpublish the assessment to update the grades."})}),c!=="0"&&l!=="0"&&o.length>0&&s.jsxs(v,{sx:{background:"white",p:2,mt:2},children:[s.jsx(pe,{component:v,children:s.jsxs(Ie,{"aria-label":"simple table",sx:{border:e=>`1px solid ${e.palette.divider}`},children:[s.jsx(fe,{children:s.jsxs(X,{children:[s.jsx(x,{sx:{textTransform:"capitalize",backgroundColor:e=>e.palette.secondary.main,color:"white",pt:"10px",pb:"10px",minWidth:"60vw"},children:s.jsx("b",{children:"Learning Outcome"})}),s.jsx(x,{sx:{textTransform:"capitalize",backgroundColor:e=>e.palette.secondary.main,color:"white",pt:"10px",pb:"10px"},children:s.jsx("b",{children:"Grade"})}),s.jsx(x,{sx:{textTransform:"capitalize",backgroundColor:e=>e.palette.secondary.main,color:"white",pt:"10px",pb:"10px"},children:s.jsx(j,{ItemList:G,defaultValue:K,label:"",sx:{maxWidth:"20vw",backgroundColor:"white",marginLeft:"5px"},size:"small",disabled:r==="3"||r==="3P",DisableClearable:!0,onChange:oe,mandatory:!0})})]})}),s.jsx(ye,{children:o.length>0&&o.map((e,n)=>{var t;return s.jsxs(X,{children:[s.jsx(x,{sx:{...w},children:e.Text2}),s.jsx(x,{sx:{...w}}),s.jsx(x,{sx:{...w},children:s.jsx(j,{ItemList:G,defaultValue:(t=h[e.Text1])==null?void 0:t.split("-")[0],label:"",sx:{width:"20vw",backgroundColor:"white"},size:"small",disabled:r==="3"||r==="3P",DisableClearable:!0,onChange:d=>de(e.Text1,d,e.Text5),mandatory:!0})})]},n)})})]})}),Le()&&s.jsxs(i,{container:!0,spacing:2,mt:0,alignItems:"center",children:[s.jsx(i,{item:!0,xs:12,sm:6,children:s.jsx(T,{variant:"h5",component:"h3",sx:{marginLeft:"18px"},children:"Facilitator's Observation"})}),s.jsx(i,{item:!0,xs:12,sm:6,container:!0,justifyContent:"flex-end",children:s.jsx(Pe,{minRows:2,maxRows:4,disabled:r==="3"||r==="3P",style:{backgroundColor:"white",minWidth:"70vw",resize:"vertical",border:"1px solid #d1d5db",outline:ee?"1px solid grey":"none"},value:O,onChange:e=>{F(e.target.value)},onFocus:()=>N(!0),onBlur:()=>N(!1),maxLength:1e3})})]})]})]})};export{ke as default};