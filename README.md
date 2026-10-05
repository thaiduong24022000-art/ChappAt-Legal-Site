# SaiGon Match - Legal Site

Cloudflare Worker phục vụ các trang legal (terms, privacy, app-ads.txt) cho ứng dụng SaiGon Match.

## 🚀 Deploy lên Cloudflare Workers

### Bước 1: Cài đặt Wrangler CLI
```bash
npm install -g wrangler
```

### Bước 2: Đăng nhập Cloudflare
```bash
wrangler login
```

### Bước 3: Deploy Worker
```bash
wrangler deploy
```

Worker sẽ được deploy tại: `https://saigonmatch.saigonmatch.workers.dev`

## 📋 Các route có sẵn

- `/` - Trang chủ
- `/terms.html` - Điều khoản sử dụng
- `/privacy.html` - Chính sách bảo mật
- `/delete-account.html` - Hướng dẫn xóa tài khoản
- `/child-safety.html` - Chính sách an toàn trẻ em
- `/style.css` - File CSS
- `/app-ads.txt` - File AdMob verification ⭐

## ✅ Xác minh app-ads.txt

Sau khi deploy, kiểm tra:
```
https://saigonmatch.saigonmatch.workers.dev/app-ads.txt
```

Kết quả phải trả về:
```
google.com, pub-9793421534392971, DIRECT, f08c47fec0942fa0
```

## 🔧 Cập nhật nội dung

Để cập nhật nội dung các trang, sửa file `worker.js` phần constants ở cuối file, sau đó chạy:
```bash
wrangler deploy
```

## 📱 Cấu hình AdMob

Trong Google AdMob:
1. Vào **App settings** → **App-ads.txt**
2. Nhập domain: `saigonmatch.workers.dev`
3. Đợi Google xác minh (thường 5-10 phút)

## 🌐 Custom Domain (tùy chọn)

Để sử dụng domain riêng như `saigonmatch.com.vn`:
1. Thêm domain vào Cloudflare
2. Vào Workers & Pages → saigonmatch → Settings → Triggers
3. Thêm Custom Domain
4. Cập nhật trong AdMob với domain mới

## 📞 Hỗ trợ

Email: support@saigonmatch.com
