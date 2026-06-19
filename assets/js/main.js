const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
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