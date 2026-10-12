/**
 * Nguồn dữ liệu tập trung cho 25 người nhận.
 *
 * status:
 *   - "draft"  : chưa đủ tên/lời chúc — không xuất hiện khi tìm kiếm
 *   - "sample" : dữ liệu mẫu để xem giao diện
 *   - "ready"  : đã hoàn thiện, được tìm kiếm và hiển thị
 *
 * Quy tắc ảnh:
 * Đặt file vào assets/images/people/person-XX/photo-0N.webp (4–5 ảnh mỗi người).
 * Nếu chưa có ảnh thật, hệ thống tự động hiển thị khung placeholder trang nhã, không vỡ layout.
 */
window.RECIPIENTS = [
  {
    id: "person-01",
    status: "ready",
    name: "Nguyễn Thị Dung",
    subtitle: "Một ngày 20/10 thật dịu dàng và rạng rỡ",
    message:
      "Nhân Ngày Phụ nữ Việt Nam 20/10/2026, chúc bạn luôn giữ trọn nụ cười tươi tắn, tâm hồn an yên và mỗi ngày trôi qua đều ngập tràn niềm vui cùng những điều dịu dàng nhất.\n\n" +
      "Cảm ơn bạn vì đã luôn mang lại sự ấm áp và năng lượng tích cực cho mọi người xung quanh!",
    images: [
      "assets/images/people/person-01/photo-01.webp",
      "assets/images/people/person-01/photo-02.webp",
      "assets/images/people/person-01/photo-03.webp",
      "assets/images/people/person-01/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Nguyễn Thị Dung",
      "Khung ảnh thứ hai dành cho Nguyễn Thị Dung",
      "Khung ảnh thứ ba dành cho Nguyễn Thị Dung",
      "Khung ảnh thứ tư dành cho Nguyễn Thị Dung"
    ]
  },
  {
    id: "person-02",
    status: "ready",
    name: "Trần Thị Ngọc Quỳnh",
    subtitle: "Dịu dàng tỏa sáng theo cách của riêng bạn",
    message:
      "Chúc bạn một ngày 20/10 thật nhiều yêu thương và hạnh phúc.\n\n" +
      "Mong bạn luôn xinh đẹp, tự tin, rạng rỡ như một đóa hoa ngát hương và luôn đạt được mọi ước nguyện trên con đường phía trước.",
    images: [
      "assets/images/people/person-02/photo-01.webp",
      "assets/images/people/person-02/photo-02.webp",
      "assets/images/people/person-02/photo-03.webp",
      "assets/images/people/person-02/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Trần Thị Ngọc Quỳnh",
      "Khung ảnh thứ hai dành cho Trần Thị Ngọc Quỳnh",
      "Khung ảnh thứ ba dành cho Trần Thị Ngọc Quỳnh",
      "Khung ảnh thứ tư dành cho Trần Thị Ngọc Quỳnh"
    ]
  },
  {
    id: "person-03",
    status: "ready",
    name: "Nguyễn Hải Băng Tâm",
    subtitle: "Gửi ngàn yêu thương và những điều ngọt ngào",
    message:
      "Chúc Băng Tâm một ngày 20/10 thật ấm áp và ý nghĩa.\n\n" +
      "Cảm ơn sự hiện diện dịu dàng và nguồn năng lượng tích cực mà bạn luôn mang đến cho mọi người xung quanh. Chúc bạn luôn bình yên và hạnh phúc!",
    images: [
      "assets/images/people/person-03/photo-01.webp",
      "assets/images/people/person-03/photo-02.webp",
      "assets/images/people/person-03/photo-03.webp",
      "assets/images/people/person-03/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Nguyễn Hải Băng Tâm",
      "Khung ảnh thứ hai dành cho Nguyễn Hải Băng Tâm",
      "Khung ảnh thứ ba dành cho Nguyễn Hải Băng Tâm",
      "Khung ảnh thứ tư dành cho Nguyễn Hải Băng Tâm"
    ]
  },
  {
    id: "person-04",
    status: "ready",
    name: "Dương Hà Phương",
    subtitle: "Bình yên và hạnh phúc trong từng khoảnh khắc",
    message:
      "Nhân ngày 20/10, chúc Hà Phương luôn tràn đầy nhiệt huyết, công việc thuận lợi và cuộc sống ngập tràn tiếng cười.\n\n" +
      "Mong bạn luôn được yêu thương, trân trọng và đón nhận những điều ngọt ngào nhất của cuộc sống.",
    images: [
      "assets/images/people/person-04/photo-01.webp",
      "assets/images/people/person-04/photo-02.webp",
      "assets/images/people/person-04/photo-03.webp",
      "assets/images/people/person-04/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Dương Hà Phương",
      "Khung ảnh thứ hai dành cho Dương Hà Phương",
      "Khung ảnh thứ ba dành cho Dương Hà Phương",
      "Khung ảnh thứ tư dành cho Dương Hà Phương"
    ]
  },
  {
    id: "person-05",
    status: "ready",
    name: "Hoàng Anh Thư",
    subtitle: "Rực rỡ như những đóa hoa mùa thu",
    message:
      "Chúc Anh Thư một ngày Phụ nữ Việt Nam thật đặc biệt và đáng nhớ.\n\n" +
      "Mong bạn luôn giữ vững sự tự tin, thông minh, bản lĩnh và luôn xinh tươi trên mọi nẻo đường tương lai.",
    images: [
      "assets/images/people/person-05/photo-01.webp",
      "assets/images/people/person-05/photo-02.webp",
      "assets/images/people/person-05/photo-03.webp",
      "assets/images/people/person-05/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Hoàng Anh Thư",
      "Khung ảnh thứ hai dành cho Hoàng Anh Thư",
      "Khung ảnh thứ ba dành cho Hoàng Anh Thư",
      "Khung ảnh thứ tư dành cho Hoàng Anh Thư"
    ]
  },
  {
    id: "person-06",
    status: "ready",
    name: "Nguyễn Thúy Lương",
    subtitle: "Trân trọng từng nét duyên dáng và dịu êm",
    message:
      "Gửi đến Thúy Lương lời chúc 20/10 chân thành và ấm áp nhất.\n\n" +
      "Chúc bạn luôn an vui, may mắn, mỗi sớm mai thức dậy đều thấy lòng nhẹ nhõm và ngập tràn niềm tin yêu cuộc đời.",
    images: [
      "assets/images/people/person-06/photo-01.webp",
      "assets/images/people/person-06/photo-02.webp",
      "assets/images/people/person-06/photo-03.webp",
      "assets/images/people/person-06/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Nguyễn Thúy Lương",
      "Khung ảnh thứ hai dành cho Nguyễn Thúy Lương",
      "Khung ảnh thứ ba dành cho Nguyễn Thúy Lương",
      "Khung ảnh thứ tư dành cho Nguyễn Thúy Lương"
    ]
  },
  {
    id: "person-07",
    status: "ready",
    name: "Bùi Kim Yến",
    subtitle: "Tỏa ngát hương thơm và niềm vui mỗi ngày",
    message:
      "Chúc Kim Yến ngày 20/10 nhận được thật nhiều hoa, quà và những lời chúc tốt lành.\n\n" +
      "Hãy luôn là phiên bản hạnh phúc, rạng ngời và yêu đời nhất của chính mình nhé!",
    images: [
      "assets/images/people/person-07/photo-01.webp",
      "assets/images/people/person-07/photo-02.webp",
      "assets/images/people/person-07/photo-03.webp",
      "assets/images/people/person-07/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Bùi Kim Yến",
      "Khung ảnh thứ hai dành cho Bùi Kim Yến",
      "Khung ảnh thứ ba dành cho Bùi Kim Yến",
      "Khung ảnh thứ tư dành cho Bùi Kim Yến"
    ]
  },
  {
    id: "person-08",
    status: "ready",
    name: "Dương Yến Nhi",
    subtitle: "Ngọt ngào như khúc ca mùa thu",
    message:
      "Nhân ngày 20/10, chúc Yến Nhi luôn giữ mãi nét hồn nhiên, nụ cười tỏa nắng và một trái tim ấm áp.\n\n" +
      "Mong mọi điều may mắn và bình an nhất sẽ luôn đồng hành cùng bạn trên mọi chặng đường.",
    images: [
      "assets/images/people/person-08/photo-01.webp",
      "assets/images/people/person-08/photo-02.webp",
      "assets/images/people/person-08/photo-03.webp",
      "assets/images/people/person-08/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Dương Yến Nhi",
      "Khung ảnh thứ hai dành cho Dương Yến Nhi",
      "Khung ảnh thứ ba dành cho Dương Yến Nhi",
      "Khung ảnh thứ tư dành cho Dương Yến Nhi"
    ]
  },
  {
    id: "person-09",
    status: "ready",
    name: "Nguyễn Thị Uyên Nhi",
    subtitle: "Dịu dàng, thanh lịch và luôn rạng ngời",
    message:
      "Chúc Uyên Nhi một ngày Phụ nữ Việt Nam thật trọn vẹn và ấm áp bên những người thân yêu.\n\n" +
      "Chúc bạn luôn xinh đẹp, may mắn và gặt hái được thật nhiều thành công rực rỡ trong cuộc sống.",
    images: [
      "assets/images/people/person-09/photo-01.webp",
      "assets/images/people/person-09/photo-02.webp",
      "assets/images/people/person-09/photo-03.webp",
      "assets/images/people/person-09/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Nguyễn Thị Uyên Nhi",
      "Khung ảnh thứ hai dành cho Nguyễn Thị Uyên Nhi",
      "Khung ảnh thứ ba dành cho Nguyễn Thị Uyên Nhi",
      "Khung ảnh thứ tư dành cho Nguyễn Thị Uyên Nhi"
    ]
  },
  {
    id: "person-10",
    status: "ready",
    name: "Nguyễn Minh Châu",
    subtitle: "Viên ngọc sáng giữa những điều bình dị",
    message:
      "Chúc Minh Châu một ngày 20/10 ngập tràn hoa tươi và những khoảnh khắc ngọt ngào.\n\n" +
      "Mong bạn luôn tỏa sáng như chính cái tên của mình — dịu dàng nhưng đầy kiên cường và cuốn hút.",
    images: [
      "assets/images/people/person-10/photo-01.webp",
      "assets/images/people/person-10/photo-02.webp",
      "assets/images/people/person-10/photo-03.webp",
      "assets/images/people/person-10/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Nguyễn Minh Châu",
      "Khung ảnh thứ hai dành cho Nguyễn Minh Châu",
      "Khung ảnh thứ ba dành cho Nguyễn Minh Châu",
      "Khung ảnh thứ tư dành cho Nguyễn Minh Châu"
    ]
  },
  {
    id: "person-11",
    status: "ready",
    name: "Đặng Khánh Huệ",
    subtitle: "Thanh khiết, bình an và đầy sức sống",
    message:
      "Gửi đến Khánh Huệ những lời chúc tốt đẹp nhất nhân ngày 20/10.\n\n" +
      "Chúc bạn luôn tươi vui, mạnh khỏe, mọi dự định đều thành công suôn sẻ và luôn có những người bạn đồng hành tuyệt vời bên cạnh.",
    images: [
      "assets/images/people/person-11/photo-01.webp",
      "assets/images/people/person-11/photo-02.webp",
      "assets/images/people/person-11/photo-03.webp",
      "assets/images/people/person-11/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Đặng Khánh Huệ",
      "Khung ảnh thứ hai dành cho Đặng Khánh Huệ",
      "Khung ảnh thứ ba dành cho Đặng Khánh Huệ",
      "Khung ảnh thứ tư dành cho Đặng Khánh Huệ"
    ]
  },
  {
    id: "person-12",
    status: "ready",
    name: "Phan Thị Trà My",
    subtitle: "Hương hoa ngát thơm và những nụ cười rạng rỡ",
    message:
      "Chúc Trà My một ngày 20/10 thật nhiều kỷ niệm đẹp và ấm cúng.\n\n" +
      "Chúc bạn luôn giữ vững sự duyên dáng, đáng yêu và mỗi ngày trôi qua đều là một bản tình ca êm dịu, ngọt ngào.",
    images: [
      "assets/images/people/person-12/photo-01.webp",
      "assets/images/people/person-12/photo-02.webp",
      "assets/images/people/person-12/photo-03.webp",
      "assets/images/people/person-12/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Phan Thị Trà My",
      "Khung ảnh thứ hai dành cho Phan Thị Trà My",
      "Khung ảnh thứ ba dành cho Phan Thị Trà My",
      "Khung ảnh thứ tư dành cho Phan Thị Trà My"
    ]
  },
  {
    id: "person-13",
    status: "ready",
    name: "Ninh Huyền Trang",
    subtitle: "Bản lĩnh, tự tin và ngập tràn hạnh phúc",
    message:
      "Nhân ngày Phụ nữ Việt Nam 20/10, chúc Huyền Trang luôn rạng ngời sức sống, vững vàng trước mọi thử thách.\n\n" +
      "Chúc bạn luôn tìm thấy sự bình yên, tự tại và trọn vẹn niềm vui trong cuộc sống.",
    images: [
      "assets/images/people/person-13/photo-01.webp",
      "assets/images/people/person-13/photo-02.webp",
      "assets/images/people/person-13/photo-03.webp",
      "assets/images/people/person-13/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Ninh Huyền Trang",
      "Khung ảnh thứ hai dành cho Ninh Huyền Trang",
      "Khung ảnh thứ ba dành cho Ninh Huyền Trang",
      "Khung ảnh thứ tư dành cho Ninh Huyền Trang"
    ]
  },
  {
    id: "person-14",
    status: "ready",
    name: "Vũ Ngọc Hân",
    subtitle: "Mỗi ngày đều là một ngày đặc biệt",
    message:
      "Chúc Ngọc Hân một mùa 20/10 thật ấm áp và rực rỡ sắc màu.\n\n" +
      "Mong rằng bạn luôn được nâng niu, yêu thương và gặp được thật nhiều may mắn trên từng bước đường mình đi.",
    images: [
      "assets/images/people/person-14/photo-01.webp",
      "assets/images/people/person-14/photo-02.webp",
      "assets/images/people/person-14/photo-03.webp",
      "assets/images/people/person-14/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Vũ Ngọc Hân",
      "Khung ảnh thứ hai dành cho Vũ Ngọc Hân",
      "Khung ảnh thứ ba dành cho Vũ Ngọc Hân",
      "Khung ảnh thứ tư dành cho Vũ Ngọc Hân"
    ]
  },
  {
    id: "person-15",
    status: "ready",
    name: "Diêm Thị Quyên",
    subtitle: "Dịu dàng nuôi dưỡng những ước mơ",
    message:
      "Gửi lời chúc mừng 20/10 ấm áp nhất đến bạn Quyên.\n\n" +
      "Chúc bạn luôn bình an, mạnh khỏe, công việc hanh thông và luôn giữ cho mình sự lạc quan, yêu đời.",
    images: [
      "assets/images/people/person-15/photo-01.webp",
      "assets/images/people/person-15/photo-02.webp",
      "assets/images/people/person-15/photo-03.webp",
      "assets/images/people/person-15/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Diêm Thị Quyên",
      "Khung ảnh thứ hai dành cho Diêm Thị Quyên",
      "Khung ảnh thứ ba dành cho Diêm Thị Quyên",
      "Khung ảnh thứ tư dành cho Diêm Thị Quyên"
    ]
  },
  {
    id: "person-16",
    status: "ready",
    name: "Giáp Thị Hồng Nhung",
    subtitle: "Thắm sắc hoa hồng và rạng rỡ nụ cười",
    message:
      "Chúc Hồng Nhung một ngày 20/10 thật ngọt ngào và hạnh phúc.\n\n" +
      "Mong bạn luôn rạng rỡ như đóa hồng tươi thắm, luôn tràn đầy năng lượng tích cực và nhiệt huyết tuổi trẻ.",
    images: [
      "assets/images/people/person-16/photo-01.webp",
      "assets/images/people/person-16/photo-02.webp",
      "assets/images/people/person-16/photo-03.webp",
      "assets/images/people/person-16/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Giáp Thị Hồng Nhung",
      "Khung ảnh thứ hai dành cho Giáp Thị Hồng Nhung",
      "Khung ảnh thứ ba dành cho Giáp Thị Hồng Nhung",
      "Khung ảnh thứ tư dành cho Giáp Thị Hồng Nhung"
    ]
  },
  {
    id: "person-17",
    status: "ready",
    name: "Nguyễn Ngọc Anh",
    subtitle: "Tỏa sáng dịu dàng và thanh tao",
    message:
      "Nhân ngày 20/10, chúc Ngọc Anh luôn xinh đẹp, thông tuệ và an yên.\n\n" +
      "Cảm ơn sự chu đáo, nhẹ nhàng của bạn đã làm cho không gian xung quanh thêm phần tươi đẹp và ý nghĩa.",
    images: [
      "assets/images/people/person-17/photo-01.webp",
      "assets/images/people/person-17/photo-02.webp",
      "assets/images/people/person-17/photo-03.webp",
      "assets/images/people/person-17/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Nguyễn Ngọc Anh",
      "Khung ảnh thứ hai dành cho Nguyễn Ngọc Anh",
      "Khung ảnh thứ ba dành cho Nguyễn Ngọc Anh",
      "Khung ảnh thứ tư dành cho Nguyễn Ngọc Anh"
    ]
  },
  {
    id: "person-18",
    status: "ready",
    name: "Đặng Thị Kim Oanh",
    subtitle: "Vui tươi như tiếng chim hót ngày thu",
    message:
      "Chúc Kim Oanh một ngày Phụ nữ Việt Nam ngập tràn tiếng cười và hạnh phúc.\n\n" +
      "Mong bạn luôn giữ được nét tươi trẻ, tinh thần lạc quan và mọi dự định ấp ủ đều sớm thành hiện thực tốt đẹp.",
    images: [
      "assets/images/people/person-18/photo-01.webp",
      "assets/images/people/person-18/photo-02.webp",
      "assets/images/people/person-18/photo-03.webp",
      "assets/images/people/person-18/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Đặng Thị Kim Oanh",
      "Khung ảnh thứ hai dành cho Đặng Thị Kim Oanh",
      "Khung ảnh thứ ba dành cho Đặng Thị Kim Oanh",
      "Khung ảnh thứ tư dành cho Đặng Thị Kim Oanh"
    ]
  },
  {
    id: "person-19",
    status: "ready",
    name: "Nguyễn Thùy Linh",
    subtitle: "Thùy mị, thông minh và tràn đầy duyên dáng",
    message:
      "Chúc Thùy Linh một ngày 20/10 thật ý nghĩa, ấm cúng bên người thân và bạn bè.\n\n" +
      "Chúc bạn luôn xinh xắn, tự tin và luôn là nguồn cảm hứng dịu dàng cho những người xung quanh.",
    images: [
      "assets/images/people/person-19/photo-01.webp",
      "assets/images/people/person-19/photo-02.webp",
      "assets/images/people/person-19/photo-03.webp",
      "assets/images/people/person-19/photo-04.webp"
    ],
    imageAlts: [
      "Khung ảnh thứ nhất dành cho Nguyễn Thùy Linh",
      "Khung ảnh thứ hai dành cho Nguyễn Thùy Linh",
      "Khung ảnh thứ ba dành cho Nguyễn Thùy Linh",
      "Khung ảnh thứ tư dành cho Nguyễn Thùy Linh"
    ]
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
