
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 545, hash: '77a153f9fe4964280aa2b54586b70d230bb92d6c15307caaff47ab7c45725a46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1062, hash: 'b7a2ce5a21b943e82c68724b7baefcfb611fa5373809de41686ab595c4ce6c73', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 3126, hash: 'f1a9744408fd370640a1bcf1b1cbc5e693a90d3b22c200a153f72d30d0e6a9a0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
