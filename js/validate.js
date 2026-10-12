(function (global) {
  "use strict";

  function validateRecipients(recipients) {
    var warnings = [];
    var list = Array.isArray(recipients) ? recipients : [];
    var ids = {};
    var names = {};

    if (list.length !== 25) {
      warnings.push("Dự kiến 25 người nhận, hiện có " + list.length + " mục.");
    }

    list.forEach(function (person, index) {
      var label = person && person.id ? person.id : "index-" + index;

      if (!person || !person.id) {
        warnings.push("Mục #" + (index + 1) + " thiếu id.");
        return;
      }

      if (ids[person.id]) {
        warnings.push("Trùng id: " + person.id);
      }
      ids[person.id] = true;

      var imageCount = Array.isArray(person.images) ? person.images.length : 0;
      if (imageCount < 4 || imageCount > 5) {
        warnings.push(label + " nên có 4–5 đường dẫn ảnh (hiện: " + imageCount + ").");
      }

      if (person.status === "ready" || person.status === "sample") {
        if (!String(person.name || "").trim()) {
          warnings.push(label + " đang kích hoạt nhưng thiếu tên.");
        }
        if (!String(person.message || "").trim()) {
          warnings.push(label + " đang kích hoạt nhưng thiếu lời chúc.");
        }
      }

      if (global.RecipientSearch && global.RecipientSearch.isComplete(person)) {
        var key = global.RecipientSearch.normalizeName(person.name);
        if (names[key]) {
          warnings.push("Tên bị trùng sau khi chuẩn hóa: \"" + person.name + "\" (" + label + " và " + names[key] + ").");
        } else {
          names[key] = label;
        }
      }
    });

    if (warnings.length && typeof console !== "undefined" && console.warn) {
      warnings.forEach(function (item) {
        console.warn("[recipients] " + item);
      });
    }

    return warnings;
  }

  global.RecipientData = {
    validateRecipients: validateRecipients
  };
})(window);
