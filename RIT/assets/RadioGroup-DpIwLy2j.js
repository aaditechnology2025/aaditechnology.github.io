import{b$ as v,c0 as y,r as t,aM as b,c9 as j,ca as w,cb as M,j as f,aN as N,c3 as P,c4 as U}from"./index-CpZD2H93.js";import{a as V}from"./Radio-IVxzoZco.js";import{F}from"./FormGroup-C5-m8U5s.js";function S(s){return v("MuiRadioGroup",s)}y("MuiRadioGroup",["root","row","error"]);const _=["actions","children","className","defaultValue","name","onChange","value"],k=s=>{const{classes:o,row:a,error:r}=s;return U({root:["root",a&&"row",r&&"error"]},S,o)},q=t.forwardRef(function(o,a){const{actions:r,children:l,className:p,defaultValue:m,name:R,onChange:n,value:x}=o,h=b(o,_),u=t.useRef(null),C=k(o),[c,i]=j({controlled:x,default:m,name:"RadioGroup"});t.useImperativeHandle(r,()=>({focus:()=>{let e=u.current.querySelector("input:not(:disabled):checked");e||(e=u.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);const g=w(a,u),d=M(R),G=t.useMemo(()=>({name:d,onChange(e){i(e.target.value),n&&n(e,e.target.value)},value:c}),[d,n,i,c]);return f.jsx(V.Provider,{value:G,children:f.jsx(F,N({role:"radiogroup",ref:g,className:P(C.root,p)},h,{children:l}))})}),H=q;export{H as R};