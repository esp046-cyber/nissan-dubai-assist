const V='nda-v6',A=['./','index.html','style.css','script.js','config/app.config.js','manifest.json','offline.html','database/nissan-gcc-parts.json','database/maintenance-schedules.json','assets/nissan-patrol-diagram.svg','assets/heat-airflow.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(A))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(m=>{const n=fetch(e.request).then(r=>{const c=r.clone();caches.open(V).then(x=>x.put(e.request,c));return r}).catch(()=>m||caches.match('offline.html'));return m||n}))});
