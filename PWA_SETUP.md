# Progressive Web App (PWA) Setup

Hướng dẫn thiết lập ứng dụng thành Progressive Web App để có thể cài đặt trên thiết bị.

## Yêu cầu

- File `manifest.json` (đã có)
- File `service-worker.js` (cần tạo)
- Icon ứng dụng (192x192 và 512x512)

## Bước 1: Tạo Service Worker

Tạo file `service-worker.js` để cache ứng dụng và hoạt động offline.

## Bước 2: Tạo Icon

Tạo 2 file icon:
- `icon-192.png` (192x192 pixels)
- `icon-512.png` (512x512 pixels)

Bạn có thể sử dụng công cụ tạo icon online hoặc design tool.

## Bước 3: Đăng ký Service Worker

Thêm code sau vào file `index.html` (trước thẻ `</body>`):

```javascript
// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
```

## Bước 4: Cài đặt ứng dụng

1. Mở ứng dụng trên trình duyệt (Chrome, Edge, Safari)
2. Nhấn nút menu (3 chấm) hoặc menu tùy chọn
3. Chọn "Cài đặt" hoặc "Install app"
4. Ứng dụng sẽ xuất hiện như một ứng dụng độc lập

## Lưu ý

- Service Worker chỉ hoạt động trên HTTPS hoặc localhost
- Cần có file manifest.json và icon
- Có thể test trên localhost với `http://localhost`

## File Service Worker mẫu

Tạo file `service-worker.js` với nội dung:

```javascript
const CACHE_NAME = 'pf-tracker-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
```

---

**Lưu ý**: PWA là tính năng tùy chọn. Ứng dụng vẫn hoạt động bình thường mà không cần PWA.

