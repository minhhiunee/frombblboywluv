(function () {
  "use strict";

  var search = window.RecipientSearch;
  var recipients = window.RECIPIENTS || [];
  var currentPerson = null;
  var currentImages = [];
  var currentPhotoIndex = 0;
  var shownIndices = [];

  var COLOR_HEARTS = [
    "💖", "💗", "💓", "💞", "💕", "💘", "💝",
    "❤️", "🧡", "💛", "💜", "🩵", "🤍", "🩷"
  ];

  function renderHearts(container) {
    if (!container) return;
    container.replaceChildren();
    var count = 3 + Math.floor(Math.random() * 2); // 3 đến 4 trái tim ngẫu nhiên
    var shuffled = COLOR_HEARTS.slice().sort(function () {
      return 0.5 - Math.random();
    });
    var picked = shuffled.slice(0, count);
    picked.forEach(function (heartChar, idx) {
      var span = document.createElement("span");
      span.className = "caption-heart-item";
      span.textContent = heartChar;
      span.setAttribute("aria-hidden", "true");
      span.style.animationDelay = (idx * 0.18) + "s";
      container.appendChild(span);
    });
  }

  var GIFT_ICONS = [
    "assets/q3.png",
    "assets/t2.png",
    "assets/h1.png",
    "assets/q3.png",
    "assets/t5.png"
  ];

  var els = {
    home: document.getElementById("view-home"),
    greeting: document.getElementById("view-greeting"),
    form: document.getElementById("search-form"),
    input: document.getElementById("name-input"),
    submit: document.getElementById("search-submit"),
    status: document.getElementById("search-status"),
    recipientName: document.getElementById("recipient-name"),
    recipientSubtitle: document.getElementById("recipient-subtitle"),
    recipientMessage: document.getElementById("recipient-message"),
    live: document.getElementById("live-region"),
    fallingZone: document.getElementById("falling-gifts-zone"),
    photoModal: document.getElementById("photo-modal"),
    photoModalImg: document.getElementById("photo-modal-img"),
    photoModalCaption: document.getElementById("photo-modal-caption"),
    photoModalClose: document.getElementById("photo-modal-close"),
    musicToggle: document.getElementById("music-toggle"),
    bgMusic: document.getElementById("bg-music")
  };

  function announce(message) {
    els.live.textContent = "";
    window.setTimeout(function () {
      els.live.textContent = message;
    }, 40);
  }

  function setStatus(message, isError) {
    els.status.textContent = message || "";
    els.status.classList.toggle("is-error", Boolean(isError && message));
    if (message) {
      announce(message);
    }
  }

  function fillText(node, value) {
    if (node) {
      node.textContent = value || "";
    }
  }

  function spawnConfetti(clientX, clientY) {
    var container = document.createElement("div");
    container.className = "confetti-burst";
    container.setAttribute("aria-hidden", "true");
    container.style.position = "fixed";
    container.style.left = (clientX || (window.innerWidth / 2)) + "px";
    container.style.top = (clientY || (window.innerHeight / 2)) + "px";

    var symbols = ["💖", "💗", "💓", "🌸", "✨", "🩷", "🌷", "💝", "💕"];
    for (var i = 0; i < 9; i++) {
      var p = document.createElement("span");
      p.className = "confetti-particle";
      p.textContent = symbols[i % symbols.length];
      var angle = (Math.PI * 2 * i) / 9 + (Math.random() - 0.5) * 0.4;
      var dist = 55 + Math.random() * 55;
      p.style.setProperty("--tx", Math.cos(angle) * dist + "px");
      p.style.setProperty("--ty", Math.sin(angle) * dist - 25 + "px");
      p.style.setProperty("--rot", (Math.random() * 360 - 180) + "deg");
      container.appendChild(p);
    }
    document.body.appendChild(container);
    window.setTimeout(function () {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }, 1100);
  }

  function getRandomIndex(total) {
    if (total <= 1) return 0;
    var available = [];
    for (var i = 0; i < total; i++) {
      if (shownIndices.indexOf(i) === -1) {
        available.push(i);
      }
    }
    if (available.length === 0) {
      shownIndices = [];
      for (var j = 0; j < total; j++) {
        available.push(j);
      }
    }
    var chosen = available[Math.floor(Math.random() * available.length)];
    shownIndices.push(chosen);
    return chosen;
  }

  function displayPhoto(index) {
    if (!currentImages.length) return;
    currentPhotoIndex = index;
    var src = currentImages[currentPhotoIndex];

    els.photoModalImg.src = src;
    els.photoModalImg.alt = currentPerson ? currentPerson.name : "Ảnh 20/10";
    renderHearts(els.photoModalCaption);
  }

  function openPhotoModal(index) {
    if (!currentImages.length) return;
    if (typeof index !== "number") {
      index = getRandomIndex(currentImages.length);
    }
    displayPhoto(index);

    if (typeof els.photoModal.showModal === "function") {
      if (!els.photoModal.open) {
        els.photoModal.showModal();
      }
    } else {
      els.photoModal.setAttribute("open", "");
    }
    announce("Đã mở ảnh số " + (currentPhotoIndex + 1) + " dành cho bạn");
  }

  function closePhotoModal() {
    if (typeof els.photoModal.close === "function" && els.photoModal.open) {
      els.photoModal.close();
    } else {
      els.photoModal.removeAttribute("open");
    }
  }

  function stepPhoto(delta) {
    if (!currentImages.length) return;
    var next = (currentPhotoIndex + delta + currentImages.length) % currentImages.length;
    displayPhoto(next);
  }

  function startFallingGifts() {
    if (!els.fallingZone) return;
    els.fallingZone.replaceChildren();

    // Giảm số lượng gói quà rơi cùng lúc (3 gói trên di động, 4 gói trên máy tính) để giao diện thoáng, nhẹ nhàng
    var isMobile = window.innerWidth < 640;
    var count = isMobile ? 3 : 4;
    var slotWidth = 76 / count;

    for (var i = 0; i < count; i++) {
      var item = document.createElement("button");
      item.type = "button";
      item.className = "falling-gift-btn";
      item.setAttribute("aria-label", "Chạm để mở ảnh bất ngờ");

      var img = document.createElement("img");
      img.src = GIFT_ICONS[i % GIFT_ICONS.length];
      img.alt = "";
      img.decoding = "async";
      item.appendChild(img);

      // Phân bổ vị trí ngang thoáng đãng và thời gian so le
      var baseLeft = 12 + i * slotWidth;
      var leftPercent = Math.floor(baseLeft + Math.random() * (slotWidth - 4));
      var duration = (10 + Math.random() * 5).toFixed(1);
      var delay = (-(i * 3.2 + Math.random() * 2.5)).toFixed(1);
      var size = Math.floor(48 + Math.random() * 14);
      var sway = Math.floor(-25 + Math.random() * 50);

      item.style.left = leftPercent + "%";
      item.style.animationDuration = duration + "s";
      item.style.animationDelay = delay + "s";
      item.style.width = size + "px";
      item.style.height = size + "px";
      item.style.setProperty("--sway-x", sway + "px");

      item.addEventListener("click", (function (btn) {
        return function (e) {
          var rect = btn.getBoundingClientRect();
          spawnConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
          btn.classList.add("is-popped");
          window.setTimeout(function () {
            btn.classList.remove("is-popped");
          }, 400);
          openPhotoModal();
        };
      })(item));

      els.fallingZone.appendChild(item);
    }
  }

  function stopFallingGifts() {
    if (els.fallingZone) {
      els.fallingZone.replaceChildren();
    }
  }

  function showGreeting(person) {
    currentPerson = person;
    currentImages = (person.images || []).filter(Boolean);
    if (!currentImages.length) {
      currentImages = [
        "assets/images/decorations/placeholder.svg",
        "assets/images/decorations/placeholder.svg",
        "assets/images/decorations/placeholder.svg",
        "assets/images/decorations/placeholder.svg"
      ];
    }
    shownIndices = [];

    fillText(els.recipientName, person.name);
    fillText(
      els.recipientSubtitle,
      person.subtitle || "Một ngày 20/10 thật dịu dàng và rạng rỡ"
    );

    if (els.recipientMessage) {
      els.recipientMessage.replaceChildren();
      var paragraphs = String(person.message || "").split(/\n+/);
      paragraphs.forEach(function (text) {
        var trimmed = text.trim();
        if (trimmed) {
          var p = document.createElement("p");
          p.className = "message-paragraph";
          p.textContent = trimmed;
          els.recipientMessage.appendChild(p);
        }
      });
    }

    els.home.hidden = true;
    els.greeting.hidden = false;
    els.greeting.classList.remove("is-revealed");
    void els.greeting.offsetWidth;
    els.greeting.classList.add("is-revealed");

    startFallingGifts();

    setStatus("");
    announce("Đã mở lời chúc dành cho " + person.name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showHome() {
    currentPerson = null;
    closePhotoModal();
    stopFallingGifts();
    els.greeting.hidden = true;
    els.home.hidden = false;
    els.input.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSearch(event) {
    event.preventDefault();
    var result = search.findRecipients(els.input.value, recipients);

    if (result.type === "empty") {
      setStatus("Hãy nhập tên người nhận để mở lời chúc.", true);
      els.input.setAttribute("aria-invalid", "true");
      els.input.focus();
      return;
    }

    if (result.type === "ambiguous" || result.type === "ambiguous-accents") {
      setStatus(
        "Có nhiều người khớp với tên này. Hãy nhập đúng tên đầy đủ, gồm cả dấu tiếng Việt.",
        true
      );
      els.input.setAttribute("aria-invalid", "true");
      return;
    }

    if (result.type === "none") {
      setStatus(
        "Không tìm thấy lời chúc cho tên này. Kiểm tra lại chính tả hoặc hỏi người gửi website nhé.",
        true
      );
      els.input.setAttribute("aria-invalid", "true");
      return;
    }

    els.input.removeAttribute("aria-invalid");
    showGreeting(result.person);
  }

  function toggleMusic() {
    if (!els.bgMusic) return;
    if (els.bgMusic.paused) {
      els.bgMusic.play().then(function () {
        if (els.musicToggle) {
          els.musicToggle.classList.add("is-playing");
          var txt = els.musicToggle.querySelector(".music-text");
          if (txt) txt.textContent = "Tắt nhạc";
        }
      }).catch(function () {
        // Autoplay policy or error
      });
    } else {
      els.bgMusic.pause();
      if (els.musicToggle) {
        els.musicToggle.classList.remove("is-playing");
        var txt2 = els.musicToggle.querySelector(".music-text");
        if (txt2) txt2.textContent = "Bật nhạc";
      }
    }
  }

  function onDocumentKeydown(event) {
    if (event.key === "Escape" && els.photoModal.open) {
      closePhotoModal();
      return;
    }
    if (!els.photoModal.open) {
      return;
    }
    if (event.key === "ArrowLeft") {
      stepPhoto(-1);
    } else if (event.key === "ArrowRight") {
      stepPhoto(1);
    }
  }

  function init() {
    if (window.RecipientData) {
      window.RecipientData.validateRecipients(recipients);
    }

    els.photoModalImg.addEventListener("error", function () {
      if (els.photoModalImg.src.indexOf("placeholder.svg") === -1) {
        els.photoModalImg.src = search.PLACEHOLDER_SRC;
      }
    });

    els.form.addEventListener("submit", handleSearch);

    if (els.photoModalClose) {
      els.photoModalClose.addEventListener("click", closePhotoModal);
    }

    if (els.musicToggle) {
      els.musicToggle.addEventListener("click", toggleMusic);
    }

    var giftCallout = document.querySelector(".gift-hunt-callout");
    if (giftCallout) {
      giftCallout.style.cursor = "pointer";
      giftCallout.setAttribute("role", "button");
      giftCallout.setAttribute("tabindex", "0");
      giftCallout.addEventListener("click", function (e) {
        var rect = giftCallout.getBoundingClientRect();
        spawnConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
        openPhotoModal();
      });
      giftCallout.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          giftCallout.click();
        }
      });
    }

    els.photoModal.addEventListener("click", function (event) {
      if (event.target === els.photoModal) {
        closePhotoModal();
      }
    });

    document.addEventListener("keydown", onDocumentKeydown);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
