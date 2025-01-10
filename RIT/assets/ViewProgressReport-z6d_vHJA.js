import{c5 as _,u as A,q as w,v as y,c as j,r as P,it as C,j as i,B as T,C as N,T as f,ag as O,ak as I,ai as R,aj as v}from"./index-CpZD2H93.js";var S={exports:{}};(function(x,h){(function(u,p){x.exports=p()})(window,function(){return function(u){var p={};function l(r){if(p[r])return p[r].exports;var o=p[r]={i:r,l:!1,exports:{}};return u[r].call(o.exports,o,o.exports,l),o.l=!0,o.exports}return l.m=u,l.c=p,l.d=function(r,o,c){l.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:c})},l.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},l.t=function(r,o){if(1&o&&(r=l(r)),8&o||4&o&&typeof r=="object"&&r&&r.__esModule)return r;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:r}),2&o&&typeof r!="string")for(var e in r)l.d(c,e,(function(a){return r[a]}).bind(null,e));return c},l.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return l.d(o,"a",o),o},l.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},l.p="",l(l.s=0)}({"./xmlParser.js":function(u,p){function l(r,o){for(var c=0;c<o.length;c++){var e=o[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}u.exports=function(){function r(){(function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,r)}var o,c;return o=r,(c=[{key:"_parseFromString",value:function(e){var a=this,t=(e=this._encodeCDATAValues(e)).replace(/\s{2,}/g," ").replace(/\\t\\n\\r/g,"").replace(/>/g,`>
`).replace(/\]\]/g,`]]
`),n=[];return t.split(`
`).map(function(s){if((s=s.trim())&&!(s.indexOf("?xml")>-1))if(s.indexOf("<")==0&&s.indexOf("CDATA")<0){var d=a._parseTag(s);n.push(d),s.match(/\/\s*>$/)&&n.push(a._parseTag("</"+d.name+">"))}else n[n.length-1].value+=" ".concat(a._parseValue(s))}),this._convertTagsArrayToTree(n)[0]}},{key:"_encodeCDATAValues",value:function(e){for(var a=new RegExp(/<!\[CDATA\[([^\]\]]+)\]\]/gi),t=a.exec(e);t;)t.length>1&&(e=e.replace(t[1],encodeURIComponent(t[1]))),t=a.exec(e);return e}},{key:"_getElementsByTagName",value:function(e){var a=[];return e!="*"&&this.name.toLowerCase()!==e.toLowerCase()||a.push(this),this.children.map(function(t){a=a.concat(t.getElementsByTagName(e))}),a}},{key:"_parseTag",value:function(e,a){var t=e.match(/([^\s]*)=('([^']*?)'|"([^"]*?)")|([\/?\w\-\:]+)/g),n={name:t.shift().replace(/\/\s*$/,""),attributes:{},children:[],value:"",getElementsByTagName:this._getElementsByTagName};return t.map(function(s){var d=s.split("=");if(!(d.length<2)){var b=d[0],g="";g=d.length===2?d[1]:(d=d.slice(1)).join("="),n.attributes[b]=typeof g=="string"?g.replace(/^"/g,"").replace(/^'/g,"").replace(/"$/g,"").replace(/'$/g,"").trim():g}}),n}},{key:"_parseValue",value:function(e){return e.indexOf("CDATA")<0?e.trim():e.substring(e.lastIndexOf("[")+1,e.indexOf("]"))}},{key:"_convertTagsArrayToTree",value:function(e){for(var a=[];e.length>0;){var t=e.shift();if(t.value.indexOf("</")>-1||t.name.match(/\/$/))t.name=t.name.replace(/\/$/,"").trim(),t.value=t.value.substring(0,t.value.indexOf("</")).trim(),a.push(t);else{if(t.name.indexOf("/")==0)break;a.push(t),t.children=this._convertTagsArrayToTree(e),t.value=decodeURIComponent(t.value.trim())}}return a}},{key:"_toString",value:function(e){var a=this,t=this._convertTagToText(e);return e.children.length>0&&(e.children.map(function(n){t+=a._toString(n)}),t+="</"+e.name+">"),t}},{key:"_convertTagToText",value:function(e){var a="<"+e.name;for(var t in e.attributes)a+=" "+t+'="'+e.attributes[t]+'"';return e.value.length>0?a+=">"+e.value:a+=">",e.children.length===0&&(a+="</"+e.name+">"),a}},{key:"parseFromString",value:function(e){return this._parseFromString(e)}},{key:"toString",value:function(e){return this._toString(e)}}])&&l(o.prototype,c),r}()},0:function(u,p,l){u.exports=l("./xmlParser.js")}})})})(S);var E=S.exports;const m=_(E),B=()=>{const x=A();let{TestId:h,StandardDivisionId:u}=w();h=y(h),u=y(u);const p=sessionStorage.getItem("AcademicYearId"),l=localStorage.getItem("localSchoolId"),r=j(n=>n.ViewProgressReport.ListMarksDetiles);j(n=>n.ViewProgressReport.ListStatusDetiles),P.useEffect(()=>{const n={asSchoolId:Number(l),asAcademicYrId:Number(p),asStdDivId:Number(u),asStartIndex:1,PageCount:1e3,asTestId:Number(h)};x(C(n))},[h,u]),r.length>0;const o=n=>{var s=new m().parseFromString(n);return s.children[0].children[1].value},c=n=>{var s=new m().parseFromString(n);return s.children[0].children[6].value},e=n=>{var s=new m().parseFromString(n),d=s.children[0].children[2].value,b=s.children[0].children[3].value;return{standardName:d,divisionName:b}},a=n=>{var s=new m().parseFromString(n);return s.children[0].children[4].value},t=n=>{var s=new m().parseFromString(n);return s.children[0].children[0].value};return i.jsxs(T,{sx:{px:2},children:[i.jsx(N,{navLinks:[{title:"Exam Result",path:"/RITeSchool/Teacher/ExamResultBase/"+u+"/"+h},{title:"View Progress Report",path:""}],rightActions:i.jsx(i.Fragment,{})}),r.map((n,s)=>i.jsx(T,{sx:{backgroundColor:"white",p:2,display:"flex",flexDirection:"column",gap:1},children:i.jsxs(T,{children:[i.jsx("hr",{}),i.jsx(f,{variant:"h3",textAlign:"center",color:"primary",mb:1,children:"Pawar Public Charitable Trust's PAWAR PUBLIC SCHOOL Progress Report"}),i.jsx("hr",{}),i.jsx(f,{variant:"h4",mb:1,children:"Student Details"}),i.jsx(O,{children:i.jsx(I,{children:i.jsxs(R,{sx:{bgcolor:"grey.200"},children:[i.jsx(v,{children:i.jsxs("b",{children:["Roll No:",c(n.Header)]})}),n&&n.Header&&i.jsx(v,{children:i.jsxs("b",{children:["Name: ",o(n.Header)]})}),n&&n.Header&&i.jsx(v,{children:i.jsxs("b",{children:["Class: ",e(n.Header).standardName," - ",e(n.Header).divisionName]})}),i.jsxs(v,{children:[i.jsxs("b",{children:["Year:",a(n.Header)]})," "]})]})})}),n&&n.Tests&&i.jsxs(f,{variant:"h4",my:1,children:["Subject Progress Details For ",i.jsx(f,{color:"primary",children:t(n.Tests)})]})]})},s))]})};export{B as default};