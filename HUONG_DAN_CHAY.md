# Hướng dẫn Chạy Ứng dụng

## ⚠️ Lỗi "Failed to fetch" - Nguyên nhân và Cách khắc phục

Lỗi này xảy ra khi **server backend chưa chạy**. Bạn cần chạy server trước khi sử dụng ứng dụng.

## Bước 1: Kiểm tra Node.js

Mở Command Prompt hoặc PowerShell và chạy:
```bash
node --version
npm --version
```

### Nếu chưa có Node.js:
1. Tải Node.js từ: https://nodejs.org/
2. Cài đặt phiên bản LTS (khuyến nghị)
3. Khởi động lại máy tính
4. Kiểm tra lại: `node --version`

## Bước 2: Cài đặt Dependencies

Mở Command Prompt/PowerShell trong thư mục dự án:
```bash
cd "C:\Users\Ha Thanh Dat\Desktop\App"
npm install
```

## Bước 3: Cấu hình Email (Tùy chọn)

Tạo file `.env` từ `.env.example`:
```bash
copy .env.example .env
```

Chỉnh sửa file `.env`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

**Lưu ý**: Email chỉ cần cho tính năng quên mật khẩu. Nếu không cấu hình, bạn vẫn có thể đăng ký và đăng nhập, nhưng quên mật khẩu sẽ không hoạt động.

## Bước 4: Chạy Server

```bash
npm start
```

Server sẽ chạy tại: **http://localhost:3000**

Bạn sẽ thấy thông báo:
```
Server running on http://localhost:3000
```

## Bước 5: Mở Trình duyệt

1. Mở trình duyệt (Chrome, Edge, Firefox...)
2. Truy cập: **http://localhost:3000**
3. Đăng nhập admin:
   - Tài khoản: `admin`
   - Mật khẩu: `1`

## Kiểm tra Admin User

Nếu admin user chưa tồn tại, server sẽ tự động tạo khi khởi động.

Nếu vẫn lỗi, chạy script kiểm tra:
```bash
node check-admin.js
```

## Troubleshooting

### Lỗi "Cannot find module"
```bash
npm install
```

### Lỗi "Port 3000 already in use"
- Đổi port trong file `.env`: `PORT=3001`
- Hoặc tắt ứng dụng đang dùng port 3000

### Lỗi "Failed to fetch"
- ✅ Đảm bảo server đang chạy (`npm start`)
- ✅ Kiểm tra URL: http://localhost:3000
- ✅ Kiểm tra firewall/antivirus không chặn

### Lỗi "Database locked"
- Đóng tất cả kết nối database
- Xóa file `database.db` và chạy lại server (sẽ tạo lại database)

## Lưu ý Quan trọng

1. **Server phải chạy** trước khi mở trang web
2. **Không đóng cửa sổ terminal** khi đang dùng ứng dụng
3. Nếu đóng terminal, server sẽ dừng và bạn cần chạy lại `npm start`

## Chạy Server ở Background (Windows)

Sử dụng `start` command:
```bash
start /B npm start
```

Hoặc dùng PM2:
```bash
npm install -g pm2
pm2 start server.js
pm2 save
pm2 startup
```

