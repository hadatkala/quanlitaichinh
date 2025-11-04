# 📤 Hướng dẫn Đẩy Code lên GitHub

## Bước 1: Cài đặt Git

### Windows:
1. Tải Git từ: https://git-scm.com/download/win
2. Cài đặt (giữ nguyên các tùy chọn mặc định)
3. Khởi động lại Command Prompt hoặc PowerShell

### Kiểm tra đã cài chưa:
Mở Command Prompt và chạy:
```bash
git --version
```

Nếu thấy version number (ví dụ: `git version 2.40.0`) → Đã cài thành công!

---

## Bước 2: Cấu hình Git (Chỉ làm 1 lần)

Mở Command Prompt và chạy:
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

**Thay "Your Name" và "your-email@example.com" bằng thông tin của bạn!**

---

## Bước 3: Tạo Repository trên GitHub

1. Vào: https://github.com
2. Đăng nhập (hoặc đăng ký nếu chưa có tài khoản)
3. Click nút **"+"** ở góc trên bên phải → **"New repository"**
4. Điền thông tin:
   - **Repository name**: `finance-manager` (hoặc tên bạn muốn)
   - **Description**: "Ứng dụng quản lý tài chính cá nhân"
   - Chọn **Public** (hoặc Private nếu muốn riêng tư)
   - **KHÔNG** tích vào "Initialize this repository with a README"
   - Click **"Create repository"**

5. Sau khi tạo, GitHub sẽ hiển thị URL. Copy URL này! (Ví dụ: `https://github.com/YOUR-USERNAME/finance-manager.git`)

---

## Bước 4: Đẩy Code lên GitHub

Mở Command Prompt trong thư mục dự án:
```bash
cd "C:\Users\Ha Thanh Dat\Desktop\App"
```

### 4.1. Khởi tạo Git repository
```bash
git init
```

### 4.2. Thêm tất cả file
```bash
git add .
```

### 4.3. Commit lần đầu
```bash
git commit -m "Initial commit - Finance Manager App"
```

### 4.4. Đổi tên branch thành main
```bash
git branch -M main
```

### 4.5. Kết nối với GitHub
```bash
git remote add origin https://github.com/YOUR-USERNAME/finance-manager.git
```

**⚠️ Thay `YOUR-USERNAME` và `finance-manager` bằng thông tin repository của bạn!**

### 4.6. Đẩy code lên GitHub
```bash
git push -u origin main
```

GitHub sẽ yêu cầu đăng nhập:
- Username: Tên GitHub của bạn
- Password: Dùng **Personal Access Token** (không phải mật khẩu GitHub)

---

## Bước 5: Tạo Personal Access Token (Nếu cần)

Nếu GitHub yêu cầu token:

1. Vào: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Đặt tên: `Finance Manager`
4. Chọn quyền: **repo** (tất cả)
5. Click **"Generate token"**
6. **Copy token ngay** (chỉ hiển thị 1 lần!)
7. Dùng token này làm password khi push

---

## ✅ Hoàn thành!

Sau khi push thành công, bạn có thể:
- Xem code trên GitHub: `https://github.com/YOUR-USERNAME/finance-manager`
- Deploy lên Railway/Render
- Chia sẻ link với mọi người

---

## 🔄 Cập nhật Code sau này

Khi bạn sửa code, chỉ cần:
```bash
git add .
git commit -m "Mô tả thay đổi"
git push
```

---

## ❓ Troubleshooting

### Lỗi "fatal: not a git repository"
- Chạy `git init` trước

### Lỗi "remote origin already exists"
- Chạy: `git remote remove origin`
- Rồi chạy lại: `git remote add origin ...`

### Lỗi "authentication failed"
- Dùng Personal Access Token thay vì mật khẩu
- Kiểm tra token có quyền `repo`

### Lỗi "refusing to merge unrelated histories"
- Chạy: `git pull origin main --allow-unrelated-histories`
- Rồi: `git push -u origin main`

---

## 📝 Checklist

- [ ] Git đã cài đặt
- [ ] Đã cấu hình user.name và user.email
- [ ] Đã tạo repository trên GitHub
- [ ] Đã chạy `git init`
- [ ] Đã chạy `git add .`
- [ ] Đã chạy `git commit`
- [ ] Đã chạy `git remote add origin`
- [ ] Đã chạy `git push`

---

**Chúc bạn thành công! 🎉**

