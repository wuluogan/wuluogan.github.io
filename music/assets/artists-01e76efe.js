import{R as s,S as e,r as t,z as a,j as r,M as i,N as o,Q as u,U as l,as as n}from"./index-6db7e36d.js";import{A as m}from"./ArtistLists-61e76055.js";import"./artist-ee1952ec.js";import"./LinkTwo-45aaf14d.js";import"./Unlike-a6814f2d.js";import"./Grid-6fa387d1.js";import"./Skeleton-c71ace24.js";import"./use-houdini-b79a3759.js";const p={class:"artists"},v={__name:"artists",setup(v){const{t:d}=s(),c=e(),j=t(c.currentRoute.value.query.keywords),f=t([]),k=t(30),y=t(1),T=t(0),g=(s,e=30,t=0,a=100)=>{n(s,e,t,a).then((s=>{T.value=s.result.artistCount,f.value=[],s.result.artists?s.result.artists.forEach((s=>{f.value.push({id:s.id,name:s.name,cover:s.img1v1Url})})):$message.error(d("general.message.acquisitionFailed")),"undefined"!=typeof $scrollToTop&&$scrollToTop()}))};return a((()=>c.currentRoute.value),(s=>{j.value=s.query.keywords,"s-artists"==s.name&&g(j.value,k.value,(y.value-1)*k.value)})),r((()=>{g(j.value)})),(s,e)=>(i(),o("div",p,[u(m,{listData:l(f)},null,8,["listData"])]))}};export{v as default};