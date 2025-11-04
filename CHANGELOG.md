# Changelog

Tất cả các thay đổi đáng chú ý của dự án sẽ được ghi lại trong file này.

## [1.0.0] - 2024-01-15

### ✨ Tính năng mới
- Quản lý thu chi cá nhân với form nhập liệu trực quan
- Hệ thống danh mục linh hoạt (thêm mới dễ dàng)
- Quản lý ngân sách theo danh mục với cảnh báo vượt ngân sách
- Bộ lọc theo thời gian (Tuần này, Tháng này, Tháng trước, Tùy chọn ngày)
- Bộ lọc theo danh mục
- Biểu đồ chi tiêu theo danh mục (Top 8) sử dụng Canvas API
- Hiển thị KPI: Tổng thu, Tổng chi, Số dư
- Xuất/Nhập dữ liệu CSV để sao lưu
- Lưu trữ cục bộ với localStorage
- Giao diện responsive, hoạt động tốt trên mobile và desktop
- Sửa và xóa giao dịch
- Cảnh báo khi vượt ngân sách (đổi màu, nhấp nháy, thay đổi tiêu đề tab)

### 🎨 Cải thiện giao diện
- Thiết kế gradient đẹp mắt
- Màu sắc phân biệt rõ ràng giữa Thu và Chi
- Card KPI với màu sắc trực quan
- Bảng giao dịch dễ đọc
- Form nhập liệu thân thiện

### 🔧 Cải thiện kỹ thuật
- Code tổ chức rõ ràng, dễ bảo trì
- Xử lý lỗi khi đọc/ghi localStorage
- Xử lý CSV với encoding UTF-8 BOM
- Canvas responsive với device pixel ratio
- Debounce resize event cho biểu đồ

### 📝 Tài liệu
- README.md với hướng dẫn chi tiết
- File CSV mẫu để test
- Manifest.json cho PWA (tùy chọn)
- License MIT

## [Tương lai]

### Kế hoạch
- [ ] Đa ví/tài khoản
- [ ] Giao dịch định kỳ tự động
- [ ] Đăng nhập và đồng bộ cloud
- [ ] Biểu đồ xu hướng theo thời gian
- [ ] Tích hợp AI gợi ý
- [ ] Đa tiền tệ
- [ ] PWA với service worker
- [ ] Chế độ bảo mật
- [ ] Xuất PDF báo cáo

