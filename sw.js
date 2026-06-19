const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/assets/css/style.css",
      "/assets/icon/icon.png",
      "/assets/js/main.js",
      "/manifest.json"
    ]),
  );
});