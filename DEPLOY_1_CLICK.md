# ⚡ Deploy 1 Click - Railway (Cực Đơn giản)

## 🎯 Mục tiêu: Có link công khai trong 5 phút

---

## 📋 Bước 1: Đẩy Code lên GitHub (2 phút)

### 1.1. Cài Git (nếu chưa có)
- Tải: https://git-scm.com/download/win
- Cài đặt → Khởi động lại Command Prompt

### 1.2. Chạy lệnh trong thư mục dự án:

```bash
cd "C:\Users\Ha Thanh Dat\Desktop\App"
git init
git add .
git commit -m "Initial commit"
```

### 1.3. Tạo Repository trên GitHub:
1. Vào: https://github.com/new
2. Tên: `finance-manager`
3. Chọn **Public**
4. **KHÔNG** tích "Initialize with README"
5. Click "Create repository"

### 1.4. Kết nối và đẩy:

```bash
git remote add origin https://github.com/YOUR-USERNAME/finance-manager.git
git push -u origin main
```

*(Thay `YOUR-USERNAME` bằng tên GitHub của bạn)*

**Nếu hỏi password:** Dùng Personal Access Token (xem bên dưới)

---

## 🚂 Bước 2: Deploy trên Railway (3 phút)

### 2.1. Đăng nhập Railway:
- Vào: https://railway.app
- Click "Login with GitHub"

### 2.2. Deploy:
1. Click "New Project"
2. Chọn "Deploy from GitHub repo"
3. Chọn `finance-manager`
4. **Xong!** Railway tự động deploy

### 2.3. Lấy Link:
- Vào tab "Settings"
- Tìm "Domains"
- Copy URL: `https://your-app-name.up.railway.app`

---

## ✅ Hoàn thành!

**Link công khai:** `https://your-app-name.up.railway.app`

Chia sẻ link này cho mọi người! 🎉

---

## 🔑 Personal Access Token (Nếu cần)

Khi push code, GitHub hỏi password:

1. Vào: https://github.com/settings/tokens
2. "Generate new token" → "Generate new token (classic)"
3. Tên: `Finance Manager`
4. Quyền: **repo** (tất cả)
5. Generate → **Copy token**
6. Dùng token làm password khi push

---

## 🎯 Đăng nhập Admin

- Tài khoản: `admin`
- Mật khẩu: `1`

---

**Xong! Bây giờ mọi người có thể truy cập qua link! 🚀**

