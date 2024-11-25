'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9879f602d2c970c5f57aeaa497bbf337",
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
".git/index": "37a958b989c1e906e47d50aa9eb0e76d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "553890872be6723e55bcc0dc549e9aee",
".git/logs/refs/heads/main": "513e76765b2057d2625e14f98bf89b47",
".git/logs/refs/remotes/origin/main": "ce54c0a3174b07b460dc722d5c3238b7",
".git/objects/00/5a0730dc9c7fd9bca5e12419ce51ed9717954e": "512ece794d9f70c1b6925288c6d3ae7e",
".git/objects/02/ffd5b9dd277053f30f1fa17ec6d4a60ef042fa": "44575981b9f7277e353f2b1b5722a8b6",
".git/objects/04/25e765daf8c7c814a2f15b2136c70e1876c703": "f00b22525fd171f19e7cf63455c99eb9",
".git/objects/05/20203019d3881c7d4b2618232998aa3de41351": "2975387d0e55cad260bf9a29f98e8647",
".git/objects/05/2ff9548820b5b641ebb36f882175de993616e6": "d4a3a59e3bb90c54b89cf76cd3edcb10",
".git/objects/05/4a1309f2e4eeefa3c4af470424b73e748b35b2": "12ae01675f5e58d950803cc203f322c4",
".git/objects/07/0e897f3d7a70463919d3349474c9a039bd9a27": "8f582c40cf8f1760b60616d76237c22d",
".git/objects/0c/7deb8d35999d57613e43f3f83adb3bb228aae1": "7828eff13b40c346f80261a5d56a7e2d",
".git/objects/0d/56dcd31648fc6b3772d3ee1fa5c82598433441": "2074b1d337d404153ece5fc44821ca56",
".git/objects/0e/4d959fac20f99ce9126bfd9a930752c421e831": "0f9a095440b4432aed7ca605c69e3b37",
".git/objects/0e/8866ac9bb821fe892efff9cf96d819a12813ff": "658a18e024d6b57c30a42e8ce373fb50",
".git/objects/0f/9bad0cb0f22eabdc88f0fb796191380980efe3": "932738cc891c40179f36299bca1cce83",
".git/objects/0f/a22e6581400393426a3752aa22ba3631ff6a54": "adca70252b1017cdea0f8a8ecee74df9",
".git/objects/10/ca4af2e3f937322d02656117cd6f6bfec9b809": "dbea6ff2cc7a58cba22713fbfc5f2c28",
".git/objects/12/51b75d9c98c32c4a13f35fdd28b63abc9881c3": "4b6025d04f897c57629f965236033d4c",
".git/objects/12/e76d1629230288e030db431cac6a8fad79b3c2": "12d45b19f363349042dbdbdebb7f43b7",
".git/objects/13/09cc2c8dff4fa28ee9cb49a832d8e86f8fc647": "864acb2f4dc4e0e6db13107efecf3ece",
".git/objects/14/178ba6b4020c97b421d4b8cc2f2687e9e71063": "293e5ac94d5754f8160beff0512e8540",
".git/objects/15/d98bf1593fba4a55b5fcaa70180ef08733c626": "6267efdb3b22d61e53e04b4ebba4f710",
".git/objects/16/d839422de3899b533f8515df779847387ab5bb": "bd8f574e2b90dcaab2fc5f0eafb1bd25",
".git/objects/18/fabab7a0d4e3293b86c4559fb6fa1f9552c145": "49519fd5e4b2eed8bbb0cd10dc24b39f",
".git/objects/1b/bb3b709569850ebebc40085483c586791dd245": "26ded43b9bae6f09fadcf5c75bf0e498",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/4f9cbeb55d930c266878aea1c3a288070c40a1": "7b92756b3448088b1522abab3f1af79d",
".git/objects/20/d5fb7b89149e1b000f58f4aaae6c189653bb5e": "55a65223444c8214f2b746a2beb9334e",
".git/objects/23/0c061b2c73ddd44fdda40cda0d7795a55cff62": "0c333cd83fd57cccef3fc1d557045aca",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/ae3f6644879239958d1944192c8d1c860644d9": "d14eb4d32e9037337e71f906aac07f1e",
".git/objects/27/d3b1c3b1a3503e049ebdefaf678f0c8707e97a": "ef807ef81f607fe7979504ef576adf84",
".git/objects/2c/4b5cc7bded395fea3e75f0f3dbb5432cb2f155": "34c557d7068467353b754df75df51326",
".git/objects/35/3ac386e8054a26cd174f74fd7083117b8d95f5": "5bf2827842b07abca42904c2f86b4df9",
".git/objects/37/de166428fe58178e4fa10a2085ea5d31536fef": "1d1ed1e0740a0c2b35dfdfbfb5d90bcc",
".git/objects/3a/1eac89a9520ebae1720c59203ddef00bce4821": "9e1d17f6bc025a1ef84239a9126989be",
".git/objects/45/547f7c048de2e5beb1977a2fdb376aca8ff069": "68b775f3ddc14d45a91099658e0cce0d",
".git/objects/45/e3342425200c02ba1091ee1ac2252d0e2719b4": "0c4d5ac47db7ea1b4d880337bbffd322",
".git/objects/45/e465bf6adde57e20e0eb1c25566a773fa36d11": "3316ce447a8bf9aa9cad6b39f90271fa",
".git/objects/46/81a8cb977ec7deb701ab9d66a184b9360969ac": "ed9e736844eb200f7777ba4f1222850c",
".git/objects/46/a6bbc9aa3e40c59e1cad489c1d7fd121821fe7": "e1edbcfc68d954af09d4aade1ec4a5ff",
".git/objects/48/1f126934809aade6617c316f6385931d10bd1d": "83fb4980f4465373cf57b38b0fb42550",
".git/objects/4a/233873ec4d2e439d446fa13a97814902e5ae51": "c6af715fdb2a03c179fd6d1d1d77f02a",
".git/objects/4a/bdcfab28b31ad3cd450955e5ce094c2a5815d8": "585d083a6d2c839f02048ae414627bf1",
".git/objects/4a/c4315d903a89f1afaa0fccb54e0cc3c17b1505": "ec03b9fc76ff7b36325772694dcadd8c",
".git/objects/4e/5aafbd70239e4cd9bce2f14d5c8c14954964ec": "c4e0194de6f983bb2150271ce9b93bec",
".git/objects/4e/709a2206cb5fd29021eff72e489b38ef31462c": "be7f7812d76c5b51d9f8f739962033f0",
".git/objects/55/590d6cb9c35af18d300e67895e86d0f61b54cb": "8342b55ae17d61d286559a6f1a1c6e16",
".git/objects/57/1d2231a30f134f2defd62db10bf28a0fa877ea": "d6e5111b6c6f8de97d1ae37647f9867a",
".git/objects/58/e5a70d9a479c58d94a2f921e61df48ec16b7d3": "8f9e9401793d03a9d9afa11b50a0e95a",
".git/objects/5a/2d50fbd3f77ab29f4632829d6a1849c9140ac2": "247540c059e1cef8c44c48c15652e969",
".git/objects/5c/0b15a1aef5a265fce072949872d2c64cc1af50": "81b45a588f6949b81fc6db217a93eca8",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5e/dc11f8ed203b3582316a892da63baa0b9808a9": "dd3d100a27cf6a41445ff40f85236849",
".git/objects/61/c63ad1dddaba6a904b5d8688592e68799c7bbe": "8f7e7e1143f8da16e4747a35f8a4fbcf",
".git/objects/64/5eb0392b5890c51ade61479d249d52b9a32776": "ee75ac3694a9cd25ca2b84a8561c3f0f",
".git/objects/65/7c8013eeedbd397f63ee2af1e615acc42693d5": "d4169ee941d055873ed917417bd8411c",
".git/objects/67/c59845970d63c9c9cbaad724c14cfc0c267f96": "9e29af622bef8c352c8ec82b0abcd3bc",
".git/objects/6b/ad6c415a3cad3ce174a630ea55a878bf61d3e1": "380bb51c8e06f29a77c30fa09b7ef8ed",
".git/objects/6d/250545e21f5ff23e679992ae3431c16a4be15a": "1f8e9307452046e49d80d559c96db737",
".git/objects/6f/f707ac3b5dcfe2ed331152e730362735724ea0": "8778a3030861f0ffa5f07e88173bf5f7",
".git/objects/73/47227cc97e66d8cfc3ae5c030f5a1fa3a5ea8c": "6fe0475641be5ce09dc6f299b6a47d3d",
".git/objects/79/7f194c4e652212f403c33258db581a9ad59687": "001751d3b3106255d1905026c9d396bc",
".git/objects/7a/ff61b02199c1a35f1552461b5946771155747b": "2a89e9f97d07abe5ca9ee0109174413f",
".git/objects/7f/eb15b683c7cb0777f926ab2f3e823a51ee8386": "110f8db1c543a89e7c59183a588dff57",
".git/objects/80/ad8714932e8e0ef88840c0d94ce73e35bd17cc": "c61b7fa7e1d8b1bf7f9667f14cf55ecf",
".git/objects/81/7629df6bd71eecaa490e1878f8ed1295b61d32": "dcb8a3cbceb46aeabacc06f2a6f3a167",
".git/objects/84/422e03ded5ba78e64d7fb661c69c27fdd5f62c": "08f1ec91d463d17893dc6b100116e026",
".git/objects/84/f49ce84c083cbc2c353362503b7b08e58814c7": "dd9883836ecbeeb726426dfc198781fd",
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
".git/objects/ae/efeb147cb74379c5c8c4ee10ee0a92e22aa9f6": "4961206f71e574bc7930b2dcfc5833ec",
".git/objects/b0/74adbcb601e8e7d23786ab8cb02b28cb9f2cab": "413d95fa396716f213e5dbba6b79a31c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c9c668c6ae308c984876ddc5472aae53a8acc": "16735cf53d50efa87ec6b1185b9ab8d2",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/e1979eafc5a781d5741986bb464822cf5f5841": "a4d226d30b35f16ddb8b787724efc8f7",
".git/objects/c2/b232087d2bb0a133f4f974660b976a45d826e4": "7a6594c149cac04e9c1baa7d354b05c8",
".git/objects/c5/e1c70bff46db37f10f065b8aa50d7879203e3b": "701b6a8b95eb48324ecf2225640b9833",
".git/objects/c6/33c172f51a15601137d54e4f8f5025a1d6f790": "7353dd882599012a077dfee77c5b163c",
".git/objects/c6/6544fa9710b469515d6c669182e114f3a58ca3": "f4fd98b496b695bcc5a7551319a7e5c5",
".git/objects/cb/92086ecbf0897549e7f700e35d3fea407facce": "f1d634ae20aa08c010306a2a3ea4b7e0",
".git/objects/cc/ef175bb1d4979f2b39cc594553255f99f6e9dc": "85e206ab9de0c867b023a63b62ad92c2",
".git/objects/cd/a8d4b77099ba18f0bc932b8213dcfb1b1da754": "ed819568f6148cb4a49b62af3fded439",
".git/objects/cd/e23608f497975a1f372a477027e173d3f1eb67": "d820fab2fd5fdc1da8300c43cd1c9a57",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d1/8b15ebc1b9f4cd91131cfc2defec53ae4f9214": "b05ac8038dc8f9464cbed14338911727",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/da/a11ff3d332632ee976cb6fdbd428a6bd506473": "8ce976283503ac90b7c87c17c7daad5e",
".git/objects/da/b4fc8420690b87b1b9d440ada0936513330559": "20b96fe16df5c5808fb5b43ae59aa516",
".git/objects/db/f2e177341a215197fe89bc9cc68f1e57de224f": "5a2d40d7f2479493820ce50973c10ba0",
".git/objects/de/2a1678ce05a835ed11b2c10d9395eb7a571ffb": "24fedeaabad0a7ed1949d0dafa35d8a6",
".git/objects/e0/1c06b7f2c2be2089f7cc8ba069519bf71e1a36": "8e5fe792ededf3db9436552e3f193c28",
".git/objects/e3/8671d00d0ead9f16b619f56447aae7729b1365": "0298ee460290082d9a42e185c864f6a4",
".git/objects/e5/f7202dd78f7716accd98290d9c90173c634d63": "e5956ca51c56bee5c6fe2e559b089d97",
".git/objects/ea/c3436a8d26bb542fea27c1d7bd6fe8a8082da1": "20c2915622077416f9a5c28a7742491e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/e898cef282dc82378503dd39b9aa8405f69a37": "7357d16c81168db402f8455e010266a5",
".git/objects/f6/194b6204102536236f4a2c44d7913908650b6f": "94f7b6a237138bcde213fb5e0919b4d1",
".git/objects/f9/77ee4af6c089e53e1cb613ff3717b21e17b87e": "067f6b515dd15efd9e76b6413733bb6b",
".git/objects/fd/a054c8c322b4e97cdc1f7350ad79671166c7a6": "7fa73d78320d64519fb3e9605e554379",
".git/refs/heads/main": "5f5e9358eed047d6bd2ae8b24390f72b",
".git/refs/remotes/origin/main": "5f5e9358eed047d6bd2ae8b24390f72b",
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
"assets/asset/image/img10.png": "251a6a291219c8f30a3840e79339bf8a",
"assets/asset/image/img11.png": "a77df6a862213209e87021e67ab7cb73",
"assets/asset/image/img12.png": "a2b22d27149bdcea244fa697cab6dffc",
"assets/asset/image/img13.png": "b0cce91468452a0f27e4fb12c1541c94",
"assets/asset/image/img14.png": "4b41d9d85b16178237030ef4d1d38d11",
"assets/asset/image/img2.png": "af0f1ae5e5211fcc11411dd02d761284",
"assets/asset/image/img3.png": "4f774d09c65d73691c257156b62c9b67",
"assets/asset/image/img4.png": "77846604b00582708c13111ebb62d46b",
"assets/asset/image/img5.png": "418cbe42962af2a7e69ce8c34f8dfc76",
"assets/asset/image/img6.png": "c5a23d3404d10468a43b442121d97d6f",
"assets/asset/image/img7.png": "9dc99fa1aa437cc207a162cc5054909b",
"assets/asset/image/img8.png": "2ec2805407642e38e201af65a714d407",
"assets/asset/image/img9.png": "abf60a6e175738d5712a5cf2286d3fa2",
"assets/asset/image/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/asset/image/love.png": "45a15d38ea1a17de706129ec669537c7",
"assets/asset/image/pink_bg.png": "931532dd7b0373ca4ec888a46dbcb3e5",
"assets/asset/image/support.png": "ec2ec93886f6dfa5370f1a8cffaeaae4",
"assets/asset/image/telegram.png": "d28cb5ebc39b6fef79a5367b5bb987a6",
"assets/asset/image/tool.png": "eb4dde35aae9ce452c766711c41f4926",
"assets/asset/image/twitter.png": "3e8e7ee8666a9f4e2946f39ff2f806e3",
"assets/asset/image/youtube.png": "68aebef664bff654eee1d3f9322351d8",
"assets/AssetManifest.bin": "896bbe7063c0c80ce12964448a501e37",
"assets/AssetManifest.bin.json": "6261c22bcf22ec562671a53c24305afb",
"assets/AssetManifest.json": "8ee5e6bcf4d04031b83373b9d6092bad",
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
"flutter_bootstrap.js": "d729cba0bd608b0ebeef19824213ab95",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "80ff520dc37041a93901f13db2c44fe3",
"/": "80ff520dc37041a93901f13db2c44fe3",
"main.dart.js": "090e25702f7572f15487e5165a74b289",
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
