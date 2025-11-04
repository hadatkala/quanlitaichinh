# 📤 Cập nhật Code lên Link Công khai

## 🚀 Cách 1: Dùng Script Tự động (Dễ nhất)

**Double-click vào file `update-github.bat`** trong thư mục dự án.

Script sẽ tự động:
1. ✅ Kiểm tra Git status
2. ✅ Thêm tất cả thay đổi
3. ✅ Commit với message
4. ✅ Push lên GitHub

Sau khi push, Railway/Render sẽ tự động deploy!

---

## 🚀 Cách 2: Làm Thủ công

Mở **Command Prompt** trong thư mục dự án và chạy:

### Bước 1: Kiểm tra thay đổi
```bash
cd "C:\Users\Ha Thanh Dat\Desktop\App"
git status
```

### Bước 2: Thêm tất cả thay đổi
```bash
git add .
```

### Bước 3: Commit
```bash
git commit -m "Update: Removed checkbox, new balance/savings calculation, mobile responsive design"
```

### Bước 4: Push lên GitHub
```bash
git push origin main
```

---

## 🔑 Nếu GitHub hỏi password

**KHÔNG dùng mật khẩu GitHub!** Dùng Personal Access Token:

1. Vào: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Đặt tên: `Finance Manager Update`
4. Chọn quyền: **repo** (tất cả)
5. Click "Generate token"
6. **Copy token ngay** (chỉ hiển thị 1 lần!)
7. Dùng token làm password khi push

---

## ✅ Sau khi Push thành công

### Railway (Auto-deploy)
- Railway tự động phát hiện push mới
- Tự động deploy lại
- Mất khoảng 1-2 phút
- Kiểm tra tab "Deployments" trong Railway dashboard

### Render (Auto-deploy)
- Render tự động phát hiện push mới
- Tự động deploy lại
- Mất khoảng 2-3 phút
- Kiểm tra tab "Events" trong Render dashboard

---

## 🔄 Kiểm tra Deploy Status

1. **Railway:**
   - Vào: https://railway.app
   - Chọn project của bạn
   - Vào tab "Deployments"
   - Xem trạng thái deploy

2. **Render:**
   - Vào: https://render.com
   - Chọn service của bạn
   - Vào tab "Events"
   - Xem trạng thái deploy

---

## 📝 Lưu ý

1. **Commit message**: Mô tả rõ ràng thay đổi
2. **Push thường xuyên**: Push sau mỗi feature hoàn thành
3. **Kiểm tra deploy**: Đảm bảo code đã deploy thành công

---

## ❓ Troubleshooting

### Lỗi "fatal: not a git repository"
```bash
git init
git remote add origin https://github.com/hadatkala/quanlitaichinh.git
```

### Lỗi "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/hadatkala/quanlitaichinh.git
```

### Lỗi "authentication failed"
- Dùng Personal Access Token thay vì mật khẩu
- Kiểm tra token có quyền `repo`

### Lỗi "branch main does not exist"
```bash
git branch -M main
git push -u origin main
```

---

**Chúc bạn cập nhật thành công! 🎉**

