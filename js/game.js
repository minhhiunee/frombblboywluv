(function () {
  "use strict";

  // Cache DOM elements
  var modal = document.getElementById("game-modal");
  var canvas = document.getElementById("game-canvas");
  var openBtn = document.getElementById("game-launcher-btn");
  var closeBtn = document.getElementById("game-modal-close");
  var startBtn = document.getElementById("game-start-btn");
  var currentScoreEl = document.getElementById("game-current-score");
  var highScoreEl = document.getElementById("game-high-score");
  var overlay = document.getElementById("game-overlay");
  var overlayIcon = document.getElementById("game-overlay-icon");
  var overlayTitle = document.getElementById("game-overlay-title");
  var overlayDesc = document.getElementById("game-overlay-desc");

  if (!canvas || !modal) return;

  var ctx = canvas.getContext("2d");

  // Game configuration
  var LOGICAL_WIDTH = 400;
  var LOGICAL_HEIGHT = 520;
  var HIGH_SCORE_KEY = "bll_2010_game_highscore";

  // Game state
  var isPlaying = false;
  var isGameOver = false;
  var animationFrameId = null;
  var score = 0;
  var highScore = 0;

  try {
    highScore = parseInt(localStorage.getItem(HIGH_SCORE_KEY) || "0", 10) || 0;
  } catch (e) {
    highScore = 0;
  }
  if (highScoreEl) highScoreEl.textContent = highScore;

  // Paddle
  var paddle = {
    width: 96,
    height: 14,
    x: (LOGICAL_WIDTH - 96) / 2,
    y: LOGICAL_HEIGHT - 38,
    speed: 9.5,
    isMovingLeft: false,
    isMovingRight: false
  };

  // Target in the top center
  var target = {
    x: LOGICAL_WIDTH / 2,
    y: 36,
    width: 88,
    height: 38,
    radius: 19,
    pulse: 0
  };

  var lastTargetHitTime = 0;

  // Heart Ball - Tăng tốc độ xuất phát ban đầu nhanh hơn
  var baseSpeed = 6.2;
  var heart = {
    x: LOGICAL_WIDTH / 2,
    y: LOGICAL_HEIGHT / 2,
    radius: 14,
    vx: 3.8,
    vy: -5.5,
    speed: baseSpeed,
    emoji: "💖",
    scale: 1,
    trail: []
  };

  // Visual effects
  var particles = [];
  var floatingTexts = [];

  // Handle high-DPI (Retina) scaling
  function resizeCanvas() {
    var rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    var dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale((rect.width * dpr) / LOGICAL_WIDTH, (rect.height * dpr) / LOGICAL_HEIGHT);
  }

  function resetGame() {
    score = 0;
    if (currentScoreEl) currentScoreEl.textContent = "0";

    paddle.width = 96;
    paddle.x = (LOGICAL_WIDTH - paddle.width) / 2;
    paddle.isMovingLeft = false;
    paddle.isMovingRight = false;

    heart.speed = baseSpeed;
    heart.x = LOGICAL_WIDTH / 2;
    heart.y = LOGICAL_HEIGHT - 80;
    var angle = (-Math.PI / 2) + (Math.random() * 0.6 - 0.3); // Hướng bay chéo lên
    heart.vx = Math.sin(angle) * heart.speed;
    heart.vy = Math.cos(angle) * -heart.speed;
    heart.trail = [];
    heart.scale = 1;

    particles = [];
    floatingTexts = [];
    isGameOver = false;
  }

  function spawnParticles(x, y, count) {
    for (var i = 0; i < count; i++) {
      var angle = Math.random() * Math.PI * 2;
      var speed = 1.2 + Math.random() * 2.2;
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.4,
        life: 1,
        decay: 0.05 + Math.random() * 0.03, // biến mất nhanh
        size: 2.2 + Math.random() * 1.8,     // chấm tròn mini nhẹ nhàng
        color: ["#ff758c", "#ffd166", "#ffffff", "#ff85a1"][i % 4]
      });
    }
  }

  function onTargetHit() {
    var now = Date.now();
    if (now - lastTargetHitTime < 240) return; // Chống va chạm dội nhiều lần trong 1 frame
    lastTargetHitTime = now;

    score += 1;
    if (currentScoreEl) currentScoreEl.textContent = score;

    if (score > highScore) {
      highScore = score;
      if (highScoreEl) highScoreEl.textContent = highScore;
      try {
        localStorage.setItem(HIGH_SCORE_KEY, String(highScore));
      } catch (e) {}
    }

    target.pulse = 1.15;

    // Kiểm tra mốc điểm tăng độ khó (Mốc 10 điểm, 20 điểm...)
    if (score === 10) {
      // Mốc 10 điểm: Tăng tốc bóng & thu ngắn thanh ngang
      paddle.width = 72; // Thanh ngắn lại từ 96px xuống 72px
      heart.speed += 1.4; // Tăng tốc bóng
      var angle10 = Math.atan2(heart.vy, heart.vx);
      heart.vx = Math.cos(angle10) * heart.speed;
      heart.vy = Math.sin(angle10) * heart.speed;

      floatingTexts = [{
        text: "⚡ MỐC 10 ĐIỂM! Thu Hẹp Thanh & Tăng Tốc! 🔥",
        x: LOGICAL_WIDTH / 2,
        y: target.y + 40,
        vy: -0.9,
        life: 1.6,
        color: "#e02663"
      }];
      spawnParticles(target.x, target.y + target.height / 2, 7);
    } else if (score === 20) {
      paddle.width = 58; // Mốc 20 điểm thu hẹp tiếp
      heart.speed += 1.2;
      var angle20 = Math.atan2(heart.vy, heart.vx);
      heart.vx = Math.cos(angle20) * heart.speed;
      heart.vy = Math.sin(angle20) * heart.speed;

      floatingTexts = [{
        text: "👑 MỐC 20 ĐIỂM! Siêu Thử Thách! 🌟",
        x: LOGICAL_WIDTH / 2,
        y: target.y + 40,
        vy: -0.9,
        life: 1.6,
        color: "#d88100"
      }];
      spawnParticles(target.x, target.y + target.height / 2, 8);
    } else {
      floatingTexts = [{
        text: "+1 💖",
        x: target.x,
        y: target.y + 36,
        vy: -1.2,
        life: 1,
        color: "#e02663"
      }];
      spawnParticles(target.x, target.y + target.height / 2, 4);

      // Tăng nhẹ tốc độ theo điểm (tối đa 10)
      if (heart.speed < 10) {
        heart.speed += 0.12;
        var currentAngle = Math.atan2(heart.vy, heart.vx);
        heart.vx = Math.cos(currentAngle) * heart.speed;
        heart.vy = Math.sin(currentAngle) * heart.speed;
      }
    }
  }

  function gameOver() {
    isPlaying = false;
    isGameOver = true;
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    if (overlay && overlayTitle && overlayDesc && startBtn) {
      overlayIcon.textContent = "💔";
      overlayTitle.textContent = "Bắt trượt rồi!";
      if (score > 0 && score === highScore) {
        overlayDesc.textContent = "🎉 Xuất sắc! Bạn lập kỷ lục mới với " + score + " điểm!";
      } else {
        overlayDesc.textContent = "Điểm của bạn: " + score + " điểm. Hãy thử lại để đạt điểm cao hơn nhé!";
      }
      startBtn.textContent = "Chơi lại 🎮";
      overlay.hidden = false;
      overlay.classList.add("is-visible");
    }
  }

  function update() {
    if (!isPlaying) return;

    // Di chuyển thanh đỡ qua bàn phím
    if (paddle.isMovingLeft) {
      paddle.x = Math.max(0, paddle.x - paddle.speed);
    }
    if (paddle.isMovingRight) {
      paddle.x = Math.min(LOGICAL_WIDTH - paddle.width, paddle.x + paddle.speed);
    }

    // Cập nhật vết vệt sáng của trái tim
    heart.trail.push({ x: heart.x, y: heart.y, alpha: 0.5 });
    if (heart.trail.length > 7) {
      heart.trail.shift();
    }

    // Di chuyển trái tim
    heart.x += heart.vx;
    heart.y += heart.vy;

    // Va chạm với hai cạnh trái / phải
    if (heart.x - heart.radius <= 0) {
      heart.x = heart.radius;
      heart.vx = Math.abs(heart.vx);
      spawnParticles(heart.x, heart.y, 4);
    } else if (heart.x + heart.radius >= LOGICAL_WIDTH) {
      heart.x = LOGICAL_WIDTH - heart.radius;
      heart.vx = -Math.abs(heart.vx);
      spawnParticles(heart.x, heart.y, 4);
    }

    // Va chạm với cạnh trên
    if (heart.y - heart.radius <= 0) {
      heart.y = heart.radius;
      heart.vy = Math.abs(heart.vy);
    }

    // Va chạm với Mục tiêu chính giữa phía trên (Target) từ mọi hướng (dưới lên, trên xuống, chéo trái, chéo phải)
    var targetHalfW = target.width / 2;
    var targetHalfH = target.height / 2;

    var nearestX = Math.max(target.x - targetHalfW, Math.min(heart.x, target.x + targetHalfW));
    var nearestY = Math.max(target.y - targetHalfH, Math.min(heart.y, target.y + targetHalfH));

    var distX = heart.x - nearestX;
    var distY = heart.y - nearestY;
    var distSq = distX * distX + distY * distY;

    if (distSq < heart.radius * heart.radius) {
      // Xác định phía va chạm dựa trên mức độ chồng lấn (overlap)
      var overlapX = (targetHalfW + heart.radius) - Math.abs(heart.x - target.x);
      var overlapY = (targetHalfH + heart.radius) - Math.abs(heart.y - target.y);

      if (overlapY < overlapX) {
        // Va chạm theo phương thẳng đứng (đỉnh hoặc đáy)
        if (heart.y < target.y) {
          heart.y = target.y - targetHalfH - heart.radius - 2;
          heart.vy = -Math.abs(heart.vy);
        } else {
          heart.y = target.y + targetHalfH + heart.radius + 2;
          heart.vy = Math.abs(heart.vy);
        }
      } else {
        // Va chạm theo phương ngang (cạnh trái hoặc cạnh phải khi bay chéo từ trên xuống hoặc từ bên sang)
        if (heart.x < target.x) {
          heart.x = target.x - targetHalfW - heart.radius - 2;
          heart.vx = -Math.abs(heart.vx);
        } else {
          heart.x = target.x + targetHalfW + heart.radius + 2;
          heart.vx = Math.abs(heart.vx);
        }
      }

      onTargetHit();
    }

    // Va chạm với thanh ngang (Paddle)
    if (
      heart.y + heart.radius >= paddle.y &&
      heart.y - heart.radius <= paddle.y + paddle.height &&
      heart.x >= paddle.x - 4 &&
      heart.x <= paddle.x + paddle.width + 4 &&
      heart.vy > 0
    ) {
      // Đặt bóng trên mặt thanh đỡ
      heart.y = paddle.y - heart.radius;

      // Tính góc nảy dựa trên điểm tiếp xúc trên thanh
      var hitOffset = (heart.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);
      hitOffset = Math.max(-0.95, Math.min(0.95, hitOffset));

      var maxBounceAngle = Math.PI * 0.42; // ~75 độ
      var bounceAngle = hitOffset * maxBounceAngle;

      heart.vx = heart.speed * Math.sin(bounceAngle);
      heart.vy = -heart.speed * Math.cos(bounceAngle);

      // Hiệu ứng nhún thanh và tia sáng
      paddle.y += 2;
      window.setTimeout(function () {
        paddle.y = LOGICAL_HEIGHT - 38;
      }, 70);
      spawnParticles(heart.x, paddle.y, 6, ["💖", "✨"]);
    }

    // Rơi quá đáy -> Thua
    if (heart.y - heart.radius > LOGICAL_HEIGHT) {
      gameOver();
      return;
    }

    // Giảm hiệu ứng nhún target
    if (target.pulse > 1) target.pulse -= 0.02;

    // Cập nhật hạt
    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) {
        particles.splice(i, 1);
      }
    }

    // Cập nhật text bay
    for (var j = floatingTexts.length - 1; j >= 0; j--) {
      var ft = floatingTexts[j];
      ft.y += ft.vy;
      ft.life -= 0.025;
      if (ft.life <= 0) {
        floatingTexts.splice(j, 1);
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);

    // 1. Vẽ nền gradient tinh tế
    var bgGrad = ctx.createLinearGradient(0, 0, 0, LOGICAL_HEIGHT);
    bgGrad.addColorStop(0, "rgba(255, 248, 250, 0.95)");
    bgGrad.addColorStop(1, "rgba(255, 238, 243, 0.98)");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);

    // 2. Vẽ lưới vạch mờ trang trí
    ctx.strokeStyle = "rgba(240, 98, 146, 0.08)";
    ctx.lineWidth = 1;
    for (var x = 20; x < LOGICAL_WIDTH; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, LOGICAL_HEIGHT);
      ctx.stroke();
    }
    for (var y = 20; y < LOGICAL_HEIGHT; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(LOGICAL_WIDTH, y);
      ctx.stroke();
    }

    // 3. Vẽ Mục tiêu chính giữa phía trên (Hồng tâm 20/10)
    ctx.save();
    var tScale = target.pulse > 1 ? target.pulse : 1;
    ctx.translate(target.x, target.y);
    ctx.scale(tScale, tScale);

    // Khung hồng tâm dạng viên thuốc nổi bật
    ctx.beginPath();
    var tw = target.width;
    var th = target.height;
    ctx.roundRect(-tw / 2, -th / 2, tw, th, 19);

    var targetGrad = ctx.createLinearGradient(-tw / 2, -th / 2, tw / 2, th / 2);
    targetGrad.addColorStop(0, "#ff5376");
    targetGrad.addColorStop(1, "#e02663");
    ctx.fillStyle = targetGrad;
    ctx.fill();

    // Viền sáng
    ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Icon / chữ trên hồng tâm
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 13px 'Playfair Display', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("🎯 HỒNG TÂM", 0, 0);
    ctx.restore();

    // 4. Vẽ vệt sáng (Trail) của trái tim
    for (var t = 0; t < heart.trail.length; t++) {
      var tr = heart.trail[t];
      var tAlpha = (t + 1) / heart.trail.length * 0.25;
      ctx.beginPath();
      ctx.arc(tr.x, tr.y, 4 + t * 1.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 117, 140, " + tAlpha + ")";
      ctx.fill();
    }

    // 5. Vẽ Trái tim đang bay
    ctx.save();
    ctx.translate(heart.x, heart.y);
    ctx.font = "26px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(heart.emoji, 0, 1);
    ctx.restore();

    // 6. Vẽ Thanh ngang (Paddle)
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(paddle.x, paddle.y, paddle.width, paddle.height, 8);
    var paddleGrad = ctx.createLinearGradient(paddle.x, paddle.y, paddle.x + paddle.width, paddle.y);
    paddleGrad.addColorStop(0, "#ff758c");
    paddleGrad.addColorStop(0.5, "#ff7eb3");
    paddleGrad.addColorStop(1, "#ff5376");
    ctx.fillStyle = paddleGrad;
    ctx.fill();

    // Điểm bóng sáng bề mặt thanh
    ctx.beginPath();
    ctx.roundRect(paddle.x + 8, paddle.y + 2, paddle.width - 16, 3, 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.fill();
    ctx.restore();

    // 7. Vẽ các hạt vụn nhẹ (Particles)
    for (var pIdx = 0; pIdx < particles.length; pIdx++) {
      var p = particles[pIdx];
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.restore();
    }

    // 8. Vẽ text bay cộng điểm (gọn gàng, không giật)
    for (var fIdx = 0; fIdx < floatingTexts.length; fIdx++) {
      var ft = floatingTexts[fIdx];
      ctx.save();
      ctx.globalAlpha = Math.max(0, ft.life);
      ctx.font = "bold 15px 'Playfair Display', sans-serif";
      ctx.fillStyle = ft.color;
      ctx.textAlign = "center";
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }
  }

  function gameLoop() {
    update();
    draw();
    if (isPlaying) {
      animationFrameId = requestAnimationFrame(gameLoop);
    }
  }

  function startGame() {
    if (overlay) {
      overlay.classList.remove("is-visible");
      overlay.hidden = true;
    }
    resetGame();
    isPlaying = true;
    resizeCanvas();
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(gameLoop);
  }

  function openGameModal() {
    if (typeof modal.showModal === "function") {
      if (!modal.open) modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }

    resizeCanvas();
    resetGame();
    draw();

    if (overlay && overlayTitle && overlayDesc && startBtn) {
      overlayIcon.textContent = "💖";
      overlayTitle.textContent = "Sẵn sàng chưa?";
      overlayDesc.textContent = "Di chuyển thanh ngang để đỡ trái tim va vào hồng tâm ở trên nhé!";
      startBtn.textContent = "Bắt đầu chơi 🎮";
      overlay.hidden = false;
      overlay.classList.add("is-visible");
    }
  }

  function closeGameModal() {
    isPlaying = false;
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    if (typeof modal.close === "function" && modal.open) {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
  }

  // Mouse & Touch controls for Paddle
  function handlePointerMove(clientX) {
    var rect = canvas.getBoundingClientRect();
    if (!rect.width) return;
    var relativeX = ((clientX - rect.left) / rect.width) * LOGICAL_WIDTH;
    paddle.x = Math.max(0, Math.min(LOGICAL_WIDTH - paddle.width, relativeX - paddle.width / 2));
  }

  canvas.addEventListener("mousemove", function (e) {
    handlePointerMove(e.clientX);
  });

  canvas.addEventListener("touchmove", function (e) {
    if (e.touches && e.touches[0]) {
      e.preventDefault();
      handlePointerMove(e.touches[0].clientX);
    }
  }, { passive: false });

  canvas.addEventListener("touchstart", function (e) {
    if (e.touches && e.touches[0]) {
      handlePointerMove(e.touches[0].clientX);
    }
  }, { passive: true });

  // Keyboard controls
  window.addEventListener("keydown", function (e) {
    if (!modal.open || !isPlaying) return;
    if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
      paddle.isMovingLeft = true;
    } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
      paddle.isMovingRight = true;
    } else if (e.key === "Escape") {
      closeGameModal();
    }
  });

  window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
      paddle.isMovingLeft = false;
    } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
      paddle.isMovingRight = false;
    }
  });

  // Modal event listeners
  if (openBtn) {
    openBtn.addEventListener("click", openGameModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeGameModal);
  }

  if (startBtn) {
    startBtn.addEventListener("click", startGame);
  }

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeGameModal();
    }
  });

  window.addEventListener("resize", function () {
    if (modal.open) {
      resizeCanvas();
      draw();
    }
  });

  // Polyfill roundRect for older canvas engines if needed
  if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
      if (typeof r === "number") r = [r, r, r, r];
      var radius = r[0] || 0;
      this.beginPath();
      this.moveTo(x + radius, y);
      this.arcTo(x + w, y, x + w, y + h, radius);
      this.arcTo(x + w, y + h, x, y + h, radius);
      this.arcTo(x, y + h, x, y, radius);
      this.arcTo(x, y, x + w, y, radius);
      this.closePath();
      return this;
    };
  }
})();
