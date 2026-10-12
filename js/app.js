(function () {
  "use strict";

  var search = window.RecipientSearch;
  var recipients = window.RECIPIENTS || [];
  var currentPerson = null;
  var currentImages = [];
  var lightboxIndex = 0;

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
    gallery: document.getElementById("gallery"),
    back: document.getElementById("back-button"),
    live: document.getElementById("live-region"),
    lightbox: document.getElementById("lightbox"),
    lightboxImage: document.getElementById("lightbox-image"),
    lightboxCaption: document.getElementById("lightbox-caption"),
    lightboxClose: document.getElementById("lightbox-close"),
    lightboxPrev: document.getElementById("lightbox-prev"),
    lightboxNext: document.getElementById("lightbox-next")
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
    node.textContent = value || "";
  }

  function renderMessage(text) {
    els.recipientMessage.textContent = text || "";
  }

  function bindImageFallback(img, figure) {
    img.addEventListener("error", function onError() {
      img.removeEventListener("error", onError);
      img.src = search.PLACEHOLDER_SRC;
      img.classList.add("is-fallback");
      figure.classList.add("is-missing");
    });
  }

  function renderGallery(person) {
    els.gallery.replaceChildren();
    currentImages = (person.images || []).filter(Boolean).slice(0, 5);
    var alts = Array.isArray(person.imageAlts) ? person.imageAlts : [];

    currentImages.forEach(function (src, index) {
      var figure = document.createElement("figure");
      figure.className = "gallery-item gallery-item--" + (index + 1);

      var button = document.createElement("button");
      button.type = "button";
      button.className = "gallery-trigger";
      button.setAttribute("aria-label", "Xem ảnh lớn " + (index + 1) + " của " + person.name);

      var img = document.createElement("img");
      img.alt = alts[index] || "Ảnh " + (index + 1) + " của " + person.name;
      img.decoding = "async";
      if (index === 0) {
        img.loading = "eager";
        img.fetchPriority = "high";
      } else {
        img.loading = "lazy";
      }

      bindImageFallback(img, figure);
      img.src = src;

      var caption = document.createElement("figcaption");
      caption.textContent = "Khung " + (index + 1);

      button.appendChild(img);
      figure.appendChild(button);
      figure.appendChild(caption);
      button.addEventListener("click", function () {
        openLightbox(index);
      });
      els.gallery.appendChild(figure);
    });
  }

  function showGreeting(person) {
    currentPerson = person;
    fillText(els.recipientName, person.name);
    fillText(
      els.recipientSubtitle,
      person.subtitle || "Lời chúc dành riêng cho bạn"
    );
    renderMessage(person.message);
    renderGallery(person);

    els.home.hidden = true;
    els.greeting.hidden = false;
    els.greeting.classList.remove("is-revealed");
    void els.greeting.offsetWidth;
    els.greeting.classList.add("is-revealed");

    setStatus("");
    announce("Đã mở lời chúc dành cho " + person.name);
    els.back.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showHome() {
    currentPerson = null;
    els.greeting.hidden = true;
    els.home.hidden = false;
    els.gallery.replaceChildren();
    els.input.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateLightbox() {
    var item = currentImages[lightboxIndex];
    if (!item) {
      return;
    }
    var alt =
      (currentPerson &&
        currentPerson.imageAlts &&
        currentPerson.imageAlts[lightboxIndex]) ||
      "Ảnh " + (lightboxIndex + 1);
    els.lightboxImage.alt = alt;
    els.lightboxImage.src = item;
    els.lightboxCaption.textContent =
      (currentPerson ? currentPerson.name + " · " : "") +
      (lightboxIndex + 1) +
      " / " +
      currentImages.length;
    els.lightboxPrev.disabled = currentImages.length < 2;
    els.lightboxNext.disabled = currentImages.length < 2;
  }

  function openLightbox(index) {
    lightboxIndex = index;
    updateLightbox();
    if (typeof els.lightbox.showModal === "function") {
      els.lightbox.showModal();
    } else {
      els.lightbox.setAttribute("open", "");
    }
  }

  function closeLightbox() {
    if (typeof els.lightbox.close === "function" && els.lightbox.open) {
      els.lightbox.close();
    } else {
      els.lightbox.removeAttribute("open");
    }
  }

  function stepLightbox(delta) {
    if (!currentImages.length) {
      return;
    }
    lightboxIndex =
      (lightboxIndex + delta + currentImages.length) % currentImages.length;
    updateLightbox();
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

  function onDocumentKeydown(event) {
    if (event.key === "Escape" && els.lightbox.open) {
      closeLightbox();
      return;
    }
    if (!els.lightbox.open) {
      return;
    }
    if (event.key === "ArrowLeft") {
      stepLightbox(-1);
    } else if (event.key === "ArrowRight") {
      stepLightbox(1);
    }
  }

  function init() {
    if (window.RecipientData) {
      window.RecipientData.validateRecipients(recipients);
    }

    els.lightboxImage.addEventListener("error", function () {
      if (els.lightboxImage.src.indexOf("placeholder.svg") === -1) {
        els.lightboxImage.src = search.PLACEHOLDER_SRC;
      }
    });

    els.form.addEventListener("submit", handleSearch);
    els.back.addEventListener("click", showHome);
    els.lightboxClose.addEventListener("click", closeLightbox);
    els.lightboxPrev.addEventListener("click", function () {
      stepLightbox(-1);
    });
    els.lightboxNext.addEventListener("click", function () {
      stepLightbox(1);
    });
    els.lightbox.addEventListener("click", function (event) {
      if (event.target === els.lightbox) {
        closeLightbox();
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
