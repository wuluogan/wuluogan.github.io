if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-faaa562d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/403-e163f02a.css",revision:null},{url:"assets/403-fcdf055f.js",revision:null},{url:"assets/404-40ec1f4c.js",revision:null},{url:"assets/404-b29c223c.css",revision:null},{url:"assets/500-81840c76.css",revision:null},{url:"assets/500-e7bf65aa.js",revision:null},{url:"assets/Add-1b138f64.js",revision:null},{url:"assets/album-53cdefbb.js",revision:null},{url:"assets/album-bcc806f7.js",revision:null},{url:"assets/albums-1d372929.js",revision:null},{url:"assets/albums-66ef4003.css",revision:null},{url:"assets/albums-f942802e.js",revision:null},{url:"assets/AlbumView-7dd64000.js",revision:null},{url:"assets/AlbumView-9b4a92f7.css",revision:null},{url:"assets/Alert-4cd16846.js",revision:null},{url:"assets/all-songs-6dba5a9f.css",revision:null},{url:"assets/all-songs-d26e3920.js",revision:null},{url:"assets/artist-41e83768.js",revision:null},{url:"assets/ArtistLists-3a9ecfd8.js",revision:null},{url:"assets/ArtistLists-cc4f7e17.css",revision:null},{url:"assets/artists-03add4eb.js",revision:null},{url:"assets/artists-0f12aa77.js",revision:null},{url:"assets/artists-34bff44d.js",revision:null},{url:"assets/artists-d5e566dc.css",revision:null},{url:"assets/CalendarTodayFilled-7467acfd.js",revision:null},{url:"assets/cloud-1b0b9496.css",revision:null},{url:"assets/cloud-74fd0905.js",revision:null},{url:"assets/CommentView-1f1b6830.js",revision:null},{url:"assets/CommentView-442e7abf.css",revision:null},{url:"assets/CoverLists-9599ef53.js",revision:null},{url:"assets/CoverLists-a73188e6.css",revision:null},{url:"assets/DailySongsView-7695a33f.css",revision:null},{url:"assets/DailySongsView-f8a40cbd.js",revision:null},{url:"assets/DataLists-1a363f9d.js",revision:null},{url:"assets/DataLists-1f5ef50b.css",revision:null},{url:"assets/Divider-5a2e7da5.js",revision:null},{url:"assets/FormItem-05d6275e.js",revision:null},{url:"assets/getCoverUrl-a1317520.js",revision:null},{url:"assets/Grid-aa67534b.js",revision:null},{url:"assets/headers-2a964671.js",revision:null},{url:"assets/HistoryView-e28bee54.css",revision:null},{url:"assets/HistoryView-f47bcf8f.js",revision:null},{url:"assets/HomeView-9dc38c6a.js",revision:null},{url:"assets/HomeView-f7994531.css",revision:null},{url:"assets/index-08aa5e1a.css",revision:null},{url:"assets/index-0f9f876e.js",revision:null},{url:"assets/index-14122591.css",revision:null},{url:"assets/index-146a0c24.js",revision:null},{url:"assets/index-1ef88bea.js",revision:null},{url:"assets/index-279feb86.js",revision:null},{url:"assets/index-37bc9a00.js",revision:null},{url:"assets/index-40e53991.css",revision:null},{url:"assets/index-53a858b2.js",revision:null},{url:"assets/index-624164f0.css",revision:null},{url:"assets/index-6c2e0315.css",revision:null},{url:"assets/index-95932a43.js",revision:null},{url:"assets/index-b437e5f0.css",revision:null},{url:"assets/index-d2e1c449.js",revision:null},{url:"assets/index-e31ccb03.css",revision:null},{url:"assets/index-e3bb45d9.css",revision:null},{url:"assets/like-450287d5.js",revision:null},{url:"assets/LinkTwo-fa47446d.js",revision:null},{url:"assets/ListAdd-eeef3694.js",revision:null},{url:"assets/LoginView-074022c4.css",revision:null},{url:"assets/LoginView-dda41cdb.js",revision:null},{url:"assets/main-40f1c4f7.css",revision:null},{url:"assets/main-f41d29ac.js",revision:null},{url:"assets/MusicList-fcbbc00f.js",revision:null},{url:"assets/NewAlbumView-293f0765.js",revision:null},{url:"assets/NewAlbumView-96de415c.css",revision:null},{url:"assets/other-c661d449.js",revision:null},{url:"assets/People-30d35806.js",revision:null},{url:"assets/player-206a0516.js",revision:null},{url:"assets/playlists-36d562bb.css",revision:null},{url:"assets/playlists-3a77390b.js",revision:null},{url:"assets/playlists-47884d56.js",revision:null},{url:"assets/playlists-a1a46e79.css",revision:null},{url:"assets/playlists-de5ef29f.js",revision:null},{url:"assets/PlayListView-187825c4.css",revision:null},{url:"assets/PlayListView-d1e9b1e0.js",revision:null},{url:"assets/PlayOne-19805a98.js",revision:null},{url:"assets/Result-939c10dc.js",revision:null},{url:"assets/Select-c2872036.js",revision:null},{url:"assets/Skeleton-540f99e2.js",revision:null},{url:"assets/SmallSongData-7c091520.js",revision:null},{url:"assets/SmallSongData-db9ee564.css",revision:null},{url:"assets/songs-0d898ea6.css",revision:null},{url:"assets/songs-99fe2755.js",revision:null},{url:"assets/songs-e83b9d74.js",revision:null},{url:"assets/SongView-2b362e7f.js",revision:null},{url:"assets/SongView-e22d674b.css",revision:null},{url:"assets/Tabs-36adfe0e.js",revision:null},{url:"assets/Time-cadb38e8.js",revision:null},{url:"assets/Tooltip-746de0e8.js",revision:null},{url:"assets/toplists-3b5589a8.css",revision:null},{url:"assets/toplists-6ec4a4c4.js",revision:null},{url:"assets/Unlike-ac89838c.js",revision:null},{url:"assets/use-houdini-8d581849.js",revision:null},{url:"assets/VideoLists-2ad61fdf.js",revision:null},{url:"assets/VideoLists-df0c61ff.css",revision:null},{url:"assets/videos-569f902a.js",revision:null},{url:"assets/videos-5fad8c72.js",revision:null},{url:"assets/VideoView-8d75e41e.js",revision:null},{url:"assets/VideoView-ec1238c9.css",revision:null},{url:"assets/Youtube-5a78e571.js",revision:null},{url:"index.html",revision:"e793c71fd2a980de73f33eb273f7ca2d"},{url:"registerSW.js",revision:"3787396cfcdceff33954c0bf48f9e34a"},{url:"images/logo/favicon.png",revision:"1e3cc6f47cc330cce8254cf693b23b65"},{url:"manifest.webmanifest",revision:"c6e97e1edaff9313cbf43f7011bca490"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/(.*?)\.(woff2|woff|ttf)/,new s.CacheFirst({cacheName:"file-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(webp|png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));