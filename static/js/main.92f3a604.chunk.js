(this["webpackJsonpmodel-viewer-dimensions"]=this["webpackJsonpmodel-viewer-dimensions"]||[]).push([[0],{17:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),s=t(3),c=t.n(s),r=(t(8),t(9),t(10),t(1));var d=function(){const e=Object(o.useRef)(null),[n,t]=Object(o.useState)(""),[i,s]=Object(o.useState)(""),c=Object(r.jsx)("model-viewer",{src:n,id:"viewer",ref:e,cameraControls:!0});return Object(o.useEffect)((()=>{if(n){const n=e.current,t=()=>{const{x:e,y:t,z:o}=n.getDimensions(),i="x: ".concat(e.toFixed(2),"m, y: ").concat(t.toFixed(2),"m, z: ").concat(o.toFixed(2),"m");s(i),console.timeEnd("getDimensions")};return n.addEventListener("load",t),()=>{n.removeEventListener("load",t)}}}),[n]),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{id:"drop_zone",onDrop:function(e){console.time("getDimensions"),e.preventDefault();const n=e.dataTransfer.files[0],o=URL.createObjectURL(n);t(o)},onDragOver:function(e){e.preventDefault()},children:[Object(r.jsx)("p",{children:"Drop a GLB file in this Drop Zone for dimensions..."}),i,n?c:null]})})};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root"))},8:function(e,n,t){},9:function(e,n,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.92f3a604.chunk.js.map