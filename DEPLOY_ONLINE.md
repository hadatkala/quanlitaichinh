# 🌐 Đưa Ứng dụng lên Internet - Link Công khai

## 🎯 Mục tiêu
Tạo link công khai để mọi người có thể truy cập và sử dụng ứng dụng.

---

## 🚀 Cách 1: Railway (Khuyến nghị - Dễ nhất)

### Bước 1: Tạo tài khoản GitHub (nếu chưa có)
1. Vào: https://github.com
2. Đăng ký tài khoản miễn phí

### Bước 2: Đẩy code lên GitHub

Mở Command Prompt trong thư mục dự án:

```bash
cd "C:\Users\Ha Thanh Dat\Desktop\App"
```

**Nếu chưa cài Git:**
- Tải: https://git-scm.com/download/win
- Cài đặt → Khởi động lại Command Prompt

**Sau khi cài Git, chạy:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

**Tạo repository trên GitHub:**
1. Vào: https://github.com/new
2. Tên: `finance-manager` (hoặc tên bạn muốn)
3. Chọn **Public**
4. **KHÔNG** tích "Initialize with README"
5. Click "Create repository"

**Đẩy code lên:**
```bash
git remote add origin https://github.com/YOUR-USERNAME/finance-manager.git
git push -u origin main
```

*(Thay `YOUR-USERNAME` bằng tên GitHub của bạn)*

### Bước 3: Deploy trên Railway

1. **Tạo tài khoản Railway:**
   - Vào: https://railway.app
   - Click "Login" → "Login with GitHub"
   - Cho phép Railway truy cập GitHub

2. **Deploy:**
   - Click "New Project"
   - Chọn "Deploy from GitHub repo"
   - Chọn repository `finance-manager` vừa tạo
   - Railway tự động detect và deploy!

3. **Lấy Link:**
   - Vào tab "Settings" trong Railway
   - Tìm phần "Domains"
   - Railway tự tạo URL: `https://your-app-name.up.railway.app`
   - **Copy link này!**

4. **Cấu hình Email (Tùy chọn):**
   - Vào tab "Variables"
   - Thêm:
     - `EMAIL_USER` = your-email@gmail.com
     - `EMAIL_PASSWORD` = your-app-password

### ✅ Hoàn thành!

Bây giờ bạn có link công khai: `https://your-app-name.up.railway.app`

**Chia sẻ link này cho mọi người!**

---

## 🚀 Cách 2: Render (Miễn phí, dễ dùng)

### Bước 1: Đẩy code lên GitHub (giống trên)

### Bước 2: Deploy trên Render

1. **Tạo tài khoản:**
   - Vào: https://render.com
   - Đăng nhập bằng GitHub

2. **Tạo Web Service:**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Chọn repository `finance-manager`

3. **Cấu hình:**
   - **Name**: finance-manager
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free

4. **Cấu hình biến môi trường:**
   - Vào tab "Environment"
   - Thêm:
     - `EMAIL_USER` = your-email@gmail.com
     - `EMAIL_PASSWORD` = your-app-password

5. **Deploy:**
   - Click "Create Web Service"
   - Render tự động deploy!

6. **Lấy Link:**
   - URL: `https://finance-manager.onrender.com`
   - (hoặc tên bạn đặt)

### ✅ Hoàn thành!

---

## 🚀 Cách 3: Ngrok (Test nhanh - Tạm thời)

Nếu chỉ muốn test nhanh:

1. **Chạy server local:**
   ```bash
   npm start
   ```

2. **Tải Ngrok:**
   - Tải: https://ngrok.com/download
   - Giải nén vào thư mục bất kỳ

3. **Chạy Ngrok:**
   ```bash
   ngrok http 3000
   ```

4. **Lấy Link:**
   - Ngrok tạo URL: `https://xxxx-xx-xx-xx.ngrok.io`
   - Copy và chia sẻ!

**⚠️ Lưu ý:** Link này chỉ hoạt động khi:
- Server đang chạy (`npm start`)
- Ngrok đang mở
- Máy bạn đang bật

---

## 📋 Checklist

- [ ] Đã tạo tài khoản GitHub
- [ ] Đã đẩy code lên GitHub
- [ ] Đã tạo tài khoản Railway/Render
- [ ] Đã deploy
- [ ] Đã có link công khai
- [ ] Đã test đăng nhập admin (admin/1)
- [ ] Đã test đăng ký user mới

---

## ✅ Sau khi Deploy

### Đăng nhập Admin:
- Tài khoản: `admin`
- Mật khẩu: `1`

### Chia sẻ:
- Gửi link cho mọi người
- Mọi người chỉ cần link để truy cập
- Không cần cài đặt gì

---

## 🎯 Khuyến nghị

- **Cho production**: Railway hoặc Render
- **Cho test nhanh**: Ngrok
- **Miễn phí**: Cả Railway và Render đều có free tier

---

## 📝 Lưu ý

1. **Free tier có giới hạn:**
   - Railway: 500 giờ/tháng
   - Render: Sleep sau 15 phút không dùng (free tier)

2. **Database:**
   - SQLite tự động tạo trên server
   - Dữ liệu lưu trên server, không mất khi người dùng đóng trình duyệt

3. **Email:**
   - Chỉ cần nếu dùng tính năng quên mật khẩu
   - Không bắt buộc cho đăng ký/đăng nhập

---

**Chúc bạn deploy thành công! 🎉**

