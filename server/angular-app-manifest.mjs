
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/WishIt/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/WishIt/home",
    "route": "/WishIt"
  },
  {
    "renderMode": 2,
    "route": "/WishIt/home"
  },
  {
    "renderMode": 2,
    "route": "/WishIt/login"
  },
  {
    "renderMode": 2,
    "route": "/WishIt/register"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7065, hash: '53edb87c6c463cfa8fea38d0ad82207cf50f7bd2a75b665bfabefb6a10c1c17e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3037, hash: '7439c2d825bf2ef42099648a84c9a7fedc5c836d9487b1172c97a8a0c6ae203d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 18097, hash: '511dfc4c47e09c125fdd705d7bb52cd57412e52da54e470a473b105c8d903bd7', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19257, hash: 'af7e2e1006c82cfc0aa1e2185483508c590bf428292983e8493b328a171bb209', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 16257, hash: '3220cc91d4cc498655cf850514f362d77083c1a33c3671180375421f5d265677', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
