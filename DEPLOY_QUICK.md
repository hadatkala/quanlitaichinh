# ⚡ Deploy Nhanh - Railway (5 phút)

## Cách 1: Deploy trực tiếp từ GitHub

### Bước 1: Đẩy code lên GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### Bước 2: Deploy trên Railway
1. Vào https://railway.app
2. Đăng nhập bằng GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Chọn repository vừa push
5. Railway tự động deploy!

### Bước 3: Cấu hình Email (tùy chọn)
1. Vào tab "Variables" trong Railway
2. Thêm:
   - `EMAIL_USER` = your-email@gmail.com
   - `EMAIL_PASSWORD` = your-app-password

### Bước 4: Lấy URL
- Railway tạo URL: `https://your-app-name.up.railway.app`
- Copy và chia sẻ!

---

## Cách 2: Deploy bằng Render

1. Vào https://render.com
2. Đăng nhập bằng GitHub
3. "New +" → "Web Service"
4. Connect repository
5. Cấu hình:
   - Build: `npm install`
   - Start: `node server.js`
6. Deploy!

URL: `https://your-app-name.onrender.com`

---

## Cách 3: Test nhanh với Ngrok

1. Chạy server local: `npm start`
2. Tải Ngrok: https://ngrok.com
3. Chạy: `ngrok http 3000`
4. Copy URL từ Ngrok

**Lưu ý**: URL này chỉ hoạt động khi máy bạn đang chạy.

---

## ✅ Sau khi Deploy

1. Mở URL trong trình duyệt
2. Đăng nhập admin:
   - Tài khoản: `admin`
   - Mật khẩu: `1`
3. Chia sẻ link cho mọi người!

---

## 🔒 Bảo mật

- Không commit `.env` file
- Dùng biến môi trường trên platform
- Đổi JWT_SECRET mạnh hơn

