import{r as a,s as H,ai as k,aj as j,bj as Q,j as e,c1 as ce,af as de,ag as me,ah as he,ak as ue,b9 as xe,o as V,T as o,B as c,u as W,A as pe,c as S,mR as w,h as Ie,z as ge,t as X,mS as be,fe as ve,mT as je,mU as Se,C as fe,E as G,I as M,J as L,br as De,G as g,bI as Ae,mV as Ce,mW as ye}from"./index-CpZD2H93.js";import ke from"./InvestmentDetailsDocument-B293fnru.js";import{T as we}from"./TablePagination-BsPHYpbC.js";import{Q as Te}from"./QuestionMark-B_7MKkiz.js";import{S as Ne}from"./Save-Pq9d8yJY.js";import"./SingleFile-VnBjWcb-.js";import"./CloudUpload-C2WsbpCZ.js";import"./Errormessage-DVJGTehf.js";import"./Visibility-DDnH8LZ2.js";import"./KeyboardArrowRight-BMnDPiZn.js";const $=a.createContext();H(k)(({theme:p})=>`
  background-color: ${p.palette.secondary.main};
 `);H(j)(({theme:p})=>`
  color: white;
font-weight: bold;
 `);const Re=({columns:p,data:m,changeText:h,GroupAmount:F=0,isLoading:C=!1,isPagination:b=!0})=>{const[x,f]=a.useState(0),[v,d]=a.useState(5),T=Q("(max-width:600px)"),A=(n,r)=>{f(r)},[I,N]=a.useState(m);a.useEffect(()=>{N(m.map(n=>({...n,Amount:n.Amount||""})))},[m]);const R=n=>{d(parseInt(n.target.value,10)),f(0)},u=(n,r)=>{let s=n.target.value;s.length>7&&(s=s.slice(0,7)),s=parseFloat(s)||"";const D=I.map((E,P)=>P===r?{...E,Amount:s}:E);N(D),h(D)},i=I.reduce((n,r)=>n+(r.Amount||0),0);let l=a.useContext($);return e.jsxs(ce,{children:[e.jsx(de,{children:T?e.jsxs(c,{sx:{padding:2},children:[I.map((n,r)=>e.jsxs(c,{sx:{border:"1px solid #ddd",borderRadius:"8px",marginBottom:2,padding:2},children:[p.map(s=>e.jsxs(o,{variant:"body1",sx:{fontSize:"0.875rem"},children:[s.label,":"," ",s.renderCell?s.renderCell(n,r):n[s.id]]},s.id)),e.jsx(V,{size:"small",value:n.Amount,onChange:s=>u(s,r),disabled:l==="True",sx:{backgroundColor:l==="True"?"#F4F6F6":"white",marginTop:1}})]},r)),e.jsxs(o,{variant:"h6",sx:{backgroundColor:"#324b84",color:"white",padding:1,textAlign:"center",marginTop:2},children:["Total Amount: ",i]})]}):e.jsxs(me,{"aria-label":"simple table",sx:{border:n=>`1px solid ${n.palette.grey[300]}`},children:[e.jsx(he,{children:e.jsxs(k,{sx:{background:n=>n.palette.secondary.main,color:n=>n.palette.common.white},children:[e.jsx(j,{align:"center",sx:{color:"white"},children:"No."}),p.map(n=>a.createElement(j,{...n.headerCellProps,key:n.id,sx:{color:"white"}},n.renderHeader?n.renderHeader():n.label)),e.jsx(j,{sx:{color:"white"},children:"Amount"})]})}),e.jsxs(ue,{children:[C?e.jsx(k,{children:e.jsx(j,{colSpan:p.length+2,align:"center",children:e.jsx(xe,{})})}):I.length===0?e.jsx(k,{children:e.jsx(j,{colSpan:p.length+2,align:"center",children:"No data available"})}):(b?I.slice(x*v,x*v+v):I).map((n,r)=>e.jsxs(k,{children:[e.jsx(j,{align:"center",children:x*v+r+1}),p.map((s,D)=>a.createElement(j,{...s.cellProps,key:s.id},s.renderCell?s.renderCell(n,r):n[s.id])),e.jsx(j,{children:e.jsx(V,{size:"small",value:n.Amount,onChange:s=>u(s,r),disabled:l==="True",sx:{backgroundColor:l==="True"?"#F4F6F6":"white"}})})]},r)),e.jsxs(k,{children:[e.jsx(j,{colSpan:p.length+1,sx:{textAlign:"right"},children:e.jsx(o,{variant:"h6",sx:{backgroundColor:"#324b84",ml:120,p:.5,color:"white",textAlign:"center"},children:"Total Amount"})}),e.jsx(j,{children:e.jsx(o,{variant:"h6",sx:{backgroundColor:"#324b84",p:.5,mr:12,color:"white",textAlign:"center"},children:i})})]})]})]})}),b&&e.jsx(we,{component:"div",count:I.length,rowsPerPage:v,page:x,onPageChange:A,onRowsPerPageChange:R})]})},Fe=({refreshData:p,clickDocumentDetails:m})=>{const h=W();pe();const F=Number(localStorage.getItem("localSchoolId")),C=Number(localStorage.getItem("UserId"));sessionStorage.getItem("FinancialYearId");const[b,x]=a.useState([]),[f,v]=a.useState([]);a.useState(0);const d=S(u=>u.InvestmentDeclaration.ISlistInvestmentDetails),A=S(u=>u.InvestmentDeclaration.ISNewGetInvestmentDetails)||[],I={asSchoolId:F,asFinancialYearId:1,asUserId:C};a.useEffect(()=>{h(w(I))},[]),a.useEffect(()=>{x(d)},[d]),a.useEffect(()=>{v(d)},[d]);const N=(u,i)=>{x(l=>l.map(n=>{if(n.SectionId===i){const r=u.find(s=>s.Id===n.Id);if(r)return{...n,Amount:r.Amount}}return n})),p(l=>l.map(n=>{if(n.SectionId===i){const r=u.find(s=>s.Id===n.Id);if(r)return{...n,Amount:r.Amount}}return n}))},R=()=>(A.map(i=>b.filter(n=>n.SectionId===i.Id).reduce((n,r)=>n+(r.Amount||0),0)).reduce((i,l)=>i+l,0),A.map(i=>{const l=b.filter(s=>s.SectionId===i.Id);if(l.length===0)return null;l.reduce((s,D)=>s+(D.Amount||0),0);const n=s=>{m(s)},r=[{id:"Name",label:i.Name,renderCell:s=>s.Name},{id:"AttachmentCount",label:"Attachment Count",headerCellProps:{align:"center"},cellProps:{align:"center"},renderCell:s=>e.jsxs("div",{onClick:()=>n(s),style:{cursor:"pointer"},children:[" ",s.DocumentCount]})},{id:"MaximumLimit",label:"Maximum Limit Rs.",headerCellProps:{align:"center"},cellProps:{align:"center",sx:{border:s=>`1px solid ${s.palette.divider}`}},renderCell:s=>i.GroupMaxAmount==0?s.MaxAmount:i.GroupMaxAmount}];return e.jsx(e.Fragment,{children:e.jsx(c,{sx:{background:"white",pt:2,pb:2},children:e.jsx(Re,{columns:r,data:l,isLoading:!1,isPagination:!1,GroupAmount:i.GroupMaxAmount,changeText:s=>N(s,i.Id)})},i.Id)})}));return e.jsx(c,{sx:{width:1},children:R()})},Xe=()=>{var Y,O,z;const p=Ie(),m=Q(p.breakpoints.down("sm")),h=W(),{showAlert:F,closeAlert:C}=a.useContext(ge),b=Number(localStorage.getItem("localSchoolId")),x=Number(localStorage.getItem("UserId"));sessionStorage.getItem("FinancialYearId"),a.useState([]),a.useState("");const f=S(t=>t.InvestmentDeclaration.ISlistInvestmentDetails);S(t=>t.InvestmentDeclaration.ISlistInvestmentAmountDetails);const v=S(t=>t.InvestmentDeclaration.ISSubmitInvestmentDeclaration),d=S(t=>t.InvestmentDeclaration.ISlistInvestmentEmpDetails),T=d.map(t=>t.IsSubmitted),[A,I]=a.useState("0"),R=S(t=>t.InvestmentDeclaration.ISNewGetInvestmentDetails)||[],u=S(t=>t.InvestmentDeclaration.ISGetRegimeDropdown),i=S(t=>t.InvestmentDeclaration.ISSaveInvestment),l={asSchoolId:b,asFinancialYearId:1,asUserId:x},n={asSchoolId:b,asFinancialYearId:1,asUserId:x},r={asSchoolId:b},[s,D]=a.useState([]),E=()=>{const t={asSchoolId:b,asFinancialYearId:1,asUpdatedById:x,asUserId:x,asDeclarationXML:J(),asRegimeId:Number(A)};h(Ce(t)),h(w(l))};a.useEffect(()=>{i!=""&&(X.success(i),h(be()),h(w(l)))},[i]);const P=()=>{const t={asSchoolId:b,asFinancialYearId:1,asUserId:x,asUpdatedById:x};F({title:"Please Confirm",message:"After submission you will not be able to update any details. Do you want to continue? ",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onConfirm:()=>{C(),h(ye(t))},onCancel:C})};a.useEffect(()=>{v!=""&&(X.success(v),h(ve()),h(w(l)))},[v]);function J(){let t=`\r
<ArrayOfInvestmentDeclaration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\r
 >`;return s.map(y=>{y.Amount!=""&&(t+="<InvestmentDeclaration><Id>0</Id><InvestmentMethodId>"+y.Id+"</InvestmentMethodId><UserId>0</UserId><Amount>"+y.Amount+"</Amount><IsDocSubmitted>false</IsDocSubmitted><SectionId>0</SectionId><SortOrder>0</SortOrder><DocumentCount>0</DocumentCount><RegimId>0</RegimId></InvestmentDeclaration>")}),t+=`\r
</ArrayOfInvestmentDeclaration>`,t}const q=R.map(t=>s.filter(U=>U.SectionId===t.Id).reduce((U,le)=>U+(le.Amount||0),0)).reduce((t,y)=>t+y,0);a.useEffect(()=>{h(je(r))},[]),a.useEffect(()=>{u.length>0&&d.length>0&&(d[0].RegimeId!=="0"?I(d[0].RegimeId):I(u[0].Value))},[u,d]),a.useEffect(()=>{h(w(l))},[]),a.useEffect(()=>{h(Se(n))},[]);const K=sessionStorage.getItem("StudentName");a.useEffect(()=>{f.length>0&&D(f)},[f]);const Z=t=>{I(t)},_=t=>{D(t)},[ee,B]=a.useState(!1),[te,ne]=a.useState(null),[se,ae]=a.useState(""),re=t=>{ne(t.Id),ae(t.Name),B(!0)},oe=()=>{h(w(l))},ie=t=>{B(!1)};return e.jsx(e.Fragment,{children:e.jsxs(c,{sx:{px:2},children:[e.jsx(fe,{navLinks:[{title:"Investment Declaration",path:"/RITeSchool/Teacher/InvestmentDeclaration"}],rightActions:e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(G,{title:"Submit investment details for income tax calculation",children:e.jsx(M,{sx:{bgcolor:"grey.500",color:"white","&:hover":{bgcolor:"grey.600"}},children:e.jsx(Te,{})})})}),e.jsx(c,{children:e.jsx(G,{title:"Save",children:e.jsx("span",{children:e.jsx(M,{sx:{backgroundColor:L[500],color:"white","&:hover":{backgroundColor:L[600]}},onClick:E,disabled:((Y=d[0])==null?void 0:Y.IsSubmitted)=="True",children:e.jsx(Ne,{})})})})}),e.jsx(c,{children:e.jsx(G,{title:"Submit",children:e.jsx("span",{children:e.jsx(M,{disabled:!(((O=d[0])==null?void 0:O.IsSaved)=="True"&&((z=d[0])==null?void 0:z.IsSubmitted)=="False"),sx:{backgroundColor:L[500],color:"white","&:hover":{backgroundColor:L[600]}},onClick:P,children:e.jsx(De,{})})})})})]})}),e.jsx(ke,{Id:te,UserName:d.length>0?d[0].UserName:K,DocumentName:se,open:ee,handleClose:ie,RefreshList:oe}),e.jsxs(c,{border:1,sx:{p:2,background:"white"},children:[e.jsx(g,{container:!0,spacing:3,children:d.map(t=>e.jsxs(g,{item:!0,xs:12,children:[e.jsxs(c,{sx:{backgroundColor:"#F0F0F0",textAlign:"center",marginBottom:2},children:[e.jsx("hr",{}),e.jsx(o,{variant:"h4",textAlign:"center",color:"#38548a",mb:1,children:t.SchoolName}),e.jsx("hr",{}),e.jsx(o,{variant:"h4",textAlign:"center",color:"#38548a",mb:1,children:t.SchoolAddress}),e.jsx("hr",{}),e.jsxs(o,{variant:"h4",textAlign:"center",color:"#38548a",mb:1,children:["INVESTMENT DECLARATION FORM FOR FINANCIAL YEAR"," ",t.FinancialYear]}),e.jsx("hr",{})]}),e.jsxs(g,{container:!0,spacing:2,mb:2,children:[e.jsx(g,{item:!0,xs:12,sm:6,children:e.jsxs(o,{variant:"h6",children:[e.jsx(c,{display:"inline-block",border:1,borderRadius:40,pl:1,pr:7,mr:1,component:"span",children:"Name"}),e.jsx(o,{variant:"h5",component:"span",children:t.UserName})]})}),e.jsx(g,{item:!0,xs:12,sm:6,children:e.jsxs(o,{variant:"body1",children:[e.jsx(c,{display:"inline-block",border:1,borderRadius:4,pl:1,pr:2.5,mr:1,component:"span",children:"Employee No"}),e.jsx(o,{variant:"h5",component:"span",children:t.EmployeeNo})]})}),e.jsx(g,{item:!0,xs:12,sm:6,children:e.jsxs(o,{variant:"body1",children:[e.jsx(c,{display:"inline-block",border:1,borderRadius:4,pl:1,pr:5.5,mr:1,component:"span",children:"Address"}),e.jsx(o,{variant:"h5",component:"span",children:t.Address})]})}),e.jsx(g,{item:!0,xs:12,sm:6,children:e.jsxs(o,{variant:"body1",children:[e.jsx(c,{display:"inline-block",border:1,borderRadius:4,pl:1,pr:3.5,mr:1,component:"span",children:"Designation"}),e.jsx(o,{variant:"h5",component:"span",children:t.Designation})]})}),e.jsx(g,{item:!0,xs:12,sm:6,children:e.jsxs(o,{variant:"body1",children:[e.jsx(c,{display:"inline-block",border:1,borderRadius:4,pl:1,pr:6,mr:1,component:"span",children:"PAN No"}),e.jsx(o,{variant:"h5",component:"span",children:t.PanNo})]})}),e.jsx(g,{item:!0,xs:12,sm:6,children:e.jsxs(o,{variant:"body1",children:[e.jsx(c,{display:"inline-block",border:1,borderRadius:4,pl:1,pr:6.5,mr:1,component:"span",children:"Gender"}),e.jsx(o,{variant:"h5",component:"span",children:t.Gender})]})})]}),e.jsx(c,{children:e.jsx(Ae,{sx:{maxWidth:"30vh"},ItemList:u,onChange:Z,label:"Regime",defaultValue:A,size:"small"})}),e.jsx(c,{children:f.length>0&&e.jsx(g,{container:!0,sx:{maxWidth:"100%"},children:e.jsx($.Provider,{value:T.length>0?T[0]:"",children:e.jsx(Fe,{clickDocumentDetails:re,refreshData:_})})})})]},t.UserId))}),e.jsxs(c,{sx:{pl:m?1:2,pr:m?1:2},children:[e.jsxs(c,{sx:{mt:0,pl:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:m?"center":"flex-start",textAlign:"center"},children:[e.jsx(o,{variant:"h6",sx:{color:"white",backgroundColor:"#38548a",p:1,mr:m?0:1.5,mb:0},children:"Grand Total"}),e.jsx(o,{sx:{backgroundColor:"#38548a",color:"white",p:1,ml:2},children:q})]}),e.jsx(g,{container:!0,spacing:m?2:3,children:d.map(t=>e.jsx(g,{item:!0,xs:12,children:e.jsxs(c,{sx:{backgroundColor:"#ffffff",mt:2,p:m?2:3,borderRadius:1,boxShadow:1},children:[e.jsxs(o,{variant:"body1",paragraph:!0,children:["I further undertake to provide all documentary proofs of payment made by me before 25th January,"," ",t.FinancialYearEnd,", and if I fail to do so, the school can make full deduction of income tax dues from February / March ",t.FinancialYearEnd," salary."]}),e.jsx(o,{variant:"body1",paragraph:!0,children:"I hereby declare that the information stated above is true and correct. I also authorize the School to recover tax (TDS) from my salary based on the declaration/documents submitted by me. I am personally liable to Income Tax proceedings for any misstatements in the declaration or proofs submitted herewith if they are inconsistent with the requirement of the Income Tax Act, 1961."}),e.jsxs(o,{variant:"body1",children:["I ",e.jsx("b",{children:t.UserName})," solemnly declare that to the best of my knowledge and belief, the information given above is correct and complete."]})]})},t.UserId))})]})]})]})})};export{Xe as default};