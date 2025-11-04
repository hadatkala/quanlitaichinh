# 📒 Quản lý Tài chính Cá nhân

Ứng dụng web quản lý tài chính cá nhân đơn giản, hoạt động hoàn toàn offline trên trình duyệt.

## ✨ Tính năng

- 💰 **Quản lý thu chi**: Ghi lại thu nhập và chi tiêu hàng ngày
- 📊 **Báo cáo trực quan**: Biểu đồ chi tiêu theo danh mục
- 💵 **Quản lý ngân sách**: Đặt ngân sách cho từng danh mục và nhận cảnh báo khi vượt
- 🔍 **Bộ lọc**: Lọc giao dịch theo thời gian và danh mục
- 💾 **Lưu trữ cục bộ**: Dữ liệu được lưu trong localStorage, không mất khi tắt trình duyệt
- 📥 **Xuất/Nhập CSV**: Sao lưu và khôi phục dữ liệu
- 📱 **Responsive**: Hoạt động tốt trên cả desktop và mobile

## 🚀 Cách sử dụng

### Bước 1: Mở ứng dụng
- Mở file `index.html` trong trình duyệt web (Chrome, Firefox, Edge, Safari...)
- Không cần cài đặt hay máy chủ, chỉ cần double-click vào file

### Bước 2: Thêm giao dịch
1. Điền form "Thêm giao dịch mới":
   - Chọn loại: **Thu nhập** hoặc **Chi tiêu**
   - Nhập số tiền (VND)
   - Chọn danh mục (hoặc thêm mới bằng nút ➕)
   - Chọn ngày giao dịch
   - Thêm ghi chú (tùy chọn)
2. Nhấn nút **💾 Lưu giao dịch**

### Bước 3: Đặt ngân sách
1. Tìm phần "💰 Quản lý ngân sách danh mục"
2. Nhập số tiền ngân sách cho từng danh mục chi tiêu
3. Ứng dụng sẽ cảnh báo khi bạn chi vượt ngân sách

### Bước 4: Xem báo cáo
- Sử dụng bộ lọc thời gian để xem tổng quan theo tuần/tháng
- Xem biểu đồ chi tiêu theo danh mục
- Kiểm tra KPI: Tổng thu, Tổng chi, Số dư

### Bước 5: Sao lưu dữ liệu
- Nhấn **📥 Xuất CSV** để tải file sao lưu
- Nhấn **📤 Nhập CSV** để khôi phục dữ liệu từ file

## 📋 Danh mục mặc định

### Thu nhập
- Lương
- Thưởng
- Đầu tư
- Kinh doanh
- Khác

### Chi tiêu
- Ăn uống
- Đi lại
- Sinh hoạt
- Mua sắm
- Giải trí
- Y tế
- Giáo dục
- Khác

Bạn có thể thêm danh mục mới bằng nút ➕ trong form nhập giao dịch.

## 💡 Mẹo sử dụng

1. **Ghi chép đều đặn**: Nhập giao dịch ngay sau khi chi tiêu để không quên
2. **Đặt ngân sách thực tế**: Dựa trên chi tiêu tháng trước để đặt ngân sách hợp lý
3. **Sao lưu thường xuyên**: Xuất CSV định kỳ để tránh mất dữ liệu
4. **Sử dụng bộ lọc**: Xem báo cáo theo tuần/tháng để phân tích xu hướng

## 🔧 Cấu trúc dữ liệu

Dữ liệu được lưu trong `localStorage` với key `pf_tracker_v1`:

```json
{
  "categories": [
    { "name": "Ăn uống", "type": "expense" }
  ],
  "transactions": [
    {
      "id": 1234567890,
      "type": "expense",
      "amount": 50000,
      "category": "Ăn uống",
      "date": "2024-01-15",
      "note": "Ăn trưa"
    }
  ],
  "budgets": {
    "Ăn uống": 1000000
  }
}
```

## 📤 Xuất/Nhập CSV

### Định dạng CSV xuất ra:
```csv
Ngày,Loại,Danh mục,Ghi chú,Số tiền
"2024-01-15","Chi","Ăn uống","Ăn trưa","50000"
```

### Định dạng CSV nhập vào:
- File phải có header: `Ngày,Loại,Danh mục,Ghi chú,Số tiền`
- Loại: `Thu` hoặc `Chi`
- Ngày: định dạng `YYYY-MM-DD`
- Số tiền: số nguyên

## ⚠️ Lưu ý

- Dữ liệu được lưu cục bộ trên trình duyệt của bạn
- Nếu xóa cache/cookie hoặc đổi trình duyệt, dữ liệu sẽ mất
- Nên xuất CSV định kỳ để sao lưu
- Ứng dụng hoạt động offline, không cần internet

## 🛠️ Phát triển

### Yêu cầu
- Không cần cài đặt gì, chỉ cần trình duyệt web hiện đại

### Công nghệ sử dụng
- HTML5
- CSS3 (Gradient, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Canvas API (vẽ biểu đồ)
- localStorage API (lưu trữ)
- File API (xuất/nhập CSV)

## 📝 Giấy phép

Tự do sử dụng cho mục đích cá nhân và thương mại.

## 🎯 Hướng phát triển tương lai

- [ ] Đa ví/tài khoản
- [ ] Giao dịch định kỳ tự động
- [ ] Đăng nhập người dùng và đồng bộ cloud
- [ ] Biểu đồ xu hướng theo thời gian
- [ ] Tích hợp AI gợi ý chi tiêu
- [ ] Đa tiền tệ
- [ ] Progressive Web App (PWA)
- [ ] Chế độ bảo mật với mật khẩu
- [ ] Xuất báo cáo PDF

## 📞 Hỗ trợ

Nếu gặp vấn đề hoặc có gợi ý, vui lòng tạo issue hoặc liên hệ.

---

Made with ❤️ - Quản lý tài chính cá nhân

