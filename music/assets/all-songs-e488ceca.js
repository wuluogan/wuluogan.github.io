import{e as a,a as e}from"./artist-ee1952ec.js";import{_ as s,R as l,S as t,r as n,z as r,j as o,M as u,N as i,U as m,Z as g,O as p,a2 as c,X as v,Q as d,Y as y,W as f,bx as j,at as h,ap as b,a1 as k,af as q,ag as $}from"./index-6db7e36d.js";import{D as S}from"./DataLists-b94709e8.js";import{P as N}from"./index-55547b17.js";import"./SmallSongData-24870d74.js";import"./InputNumber-7a8a5b86.js";import"./Add-f90346ea.js";import"./FormItem-362de473.js";import"./ListAdd-f89d3a7f.js";import"./LinkTwo-45aaf14d.js";import"./PlayOne-40f4a405.js";import"./Select-0d959130.js";const _={class:"all-songs"},D={key:0,class:"title"},R={class:"key"},T={key:1,class:"title"},x={class:"key"},C=(a=>(q("data-v-3abca1f8"),a=a(),$(),a))((()=>p("br",null,null,-1))),F={key:2,class:"songs"},I=s({__name:"all-songs",setup(s){const{t:q}=l(),$=t(),I=n($.currentRoute.value.query.id),L=n([]),P=n(null),w=n(0),A=n(30),z=n($.currentRoute.value.query.page?Number($.currentRoute.value.query.page):1),O=(s,l=30,t=0,n="hot")=>{if(!s)return!1;a(s,l,t,n).then((a=>{if((a=>{e(a).then((a=>{P.value=a.data.artist.name}))})(s),a.songs[0]){w.value=a.total;const e=a.songs.map((a=>a.id));j(e.join(",")).then((a=>{L.value=[],a.songs.forEach(((a,e)=>{L.value.push({id:a.id,num:e+1+(z.value-1)*A.value,name:a.name,artist:a.ar,album:a.al,alia:a.alia,time:h(a.dt),fee:a.fee,pc:a.pc?a.pc:null,mv:a.mv?a.mv:null})}))}))}else $message.error(q("general.message.acquisitionFailed"));"undefined"!=typeof $scrollToTop&&$scrollToTop()})).catch((a=>{$.go(-1),console.error(q("general.message.acquisitionFailed"),a),$message.error(q("general.message.acquisitionFailed"))}))};r((()=>$.currentRoute.value),(a=>{I.value=a.query.id,z.value=Number(a.query.page?a.query.page:1),"all-songs"==a.name&&O(I.value,A.value,z.value?(z.value-1)*A.value:0)}));const U=a=>{A.value=a,getSearchDataList(I.value,a,(z.value-1)*A.value)},W=a=>{$.push({path:"/all-songs",query:{id:I.value,page:a}})};return o((()=>{O(I.value,A.value,(z.value-1)*A.value)})),(a,e)=>{const s=b;return u(),i("div",_,[m(I)?(u(),i("div",D,[m(L)[0]?(u(),i(g,{key:0},[p("span",R,c(m(P)?m(P):a.$t("general.name.unknownArtist")),1),p("span",null,c(a.$t("general.name.allSong")),1)],64)):v("",!0)])):(u(),i("div",T,[p("span",x,c(a.$t("general.name.noKeywords")),1),C,d(s,{strong:"",secondary:"",onClick:e[0]||(e[0]=a=>m($).go(-1)),style:{"margin-top":"20px"}},{default:y((()=>[k(c(a.$t("general.name.goBack")),1)])),_:1})])),m(I)?(u(),i("div",F,[d(S,{listData:m(L)},null,8,["listData"]),m(L)[0]?(u(),f(N,{key:0,pageNumber:m(z),totalCount:m(w),onPageSizeChange:U,onPageNumberChange:W},null,8,["pageNumber","totalCount"])):v("",!0)])):v("",!0)])}}},[["__scopeId","data-v-3abca1f8"]]);export{I as default};