# 🚀 Hướng dẫn Deploy lên Internet

Có nhiều cách để deploy ứng dụng lên internet. Dưới đây là các phương pháp phổ biến nhất:

## 📋 Chuẩn bị

1. **Tạo tài khoản GitHub** (nếu chưa có): https://github.com
2. **Đẩy code lên GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

---

## 🌐 Option 1: Railway (Khuyến nghị - Dễ nhất)

### Bước 1: Tạo tài khoản
- Truy cập: https://railway.app
- Đăng nhập bằng GitHub

### Bước 2: Deploy
1. Click "New Project"
2. Chọn "Deploy from GitHub repo"
3. Chọn repository của bạn
4. Railway tự động detect và deploy

### Bước 3: Cấu hình biến môi trường
Trong Railway dashboard:
1. Vào tab "Variables"
2. Thêm các biến:
   - `EMAIL_USER=your-email@gmail.com`
   - `EMAIL_PASSWORD=your-app-password`
   - `JWT_SECRET=your-random-secret-key` (tạo bằng: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`)

### Bước 4: Lấy URL
- Railway sẽ tạo URL tự động: `https://your-app-name.up.railway.app`
- Copy URL này và chia sẻ cho mọi người!

---

## 🌐 Option 2: Render (Miễn phí)

### Bước 1: Tạo tài khoản
- Truy cập: https://render.com
- Đăng nhập bằng GitHub

### Bước 2: Deploy
1. Click "New +" → "Web Service"
2. Connect GitHub repository
3. Cấu hình:
   - **Name**: Tên ứng dụng
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free

### Bước 3: Cấu hình biến môi trường
Trong Render dashboard:
- Vào tab "Environment"
- Thêm các biến như Railway

### Bước 4: Lấy URL
- URL sẽ là: `https://your-app-name.onrender.com`

---

## 🌐 Option 3: Heroku (Cần thẻ tín dụng)

### Bước 1: Cài đặt Heroku CLI
- Tải: https://devcenter.heroku.com/articles/heroku-cli

### Bước 2: Đăng nhập
```bash
heroku login
```

### Bước 3: Tạo app
```bash
heroku create your-app-name
```

### Bước 4: Cấu hình biến môi trường
```bash
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set JWT_SECRET=your-random-secret
```

### Bước 5: Deploy
```bash
git push heroku main
```

### Bước 6: Lấy URL
```bash
heroku open
```
URL sẽ là: `https://your-app-name.herokuapp.com`

---

## 🌐 Option 4: Ngrok (Test nhanh - Tạm thời)

Nếu bạn chỉ muốn test nhanh trên internet:

### Bước 1: Tải Ngrok
- Tải từ: https://ngrok.com/download

### Bước 2: Chạy server local
```bash
npm start
```

### Bước 3: Chạy Ngrok
```bash
ngrok http 3000
```

### Bước 4: Lấy URL
Ngrok sẽ tạo URL: `https://xxxx-xx-xx-xx-xx.ngrok.io`

**Lưu ý**: URL này chỉ hoạt động khi máy bạn đang chạy và Ngrok đang mở.

---

## 🔧 Cấu hình sau khi Deploy

### 1. Cập nhật CORS (nếu cần)
Trong `server.js`, nếu bạn muốn chỉ cho phép domain cụ thể:
```javascript
app.use(cors({
    origin: 'https://your-domain.com',
    credentials: true
}));
```

### 2. HTTPS
- Railway, Render, Heroku tự động cung cấp HTTPS
- Không cần cấu hình thêm

### 3. Database
- SQLite sẽ tự động tạo trên server
- Database lưu trong file `database.db` trên server

---

## ✅ Checklist sau khi Deploy

- [ ] Server đã chạy thành công
- [ ] Có thể truy cập qua URL
- [ ] Đăng ký user mới hoạt động
- [ ] Đăng nhập admin (admin/1) hoạt động
- [ ] Quên mật khẩu gửi email (nếu đã cấu hình)
- [ ] Admin có thể xem danh sách users

---

## 🐛 Troubleshooting

### Lỗi "Port already in use"
- Platform tự động set biến `PORT`
- Không cần sửa code

### Lỗi "Database locked"
- Đảm bảo chỉ có 1 instance chạy
- Kiểm tra file `database.db` không bị conflict

### Lỗi "Module not found"
- Kiểm tra `package.json` có đầy đủ dependencies
- Chạy `npm install` trước khi deploy

### Email không gửi được
- Kiểm tra biến môi trường `EMAIL_USER` và `EMAIL_PASSWORD`
- Đảm bảo dùng App Password (không phải mật khẩu thường)

---

## 📝 Lưu ý Quan trọng

1. **Free tier có giới hạn**:
   - Railway: 500 giờ/tháng
   - Render: Sleep sau 15 phút không dùng (free tier)
   - Heroku: Không còn free tier

2. **Bảo mật**:
   - Không commit file `.env` lên GitHub
   - Sử dụng biến môi trường trên platform
   - Đổi JWT_SECRET mạnh hơn

3. **Backup**:
   - Database file `database.db` sẽ mất nếu server restart
   - Nên backup định kỳ hoặc chuyển sang database cloud

---

## 🎯 Khuyến nghị

- **Cho test nhanh**: Dùng Ngrok
- **Cho production**: Dùng Railway hoặc Render
- **Cho doanh nghiệp**: Dùng Heroku hoặc AWS

---

Sau khi deploy, mọi người chỉ cần có link để truy cập và sử dụng! 🎉

