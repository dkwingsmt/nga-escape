(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,t,n){e.exports=n(311)},191:function(e,t,n){},311:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(14),r=n.n(i),c=(n(191),n(100)),l=n(101),s=n(107),u=n(102),d=n(106),h=n(16),v=n(20),m=n.n(v),p=n(103),f=n.n(p),b=n(15),y=n(43),C=n.n(y),w=n(40),g=n.n(w),x=n(41),j=n.n(x),k=n(42),E=n.n(k),O=n(29),T=n.n(O),K=n(28),A=n.n(K),I=n(105);function N(e,t,n){var a=e.charCodeAt(0),o=t.charCodeAt(0),i=n.charCodeAt(0);return a>=o&&a<=i}var D=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={originalText:"",convertedText:""},n.convertedInput=o.a.createRef(),n.onClick=n.onClick.bind(Object(h.a)(Object(h.a)(n))),n.onChange=n.onChange.bind(Object(h.a)(Object(h.a)(n))),n.onKeyDown=n.onKeyDown.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){this.doConvert()}},{key:"onKeyDown",value:function(e){e.ctrlKey&&m.a.isEventKey(e,"enter")&&this.doConvert()}},{key:"onChange",value:function(e){this.setState({originalText:e.target.value})}},{key:"doConvert",value:function(){var e=this;this.setState(function(e){var t,n=e.originalText;return{convertedText:(t=n,f()(t).map(function(e){return N(e,"\u2460","\u24ff")||N(e,"\u2190","\u2199")?"&#".concat(e.charCodeAt(0),";"):e}).join(""))}},function(){if(e.convertedInput.current){var t=e.convertedInput.current;t.focus(),t.select()}})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.convertedText,a=t.originalText;return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,{position:"static"},o.a.createElement(j.a,null,o.a.createElement(E.a,{variant:"title",color:"inherit"},"NGA Escape"))),o.a.createElement(C.a,{container:!0,className:e.body},o.a.createElement(A.a,{fullWidth:!0},o.a.createElement(T.a,{multiline:!0,className:e.textField,label:"\u8f6c\u6362\u524d",placeholder:"\u5728\u8fd9\u91cc\u8f93\u5165\u4f60\u60f3\u8981\u8f6c\u6362\u7684\u6587\u5b57\u2026\u2026",value:a,onChange:this.onChange,onKeyDown:this.onKeyDown}),o.a.createElement("div",{className:e.buttons},o.a.createElement(I.a,{variant:"contained",color:"primary",onClick:this.onClick},"\u8f6c\u6362\uff08Ctrl-\u56de\u8f66\uff09")),o.a.createElement(T.a,{inputProps:{ref:this.convertedInput},readOnly:!0,multiline:!0,className:e.textField,label:"\u8f6c\u6362\u540e",placeholder:"\u8fd9\u91cc\u5c06\u663e\u793a\u8f6c\u6362\u540e\u7684\u6587\u5b57",value:n}))))}}]),t}(a.Component),F=Object(b.withStyles)(function(){return{textField:{width:"100%"},textFieldInput:{minHeight:"5em"},body:{maxWidth:768,margin:"auto",marginTop:20},buttons:{display:"flex",justifyContent:"flex-end",margin:"10px 20px"}}})(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[186,2,1]]]);
//# sourceMappingURL=main.d7b81bdb.chunk.js.map