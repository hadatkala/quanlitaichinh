# ⚡ Đẩy Code lên GitHub - Hướng dẫn Nhanh

## ✅ Checklist nhanh:

### 1. Cài Git (nếu chưa có)
- Tải: https://git-scm.com/download/win
- Cài đặt → Khởi động lại Command Prompt

### 2. Cấu hình Git (1 lần)
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### 3. Tạo Repository trên GitHub
- Vào: https://github.com/new
- Tên: `finance-manager`
- Public
- Không tích "Initialize with README"
- Click "Create repository"

### 4. Đẩy Code
```bash
cd "C:\Users\Ha Thanh Dat\Desktop\App"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/finance-manager.git
git push -u origin main
```

**⚠️ Thay `YOUR-USERNAME` bằng tên GitHub của bạn!**

---

## 🔑 Personal Access Token

Nếu GitHub yêu cầu password:
1. Vào: https://github.com/settings/tokens
2. Generate new token (classic)
3. Chọn quyền: **repo**
4. Generate → Copy token
5. Dùng token làm password khi push

---

## ✅ Xong!

Code đã lên GitHub!
URL: `https://github.com/YOUR-USERNAME/finance-manager`

Tiếp theo: Deploy lên Railway để có link công khai!

