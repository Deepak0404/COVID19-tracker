const cacheName = "Covid-19-tracker"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/script.min.js",
  "/img/covid19-logo.png",
  "/img/facebook.png",
  "/img/twitter.png",
  "/img/whatsapp.png",
  "/img/virus_icon.png",
  "/img/avatar_mask_icon.png",
  "/img/aarogya_setu_app.png",
  "/img/pattern.png"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets);
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})