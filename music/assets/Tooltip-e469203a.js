import{bm as e,bn as s,cz as o,cA as r,cB as t,d as a,e as i,B as n,r as p,g as c,h as l,aM as d,cC as b}from"./index-6db7e36d.js";const m=e({name:"Tooltip",common:s,peers:{Popover:o},self:e=>{const{borderRadius:s,boxShadow2:o,baseColor:a}=e;return Object.assign(Object.assign({},r),{borderRadius:s,boxShadow:o,color:t(a,"rgba(0, 0, 0, .85)"),textColor:a})}}),v=a({name:"Tooltip",props:Object.assign(Object.assign({},b),n.props),__popover__:!0,setup(e){const{mergedClsPrefixRef:s}=i(e),o=n("Tooltip","-tooltip",void 0,m,e,s),r=p(null),t={syncPosition(){r.value.syncPosition()},setShow(e){r.value.setShow(e)}};return Object.assign(Object.assign({},t),{popoverRef:r,mergedTheme:o,popoverThemeOverrides:c((()=>o.value.self))})},render(){const{mergedTheme:e,internalExtraClass:s}=this;return l(d,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:s.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{v as N,m as t};