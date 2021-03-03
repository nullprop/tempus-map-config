(this["webpackJsonptempus-map-config"]=this["webpackJsonptempus-map-config"]||[]).push([[0],{52:function(e,t,n){},86:function(e,t,n){},89:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(42),c=n.n(r),o=(n(52),n(43)),i=n(44),l=n(47),u=n(45),d=n(6),m=n(46),p=n(8),h=n.n(p),j=n(26),b=n(7).graphql,f=n(53).schema;function x(){return(x=Object(j.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return a=e.sent,e.abrupt("return",a.filter((function(e){return e.tiers[n]===t})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return y.apply(this,arguments)}function y(){return(y=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"\n    {\n      maps\n      {\n        name\n        tiers {\n          soldier\n          demoman\n        }\n      }\n    }\n  ",e.next=3,b(f,"\n    {\n      maps\n      {\n        name\n        tiers {\n          soldier\n          demoman\n        }\n      }\n    }\n  ");case 3:if(!(t=e.sent).errors){e.next=6;break}throw t.errors[0];case 6:return e.abrupt("return",t.data.maps);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(86);var g=n(2);function v(e){return e.maps.length<=0?null:Object(g.jsx)("pre",{className:e.className,children:Object(g.jsx)("p",{className:"config-display",children:Object(g.jsx)("code",{children:C(e.maps,e.keybind,e.tier,e.playerClass,e.date,e.useRcon)})})})}function C(e,t,n,a,s,r){var c="";c+="// Tempus ".concat(a," tier ").concat(n," speedrun config\n"),c+="// Created ".concat(s,"\n"),c+="// https://laurirasanen.github.io/tempus-map-config\n",c+="// Starting map: ".concat(e[0].name,"\n\n"),c+="bind ".concat(t," tmps-map-1\n\n");for(var o=0;o<e.length;o++){var i=o+1;o>=e.length-1&&(i=0),c+="alias tmps-map-".concat(o,' "bind ').concat(t," tmps-map-").concat(i,";").concat(r?" rcon":""," changelevel ").concat(e[o].name,'"\n')}return c}n(88),n(89);var k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onSubmit=function(){a.state.isLoading||a.setState({isLoading:!0},(function(){(function(e,t){return x.apply(this,arguments)})(a.state.form_tier,a.state.form_playerClass).then((function(e){a.setState((function(t){return{maps:e,playerClass:t.form_playerClass,keybind:t.form_keybind,tier:t.form_tier,useRcon:t.form_useRcon,date:new Date(Date.now()).toISOString(),isLoading:!1}}))}))}))},a.state={isLoading:!1,maps:[],playerClass:"soldier",keybind:"mouse5",tier:1,useRcon:!1,date:"",form_playerClass:"soldier",form_keybind:"mouse5",form_tier:1,form_useRcon:!1},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsxs)(d.a,{children:[Object(g.jsxs)(d.a.Group,{controlid:"formClass",children:[Object(g.jsx)(d.a.Label,{children:"Class"}),Object(g.jsxs)(d.a.Control,{as:"select",value:this.state.form_playerClass,onChange:function(t){e.setState({form_playerClass:t.target.value})},children:[Object(g.jsx)("option",{children:"soldier"}),Object(g.jsx)("option",{children:"demoman"})]})]}),Object(g.jsxs)(d.a.Group,{controlid:"formTier",children:[Object(g.jsx)(d.a.Label,{children:"Tier"}),Object(g.jsxs)(d.a.Control,{as:"select",value:this.state.form_tier,onChange:function(t){e.setState({form_tier:Number(t.target.value)})},children:[Object(g.jsx)("option",{children:"1"}),Object(g.jsx)("option",{children:"2"}),Object(g.jsx)("option",{children:"3"}),Object(g.jsx)("option",{children:"4"}),Object(g.jsx)("option",{children:"5"}),Object(g.jsx)("option",{children:"6"})]})]}),Object(g.jsxs)(d.a.Group,{controlid:"formKeybind",children:[Object(g.jsx)(d.a.Label,{children:"Keybind"}),Object(g.jsx)(d.a.Control,{type:"text",value:this.state.form_keybind,onChange:function(t){e.setState({form_keybind:t.target.value})}}),Object(g.jsx)(d.a.Text,{className:"text-muted",children:"The keybind you want to use for changing to the next map"})]}),Object(g.jsxs)(d.a.Group,{controlid:"formRcon",children:[Object(g.jsx)(d.a.Label,{children:"Rcon"}),Object(g.jsx)(d.a.Control,{type:"checkbox",label:"Use rcon",value:this.state.form_useRcon,onChange:function(t){e.setState({form_useRcon:t.target.value})}}),Object(g.jsx)(d.a.Text,{className:"text-muted",children:"Should commands execute using rcon?"})]}),Object(g.jsx)(m.a,{variant:this.state.isLoading?"secondary":"primary",size:"lg",onClick:this.onSubmit,children:"Go"})]}),Object(g.jsx)(v,{className:"mt-5",maps:this.state.maps,keybind:this.state.keybind,tier:this.state.tier,playerClass:this.state.playerClass,date:this.state.date,useRcon:this.state.useRcon})]})})}}]),n}(s.a.Component);c.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.56857641.chunk.js.map