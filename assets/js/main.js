const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      // 1. Get the repository name from the URL path
      // This dynamically grabs "/your-repository-name/" so it works both on GitHub and locally
      const repoPath = window.location.pathname.split('/')[1];
      const baseScope = repoPath ? `/${repoPath}/` : '/';

      // 2. Register using the correct subfolder path
      const registration = await navigator.serviceWorker.register(`${baseScope}sw.js`, {
        scope: baseScope, // Limits the service worker to your repo subfolder
      });

      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

let count = 0;

window.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('js_counter');
    const counterBtn = document.getElementById('js_counterBtn');

    counterBtn.addEventListener('click', () => {
        count++;
        counter.innerText = count;
    });
});


registerServiceWorker();