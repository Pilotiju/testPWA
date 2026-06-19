const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "https://pilotiju.github.io/testPWA/",
      "https://pilotiju.github.io/testPWA/index.html",
      "https://pilotiju.github.io/testPWA/assets/css/style.css",
      "https://pilotiju.github.io/testPWA/assets/icon/icon.png",
      "https://pilotiju.github.io/testPWA/assets/js/main.js",
      "https://pilotiju.github.io/testPWA/manifest.json"
    ]),
  );
});