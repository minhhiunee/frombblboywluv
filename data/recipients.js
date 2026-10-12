/**
 * Nguồn dữ liệu tập trung cho 25 người nhận.
 *
 * status:
 *   - "draft"  : chưa đủ tên/lời chúc — không xuất hiện khi tìm kiếm
 *   - "sample" : dữ liệu mẫu để xem giao diện — hãy thay bằng nội dung thật
 *   - "ready"  : đã hoàn thiện, được tìm kiếm và hiển thị
 *
 * Ảnh: đặt file vào assets/images/people/person-XX/photo-0N.webp
 * rồi giữ nguyên đường dẫn dưới đây (hoặc sửa cho khớp tên file).
 */
window.RECIPIENTS = [
  {
    id: "person-01",
    status: "sample",
    name: "Mẫu Một",
    subtitle: "Một lời chúc dịu dàng",
    message:
      "Chúc bạn một ngày 20/10 dịu dàng và thật rạng rỡ.\n" +
      "Mong những điều tốt đẹp nhất luôn ở bên bạn — hôm nay và mỗi ngày sau đó.\n\n" +
      "Đây là dữ liệu mẫu. Hãy thay tên, lời chúc và ảnh trong file data/recipients.js.",
    images: [
      "assets/images/people/person-01/photo-01.webp",
      "assets/images/people/person-01/photo-02.webp",
      "assets/images/people/person-01/photo-03.webp",
      "assets/images/people/person-01/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Mẫu Một",
      "Khung ảnh thứ hai dành cho Mẫu Một",
      "Khung ảnh thứ ba dành cho Mẫu Một",
      "Khung ảnh thứ tư dành cho Mẫu Một"
    ]
  },
  {
    id: "person-02",
    status: "sample",
    name: "Mẫu Hai",
    subtitle: "Gửi một chút ấm áp",
    message:
      "Nhân Ngày Phụ nữ Việt Nam, xin gửi tới bạn sự trân trọng và những lời chúc chân thành nhất.\n" +
      "Cảm ơn bạn vì đã mang lại sự dịu dàng cho những người xung quanh.\n\n" +
      "Đây là dữ liệu mẫu. Hãy thay bằng lời chúc và ảnh thật khi đã sẵn sàng.",
    images: [
      "assets/images/people/person-02/photo-01.webp",
      "assets/images/people/person-02/photo-02.webp",
      "assets/images/people/person-02/photo-03.webp",
      "assets/images/people/person-02/photo-04.webp",
      "assets/images/people/person-02/photo-05.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Mẫu Hai",
      "Khung ảnh thứ hai dành cho Mẫu Hai",
      "Khung ảnh thứ ba dành cho Mẫu Hai",
      "Khung ảnh thứ tư dành cho Mẫu Hai",
      "Khung ảnh thứ năm dành cho Mẫu Hai"
    ]
  },
  {
    id: "person-03",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-03/photo-01.webp",
      "assets/images/people/person-03/photo-02.webp",
      "assets/images/people/person-03/photo-03.webp",
      "assets/images/people/person-03/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-04",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-04/photo-01.webp",
      "assets/images/people/person-04/photo-02.webp",
      "assets/images/people/person-04/photo-03.webp",
      "assets/images/people/person-04/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-05",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-05/photo-01.webp",
      "assets/images/people/person-05/photo-02.webp",
      "assets/images/people/person-05/photo-03.webp",
      "assets/images/people/person-05/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-06",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-06/photo-01.webp",
      "assets/images/people/person-06/photo-02.webp",
      "assets/images/people/person-06/photo-03.webp",
      "assets/images/people/person-06/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-07",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-07/photo-01.webp",
      "assets/images/people/person-07/photo-02.webp",
      "assets/images/people/person-07/photo-03.webp",
      "assets/images/people/person-07/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-08",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-08/photo-01.webp",
      "assets/images/people/person-08/photo-02.webp",
      "assets/images/people/person-08/photo-03.webp",
      "assets/images/people/person-08/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-09",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-09/photo-01.webp",
      "assets/images/people/person-09/photo-02.webp",
      "assets/images/people/person-09/photo-03.webp",
      "assets/images/people/person-09/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-10",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-10/photo-01.webp",
      "assets/images/people/person-10/photo-02.webp",
      "assets/images/people/person-10/photo-03.webp",
      "assets/images/people/person-10/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-11",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-11/photo-01.webp",
      "assets/images/people/person-11/photo-02.webp",
      "assets/images/people/person-11/photo-03.webp",
      "assets/images/people/person-11/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-12",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-12/photo-01.webp",
      "assets/images/people/person-12/photo-02.webp",
      "assets/images/people/person-12/photo-03.webp",
      "assets/images/people/person-12/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-13",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-13/photo-01.webp",
      "assets/images/people/person-13/photo-02.webp",
      "assets/images/people/person-13/photo-03.webp",
      "assets/images/people/person-13/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-14",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-14/photo-01.webp",
      "assets/images/people/person-14/photo-02.webp",
      "assets/images/people/person-14/photo-03.webp",
      "assets/images/people/person-14/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-15",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-15/photo-01.webp",
      "assets/images/people/person-15/photo-02.webp",
      "assets/images/people/person-15/photo-03.webp",
      "assets/images/people/person-15/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-16",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-16/photo-01.webp",
      "assets/images/people/person-16/photo-02.webp",
      "assets/images/people/person-16/photo-03.webp",
      "assets/images/people/person-16/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-17",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-17/photo-01.webp",
      "assets/images/people/person-17/photo-02.webp",
      "assets/images/people/person-17/photo-03.webp",
      "assets/images/people/person-17/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-18",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-18/photo-01.webp",
      "assets/images/people/person-18/photo-02.webp",
      "assets/images/people/person-18/photo-03.webp",
      "assets/images/people/person-18/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-19",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-19/photo-01.webp",
      "assets/images/people/person-19/photo-02.webp",
      "assets/images/people/person-19/photo-03.webp",
      "assets/images/people/person-19/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-20",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-20/photo-01.webp",
      "assets/images/people/person-20/photo-02.webp",
      "assets/images/people/person-20/photo-03.webp",
      "assets/images/people/person-20/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-21",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-21/photo-01.webp",
      "assets/images/people/person-21/photo-02.webp",
      "assets/images/people/person-21/photo-03.webp",
      "assets/images/people/person-21/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-22",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-22/photo-01.webp",
      "assets/images/people/person-22/photo-02.webp",
      "assets/images/people/person-22/photo-03.webp",
      "assets/images/people/person-22/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-23",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-23/photo-01.webp",
      "assets/images/people/person-23/photo-02.webp",
      "assets/images/people/person-23/photo-03.webp",
      "assets/images/people/person-23/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-24",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-24/photo-01.webp",
      "assets/images/people/person-24/photo-02.webp",
      "assets/images/people/person-24/photo-03.webp",
      "assets/images/people/person-24/photo-04.webp"
    ],
    imageAlts: []
  },
  {
    id: "person-25",
    status: "draft",
    name: "",
    subtitle: "",
    message: "",
    images: [
      "assets/images/people/person-25/photo-01.webp",
      "assets/images/people/person-25/photo-02.webp",
      "assets/images/people/person-25/photo-03.webp",
      "assets/images/people/person-25/photo-04.webp"
    ],
    imageAlts: []
  }
];
