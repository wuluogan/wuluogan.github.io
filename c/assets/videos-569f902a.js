import{d as e}from"./artist-41e83768.js";import{S as a,r as u,j as r,z as t,M as s,N as o,Q as l,U as i,a4 as v,at as n}from"./index-53a858b2.js";import{V as m}from"./VideoLists-2ad61fdf.js";import{P as p}from"./index-1ef88bea.js";import"./Youtube-5a78e571.js";import"./PlayOne-19805a98.js";import"./Grid-aa67534b.js";import"./Skeleton-540f99e2.js";import"./use-houdini-8d581849.js";import"./Select-c2872036.js";const d={class:"videos"},g={__name:"videos",props:{mvSize:{type:Number,default:0}},setup(g){const c=g,y=a(),j=u(y.currentRoute.value.query.id),f=u([]),h=u(30),N=u(y.currentRoute.value.query.page?Number(y.currentRoute.value.query.page):1),b=u(0),q=(a,u=30,r=0)=>{e(a,u,r).then((e=>{b.value=c.mvSize,f.value=[],e.mvs?e.mvs.forEach((e=>{f.value.push({id:e.id,cover:e.imgurl16v9,name:e.name,artist:[e.artist],playCount:v(e.playCount),duration:n(e.duration)})})):$message.error("搜索内容为空"),"undefined"!=typeof $scrollToTop&&$scrollToTop()}))},S=e=>{y.push({path:"/artist/videos",query:{id:j.value,page:e}})},C=e=>{h.value=e,q(j.value,e,(N.value-1)*h.value)};return r((()=>{q(j.value,h.value,(N.value-1)*h.value)})),t((()=>y.currentRoute.value),(e=>{j.value=e.query.id,N.value=Number(e.query.page?e.query.page:1),"ar-videos"==e.name&&q(j.value,h.value,(N.value-1)*h.value)})),(e,a)=>(s(),o("div",d,[l(m,{listData:i(f)},null,8,["listData"]),l(p,{totalCount:i(b),pageNumber:i(N),onPageSizeChange:C,onPageNumberChange:S},null,8,["totalCount","pageNumber"])]))}};export{g as default};