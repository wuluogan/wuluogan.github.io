if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>i(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(l.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-5361f2d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_baseIsEqual-4e6ef920.js",revision:null},{url:"assets/_commonjsHelpers-52245d71.js",revision:null},{url:"assets/403-634375e2.js",revision:null},{url:"assets/403-7e59c15b.js",revision:null},{url:"assets/403-b4496d0a.css",revision:null},{url:"assets/404-20e20a5f.js",revision:null},{url:"assets/404-64d37b0a.css",revision:null},{url:"assets/404-f4c8d9d5.js",revision:null},{url:"assets/500-18dbde61.js",revision:null},{url:"assets/500-23d38a27.css",revision:null},{url:"assets/500-681a34fd.js",revision:null},{url:"assets/dark-042b49ea.js",revision:null},{url:"assets/dark-5b5652e2.js",revision:null},{url:"assets/debounce-7c559fe2.js",revision:null},{url:"assets/HamburgerButton-75048cf9.js",revision:null},{url:"assets/HamburgerButton-c12b9c8e.js",revision:null},{url:"assets/hash.browser.esm-9886363d.js",revision:null},{url:"assets/hot-6d9b8d0e.js",revision:null},{url:"assets/hot-b51b6346.js",revision:null},{url:"assets/index-2401b4e8.js",revision:null},{url:"assets/index-2d55c370.js",revision:null},{url:"assets/index-4d06338b.js",revision:null},{url:"assets/index-5d9e78cd.css",revision:null},{url:"assets/index-67f81175.js",revision:null},{url:"assets/index-7f16a929.css",revision:null},{url:"assets/index-94073d9e.js",revision:null},{url:"assets/index-95f3d125.js",revision:null},{url:"assets/index-9b7d81d5.css",revision:null},{url:"assets/index-b2fed2cb.js",revision:null},{url:"assets/index-b41b8dcf.css",revision:null},{url:"assets/index-beeee94d.js",revision:null},{url:"assets/index-cca32e7e.js",revision:null},{url:"assets/index-dc8acf8a.css",revision:null},{url:"assets/index-e4d13b5f.css",revision:null},{url:"assets/index-ec6f7f22.js",revision:null},{url:"assets/index-ee9674ac.js",revision:null},{url:"assets/index-eee5fbba.js",revision:null},{url:"assets/light-57e81147.js",revision:null},{url:"assets/light-6659008b.js",revision:null},{url:"assets/light-888f4a71.js",revision:null},{url:"assets/light-a7c06dc0.js",revision:null},{url:"assets/list-00328d1b.js",revision:null},{url:"assets/list-29086373.css",revision:null},{url:"assets/list-a6adc865.js",revision:null},{url:"assets/setting-6dd3f433.css",revision:null},{url:"assets/setting-b4bbf328.js",revision:null},{url:"assets/setting-f7093167.js",revision:null},{url:"assets/test-12e2fb7b.js",revision:null},{url:"assets/test-1aa7c2a4.js",revision:null},{url:"assets/test-ff08ab87.css",revision:null},{url:"assets/use-os-theme-7cb33c59.js",revision:null},{url:"assets/use-os-theme-9149665e.js",revision:null},{url:"assets/utils-1459df04.js",revision:null},{url:"assets/utils-b768ccd3.js",revision:null},{url:"assets/vuedraggable.umd-0eda709f.js",revision:null},{url:"assets/vuedraggable.umd-4ea11470.js",revision:null},{url:"font/iconfont.js",revision:"6c36a7e4d9bb8f63c92659af3dd865d0"},{url:"index.html",revision:"89fbb86da2fe6710750af34f2f18ca70"},{url:"registerSW.js",revision:"2d7a8b23d630d474ca57f8ce65cf27e3"},{url:"img/icon/48.png",revision:"bdeb2b915105f31570a75f04717d4ec3"},{url:"img/icon/72.png",revision:"92b2f2a7e6502b7f741829fb8f5d9c3a"},{url:"img/icon/96.png",revision:"b9f82b92026c095b1beefe14b5db782a"},{url:"img/icon/128.png",revision:"db59290018756c0b56353921e36b2700"},{url:"img/icon/144.png",revision:"25a39aeb3e2dc916c168aacf4a128bed"},{url:"img/icon/192.png",revision:"083848b8070ddaa1484564bb6f8876f3"},{url:"img/icon/512.png",revision:"61317460c2ca3ddcce7067f766f2daa3"},{url:"manifest.webmanifest",revision:"5604ff4239a879e205650b1cb43f2ed9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new s.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));