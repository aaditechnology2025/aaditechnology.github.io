import{P as r,r as m,ad as L,h as N,S as k,q as I,j as e,B as d,bv as T,G as t,y as b,ay as j,T as c}from"./index-CpZD2H93.js";import{C as v}from"./CheckboxImg-BrcA302U.js";var p,u;D.propTypes={data:r.any,handleChange:r.any,check:r.any,Attachments:r.any,FromRoute:r.string,pointerEvent:(p=r)==null?void 0:p.string,Id:(u=r)==null?void 0:u.any};function D({data:s,handleChange:y,check:i,Attachments:E,FromRoute:g,pointerEvent:f,Id:P}){const[o,l]=m.useState(!1),C=n=>{l(n.checked),y(n)},x=L(),S=x.pathname.split("/")[2],h=N(),a=k();return I(),m.useEffect(()=>{i||l(!1)},[i]),e.jsx(e.Fragment,{children:e.jsx(d,{sx:{px:2},children:e.jsx(T,{className:a.ListStyle,sx:{background:o?`${h.colors.gradients.selectedlistColor}`:`${h.colors.gradients.listColor}`},children:e.jsx(d,{children:e.jsxs(t,{container:!0,children:[e.jsx(t,{item:!0,xs:2,md:1,sx:{mx:"auto"},children:e.jsx(v,{checked:S=="SMSCenter"?i:o,onChange:n=>C(n),value:s.Id,name:s.Name})}),e.jsx(t,{item:!0,xs:10,children:e.jsxs(b,{to:`/${x.pathname.split("/")[1]}/MessageCenter/viewMSg/`+j(s.DetailsId)+j(g),color:"primary",style:{textDecoration:"none",pointerEvents:f},children:[e.jsx(t,{item:!0,xs:12,children:e.jsxs(c,{className:a.Listfont1,children:[s.Subject,s.Name]})}),e.jsxs(t,{container:!0,xs:12,children:[e.jsx(t,{item:!0,xs:6,children:e.jsx(c,{children:s.UserName})}),e.jsx(t,{xs:6,children:e.jsxs(c,{className:a.Listfont2,sx:{display:"flex",flexDirection:"row-reverse"},children:[Date," ",s.Time," ",s.Date]})})]})]},s.Id)}),e.jsx(t,{container:!0,children:e.jsx(t,{item:!0,xs:9})})]})})})})})}export{D as L};