import{d as e}from"./artist-ee1952ec.js";import{S as a,r as u,j as r,z as t,M as s,N as o,Q as l,U as i,a4 as v,at as n}from"./index-6db7e36d.js";import{V as m}from"./VideoLists-7338edd1.js";import{P as p}from"./index-55547b17.js";import"./Youtube-a38ce471.js";import"./PlayOne-40f4a405.js";import"./Grid-6fa387d1.js";import"./Skeleton-c71ace24.js";import"./use-houdini-b79a3759.js";import"./Select-0d959130.js";const d={class:"videos"},g={__name:"videos",props:{mvSize:{type:Number,default:0}},setup(g){const c=g,y=a(),j=u(y.currentRoute.value.query.id),f=u([]),h=u(30),N=u(y.currentRoute.value.query.page?Number(y.currentRoute.value.query.page):1),b=u(0),q=(a,u=30,r=0)=>{e(a,u,r).then((e=>{b.value=c.mvSize,f.value=[],e.mvs?e.mvs.forEach((e=>{f.value.push({id:e.id,cover:e.imgurl16v9,name:e.name,artist:[e.artist],playCount:v(e.playCount),duration:n(e.duration)})})):$message.error("搜索内容为空"),"undefined"!=typeof $scrollToTop&&$scrollToTop()}))},S=e=>{y.push({path:"/artist/videos",query:{id:j.value,page:e}})},C=e=>{h.value=e,q(j.value,e,(N.value-1)*h.value)};return r((()=>{q(j.value,h.value,(N.value-1)*h.value)})),t((()=>y.currentRoute.value),(e=>{j.value=e.query.id,N.value=Number(e.query.page?e.query.page:1),"ar-videos"==e.name&&q(j.value,h.value,(N.value-1)*h.value)})),(e,a)=>(s(),o("div",d,[l(m,{listData:i(f)},null,8,["listData"]),l(p,{totalCount:i(b),pageNumber:i(N),onPageSizeChange:C,onPageNumberChange:S},null,8,["totalCount","pageNumber"])]))}};export{g as default};