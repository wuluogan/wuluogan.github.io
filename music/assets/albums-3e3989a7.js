import{R as e,S as a,r as s,z as u,j as r,M as t,N as l,Q as o,U as i,W as m,X as n,as as p,a6 as v}from"./index-508e343f.js";import{C as c}from"./CoverLists-85dbe7e0.js";import{P as b}from"./index-5fb7530a.js";import"./album-1a2996da.js";import"./FormItem-13fad4fe.js";import"./Select-769346f6.js";import"./getCoverUrl-2d1c0d55.js";import"./Tooltip-393c85c2.js";import"./PlayOne-7f3750d2.js";import"./LinkTwo-29001038.js";import"./Unlike-eac66e4f.js";import"./Grid-06f1448d.js";import"./Skeleton-14d5eedf.js";import"./use-houdini-1871bee9.js";const g={class:"albums"},j={__name:"albums",setup(j){const{t:d}=e(),y=a(),h=s(y.currentRoute.value.query.keywords),T=s([]),q=s(0),C=s(30),f=s(y.currentRoute.value.query.page?Number(y.currentRoute.value.query.page):1),k=(e,a=30,s=0,u=10)=>{p(e,a,s,u).then((e=>{q.value=e.result.albumCount,T.value=[],e.result.albums?e.result.albums.forEach((e=>{T.value.push({id:e.id,cover:e.picUrl,name:e.name,artist:e.artists,time:v(e.publishTime)})})):$message.error(d("general.message.acquisitionFailed")),"undefined"!=typeof $scrollToTop&&$scrollToTop()}))};u((()=>y.currentRoute.value),(e=>{h.value=e.query.keywords,f.value=Number(e.query.page?e.query.page:1),"s-albums"==e.name&&k(h.value,C.value,(f.value-1)*C.value)}));const N=e=>{C.value=e,k(h.value,e,(f.value-1)*C.value)},R=e=>{y.push({path:"/search/albums",query:{keywords:h.value,page:e}})};return r((()=>{k(h.value,C.value,(f.value-1)*C.value)})),(e,a)=>(t(),l("div",g,[o(c,{listData:i(T),listType:"album"},null,8,["listData"]),i(T)[0]?(t(),m(b,{key:0,pageNumber:i(f),totalCount:i(q),onPageSizeChange:N,onPageNumberChange:R},null,8,["pageNumber","totalCount"])):n("",!0)]))}};export{j as default};
