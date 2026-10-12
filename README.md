# Chúc mừng Ngày Phụ nữ Việt Nam 20/10/2026

Website tĩnh (100% Client-side HTML, CSS, JavaScript thuần), **hoàn toàn không có backend, database hay API**, sẵn sàng triển khai trực tiếp lên **GitHub Pages**.

Người xem mở website, nhập tên vào ô tìm kiếm (hỗ trợ cả tiếng Việt có dấu, không dấu, không phân biệt chữ hoa/thường, tự động loại bỏ khoảng trắng thừa). Khi khớp tên, website mở thiệp chúc mừng riêng biệt cùng bộ sưu tập 4–5 khung ảnh kỷ niệm (hỗ trợ phóng to Lightbox modal).

---

## 🌸 Danh sách 19 người nhận đã cấu hình sẵn

Đã cấu hình sẵn thông tin cho 19 người nhận trong `data/recipients.js` (trạng thái `ready`):

1. **Nguyễn Thị Dung** (`person-01`)
2. **Trần Thị Ngọc Quỳnh** (`person-02`)
3. **Nguyễn Hải Băng Tâm** (`person-03`)
4. **Dương Hà Phương** (`person-04`)
5. **Hoàng Anh Thư** (`person-05`)
6. **Nguyễn Thúy Lương** (`person-06`)
7. **Bùi Kim Yến** (`person-07`)
8. **Dương Yến Nhi** (`person-08`)
9. **Nguyễn Thị Uyên Nhi** (`person-09`)
10. **Nguyễn Minh Châu** (`person-10`)
11. **Đặng Khánh Huệ** (`person-11`)
12. **Phan Thị Trà My** (`person-12`)
13. **Ninh Huyền Trang** (`person-13`)
14. **Vũ Ngọc Hân** (`person-14`)
15. **Diêm Thị Quyên** (`person-15`)
16. **Giáp Thị Hồng Nhung** (`person-16`)
17. **Nguyễn Ngọc Anh** (`person-17`)
18. **Đặng Thị Kim Oanh** (`person-18`)
19. **Nguyễn Thùy Linh** (`person-19`)

*Các vị trí từ `person-20` đến `person-25` đang ở chế độ `draft` (chờ bổ sung tên và lời chúc khi có nhu cầu).*

---

## 🚀 Triển khai GitHub Pages trong 1 phút

Dự án là website tĩnh thuần túy, mọi tài nguyên (CSS, JS, ảnh) đều dùng đường dẫn tương đối và có file `.nojekyll` sẵn ở thư mục gốc:

1. Commit và push toàn bộ code lên repository trên GitHub (ví dụ nhánh `main`).
2. Trên GitHub, vào **Settings** của repository -> mục **Pages** (cột bên trái).
3. Tại phần **Build and deployment**:
   - **Source**: Chọn `Deploy from a branch`
   - **Branch**: Chọn `main` (hoặc `master`), thư mục `/ (root)`
   - Nhấn **Save**.
4. Chờ 1–2 phút, website sẽ hoạt động tại địa chỉ:  
   `https://<tên-user>.github.io/<tên-repo>/`

---

## 📝 Cách tùy chỉnh lời chúc & thêm ảnh thật

### 1. Thay đổi lời chúc riêng
Mở file `data/recipients.js`:
- Tìm đến người cần sửa (ví dụ `person-01`).
- Sửa nội dung trường `message` (sử dụng `\n` để xuống dòng tự nhiên).
- Sửa `subtitle` nếu muốn thay đổi câu mở đầu thiệp.

### 2. Thêm ảnh thật cho từng người
Trong thư mục `assets/images/people/`:
- Đặt các file ảnh tương ứng vào thư mục của người đó, ví dụ:
  ```text
  assets/images/people/person-01/photo-01.webp
  assets/images/people/person-01/photo-02.webp
  assets/images/people/person-01/photo-03.webp
  assets/images/people/person-01/photo-04.webp
  ```
  *(Có thể dùng định dạng .webp hoặc .jpg/.png và cập nhật đuôi file trong `data/recipients.js`)*.
- **Lưu ý**: Nếu chưa có ảnh thật, hệ thống sẽ tự động hiển thị khung ảnh placeholder thanh lịch mà không làm vỡ giao diện hay phát sinh lỗi.

---

## 💻 Kiểm tra trên máy (Test tay cục bộ)

Mở trực tiếp file `index.html` trên trình duyệt bằng cách click đúp, hoặc nếu muốn kiểm tra qua máy chủ cục bộ:

```bash
# Sử dụng Python có sẵn:
python -m http.server 8080
```
Truy cập: [http://localhost:8080](http://localhost:8080) và gõ bất kỳ tên nào trong 19 người trên để xem thiệp chúc mừng!
