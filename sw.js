const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

// Inside your sw.js file
self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "./",                  // Notice the dot! Points to the current directory
      "index.html",          // No leading slash makes it relative
      "assets/css/style.css",
      "assets/icon/icon.png",
      "assets/js/main.js",
      "manifest.json"
    ]),
  );
});