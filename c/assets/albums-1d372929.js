import{R as e,S as a,r as s,z as u,j as r,M as t,N as l,Q as o,U as i,W as m,X as n,as as p,a6 as v}from"./index-53a858b2.js";import{C as c}from"./CoverLists-9599ef53.js";import{P as b}from"./index-1ef88bea.js";import"./album-bcc806f7.js";import"./FormItem-05d6275e.js";import"./Select-c2872036.js";import"./getCoverUrl-a1317520.js";import"./Tooltip-746de0e8.js";import"./PlayOne-19805a98.js";import"./LinkTwo-fa47446d.js";import"./Unlike-ac89838c.js";import"./Grid-aa67534b.js";import"./Skeleton-540f99e2.js";import"./use-houdini-8d581849.js";const g={class:"albums"},j={__name:"albums",setup(j){const{t:d}=e(),y=a(),h=s(y.currentRoute.value.query.keywords),T=s([]),q=s(0),C=s(30),f=s(y.currentRoute.value.query.page?Number(y.currentRoute.value.query.page):1),k=(e,a=30,s=0,u=10)=>{p(e,a,s,u).then((e=>{q.value=e.result.albumCount,T.value=[],e.result.albums?e.result.albums.forEach((e=>{T.value.push({id:e.id,cover:e.picUrl,name:e.name,artist:e.artists,time:v(e.publishTime)})})):$message.error(d("general.message.acquisitionFailed")),"undefined"!=typeof $scrollToTop&&$scrollToTop()}))};u((()=>y.currentRoute.value),(e=>{h.value=e.query.keywords,f.value=Number(e.query.page?e.query.page:1),"s-albums"==e.name&&k(h.value,C.value,(f.value-1)*C.value)}));const N=e=>{C.value=e,k(h.value,e,(f.value-1)*C.value)},R=e=>{y.push({path:"/search/albums",query:{keywords:h.value,page:e}})};return r((()=>{k(h.value,C.value,(f.value-1)*C.value)})),(e,a)=>(t(),l("div",g,[o(c,{listData:i(T),listType:"album"},null,8,["listData"]),i(T)[0]?(t(),m(b,{key:0,pageNumber:i(f),totalCount:i(q),onPageSizeChange:N,onPageNumberChange:R},null,8,["pageNumber","totalCount"])):n("",!0)]))}};export{j as default};