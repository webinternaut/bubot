(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[803],{17052:function(d){d.exports={main:"main___2kx2N",password:"password___2JDrd",getCaptcha:"getCaptcha___1oboe",submit:"submit___34wM2",login:"login___1qBuj",success:"success___3hl98",warning:"warning___2i2r2",error:"error___3JfQo","progress-pass":"progress-pass___BM1Xu",progress:"progress___2s68u"}},90434:function(d,n,s){"use strict";s.r(n),s.d(n,{default:function(){return Y}});var u=s(13062),f=s(71230),Z=s(57663),A=s(71577),gs=s(89032),B=s(15746),ms=s(20136),U=s(55241),hs=s(34669),W=s(54458),fs=s(34792),z=s(48086),g=s(2824),xs=s(47673),c=s(4107),js=s(43358),D=s(34041),Fs=s(9715),x=s(86835),m=s(67294),j=s(25377),K=s(73727),M=s(39428),L=s(3182);function V(E){return F.apply(this,arguments)}function F(){return F=(0,L.Z)((0,M.Z)().mark(function E(C){return(0,M.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,j.WY)("/api/register",{method:"POST",data:C}));case 1:case"end":return l.stop()}},E)})),F.apply(this,arguments)}var G=s(17052),a=s.n(G),e=s(85893),v=x.Z.Item,S=D.Z.Option,$=c.Z.Group,J={ok:(0,e.jsx)("div",{className:a().success,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u5F3A"})}),pass:(0,e.jsx)("div",{className:a().warning,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u4E2D"})}),poor:(0,e.jsx)("div",{className:a().error,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u592A\u77ED"})})},Q={ok:"success",pass:"normal",poor:"exception"},X=function(){var C=(0,m.useState)(0),P=(0,g.Z)(C,2),l=P[0],O=P[1],H=(0,m.useState)(!1),I=(0,g.Z)(H,2),y=I[0],R=I[1],k=(0,m.useState)("86"),T=(0,g.Z)(k,2),b=T[0],q=T[1],ss=(0,m.useState)(!1),N=(0,g.Z)(ss,2),es=N[0],rs=N[1],ts=!1,h,as=x.Z.useForm(),ns=(0,g.Z)(as,1),i=ns[0];(0,m.useEffect)(function(){return function(){clearInterval(h)}},[h]);var us=function(){var r=59;O(r),h=window.setInterval(function(){r-=1,O(r),r===0&&clearInterval(h)},1e3)},_=function(){var r=i.getFieldValue("password");return r&&r.length>9?"ok":r&&r.length>5?"pass":"poor"},w=(0,j.QT)(V,{manual:!0,onSuccess:function(r,t){r.status==="ok"&&(z.ZP.success("\u6CE8\u518C\u6210\u529F\uFF01"),j.m8.push({pathname:"/user/register-result",state:{account:t.email}}))}}),ls=w.loading,os=w.run,is=function(r){os(r)},ds=function(r,t){var p=Promise;return t&&t!==i.getFieldValue("password")?p.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u5339\u914D!"):p.resolve()},cs=function(r,t){var p=Promise;return t?(y||R(!!t),rs(!es),t.length<6?p.reject(""):(t&&ts&&i.validateFields(["confirm"]),p.resolve())):(R(!!t),p.reject("\u8BF7\u8F93\u5165\u5BC6\u7801!"))},vs=function(r){q(r)},ps=function(){var r=i.getFieldValue("password"),t=_();return r&&r.length?(0,e.jsx)("div",{className:a()["progress-".concat(t)],children:(0,e.jsx)(W.Z,{status:Q[t],className:a().progress,strokeWidth:6,percent:r.length*10>100?100:r.length*10,showInfo:!1})}):null};return(0,e.jsxs)("div",{className:a().main,children:[(0,e.jsx)("h3",{children:"\u6CE8\u518C"}),(0,e.jsxs)(x.Z,{form:i,name:"UserRegister",onFinish:is,children:[(0,e.jsx)(v,{name:"mail",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740!"},{type:"email",message:"\u90AE\u7BB1\u5730\u5740\u683C\u5F0F\u9519\u8BEF!"}],children:(0,e.jsx)(c.Z,{size:"large",placeholder:"\u90AE\u7BB1"})}),(0,e.jsx)(U.Z,{getPopupContainer:function(r){return r&&r.parentNode?r.parentNode:r},content:y&&(0,e.jsxs)("div",{style:{padding:"4px 0"},children:[J[_()],ps(),(0,e.jsx)("div",{style:{marginTop:10},children:(0,e.jsx)("span",{children:"\u8BF7\u81F3\u5C11\u8F93\u5165 6 \u4E2A\u5B57\u7B26\u3002\u8BF7\u4E0D\u8981\u4F7F\u7528\u5BB9\u6613\u88AB\u731C\u5230\u7684\u5BC6\u7801\u3002"})})]}),overlayStyle:{width:240},placement:"right",visible:y,children:(0,e.jsx)(v,{name:"password",className:i.getFieldValue("password")&&i.getFieldValue("password").length>0&&a().password,rules:[{validator:cs}],children:(0,e.jsx)(c.Z,{size:"large",type:"password",placeholder:"\u81F3\u5C116\u4F4D\u5BC6\u7801\uFF0C\u533A\u5206\u5927\u5C0F\u5199"})})}),(0,e.jsx)(v,{name:"confirm",rules:[{required:!0,message:"\u786E\u8BA4\u5BC6\u7801"},{validator:ds}],children:(0,e.jsx)(c.Z,{size:"large",type:"password",placeholder:"\u786E\u8BA4\u5BC6\u7801"})}),(0,e.jsxs)($,{compact:!0,children:[(0,e.jsxs)(D.Z,{size:"large",value:b,onChange:vs,style:{width:"20%"},children:[(0,e.jsx)(S,{value:"86",children:"+86"}),(0,e.jsx)(S,{value:"87",children:"+87"})]}),(0,e.jsx)(v,{style:{width:"80%"},name:"mobile",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7!"},{pattern:/^\d{11}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF!"}],children:(0,e.jsx)(c.Z,{size:"large",placeholder:"\u624B\u673A\u53F7"})})]}),(0,e.jsxs)(f.Z,{gutter:8,children:[(0,e.jsx)(B.Z,{span:16,children:(0,e.jsx)(v,{name:"captcha",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801!"}],children:(0,e.jsx)(c.Z,{size:"large",placeholder:"\u9A8C\u8BC1\u7801"})})}),(0,e.jsx)(B.Z,{span:8,children:(0,e.jsx)(A.Z,{size:"large",disabled:!!l,className:a().getCaptcha,onClick:us,children:l?"".concat(l," s"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"})})]}),(0,e.jsxs)(v,{children:[(0,e.jsx)(A.Z,{size:"large",loading:ls,className:a().submit,type:"primary",htmlType:"submit",children:(0,e.jsx)("span",{children:"\u6CE8\u518C"})}),(0,e.jsx)(K.rU,{className:a().login,to:"/user/login",children:(0,e.jsx)("span",{children:"\u4F7F\u7528\u5DF2\u6709\u8D26\u6237\u767B\u5F55"})})]})]})]})},Y=X},15746:function(d,n,s){"use strict";var u=s(21584);n.Z=u.Z},89032:function(d,n,s){"use strict";var u=s(38663),f=s.n(u),Z=s(6999)},71230:function(d,n,s){"use strict";var u=s(92820);n.Z=u.Z},13062:function(d,n,s){"use strict";var u=s(38663),f=s.n(u),Z=s(6999)}}]);
