# Hướng dẫn Cài đặt Hệ thống Bảo mật

## Yêu cầu

- Node.js 18+ (https://nodejs.org/)
- Email Gmail (hoặc SMTP khác)

## Cài đặt

### Bước 1: Cài đặt Node.js
```bash
# Kiểm tra Node.js đã cài chưa
node --version
npm --version
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Cấu hình Email (Gmail)

#### Tạo App Password cho Gmail:

1. Đăng nhập Gmail
2. Vào https://myaccount.google.com/
3. Bật **2-Step Verification** (nếu chưa bật)
4. Tạo App Password:
   - Vào: https://myaccount.google.com/apppasswords
   - Chọn "Mail" và "Other (Custom name)"
   - Nhập tên: "Finance App"
   - Copy **16 ký tự** password được tạo

#### Tạo file .env:

```bash
# Tạo file .env từ .env.example
cp .env.example .env
```

Chỉnh sửa file `.env`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

**Lưu ý**: 
- Không dùng mật khẩu Gmail thông thường
- Phải dùng **App Password** (16 ký tự)
- Nếu không có App Password, email sẽ không gửi được

### Bước 4: Chạy server

```bash
npm start
```

Server sẽ chạy tại: **http://localhost:3000**

## Sử dụng

### Đăng nhập Admin:
- Tài khoản: `Admin`
- Mật khẩu: `1412@`

### Đăng ký User:
1. Nhấn "Đăng ký tài khoản"
2. Điền: Tên đăng nhập, Mật khẩu, Email
3. Kiểm tra email để lấy mã 4 số
4. Nhập mã để hoàn tất đăng ký

## Bảo mật

### Mật khẩu:
- ✅ Hash với bcrypt (salt rounds: 10)
- ✅ Không lưu plain text
- ✅ Admin không thể xem mật khẩu user

### JWT Tokens:
- ✅ Token có thời hạn 7 ngày
- ✅ Secret key tự động tạo
- ✅ Bảo vệ API endpoints

### Database:
- ✅ SQLite database
- ✅ Mỗi user có dữ liệu riêng
- ✅ Admin chỉ xem username + email

## Troubleshooting

### Lỗi gửi email:
1. Kiểm tra App Password đúng chưa
2. Kiểm tra 2-Step Verification đã bật
3. Kiểm tra email trong `.env` đúng format

### Lỗi database:
- Xóa file `database.db` và chạy lại server

### Lỗi CORS:
- Server đã cấu hình CORS
- Nếu vẫn lỗi, kiểm tra firewall

## Production

1. Đặt `NODE_ENV=production`
2. Tạo JWT_SECRET ngẫu nhiên mạnh
3. Sử dụng HTTPS
4. Backup database thường xuyên
5. Cấu hình reverse proxy (nginx)

