function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/web-TfbZNMe6.js","assets/index-CpZD2H93.js","assets/index-BV_Y88AT.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{en as It,eo as xt,j as e,T as w,G as R,ep as he,S as Q,bm as St,h as J,B as U,r as u,u as X,ct as ae,L as we,N as Le,O as Ye,P as k,c as F,eq as mt,er as ht,es as gt,et as Ft,eu as pt,ev as ft,q as yt,v as ge,A as At,ew as jt,ex as Pt,ey as bt,ez as Nt,eA as Ct,eB as Dt,eC as wt,eD as Lt,eE as Yt,eF as Rt,eG as Tt,eH as vt,eI as Ot,eJ as kt,eK as Et,eL as Bt,eM as Mt,eN as Ut,ay as Fe,eO as Gt,cG as _t,E as Ht,cH as qt,l as Vt,eP as pe}from"./index-CpZD2H93.js";import{E as ce}from"./ErrorMessages-Cl09dz4o.js";import{E as $t}from"./Errormessage-DVJGTehf.js";import{N as Wt,a as zt}from"./Note-D5w6lthy.js";import{B as K}from"./ButtonStyle-DAEB_dBE.js";import{p as Kt,q as Qt,r as fe,s as Jt,L as Re,f as Te,C as Xt,b as Zt,W as ve,e as ye}from"./CardStyle-CBuNm0_N.js";import{d as le}from"./RadioButtonUnchecked-r_6mn_G1.js";import{A as Oe,H as ke}from"./AccordianStyled-Bfci40yR.js";import{d as Ae}from"./FileDownloadOutlined-sbCx2Lz_.js";import{D as en}from"./Dropdown-AVnwFZWJ.js";import{P as tn}from"./PageHeader-C9ChZO91.js";import{D as je,a as Pe}from"./DotLegendStyled-CQchpEqY.js";import{T as nn,a as be}from"./ToggleButtonGroup-Cn-xBBV5.js";import{L as sn}from"./Link-QB4wltBd.js";import"./Card-B0aZ7mGs.js";const an=It("Browser",{web:()=>xt(()=>import("./web-TfbZNMe6.js"),__vite__mapDeps([0,1,2])).then(n=>new n.BrowserWeb)}),on=()=>e.jsxs(e.Fragment,{children:[e.jsx(w,{sx:{textDecorationLine:"underline",mb:"10px"},children:e.jsx("b",{children:"NEFT Details For Fee Payment"})}),e.jsxs(R,{container:!0,sx:{display:"flex",flexDirection:"row"},children:[e.jsxs(R,{xs:2,children:[e.jsx(w,{children:"Name:"}),e.jsx(w,{children:"A/c No:"}),e.jsx(w,{children:"Bank Name:"}),e.jsx(w,{children:"Branch:"})]}),e.jsxs(R,{xs:10,sx:{mb:"10px"},children:[e.jsx(w,{children:e.jsx("b",{children:"PAWAR PUBLIC SCHOOL, HINJEWADI"})}),e.jsx(w,{children:e.jsx("b",{children:"912010033385065"})}),e.jsx(w,{children:e.jsx("b",{children:"Axis Bank Ltd."})}),e.jsx(w,{children:e.jsx("b",{children:"Hinjewadi"})}),e.jsx(w,{children:e.jsx("b",{children:"UTIB0001034"})})]}),e.jsx(w,{children:e.jsx("b",{children:"Note: Mail the screen shot of successful payment and Transaction details to rohit.bhosale@ppshinjewadi.com / accountsofficer@ppshinjewadi.com"})})]})]}),rn=({item:n})=>{const S=he(n.DueDate),i=he(new Date);return e.jsxs(Kt,{children:[e.jsx(Qt,{children:n.Text1}),e.jsxs(w,{children:[n.Text2,e.jsx("b",{children:n.Text3})]}),new Date(i)>new Date(S)?e.jsx(fe,{color:"red",children:n.Text4}):e.jsx(fe,{children:n.Text4})]})},ln=({item:n,onChange:S,IsNotDisabled:i=!0,InternalOrSchool:r})=>{const h=Q(),I=()=>{S({...n,IsActive:!n.IsActive})};return e.jsx(e.Fragment,{children:n.ParentId!=="0"?null:e.jsx(e.Fragment,{children:i==!1&&r=="SchoolFees"||i==!1&&r=="internalFees"?e.jsx(le,{sx:{color:"grey"},className:h.checkboxSize}):n.IsEnabled?n.IsActive?e.jsx(St,{sx:{color:"green"},onClick:I,className:h.checkboxSize}):e.jsx(le,{sx:{color:"green"},onClick:I,className:h.checkboxSize}):e.jsx(le,{sx:{color:"grey"},className:h.checkboxSize})})})},cn=({item:n,onChange:S,FeesCard:i,IsNotDisabled:r=!0,InternalOrSchool:h})=>{const I=J();return e.jsx("div",{children:e.jsx(Jt,{sx:{background:n.IsActive?`${I.colors.gradients.selectedlistColor}`:`${I.colors.gradients.pink1}`},children:e.jsxs(R,{container:!0,children:[e.jsx(R,{item:!0,xs:1,display:"flex",mt:.8,children:e.jsx(U,{ml:.5,children:e.jsx(ln,{item:n,onChange:S,IsNotDisabled:r,InternalOrSchool:h})})}),e.jsx(R,{item:!0,xs:11,children:e.jsx(i,{item:n})})]})})})},dn=({Itemlist:n,RefreshData:S,FeesCard:i,isSingleSelect:r=!1,IsSequenceSelect:h=!1,IsNotDisabled:I=!0,InternalOrSchool:c})=>{const[D,o]=u.useState(!0);(D||(()=>{let d=!0;return n.map(m=>{m.IsEnabled&&(d=!1)}),d})())&&(n=n.map((d,m)=>({...d,IsEnabled:!!(h&&m===0||!h)})));const C=d=>{o(!1),n=n.map(m=>m.Id===d.Id||m.ParentId===d.Id?{...m,IsActive:d.IsActive}:{...m,IsActive:r?!1:m.IsActive}),j(),l(),S(n)},l=()=>{n=n.map(d=>d.ParentId!=="0"?{...d,IsActive:g(d.ParentId)}:d)},g=d=>{let m=!1;return n.filter(p=>p.Id===d).map(p=>{m=p.IsActive}),m},j=()=>{if(h){let d=!0,m=!0;n=n.map(p=>p.ParentId==="0"?p.IsActive&&m?{...p,IsEnabled:!0}:(m=!1,d?(d=!1,{...p,IsEnabled:!0,IsActive:!1}):{...p,IsEnabled:!1,IsActive:!1}):p)}};return e.jsx("div",{children:n.map((d,m)=>e.jsx(cn,{FeesCard:i,item:d,onChange:C,IsNotDisabled:I,InternalOrSchool:c},m))})},un=({currentYear:n,IsForCurrentyear:S,OldYearwiseStudentId:i,internalFees:r,FeesObject:h,ApplicableFee:I,TotalLateFee:c,SchoolwiseStudentId:D,NextYearID:o,IsOnlinePaymetCautionMoney:b,clickPayOnline:C,OldInternalstudent:l,IsPending:g,RestrictNewPayment:j})=>{X(),localStorage.getItem("localSchoolId");const d=sessionStorage.getItem("StandardId"),m=sessionStorage.getItem("StudentId"),p=Number(sessionStorage.getItem("AcademicYearId")),[L,f]=u.useState(0),[N,T]=u.useState([]),[B,G]=u.useState(!1),[Z,V]=u.useState(!1),oe=sessionStorage.getItem("Userlogin"),$=n==o?D:m,P=N.filter(a=>a.IsActive===!0).map((a,A)=>a.StudentFeeId),_=n<p?l:$,M=S?1:0,O=ae(a=>a.Fees.FeesData);O.map((a,A)=>a.FeeType);let H=0;O.map((a,A)=>{H=a.ConcessionAmount});const y=ae(a=>a.getSchoolSettings.EnableOnlinePaymentForInternalFee),ee=ae(a=>a.getSchoolSettings.EnableOnlinePaymentForLastYearFee),W=ae(a=>a.getSchoolSettings.EnabledOnlineFee);u.useEffect(()=>{let a=0,A="0";O.length>0&&(O[0].ShowOptionButtonForAllEntry!==void 0&&O[0].ShowOptionButtonForAllEntry?(G(!1),Number(n)===o?V(!1):V(!0)):(V(!1),Number(n)===o||r=="internalFees"?G(!1):G(!0))),T(O.filter(s=>r=="internalFees"&&s.FeeDetailsId==0||s.AmountPayable!=="0").map((s,Y)=>{const v=s.LateFeeAmount==="0"?"Amount :":"Amount + Late Fees : ";return r==="internalFees"||Number(n)===o||a!==s.PaymentGroup&&(a=s.PaymentGroup,A=(Y+1).toString()),{Id:(Y+1).toString(),Name:s.FeeId,Value:s.FeeId,IsActive:!1,Text1:s.FeeType+"("+s.PayableFor+")",Text2:v,DisplayText:r=="internalFees"?s.LateFeeAmount=="0"?+s.Amount:s.Amount+" + "+s.LateFeeAmount:s.LateFeeAmount=="0"?+s.AmountPayable:s.AmountPayable+" + "+s.LateFeeAmount,Text3:r=="internalFees"?s.LateFeeAmount=="0"?" Rs. "+s.Amount:" Rs. "+s.Amount+" + Rs. "+s.LateFeeAmount:s.LateFeeAmount=="0"?" Rs. "+s.AmountPayable:"Rs. "+s.AmountPayable+" + Rs. "+s.LateFeeAmount,Text4:"Due On : "+s.DueDateFormat,ParentId:(Y+1).toString()===A?"0":A,AmountPayable:s.AmountPayable,LateFeeAmount:s.LateFeeAmount,DueDate:s.DueDateString,FeeType:s.FeeType,StudentFeeId:r=="internalFees"?s.InternalFeeDetailsId:O[0].ShowOptionButtonForAllEntry!==void 0&&O[0].ShowOptionButtonForAllEntry?s.StudentFeeId:"0"}}))},[O]);const te=(a,A,s)=>{let Y="",v=Number(n)==o?"Y":"N",re=y?1:0;return Number(n)==o&&(Y="StudentId="+$+"&DueDates="+A+"&Remarks=&SchoolwiseStudentFeeId="+a+"&AcadmicYearId="+n+"&StanardID="+d+"&TotalAmount="+L+"&LateFeeAmount="+c+"&IsForNextYear=Y&ConcessionAmount="+H+"&FeeType="+s),Number(n)==p&&(Y="StudentId="+$+"&DueDates="+A+"&Remarks=&SchoolwiseStudentFeeId="+a+"&IsOnlineCautionMoneyPayment=0"),Number(n)<p&&(Y="StudentId="+_+"&DueDates="+A+"&Remarks=&SchoolwiseStudentFeeId="+a+"&IsOnlineCautionMoneyPayment=0&AcadmicYearId="+n+"&IsOldAcademicYearPayment="+M),r=="internalFees"&&(Y="StudentId="+_+"&InternalFeeDetailsId="+P.toString()+"&IsOnlineInternalFeePayment="+re+"&IsForNextYear="+v+"&AcadmicYearId="+n+"&TotalAmount="+L+"&IsForInternalFee=1"),Y},z=()=>{let a="",A="0",s="";N.map(v=>{v.IsActive&&(a=a+v.DueDate+",",A=v.StudentFeeId,s=v.FeeType)});const Y={asSchoolId:localStorage.getItem("localSchoolId"),asUserLogin:oe,asQueryString:te(A,a,s),asSchoolSiteUrl:localStorage.getItem("SiteURL")+"/RITeSchool/SingleSignOnPage.aspx?",asRedirectPageUrl:localStorage.getItem("SiteURL")+"/RITeSchool/Accountant/PayFeeOnline.aspx?"};C(Y)},ne=a=>{T(a)};return u.useEffect(()=>{let a=0;N.map(A=>{const s=r=A.DisplayText;A.IsActive&&(a+=parseInt(s)+parseInt(A.LateFeeAmount))}),f(a)},[N]),e.jsx("div",{children:e.jsxs(R,{container:!0,children:[e.jsxs(R,{item:!0,xs:4,children:["Total : Rs. ",L]}),e.jsx(R,{item:!0,xs:8,children:N.some(a=>a.IsActive===!0)?e.jsx(e.Fragment,{children:W&&e.jsxs(e.Fragment,{children:[n<p?e.jsx(e.Fragment,{children:(ee&&r==="SchoolFees"||r==="internalFees")&&e.jsx(K,{sx:{float:"right"},onClick:z,color:N.some(a=>a.IsActive===!0)?"primary":"warning",children:"Pay Online"})}):e.jsx(e.Fragment,{children:j&&r==="SchoolFees"&&g!=""?null:e.jsx(K,{sx:{float:"right"},onClick:z,color:N.some(a=>a.IsActive===!0)?"primary":"warning",children:"Pay Online"})})," "]})}):null}),e.jsx(R,{item:!0,xs:12,sx:{mt:2},children:N.length>0&&e.jsx(dn,{Itemlist:N,RefreshData:ne,FeesCard:rn,IsSequenceSelect:B,isSingleSelect:Z,IsNotDisabled:W,InternalOrSchool:r})})]})})},In=({expanded:n,handleChange:S,FeesObject:i,currentYear:r,IsForCurrentyear:h,OldYearwiseStudentId:I,internalFees:c,ApplicableFee:D,TotalLateFee:o,SchoolwiseStudentId:b,NextYearID:C,IsOnlinePaymetCautionMoney:l,clickPayOnline:g,OldInternalstudent:j,IsPending:d,RestrictNewPayment:m})=>{const p=J(),L=Q();return e.jsx(e.Fragment,{children:e.jsxs(we,{className:L.background,expanded:n==="panel1",onChange:S("panel1"),elevation:0,disableGutters:!0,children:[e.jsx(Oe,{expandIcon:e.jsx(Le,{sx:{color:"black"}}),"aria-controls":"panel1bh-content",id:"panel1bh-header",sx:{background:`${p.colors.gradients.pink1}`},color:"primary",children:e.jsxs(ke,{color:n==="panel1"?"secondary":"",children:[e.jsx("b",{children:"Payable Fees"})," :  ",e.jsxs("b",{children:["Rs. ",i.FeesTobePaid]}),e.jsx("br",{}),e.jsx("b",{children:"Late Fee"})," :  ",e.jsxs("b",{children:["Rs. ",i.TotalLateFee]})]})}),e.jsx(Ye,{children:e.jsx(un,{currentYear:r,IsForCurrentyear:h,OldYearwiseStudentId:I,internalFees:c,FeesObject:i,ApplicableFee:D,TotalLateFee:o,SchoolwiseStudentId:b,NextYearID:C,IsOnlinePaymetCautionMoney:l,clickPayOnline:g,OldInternalstudent:j,IsPending:d,RestrictNewPayment:m})})]})})};Ee.propTypes={Content:k.string,Date:k.string,FileName:k.string,Id:k.string,IsText:k.string,Name:k.string};function Ee({item:n,Content:S,FileName:i,Name:r,internalFees:h,downloadReceiptFile:I,clickIcon:c}){return e.jsx(e.Fragment,{children:e.jsx(U,{sx:{px:2},children:e.jsxs(Re,{children:[e.jsxs(Te,{children:[" ",r]}),e.jsx(Xt,{dangerouslySetInnerHTML:{__html:S}}),e.jsxs(Zt,{children:[e.jsxs(ve,{sx:{mt:"5px"},children:[" ",i]}),e.jsx(U,{children:i===""?null:e.jsx(e.Fragment,{children:e.jsx(U,{sx:{marginTop:"1px"},children:e.jsx("a",{children:h=="internalFees"?e.jsx(Ae,{onClick:()=>{c(n.ReceiptNo,n.InternalFeeDetailsId,n.SerialNo)}}):e.jsx(e.Fragment,{children:n.IsConcessionFee==!0?null:e.jsx(Ae,{onClick:()=>{I(n.ReceiptNo,n.AccountHeaderId)}})})})})})})]}),e.jsx(w,{mt:-.5,children:n.PaidDateString})]})})})}const xn=({FeesType:n,Fee:S,FeesObject:i,expanded:r,handleChange:h,internalFees:I,currentYear:c})=>{const D=J(),o=Q(),b=X(),C=F(f=>f.Fees.ReceiptFileName),l=F(f=>f.Fees.GetOldStudentDetails),g=F(f=>f.Fees.InternalFeeReceipt),j=sessionStorage.getItem("SchoolwiseStudentId"),d=localStorage.getItem("localSchoolId");sessionStorage.getItem("AcademicYearId"),sessionStorage.getItem("StudentId");const m=sessionStorage.getItem("Userlogin"),p=(f,N)=>{const T={asSchoolId:d,asReceiptNo:f,asAcademicYearId:c,asAccountHeaderId:N,asIsRefundFee:"0",asStudentId:l.StudentId,asSerialNo:"0",asLoginUserId:m};b(gt(T))},L=(f,N,T)=>{b(Ft({aiSchoolId:d,aiAcademicYearId:c,aiSchoolwiseStudentId:j,asReceiptNo:f,aiInternalFeeDetailsId:N,abIsNextYearPayment:"false",aiSerialNumber:T}))};return u.useEffect(()=>{g!==""&&(window.open(localStorage.getItem("SiteURL")+g.replace(/\\/g,"/")),b(mt()))},[g]),u.useEffect(()=>{C!==""&&(window.open(localStorage.getItem("SiteURL")+C.replace(/\\/g,"/")),b(ht()))},[C]),e.jsx(e.Fragment,{children:e.jsxs(we,{className:o.background,expanded:r==="panel",onChange:h("panel"),elevation:0,disableGutters:!0,children:[e.jsx(Oe,{expandIcon:e.jsx(Le,{sx:{color:"black"}}),"aria-controls":"panel1bh-content",id:"panel1bh-header",sx:{background:`${D.colors.gradients.pink1}`,mb:1},children:e.jsxs(ke,{color:r==="panel"?"secondary":"",children:[e.jsx("b",{children:n})," :  ",e.jsxs("b",{children:["Rs. ",i.TotalFeesPaid]})]})}),e.jsx(Ye,{children:i==null?null:i.TotalFeesPaid==0?e.jsx(ce,{Error:"No fees has been paid"}):S==null?null:S.map((f,N)=>(I=="internalFees"?f.FeeDetailsId!==0:f.AmountPayable==0)?e.jsx(Ee,{item:f,Content:"",Name:"",internalFees:I,FileName:I?f.FeeType+"("+f.PayableFor+"): Rs. "+f.Amount:f.FeeType+"("+f.PayableFor+"): Rs. "+f.FeesPaid,downloadReceiptFile:p,clickIcon:L},N):null)})]})})},Sn=({FeesType:n,Fee:S,FeesObject:i,handleChange:r,expanded:h,currentYear:I,IsForCurrentyear:c,OldYearwiseStudentId:D,internalFees:o,ApplicableFee:b,TotalLateFee:C,SchoolwiseStudentId:l,NextYearID:g,IsOnlinePaymetCautionMoney:j,clickPayOnline:d,OldInternalstudent:m,IsPending:p,RestrictNewPayment:L})=>e.jsxs(e.Fragment,{children:[e.jsx(xn,{FeesType:n,Fee:S,FeesObject:i,expanded:h,handleChange:r,internalFees:o,currentYear:I}),e.jsx(In,{expanded:h,handleChange:r,FeesObject:i,currentYear:I,IsForCurrentyear:c,OldYearwiseStudentId:D,internalFees:o,ApplicableFee:b,TotalLateFee:C,SchoolwiseStudentId:l,NextYearID:g,IsOnlinePaymetCautionMoney:j,clickPayOnline:d,OldInternalstudent:m,IsPending:p,RestrictNewPayment:L})]});var Ne,Ce,De;Be.propTypes={FeesType:k.string,Fee:(Ne=k)==null?void 0:Ne.array,Heading:(Ce=k)==null?void 0:Ce.object,Note:(De=k)==null?void 0:De.string};function Be({FeesType:n,Fee:S,Heading:i,Note:r,currentYear:h,IsForCurrentyear:I,OldYearwiseStudentId:c,internalFees:D,ApplicableFee:o,TotalLateFee:b,SchoolwiseStudentId:C,NextYearID:l,IsOnlinePaymetCautionMoney:g,clickPayOnline:j,OldInternalstudent:d,IsPending:m,RestrictNewPayment:p}){J(),Q(),X();const[L,f]=u.useState(!1),N=F(B=>B.Fees.FeesData2),T=B=>(G,Z)=>{f(Z?B:!1)};return e.jsx(Sn,{FeesType:n,Fee:S,FeesObject:N,expanded:L,handleChange:T,currentYear:h,IsForCurrentyear:I,OldYearwiseStudentId:c,internalFees:D,ApplicableFee:o,TotalLateFee:b,SchoolwiseStudentId:C,NextYearID:l,IsOnlinePaymetCautionMoney:g,clickPayOnline:j,OldInternalstudent:d,IsPending:m,RestrictNewPayment:p})}function mn({ShowCaution:n,note:S,IspaidCautionMoney:i,clickCaution:r,IsOnlinePaymetCautionMoney:h}){const I=X(),c=localStorage.getItem("localSchoolId");sessionStorage.getItem("StudentId"),sessionStorage.getItem("StandardId"),sessionStorage.getItem("Id");const D=sessionStorage.getItem("AcademicYearId"),o=sessionStorage.getItem("SchoolwiseStudentId"),b=F(l=>l.Fees.CautionMoneyReceipt),C=()=>{I(ft({aiSchoolId:c,aiAcademicYearId:D,aiStudentId:o}))};return u.useEffect(()=>{b!==""&&(window.open(localStorage.getItem("SiteURL")+b.replace(/\\/g,"/")),I(pt()))},[b]),e.jsx("div",{children:h&&e.jsx(e.Fragment,{children:n==="SchoolFees"&&e.jsx(e.Fragment,{children:i?e.jsx(e.Fragment,{children:e.jsx(K,{fullWidth:!0,sx:{mb:.5},onClick:C,children:"Show Caution Money Receipt"})}):e.jsx(K,{fullWidth:!0,onClick:()=>r(!0),sx:{mb:.5},children:"Pay caution Money"})})})})}const hn=["1) Caution Money paid by Cheque on date 14 Dec 2017. Cheque Details (Date: 14 Dec 2017, Number: 0099998, Bank Name: ICICI BANK), Receipt No. : 30057."],gn="If amount is deducted from your bank account and not reflected on fee screen then please wait for 1 hour and then if required send transaction details to Software Coordinator with Message Center facility.";function Tn(){var Se;J();const n=Q();let{ActiveYear:S,InternalOrSchool:i}=yt();S=ge(S),i=ge(i);const r="SchoolFees",h="internalFees",I=sessionStorage.getItem("AcademicYearId"),[c,D]=u.useState(S===void 0?I:S),[o,b]=u.useState(i===void 0?r:i),C=At(),l=X(),g=localStorage.getItem("localSchoolId"),j=sessionStorage.getItem("StudentId");sessionStorage.getItem("StandardId"),sessionStorage.getItem("StandardDivisionId");const d=sessionStorage.getItem("Id"),[m,p]=u.useState("C");u.useState("false"),u.useState(!1);const[L,f]=u.useState([]),[N,T]=u.useState([]);u.useState([]);const[B,G]=u.useState(!1),[Z,V]=u.useState(null),oe=F(t=>t.Fees.FeesData),$=F(t=>t.Fees.Loading),P=F(t=>t.Fees.FeesData2),_=F(t=>t.Fees.IsPendingFeesForStudent),M=F(t=>t.Fees.YearList);F(t=>t.Fees.GetFeesDetailsOfOldAcademic),F(t=>t.Fees.InternalFeeDetails);const O=F(t=>t.getSchoolSettings.EnableOnlinePaymentForInternalFee),H=F(t=>t.Fees.paymentUrl),y=F(t=>t.Fees.GetNextYearDetails),ee=F(t=>t.Fees.GetOldStudentDetails);F(t=>t.Fees.GetNextYearFeeDetails);const W=F(t=>t.getSchoolSettings.OnlinePaymentForCautionMoney),te=F(t=>t.getSchoolSettings.EnableAdvanceFeePaymentForStudent),z=F(t=>t.getSchoolSettings.EnableAdvanceFeePaymentForStudent),ne=F(t=>t.getSchoolSettings.AllowNextYearInternalFeePaymentForStudent),a=F(t=>t.getSchoolSettings.ShowFeeStructureOfNextYear),A=F(t=>t.Fees.FeeStructureLinks);F(t=>t.Fees.InternalFeeReceipt),F(t=>t.Fees.CautionMoneyReceipt);const s=F(t=>t.getSchoolSettings.RestrictNewPaymentIfOldPaymentIsPending);let Y=ee==null?0:ee.StudentId,v=y==null?0:y.NextAcademicYearId;y==null||y.SchoolwiseStudentId;const re=y==null?0:y.NextStandardId,ie=c==I,de=o=="SchoolFees"?P.TotalFee:P.TotalFee+P.TotalFeesPaid,Me=ie?"0":"1",Ue=P.ConcessionRule,Ge={Fee1:"Fee Type",Fee2:"Amount + Late Fees : ",Fee3:"Receipt"},_e=["1) *RTE student (100% concession on school fees)"],He="*RITE student (100%  Concession on school fees)",qe={aiSchoolId:g,aiYearwiseStudentId:j},Ve={aiSchoolId:g,aiYearwiseStudentId:j},$e={asSchoolId:g,asStudentId:j,aiAcademicYearId:Number(c),abIsForCurrentYear:ie},We={aiSchoolId:g,aiAcademicYearId:c,aiStudentId:j,abIsNextYearFeePayment:Number(c)==v},ze={aiSchoolId:g,aiStudentId:j},Ke={aiSchoolId:g,aiAcademicYearId:c,aiStudentId:j},Qe={aiSchoolId:g,aiAcademicYearId:c,aiUserId:d,abShowFeeStructureForNextYear:a},Je={aiSchoolId:g,aiAcademicYearId:y==null?0:y.NextAcademicYearId,aiSchoolwiseStudentId:y==null?0:y.SchoolwiseStudentId,aiStandardId:re},E={asSchoolId:parseInt(g),aiAcademicYearId:parseInt(I),asKey:""},Xe={asStudentId:j,asAcademicYearId:c,asSchoolId:g};u.useEffect(()=>{l(o==="internalFees"?jt(Ve):Pt(qe))},[o,c]),u.useEffect(()=>{let t=M;if(te&&z&&o=="SchoolFees"||ne&&o=="internalFees"){if(M.length>0&&y!==void 0){let x={id:y==null?0:y.NextAcademicYearId,Name:"Advance Academic Year",Value:y==null?0:y.NextAcademicYearId,YearType:""};T([x,...t])}}else M.length>0&&T(t)},[M,y,te,z,o,ne]),u.useEffect(()=>{localStorage.setItem("url",window.location.pathname),l(bt(E)),l(Nt(E)),l(Ct(ze)),l(Dt(E)),l(wt(E)),l(Lt(E)),l(Yt(E)),l(Rt(E)),l(Tt(E)),l(vt(E)),l(Ot(Xe)),i!==void 0&&S!==void 0&&(b(i),D(S))},[]),u.useEffect(()=>{S==null&&(o=="SchoolFees"||o=="internalFees")&&D(I)},[o]),u.useEffect(()=>{l(kt(Ke))},[c]),u.useEffect(()=>{l(Et(Qe))},[a]),u.useEffect(()=>{o==h?l(Bt(We)):c==(y==null?0:y.NextAcademicYearId)?l(Mt(Je)):l(Ut($e))},[o,c]),u.useEffect(()=>{H!==""&&((async x=>{await an.open({url:x})})(H),C("/RITeSchool/Student/PayOnline/"+Fe(c)+"/"+Fe(o),{state:{fromInternal:!0}}),l(Gt()))},[H]);const Ze=t=>{const x=sessionStorage.getItem("Userlogin");let q="StudentId="+j+"&DueDates=&Remarks=&SchoolwiseStudentFeeId=0&IsOnlineCautionMoneyPayment=1";const se={asSchoolId:localStorage.getItem("localSchoolId"),asUserLogin:x,asQueryString:q,asSchoolSiteUrl:localStorage.getItem("SiteURL")+"/RITeSchool/SingleSignOnPage.aspx?",asRedirectPageUrl:localStorage.getItem("SiteURL")+"/RITeSchool/Accountant/PayFeeOnline.aspx?"};l(pe(se))},et=t=>{l(pe(t))},tt=t=>{M.map(x=>{x===t&&p(x.YearType)}),D(t),M.map(x=>{x.Value===t&&V(x.Name)})},nt=(t,x)=>{x!=null&&b(x)};let ue=[];const[st,at]=u.useState(!1),Ie=()=>{G(!1)},ot=()=>{G(t=>!t)},rt=(t,x)=>{let q=!1,se="",me="";return!t.Name.includes("Advance")&&t.Value!==sessionStorage.getItem("AcademicYearId")&&x.map(ut=>{se=ut.split("-")[1],me=t.Name.split(" ")[4],se===me&&(q=!0)}),q};u.useEffect(()=>{if(P.PendingFeeAcademicYears!==void 0&&c==sessionStorage.getItem("AcademicYearId")){ue=P.PendingFeeAcademicYears.split(",").map(x=>x.trim());let t=N.map(x=>{let q=rt(x,ue);return{...x,Name:x.Name+(q?" (Pending)":"")}});f(t)}},[P]),u.useEffect(()=>{_!==null&&_.Message!==""&&at(!0)},[_]);const xe=A!==null&&A.CurrentYearFeeStructure,lt=A!==null&&A.MidYearFeeStructure,ct=()=>{const t=localStorage.getItem("SiteURL")+xe,x=document.createElement("a");x.href=t,x.click()},it=()=>{const t=lt,x=document.createElement("a");x.href=t,x.click()},dt=()=>{C("ChallanSNSForFees",{state:{fromInternal:!0}})};return e.jsxs(U,{sx:{px:2},children:[e.jsx(tn,{heading:"Fee Details",subheading:""}),xe&&e.jsx("span",{onClick:ct,style:{cursor:"pointer",textDecoration:"underline",color:"brown"},children:"Current Year Fee Structure"})," ","  ",a&&e.jsx("span",{onClick:it,style:{cursor:"pointer",textDecoration:"underline",color:"brown"},children:"Next Year Fee Structure"}),e.jsx("br",{}),e.jsxs(nn,{value:o,exclusive:!0,onChange:nt,sx:{my:1},children:[e.jsx(be,{value:r,children:"School Fees"}),O&&e.jsx(be,{value:h,children:"Internal Fees"})]}),e.jsx(_t,{onClickAway:Ie,children:e.jsx(Ht,{PopperProps:{disablePortal:!0},onClose:Ie,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,arrow:!0,open:B,title:gn,placement:"left",componentsProps:{tooltip:{sx:{marginLeft:"1px",mt:.5,transform:"translate3d(17px, 0.5px, 0px) !important"}}},children:e.jsx(qt,{type:"button",onClick:ot,sx:{color:"navy",fontSize:"17px",mt:"8px",float:"right"}})})}),e.jsx(sn,{href:P.OnlineFeePaymentGuidePath,rel:"noreferrer",target:"_blank"}),e.jsx(U,{sx:{mb:"8px"},children:e.jsx(en,{Array:L,handleChange:tt,label:"Select Year",defaultValue:c})}),c<I&&e.jsx(U,{mt:2,mb:1,children:e.jsx($t,{Error:"You are Viewing data of old academic year"})}),c!=v&&e.jsx(e.Fragment,{children:P.PendingFeeAcademicYears!==""&&e.jsx(e.Fragment,{children:st&&e.jsx(ce,{Error:"Pending fees for :"+P.PendingFeeAcademicYears})})}),c==v&&o=="SchoolFees"&&e.jsx(e.Fragment,{children:s&&e.jsx(ce,{Error:"You cannot pay next year fee till the complete payment of last year fee."})}),o===r&&e.jsxs(R,{container:!0,sx:{mb:.3},children:[e.jsx(R,{item:!0,xs:7.5,children:e.jsxs(je,{children:[e.jsx(Pe,{className:n.border,style:{background:"red"}}),e.jsx(ye,{children:"Bounced Cheque Transaction"})]})}),e.jsx(R,{item:!0,xs:4.5,children:e.jsxs(je,{children:[e.jsx(Pe,{className:n.border,sx:{background:"#64b5f6"}}),e.jsx(ye,{children:"Refunded Fees"})]})})]}),e.jsx(Re,{sx:{mb:1},color:"error",children:e.jsxs(Te,{sx:{textAlign:"center"},children:[" ",e.jsx("b",{children:"Applicable Fees:"})," Rs. ",de]})}),e.jsxs(w,{sx:{textAlign:"center"},my:1,children:[" ",e.jsx("b",{children:Ue})]}),$?e.jsx(Vt,{}):e.jsxs(e.Fragment,{children:[e.jsx(Be,{FeesType:"Paid Fees",Fee:oe,Heading:Ge,Note:He,currentYear:c,IsForCurrentyear:Me,OldYearwiseStudentId:P.OldYearwiseStudentId,internalFees:o,ApplicableFee:de,TotalLateFee:P.TotalLateFee,NextYearID:y==null?0:y.NextAcademicYearId,SchoolwiseStudentId:y==null?0:y.SchoolwiseStudentId,IsOnlinePaymetCautionMoney:W,clickPayOnline:et,OldInternalstudent:Y,IsPending:P.PendingFeeAcademicYears,RestrictNewPayment:s}),P.IsRTEstudent==!0&&e.jsx(Wt,{NoteDetail:_e}),e.jsx(mn,{ShowCaution:o,IspaidCautionMoney:P.IsCautionMoneyPaid,note:hn,clickCaution:Ze,IsOnlinePaymetCautionMoney:W})]}),Object.keys(P).length>0&&P.PaymentNotes!==void 0&&e.jsxs(zt,{children:[e.jsx("b",{children:"Note :"}),(Se=P.PaymentNotes)==null?void 0:Se.map((t,x)=>e.jsxs(U,{sx:{display:"flex",flexDirection:"row"},children:[e.jsxs(w,{children:[" ",t.SrNo,". "]}),e.jsx(ve,{dangerouslySetInnerHTML:{__html:t.Note}})]},x))]}),g=="11"&&e.jsx(e.Fragment,{children:e.jsx(on,{})}),g=="122"&&e.jsx(K,{onClick:dt,children:"Generate challan"})]})}export{Tn as default};