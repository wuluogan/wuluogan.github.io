import{_ as e,R as a,S as t,a7 as s,r as l,aF as n,j as o,z as m,M as r,N as u,Q as i,Y as c,T as d,U as g,O as p,a2 as y,X as C,Z as v,$ as f,aG as h,ap as k,W as D,a1 as x,af as S,ag as $}from"./index-53a858b2.js";import{g as _,C as j}from"./index-146a0c24.js";import{S as b}from"./SmallSongData-7c091520.js";import{P as q}from"./index-1ef88bea.js";import{a as N}from"./headers-2a964671.js";import{_ as R}from"./Skeleton-540f99e2.js";import"./Time-cadb38e8.js";import"./Select-c2872036.js";import"./use-houdini-8d581849.js";const T={class:"comment"},P={key:0,class:"title"},w={class:"key"},B={key:1,class:"title"},I={class:"key"},z=(e=>(S("data-v-3f51624a"),e=e(),$(),e))((()=>p("br",null,null,-1))),F={key:2,class:"commentData"},X={key:0,class:"hotComments"},Y={key:0,class:"loading"},E={class:"content"},G={class:"allComments",ref:"allCommentsRef"},H={class:"count"},K={key:0,class:"loading"},M={class:"content"},O=e({__name:"CommentView",setup(e){const{t:S}=a(),$=t(),O=s(),Q=l($.currentRoute.value.query.id),U=l($.currentRoute.value.query.page?Number($.currentRoute.value.query.page):1),V=n({hotComments:[],allComments:[]}),W=l(0),Z=(e,a=0)=>{let t=null;V.allComments[0]&&a>=5e3&&(t=V.allComments[V.allComments.length-1].time),_(e,a,t).then((e=>{e.comments&&e.comments[0]?(e.hotComments?V.hotComments=e.hotComments:V.hotComments=[],V.allComments=e.comments,W.value=e.total):($message.error(S("general.message.acquisitionFailed")),$.go(-1)),"undefined"!=typeof $scrollToTop&&$scrollToTop()}))},A=e=>{$.push({path:"/comment",query:{id:Q.value,page:e}})};return o((()=>{$setSiteTitle(S("general.name.allComments")),Q.value&&Z(Q.value,20*(U.value-1))})),m((()=>$.currentRoute.value),(e=>{U.value=Number(e.query.page?e.query.page:1),"comment"==e.name&&(Q.value=e.query.id,Z(e.query.id,20*(U.value-1)))})),(e,a)=>{const t=h,s=k,l=N,n=R;return r(),u("div",T,[i(d,{name:"up"},{default:c((()=>[g(O).getPlaySongData&&g(O).getPlaySongData.id!=g(Q)?(r(),D(t,{key:0,class:"goback",onClick:a[0]||(a[0]=e=>g($).push(`/comment?id=${g(O).getPlaySongData.id}&page=1`)),"content-style":"padding: 6px"},{default:c((()=>[x(y(e.$t("general.name.toCurrentlySong")),1)])),_:1})):C("",!0)])),_:1}),g(Q)?(r(),u("div",P,[p("span",w,y(e.$t("general.name.allComments")),1),i(t,{class:"song"},{default:c((()=>[i(b,{getDataByID:g(Q)},null,8,["getDataByID"])])),_:1})])):(r(),u("div",B,[p("span",I,y(e.$t("general.name.noKeywords")),1),z,i(s,{strong:"",secondary:"",onClick:a[1]||(a[1]=e=>g($).go(-1)),style:{"margin-top":"20px"}},{default:c((()=>[x(y(e.$t("general.name.goBack")),1)])),_:1})])),g(Q)&&g(V).allComments[0]?(r(),u("div",F,[g(V).hotComments[0]?(r(),u("div",X,[i(l,{prefix:"bar"},{default:c((()=>[x(y(e.$t("general.name.hotComments")),1)])),_:1}),g(V).hotComments[0]?C("",!0):(r(),u("div",Y,[i(n,{text:"",repeat:3}),i(n,{text:"",style:{width:"60%"}})])),p("div",E,[(r(!0),u(v,null,f(g(V).hotComments,(e=>(r(),D(j,{key:e,commentData:e},null,8,["commentData"])))),128))])])):C("",!0),p("div",G,[i(l,{prefix:"bar"},{default:c((()=>[x(y(e.$t("general.name.allComments"))+" ",1),p("span",H,y(g(W))+" +",1)])),_:1}),g(V).allComments[0]?C("",!0):(r(),u("div",K,[i(n,{text:"",repeat:3}),i(n,{text:"",style:{width:"60%"}})])),p("div",M,[(r(!0),u(v,null,f(g(V).allComments,(e=>(r(),D(j,{key:e,commentData:e},null,8,["commentData"])))),128))])],512),i(q,{totalCount:g(W),pageNumber:g(U),showSizePicker:!1,onPageNumberChange:A},null,8,["totalCount","pageNumber"])])):C("",!0)])}}},[["__scopeId","data-v-3f51624a"]]);export{O as default};