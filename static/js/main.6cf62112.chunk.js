(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e){e.exports={name:"nga-escape",version:"0.1.0",homepage:"http://tong.mu/nga-escape",repository:{type:"git",url:"https://github.com/dkwingsmt/nga-escape"},dependencies:{"@material-ui/core":"^3.1.2",keycode:"^2.2.0",lodash:"^4.17.11","prop-types":"^15.6.2",react:"^16.5.2","react-dom":"^16.5.2","react-scripts":"2.0.4","react-svg-inline":"^2.1.1",reactstrap:"^6.4.0","simple-icons":"^1.9.4"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test",eject:"react-scripts eject",lint:"eslint .",predeploy:"yarn run build",deploy:"gh-pages -d build"},eslintConfig:{extends:"react-app"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"],devDependencies:{"eslint-config-airbnb":"^17.1.0","eslint-plugin-import":"^2.14.0","eslint-plugin-jsx-a11y":"^6.1.1","eslint-plugin-react":"^7.11.1","gh-pages":"^2.0.1"}}},191:function(e,t,n){e.exports=n(322)},196:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(14),r=n.n(i),c=(n(196),n(104)),s=n(105),l=n(106),p=n(115),u=n(107),d=n(114),m=n(17),h=n(21),g=n.n(h),b=n(108),v=n.n(b),f=n(109),x=n.n(f),C=n(110),y=n.n(C),k=n(15),w=n(30),E=n.n(w),O=n(50),j=n.n(O),N=n(48),T=n.n(N),I=n(49),F=n.n(I),K=n(19),R=n.n(K),A=n(33),B=n.n(A),D=n(32),S=n.n(D),W=n(113),q=n(47),G=n.n(q),H=n(46),L=n.n(H),_=n(31),z=n.n(_),J=n(111);function P(e,t,n){var a=e.charCodeAt(0),o=t.charCodeAt(0),i=n.charCodeAt(0);return a>=o&&a<=i}var M=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={originalText:"",convertedText:"",options:{squareBracketR:!0}},n.convertedInput=o.a.createRef(),n.onClick=n.onClick.bind(Object(m.a)(Object(m.a)(n))),n.onChange=n.onChange.bind(Object(m.a)(Object(m.a)(n))),n.onKeyDown=n.onKeyDown.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){this.doConvert()}},{key:"onKeyDown",value:function(e){e.ctrlKey&&g.a.isEventKey(e,"enter")&&this.doConvert()}},{key:"onChange",value:function(e){this.setState({originalText:e.target.value})}},{key:"onOptionCheckboxChange",value:function(e){var t=this;return function(n,a){t.setState(function(t){var n=t.options;return{options:Object.assign({},n,Object(c.a)({},e,!!a))}})}}},{key:"doConvert",value:function(){var e=this;this.setState(function(e){return{convertedText:function(e,t){var n=t.squareBracketR,a=v()(e).map(function(e){return P(e,"\u2460","\u24ff")||P(e,"\u2190","\u2199")||P(e,"\u3008","\u3011")?"&#".concat(e.charCodeAt(0),";"):e}).join("");return n&&(a=a.replace("[R]","[[size=100%]R[/size]]")),a}(e.originalText,e.options)}},function(){if(e.convertedInput.current){var t=e.convertedInput.current;t.focus(),t.select()}})}},{key:"renderOptionCheckbox",value:function(e){var t=this.props.classes;return o.a.createElement(L.a,{control:o.a.createElement(G.a,{checked:this.state.options[e]||!1,onChange:this.onOptionCheckboxChange(e)}),label:"[R]",classes:{label:t.monospaceCheckboxLabel}})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.convertedText,a=t.originalText;return o.a.createElement("div",{className:"App"},o.a.createElement(T.a,{position:"static"},o.a.createElement(F.a,null,o.a.createElement(R.a,{variant:"title",color:"inherit",className:e.toolbarTitle},"NGA\u7279\u6b8a\u7b26\u53f7\u8f6c\u6362\u5668"),o.a.createElement(E.a,{"aria-label":"GitHub",href:J.repository.url,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(x.a,{svg:y.a.svg,className:e.icon})))),o.a.createElement(j.a,{container:!0,className:e.body},o.a.createElement(B.a,{inputProps:{className:e.textFieldInput},variant:"outlined",multiline:!0,className:e.textField,label:"\u8f6c\u6362\u524d",placeholder:"\u5728\u8fd9\u91cc\u8f93\u5165\u4f60\u60f3\u8981\u8f6c\u6362\u7684\u6587\u5b57\u2026\u2026",value:a,onChange:this.onChange,onKeyDown:this.onKeyDown}),o.a.createElement("div",{className:e.mid},o.a.createElement(S.a,{component:"fieldset",className:e.optionsContainer},o.a.createElement(z.a,{component:"legend"},"\u7279\u522b\u8f6c\u6362\u9879"),this.renderOptionCheckbox("squareBracketR")),o.a.createElement("div",{className:e.submitContainer},o.a.createElement(W.a,{variant:"contained",color:"primary",onClick:this.onClick,classes:{}},"\u8f6c\u6362\uff08Ctrl-\u56de\u8f66\uff09"))),o.a.createElement(B.a,{inputProps:{ref:this.convertedInput,className:e.textFieldInput},readOnly:!0,variant:"outlined",multiline:!0,className:e.textField,label:"\u8f6c\u6362\u540e",placeholder:"\u8fd9\u91cc\u5c06\u663e\u793a\u8f6c\u6362\u540e\u7684\u6587\u5b57",value:n}),o.a.createElement("div",{className:e.description},o.a.createElement(R.a,{variant:"title",gutterBottom:!0},"\u8bf4\u660e"),o.a.createElement(R.a,null,"\u672c\u5de5\u5177\u7528\u4e8e\u5c06 bbs.nga.com \u4f1a\u81ea\u52a8\u9690\u85cf\u7684\u7279\u6b8a\u7b26\u53f7\u8f6c\u6362\u4e3a HTML \u7f16\u7801\u7684\u5f62\u5f0f\u3002"),o.a.createElement(R.a,null,"\u672c\u5de5\u5177\u53ea\u4f1a\u8f6c\u6362\u9009\u5b9a\u8303\u56f4\u7684\u5b57\u7b26\u3002\u5982\u60f3\u65b0\u589e\u8303\u56f4\uff0c\u8bf7\u81f3",o.a.createElement("a",{href:"https://github.com/dkwingsmt/nga-escape/issues",target:"_blank",rel:"noopener noreferrer"},"\u8fd9\u91cc"),"\u63d0\u51fa\u3002"))))}}]),t}(a.Component),$=Object(k.withStyles)(function(){return{textField:{width:"100%"},textFieldInput:{maxHeight:"20em"},toolbarTitle:{flexGrow:1},icon:{height:24,width:24,fill:"white"},body:{maxWidth:768,margin:"auto",marginTop:20},mid:{display:"flex",margin:"10px 20px",width:"100%"},optionsContainer:{flex:1},submitContainer:{flex:"0 0 auto"},monospaceCheckboxLabel:{fontFamily:"monospace"},description:{maxWidth:512,margin:"auto",marginTop:30,padding:20,border:"1px solid #eee"}}})(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[191,2,1]]]);
//# sourceMappingURL=main.6cf62112.chunk.js.map