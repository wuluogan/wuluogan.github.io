import{I as e,c as r,a as o,b as l,d as n,e as s,i as a,f as t,g as i,u as d,h as c,j as u,p as v,t as p,k as m,l as h,m as g,n as b,o as f,q as x,r as y,_ as k,s as C,v as w,w as _,x as z,y as $,z as L,A as R,B as M,C as T,D as H,E as P,F as D,G as q,H as B,J as j,N as O,T as A,K as E,L as I,M as S,O as U,P as N,Q as V,R as W,S as F,U as G,V as J}from"./index-5b7c55a9.js";const K=e("fire",!0,(function(e){return r("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[r("path",{d:"M24 44C32.2347 44 38.9998 37.4742 38.9998 29.0981C38.9998 27.0418 38.8953 24.8375 37.7555 21.4116C36.6157 17.9858 36.3861 17.5436 35.1809 15.4279C34.666 19.7454 31.911 21.5448 31.2111 22.0826C31.2111 21.5231 29.5445 15.3359 27.0176 11.6339C24.537 8 21.1634 5.61592 19.1853 4C19.1853 7.06977 18.3219 11.6339 17.0854 13.9594C15.8489 16.2849 15.6167 16.3696 14.0722 18.1002C12.5278 19.8308 11.8189 20.3653 10.5274 22.4651C9.23596 24.565 9 27.3618 9 29.4181C9 37.7942 15.7653 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null)])})),Q=o([l("list","\n --n-merged-border-color: var(--n-border-color);\n --n-merged-color: var(--n-color);\n --n-merged-color-hover: var(--n-color-hover);\n margin: 0;\n font-size: var(--n-font-size);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n padding: 0;\n list-style-type: none;\n color: var(--n-text-color);\n background-color: var(--n-merged-color);\n ",[n("show-divider",[l("list-item",[o("&:not(:last-child)",[s("divider","\n background-color: var(--n-merged-border-color);\n ")])])]),n("clickable",[l("list-item","\n cursor: pointer;\n ")]),n("bordered","\n border: 1px solid var(--n-merged-border-color);\n border-radius: var(--n-border-radius);\n "),n("hoverable",[l("list-item","\n border-radius: var(--n-border-radius);\n ",[o("&:hover","\n background-color: var(--n-merged-color-hover);\n ",[s("divider","\n background-color: transparent;\n ")])])]),n("bordered, hoverable",[l("list-item","\n padding: 12px 20px;\n "),s("header, footer","\n padding: 12px 20px;\n ")]),s("header, footer","\n padding: 12px 0;\n box-sizing: border-box;\n transition: border-color .3s var(--n-bezier);\n ",[o("&:not(:last-child)","\n border-bottom: 1px solid var(--n-merged-border-color);\n ")]),l("list-item","\n position: relative;\n padding: 12px 0; \n box-sizing: border-box;\n display: flex;\n flex-wrap: nowrap;\n align-items: center;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[s("prefix","\n margin-right: 20px;\n flex: 0;\n "),s("suffix","\n margin-left: 20px;\n flex: 0;\n "),s("main","\n flex: 1;\n "),s("divider","\n height: 1px;\n position: absolute;\n bottom: 0;\n left: 0;\n right: 0;\n background-color: transparent;\n transition: background-color .3s var(--n-bezier);\n pointer-events: none;\n ")])]),a(l("list","\n --n-merged-color-hover: var(--n-color-hover-modal);\n --n-merged-color: var(--n-color-modal);\n --n-merged-border-color: var(--n-border-color-modal);\n ")),t(l("list","\n --n-merged-color-hover: var(--n-color-hover-popover);\n --n-merged-color: var(--n-color-popover);\n --n-merged-border-color: var(--n-border-color-popover);\n "))]),Z=Object.assign(Object.assign({},u.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),X=b("n-list"),Y=i({name:"List",props:Z,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:l}=d(e),n=c("List",l,r),s=u("List","-list",Q,f,e,r);v(X,{showDividerRef:p(e,"showDivider"),mergedClsPrefixRef:r});const a=m((()=>{const{common:{cubicBezierEaseInOut:e},self:{fontSize:r,textColor:o,color:l,colorModal:n,colorPopover:a,borderColor:t,borderColorModal:i,borderColorPopover:d,borderRadius:c,colorHover:u,colorHoverModal:v,colorHoverPopover:p}}=s.value;return{"--n-font-size":r,"--n-bezier":e,"--n-text-color":o,"--n-color":l,"--n-border-radius":c,"--n-border-color":t,"--n-border-color-modal":i,"--n-border-color-popover":d,"--n-color-modal":n,"--n-color-popover":a,"--n-color-hover":u,"--n-color-hover-modal":v,"--n-color-hover-popover":p}})),t=o?h("list",void 0,a,e):void 0;return{mergedClsPrefix:r,rtlEnabled:n,cssVars:o?void 0:a,themeClass:null==t?void 0:t.themeClass,onRender:null==t?void 0:t.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:o,onRender:l}=this;return null==l||l(),g("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},r.header?g("div",{class:`${o}-list__header`},r.header()):null,null===(e=r.default)||void 0===e?void 0:e.call(r),r.footer?g("div",{class:`${o}-list__footer`},r.footer()):null)}}),ee=i({name:"ListItem",setup(){const e=x(X,null);return e||y("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return g("li",{class:`${r}-list-item`},e.prefix?g("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?g("div",{class:`${r}-list-item__main`},e):null,e.suffix?g("div",{class:`${r}-list-item__suffix`},e.suffix()):null,this.showDivider&&g("div",{class:`${r}-list-item__divider`}))}}),re={class:"list"},oe=["src"],le={key:0,class:"loading",style:{height:"60px"}},ne={key:1,class:"header"},se={class:"logo"},ae=["src"],te={class:"name"},ie={class:"data"},de={key:0,class:"loading",style:{"flex-direction":"column"}},ce={key:1,class:"all"},ue={class:"text"},ve={class:"message"},pe={key:0,class:"hot"},me=k({__name:"list",setup(e){const o=C(),l=w(),n=_(null),s=_(o.currentRoute.value.query.type||l.newsArr[0].name),a=_(o.currentRoute.value.query.page?Number(o.currentRoute.value.query.page):1),t=_(null),i=async(e,r=!1)=>{t.value=null;const o=l.newsArr.find((r=>r.name==e));q(o.name,r,o.params).then((e=>{200===e.code?t.value=e:$message.error(e.message)}))};return z((()=>l.timeData),(()=>{t.value&&(n.value=W(t.value.updateTime))})),z((()=>a.value),(e=>{var r;o.push({path:"/list",query:{type:s.value,page:e}}),null==(r=document.querySelector(".n-back-top"))||r.click()})),z((()=>o.currentRoute.value),(e=>{"list"===e.name&&(s.value=e.query.type,a.value=Number(e.query.page),i(s.value))})),$((()=>{i(s.value)})),(e,i)=>{const d=L("n-skeleton"),c=L("n-pagination");return R(),M("div",re,[T(l).newsArr[0]?(R(),H(T(O),{key:0,class:"type"},{default:P((()=>[(R(!0),M(B,null,j(T(l).newsArr.filter((e=>e.show)),(e=>(R(),H(T(F),{round:"",size:"large",class:"tag",key:e,type:e.name===T(s)?"primary":"default",onClick:r=>{return l=e.name,void o.push({path:"/list",query:{type:l,page:1}});var l}},{avatar:P((()=>[E("img",{src:`/img/hot/logo/${e.name}.png`,alt:"logo",class:"logo"},null,8,oe)])),default:P((()=>[S(U(e.label)+" ",1)])),_:2},1032,["type","onClick"])))),128))])),_:1})):D("",!0),r(T(V),{class:"card"},{header:P((()=>[r(A,{name:"fade",mode:"out-in"},{default:P((()=>[T(t)?(R(),M("div",ne,[E("div",se,[E("img",{src:`/img/hot/logo/${T(s)}.png`,alt:"logo"},null,8,ae)]),E("div",te,[r(T(I),{class:"title"},{default:P((()=>[S(U(T(t).title),1)])),_:1}),r(T(I),{class:"subtitle",depth:3},{default:P((()=>[S(U(T(t).subtitle),1)])),_:1})]),E("div",ie,[T(t).total?(R(),H(T(I),{key:0,depth:3,class:"total",innerHTML:T(t).total},null,8,["innerHTML"])):D("",!0),r(T(I),{depth:3,class:"time",innerHTML:T(n)},null,8,["innerHTML"])])])):(R(),M("div",le,[r(d,{text:"",round:"",height:"40px"})]))])),_:1})])),default:P((()=>[r(A,{name:"fade",mode:"out-in"},{default:P((()=>[T(t)?(R(),M("div",ce,[r(T(Y),{hoverable:"",clickable:"",style:{width:"100%"}},{default:P((()=>[(R(!0),M(B,null,j(T(t).data.slice(20*T(a)-20,20*T(a)),((e,o)=>(R(),H(T(ee),{key:e,onClick:r=>(e=>{if(!e.url||!e.mobileUrl)return $message.error("链接不存在");const r=window.innerWidth>680?e.url:e.mobileUrl;"open"===l.linkOpenType?window.open(r,"_blank"):"href"===l.linkOpenType&&(window.location.href=r)})(e)},{prefix:P((()=>[r(T(I),{class:G(["num",o+1+20*(T(a)-1)===1?"one":o+1+20*(T(a)-1)===2?"two":o+1+20*(T(a)-1)===3?"three":null]),depth:2},{default:P((()=>[S(U(o+1+20*(T(a)-1)),1)])),_:2},1032,["class"])])),default:P((()=>[E("div",ue,[r(T(I),{class:"title",innerHTML:e.title},null,8,["innerHTML"]),e.desc?(R(),H(T(I),{key:0,class:"desc",depth:3,innerHTML:e.desc},null,8,["innerHTML"])):D("",!0)]),E("div",ve,[e.hot?(R(),M("div",pe,[r(T(J),{depth:3,component:T(K)},null,8,["component"]),r(T(I),{class:"hot-text",depth:3,innerHTML:e.hot},null,8,["innerHTML"])])):D("",!0)])])),_:2},1032,["onClick"])))),128))])),_:1}),r(c,{class:"pagination","page-slot":5,"item-count":T(t).data.length,"page-sizes":[20],page:T(a),"onUpdate:page":i[0]||(i[0]=e=>N(a)?a.value=e:null)},null,8,["item-count","page"])])):(R(),M("div",de,[r(d,{text:"",round:"",repeat:20,height:"40px",style:{"margin-bottom":"20px"}})]))])),_:1})])),_:1})])}}},[["__scopeId","data-v-db594dc0"]]);export{me as default};