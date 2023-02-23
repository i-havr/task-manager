"use strict";(self.webpackChunktask_manager=self.webpackChunktask_manager||[]).push([[854],{7854:function(n,r,e){e.r(r),e.d(r,{default:function(){return q}});var t,i,o,a,s,d,u,c=e(2791),l=e(9434),p=e(6907),x=e(4195),f=e(168),g=e(6444),b=g.ZP.div(t||(t=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px;\n  border: 1px solid #2a2a2a;\n  border-radius: 4px;\n"]))),h=g.ZP.p(i||(i=(0,f.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),m=g.ZP.button(o||(o=(0,f.Z)(["\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n  margin-left: auto;\n  border-radius: 4px;\n  padding: 8px 12px;\n  background-color: #3f51b5;\n  color: #fff;\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n\n  &:active {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),v=e(3329),k=function(n){var r=n.id,e=n.text,t=(0,l.I0)();return(0,v.jsxs)(b,{children:[(0,v.jsx)(h,{children:e}),(0,v.jsx)(m,{type:"button",onClick:function(){return t((0,x._5)(r))},children:"Delete"})]})},j=function(n){return n.tasks.loading},Z=function(n){return n.tasks.items},P=g.ZP.ul(a||(a=(0,f.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n"]))),w=function(){var n=(0,l.v9)(Z);return(0,v.jsx)(P,{children:n.map((function(n){var r=n.id,e=n.text;return(0,v.jsx)("li",{children:(0,v.jsx)(k,{id:r,text:e})},r)}))})},y=g.ZP.form(s||(s=(0,f.Z)(["\n  display: flex;\n  width: 100%;\n  gap: 4px;\n  margin-bottom: 12px;\n"]))),I=g.ZP.input(d||(d=(0,f.Z)(["\n  flex-grow: 1;\n  padding: 8px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  font: inherit;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  resize: none;\n"]))),C=g.ZP.button(u||(u=(0,f.Z)(["\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n  padding: 0 8px;\n  border-radius: 4px;\n  background-color: #3f51b5;\n  color: #fff;\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n\n  &:active {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),_=function(){var n=(0,l.I0)();return(0,v.jsxs)(y,{onSubmit:function(r){r.preventDefault();var e=r.currentTarget,t=e.elements.text.value;if(""!==t)return n((0,x.gI)(t)),void e.reset();alert("Task cannot be empty. Enter some text!")},children:[(0,v.jsx)(I,{name:"text"}),(0,v.jsx)(C,{children:"Add task"})]})};function q(){var n=(0,l.I0)(),r=(0,l.v9)(j);return(0,c.useEffect)((function(){n((0,x.Jv)())}),[n]),(0,v.jsxs)(p.B6,{children:[(0,v.jsx)(p.ql,{children:(0,v.jsx)("title",{children:"Your tasks"})}),(0,v.jsx)(_,{}),(0,v.jsx)("div",{children:r&&"Request in progress..."}),(0,v.jsx)(w,{})]})}}}]);
//# sourceMappingURL=854.f506f8d2.chunk.js.map