'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f7fe500cbb418d738aa3ac75fedfb0de",
"index.html": "668210247749d886883e9c6665126885",
"/": "668210247749d886883e9c6665126885",
"main.dart.js": "4c80680a98553bedfb43def964f4c680",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d6683f9d451576853776e1e171510b37",
"assets/AssetManifest.json": "43af3994350a38afd188da75d2ee54f1",
"assets/NOTICES": "b8df27703c509741216c06c2b66f76ba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/custom_utils/assets/images/msg_sort_archived.png": "5a3676a6371a1c654cf73b4bd76d094b",
"assets/packages/custom_utils/assets/images/splashLogo.png": "27de492321ab8f6d45e83f428febf2db",
"assets/packages/custom_utils/assets/images/baaralogo.png": "a1daa18e2bd64d853f87f9a8d46f08c6",
"assets/packages/custom_utils/assets/images/writing&translation.png": "492ca735fe5c2a5c487ee92b4244cc5f",
"assets/packages/custom_utils/assets/images/dashboard.png": "72df6b4d4a856b3c959b1876138b7c75",
"assets/packages/custom_utils/assets/images/bell.png": "c96b3bbe1972508b7e13cca1907f069a",
"assets/packages/custom_utils/assets/images/serviceImage.png": "0971bdb73d7c6fb4db57075d1e039656",
"assets/packages/custom_utils/assets/images/retry.png": "4024be384857b644e50c906d84fedaaf",
"assets/packages/custom_utils/assets/images/flat.png": "704fbec21f35ef77e5fecede8551f20a",
"assets/packages/custom_utils/assets/images/mail.png": "cce3dd82a927c00641189ec3f6dc29f8",
"assets/packages/custom_utils/assets/images/adverdising.png": "89ce929d351588ee486262f6ac538cd9",
"assets/packages/custom_utils/assets/images/icon_send.png": "fd109e43e728d5e1c2be62c7ba16b5b0",
"assets/packages/custom_utils/assets/images/settings.png": "e47b6ef9427dedad66671671fc7e6fa0",
"assets/packages/custom_utils/assets/images/no_connection.png": "6186e75a41c4fe16900e65daa51089ef",
"assets/packages/custom_utils/assets/images/graphic.png": "d342e0ff4a69fb4676c64ac71668fe97",
"assets/packages/custom_utils/assets/images/fb.png": "866d09b3dbf2796ef1eff7c32f4ce2b0",
"assets/packages/custom_utils/assets/images/videoEditing.jpg": "bdfd23998dfdb46ba87b54206db4f122",
"assets/packages/custom_utils/assets/images/videoediting.png": "728942654737b28b3689268e78b3176c",
"assets/packages/custom_utils/assets/images/music.png": "254f2187bd8db67f994c3f7ae4ae678e",
"assets/packages/custom_utils/assets/images/serviceImagNoProfile.png": "5db64282f0d43561f5afee2e7c55e19e",
"assets/packages/custom_utils/assets/images/msg_sort_unread.png": "6e6515d4d39855f84faa65809c0f3575",
"assets/packages/custom_utils/assets/images/visa.png": "5aa4744b2c61dcd17098eccd57681a1d",
"assets/packages/custom_utils/assets/images/heart_empty.png": "8414c4efe1d6474e179369d9387ad3af",
"assets/packages/custom_utils/assets/images/home.png": "f42937630354707c5224e37ada378ba6",
"assets/packages/custom_utils/assets/images/nothing.png": "1d6678c3142ba367861fd1acfe526bee",
"assets/packages/custom_utils/assets/images/msg_sort_starred.png": "3aaa7d611559d51e209cbbe138fd10d2",
"assets/packages/custom_utils/assets/images/baraalogo.png": "0c561f591813e2e45bf723778e889a20",
"assets/packages/custom_utils/assets/images/sms_sort.png": "9b213ea4a75bf24454ac9b8140891e7a",
"assets/packages/custom_utils/assets/images/search.png": "a76db41402099787340f8c227b7130c0",
"assets/packages/custom_utils/assets/images/heart.png": "da2eedf868c013a769b9accfd167c539",
"assets/packages/custom_utils/assets/images/msg_sort_all.png": "f9caac0ba720abc4538111bf28073593",
"assets/packages/custom_utils/assets/images/cement.png": "4e3fb20b31b8ffd6b38f949358117518",
"assets/packages/custom_utils/assets/images/block.png": "512f39e2fce6c729debcf4fd39b8b095",
"assets/packages/custom_utils/assets/images/Presentation1.png": "27439b10993726ca05d4c359dba55119",
"assets/packages/custom_utils/assets/images/Presentation1.jpg": "bec0c03bc04ea2b266b6192aaa8427c9",
"assets/packages/custom_utils/assets/images/serviceSearchImage.png": "b1bb718a7d7315f77eee5b79467bbf56",
"assets/packages/custom_utils/assets/images/samii.png": "74e0d4d8ae3b768d9471da390738a506",
"assets/packages/custom_utils/assets/images/logo.png": "5e164721050b6b5b7141ea8d92b18475",
"assets/packages/custom_utils/assets/images/messenger.png": "933b6717ca3a0b22d23c109adb3a05ac",
"assets/packages/custom_utils/assets/images/upload.png": "5f0c489f5fa4b07ca6807d99435386c7",
"assets/packages/custom_utils/assets/images/programingtech.png": "4c9912f30bfb2513cc25906677533517",
"assets/packages/custom_utils/assets/images/user_placeholder.png": "eb2b82c57dda81c9aa7546a27b8399c1",
"assets/packages/custom_utils/assets/images/graphic%2520pencilIcon.png": "74bb2f7355f8d592bc67d627c2e4e196",
"assets/packages/custom_utils/assets/images/menu_bottom.png": "79781f0c5825885f5b620b17019a0592",
"assets/packages/custom_utils/assets/images/sort.png": "26ccdc9b535d44daf093923f67756fea",
"assets/packages/custom_utils/assets/images/msg_sort_spam.png": "3799df90d0f84a447b73804912a30417",
"assets/packages/custom_utils/assets/images/share.png": "4147fae0d6a149a6833c84b8f48d661a",
"assets/packages/custom_utils/assets/images/profile.png": "1df2912641b5a68925811270ca3ec6c1",
"assets/packages/custom_utils/assets/images/mobicash.png": "98c343c2ff949733d333c25c6bfe3175",
"assets/packages/custom_utils/assets/images/detail.png": "7fa004f7b955b9fb5627f6245712805d",
"assets/packages/custom_utils/assets/images/edit.png": "859034e3ba2288284c0ec6b6ef7b7bd0",
"assets/packages/custom_utils/assets/images/icon_attachment.png": "43cc01ad884cfebe0e0adc8bbcdafc85",
"assets/packages/custom_utils/assets/images/star.png": "1fc9e512e21295c8c2b50a9467f44a62",
"assets/packages/custom_utils/assets/images/icon_quick_response.png": "9e38295700cae920caaa9ad21389b925",
"assets/packages/custom_utils/assets/images/digitalmarketing.png": "da00866983e4048b9b5dc848ef60117d",
"assets/packages/custom_utils/assets/images/google.png": "2cf9dd08a44b1a02c663beb3ad87509c",
"assets/packages/custom_utils/assets/images/camera.png": "3fc151cdd2d50a9fc44e3f392a3edaa5",
"assets/packages/custom_utils/assets/images/paypal.png": "13278662ddb9a7dee710521e6fee1ae4",
"assets/packages/custom_utils/assets/images/message.png": "3fb54d7156085a107dfb44701996fa60",
"assets/packages/custom_utils/assets/images/serviceImageOrder.png": "8090cad654fffa07ab457c18ca087b99",
"assets/packages/custom_utils/assets/images/datails.png": "7fa004f7b955b9fb5627f6245712805d",
"assets/packages/custom_utils/assets/images/heart_filled.png": "d35363cd803cf315714b0a5d0215852c",
"assets/packages/custom_utils/assets/images/thumb.png": "6643f0a5e73a79114615a3bbca14b31b",
"assets/packages/custom_utils/assets/images/orangemoney.png": "c1ff590b7aaf17b8744a7568c7a03660",
"assets/packages/custom_utils/assets/images/appbarcontact.png": "7f0b461e35e113e88fb752f35d9b974d",
"assets/packages/custom_utils/assets/fonts/Outfit-Bold.ttf": "c878bcb88f0e62bf70bd3129efb099ae",
"assets/packages/custom_utils/assets/fonts/Outfit-Regular.ttf": "609f32a9f5174f9dc34afbb594badc55",
"assets/packages/custom_utils/assets/fonts/Outfit-Black.ttf": "95eaf998aa755c61268c640a6df87688",
"assets/packages/custom_utils/assets/fonts/Outfit-Thin.ttf": "901a45a5951182e6c1d254398d03e414",
"assets/packages/custom_utils/assets/fonts/Outfit-SemiBold.ttf": "797f35e5f8c1f582a065ecb14da1cfe8",
"assets/packages/custom_utils/assets/fonts/Outfit-ExtraLight.ttf": "ee91d37896c1b2955c4bb626fe6bd42d",
"assets/packages/custom_utils/assets/fonts/Outfit-ExtraBold.ttf": "50df0894bef852e5faa983e0a8ccf1a0",
"assets/packages/custom_utils/assets/fonts/Outfit-Medium.ttf": "8f4b1c029a4b4eeb5183ad7b893d5415",
"assets/packages/custom_utils/assets/fonts/Outfit-Light.ttf": "10993c5af9bb003fe6e0b4ff5ef0fca6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6e7ae4e2d6bea704720e53d178521779",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
