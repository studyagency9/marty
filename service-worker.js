/**
 * SERVICE WORKER
 * Enables offline functionality and caches essential files
 * For Martinese Fitness PWA
 */

const CACHE_NAME = 'martinese-fitness-v1.0.0';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/program.js',
    '/exercises.js',
    '/manifest.json',
    '/sounds.js',
    '/Exercices/glut bridges.gif',
    '/Exercices/moutain climbers.gif',
    '/Exercices/side leg-raise.gif',
    '/Exercices/plank.gif',
    '/Exercices/cheest-expanded.gif',
    '/Exercices/elbow knee alternative.gif',
    '/Exercices/in & out crunches.gif',
    '/Exercices/knee lift.gif',
    '/Exercices/lunges.gif',
    '/Exercices/romanian-lift.gif',
    '/Exercices/side to side lunge.gif',
    '/Exercices/sitted leg raise.gif',
    '/Exercices/step-on-the stud.gif',
    '/Exercices/stool -steps.gif',
    '/Exercices/sumo-squat.gif',
    '/Exercices/touch toes and clap.gif',
    '/Exercices/Glute kickbacks.gif',
    '/Exercices/Lift your arm and steps.gif'
];

/**
 * Install event - cache all necessary files
 */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE).catch(() => {
                // Continue even if some files can't be cached
                FILES_TO_CACHE.forEach((file) => {
                    cache.add(file).catch(() => {
                        console.log(`Failed to cache ${file}`);
                    });
                });
            });
        })
    );
    self.skipWaiting();
});

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

/**
 * Fetch event - serve from cache, fallback to network
 */
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }

            return fetch(event.request).then((response) => {
                // Cache successful responses
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }

                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            }).catch(() => {
                // Return a custom offline page if available
                return caches.match('/index.html');
            });
        })
    );
});

/**
 * Message handling for cache updates
 */
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

/**
 * Background sync (future feature)
 */
if ('sync' in self.registration) {
    self.addEventListener('sync', (event) => {
        if (event.tag === 'sync-sessions') {
            event.waitUntil(
                // Sync logic here
                Promise.resolve()
            );
        }
    });
}
