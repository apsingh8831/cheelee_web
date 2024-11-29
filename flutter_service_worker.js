'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "885f92ea1477a6690177792f5c8c1649",
".git/config": "f0aac80bc5f73181331b0ae834cd211f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a5171abc1f3655e265cad08c9a49c1e3",
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
".git/index": "d0e9573d664d1ab95492d302c43ab54e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "47a3f237f2841efc49c5a8b1c0333089",
".git/logs/refs/heads/main": "2fcf3421ca7093962987208755e5b300",
".git/logs/refs/remotes/origin/main": "d7bd214cd5a65d1317f47a247e14bac4",
".git/objects/00/5a0730dc9c7fd9bca5e12419ce51ed9717954e": "512ece794d9f70c1b6925288c6d3ae7e",
".git/objects/00/61de485960779772253d50434dcf7e7f7cac32": "bef1a29df130ffd3cb0e22da5c40e1af",
".git/objects/01/9bdf2de265958466abfc76fd44ea53132c3519": "66a7e354aa918c87dba9af57ca64ace6",
".git/objects/02/de42538e4d5d5e8965eccb45fd98c6866d6dd1": "43633b60fb292ea3dd30a40076d6abfd",
".git/objects/02/ffd5b9dd277053f30f1fa17ec6d4a60ef042fa": "44575981b9f7277e353f2b1b5722a8b6",
".git/objects/03/72a229a3db329a95e1dad9f65cbfd751ff0c8a": "24e0a7b876d681044ac4cf4ad2a7884e",
".git/objects/04/25e765daf8c7c814a2f15b2136c70e1876c703": "f00b22525fd171f19e7cf63455c99eb9",
".git/objects/04/f86dcb19a85ca64ed0bbe1ddf083bfd7d11c90": "11b86e950a8952e1aae67d3c656f0272",
".git/objects/05/20203019d3881c7d4b2618232998aa3de41351": "2975387d0e55cad260bf9a29f98e8647",
".git/objects/05/2ff9548820b5b641ebb36f882175de993616e6": "d4a3a59e3bb90c54b89cf76cd3edcb10",
".git/objects/05/4a1309f2e4eeefa3c4af470424b73e748b35b2": "12ae01675f5e58d950803cc203f322c4",
".git/objects/07/0e897f3d7a70463919d3349474c9a039bd9a27": "8f582c40cf8f1760b60616d76237c22d",
".git/objects/07/ac4a27bfd1cee8621358f8ccef53b00a3e99c9": "062352dcb5432f847aa040346ebcd72f",
".git/objects/08/4c697e0583e59043880c5c8ca6a408c3975290": "605b26f23f7575e3f45a5f6d0d07235c",
".git/objects/0a/56ef0e3b826103bae431824ce94ccdf375b124": "08c2247d8725bfc71262823545383234",
".git/objects/0a/e9dc45a75d63038eaa3c72e8a80d27f40a6911": "01343564a7b64328a239b0c3d2ecb6a4",
".git/objects/0c/776a41927412c09b66e0ca873885b74702deea": "ff53d9993b304fba54f68ec46825af96",
".git/objects/0c/7deb8d35999d57613e43f3f83adb3bb228aae1": "7828eff13b40c346f80261a5d56a7e2d",
".git/objects/0d/56dcd31648fc6b3772d3ee1fa5c82598433441": "2074b1d337d404153ece5fc44821ca56",
".git/objects/0e/4d959fac20f99ce9126bfd9a930752c421e831": "0f9a095440b4432aed7ca605c69e3b37",
".git/objects/0e/8866ac9bb821fe892efff9cf96d819a12813ff": "658a18e024d6b57c30a42e8ce373fb50",
".git/objects/0f/9bad0cb0f22eabdc88f0fb796191380980efe3": "932738cc891c40179f36299bca1cce83",
".git/objects/0f/a22e6581400393426a3752aa22ba3631ff6a54": "adca70252b1017cdea0f8a8ecee74df9",
".git/objects/10/ca4af2e3f937322d02656117cd6f6bfec9b809": "dbea6ff2cc7a58cba22713fbfc5f2c28",
".git/objects/11/84a2e35a498209eb6e73057e0466ab1d47d3b8": "4264f5b0a88dd99125c7154244037c48",
".git/objects/12/16745886d744ce4394a837200b1cfb5d5c4a17": "b6fd5309eabc23d1aaf7a86f2afe49af",
".git/objects/12/51b75d9c98c32c4a13f35fdd28b63abc9881c3": "4b6025d04f897c57629f965236033d4c",
".git/objects/12/e76d1629230288e030db431cac6a8fad79b3c2": "12d45b19f363349042dbdbdebb7f43b7",
".git/objects/13/09cc2c8dff4fa28ee9cb49a832d8e86f8fc647": "864acb2f4dc4e0e6db13107efecf3ece",
".git/objects/13/0e42ff636d96bc4873860f5d6b7cd302278586": "20d279d2569d4b8b75f0ce6f9deeaa3b",
".git/objects/14/178ba6b4020c97b421d4b8cc2f2687e9e71063": "293e5ac94d5754f8160beff0512e8540",
".git/objects/15/d98bf1593fba4a55b5fcaa70180ef08733c626": "6267efdb3b22d61e53e04b4ebba4f710",
".git/objects/16/d839422de3899b533f8515df779847387ab5bb": "bd8f574e2b90dcaab2fc5f0eafb1bd25",
".git/objects/18/fabab7a0d4e3293b86c4559fb6fa1f9552c145": "49519fd5e4b2eed8bbb0cd10dc24b39f",
".git/objects/1a/1bc78defd84293a24ba0bdcd9c7ca7542c0a37": "a3d21b0d06b79983f3916d85043a5f61",
".git/objects/1b/bb3b709569850ebebc40085483c586791dd245": "26ded43b9bae6f09fadcf5c75bf0e498",
".git/objects/1d/968b4064c58108ffc43d213f993ddd45f7a123": "18580f3f72f4c21871d1778250c374b9",
".git/objects/1d/d85dc002ecf3c6f2f02462b6e370e4d39df68b": "ade4313c8cae00885239b38662d9621d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/4f9cbeb55d930c266878aea1c3a288070c40a1": "7b92756b3448088b1522abab3f1af79d",
".git/objects/20/c903bcaab966b547a1e2237bb137b817e0300b": "4acacfe27432dab7c24cad2c25185561",
".git/objects/20/d5fb7b89149e1b000f58f4aaae6c189653bb5e": "55a65223444c8214f2b746a2beb9334e",
".git/objects/22/0b4c473c387d3430ae478073c39a3ce42fe082": "6d0dc53c14f3f8927878f988b27ebe36",
".git/objects/23/0c061b2c73ddd44fdda40cda0d7795a55cff62": "0c333cd83fd57cccef3fc1d557045aca",
".git/objects/23/2ba0d76d1a7658d834cf3dc3ce452f2cf0f55f": "645ba2451fdfdf9bfce9b2ab9bc93f09",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/30249b7f59f3fca2dc70a29eaead792e350918": "0ab7ad61df37e4e088f8b3adaa9b9f12",
".git/objects/25/e474614492a1046fc35b33df6eb19489d4ad85": "091ea1299ae48a3e3a2e5f075c8c8484",
".git/objects/26/6d9d3feaa0b30de101b2e9ab85f63dd168ca3a": "06a485c77f734b0b22eecd9721aa72c6",
".git/objects/26/d9dd5e47e0352861d513ccd54714f95ed3d663": "d22060dcbf026b694ac1f49a3038b399",
".git/objects/27/2bd67e83d48a184579efd1c7647ce9f23e1a65": "fc63dc8755a7cf035c2cf299715a7b73",
".git/objects/27/a54772c2f7b6d8b021294c7ce7a787233a1dc2": "c93a1e6c4cadf0a17b09c233300a87c8",
".git/objects/27/ae3f6644879239958d1944192c8d1c860644d9": "d14eb4d32e9037337e71f906aac07f1e",
".git/objects/27/d3b1c3b1a3503e049ebdefaf678f0c8707e97a": "ef807ef81f607fe7979504ef576adf84",
".git/objects/28/9ada27718b24af45e3edad9925bc8a2ca1babb": "a997507763a712d53a3df05223cf3602",
".git/objects/29/6e8772d507c3fca759581e340c083d17fa49e8": "f147ed1bb725269476146fc704150ab2",
".git/objects/2c/4b5cc7bded395fea3e75f0f3dbb5432cb2f155": "34c557d7068467353b754df75df51326",
".git/objects/32/085a2f788d67dd8299a75797853e23ba697c62": "81d6ea8767ef7a3f32a4effa4c5ce533",
".git/objects/35/3ac386e8054a26cd174f74fd7083117b8d95f5": "5bf2827842b07abca42904c2f86b4df9",
".git/objects/37/de166428fe58178e4fa10a2085ea5d31536fef": "1d1ed1e0740a0c2b35dfdfbfb5d90bcc",
".git/objects/39/8ae17e7088ca8837f7498144b496264313435a": "588e8b44e8279ce426f6ff25141e3c74",
".git/objects/3a/1eac89a9520ebae1720c59203ddef00bce4821": "9e1d17f6bc025a1ef84239a9126989be",
".git/objects/3a/5ec13214236d0a636ca38730daa1ba82e80be9": "2d3d0f59a586625bee854015a6157e66",
".git/objects/3b/ac40213018877eecd5e600109fbf266a8fd110": "3962fbc41a3e68e2ead37c7374b607be",
".git/objects/3c/d4b3d061a3bea5858ac5b083ce93ed75b42026": "f0536eb6ce0433fe35ca9d0e1008ebc0",
".git/objects/3d/a7b98c26dada80f81116810fbcb08ea5ae22d2": "fc8785fe5605301cc45451972106a7ba",
".git/objects/40/692e44b39e1b79626b0a9096deb75dcd8ccec6": "2a4b345662be4a72acfd84c4fc9d8513",
".git/objects/45/547f7c048de2e5beb1977a2fdb376aca8ff069": "68b775f3ddc14d45a91099658e0cce0d",
".git/objects/45/e3342425200c02ba1091ee1ac2252d0e2719b4": "0c4d5ac47db7ea1b4d880337bbffd322",
".git/objects/45/e465bf6adde57e20e0eb1c25566a773fa36d11": "3316ce447a8bf9aa9cad6b39f90271fa",
".git/objects/46/81a8cb977ec7deb701ab9d66a184b9360969ac": "ed9e736844eb200f7777ba4f1222850c",
".git/objects/46/a6bbc9aa3e40c59e1cad489c1d7fd121821fe7": "e1edbcfc68d954af09d4aade1ec4a5ff",
".git/objects/47/27c25872ab04758fd0305b012b2b8822db124e": "51a0aa5ff6afbf5002af20e024e58d83",
".git/objects/48/1f126934809aade6617c316f6385931d10bd1d": "83fb4980f4465373cf57b38b0fb42550",
".git/objects/4a/233873ec4d2e439d446fa13a97814902e5ae51": "c6af715fdb2a03c179fd6d1d1d77f02a",
".git/objects/4a/bdcfab28b31ad3cd450955e5ce094c2a5815d8": "585d083a6d2c839f02048ae414627bf1",
".git/objects/4a/c4315d903a89f1afaa0fccb54e0cc3c17b1505": "ec03b9fc76ff7b36325772694dcadd8c",
".git/objects/4b/2ee672b8a28cee02fa95babd0165248c596b17": "f4a7533280c7c247321d970421a80f4a",
".git/objects/4e/5aafbd70239e4cd9bce2f14d5c8c14954964ec": "c4e0194de6f983bb2150271ce9b93bec",
".git/objects/4e/709a2206cb5fd29021eff72e489b38ef31462c": "be7f7812d76c5b51d9f8f739962033f0",
".git/objects/4f/96151dab2b4d335ea56f60d7acb3ab83f8f83f": "792ecd860f3263b7b6bf0ead089f4d75",
".git/objects/51/cb6eb5fd7b7113b52ccb79b65becd31c583d6f": "c14182509f151a560865015084509559",
".git/objects/52/b76e8bba46f644d4c5fbc95018f822c2e94b0f": "2b2c176d7e50fc5b3fc1f0b8455503e7",
".git/objects/53/7dcaf7b8bc9d9212bc21129db13db255e96a8c": "b893b7dd621653b6d3c44ddfae0371ac",
".git/objects/54/7c50120fe5739ad173172187a98b3df4372b65": "b79fe846e1f93c9830ce092247f45b86",
".git/objects/55/590d6cb9c35af18d300e67895e86d0f61b54cb": "8342b55ae17d61d286559a6f1a1c6e16",
".git/objects/57/1d2231a30f134f2defd62db10bf28a0fa877ea": "d6e5111b6c6f8de97d1ae37647f9867a",
".git/objects/58/e5a70d9a479c58d94a2f921e61df48ec16b7d3": "8f9e9401793d03a9d9afa11b50a0e95a",
".git/objects/59/62cbfd1d715269b78afabf66bd8928b5524487": "547c4792e7645fefdb35971943e1db73",
".git/objects/5a/2d50fbd3f77ab29f4632829d6a1849c9140ac2": "247540c059e1cef8c44c48c15652e969",
".git/objects/5a/66f1cb5ca840ab968c91241b3018afa6040340": "dd298b77e80d196b659156862bbde728",
".git/objects/5a/b7497869f5fbea6d64e301d640b9e7058c0a1b": "2d26cfce9b361c01db9566cebe562834",
".git/objects/5c/0b15a1aef5a265fce072949872d2c64cc1af50": "81b45a588f6949b81fc6db217a93eca8",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5e/dc11f8ed203b3582316a892da63baa0b9808a9": "dd3d100a27cf6a41445ff40f85236849",
".git/objects/5f/540497398b8be78b982a2c952a07e07da3592c": "573b78762af177a296e6363912817449",
".git/objects/61/c63ad1dddaba6a904b5d8688592e68799c7bbe": "8f7e7e1143f8da16e4747a35f8a4fbcf",
".git/objects/62/0b782af4f45a161a02b926a7651f622e55834b": "6b0a6f7d254573a034230985bdb6f6f0",
".git/objects/64/5eb0392b5890c51ade61479d249d52b9a32776": "ee75ac3694a9cd25ca2b84a8561c3f0f",
".git/objects/64/cc0e0ee2efb8c8d486ac678bf225d7fb021f7e": "16fd3c3cbbc0b5521ea420ac8223a0ad",
".git/objects/65/0c0c297429f96d1ed0163b978d09f59efc1d2a": "e027dc0ff368892b9e906fb087f85956",
".git/objects/65/7c8013eeedbd397f63ee2af1e615acc42693d5": "d4169ee941d055873ed917417bd8411c",
".git/objects/66/22fad5a38fde93b5f14891413396f882b6ff04": "0696ef6e9ff0a4e1abe440a541162328",
".git/objects/67/3f9b5e137ff904d453d214cdfea986c495fb39": "e36425d7f07dfb66b1bd28f91645585f",
".git/objects/67/c59845970d63c9c9cbaad724c14cfc0c267f96": "9e29af622bef8c352c8ec82b0abcd3bc",
".git/objects/6b/ad6c415a3cad3ce174a630ea55a878bf61d3e1": "380bb51c8e06f29a77c30fa09b7ef8ed",
".git/objects/6d/250545e21f5ff23e679992ae3431c16a4be15a": "1f8e9307452046e49d80d559c96db737",
".git/objects/6d/9b6de9d2aa35aa69ef0e81e3badfd69cba0ea6": "e5f96691d0706ee0b1875a00b1c190f5",
".git/objects/6e/0a22d945dc9d05251d2866271d4a59d66d8524": "a08fb146b43897b2031c7326bfffce48",
".git/objects/6f/dcb6fc691887ebe83af1dcb43ee51bad7cf64d": "70044b1318cec6983cb2621fc989cbfe",
".git/objects/6f/f707ac3b5dcfe2ed331152e730362735724ea0": "8778a3030861f0ffa5f07e88173bf5f7",
".git/objects/70/b5af7986fa60443495f8c8cd39f6440b0e79bf": "de3985f05245ccfed411266ffc3d4bfc",
".git/objects/71/7ba88c0b3a7f35ffbde16aae6423226576f3d9": "51f31412cca52466c0ca601fa1b8da83",
".git/objects/71/d2274c63086ecfa324dbd2c724c9a3df2c8cc9": "8a7e29e6412303b9ee789c4cd7cf9f8a",
".git/objects/72/86fd4313f5e570d8a443f089e9aae25cb27408": "72d2ab9e7f83e1629ea28fac4b0ade35",
".git/objects/73/47227cc97e66d8cfc3ae5c030f5a1fa3a5ea8c": "6fe0475641be5ce09dc6f299b6a47d3d",
".git/objects/76/c23d013006a12548717a94c5a19d42cc3df39a": "ab21ca7aec01c5c85609e23bc1540482",
".git/objects/79/7f194c4e652212f403c33258db581a9ad59687": "001751d3b3106255d1905026c9d396bc",
".git/objects/7a/25910f871ad1397c492d67f49520794dba4717": "be2a9ca49dc4d80c67183e147e7471fa",
".git/objects/7a/ff61b02199c1a35f1552461b5946771155747b": "2a89e9f97d07abe5ca9ee0109174413f",
".git/objects/7b/36dfecf2fb6b6a8b221f60696c53c040928dea": "85644827fa3c7025b9db3a43e1cd6bf4",
".git/objects/7f/3633855b5c3db0a1598a74ffdd2980da958c4e": "8023150c2db2a8c218b302e2d887700b",
".git/objects/7f/eb15b683c7cb0777f926ab2f3e823a51ee8386": "110f8db1c543a89e7c59183a588dff57",
".git/objects/80/ad8714932e8e0ef88840c0d94ce73e35bd17cc": "c61b7fa7e1d8b1bf7f9667f14cf55ecf",
".git/objects/81/7629df6bd71eecaa490e1878f8ed1295b61d32": "dcb8a3cbceb46aeabacc06f2a6f3a167",
".git/objects/84/422e03ded5ba78e64d7fb661c69c27fdd5f62c": "08f1ec91d463d17893dc6b100116e026",
".git/objects/84/f49ce84c083cbc2c353362503b7b08e58814c7": "dd9883836ecbeeb726426dfc198781fd",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/6231e5160756db281d73e66d8f867d88d4a395": "21c4482ff8711ce60d17557b6da70ce9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fc675c9ac0218ac8c13198c9a0cc0fa38658b8": "de9c9ae60ae207528652d7324c5a0d70",
".git/objects/8b/bbb3f9ba438315ede70cda53e869a89164f61c": "302b62287e1e3085a74dfbce55ffc6d2",
".git/objects/8c/95561ea48e7141908ba04cc007e66081b8730d": "e31f06fa2c571a899451820fc40395e3",
".git/objects/8e/09d388ee90e6a97830a315cbc49c3f037f3762": "e9bcf15ae1199800c64d84dc224d9aad",
".git/objects/91/02f48360d38e211bc8107b76f3878807282f92": "11fe963c023cd55b5123d1352e8576bc",
".git/objects/91/44ad1558a0198e87191f121cd292c8ee310e03": "33e2ab8134827b0d0a90444ef8c9e666",
".git/objects/92/33a0d8155d8b85836a4522708ce0d2e9868b71": "402c7ceba2dafb0e0ab87af2c41923e8",
".git/objects/92/9f8de9f2a65c7ed1567c0a97d1432d5e374ebd": "7909b40122395a43d6e478f2236c4ad4",
".git/objects/92/ec0bcd4e925a611bbed525454e0988e9d97726": "1fda0d4953e2e5fc517d5cd69e90a854",
".git/objects/93/0cb9f627d7fec76af18598f74f62dddb9dfde8": "03a2b90115697617af1b3dc925246ce7",
".git/objects/94/ecc67a7fc95fc9110dc9b5ff8c7115d46abbe3": "cb0f2bf9636ce5f5beb51dd9152c6700",
".git/objects/95/06cb5138cdf98090f4ff7276cf8c35e332d526": "2cc345e04df85f96f26663cc94cbb387",
".git/objects/97/022006ac4c9b5e6d27e90b90d9e328b08bf304": "b4fc35176303de530b9af48e7bb9c087",
".git/objects/97/3384a96182d5b47bf1681f98b7ffca32ca1056": "ef5a4aa45838a2e7848b703b29cc1b28",
".git/objects/97/fd8d08c0781eb7ac2a1f43723a57bba8523d80": "460ab4ea162f0dd556f4bf5d3d5c4589",
".git/objects/98/c6006ab384e866c012ab79a68830d536156e68": "f4718fc30505e69e0e3216b10743dd3c",
".git/objects/9c/f657f92b76bd0cd2224b5da63b5deca1173e19": "c6b7036c390a376e211882e668e06e59",
".git/objects/9d/06f44b14969c3bae9979cd100817c7124876cc": "7d1dc79a6238533b6daf6f4141ba52f5",
".git/objects/9d/2379ffc7f7db70d78c6bcae1c1e9ae492c2a0f": "91f131983ead9085850540f90c0075d6",
".git/objects/9d/2f530417aceead3e1b02cb5242822243be4f28": "83aeb8330cfecfc6583983e1ad7d488a",
".git/objects/9e/9c944ecc64536b6c9d8c54ab5d2455aacca61a": "0d9ebf683a8a8ba7efa599ebf67d4e9b",
".git/objects/9e/afc9ca237704cd9a5b1de061eabc9e7b3c3d30": "64defce0082ea70e0a342c0f3b47be69",
".git/objects/9f/1e80bd916f7d1425cc7925bd8421f9a3740c96": "c0587f1867c5ae074d3711512c39ff2a",
".git/objects/9f/94d050d500df30d1f1426a1100fa9892d32fa6": "3b8a3082c75ae6edd5a937970aeb14e5",
".git/objects/a0/949f7b77155d6eda130a52b314d9ebad9638f4": "a38934d85705f0b2b5f097737d44e239",
".git/objects/a1/a6c8e345aca76b79d2c28d20b9d434538e83bc": "095eeb07007d76c3e6ed52953a47a854",
".git/objects/a3/1d267db91957e0978df532609af5b44ab40c3b": "5e3e88a6419827785cc8846723dd2051",
".git/objects/a3/82af69ce90665cce6bf60455b66f8a2a4520d3": "a8c120812e895c552cbabebcc1d14af5",
".git/objects/a4/4f57a7a0b192cd4674551faba1c158c088dcbf": "1de96e9a19693c0ffaaa20ee4b8cd67f",
".git/objects/a4/aa4a32ad74335b76c5c47b5b0719dd615ad8c6": "f9b181e145aa8632d787019428b660f5",
".git/objects/a8/3835e81643b7dc0ba89853f219751fb1011887": "442c0d3c77df44fe20623ca5c91458fe",
".git/objects/a8/57e13314bff03d8acbb5e182b77503cc14d70c": "85f31ca5250c15166fb83800e0cccc87",
".git/objects/a8/9b711afaedec3fde31bf63c4a46a606677de23": "f5b63d2d0fa4b47fc73369a38fbde85c",
".git/objects/a8/c600846d9775e917887a870044e14fed504a34": "7e9588aac816dbc15291f1c4e30fdbb1",
".git/objects/aa/0cbdb94ae2516797d6103b6d109a17332f4b98": "260641882701289ba6144ba110d0d646",
".git/objects/ab/e50f2ebd28a280f837e0dd6f38d485ac62b6a1": "227244ce51f464e12eb7402f0ae9f77e",
".git/objects/ab/e8e78da995fab2fce69a7ae4601af26f7bdc2b": "5669a96bd958170627f8b773e8400cbd",
".git/objects/ac/5d3961aa2261a725ec652ad9a9f76f3123728f": "9d546b1ff239213125f8f1896c084e21",
".git/objects/ac/a4fac692490fb7f1377e1e96f086239b03ab06": "0dc5fda4b8596d1f3466ba0303e5ec48",
".git/objects/ad/c0117997cb1f259660d7eb62e52c0d9500c547": "e251aaa50549b375a4035ef68ce4f8f5",
".git/objects/ae/efeb147cb74379c5c8c4ee10ee0a92e22aa9f6": "4961206f71e574bc7930b2dcfc5833ec",
".git/objects/af/46bc92893843ecf8f89e1eb8f91dde733232c2": "98fcaa30d6e24a83dacb64f0d4d72b44",
".git/objects/b0/74adbcb601e8e7d23786ab8cb02b28cb9f2cab": "413d95fa396716f213e5dbba6b79a31c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/f2741e1a81218c2aad3d4e55e60b2d6c4c75c4": "80c5af0f0bf2a1e73b111b51e00b30d8",
".git/objects/b2/1c77fbc299d08d96fb19833b3e00b0c3053cfe": "ccb6d757d92b9e6340f4f425020b9202",
".git/objects/b3/3e1fd6d81cb8583e58df06a50ac72ff4cdd539": "c217c6cab16ad171ccd8b4160226025b",
".git/objects/b3/99c4f3988c4284936a41c4986ff41571fc156a": "d0337026802374b2fda278617a461ff6",
".git/objects/b5/6a47f05501f0c40add176b4bf43c0c663da4f0": "80b5ed0e8b4b7b0fdd59d9cc0afbab41",
".git/objects/b5/76e05b12757633ae14cf7814a81206c1142e33": "69d4fe60d24198c851b50ee82b31aeaa",
".git/objects/b5/9e51e2095216cacc0855fcfa958b8387861a7b": "cb03aa84c506750a207cdea04084c142",
".git/objects/b5/ea68490271bafb8af8f8b1b26e92a180ebc93e": "d98189ff72c4f729a2eb68402a2c9c98",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/476e7f050dfe72cc9a78cfac78f18b6a057a36": "c99fee5558f84e60965a48f77f8868e2",
".git/objects/ba/2c9c668c6ae308c984876ddc5472aae53a8acc": "16735cf53d50efa87ec6b1185b9ab8d2",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/d5f8105b43e7f12130f99a6672d07681b48127": "b1fe8d79b4683b268365ef18ed0412f6",
".git/objects/be/e1979eafc5a781d5741986bb464822cf5f5841": "a4d226d30b35f16ddb8b787724efc8f7",
".git/objects/bf/20163d5d66a653fe699763039512e2d55db019": "cb7ef06733efde0304c6c4c500096ee1",
".git/objects/bf/e83cb9936b7c481f27ec452657345786a3bb36": "f8da3b4d72f5f862f55d7d0f9cf1d9c0",
".git/objects/bf/f9290d6585d9a69ac701995214fcd23fc3ce90": "7217012d6c1c9a3ee786ceb80b3c01c3",
".git/objects/c0/eba022638be8ed11888393d9f3f811c1c2581d": "14323ddb3086e72491378bdb6d15f1e0",
".git/objects/c2/b232087d2bb0a133f4f974660b976a45d826e4": "7a6594c149cac04e9c1baa7d354b05c8",
".git/objects/c2/eb4ebb75faaad1b0f9098c360546976c2385f8": "0ac29a83b005754c3091e96334ba3431",
".git/objects/c4/590fc8272a1ce6f7830b632e82052e4ffd40c4": "07e64e062a5e1b37d8eafd9fe1cfc32d",
".git/objects/c5/6580a00292147865e29542931be075f1bded4c": "b3f6dfedce03ee34a842ffe3c7a1faf9",
".git/objects/c5/e1c70bff46db37f10f065b8aa50d7879203e3b": "701b6a8b95eb48324ecf2225640b9833",
".git/objects/c6/33c172f51a15601137d54e4f8f5025a1d6f790": "7353dd882599012a077dfee77c5b163c",
".git/objects/c6/6544fa9710b469515d6c669182e114f3a58ca3": "f4fd98b496b695bcc5a7551319a7e5c5",
".git/objects/c9/1cb6571b2cf6e192abe0512363c6a674347600": "366621481fa976c3329d0f473d0712eb",
".git/objects/ca/192d58a54cc2659074ba480d351cc44e6f08d7": "3b1851551c2cd5707f9a90bcca87674b",
".git/objects/cb/92086ecbf0897549e7f700e35d3fea407facce": "f1d634ae20aa08c010306a2a3ea4b7e0",
".git/objects/cc/05154f4d2d54c001c00309a9ba988d90d461ff": "346747f56bf8ed435d1138c07c9a6fde",
".git/objects/cc/ef175bb1d4979f2b39cc594553255f99f6e9dc": "85e206ab9de0c867b023a63b62ad92c2",
".git/objects/cd/a8d4b77099ba18f0bc932b8213dcfb1b1da754": "ed819568f6148cb4a49b62af3fded439",
".git/objects/cd/e23608f497975a1f372a477027e173d3f1eb67": "d820fab2fd5fdc1da8300c43cd1c9a57",
".git/objects/ce/dd88b2e3c21079c4a57922acb03bc2c8e66de6": "08390814bb9c9937081c0e90d6600c6e",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d1/3c3fde7af691882ec1234dc20fa7db3acd290b": "59071f639b9626d88967a14132846e99",
".git/objects/d1/8b15ebc1b9f4cd91131cfc2defec53ae4f9214": "b05ac8038dc8f9464cbed14338911727",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2fc006058212bebf266b823a6268a3a45ed639": "48ef53d7e9c2c023d2c8af0a58277594",
".git/objects/d7/7b12c46ddb5c32ffbd4fce813d1d4ca5a6c45e": "dea34679eaa4c1f67f2e3767441ae969",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/da/a11ff3d332632ee976cb6fdbd428a6bd506473": "8ce976283503ac90b7c87c17c7daad5e",
".git/objects/da/b4fc8420690b87b1b9d440ada0936513330559": "20b96fe16df5c5808fb5b43ae59aa516",
".git/objects/da/c882d157840d787fa6bbc0fc7d1c232e8b847b": "645920e3cd5802170852c3876fae58aa",
".git/objects/db/f2e177341a215197fe89bc9cc68f1e57de224f": "5a2d40d7f2479493820ce50973c10ba0",
".git/objects/dc/252c77ac424e5101058ae45f2713d1c2ac3bf9": "fc6bfbdf5a2a3a8d18ec3ea1f342aa66",
".git/objects/dd/705a5032b5c9d7ce970d621a5d08aa349d935e": "4bb8eb4d9fd5474bf4ecc4489b4b8297",
".git/objects/de/2a1678ce05a835ed11b2c10d9395eb7a571ffb": "24fedeaabad0a7ed1949d0dafa35d8a6",
".git/objects/df/6b8e0ecb50c2523339bb676e0189a9b0a0248a": "648f287853e2f46ebcfd657d47bd5bb9",
".git/objects/e0/1c06b7f2c2be2089f7cc8ba069519bf71e1a36": "8e5fe792ededf3db9436552e3f193c28",
".git/objects/e3/8671d00d0ead9f16b619f56447aae7729b1365": "0298ee460290082d9a42e185c864f6a4",
".git/objects/e3/9aa0737b0e888b5654d5c4b080831fcc39ca6a": "06319c0efa0485a814d6b8fbbf451c55",
".git/objects/e5/f7202dd78f7716accd98290d9c90173c634d63": "e5956ca51c56bee5c6fe2e559b089d97",
".git/objects/e7/069ec26c627fceb81fd19a3559bb69adcb359f": "f713d03ccc6db278887b138d84c7a160",
".git/objects/e7/854f2b5e573301a467f475bb6b21d3633ad718": "cdc12e1cbd3a05fa1031a6fd05041409",
".git/objects/e8/9a9d54b1fe893742da3879ed05e01328634b92": "0dd14fae83bfb4fe00aa77a9f1fce4da",
".git/objects/e9/e707ff6154da7a4c653e735012936f4b1d4bdf": "e9711756b7dbc9c96d2e4111885de9c2",
".git/objects/ea/c3436a8d26bb542fea27c1d7bd6fe8a8082da1": "20c2915622077416f9a5c28a7742491e",
".git/objects/eb/2298a5d3f2f743afe8a2ab80d24f656ec769e1": "954e7e7945bcd7e820f4af5ffb2601e2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b6bfcac69a75b433a87bc05fed4ed143924e95": "7eeede6207d21e71f9e90c3790ac7166",
".git/objects/ec/39fd27bdc945d1230e92374e6cbd71928761f6": "e362a3136a4aff9f8ceee68ed105fd80",
".git/objects/ed/ebaf30aa3250835092979a6dd26087da6b7166": "a64e4257774086a6f1b0db8a4b328b90",
".git/objects/ef/4fa6e2daa90c72631f4ba37999c242a748f366": "924bd97a3231b19f3ddeb19985cd92ca",
".git/objects/ef/d5e5cea9fdfafc7b9dc8ad1e5855b07b8bf276": "b0b5997ec9e0c1a483693cf78619506d",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/73d0d0ea4053b7eafad07abb2e81923d2649f7": "4312abf421a4aa0c789b276f57a43cb2",
".git/objects/f4/98a37640c009b166d9ddfa82c8aca8ddd4fb45": "92c6399876c63397e3284688808451d0",
".git/objects/f5/e898cef282dc82378503dd39b9aa8405f69a37": "7357d16c81168db402f8455e010266a5",
".git/objects/f6/194b6204102536236f4a2c44d7913908650b6f": "94f7b6a237138bcde213fb5e0919b4d1",
".git/objects/f6/3dbfd469dcac6fc58a9b90500e9f0d9b6f66a9": "936fc4fdb3dd99da7578bd2eb4eab256",
".git/objects/f8/206d1382caea20a228ead9d5f48c3798efe4db": "1119c44f374855d04486d158958ad72b",
".git/objects/f8/c55b6f4e6761d1e9c62e50476f94c69f9ac204": "d91a9a95fcecfb2a6f894260e0d48ced",
".git/objects/f9/77ee4af6c089e53e1cb613ff3717b21e17b87e": "067f6b515dd15efd9e76b6413733bb6b",
".git/objects/fb/8688177abad15d0d8f0a4a1489ce8cc77cee42": "bed37fbba802fe1b11a9a651d8f45fbd",
".git/objects/fd/94bdcbcb5fc58faa56624fa0df428b27f48d8f": "40d0b3f624e768d0f19d9ae03bddeed4",
".git/objects/fd/a054c8c322b4e97cdc1f7350ad79671166c7a6": "7fa73d78320d64519fb3e9605e554379",
".git/ORIG_HEAD": "0d6ef6ea5ea172cdd8a7973be86a2d17",
".git/refs/heads/main": "5e8eb5bb1ebe87c4f231b0be66dd498f",
".git/refs/remotes/origin/main": "5e8eb5bb1ebe87c4f231b0be66dd498f",
"assets/asset/image/about_caste.png": "8a427ede71277b335e667b6eebc94611",
"assets/asset/image/about_doller.png": "5a27e31f2fff161a14651e2907ee7bb5",
"assets/asset/image/about_doller2.png": "80a6874f194c9257643b503407db0ad0",
"assets/asset/image/about_drop.png": "7357178115f232943dd002840f04e64f",
"assets/asset/image/about_eye.png": "70979441a6e4d9b0bacd22053a5ab481",
"assets/asset/image/about_eye2.png": "d19549f7b6ffe9cdbded06e10faa83e2",
"assets/asset/image/about_girl.png": "c922ec9c270a964a9da6491e5fa898e3",
"assets/asset/image/about_gogal.png": "8897511879a20ab2ed6a2e7d86959e33",
"assets/asset/image/about_image.png": "27f822df073a358c93cce19b84cc871c",
"assets/asset/image/about_image2.png": "32143c55fb632dff5f2f060347a6a34d",
"assets/asset/image/about_king.png": "304f6972ec5e5456e9473b71e12ee49f",
"assets/asset/image/about_king2.png": "871970ffd977d33c51d0d2c29e4d5b04",
"assets/asset/image/about_profile.png": "edbf0f16019cb68f7aa09df7649aa3bd",
"assets/asset/image/arrow.svg": "7404729336f264f1778a5630929156e0",
"assets/asset/image/bg1.png": "54f1320cd3b846aa788c5625b092c7da",
"assets/asset/image/bg2.png": "82fab8e76094b6a5aa252b88e7c55ece",
"assets/asset/image/bottom_image.png": "12d44646fafdf3773e1adc6a4bb40ec7",
"assets/asset/image/bottom_image2.png": "9f9b2aea4f3e5a8a4f0cefbe70ac3c82",
"assets/asset/image/bottom_image3.png": "78ea000e3b987399443ce0c64e5c6bf4",
"assets/asset/image/button1.png": "cd30656581c878de792abaa9988c8de7",
"assets/asset/image/cheelee_logo.png": "aa523476c60cd104c35dcfb6d689086e",
"assets/asset/image/cheelee_video.mp4": "ea924a99548c3635a8430486c65374b6",
"assets/asset/image/coincap.png": "78131b5122bddadd9cb98c1cfd9bc957",
"assets/asset/image/coin_cheelee.png": "199cefc6623c71a2493cf852da6a3ca4",
"assets/asset/image/cucoin.png": "b037fb3caf4c146c3460a6aa3b62751c",
"assets/asset/image/discord.png": "328ab3cd65ad5c0882e9cd49e928be44",
"assets/asset/image/doller.png": "e8239467c3212cf707e42e2f0406b53a",
"assets/asset/image/drop.png": "61bbcbaf21b700aa9a8721e5460607ae",
"assets/asset/image/drop2.png": "5b8e717c6a52e78dde686f49d4a8d6c7",
"assets/asset/image/drop_bg.png": "3ae81a884768d25d40c880e5825e7a29",
"assets/asset/image/economy_bg.png": "1c237ad5ce5d2248c12aec9a81a069ac",
"assets/asset/image/economy_girl.png": "ffcb03532e5e12cdd4f05f15d60fbb68",
"assets/asset/image/eco_bg.png": "bbe2f7d9f037acbbabce3bc905e7d862",
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
"assets/asset/image/load.svg": "e02ad873126a47ae33c3e4bcb7dc1ed5",
"assets/asset/image/logo1.png": "f28398c78be63f5831cf58a8c6f07d75",
"assets/asset/image/logo2.png": "2deb039095aaa05d8071e0dc8c9817d0",
"assets/asset/image/love.png": "45a15d38ea1a17de706129ec669537c7",
"assets/asset/image/media_bg.png": "a8e9badcbd7e95f37c2900c9f4cc4bd3",
"assets/asset/image/media_bg2.png": "b41a946fc1ad307921b0daff4087e6f9",
"assets/asset/image/media_bg_color.png": "c47b1881c6d4e7d575a0bd88f10101fe",
"assets/asset/image/media_review_bg.png": "4209d0eaa4de7b3df9b0026c66133a1d",
"assets/asset/image/menu_image.png": "7e11635a6519597dc1de5f122241ff91",
"assets/asset/image/menu_image2.png": "341c01a770fd509bb8a1104bc8fae699",
"assets/asset/image/pink_bg.png": "931532dd7b0373ca4ec888a46dbcb3e5",
"assets/asset/image/review.png": "676c67b3cc69f4c326791e3c0dea5282",
"assets/asset/image/review2.png": "62ce29adbd5dc12448368bc8a634e732",
"assets/asset/image/review_image.png": "74a7f5f3290a2754357cae73ea500c4c",
"assets/asset/image/support.png": "ec2ec93886f6dfa5370f1a8cffaeaae4",
"assets/asset/image/telegram.png": "d28cb5ebc39b6fef79a5367b5bb987a6",
"assets/asset/image/tool.png": "eb4dde35aae9ce452c766711c41f4926",
"assets/asset/image/twitter.png": "3e8e7ee8666a9f4e2946f39ff2f806e3",
"assets/asset/image/youtube.png": "68aebef664bff654eee1d3f9322351d8",
"assets/AssetManifest.bin": "5daae10f731a8325c1b24240658af320",
"assets/AssetManifest.bin.json": "e8416a5f4d84f236fd00f298a0abb855",
"assets/AssetManifest.json": "2bf7f7cc2d018c786ec648780e5a7707",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "25389d4fd88cdbd0b7fcf9a4cea77938",
"assets/NOTICES": "c05a1725c3ab04fe40942bfe9be2c9cf",
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
"flutter_bootstrap.js": "f005b140300cd9ef15f5ac0c9ead5c6f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "80ff520dc37041a93901f13db2c44fe3",
"/": "80ff520dc37041a93901f13db2c44fe3",
"main.dart.js": "d549410e50e6b68d53cb35e96a4a7996",
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
