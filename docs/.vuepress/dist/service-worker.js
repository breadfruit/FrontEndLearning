/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "15fe93b3cc361c63c0a822d68994ac2a"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "81dc83a31c75180257607f71dd9d672f"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "e48bd9d669cc9d893bef2d3adc00b092"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "761ececec96af8563142640935eaa425"
  },
  {
    "url": "assets/css/0.styles.8cadace6.css",
    "revision": "c779fdf5fad6510b4309cace55251245"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/lianbiao.97d6779e.png",
    "revision": "97d6779e7493883dc2315e211b3e02bd"
  },
  {
    "url": "assets/img/react-profiler.b576ca3c.jpg",
    "revision": "b576ca3cc7e2d2b5777937aa616e39a7"
  },
  {
    "url": "assets/js/1.7b3cf72f.js",
    "revision": "8300e88fec79773c923c1d59a02c2d90"
  },
  {
    "url": "assets/js/10.d7f899af.js",
    "revision": "5edeed466c2aa240c6d7519b6a59e824"
  },
  {
    "url": "assets/js/11.65d49d74.js",
    "revision": "d7a5dfd5a4cf900019ad9d811bacc822"
  },
  {
    "url": "assets/js/12.384ec68e.js",
    "revision": "9220033c0edd462ca62627fd7911c9bb"
  },
  {
    "url": "assets/js/13.96368f23.js",
    "revision": "929e9bb7df223650a06706dc67de7987"
  },
  {
    "url": "assets/js/14.76fd63d6.js",
    "revision": "31744d5b92f785a6ac2cb7cc07ba13d4"
  },
  {
    "url": "assets/js/15.28921a86.js",
    "revision": "f12170432aad718253fac5b08fa80956"
  },
  {
    "url": "assets/js/16.1d885078.js",
    "revision": "abf6c3b50b64577d1a8327d48fd57965"
  },
  {
    "url": "assets/js/17.2e43fd79.js",
    "revision": "fbce5d02330f92bec5cac8586611d3ad"
  },
  {
    "url": "assets/js/18.2f6f3691.js",
    "revision": "940514b0cba43884565c4d66e48ca98e"
  },
  {
    "url": "assets/js/19.e23385e0.js",
    "revision": "3559c524d167beaeb0000b208c1230f2"
  },
  {
    "url": "assets/js/20.376c3f63.js",
    "revision": "dcd24377e7308ef8e74ca776961aa2fb"
  },
  {
    "url": "assets/js/21.9b847cfc.js",
    "revision": "6d2044ce2850fc6c51870bfea684e740"
  },
  {
    "url": "assets/js/22.b0f77733.js",
    "revision": "e8a70b778fc2fa00cfaabd7fb8f9df28"
  },
  {
    "url": "assets/js/23.f1859c7f.js",
    "revision": "f7bb9fb21c3c7fd2646f7b749b734566"
  },
  {
    "url": "assets/js/24.f65a0dcf.js",
    "revision": "e7f50e11088dc15b8ce16c444309f77b"
  },
  {
    "url": "assets/js/25.5c8e2040.js",
    "revision": "211908f706167c035086c859118f926a"
  },
  {
    "url": "assets/js/26.01d47537.js",
    "revision": "9fe5c5ef8b72c7298e1acc2ff05368e8"
  },
  {
    "url": "assets/js/27.92e5d4ef.js",
    "revision": "aadd1e32c6f67e821583c7d527d5ce25"
  },
  {
    "url": "assets/js/28.31b2429a.js",
    "revision": "6901f4378315d7979333d7fa706e1d0c"
  },
  {
    "url": "assets/js/29.97de18b5.js",
    "revision": "9e7cdfe8339323b1ab038f8d7ffb6ad3"
  },
  {
    "url": "assets/js/3.f1baf5fb.js",
    "revision": "2c55a223cee99a61f481d56e469ef13f"
  },
  {
    "url": "assets/js/30.0734e823.js",
    "revision": "d76092155483995699a461a8aa478722"
  },
  {
    "url": "assets/js/31.7e285b94.js",
    "revision": "bc47574968d6976c117c4d8356d133e5"
  },
  {
    "url": "assets/js/32.647ded6d.js",
    "revision": "20b9791443a7369798e02e5e9f0d5833"
  },
  {
    "url": "assets/js/33.d80a2b59.js",
    "revision": "1c26a55a253830b6f9b8ab52455af3ac"
  },
  {
    "url": "assets/js/34.486e0990.js",
    "revision": "d4ae8c787c178435a40c9d75e1e57876"
  },
  {
    "url": "assets/js/35.41974521.js",
    "revision": "a35236523acfa2ac4ad5483ded0cd84a"
  },
  {
    "url": "assets/js/36.670e447c.js",
    "revision": "a27b1f6a6f741de676c0bfd0dc051694"
  },
  {
    "url": "assets/js/37.d89bdc87.js",
    "revision": "1f52e46e850929c2a7970c8b8810fe6e"
  },
  {
    "url": "assets/js/38.708f2ebd.js",
    "revision": "ecd3f2a5707c62a0f5c8158e3018157c"
  },
  {
    "url": "assets/js/4.f1a7d661.js",
    "revision": "06023d9d839f2b12421679e77b3144a9"
  },
  {
    "url": "assets/js/5.ecb98e7d.js",
    "revision": "fad90b7b9fd8a31358025a9387690279"
  },
  {
    "url": "assets/js/6.cec59f05.js",
    "revision": "ad3fa1d213a3d9d82ee803eb7a7eff61"
  },
  {
    "url": "assets/js/7.18e51a63.js",
    "revision": "a62ac6c063abbf3f0c20d4ee9f7ade84"
  },
  {
    "url": "assets/js/8.aa1342c4.js",
    "revision": "2ac4e9ad1eeaabc8d65c50e9ec062c34"
  },
  {
    "url": "assets/js/9.49e375a0.js",
    "revision": "295e7cdb826e41fe87b03dd5ee1a4596"
  },
  {
    "url": "assets/js/app.23890339.js",
    "revision": "37f3267f11db309b24e5cf9cc4906d7b"
  },
  {
    "url": "categories/index.html",
    "revision": "20d60ee510906b9685d1c9399134f130"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "45c1f7794f2f9eba5caf5d47f3004c48"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "63361973dcf63fc5742cff90316ff3dd"
  },
  {
    "url": "handbook/Basic/CSS/MinAndMax.html",
    "revision": "1f222d45eebdd6211cfb346c5516c1aa"
  },
  {
    "url": "handbook/Basic/CSS/Percent.html",
    "revision": "cf3576bfdf35dec7d85dd175c1c98833"
  },
  {
    "url": "handbook/Basic/index.html",
    "revision": "9c86078ecd7937a1dd7be2dd09cb893e"
  },
  {
    "url": "handbook/Basic/JavaScript/JavaScript.html",
    "revision": "296e756b55459b276f718a8c8435cb41"
  },
  {
    "url": "handbook/Basic/TypeScript/TypeScript.html",
    "revision": "e1479e7c7afe31c53e3c6594832b56c4"
  },
  {
    "url": "handbook/Project/Build.html",
    "revision": "818c378a2abe18d8ecfb3f4794e848db"
  },
  {
    "url": "handbook/Project/index.html",
    "revision": "5f25c8dc6e85ce4f0c2657ec0ff8f6b4"
  },
  {
    "url": "handbook/Project/Npm.html",
    "revision": "c34dfe240ea016b2c255240a90ec44a0"
  },
  {
    "url": "handbook/Project/React.html",
    "revision": "84803a626a6f543e53b09e193cd86c7b"
  },
  {
    "url": "images/两两交换.png",
    "revision": "4edc8b2fd13dd025adf61faace3eb98c"
  },
  {
    "url": "images/粘性页脚.gif",
    "revision": "55fc94c7eb3dd2aab3279d8598de4760"
  },
  {
    "url": "images/重排链表.png",
    "revision": "4a676b6775bd7c2a05c3af5338639c1f"
  },
  {
    "url": "index.html",
    "revision": "16cf79a85e05ff6a9ef2477e08bc8b8e"
  },
  {
    "url": "moreAWeek/week1.html",
    "revision": "f3ddae286fddef28c561c5a3f6883f35"
  },
  {
    "url": "moreAWeek/week10.html",
    "revision": "907f48d948abea9d0a495d96e9293c7d"
  },
  {
    "url": "moreAWeek/week11.html",
    "revision": "6bfc10ecfe54ddd81c103969d8102676"
  },
  {
    "url": "moreAWeek/week12.html",
    "revision": "c322e863d21734c066d79d15faf2211b"
  },
  {
    "url": "moreAWeek/week13.html",
    "revision": "55bf50b339976df0b37baeff47de2327"
  },
  {
    "url": "moreAWeek/week14.html",
    "revision": "d8e23df58ad1a434bafdd332f960c3c9"
  },
  {
    "url": "moreAWeek/week15.html",
    "revision": "38bc3c295bdcc7a1cb7d9cd4e1c42300"
  },
  {
    "url": "moreAWeek/week16.html",
    "revision": "d576e8c7b153b8ba30d0a46fd9761912"
  },
  {
    "url": "moreAWeek/week17.html",
    "revision": "ab05601a2d92d4a57737940955669a77"
  },
  {
    "url": "moreAWeek/week2.html",
    "revision": "a7c2e112fd403513b749247831384b5d"
  },
  {
    "url": "moreAWeek/week3.html",
    "revision": "7e3357b61e614075500c43eeb8bcb7e6"
  },
  {
    "url": "moreAWeek/week4.html",
    "revision": "85f83afcfbee955f1734e9c06f7424d4"
  },
  {
    "url": "moreAWeek/week5.html",
    "revision": "1074cf155de1538caefa50ac27b9acb5"
  },
  {
    "url": "moreAWeek/week6.html",
    "revision": "39fed99e85b88039d6f3eaecc149c701"
  },
  {
    "url": "moreAWeek/week7.html",
    "revision": "fc583ba8f30e3fe0e1a794e49e56b681"
  },
  {
    "url": "moreAWeek/week8.html",
    "revision": "04b3831fbf48d92ba5c19960f7ece7c2"
  },
  {
    "url": "moreAWeek/week9.html",
    "revision": "1f55c36e43ab15f77ef4973ab78a70cb"
  },
  {
    "url": "mstile-270x270.png",
    "revision": "89917b5e493bf552c69ee1da0c8ee258"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "b675db15d917c218d4dcf6f128b8fa90"
  },
  {
    "url": "tag/index.html",
    "revision": "43b8e107c6e9204d26cdf7bd2a2e5eb2"
  },
  {
    "url": "timeline/index.html",
    "revision": "d3bfec782547fdcc18eeacdc920bee15"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
