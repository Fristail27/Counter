(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,function(t,e,a){t.exports={displayElement:"Input_displayElement__2_MLQ",displayText:"Input_displayText__2fQ1z",input:"Input_input__3xBnV",inputError:"Input_inputError__Vk4_J"}},,,,function(t,e,a){t.exports={btn:"button_btn__2n4tp"}},function(t,e,a){t.exports={red:"display_red__14ULh"}},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(1),s=a.n(c),r=a(5),l=a.n(r),u=(a(13),a(3)),i=(a(14),a(6)),o=a.n(i),d=function(t){return Object(n.jsx)("button",{onClick:function(){t.actionOnClick()},className:o.a.btn,disabled:t.disabledStatus,children:t.name})},j=a(7),b=a.n(j),p=function(t){var e="";return t.value===t.maxValue&&(e=b.a.red),Object(n.jsx)("div",{className:e,children:Object(n.jsx)("div",{children:t.value})})},x=a(2),m=a.n(x),O=function(t){var e=t.errorStatus?m.a.inputError:"";return Object(n.jsxs)("div",{className:m.a.displayElement,children:[Object(n.jsx)("span",{className:m.a.displayText,children:t.textValue}),Object(n.jsx)("input",{value:t.value,onChange:function(e){var a=Number.parseInt(e.currentTarget.value);t.onChange(a)},className:m.a.input+" "+e,type:"number"})]})};var v=function(){var t=Object(c.useState)(0),e=Object(u.a)(t,2),a=e[0],s=e[1],r=Object(c.useState)(localStorage.getItem("maxValue")?Number.parseInt(localStorage.getItem("maxValue")):0),l=Object(u.a)(r,2),i=l[0],o=l[1],j=Object(c.useState)(localStorage.getItem("startValue")?Number.parseInt(localStorage.getItem("startValue")):0),b=Object(u.a)(j,2),x=b[0],m=b[1],v=Object(c.useState)(!1),g=Object(u.a)(v,2),h=g[0],f=g[1],S=a>=i,_=a<=x,I=i<x||i<0,N=i<x||x<0,V=i<x||i<0||x<0;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"App-left",children:[Object(n.jsxs)("div",{className:"display",children:[Object(n.jsx)(O,{errorStatus:I,onChange:function(t){o(t),f(!1)},value:i,textValue:"Max value:"}),Object(n.jsx)(O,{errorStatus:N,onChange:function(t){m(t),f(!1)},value:x,textValue:"Start value:"})]}),Object(n.jsx)("div",{className:"buttons",children:Object(n.jsx)(d,{name:"Set",disabledStatus:V||h,actionOnClick:function(){s(x),f(!0),localStorage.setItem("maxValue",String(i)),localStorage.setItem("startValue",String(x))}})})]}),Object(n.jsxs)("div",{className:"App-right",children:[Object(n.jsx)("div",{className:"display",children:Object(n.jsx)(p,{maxValue:i,value:function(t){return I?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f":t}(a)})}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(d,{name:"Add",disabledStatus:S,actionOnClick:function(){a<i&&s(a+1)}}),Object(n.jsx)(d,{name:"Reset",disabledStatus:_,actionOnClick:function(){s(x)}})]})]})]})},g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),s(t),r(t)}))};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),g()}],[[15,1,2]]]);
//# sourceMappingURL=main.af1972db.chunk.js.map