var CACHE_NAME = 'my-site-cache-v8';
var urlsToCache = [
  '/pwa/',
  '/pwa/index.php',
  'assets/',
  'assets/index.html',
  'assets/styles/main.css',
  'assets/js/jquery.min.js',
  'assets/styles/bootstrap.min.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
        console.log('Instal succes Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.match(event.request).then(function(response) {
//           // Cache hit - return response
//           if (response) {
//             return response;
//           }
//           return fetch(event.request);
//         }
//       )
//     );
//   });
self.addEventListener('fetch', function (event) {
    event.respondWith(
      fetch(event.request).catch(function () {
        return caches.match(event.request);
      }),
    );
  });


self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName){
              console.log(cacheName)
              return cacheName != CACHE_NAME
          }).map(function(cacheName){
              return caches.delete(cacheName)
          })
        );
      })
    );
  });
  