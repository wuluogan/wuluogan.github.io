if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/music/sw.js', { scope: '/music/' })})}