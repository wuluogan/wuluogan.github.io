if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-faaa562d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/403-acb96bc8.js",revision:null},{url:"assets/403-e163f02a.css",revision:null},{url:"assets/404-b29c223c.css",revision:null},{url:"assets/404-fa95bd10.js",revision:null},{url:"assets/500-55d8d533.js",revision:null},{url:"assets/500-81840c76.css",revision:null},{url:"assets/Add-f90346ea.js",revision:null},{url:"assets/album-1ed4c409.js",revision:null},{url:"assets/album-fb6c672c.js",revision:null},{url:"assets/albums-66ef4003.css",revision:null},{url:"assets/albums-df32bbda.js",revision:null},{url:"assets/albums-f20f3366.js",revision:null},{url:"assets/AlbumView-9b4a92f7.css",revision:null},{url:"assets/AlbumView-9e12133b.js",revision:null},{url:"assets/all-songs-6dba5a9f.css",revision:null},{url:"assets/all-songs-e488ceca.js",revision:null},{url:"assets/artist-ee1952ec.js",revision:null},{url:"assets/ArtistLists-61e76055.js",revision:null},{url:"assets/ArtistLists-cc4f7e17.css",revision:null},{url:"assets/artists-01e76efe.js",revision:null},{url:"assets/artists-1be8995a.js",revision:null},{url:"assets/artists-4696818a.js",revision:null},{url:"assets/artists-d5e566dc.css",revision:null},{url:"assets/CalendarTodayFilled-1f9da04d.js",revision:null},{url:"assets/cloud-1b0b9496.css",revision:null},{url:"assets/cloud-4acb9148.js",revision:null},{url:"assets/CommentView-1adc4e8a.js",revision:null},{url:"assets/CommentView-442e7abf.css",revision:null},{url:"assets/CoverLists-70024828.js",revision:null},{url:"assets/CoverLists-a73188e6.css",revision:null},{url:"assets/DailySongsView-17bc9595.js",revision:null},{url:"assets/DailySongsView-7695a33f.css",revision:null},{url:"assets/DataLists-0fe228fa.css",revision:null},{url:"assets/DataLists-b94709e8.js",revision:null},{url:"assets/Divider-f6c9f8f0.js",revision:null},{url:"assets/FormItem-362de473.js",revision:null},{url:"assets/formRules-8f71b7bd.js",revision:null},{url:"assets/getCoverUrl-141a11e1.js",revision:null},{url:"assets/Grid-6fa387d1.js",revision:null},{url:"assets/headers-3030efe4.js",revision:null},{url:"assets/HistoryView-66a4d4d1.js",revision:null},{url:"assets/HistoryView-e28bee54.css",revision:null},{url:"assets/HomeView-09c7a729.js",revision:null},{url:"assets/HomeView-62b816e8.css",revision:null},{url:"assets/index-0fafde32.js",revision:null},{url:"assets/index-1e70c435.css",revision:null},{url:"assets/index-30daed80.js",revision:null},{url:"assets/index-40e53991.css",revision:null},{url:"assets/index-4920f55a.js",revision:null},{url:"assets/index-4b27b811.js",revision:null},{url:"assets/index-55547b17.js",revision:null},{url:"assets/index-624164f0.css",revision:null},{url:"assets/index-6c2e0315.css",revision:null},{url:"assets/index-6db7e36d.js",revision:null},{url:"assets/index-7b5ded92.js",revision:null},{url:"assets/index-7d4dbd44.js",revision:null},{url:"assets/index-b437e5f0.css",revision:null},{url:"assets/index-ce1fd660.css",revision:null},{url:"assets/index-e31ccb03.css",revision:null},{url:"assets/index-e3bb45d9.css",revision:null},{url:"assets/InputNumber-7a8a5b86.js",revision:null},{url:"assets/like-fde32c80.js",revision:null},{url:"assets/LinkTwo-45aaf14d.js",revision:null},{url:"assets/ListAdd-f89d3a7f.js",revision:null},{url:"assets/LoginView-1f81c162.css",revision:null},{url:"assets/LoginView-9b769bb1.js",revision:null},{url:"assets/main-032bc903.css",revision:null},{url:"assets/main-72024b2f.js",revision:null},{url:"assets/MusicList-50908af7.js",revision:null},{url:"assets/NewAlbumView-96de415c.css",revision:null},{url:"assets/NewAlbumView-e13b01a4.js",revision:null},{url:"assets/other-b4ea1f3b.js",revision:null},{url:"assets/People-eaa92b27.js",revision:null},{url:"assets/player-09eae474.js",revision:null},{url:"assets/playlists-36d562bb.css",revision:null},{url:"assets/playlists-434dacd0.js",revision:null},{url:"assets/playlists-a1a46e79.css",revision:null},{url:"assets/playlists-a29859d3.js",revision:null},{url:"assets/playlists-e3ec6287.js",revision:null},{url:"assets/PlayListView-187825c4.css",revision:null},{url:"assets/PlayListView-fc54dd83.js",revision:null},{url:"assets/PlayOne-40f4a405.js",revision:null},{url:"assets/Result-cfea3dfc.js",revision:null},{url:"assets/Select-0d959130.js",revision:null},{url:"assets/Skeleton-c71ace24.js",revision:null},{url:"assets/SmallSongData-24870d74.js",revision:null},{url:"assets/SmallSongData-db9ee564.css",revision:null},{url:"assets/songs-0d898ea6.css",revision:null},{url:"assets/songs-6b4e7c0d.js",revision:null},{url:"assets/songs-e70cafdc.js",revision:null},{url:"assets/SongView-8e83c497.js",revision:null},{url:"assets/SongView-e22d674b.css",revision:null},{url:"assets/Tabs-453ceb99.js",revision:null},{url:"assets/Time-8add18af.js",revision:null},{url:"assets/Tooltip-e469203a.js",revision:null},{url:"assets/toplists-3b5589a8.css",revision:null},{url:"assets/toplists-b8f796e8.js",revision:null},{url:"assets/Unlike-a6814f2d.js",revision:null},{url:"assets/use-houdini-b79a3759.js",revision:null},{url:"assets/VideoLists-7338edd1.js",revision:null},{url:"assets/VideoLists-df0c61ff.css",revision:null},{url:"assets/videos-384b715f.js",revision:null},{url:"assets/videos-6d631acf.js",revision:null},{url:"assets/VideoView-a0c1a424.js",revision:null},{url:"assets/VideoView-ec1238c9.css",revision:null},{url:"assets/Youtube-a38ce471.js",revision:null},{url:"index.html",revision:"f89458cbe6e3b3da0a8a38e02a92cfb6"},{url:"registerSW.js",revision:"3787396cfcdceff33954c0bf48f9e34a"},{url:"images/logo/favicon.png",revision:"1e3cc6f47cc330cce8254cf693b23b65"},{url:"manifest.webmanifest",revision:"c6e97e1edaff9313cbf43f7011bca490"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/(.*?)\.(woff2|woff|ttf)/,new s.CacheFirst({cacheName:"file-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(webp|png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));