"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6325],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>f});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=i(t),y=a,f=p["".concat(s,".").concat(y)]||p[y]||u[y]||o;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(8168),a=(t(6540),t(5680));const o={},l="Mysql",c={unversionedId:"dev/sql/mysql",id:"dev/sql/mysql",title:"Mysql",description:"1. \u67e5\u770b\u6240\u6709\u8868\u8868\u540d\u548c\u5907\u6ce8",source:"@site/docs/dev/sql/mysql.md",sourceDirName:"dev/sql",slug:"/dev/sql/mysql",permalink:"/doc/docs/dev/sql/mysql",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"book",previous:{title:"\u7f51\u7ad9",permalink:"/doc/docs/dev/other/www"},next:{title:"Sql \u9762\u8bd5",permalink:"/doc/docs/dev/sql/sql-initer"}},s={},i=[],m={toc:i},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"mysql"},"Mysql"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u67e5\u770b\u6240\u6709\u8868\u8868\u540d\u548c\u5907\u6ce8")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT TABLE_NAME,\n       table_comment\nFROM `information_schema`.tables\nWHERE table_schema='\u6570\u636e\u5e93\u540d'\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u67e5\u8be2\u67d0\u5f20\u8868\u7684\u5b57\u6bb5\u548c\u5907\u6ce8")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select column_name,\ncolumn_comment \nfrom information_schema.columns \nwhere table_name ='\u8868\u540d'\nand table_schema='\u6570\u636e\u5e93\u540d'\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"\u67e5\u770b\u6240\u6709\u5b57\u6bb5\u540d\u79f0\u548c\u5907\u6ce8")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT a.table_name,\n       a.column_name,\n       a.column_comment\nFROM information_schema.columns a,\n     `information_schema`.tables b\nWHERE a.table_name = b.table_name\n  AND a.table_schema = b.table_schema\n  AND a.table_schema='\u6570\u636e\u5e93\u540d'\nORDER BY a.table_name,\n         a.ordinal_position;\n")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"\u5904\u7406\u6b7b\u9501\u95ee\u9898")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCK_WAITS; \nSHOW OPEN TABLES WHERE In_use > 0;  //\u67e5\u8be2\u6b7b\u9501\nSELECT * FROM information_schema.INNODB_TRX; //\u67e5\u8be2\u6b7b\u9501id\nkill 33614 //\u6740\u6b7b\n\nshow processlist;\n\nSHOW ENGINE INNODB STATUS; //\u67e5\u8be2\u6700\u8fd1\u4e00\u6b21\u7684\u6b7b\u9501\u65e5\u5fd7\n")))}u.isMDXComponent=!0}}]);