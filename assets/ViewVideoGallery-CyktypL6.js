import{r as s,q as le,v as c,u as oe,z as ie,c as C,oU as v,t as z,oV as re,oW as de,j as e,B as A,C as ne,E as u,I as x,F as T,J as g,K as ce,G as h,o as b,af as ue,c1 as xe,ag as he,ah as pe,ai as F,aj as r,ak as me,a9 as je,aw as fe,ap as ge,aq as be,a0 as Ve,a1 as Ie,bd as ye,a3 as we,T as De,oX as Se,oY as W}from"./index-CpZD2H93.js";import{d as Ce}from"./SaveAs-Dlzp7KjJ.js";import{Q as ve}from"./QuestionMark-B_7MKkiz.js";const Be=()=>{const[Te,N]=s.useState([{id:1,url:"https://www.youtube.com/embed/6fc2ahfyYQ0",title:"Sasa"},{id:2,url:"https://www.youtube.com/embed/6fc2ahfyYQ0",title:"Saaasa"}]);let{Video_Id:d,videoName:n,URLSource:m}=le();console.log(c(d),c(n),c(m),"1234567"),d=c(d),n=c(n),m=c(m);const i=oe(),[l,j]=s.useState({url:"",title:""}),[V,k]=s.useState(null),[_,U]=s.useState(!1),[$,O]=s.useState(""),[I,B]=s.useState(!1),[E,Q]=s.useState(""),[R,M]=s.useState(""),[Y,q]=s.useState(""),{showAlert:H,closeAlert:L}=s.useContext(ie),f=Number(localStorage.getItem("localSchoolId")),y=Number(localStorage.getItem("UserId")),o=C(t=>t.VideoNew.ISGetViewVideoDetails),w=C(t=>t.VideoNew.SaveUpdateVideo),D=C(t=>t.VideoNew.DeleteVideoGallary),S={asSchoolId:Number(f),asVideoId:Number(d),asSubjectId:0};s.useEffect(()=>{i(v(S))},[]),s.useEffect(()=>{o&&o.length>0&&q(o[0].VideoDetailsId)},[o]);const J=t=>{const a={asSchoolId:Number(f),asVideoId:Number(d),asIsDeleted:1,asUpdateDate:new Date().toISOString().split("T")[0],asId:Number(t),asUpdatedById:Number(y)};H({title:"Please Confirm",message:"Are you sure you want to delete this video?",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onCancel:()=>{L()},onConfirm:()=>{i(Se(a)),L()}})};s.useEffect(()=>{D!=""&&(z.success(D),i(re()),i(v(S)))},[D]);const K={asVideoId:Number(d),asVideoDetailId:0,asVideoName:n,asDescription:E,asVideoURL:R,asSchoolId:Number(f),asInsertedById:Number(y),asSubjectId:0},X={asVideoId:Number(d),asVideoDetailId:Number(Y),asVideoName:n,asDescription:E,asVideoURL:R,asSchoolId:Number(f),asInsertedById:Number(y),asSubjectId:0},P=t=>{const{name:a,value:p}=t.target;j({...l,[a]:p})};s.useEffect(()=>{l&&(M(l.url),Q(l.title))},[l]);const Z=t=>{const a=o.find(p=>p.VideoDetailsId===t);a&&(j({url:a.url,title:a.title}),k(t))},ee=()=>{V!==null&&(N(t=>t.map(a=>a.id===V?{...a,...l}:a)),j({url:"",title:""}),k(null)),i(W(X))},te=()=>{const t=o.length?Math.max(...o.map(a=>a.id))+1:1;N([...o,{id:t,url:l.url,title:l.title}]),j({url:"",title:""}),i(W(K))};s.useEffect(()=>{w!=""&&(z.success(w),i(de()),i(v(S)))},[w]);const se=t=>{const p=`https://www.youtube.com/embed/${t.includes("youtube.com")?new URL(t).searchParams.get("v"):t.split("/").pop()}`;O(p),U(!0),B(!1)},G=()=>{U(!1)},ae=()=>{B(t=>!t)};return e.jsxs(A,{px:2,children:[e.jsx(ne,{navLinks:[{title:"Photo/Video Gallery",path:"/RITeSchool/Teacher/PhotoVideoGalleryBaseScreen"},{title:"View Video Gallery",path:""}],rightActions:e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Add / Edit / Delete videos of selected gallery.",children:e.jsx(x,{sx:{color:"white",backgroundColor:T[500],"&:hover":{backgroundColor:T[600]}},children:e.jsx(ve,{})})}),V?e.jsx(e.Fragment,{children:e.jsx(u,{title:"Update",children:e.jsx(x,{sx:{color:"white",backgroundColor:g[500],"&:hover":{backgroundColor:g[600]}},onClick:ee,children:e.jsx(Ce,{})})})}):e.jsx(u,{title:"Save",children:e.jsx(x,{sx:{color:"white",backgroundColor:g[500],"&:hover":{backgroundColor:g[600]}},onClick:te,children:e.jsx(ce,{})})})]})}),e.jsxs(A,{sx:{backgroundColor:"white",p:2},children:[e.jsxs(h,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(h,{item:!0,xs:6,children:e.jsx(b,{fullWidth:!0,label:"Gallery Name",value:m,InputProps:{readOnly:!0}})}),e.jsx(h,{item:!0,xs:6,children:e.jsx(b,{fullWidth:!0,label:"URL Source",value:n,InputProps:{readOnly:!0}})}),e.jsx(h,{item:!0,xs:6,children:e.jsx(b,{fullWidth:!0,label:e.jsxs("span",{children:["URL ",e.jsx("span",{style:{color:"red"},children:"*"})]}),name:"url",value:l.url,onChange:P})}),e.jsx(h,{item:!0,xs:6,children:e.jsx(b,{fullWidth:!0,label:e.jsxs("span",{children:["Title ",e.jsx("span",{style:{color:"red"},children:"*"})]}),name:"title",value:l.title,onChange:P})}),e.jsx(h,{item:!0})]}),e.jsx(ue,{component:xe,sx:{mt:0},children:e.jsxs(he,{"aria-label":"simple table",sx:{border:t=>`1px solid ${t.palette.grey[300]}`,overflow:"hidden"},children:[e.jsx(pe,{children:e.jsxs(F,{sx:{background:t=>t.palette.secondary.main,color:t=>t.palette.common.white},children:[e.jsx(r,{sx:{textTransform:"capitalize",color:"white",py:1.5},children:"Comments"}),e.jsx(r,{align:"center",sx:{textTransform:"capitalize",color:"white",py:1.5},children:"View"}),e.jsx(r,{align:"center",sx:{textTransform:"capitalize",color:"white",py:1.5},children:"Edit"}),e.jsx(r,{align:"center",sx:{textTransform:"capitalize",color:"white",py:1.5},children:"Delete"})]})}),e.jsx(me,{children:o.map(t=>e.jsxs(F,{children:[e.jsx(r,{sx:{textTransform:"capitalize",py:1.5},children:t.title}),e.jsx(r,{sx:{textTransform:"capitalize",py:.5,textAlign:"center"},children:e.jsx(u,{title:"View",children:e.jsx(x,{onClick:()=>se(t.url),color:"primary",children:e.jsx(je,{})})})}),e.jsx(r,{sx:{textTransform:"capitalize",py:.5,textAlign:"center"},children:e.jsx(u,{title:"Edit",children:e.jsx(x,{color:"primary",onClick:()=>Z(t.VideoDetailsId),children:e.jsx(fe,{})})})}),e.jsx(r,{sx:{textTransform:"capitalize",py:.5,textAlign:"center"},children:e.jsx(u,{title:"Delete",children:e.jsx(x,{sx:{color:"primary","&:hover":{color:"red",backgroundColor:ge[100]}},onClick:()=>J(t.VideoDetailsId),children:e.jsx(be,{})})})})]},t.id))})]})})]}),e.jsxs(Ve,{open:_,onClose:G,fullWidth:!0,maxWidth:I?!1:"md",PaperProps:{sx:I?{width:"100%",height:"100%"}:{height:"auto",borderRadius:"15px"}},children:[e.jsx(Ie,{sx:{bgcolor:"#223354"},children:e.jsx(ye,{onClick:G,sx:{color:"white",borderRadius:"7px",position:"absolute",top:"5px",right:"8px",cursor:"pointer","&:hover":{color:"red"}}})}),e.jsxs(we,{sx:{display:"flex",flexDirection:"column",position:"relative",p:0},children:[e.jsx("iframe",{src:$,title:"Video Player",frameBorder:"1",allowFullScreen:!0,width:"100%",height:I?"100%":"500px",onDoubleClick:ae}),e.jsx(De,{align:"center",sx:{fontSize:14,color:T[600],mt:1},children:"Double-click the video to toggle fullscreen."})]})]})]})};export{Be as default};