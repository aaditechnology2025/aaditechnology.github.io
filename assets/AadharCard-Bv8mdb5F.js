import{u as X,S as ee,r as a,z as te,c as A,t as L,k5 as ae,k6 as G,k7 as re,j as e,B as i,C as se,E as p,I as y,F as W,H as ie,bl as M,J as $,K as oe,G as o,o as I,aH as m,a6 as le,n as de,T as ne,k8 as ce,bn as he}from"./index-CpZD2H93.js";import{d as ue}from"./CloudUpload-C2WsbpCZ.js";import{d as xe}from"./Refresh-DQlbduBZ.js";const je=()=>{const d=X();ee(),sessionStorage.getItem("AcademicYearId");const P=localStorage.getItem("localSchoolId"),N=sessionStorage.getItem("Id"),J=Number(sessionStorage.getItem("TeacherId"));localStorage.getItem("FolderName");const[w,v]=a.useState(""),[c,h]=a.useState("");a.useState("");const[g,f]=a.useState(""),[u,F]=a.useState(null),[j,E]=a.useState("");a.useState(""),a.useState(""),a.useState("");const[O,z]=a.useState(""),[pe,D]=a.useState(!1);a.useState(!1);const[S,b]=a.useState("");a.useState(!1),a.useState(!1);const _=a.useRef(null);a.useContext(te);const[B,U]=a.useState(""),H=["PDF","JPG","JPEG","PNG","BMP"],V=3e6,R=A(t=>t.AadharcardTecaherSlice.ISUpdateTeacherAadharDetails),C=A(t=>t.AadharcardTecaherSlice.ISDeleteAadharCardPhotoCopy),n=A(t=>t.AadharcardTecaherSlice.ISGetUserDetailsForAadharCardNo),K={asUserId:Number(N),asSchoolId:Number(P),asAadharCardNo:g,asAadharCardPhotoCopyPath:j,asUpdatedById:J.toString(),asSaveFeature:"Aadhar Cards",asFolderName:"PPSN Website",asBase64String:O},Y=()=>{let t=!1;g.trim()===""?(h("Please enter aadhar card number."),t=!0):h(""),B.trim()===""?(v("Please enter name present on aadhar card."),t=!0):v(""),!t&&(d(ce(K)),k())},k=()=>{f(""),U(""),F(null),E(""),b("")};a.useEffect(()=>{n!=null&&f("")},[n]),a.useEffect(()=>{R!==""&&(L.success("Aadhar card details submitted successfully.",{toastId:"success1"}),d(ae()),d(G(T)))},[R]),a.useEffect(()=>{C!=""&&(L.success(C),d(re()))},[C]),a.useState(!1),a.useState("");const T={asUserId:Number(N),asSchoolId:Number(P)};a.useEffect(()=>{d(G(T))},[]);const Z=t=>{/^\d{0,12}$/.test(t)?(f(t),t.length<12?h("Please enter a valid aadhar card number."):h(""),D(!1)):D(!0)},q=async t=>{const r=t.target.files;let l="";for(let s=0;s<r.length;s++){const x=he(r[s],H,V);x==null?(E(r[s].name),F(t.target.files[s]),l=await Q(r[s]),z(l.slice(l.indexOf(",")+1)),b("")):(b(x),_.current.value=null)}},Q=t=>new Promise((r,l)=>{const s=new FileReader;s.readAsDataURL(t),s.onload=()=>{r(s.result)},s.onerror=x=>{l(x)}});return e.jsxs(i,{sx:{px:2},children:[e.jsx(se,{navLinks:[{title:"Add Aadhar Card Details",path:""}],rightActions:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsx(p,{title:"Add aadhar card details.",children:e.jsx(y,{sx:{color:"white",backgroundColor:W[500],height:"36px !important",":hover":{backgroundColor:W[600]}},children:e.jsx(ie,{})})})}),e.jsx(i,{children:e.jsx(p,{title:"Reset",children:e.jsx(y,{sx:{color:"white",backgroundColor:M[500],"&:hover":{backgroundColor:M[600]}},children:e.jsx(xe,{onClick:k,fontSize:"medium"})})})}),e.jsx(i,{children:e.jsx(p,{title:"Save",children:e.jsx(y,{onClick:Y,sx:{backgroundColor:$[500],color:"white",height:"36px !important",":hover":{backgroundColor:$[600]}},children:e.jsx(oe,{})})})})]})}),e.jsx(i,{sx:{p:2,background:"white"},children:e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(o,{item:!0,xs:12,md:8,children:e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(o,{item:!0,xs:12,children:e.jsx(I,{fullWidth:!0,label:"Name",InputLabelProps:{shrink:!0},sx:{width:{xs:"100%",sm:"50%"},"& .MuiInputBase-input":{height:"50px",padding:"10px",bgcolor:"#D3D3D3",borderRadius:"4px",minWidth:"20vw"}},value:n==null?void 0:n.TeacherFullName,InputProps:{readOnly:!0}})}),e.jsxs(o,{item:!0,xs:12,children:[e.jsx(I,{fullWidth:!0,value:g,label:e.jsxs("span",{children:["Aadhar Card Number ",e.jsx("span",{style:{color:"red"},children:"*"})]}),onChange:t=>Z(t.target.value),sx:{width:{xs:"100%",sm:"50%"},"& .MuiInputBase-input":{height:"50px",padding:"10px",bgcolor:"",borderRadius:"4px",minWidth:"20vw"}}}),c&&e.jsx(m,{Error:c}),!!c&&e.jsx(m,{Error:!!c})]}),e.jsxs(o,{item:!0,xs:12,children:[e.jsx(I,{label:e.jsxs("span",{children:["Name As Per Aadhar Card ",e.jsx("span",{style:{color:"red"},children:"*"})]}),value:B,onChange:t=>{const r=t.target.value;/^[A-Za-z\s]*$/.test(r)&&r.length<=150&&U(r)},fullWidth:!0,sx:{width:{xs:"100%",sm:"50%"},"& .MuiInputBase-input":{height:"50px",padding:"10px",bgcolor:"",borderRadius:"4px",minWidth:"20vw"}},inputProps:{maxLength:150}}),w&&e.jsx(m,{Error:w}),e.jsx(p,{title:"Supports only .PDF, .JPG, .PNG, .BMP, .JPEG file types up to 3MB.",children:e.jsx(le,{sx:{width:{xs:"100%",sm:"50%"},height:"65px",gap:1,position:"relative",border:t=>`1px dashed ${t.palette.primary.main}`,display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px",minWidth:"20vw"},color:"primary",children:e.jsxs(de,{direction:"row",alignItems:"center",gap:1,sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[e.jsx(ue,{}),j===""?" No file selected":j,e.jsx("input",{type:"file",onChange:q,style:{opacity:0,top:0,left:0,right:0,bottom:0,position:"absolute",cursor:"pointer",minWidth:"20vw"}})]})})}),S&&e.jsx(i,{sx:{display:"flex",alignItems:"",justifyContent:"",mt:2},children:S&&e.jsx(m,{Error:S})})]})]})}),e.jsx(o,{item:!0,xs:12,md:4,children:e.jsx(i,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:u?u.type==="application/pdf"?e.jsx(i,{sx:{width:"100%",height:"330px",marginBottom:"10px",border:"1px solid grey"},children:e.jsx("iframe",{src:URL.createObjectURL(u),width:"100%",height:"100%",title:"PDF Preview",style:{border:"none"}})}):e.jsx("img",{src:URL.createObjectURL(u),alt:"Preview",style:{width:"100%",height:"auto",marginBottom:"10px"}}):e.jsx(i,{sx:{width:{xs:"100%",sm:"100%"},height:"330px",border:"1px dashed grey",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"10px"},children:e.jsx(ne,{color:"textSecondary",children:"No file selected"})})})})]})})]})};export{je as default};