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

// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(TGAbxApp).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== TGAbxApp)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});