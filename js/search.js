(function (global) {
  "use strict";

  var PLACEHOLDER_SRC = "assets/images/decorations/placeholder.svg";

  function normalizeName(value) {
    return String(value || "")
      .normalize("NFC")
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase();
  }

  function stripDiacritics(value) {
    return normalizeName(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d");
  }

  function isComplete(person) {
    if (!person || (person.status !== "ready" && person.status !== "sample")) {
      return false;
    }
    var name = String(person.name || "").trim();
    var message = String(person.message || "").trim();
    var images = Array.isArray(person.images) ? person.images.filter(Boolean) : [];
    return Boolean(name && message && images.length >= 4 && images.length <= 5);
  }

  function findRecipients(query, recipients) {
    var normalizedQuery = normalizeName(query);
    if (!normalizedQuery) {
      return { type: "empty" };
    }

    var active = (recipients || []).filter(isComplete);

    var exact = active.filter(function (person) {
      return normalizeName(person.name) === normalizedQuery;
    });

    if (exact.length === 1) {
      return { type: "one", person: exact[0] };
    }
    if (exact.length > 1) {
      return { type: "ambiguous" };
    }

    var queryPlain = stripDiacritics(normalizedQuery);
    var namesByPlain = {};

    active.forEach(function (person) {
      var key = stripDiacritics(person.name);
      if (!namesByPlain[key]) {
        namesByPlain[key] = [];
      }
      namesByPlain[key].push(person);
    });

    var colliding = namesByPlain[queryPlain] || [];
    if (colliding.length > 1) {
      return { type: "ambiguous-accents" };
    }
    if (colliding.length === 1) {
      return { type: "one", person: colliding[0] };
    }

    return { type: "none" };
  }

  global.RecipientSearch = {
    PLACEHOLDER_SRC: PLACEHOLDER_SRC,
    normalizeName: normalizeName,
    stripDiacritics: stripDiacritics,
    isComplete: isComplete,
    findRecipients: findRecipients
  };
})(window);
