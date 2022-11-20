importScripts("/assets/js/workbox-v5.1.4/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v5.1.4"});

self.__precacheManifest = [{"url":"/assets/css/prism.css","revision":"bc00adfb98aa02cf616e3e084558aec6"},{"url":"/assets/css/theme.css","revision":"1eeea8433302431ce1fd45e32fc26d94"},{"url":"/assets/css/theme.css.map","revision":"6d670c6f5453e40d86ea5bf0fe3583ff"},{"url":"/assets/js/form.js","revision":"234fec33677dbaf25a4dddf2cf4eb587"},{"url":"/assets/js/jquery.min.js","revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a"},{"url":"/assets/js/lazyload.js","revision":"fcb81341047b2eded5adc7cedd67ea5a"},{"url":"/assets/js/lunr.js","revision":"a5802d96e7726edf965526075d62e86e"},{"url":"/assets/js/lunrsearchengine.js","revision":"c3ea8ced5bd9748d8602ca6ce2816f46"},{"url":"/assets/js/prism.js","revision":"960756d2a02f8d94b27bab18d80de944"},{"url":"/assets/js/sw-register.js","revision":"9f7a7dddad0496bd0ec2db41182b6052"},{"url":"/assets/js/theme.js","revision":"96e1d4c06e5a101738bf21421d7bd3ad"},{"url":"/manifest.json","revision":"f310f87d5be07773ce7b04d6b182ba29"},{"url":"/service-worker.js","revision":"a785196194d4a4782db5d6712f8b8494"},{"url":"/assets/fonts/casper-icons.svg","revision":"240264149a475160ef8115aeda3cbafd"},{"url":"/assets/images/static/favicon.png","revision":"e50ca970e6d0c6776a70ac99b3292f08"},{"url":"/assets/images/static/logo.png","revision":"8d04926824202b2668cf4d4edeba72d9"},{"url":"/assets/images/static/pwa/144.png","revision":"aac87c3dbe89c2e4b19ac554d47da7db"},{"url":"/assets/images/static/pwa/192.png","revision":"1bce005b2bb40f1247794c505d751d8c"},{"url":"/assets/images/static/pwa/96.png","revision":"146f193580db5f2404fc5fa8f5c7b30a"},{"url":"/404.html","revision":"ee512088eea4a4badfc5e6cc4322b45d"},{"url":"/categories.html","revision":"5c18bb174e522af6d8433c9f0e7b5583"},{"url":"/contact-success/index.html","revision":"3c5112528b1eb0db44a333f4e6efe138"},{"url":"/contact.html","revision":"e5b37913469d444bf19690b7eb1b95e9"},{"url":"/index.html","revision":"15c5b68043fb817bd65ec6b2184d9680"},{"url":"/tags.html","revision":"1466efc0f34703b60ea5813ece26e51e"}];

// service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'augenews',
    suffix: 'v1.0',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `NetworkFirst` strategy for html
workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.StaleWhileRevalidate()
);

// use `NetworkFirst` strategy for css and js
workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate()
);

// use `CacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    new workbox.strategies.StaleWhileRevalidate()
);

// use `StaleWhileRevalidate` third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    new workbox.strategies.StaleWhileRevalidate()
);%
