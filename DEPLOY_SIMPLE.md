# 🌐 Deploy lên Internet - Hướng dẫn Đơn giản

## 🎯 Mục tiêu
Deploy ứng dụng lên internet để mọi người có thể truy cập qua link.

---

## 📋 Bước 1: Đẩy code lên GitHub

### 1.1. Tạo tài khoản GitHub (nếu chưa có)
- Vào: https://github.com
- Đăng ký tài khoản miễn phí

### 1.2. Tạo repository mới
1. Vào GitHub → Click "+" → "New repository"
2. Đặt tên: `finance-manager` (hoặc tên bạn muốn)
3. Chọn "Public"
4. Click "Create repository"

### 1.3. Đẩy code lên GitHub
Mở Command Prompt trong thư mục dự án và chạy:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/finance-manager.git
git push -u origin main
```

**Thay `YOUR-USERNAME` bằng tên GitHub của bạn!**

---

## 🚂 Bước 2: Deploy trên Railway (Dễ nhất)

### 2.1. Tạo tài khoản Railway
1. Vào: https://railway.app
2. Click "Login" → "Login with GitHub"
3. Cho phép Railway truy cập GitHub

### 2.2. Deploy
1. Click "New Project"
2. Chọn "Deploy from GitHub repo"
3. Chọn repository `finance-manager` vừa tạo
4. Railway tự động detect và deploy!

### 2.3. Cấu hình Email (Tùy chọn)
1. Trong Railway dashboard, click vào project
2. Vào tab "Variables"
3. Click "New Variable"
4. Thêm 2 biến:
   - **Name**: `EMAIL_USER` → **Value**: `your-email@gmail.com`
   - **Name**: `EMAIL_PASSWORD` → **Value**: `your-app-password` (16 ký tự từ Gmail)

### 2.4. Lấy URL
1. Vào tab "Settings" trong Railway
2. Tìm phần "Domains"
3. Railway tự tạo URL: `https://your-app-name.up.railway.app`
4. Copy URL này!

---

## 🎉 Hoàn thành!

Bây giờ bạn có link: `https://your-app-name.up.railway.app`

**Chia sẻ link này cho mọi người!**

### Đăng nhập Admin:
- Tài khoản: `admin`
- Mật khẩu: `1`

---

## 🔄 Cập nhật Code sau này

Khi bạn sửa code, chỉ cần:
```bash
git add .
git commit -m "Update"
git push
```

Railway tự động deploy lại!

---

## ❓ Troubleshooting

### Lỗi "Build failed"
- Kiểm tra `package.json` có đầy đủ dependencies
- Kiểm tra logs trong Railway dashboard

### Lỗi "Cannot connect"
- Đợi 1-2 phút để Railway deploy xong
- Kiểm tra tab "Deployments" trong Railway

### Lỗi "Database error"
- Railway tự tạo database
- Nếu lỗi, xóa service và tạo lại

---

## 💡 Lưu ý

1. **Free tier**: Railway cho 500 giờ/tháng miễn phí
2. **URL**: Railway tự tạo URL, bạn có thể đổi tên trong Settings
3. **Email**: Không bắt buộc, chỉ cần cho tính năng quên mật khẩu

---

**Chúc bạn deploy thành công! 🎉**

