

const TGAbxApp = "TG-ABX-App-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/styles.css",
  "/js/app.js",
<<<<<<< HEAD
  "/images/assets",
  "/images/icons/icon-72x72.png",
  "/images/icons/icon-96x96.png",
  "/images/icons/icon-128x128.png",
  "/images/icons/icon-144x144.png",
  "/images/icons/icon-152x152.png",
  "/images/icons/icon-192x192.png",
  "/images/icons/icon-384x384.png",
  "/images/icons/icon-512x512.png",
=======
  "/images/icons/icon-72x48.png",
  "/images/icons/icon-96x64.png",
  "/images/icons/icon-128x85.png",
  "/images/icons/icon-144x95.png",
  "/images/icons/icon-152x101.png",
  "/images/icons/icon-192x127.png",
  "/images/icons/icon-384x255.png",
  "/images/icons/icon-512x339.png"
>>>>>>> parent of 35cb045 (updated images sizes for web app)
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(TGAbxApp).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})