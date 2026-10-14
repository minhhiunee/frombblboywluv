/**
 * Nguồn dữ liệu tập trung cho 25 người nhận.
 *
 * status:
 *   - "draft"  : chưa đủ tên/lời chúc — không xuất hiện khi tìm kiếm
 *   - "sample" : dữ liệu mẫu để xem giao diện
 *   - "ready"  : đã hoàn thiện, được tìm kiếm và hiển thị
 *
 * id: gán theo slug tên tương ứng từng folder ảnh trong assets/images/people/
 */
window.RECIPIENTS = [
  {
    id: "bui-kim-yen",
    status: "ready",
    name: "Bùi Kim Yến",
    subtitle: "Tỏa ngát hương thơm và niềm vui mỗi ngày",
    message:
      "Chúc Kim Yến ngày 20/10 nhận được thật nhiều hoa, quà và những lời chúc tốt lành." +
      "\n\n" +
      "Hãy luôn là phiên bản hạnh phúc, rạng ngời và yêu đời nhất của chính mình nhé!",
    images: [
      "assets/images/people/Bùi Kim Yến/Bùi Kim Yến_1.jpg",
      "assets/images/people/Bùi Kim Yến/Bùi Kim Yến_2.jpg",
      "assets/images/people/Bùi Kim Yến/Bùi Kim Yến_3.jpg",
      "assets/images/people/Bùi Kim Yến/Bùi Kim Yến_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Bùi Kim Yến",
      "Khoảnh khắc thứ 2 của Bùi Kim Yến",
      "Khoảnh khắc thứ 3 của Bùi Kim Yến",
      "Khoảnh khắc thứ 4 của Bùi Kim Yến"
    ]
  },
  {
    id: "diem-thi-quyen",
    status: "ready",
    name: "Diêm Thị Quyên",
    subtitle: "Dịu dàng nuôi dưỡng những ước mơ",
    message:
      "Gửi lời chúc mừng 20/10 ấm áp nhất đến bạn Quyên." +
      "\n\n" +
      "Chúc bạn luôn bình an, mạnh khỏe, công việc hanh thông và luôn giữ cho mình sự lạc quan, yêu đời.",
    images: [
      "assets/images/people/Diêm Thị Quyên/Diêm Thị Quyên_1.jpg",
      "assets/images/people/Diêm Thị Quyên/Diêm Thị Quyên_2.jpg",
      "assets/images/people/Diêm Thị Quyên/Diêm Thị Quyên_3.jpg",
      "assets/images/people/Diêm Thị Quyên/Diêm Thị Quyên_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Diêm Thị Quyên",
      "Khoảnh khắc thứ 2 của Diêm Thị Quyên",
      "Khoảnh khắc thứ 3 của Diêm Thị Quyên",
      "Khoảnh khắc thứ 4 của Diêm Thị Quyên"
    ]
  },
  {
    id: "duong-ha-phuong",
    status: "ready",
    name: "Dương Hà Phương",
    subtitle: "Bình yên và hạnh phúc trong từng khoảnh khắc",
    message:
      "Nhân ngày 20/10, chúc Hà Phương luôn tràn đầy nhiệt huyết, công việc thuận lợi và cuộc sống ngập tràn tiếng cười." +
      "\n\n" +
      "Mong bạn luôn được yêu thương, trân trọng và đón nhận những điều ngọt ngào nhất của cuộc sống.",
    images: [
      "assets/images/people/Dương Hà Phương/Dương Hà Phương_1.jpg",
      "assets/images/people/Dương Hà Phương/Dương Hà Phương_2.jpg",
      "assets/images/people/Dương Hà Phương/Dương Hà Phương_3.jpg",
      "assets/images/people/Dương Hà Phương/Dương Hà Phương_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Dương Hà Phương",
      "Khoảnh khắc thứ 2 của Dương Hà Phương",
      "Khoảnh khắc thứ 3 của Dương Hà Phương",
      "Khoảnh khắc thứ 4 của Dương Hà Phương"
    ]
  },
  {
    id: "duong-yen-nhi",
    status: "ready",
    name: "Dương Yến Nhi",
    subtitle: "Ngọt ngào như khúc ca mùa thu",
    message:
      "Nhân ngày 20/10, chúc Yến Nhi luôn giữ mãi nét hồn nhiên, nụ cười tỏa nắng và một trái tim ấm áp." +
      "\n\n" +
      "Mong mọi điều may mắn và bình an nhất sẽ luôn đồng hành cùng bạn trên mọi chặng đường.",
    images: [
      "assets/images/people/Dương Yến Nhi/Dương Yến Nhi_1.jpg",
      "assets/images/people/Dương Yến Nhi/Dương Yến Nhi_2.jpg",
      "assets/images/people/Dương Yến Nhi/Dương Yến Nhi_3.jpg",
      "assets/images/people/Dương Yến Nhi/Dương Yến Nhi_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Dương Yến Nhi",
      "Khoảnh khắc thứ 2 của Dương Yến Nhi",
      "Khoảnh khắc thứ 3 của Dương Yến Nhi",
      "Khoảnh khắc thứ 4 của Dương Yến Nhi"
    ]
  },
  {
    id: "giap-thi-hong-nhung",
    status: "ready",
    name: "Giáp Thị Hồng Nhung",
    subtitle: "Thắm sắc hoa hồng và rạng rỡ nụ cười",
    message:
      "Chúc Hồng Nhung một ngày 20/10 thật ngọt ngào và hạnh phúc." +
      "\n\n" +
      "Mong bạn luôn rạng rỡ như đóa hồng tươi thắm, luôn tràn đầy năng lượng tích cực và nhiệt huyết tuổi trẻ.",
    images: [
      "assets/images/people/Giáp Thị Hồng Nhung/Giáp Thị Hồng Nhung_1.jpg",
      "assets/images/people/Giáp Thị Hồng Nhung/Giáp Thị Hồng Nhung_2.JPG",
      "assets/images/people/Giáp Thị Hồng Nhung/Giáp Thị Hồng Nhung_3.JPG",
      "assets/images/people/Giáp Thị Hồng Nhung/Giáp Thị Hồng Nhung_4.JPG"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Giáp Thị Hồng Nhung",
      "Khoảnh khắc thứ 2 của Giáp Thị Hồng Nhung",
      "Khoảnh khắc thứ 3 của Giáp Thị Hồng Nhung",
      "Khoảnh khắc thứ 4 của Giáp Thị Hồng Nhung"
    ]
  },
  {
    id: "hoang-anh-thu",
    status: "ready",
    name: "Hoàng Anh Thư",
    subtitle: "Rực rỡ như những đóa hoa mùa thu",
    message:
      "Chúc Anh Thư một ngày Phụ nữ Việt Nam thật đặc biệt và đáng nhớ." +
      "\n\n" +
      "Mong bạn luôn giữ vững sự tự tin, thông minh, bản lĩnh và luôn xinh tươi trên mọi nẻo đường tương lai.",
    images: [
      "assets/images/people/Hoàng Anh Thư/Hoàng Anh Thư_1.jpg",
      "assets/images/people/Hoàng Anh Thư/Hoàng Anh Thư_2.jpg",
      "assets/images/people/Hoàng Anh Thư/Hoàng Anh Thư_3.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Hoàng Anh Thư",
      "Khoảnh khắc thứ 2 của Hoàng Anh Thư",
      "Khoảnh khắc thứ 3 của Hoàng Anh Thư"
    ]
  },
  {
    id: "nguyen-hai-bang-tam",
    status: "ready",
    name: "Nguyễn Hải Băng Tâm",
    subtitle: "Gửi ngàn yêu thương và những điều ngọt ngào",
    message:
      "Chúc Băng Tâm một ngày 20/10 thật ấm áp và ý nghĩa." +
      "\n\n" +
      "Cảm ơn sự hiện diện dịu dàng và nguồn năng lượng tích cực mà bạn luôn mang đến cho mọi người xung quanh. Chúc bạn luôn bình yên và hạnh phúc!",
    images: [
      "assets/images/people/Nguyễn Hải Băng Tâm/Nguyễn Hải Băng Tâm_1.jpg",
      "assets/images/people/Nguyễn Hải Băng Tâm/Nguyễn Hải Băng Tâm_2.jpg",
      "assets/images/people/Nguyễn Hải Băng Tâm/Nguyễn Hải Băng Tâm_3.JPG",
      "assets/images/people/Nguyễn Hải Băng Tâm/Nguyễn Hải Băng Tâm_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Nguyễn Hải Băng Tâm",
      "Khoảnh khắc thứ 2 của Nguyễn Hải Băng Tâm",
      "Khoảnh khắc thứ 3 của Nguyễn Hải Băng Tâm",
      "Khoảnh khắc thứ 4 của Nguyễn Hải Băng Tâm"
    ]
  },
  {
    id: "nguyen-minh-chau",
    status: "ready",
    name: "Nguyễn Minh Châu",
    subtitle: "Viên ngọc sáng giữa những điều bình dị",
    message:
      "Chúc Minh Châu một ngày 20/10 ngập tràn hoa tươi và những khoảnh khắc ngọt ngào." +
      "\n\n" +
      "Mong bạn luôn tỏa sáng như chính cái tên của mình — dịu dàng nhưng đầy kiên cường và cuốn hút.",
    images: [
      "assets/images/people/Nguyễn Minh Châu/Nguyễn Minh Châu_1.jpg",
      "assets/images/people/Nguyễn Minh Châu/Nguyễn Minh Châu_2.jpg",
      "assets/images/people/Nguyễn Minh Châu/Nguyễn Minh Châu_3.jpg",
      "assets/images/people/Nguyễn Minh Châu/Nguyễn Minh Châu_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Nguyễn Minh Châu",
      "Khoảnh khắc thứ 2 của Nguyễn Minh Châu",
      "Khoảnh khắc thứ 3 của Nguyễn Minh Châu",
      "Khoảnh khắc thứ 4 của Nguyễn Minh Châu"
    ]
  },
  {
    id: "nguyen-ngoc-anh",
    status: "ready",
    name: "Nguyễn Ngọc Anh",
    subtitle: "Tỏa sáng dịu dàng và thanh tao",
    message:
      "Nhân ngày 20/10, chúc Ngọc Anh luôn xinh đẹp, thông tuệ và an yên." +
      "\n\n" +
      "Cảm ơn sự chu đáo, nhẹ nhàng của bạn đã làm cho không gian xung quanh thêm phần tươi đẹp và ý nghĩa.",
    images: [
      "assets/images/people/Nguyễn Ngọc Anh/Nguyễn Ngọc Anh_1.jpg",
      "assets/images/people/Nguyễn Ngọc Anh/Nguyễn Ngọc Anh_2.jpg",
      "assets/images/people/Nguyễn Ngọc Anh/Nguyễn Ngọc Anh_3.jpg",
      "assets/images/people/Nguyễn Ngọc Anh/Nguyễn Ngọc Anh_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Nguyễn Ngọc Anh",
      "Khoảnh khắc thứ 2 của Nguyễn Ngọc Anh",
      "Khoảnh khắc thứ 3 của Nguyễn Ngọc Anh",
      "Khoảnh khắc thứ 4 của Nguyễn Ngọc Anh"
    ]
  },
  {
    id: "nguyen-thuy-linh",
    status: "ready",
    name: "Nguyễn Thùy Linh",
    subtitle: "Thùy mị, thông minh và tràn đầy duyên dáng",
    message:
      "Chúc Thùy Linh một ngày 20/10 thật ý nghĩa, ấm cúng bên người thân và bạn bè." +
      "\n\n" +
      "Chúc bạn luôn xinh xắn, tự tin và luôn là nguồn cảm hứng dịu dàng cho những người xung quanh.",
    images: [
      "assets/images/people/Nguyễn Thùy Linh/Nguyễn Thùy Linh_1.jpg",
      "assets/images/people/Nguyễn Thùy Linh/Nguyễn Thùy Linh_2.jpg",
      "assets/images/people/Nguyễn Thùy Linh/Nguyễn Thùy Linh_3.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Nguyễn Thùy Linh",
      "Khoảnh khắc thứ 2 của Nguyễn Thùy Linh",
      "Khoảnh khắc thứ 3 của Nguyễn Thùy Linh"
    ]
  },
  {
    id: "nguyen-thuy-luong",
    status: "ready",
    name: "Nguyễn Thúy Lương",
    subtitle: "Trân trọng từng nét duyên dáng và dịu êm",
    message:
      "Gửi đến Thúy Lương lời chúc 20/10 chân thành và ấm áp nhất." +
      "\n\n" +
      "Chúc bạn luôn an vui, may mắn, mỗi sớm mai thức dậy đều thấy lòng nhẹ nhõm và ngập tràn niềm tin yêu cuộc đời.",
    images: [
      "assets/images/people/Nguyễn Thúy Lương/Nguyễn Thúy Lương_1.jpg",
      "assets/images/people/Nguyễn Thúy Lương/Nguyễn Thúy Lương_2.jpg",
      "assets/images/people/Nguyễn Thúy Lương/Nguyễn Thúy Lương_3.jpg",
      "assets/images/people/Nguyễn Thúy Lương/Nguyễn Thúy Lương_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Nguyễn Thúy Lương",
      "Khoảnh khắc thứ 2 của Nguyễn Thúy Lương",
      "Khoảnh khắc thứ 3 của Nguyễn Thúy Lương",
      "Khoảnh khắc thứ 4 của Nguyễn Thúy Lương"
    ]
  },
  {
    id: "nguyen-thi-dung",
    status: "ready",
    name: "Nguyễn Thị Dung",
    subtitle: "Một ngày 20/10 thật dịu dàng và rạng rỡ",
    message:
      "Nhân Ngày Phụ nữ Việt Nam 20/10/2026, chúc bạn luôn giữ trọn nụ cười tươi tắn, tâm hồn an yên và mỗi ngày trôi qua đều ngập tràn niềm vui cùng những điều dịu dàng nhất." +
      "\n\n" +
      "Cảm ơn bạn vì đã luôn mang lại sự ấm áp và năng lượng tích cực cho mọi người xung quanh!",
    images: [
      "assets/images/people/Nguyễn Thị Dung/Nguyễn Thị Dung_1.jpg",
      "assets/images/people/Nguyễn Thị Dung/Nguyễn Thị Dung_2.jpg",
      "assets/images/people/Nguyễn Thị Dung/Nguyễn Thị Dung_3.jpg",
      "assets/images/people/Nguyễn Thị Dung/Nguyễn Thị Dung_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Nguyễn Thị Dung",
      "Khoảnh khắc thứ 2 của Nguyễn Thị Dung",
      "Khoảnh khắc thứ 3 của Nguyễn Thị Dung",
      "Khoảnh khắc thứ 4 của Nguyễn Thị Dung"
    ]
  },
  {
    id: "nguyen-thi-ngoc-anh",
    status: "ready",
    name: "Nguyễn Thị Ngọc Ánh",
    subtitle: "Rạng rỡ, thông minh và tràn đầy năng lượng tích cực",
    message:
      "Nhân ngày 20/10, chúc Ngọc Ánh luôn xinh đẹp, rạng rỡ và tự tin theo đuổi những đam mê của mình." +
      "\n\n" +
      "Cảm ơn nụ cười tươi tắn và năng lượng ấm áp mà bạn luôn lan tỏa đến mọi người xung quanh. Chúc bạn một ngày thật ngọt ngào và hạnh phúc!",
    images: [
      "assets/images/people/Nguyễn Thị Ngọc Ánh/Nguyễn Thị Ngọc Ánh_1.jpg",
      "assets/images/people/Nguyễn Thị Ngọc Ánh/Nguyễn Thị Ngọc Ánh_2.jpg",
      "assets/images/people/Nguyễn Thị Ngọc Ánh/Nguyễn Thị Ngọc Ánh_3.jpg",
      "assets/images/people/Nguyễn Thị Ngọc Ánh/Nguyễn Thị Ngọc Ánh_4.JPG"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Nguyễn Thị Ngọc Ánh",
      "Khoảnh khắc thứ 2 của Nguyễn Thị Ngọc Ánh",
      "Khoảnh khắc thứ 3 của Nguyễn Thị Ngọc Ánh",
      "Khoảnh khắc thứ 4 của Nguyễn Thị Ngọc Ánh"
    ]
  },
  {
    id: "nguyen-thi-thanh-mai",
    status: "ready",
    name: "Nguyễn Thị Thanh Mai",
    subtitle: "Thanh lịch, dịu dàng và luôn tràn đầy nhiệt huyết",
    message:
      "Chúc Thanh Mai một ngày 20/10 ngập tràn niềm vui, hoa và những lời chúc yêu thương." +
      "\n\n" +
      "Chúc bạn luôn giữ trọn nét duyên dáng, an yên trong tâm hồn và gặt hái thêm thật nhiều thành công trên con đường phía trước!",
    images: [
      "assets/images/people/Nguyễn Thị Thanh Mai/Nguyễn Thị Thanh Mai_1.jpg",
      "assets/images/people/Nguyễn Thị Thanh Mai/Nguyễn Thị Thanh Mai_2.jpg",
      "assets/images/people/Nguyễn Thị Thanh Mai/Nguyễn Thị Thanh Mai_3.jpg",
      "assets/images/people/Nguyễn Thị Thanh Mai/Nguyễn Thị Thanh Mai_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Nguyễn Thị Thanh Mai",
      "Khoảnh khắc thứ 2 của Nguyễn Thị Thanh Mai",
      "Khoảnh khắc thứ 3 của Nguyễn Thị Thanh Mai",
      "Khoảnh khắc thứ 4 của Nguyễn Thị Thanh Mai"
    ]
  },
  {
    id: "nguyen-thi-uyen-nhi",
    status: "ready",
    name: "Nguyễn Thị Uyên Nhi",
    subtitle: "Dịu dàng, thanh lịch và luôn rạng ngời",
    message:
      "Chúc Uyên Nhi một ngày Phụ nữ Việt Nam thật trọn vẹn và ấm áp bên những người thân yêu." +
      "\n\n" +
      "Chúc bạn luôn xinh đẹp, may mắn và gặt hái được thật nhiều thành công rực rỡ trong cuộc sống.",
    images: [
      "assets/images/people/Nguyễn Thị Uyên Nhi/Nguyễn Thị Uyên Nhi_1.jpg",
      "assets/images/people/Nguyễn Thị Uyên Nhi/Nguyễn Thị Uyên Nhi_2.jpg",
      "assets/images/people/Nguyễn Thị Uyên Nhi/Nguyễn Thị Uyên Nhi_3.jpg",
      "assets/images/people/Nguyễn Thị Uyên Nhi/Nguyễn Thị Uyên Nhi_4.JPG"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Nguyễn Thị Uyên Nhi",
      "Khoảnh khắc thứ 2 của Nguyễn Thị Uyên Nhi",
      "Khoảnh khắc thứ 3 của Nguyễn Thị Uyên Nhi",
      "Khoảnh khắc thứ 4 của Nguyễn Thị Uyên Nhi"
    ]
  },
  {
    id: "ninh-huyen-trang",
    status: "ready",
    name: "Ninh Huyền Trang",
    subtitle: "Bản lĩnh, tự tin và ngập tràn hạnh phúc",
    message:
      "Nhân ngày Phụ nữ Việt Nam 20/10, chúc Huyền Trang luôn rạng ngời sức sống, vững vàng trước mọi thử thách." +
      "\n\n" +
      "Chúc bạn luôn tìm thấy sự bình yên, tự tại và trọn vẹn niềm vui trong cuộc sống.",
    images: [
      "assets/images/people/Ninh Huyền Trang/Ninh Huyền Trang_1.jpg",
      "assets/images/people/Ninh Huyền Trang/Ninh Huyền Trang_2.JPG",
      "assets/images/people/Ninh Huyền Trang/Ninh Huyền Trang_3.JPG"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Ninh Huyền Trang",
      "Khoảnh khắc thứ 2 của Ninh Huyền Trang",
      "Khoảnh khắc thứ 3 của Ninh Huyền Trang"
    ]
  },
  {
    id: "phan-thi-tra-my",
    status: "ready",
    name: "Phan Thị Trà My",
    subtitle: "Hương hoa ngát thơm và những nụ cười rạng rỡ",
    message:
      "Chúc Trà My một ngày 20/10 thật nhiều kỷ niệm đẹp và ấm cúng." +
      "\n\n" +
      "Chúc bạn luôn giữ vững sự duyên dáng, đáng yêu và mỗi ngày trôi qua đều là một bản tình ca êm dịu, ngọt ngào.",
    images: [
      "assets/images/people/Phan Thị Trà My/Phan Thị Trà My.jpg",
      "assets/images/people/Phan Thị Trà My/Phan Thị Trà My_2.jpg",
      "assets/images/people/Phan Thị Trà My/Phan Thị Trà My_3.JPG",
      "assets/images/people/Phan Thị Trà My/Phan Thị Trà My_4.JPG"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Phan Thị Trà My",
      "Khoảnh khắc thứ 2 của Phan Thị Trà My",
      "Khoảnh khắc thứ 3 của Phan Thị Trà My",
      "Khoảnh khắc thứ 4 của Phan Thị Trà My"
    ]
  },
  {
    id: "pham-thi-tam",
    status: "ready",
    name: "Phạm Thị Tâm",
    subtitle: "Chân thành, ấm áp và luôn được yêu thương",
    message:
      "Nhân Ngày Phụ nữ Việt Nam 20/10, chúc bạn một ngày thật đặc biệt và trọn vẹn niềm vui." +
      "\n\n" +
      "Mong bạn luôn an yên, hạnh phúc, mọi công việc đều thuận buồm xuôi gió và mỗi ngày đều nở nụ cười rạng rỡ!",
    images: [
      "assets/images/people/Phạm Thị Tâm/Phạm Thị Tâm.jpg",
      "assets/images/people/Phạm Thị Tâm/Phạm Thị Tâm_2.jpg",
      "assets/images/people/Phạm Thị Tâm/Phạm Thị Tâm_3.jpg",
      "assets/images/people/Phạm Thị Tâm/Phạm Thị Tâm_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Phạm Thị Tâm",
      "Khoảnh khắc thứ 2 của Phạm Thị Tâm",
      "Khoảnh khắc thứ 3 của Phạm Thị Tâm",
      "Khoảnh khắc thứ 4 của Phạm Thị Tâm"
    ]
  },
  {
    id: "tran-thi-minh-ly",
    status: "ready",
    name: "Trần Thị Minh Lý",
    subtitle: "Sâu sắc, dịu dàng và tinh tế trong từng khoảnh khắc",
    message:
      "Chúc Minh Lý một ngày 20/10 thật nhiều niềm vui, ấm áp và ý nghĩa." +
      "\n\n" +
      "Chúc bạn luôn giữ vững niềm tin, sự lạc quan và luôn rạng ngời, hạnh phúc bên gia đình cùng những người thân yêu!",
    images: [
      "assets/images/people/Trần Thị Minh Lý/Trần Thị Minh Lý_1.jpg",
      "assets/images/people/Trần Thị Minh Lý/Trần Thị Minh Lý_2.JPG",
      "assets/images/people/Trần Thị Minh Lý/Trần Thị Minh Lý_3.JPG",
      "assets/images/people/Trần Thị Minh Lý/Trần Thị Minh Lý_4.JPG"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Trần Thị Minh Lý",
      "Khoảnh khắc thứ 2 của Trần Thị Minh Lý",
      "Khoảnh khắc thứ 3 của Trần Thị Minh Lý",
      "Khoảnh khắc thứ 4 của Trần Thị Minh Lý"
    ]
  },
  {
    id: "tran-thi-ngoc-quynh",
    status: "ready",
    name: "Trần Thị Ngọc Quỳnh",
    subtitle: "Dịu dàng tỏa sáng theo cách của riêng bạn",
    message:
      "Chúc bạn một ngày 20/10 thật nhiều yêu thương và hạnh phúc." +
      "\n\n" +
      "Mong bạn luôn xinh đẹp, tự tin, rạng rỡ như một đóa hoa ngát hương và luôn đạt được mọi ước nguyện trên con đường phía trước.",
    images: [
      "assets/images/people/Trần Thị Ngọc Quỳnh/Trần Thị Ngọc Quỳnh_1.jpg",
      "assets/images/people/Trần Thị Ngọc Quỳnh/Trần Thị Ngọc Quỳnh_2.JPG",
      "assets/images/people/Trần Thị Ngọc Quỳnh/Trần Thị Ngọc Quỳnh_3.jpg",
      "assets/images/people/Trần Thị Ngọc Quỳnh/Trần Thị Ngọc Quỳnh_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Trần Thị Ngọc Quỳnh",
      "Khoảnh khắc thứ 2 của Trần Thị Ngọc Quỳnh",
      "Khoảnh khắc thứ 3 của Trần Thị Ngọc Quỳnh",
      "Khoảnh khắc thứ 4 của Trần Thị Ngọc Quỳnh"
    ]
  },
  {
    id: "vu-ngoc-han",
    status: "ready",
    name: "Vũ Ngọc Hân",
    subtitle: "Mỗi ngày đều là một ngày đặc biệt",
    message:
      "Chúc Ngọc Hân một mùa 20/10 thật ấm áp và rực rỡ sắc màu." +
      "\n\n" +
      "Mong rằng bạn luôn được nâng niu, yêu thương và gặp được thật nhiều may mắn trên từng bước đường mình đi.",
    images: [
      "assets/images/people/Vũ Ngọc Hân/Vũ Ngọc Hân_1.jpg",
      "assets/images/people/Vũ Ngọc Hân/Vũ Ngọc Hân.jpg",
      "assets/images/people/Vũ Ngọc Hân/Vũ Ngọc Hân_2.jpg",
      "assets/images/people/Vũ Ngọc Hân/Vũ Ngọc Hân_4.JPG"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Vũ Ngọc Hân",
      "Khoảnh khắc thứ 2 của Vũ Ngọc Hân",
      "Khoảnh khắc thứ 3 của Vũ Ngọc Hân",
      "Khoảnh khắc thứ 4 của Vũ Ngọc Hân"
    ]
  },
  {
    id: "vu-thuy-linh",
    status: "ready",
    name: "Vũ Thùy Linh",
    subtitle: "Duyên dáng, ngọt ngào và luôn tỏa sáng rực rỡ",
    message:
      "Gửi đến Thùy Linh những lời chúc tốt đẹp nhất nhân ngày 20/10/2026." +
      "\n\n" +
      "Chúc bạn luôn tươi vui, yêu đời, luôn tự tin tỏa sáng với vẻ đẹp dịu dàng và đón nhận thật nhiều bất ngờ ngọt ngào trong cuộc sống!",
    images: [
      "assets/images/people/Vũ Thùy Linh/Vũ Thùy Linh_1.jpg",
      "assets/images/people/Vũ Thùy Linh/Vũ Thùy Linh_2.jpg",
      "assets/images/people/Vũ Thùy Linh/Vũ Thùy Linh_3.jpg",
      "assets/images/people/Vũ Thùy Linh/Vũ Thùy Linh_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Vũ Thùy Linh",
      "Khoảnh khắc thứ 2 của Vũ Thùy Linh",
      "Khoảnh khắc thứ 3 của Vũ Thùy Linh",
      "Khoảnh khắc thứ 4 của Vũ Thùy Linh"
    ]
  },
  {
    id: "dinh-thi-quyen",
    status: "ready",
    name: "Đinh Thị Quyên",
    subtitle: "Dịu dàng, kiên định và ngập tràn may mắn",
    message:
      "Nhân ngày 20/10, chúc Quyên luôn xinh đẹp, vui tươi và tràn đầy sức sống." +
      "\n\n" +
      "Cảm ơn bạn vì sự chu đáo, nhẹ nhàng và luôn là chỗ dựa tinh thần tuyệt vời. Chúc bạn mọi điều suôn sẻ, như ý và hạnh phúc!",
    images: [
      "assets/images/people/Đinh Thị Quyên/Đinh Thị Quyên_1.jpg",
      "assets/images/people/Đinh Thị Quyên/Đinh Thị Quyên_2.jpg",
      "assets/images/people/Đinh Thị Quyên/Đinh Thị Quyên_3.jpg",
      "assets/images/people/Đinh Thị Quyên/Đinh Thị Quyên_4.JPG"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Đinh Thị Quyên",
      "Khoảnh khắc thứ 2 của Đinh Thị Quyên",
      "Khoảnh khắc thứ 3 của Đinh Thị Quyên",
      "Khoảnh khắc thứ 4 của Đinh Thị Quyên"
    ]
  },
  {
    id: "dang-khanh-hue",
    status: "ready",
    name: "Đặng Khánh Huệ",
    subtitle: "Thanh khiết, bình an và đầy sức sống",
    message:
      "Gửi đến Khánh Huệ những lời chúc tốt đẹp nhất nhân ngày 20/10." +
      "\n\n" +
      "Chúc bạn luôn tươi vui, mạnh khỏe, mọi dự định đều thành công suôn sẻ và luôn có những người bạn đồng hành tuyệt vời bên cạnh.",
    images: [
      "assets/images/people/Đặng Khánh Huệ/Đặng Khánh Huệ_1.jpg",
      "assets/images/people/Đặng Khánh Huệ/Đặng Khánh Huệ_2.jpg",
      "assets/images/people/Đặng Khánh Huệ/Đặng Khánh Huệ_3.jpg",
      "assets/images/people/Đặng Khánh Huệ/Đặng Khánh Huệ_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Đặng Khánh Huệ",
      "Khoảnh khắc thứ 2 của Đặng Khánh Huệ",
      "Khoảnh khắc thứ 3 của Đặng Khánh Huệ",
      "Khoảnh khắc thứ 4 của Đặng Khánh Huệ"
    ]
  },
  {
    id: "dang-thi-kim-oanh",
    status: "ready",
    name: "Đặng Thị Kim Oanh",
    subtitle: "Vui tươi như tiếng chim hót ngày thu",
    message:
      "Chúc Kim Oanh một ngày Phụ nữ Việt Nam ngập tràn tiếng cười và hạnh phúc." +
      "\n\n" +
      "Mong bạn luôn giữ được nét tươi trẻ, tinh thần lạc quan và mọi dự định ấp ủ đều sớm thành hiện thực tốt đẹp.",
    images: [
      "assets/images/people/Đặng Thị Kim Oanh/Đặng Thị Kim Oanh_1.jpg",
      "assets/images/people/Đặng Thị Kim Oanh/Đặng Kim Oanh_2.jpg",
      "assets/images/people/Đặng Thị Kim Oanh/Đặng Thị Kim Oanh_3.jpg",
      "assets/images/people/Đặng Thị Kim Oanh/Đặng Thị Kim Oanh_4.jpg"
    ],
    imageAlts: [
      "Khoảnh khắc thứ 1 của Đặng Thị Kim Oanh",
      "Khoảnh khắc thứ 2 của Đặng Thị Kim Oanh",
      "Khoảnh khắc thứ 3 của Đặng Thị Kim Oanh",
      "Khoảnh khắc thứ 4 của Đặng Thị Kim Oanh"
    ]
  }
];
