# Backend Server - Hệ thống Bảo mật

## Cài đặt

### 1. Cài đặt Node.js
- Tải và cài đặt Node.js từ https://nodejs.org/ (phiên bản 18 trở lên)

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Cấu hình Email

#### Option 1: Sử dụng Gmail (Khuyến nghị)

1. Tạo App Password cho Gmail:
   - Vào https://myaccount.google.com/
   - Bật 2-Step Verification
   - Tạo App Password: https://myaccount.google.com/apppasswords
   - Copy app password (16 ký tự)

2. Tạo file `.env`:
```bash
cp .env.example .env
```

3. Chỉnh sửa file `.env`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

#### Option 2: Sử dụng SMTP khác

Chỉnh sửa file `server.js` phần `transporter` để dùng SMTP server khác.

### 4. Chạy server
```bash
npm start
```

Hoặc chạy ở chế độ development (tự động restart):
```bash
npm run dev
```

Server sẽ chạy tại: http://localhost:3000

## API Endpoints

### Public Endpoints

#### POST /api/register
Đăng ký tài khoản mới
```json
{
  "username": "user123",
  "password": "password123",
  "email": "user@example.com"
}
```

#### POST /api/verify-code
Xác nhận mã code
```json
{
  "code": "1234",
  "email": "user@example.com",
  "password": "password123"
}
```

#### POST /api/login
Đăng nhập
```json
{
  "username": "user123",
  "password": "password123"
}
```

#### POST /api/admin/login
Đăng nhập Admin
```json
{
  "username": "Admin",
  "password": "1412@"
}
```

### Protected Endpoints (Cần JWT Token)

#### GET /api/admin/users
Lấy danh sách users (Admin only)
Headers: `Authorization: Bearer <token>`

#### DELETE /api/admin/users/:username
Xóa user (Admin only)
Headers: `Authorization: Bearer <token>`

#### POST /api/user/data
Lưu dữ liệu user
Headers: `Authorization: Bearer <token>`
Body: `{ "data": {...} }`

#### GET /api/user/data
Lấy dữ liệu user
Headers: `Authorization: Bearer <token>`

## Bảo mật

### 1. Mật khẩu
- Sử dụng bcrypt để hash mật khẩu (salt rounds: 10)
- Mật khẩu không bao giờ được lưu dạng plain text

### 2. JWT Tokens
- Token có thời hạn 7 ngày
- Secret key được tạo tự động hoặc lấy từ biến môi trường

### 3. Database
- SQLite database với các bảng:
  - `users`: Thông tin user (username, password_hash, email)
  - `verification_codes`: Mã xác nhận email
  - `user_data`: Dữ liệu tài chính của từng user

### 4. Email Verification
- Mã code 4 số, có thời hạn 10 phút
- Mỗi mã chỉ dùng 1 lần

## Troubleshooting

### Lỗi gửi email
1. Kiểm tra App Password đã đúng chưa
2. Kiểm tra 2-Step Verification đã bật chưa
3. Kiểm tra email trong `.env` đúng chưa

### Lỗi database
- Xóa file `database.db` và chạy lại server (sẽ tạo lại database)

### Lỗi CORS
- Server đã cấu hình CORS cho phép tất cả origins
- Nếu cần, chỉnh sửa trong `server.js`

## Production Deployment

1. Đặt `NODE_ENV=production`
2. Tạo JWT_SECRET ngẫu nhiên và bảo mật
3. Sử dụng HTTPS
4. Cấu hình firewall
5. Sử dụng reverse proxy (nginx)
6. Backup database thường xuyên

