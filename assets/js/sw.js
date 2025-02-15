self.addEventListener("install", (event) => {
    console.log("Worker: Service Worker installed.");
});

self.addEventListener("activate", (event) => {
    console.log("Worker: Service Worker activated.");
});
