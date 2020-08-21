if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log("Service Worker Registered");
    });
}


self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('fox-store').then(function (cache) {
      return cache.addAll([
        '/Dope-Tech/',
        '/Dope-Tech/index.html',
       '/Dope-Tech/js/typed.js',
        '/Dope-Tech/style.css',
      
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});