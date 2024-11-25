'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "f0aac80bc5f73181331b0ae834cd211f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15be82d5175273836bfd792f5f0e191e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c6e99a73099ae8f154623ef8574b50fa",
".git/logs/refs/heads/main": "56528d562d5bbc9f6df0a84883c5ff85",
".git/logs/refs/remotes/origin/main": "194d1e3c2e425ae69ffe4a76ee3b7df8",
".git/objects/00/5a0730dc9c7fd9bca5e12419ce51ed9717954e": "512ece794d9f70c1b6925288c6d3ae7e",
".git/objects/02/ffd5b9dd277053f30f1fa17ec6d4a60ef042fa": "44575981b9f7277e353f2b1b5722a8b6",
".git/objects/05/2ff9548820b5b641ebb36f882175de993616e6": "d4a3a59e3bb90c54b89cf76cd3edcb10",
".git/objects/05/4a1309f2e4eeefa3c4af470424b73e748b35b2": "12ae01675f5e58d950803cc203f322c4",
".git/objects/07/0e897f3d7a70463919d3349474c9a039bd9a27": "8f582c40cf8f1760b60616d76237c22d",
".git/objects/0c/7deb8d35999d57613e43f3f83adb3bb228aae1": "7828eff13b40c346f80261a5d56a7e2d",
".git/objects/0e/8866ac9bb821fe892efff9cf96d819a12813ff": "658a18e024d6b57c30a42e8ce373fb50",
".git/objects/0f/9bad0cb0f22eabdc88f0fb796191380980efe3": "932738cc891c40179f36299bca1cce83",
".git/objects/0f/a22e6581400393426a3752aa22ba3631ff6a54": "adca70252b1017cdea0f8a8ecee74df9",
".git/objects/10/ca4af2e3f937322d02656117cd6f6bfec9b809": "dbea6ff2cc7a58cba22713fbfc5f2c28",
".git/objects/12/51b75d9c98c32c4a13f35fdd28b63abc9881c3": "4b6025d04f897c57629f965236033d4c",
".git/objects/12/e76d1629230288e030db431cac6a8fad79b3c2": "12d45b19f363349042dbdbdebb7f43b7",
".git/objects/14/178ba6b4020c97b421d4b8cc2f2687e9e71063": "293e5ac94d5754f8160beff0512e8540",
".git/objects/16/d839422de3899b533f8515df779847387ab5bb": "bd8f574e2b90dcaab2fc5f0eafb1bd25",
".git/objects/18/fabab7a0d4e3293b86c4559fb6fa1f9552c145": "49519fd5e4b2eed8bbb0cd10dc24b39f",
".git/objects/1b/bb3b709569850ebebc40085483c586791dd245": "26ded43b9bae6f09fadcf5c75bf0e498",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/d5fb7b89149e1b000f58f4aaae6c189653bb5e": "55a65223444c8214f2b746a2beb9334e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/ae3f6644879239958d1944192c8d1c860644d9": "d14eb4d32e9037337e71f906aac07f1e",
".git/objects/27/d3b1c3b1a3503e049ebdefaf678f0c8707e97a": "ef807ef81f607fe7979504ef576adf84",
".git/objects/2c/4b5cc7bded395fea3e75f0f3dbb5432cb2f155": "34c557d7068467353b754df75df51326",
".git/objects/37/de166428fe58178e4fa10a2085ea5d31536fef": "1d1ed1e0740a0c2b35dfdfbfb5d90bcc",
".git/objects/3a/1eac89a9520ebae1720c59203ddef00bce4821": "9e1d17f6bc025a1ef84239a9126989be",
".git/objects/45/547f7c048de2e5beb1977a2fdb376aca8ff069": "68b775f3ddc14d45a91099658e0cce0d",
".git/objects/45/e465bf6adde57e20e0eb1c25566a773fa36d11": "3316ce447a8bf9aa9cad6b39f90271fa",
".git/objects/46/a6bbc9aa3e40c59e1cad489c1d7fd121821fe7": "e1edbcfc68d954af09d4aade1ec4a5ff",
".git/objects/4a/233873ec4d2e439d446fa13a97814902e5ae51": "c6af715fdb2a03c179fd6d1d1d77f02a",
".git/objects/4e/5aafbd70239e4cd9bce2f14d5c8c14954964ec": "c4e0194de6f983bb2150271ce9b93bec",
".git/objects/4e/709a2206cb5fd29021eff72e489b38ef31462c": "be7f7812d76c5b51d9f8f739962033f0",
".git/objects/57/1d2231a30f134f2defd62db10bf28a0fa877ea": "d6e5111b6c6f8de97d1ae37647f9867a",
".git/objects/5c/0b15a1aef5a265fce072949872d2c64cc1af50": "81b45a588f6949b81fc6db217a93eca8",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/61/c63ad1dddaba6a904b5d8688592e68799c7bbe": "8f7e7e1143f8da16e4747a35f8a4fbcf",
".git/objects/67/c59845970d63c9c9cbaad724c14cfc0c267f96": "9e29af622bef8c352c8ec82b0abcd3bc",
".git/objects/6d/250545e21f5ff23e679992ae3431c16a4be15a": "1f8e9307452046e49d80d559c96db737",
".git/objects/6f/f707ac3b5dcfe2ed331152e730362735724ea0": "8778a3030861f0ffa5f07e88173bf5f7",
".git/objects/7a/ff61b02199c1a35f1552461b5946771155747b": "2a89e9f97d07abe5ca9ee0109174413f",
".git/objects/80/ad8714932e8e0ef88840c0d94ce73e35bd17cc": "c61b7fa7e1d8b1bf7f9667f14cf55ecf",
".git/objects/84/422e03ded5ba78e64d7fb661c69c27fdd5f62c": "08f1ec91d463d17893dc6b100116e026",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fc675c9ac0218ac8c13198c9a0cc0fa38658b8": "de9c9ae60ae207528652d7324c5a0d70",
".git/objects/92/33a0d8155d8b85836a4522708ce0d2e9868b71": "402c7ceba2dafb0e0ab87af2c41923e8",
".git/objects/92/9f8de9f2a65c7ed1567c0a97d1432d5e374ebd": "7909b40122395a43d6e478f2236c4ad4",
".git/objects/93/0cb9f627d7fec76af18598f74f62dddb9dfde8": "03a2b90115697617af1b3dc925246ce7",
".git/objects/95/06cb5138cdf98090f4ff7276cf8c35e332d526": "2cc345e04df85f96f26663cc94cbb387",
".git/objects/97/022006ac4c9b5e6d27e90b90d9e328b08bf304": "b4fc35176303de530b9af48e7bb9c087",
".git/objects/97/3384a96182d5b47bf1681f98b7ffca32ca1056": "ef5a4aa45838a2e7848b703b29cc1b28",
".git/objects/97/fd8d08c0781eb7ac2a1f43723a57bba8523d80": "460ab4ea162f0dd556f4bf5d3d5c4589",
".git/objects/98/c6006ab384e866c012ab79a68830d536156e68": "f4718fc30505e69e0e3216b10743dd3c",
".git/objects/9d/06f44b14969c3bae9979cd100817c7124876cc": "7d1dc79a6238533b6daf6f4141ba52f5",
".git/objects/9d/2f530417aceead3e1b02cb5242822243be4f28": "83aeb8330cfecfc6583983e1ad7d488a",
".git/objects/9e/9c944ecc64536b6c9d8c54ab5d2455aacca61a": "0d9ebf683a8a8ba7efa599ebf67d4e9b",
".git/objects/9e/afc9ca237704cd9a5b1de061eabc9e7b3c3d30": "64defce0082ea70e0a342c0f3b47be69",
".git/objects/9f/1e80bd916f7d1425cc7925bd8421f9a3740c96": "c0587f1867c5ae074d3711512c39ff2a",
".git/objects/9f/94d050d500df30d1f1426a1100fa9892d32fa6": "3b8a3082c75ae6edd5a937970aeb14e5",
".git/objects/a1/a6c8e345aca76b79d2c28d20b9d434538e83bc": "095eeb07007d76c3e6ed52953a47a854",
".git/objects/a3/1d267db91957e0978df532609af5b44ab40c3b": "5e3e88a6419827785cc8846723dd2051",
".git/objects/a3/82af69ce90665cce6bf60455b66f8a2a4520d3": "a8c120812e895c552cbabebcc1d14af5",
".git/objects/a8/3835e81643b7dc0ba89853f219751fb1011887": "442c0d3c77df44fe20623ca5c91458fe",
".git/objects/a8/9b711afaedec3fde31bf63c4a46a606677de23": "f5b63d2d0fa4b47fc73369a38fbde85c",
".git/objects/a8/c600846d9775e917887a870044e14fed504a34": "7e9588aac816dbc15291f1c4e30fdbb1",
".git/objects/ab/e50f2ebd28a280f837e0dd6f38d485ac62b6a1": "227244ce51f464e12eb7402f0ae9f77e",
".git/objects/b0/74adbcb601e8e7d23786ab8cb02b28cb9f2cab": "413d95fa396716f213e5dbba6b79a31c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c9c668c6ae308c984876ddc5472aae53a8acc": "16735cf53d50efa87ec6b1185b9ab8d2",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/e1979eafc5a781d5741986bb464822cf5f5841": "a4d226d30b35f16ddb8b787724efc8f7",
".git/objects/c5/e1c70bff46db37f10f065b8aa50d7879203e3b": "701b6a8b95eb48324ecf2225640b9833",
".git/objects/c6/6544fa9710b469515d6c669182e114f3a58ca3": "f4fd98b496b695bcc5a7551319a7e5c5",
".git/objects/cb/92086ecbf0897549e7f700e35d3fea407facce": "f1d634ae20aa08c010306a2a3ea4b7e0",
".git/objects/cc/ef175bb1d4979f2b39cc594553255f99f6e9dc": "85e206ab9de0c867b023a63b62ad92c2",
".git/objects/cd/e23608f497975a1f372a477027e173d3f1eb67": "d820fab2fd5fdc1da8300c43cd1c9a57",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d1/8b15ebc1b9f4cd91131cfc2defec53ae4f9214": "b05ac8038dc8f9464cbed14338911727",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/db/f2e177341a215197fe89bc9cc68f1e57de224f": "5a2d40d7f2479493820ce50973c10ba0",
".git/objects/de/2a1678ce05a835ed11b2c10d9395eb7a571ffb": "24fedeaabad0a7ed1949d0dafa35d8a6",
".git/objects/e3/8671d00d0ead9f16b619f56447aae7729b1365": "0298ee460290082d9a42e185c864f6a4",
".git/objects/ea/c3436a8d26bb542fea27c1d7bd6fe8a8082da1": "20c2915622077416f9a5c28a7742491e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/194b6204102536236f4a2c44d7913908650b6f": "94f7b6a237138bcde213fb5e0919b4d1",
".git/refs/heads/main": "27c5cdc6ee292b63bc0dca6c3b1131da",
".git/refs/remotes/origin/main": "27c5cdc6ee292b63bc0dca6c3b1131da",
"assets/asset/image/bg1.png": "54f1320cd3b846aa788c5625b092c7da",
"assets/asset/image/bg2.png": "82fab8e76094b6a5aa252b88e7c55ece",
"assets/asset/image/bottom_image.png": "12d44646fafdf3773e1adc6a4bb40ec7",
"assets/asset/image/bottom_image2.png": "9f9b2aea4f3e5a8a4f0cefbe70ac3c82",
"assets/asset/image/bottom_image3.png": "78ea000e3b987399443ce0c64e5c6bf4",
"assets/asset/image/button1.png": "cd30656581c878de792abaa9988c8de7",
"assets/asset/image/cheelee_logo.png": "aa523476c60cd104c35dcfb6d689086e",
"assets/asset/image/cheelee_video.mp4": "ea924a99548c3635a8430486c65374b6",
"assets/asset/image/coin_cheelee.png": "199cefc6623c71a2493cf852da6a3ca4",
"assets/asset/image/discord.png": "328ab3cd65ad5c0882e9cd49e928be44",
"assets/asset/image/doller.png": "e8239467c3212cf707e42e2f0406b53a",
"assets/asset/image/drop.png": "61bbcbaf21b700aa9a8721e5460607ae",
"assets/asset/image/drop2.png": "5b8e717c6a52e78dde686f49d4a8d6c7",
"assets/asset/image/drop_bg.png": "3ae81a884768d25d40c880e5825e7a29",
"assets/asset/image/fire.png": "aa5ede60bd26ea411032a766fc96551b",
"assets/asset/image/flame.png": "5fb695a767c1de4c7c96871c9bc03347",
"assets/asset/image/googals.png": "f9e433b6ca4a2331114c0681a56c2980",
"assets/asset/image/hand.png": "12a4dd7501a11659b9cafce46f8db543",
"assets/asset/image/hand2.png": "3cca4c0f780b93afd80dc57855ecd0df",
"assets/asset/image/img1.png": "d8f9333122df767d5849ef16fb64d163",
"assets/asset/image/img2.png": "af0f1ae5e5211fcc11411dd02d761284",
"assets/asset/image/img3.png": "4f774d09c65d73691c257156b62c9b67",
"assets/asset/image/img4.png": "77846604b00582708c13111ebb62d46b",
"assets/asset/image/img5.png": "418cbe42962af2a7e69ce8c34f8dfc76",
"assets/asset/image/img6.png": "c5a23d3404d10468a43b442121d97d6f",
"assets/asset/image/img7.png": "9dc99fa1aa437cc207a162cc5054909b",
"assets/asset/image/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/asset/image/love.png": "45a15d38ea1a17de706129ec669537c7",
"assets/asset/image/pink_bg.png": "931532dd7b0373ca4ec888a46dbcb3e5",
"assets/asset/image/support.png": "ec2ec93886f6dfa5370f1a8cffaeaae4",
"assets/asset/image/telegram.png": "d28cb5ebc39b6fef79a5367b5bb987a6",
"assets/asset/image/tool.png": "eb4dde35aae9ce452c766711c41f4926",
"assets/asset/image/twitter.png": "3e8e7ee8666a9f4e2946f39ff2f806e3",
"assets/asset/image/youtube.png": "68aebef664bff654eee1d3f9322351d8",
"assets/AssetManifest.bin": "26c3333ffcde6d75cc29382709aceedc",
"assets/AssetManifest.bin.json": "c6a7f47455bad0b9d69cc6669dbe46b7",
"assets/AssetManifest.json": "455fe5bcda37989b3ae052019f2389b8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "66e77b5611d7e94c0c14ed18c065aead",
"assets/NOTICES": "9fc3f58cd06fafecba0579dd84f0948a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "48aa35141658b3cfd78c29d5e77484ce",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "bb7854ddbcaa2e58e5bdef66b58d4b47",
"canvaskit/canvaskit.wasm": "6134e7617dab3bf54500b0a2d94fe17a",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "f23279209989f44e047062055effde63",
"canvaskit/chromium/canvaskit.wasm": "ad6f889daae572b3fd08afc483572ecd",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "dc16cade950cfed532b8c29e0044fe42",
"canvaskit/skwasm.wasm": "aff2178f40209a9841d8d1b47a6e6ec7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "40d1e6de27f37c6eaa337293e154b983",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "80ff520dc37041a93901f13db2c44fe3",
"/": "80ff520dc37041a93901f13db2c44fe3",
"main.dart.js": "091b4347e371d63d327efd8d4bd83837",
"manifest.json": "f675d0ee3c8dfc5f296b32d6ab7936ff",
"version.json": "8be8a0be926e36a2e18f4ec22692abd1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
