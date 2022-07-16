const TGAbxApp = "TG-ABX-App-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/styles.css",
  "/js/app.js",
  "/assets/img/portfolio/baby.png",
  "/assets/img/portfolio/abx.png",
  "/assets/img/portfolio/blood_1.png",
  "/assets/img/portfolio/bone.png",
  "/assets/img/portfolio/cardio.png",
  "/assets/img/portfolio/ent.png",
  "/assets/img/portfolio/eye.png",
  "/assets/img/portfolio/gender.png",
  "/assets/img/portfolio/head.png",
  "/assets/img/portfolio/hospital.png",
  "/assets/img/portfolio/Intestines.png",
  "/assets/img/portfolio/lungs.png",
  "/assets/img/portfolio/meningitis.png",
  "/assets/img/portfolio/parasite.png",
  "/assets/img/portfolio/skin.png",
  "/assets/img/portfolio/tooth_1.png",
  "/assets/img/portfolio/urinary.png",
  "/assets/img/portfolio/uterus_1.png",
  "/assets/img/portfolio/virus.png",
  "/assets/img/icons/icon-72x72.png",
  "/assets/img/icons/icon-96x96.png",
  "/assets/img/icons/icon-128x128.png",
  "/assets/img/icons/icon-144x144.png",
  "/assets/img/icons/icon-152x152.png",
  "/assets/img/icons/icon-192x192.png",
  "/assets/img/icons/icon-384x384.png",
  "/assets/img/icons/icon-512x512.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(TGAbxApp).then(cache => {
      cache.addAll(assets)
      console.log(assets)
    })
  )
})

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(TGAbxApp)
    .then(function(Cache) {
      console.log("opened cache");
      return Cache.addAll(assets)
    })
);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // This method looks at the request and
    // finds any cached results from any of the
    // caches that the Service Worker has created.
    caches.match(event.request)
      .then(function(response) {
        // If a cache is hit, we can return thre response.
        if (response) {
          return response;
        }

        // Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the request.
        var fetchRequest = event.request.clone();
        
        // A cache hasn't been hit so we need to perform a fetch,
        // which makes a network request and returns the data if
        // anything can be retrieved from the network.
        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cloning the response since it's a stream as well.
            // Because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(TGAbxApp)
              .then(function(cache) {
                // Add the request to the cache for future queries.
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});