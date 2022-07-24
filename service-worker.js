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
    "revision": "687b2a888dbbe56ecf8dfaedfdce07cc"
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
    "url": "assets/css/0.styles.4718214b.css",
    "revision": "3fd56896b322597c95d2bdeafef18fd8"
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
    "url": "assets/js/1.af718965.js",
    "revision": "8041f09a48da5ce6491f1ded9fbac171"
  },
  {
    "url": "assets/js/10.5cc3a93d.js",
    "revision": "cf147f9ba9b50d56ed408c5ccb68433a"
  },
  {
    "url": "assets/js/11.514b026c.js",
    "revision": "335cc390a64987e62386cce479171ce3"
  },
  {
    "url": "assets/js/12.e68c43e4.js",
    "revision": "b96c3b73b2554de12422524e2ca09147"
  },
  {
    "url": "assets/js/13.9cfa466f.js",
    "revision": "94f752a939507a0adc1be5b32a10877f"
  },
  {
    "url": "assets/js/14.296e6f58.js",
    "revision": "2554336710c2e5656d7a30790541a1d8"
  },
  {
    "url": "assets/js/15.b8cdccd6.js",
    "revision": "dce2d23551587e9f73e7ba25369fce59"
  },
  {
    "url": "assets/js/16.1d0e7d89.js",
    "revision": "df7d0015e8312e6e32267710157d49c7"
  },
  {
    "url": "assets/js/17.461d4262.js",
    "revision": "0edb136f44178ded489694de0f5a5fb3"
  },
  {
    "url": "assets/js/18.b4f89a6c.js",
    "revision": "0581ebd5ed734524689a9e179170994f"
  },
  {
    "url": "assets/js/19.b4629b23.js",
    "revision": "a8d2a47fc96df16d91816d93c63c9095"
  },
  {
    "url": "assets/js/20.062facd2.js",
    "revision": "800e783f651a3249efa8c09b54c6d6ee"
  },
  {
    "url": "assets/js/21.3de03fe1.js",
    "revision": "6df470d0fda307087a98a78cd493f1eb"
  },
  {
    "url": "assets/js/22.8066abc7.js",
    "revision": "fee29701db8099dc2d7ac85f44998641"
  },
  {
    "url": "assets/js/23.a6a61537.js",
    "revision": "4c7bd3b3e41bdda3f2b3d7b967153087"
  },
  {
    "url": "assets/js/3.a539a024.js",
    "revision": "303762fe190aa0b84ab25b56e3683c0d"
  },
  {
    "url": "assets/js/4.80eaaf42.js",
    "revision": "f5d70cf61ca9297f3bbf32cd874fd462"
  },
  {
    "url": "assets/js/5.3cac10d4.js",
    "revision": "7147224e0bfe317269569eaf15865f8a"
  },
  {
    "url": "assets/js/6.e2fe0c24.js",
    "revision": "52b97dc01321c2b8795e7939b77c30a2"
  },
  {
    "url": "assets/js/7.554818bd.js",
    "revision": "bbae925dfd12db49188d758efd13a87f"
  },
  {
    "url": "assets/js/8.a6c9fbe0.js",
    "revision": "790ccd921cae7a98cce6af276ae3b6ef"
  },
  {
    "url": "assets/js/9.d57abe32.js",
    "revision": "daa0cc321eda9f0dfa9dc4ee35065abd"
  },
  {
    "url": "assets/js/app.bcbfe5d3.js",
    "revision": "f0bbf2eef6aacdd05bd2bd69484fa7a2"
  },
  {
    "url": "categories/index.html",
    "revision": "4013012d5fd513431f4c9c753b1e4793"
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
    "url": "handbook/basic/CSS/index.html",
    "revision": "9efedbaec09c30d4d946fc1f22b609c2"
  },
  {
    "url": "handbook/basic/JavaScript/index.html",
    "revision": "c157dc9318d1dead7110cbd83bc365ef"
  },
  {
    "url": "index.html",
    "revision": "ab307a55cdd837b0dd6be4d0c6c70408"
  },
  {
    "url": "moreAWeek/week1.html",
    "revision": "420de5901d1d43b28ecda5fe78681691"
  },
  {
    "url": "moreAWeek/week2.html",
    "revision": "f2be18fd10f799ca72c1a5bf3beb4e83"
  },
  {
    "url": "moreAWeek/week3.html",
    "revision": "42ae56657a465a034225f1f9519494c2"
  },
  {
    "url": "moreAWeek/week4.html",
    "revision": "036da006766b069ae059dc3f51a19114"
  },
  {
    "url": "moreAWeek/week5.html",
    "revision": "44b9d49e0882941dabc517ad5af2ce93"
  },
  {
    "url": "moreAWeek/week6.html",
    "revision": "7212b3651f2f49b1bf129d19459d0f9d"
  },
  {
    "url": "moreAWeek/week7.html",
    "revision": "6020bdb31d65b84688aeee1bda70faea"
  },
  {
    "url": "moreAWeek/week8.html",
    "revision": "7ad58de3e074e424ca31f1a4e97f46e0"
  },
  {
    "url": "moreAWeek/week9.html",
    "revision": "bb48ad1b50e4a1cfd8c2f4ee8368da53"
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
    "revision": "2893921bdae796861e57c9c4e1ce9432"
  },
  {
    "url": "timeline/index.html",
    "revision": "e3c3b185125a928f18028aa8d4d3a390"
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
