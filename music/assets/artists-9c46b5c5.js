import{R as s,a8 as t,j as i,M as r,N as a,Q as e,U as o}from"./index-508e343f.js";import{A as n}from"./ArtistLists-7638a476.js";import"./artist-2f4d8c35.js";import"./LinkTwo-29001038.js";import"./Unlike-eac66e4f.js";import"./Grid-06f1448d.js";import"./Skeleton-14d5eedf.js";import"./use-houdini-1871bee9.js";const l={class:"artists"},m={__name:"artists",setup(m){const{t:p}=s(),j=t();return i((()=>{$setSiteTitle(p("nav.user")+" - "+p("nav.userChildren.artist")),j.getUserArtistLists.has||j.getUserArtistLists.isLoading||j.setUserArtistLists()})),(s,t)=>(r(),a("div",l,[e(n,{listData:o(j).getUserArtistLists.list},null,8,["listData"])]))}};export{m as default};