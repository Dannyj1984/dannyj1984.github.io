if ("serviceWorker" in navigator && PushManager in window) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered and push allowed"))
        .catch(err => console.log("service worker not registered", err))
    })
  } else {
    console.warn('Push messaging is not supported');
    pushButton.textContent = 'Push Not Supported';
  }