# Interactive Celebration Web App

Ứng dụng web tương tác tĩnh (Static Client-Side Web Application) được xây dựng hoàn toàn bằng **HTML5, Vanilla CSS3 và JavaScript thuần (Vanilla JS)**. Dự án được thiết kế với kiến trúc phi máy chủ (zero-backend), không phụ thuộc vào framework bên ngoài hay các tiến trình build phức tạp, tối ưu hóa cho việc phân phối tức thì trên **GitHub Pages**.

---

## 🛠 Ngăn xếp công nghệ (Technology Stack)

| Thành phần | Công nghệ sử dụng | Mục đích & Đặc điểm kỹ thuật |
| :--- | :--- | :--- |
| **Markup** | HTML5 Semantic | Cấu trúc ngữ nghĩa chuẩn SEO, hỗ trợ bộ đọc màn hình (Screen Readers), thẻ `<dialog>` native, ARIA Live Regions. |
| **Styling** | Vanilla CSS3 | Custom Properties (CSS Variables), Flexbox, CSS Grid, Glassmorphism, GPU-accelerated Keyframe Animations. |
| **Logic** | Vanilla JavaScript (ES6+) | Kiến trúc Module (IIFE), xử lý sự kiện bất đồng bộ, thao tác DOM trực tiếp, zero-dependency. |
| **Search Engine** | Client-side Fuzzy Matcher | Chuẩn hóa chuỗi Unicode (NFD Diacritics Stripping), loại bỏ dấu tiếng Việt, tìm kiếm không phân biệt hoa thường. |
| **Typography** | Google Fonts | `Playfair Display` (tiêu đề serif trang nhã), `Be Vietnam Pro` (nội dung sans-serif tối ưu hiển thị tiếng Việt). |
| **Audio** | HTML5 Audio API | Tích hợp nhạc nền tự động kích hoạt sau cử chỉ người dùng (Autoplay Policy compliance), điều khiển bật/tắt động. |
| **Hosting** | Static Hosting / GitHub Pages | Hỗ trợ file `.nojekyll`, đường dẫn tương đối (relative paths), mở được trực tiếp qua giao thức `file://` hoặc bất kỳ static server nào. |

---

## 🏛 Kiến trúc dự án (Architecture & Codebase Structure)

Dự án áp dụng mô hình phân tách mối quan tâm (Separation of Concerns - SoC) rõ ràng giữa tầng dữ liệu, tầng logic nghiệp vụ và tầng giao diện:

```text
.
├── .nojekyll                  # Vô hiệu hóa Jekyll build trên GitHub Pages (giữ nguyên cấu trúc thư mục)
├── index.html                 # Entry point, cấu trúc HTML semantic và modal dialog
├── README.md                  # Tài liệu kỹ thuật dự án
├── assets/                    # Tài nguyên tĩnh
│   ├── logotys-01.png         # Web Favicon & Brand icon
│   ├── mewmew.gif             # Ảnh động trang trí
│   ├── [h1..t5, q3].png       # Sprite icon các gói quà rơi
│   ├── music.mp3              # File âm thanh nền
│   └── images/                # Thư mục hình ảnh người nhận và placeholder
│       ├── decorations/       # Vector placeholder SVG
│       └── people/            # Dữ liệu ảnh phân cấp theo từng danh mục
├── css/
│   └── styles.css             # Hệ thống Design tokens, reset, typography, responsive & animation
├── data/
│   └── recipients.js          # Tầng dữ liệu (Data layer) chứa mảng cấu hình độc lập
└── js/
    ├── app.js                 # Controller chính: điều phối trạng thái, vòng đời ứng dụng & hiệu ứng DOM
    ├── game.js                # Mini game Arcade: Canvas 60FPS, vật lý va chạm, điều khiển thanh đỡ & tính điểm
    ├── search.js              # Thuật toán chuẩn hóa chuỗi và tìm kiếm client-side
    └── validate.js            # Module kiểm tra tính toàn vẹn của schema dữ liệu
```

---

## ⚡ Các giải pháp kỹ thuật nổi bật

### 1. Thuật toán chuẩn hóa tiếng Việt & Client-Side Searching (`js/search.js`)
- Xử lý triệt để bảng mã tiếng Việt có dấu sang không dấu bằng chuẩn phân tách Unicode NFD:
  $$\text{normalized} = \text{input}.\text{normalize}("NFD").\text{replace}(/[\backslash u0300-\backslash u036f]/g, "")$$
- Chuyển đổi ký tự đặc thù tiếng Việt (`đ`, `Đ` $\to$ `d`, `D`), chuyển về chữ thường, loại bỏ ký tự đặc biệt và gom cụm khoảng trắng thừa (`\s+`).
- Thuật toán khớp đa tầng (Multi-tier Matching):
  1. **Exact Match**: So khớp chính xác chuỗi nguyên bản.
  2. **Normalized Exact**: So khớp chuỗi sau khi chuẩn hóa không dấu.
  3. **Token Substring Match**: Tách từ khóa và so khớp các thành phần họ/tên.

### 2. Hệ thống Animation & Tương tác vi mô (Micro-interactions)
- **Cánh hoa trôi (Drifting Petals)**: Sử dụng các phần tử DOM độc lập với chu kỳ thời gian và độ trễ so le, tính toán độ lệch quỹ đạo ngẫu nhiên theo trục X/Y và góc xoay 3D (`transform: translate3d`).
- **Gói quà rơi liên tục (Falling Gift Engine)**: Thuật toán phân bổ ngẫu nhiên vị trí theo các dải tọa độ ngang (slots) nhằm chống chồng lấn, điều khiển chu kỳ rơi mượt mà bằng CSS `@keyframes`.
- **Hiệu ứng hạt nổ (Particle Confetti Burst)**: Sinh tọa độ vector cực (Polar coordinates) qua JavaScript để bắn các hạt emoji theo góc và cự ly ngẫu nhiên, tự động dọn dẹp DOM sau khi animation kết thúc nhằm tránh rò rỉ bộ nhớ (Memory Leak).
- **Huy hiệu trái tim động (Interactive Heart Badge)**: Kết hợp nhịp đập tim đôi (`doodleHeartBeat`), quầng sáng phát xung (`heartBadgePulse`) và hiệu ứng sóng nhấp nhô so le (`heartItemBounce`) cho từng hạt emoji với CSS filter `drop-shadow`.

### 3. Khả năng truy cập & Tối ưu hiệu năng (Accessibility & Performance)
- Tuân thủ tiêu chuẩn **WCAG 2.1**:
  - Hỗ trợ đầy đủ điều hướng bằng bàn phím (`Tab`, `Enter`, `Space`, `Escape`, `ArrowLeft`, `ArrowRight`).
  - Sử dụng thẻ `<dialog>` native giúp quản lý focus trap chuẩn trình duyệt.
  - Vùng thông báo ẩn `aria-live="polite"` để hỗ trợ công nghệ trợ năng khi chuyển đổi giao diện.
- Tự động tắt toàn bộ chuyển động nặng khi người dùng kích hoạt thiết lập giảm tải chuyển động trong hệ điều hành qua media query `@media (prefers-reduced-motion: reduce)`.
- Ảnh sử dụng thuộc tính `decoding="async"` và fallback tự động sang vector placeholder nếu tài nguyên hình ảnh bị lỗi hoặc chưa tồn tại.

---

## ⚙️ Cấu hình dữ liệu (`data/recipients.js`)

Mọi thông tin hiển thị được cấu hình dưới dạng đối tượng JSON thuần trong file `data/recipients.js`:

```javascript
window.RECIPIENTS = [
  {
    id: "sample-id",              // Định danh duy nhất (Slug)
    name: "Tên Người Nhận",       // Tên đầy đủ hiển thị trên thiệp
    keywords: ["ten", "nhan"],    // Mảng từ khóa phụ trợ tìm kiếm (tùy chọn)
    subtitle: "Lời đề từ...",      // Tiêu đề phụ của thiệp
    message: "Nội dung lời chúc...", // Hỗ trợ ký tự xuống dòng (\n)
    images: [                     // Mảng đường dẫn ảnh kỷ niệm
      "assets/images/people/sample/photo-1.jpg",
      "assets/images/people/sample/photo-2.jpg"
    ],
    imageAlts: ["💖", "💖"],      // Nhãn mô tả trợ năng cho từng ảnh
    status: "ready"               // Trạng thái: "ready" hoặc "draft"
  }
];
```

---

## 🚀 Hướng dẫn chạy cục bộ & Triển khai

### Khởi chạy môi trường Local
Vì dự án là web tĩnh thuần túy, bạn có thể chạy bằng bất kỳ công cụ static server nào:

```bash
# Cách 1: Sử dụng Python
python -m http.server 8080

# Cách 2: Sử dụng Node.js (npx serve)
npx serve .

# Cách 3: Sử dụng PHP tích hợp
php -S localhost:8080
```
Truy cập: `http://localhost:8080` trên trình duyệt.

### Triển khai lên GitHub Pages
1. Đẩy mã nguồn lên nhánh chính (`main` hoặc `master`) trên GitHub repository.
2. Vào **Settings** $\to$ **Pages** trên giao diện repository.
3. Tại phần **Build and deployment** $\to$ **Source**, chọn `Deploy from a branch`.
4. Chọn nhánh tương ứng và thư mục `/ (root)`, sau đó nhấn **Save**.
5. Trang web sẽ tự động được xuất bản tại: `https://<username>.github.io/<repo-name>/`.
