# 🔧 Sửa các lỗi Git

## ❌ Lỗi bạn đang gặp:

1. **"index.lock" exists** - File lock còn tồn tại
2. **"remote origin already exists"** - Remote đã tồn tại
3. **"src refspec main does not match any"** - Branch main chưa có commit

## ✅ Cách sửa:

### Bước 1: Vào đúng thư mục

```bash
cd "C:\Users\Ha Thanh Dat\Desktop\App"
```

### Bước 2: Xóa file lock

```bash
del .git\index.lock
```

Hoặc nếu không có file này, bỏ qua bước này.

### Bước 3: Cấu hình Git (nếu chưa)

```bash
git config --global user.name "Ha Thanh Dat"
git config --global user.email "your-email@example.com"
```

### Bước 4: Commit code

```bash
git add .
git commit -m "Initial commit"
```

### Bước 5: Xóa remote cũ và thêm lại

```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/finance-manager.git
```

*(Thay `YOUR-USERNAME` và `finance-manager` bằng thông tin repository của bạn)*

### Bước 6: Đẩy code lên

```bash
git branch -M main
git push -u origin main
```

---

## 🔑 Nếu hỏi password

Dùng Personal Access Token:
1. Vào: https://github.com/settings/tokens
2. Generate new token (classic)
3. Quyền: **repo**
4. Copy token
5. Dùng token làm password

---

## ⚡ Hoặc dùng script tự động

Double-click vào file `fix-git.bat` để chạy tự động!

---

## ✅ Sau khi push thành công

Repository sẽ có code. Tiếp theo deploy lên Railway để có link công khai!

