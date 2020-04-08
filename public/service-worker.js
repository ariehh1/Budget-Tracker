"use strict";

console.log("Hello from your friendly neighborhood service worker!");

const FILES_TO_CACHE = [
  `/`,
  `/index.html`,
  `/db.js`,
  `/index.js`,
  `/manifest.webmanifest`,
  `/assets/icons/moneyicon192x192.png`,
  `/style.css`,
];

const CACHE_NAME = `static-cache-v1`;
const DATA_CACHE_NAME = `data-cache-v1`;

// Install
self.addEventListener(`install`, (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log(`Your files were pre-cached successfully!`);
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

// Activate
self.addEventListener(`activate`, (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log(`Removing old cache data`, key);
            return caches.delete(key);
          }
          return undefined;
        })
      )
    )
  );

  self.clients.claim();
});

// Fetch event
self.addEventListener(`fetch`, (evt) => {
  if (evt.request.url.includes(`/api/`)) {
    evt.respondWith(
      caches
        .open(DATA_CACHE_NAME)
        .then((cache) =>
          fetch(evt.request)
            .then((response) => {
              // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                cache.put(evt.request.url, response.clone());
              }

              return response;
            })
            // Network request failed, try to get it from the cache.
            .catch(() => cache.match(evt.request))
        )
        .catch((err) => console.log(err))
    );
  } else {
    evt.respondWith(
      caches
        .match(evt.request)
        .then((response) => response || fetch(evt.request))
    );
  }
});
