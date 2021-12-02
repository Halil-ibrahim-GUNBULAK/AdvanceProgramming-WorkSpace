const CACHE ='AP'
function installCB(e) {  // consola yazıyoruz
  console.log(CACHE, e);
}
addEventListener('install', installCB) //eventi dinliyor gerçekleşince çağıracak

function fetchCB(e) {   // sayfaya gidiyor ve save yapıyor
  let req = e.request
  e.respondWith(
    fetch(req).then(r2 => save(req, r2))
    .catch(() => caches.match(req).then(report))
  )
}
function report(req) {
    console.log(CACHE+' matches '+req.url)
    return req
  }
addEventListener('fetch', fetchCB)

function activateCB(e) {
  console.log(CACHE, e);
}
function save(req, resp) {
    if (!req.url.includes("github")) 
       return resp;
    return caches.open(CACHE)
    .then(cache => { 
      cache.put(req, resp.clone());
      return resp;
    }) 
    .catch(console.err)
  }
addEventListener('activate', activateCB);