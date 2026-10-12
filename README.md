# Chúc mừng Ngày Phụ nữ Việt Nam 20/10/2026

Website tĩnh, không backend, dùng để gửi lời chúc riêng cho tối đa 25 người. Người xem nhập tên, nếu khớp sẽ thấy lời chúc và thư viện 4–5 ảnh.

Phù hợp triển khai trên **GitHub Pages** (kể cả project site dạng `https://<user>.github.io/<repo>/`).

## Công nghệ

HTML, CSS và JavaScript thuần. Dữ liệu nằm trong `data/recipients.js` nên hoạt động cả khi mở qua máy chủ tĩnh, không cần `fetch()` hay API.

Hai mục `person-01` và `person-02` đang là **dữ liệu mẫu** (`Mẫu Một`, `Mẫu Hai`) để kiểm tra giao diện. Các vị trí còn lại để trống (`status: "draft"`) cho đến khi có tên, lời chúc và ảnh thật.

## Chạy local

Không mở trực tiếp bằng `file://` nếu bạn muốn kiểm tra đường dẫn giống lúc deploy. Hãy chạy một HTTP server từ thư mục gốc của dự án:

```bash
# Python
python -m http.server 8080
```

Rồi mở [http://localhost:8080](http://localhost:8080).

Để xem lời chúc mẫu, nhập `Mẫu Một` hoặc `Mẫu Hai` (không phân biệt hoa thường, khoảng trắng thừa được bỏ).

## Cấu hình 25 người nhận

Mở `data/recipients.js`. Mỗi người có:

| Trường | Ý nghĩa |
| --- | --- |
| `id` | Định danh duy nhất, giữ `person-01` … `person-25` |
| `status` | `draft` (ẩn), `sample` (mẫu), `ready` (hiển thị) |
| `name` | Tên dùng để tìm kiếm |
| `subtitle` | Dòng mở đầu, có thể để trống |
| `message` | Lời chúc; xuống dòng bằng `\n` |
| `images` | 4 hoặc 5 đường dẫn ảnh |
| `imageAlts` | Mô tả ảnh tương ứng |

Khi đã có nội dung thật:

1. Điền `name` và `message`.
2. Đặt `status` thành `"ready"`.
3. Với hai mục mẫu, hãy thay tên `Mẫu Một` / `Mẫu Hai` — không để tên mẫu lẫn với người thật.

Người chưa `ready`/`sample` hoặc thiếu tên, lời chúc, hoặc không đủ 4–5 đường dẫn ảnh sẽ **không** hiện khi tìm kiếm.

Tên sau khi chuẩn hóa (Unicode NFC, không phân biệt hoa thường, gộp khoảng trắng) phải là duy nhất. Nếu hai tên chỉ khác dấu và gây nhầm, người dùng cần nhập đúng dấu.

## Thêm ảnh

Cấu trúc thư mục:

```text
assets/images/people/person-01/photo-01.webp
assets/images/people/person-01/photo-02.webp
assets/images/people/person-01/photo-03.webp
assets/images/people/person-01/photo-04.webp
```

Lặp tương tự đến `person-25`. Có thể thêm `photo-05.webp`. Ưu tiên WebP, kích thước vừa phải. Website chỉ tải ảnh của người đang xem.

Nếu file chưa có, giao diện hiện khung chờ (`assets/images/decorations/placeholder.svg`) và không làm vỡ layout.

## GitHub Pages

1. Đưa toàn bộ source lên nhánh chính (ví dụ `main`).
2. Settings → Pages → Build and deployment.
3. Source: **Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)`.
5. Không cần GitHub Actions, secret hay biến môi trường.

File `.nojekyll` đã có để GitHub không xử lý Jekyll. Mọi đường dẫn CSS/JS/ảnh đều là đường dẫn tương đối, nên site vẫn chạy dưới `/<tên-repo>/`.

## Kiểm tra nhanh

- Trang chủ hiện hero và ô tìm tên, không liệt kê 25 người.
- `Mẫu Một` / `  mẫu một  ` mở đúng lời chúc.
- Tên không tồn tại báo lỗi thân thiện.
- Nút **Tìm người khác** quay về ô tìm kiếm.
- Ảnh mở lightbox; phím Escape đóng; mũi tên trái/phải đổi ảnh.

## Ghi chú

Không gửi tên người xem lên máy chủ. Toàn bộ tìm kiếm chạy trên trình duyệt. Font chữ tải từ Google Fonts; nếu mạng ngoài không có, trình duyệt dùng Times New Roman / Segoe UI / Tahoma.
