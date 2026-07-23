(() => {
  const data = window.ATELIER_DATA;
  const state = {
    locale: localStorage.getItem("atelier-locale") || "en",
    cart: JSON.parse(localStorage.getItem("atelier-cart") || "[]"),
    wishlist: JSON.parse(localStorage.getItem("atelier-wishlist") || "[]"),
    compare: JSON.parse(localStorage.getItem("atelier-compare") || "[]"),
    quiz: [],
  };

  const t = {
    en: {
      navShop: "Shop",
      men: "Men",
      women: "Women",
      journal: "Journal",
      atelier: "Atelier",
      stylist: "Stylist",
      compare: "Compare",
      account: "Account",
      cart: "Cart",
      introEyebrow: "Season AW26 / Marble Corridor",
      heroCopy:
        "A luxury fashion house for women and men — cinematic, quiet, exacting.",
      explore: "Explore Collection",
      askStylist: "Ask the Stylist",
      homeStoryTitle: "Garments that enter the room before you do.",
      homeStoryText:
        "ATELIER NOIR studies silence as material: silk that absorbs light, wool that holds shadow, linen that remembers air. Scroll becomes a fitting room, commerce becomes an editorial scene.",
      featured: "Editor-selected silhouettes",
      shopAll: "Shop all",
      filters: "Filters",
      sort: "Sort",
      newest: "Newest",
      price: "Price",
      popularity: "Popularity",
      editors: "Editor's pick",
      quick: "Quick view",
      addCart: "Add to cart",
      addCompare: "Compare",
      wishlist: "Wishlist",
      viewDetail: "View detail",
      gender: "Gender",
      category: "Category",
      fabric: "Fabric",
      color: "Color",
      season: "Season",
      priceRange: "Max price",
      sustainability: "Sustainability score",
      all: "All",
      productDetail: "Product detail",
      fabricZoom: "Toggle 500% fabric close-up",
      arStub: "Try in your room — AR stub",
      fitting: "Virtual fitting room",
      trace: "Sustainability passport",
      height: "Height",
      weight: "Weight",
      shoulders: "Shoulders",
      calculateFit: "Animate fit heatmap",
      compareTitle: "Live comparison table",
      compareHint:
        "Add up to four pieces from the shop. Differences pulse softly.",
      stylistTitle: "AI Style Concierge Quiz",
      next: "Next",
      reveal: "Reveal capsule wardrobe",
      startOver: "Start over",
      journalTitle: "Editorial Journal",
      atelierTitle: "The atelier timeline",
      accountTitle: "Your Noir account",
      checkoutTitle: "Animated checkout",
      contactTitle: "Concierge contact",
      chatPlaceholder: "Ask the concierge…",
      send: "Send",
      moodboard: "Wishlist moodboard",
      exportPdf: "Export lookbook (stub)",
      loyalty: "Loyalty tiers",
      outfit: "Outfit builder",
      saveShare: "Save share card (stub)",
      empty: "Nothing here yet.",
      manifestoEyebrow: "Manifesto / Silence as material",
      manifestoLine: "Garments that enter the room before you do.",
      filmStripEyebrow: "Signature edit / Six frames",
      filmStripTitle: "A collection projected as film.",
      cinematographerEyebrow: "Cinematographer's scroll",
      cinematographerTitle: "The camera learns the garment.",
      sceneOne: "Ivory light. A coat holds the doorframe like architecture.",
      sceneTwo: "Shadow crosses silk; the silhouette answers without volume.",
      sceneThree:
        "A champagne trench cuts through air, never through attention.",
      sceneFour: "The final frame: marble, breath, restraint.",
      fabricPhysicsEyebrow: "Fabric physics / Traceable craft",
      fabricPhysicsTitle: "Cloth remembers every hand.",
      atelierLiveEyebrow: "The atelier live",
      atelierLiveTitle: "A pulse from the cutting table.",
      footerPrologueEyebrow: "Prologue / Continue",
      footerPrologueTitle: "The film closes. The fitting begins.",
    },
    fa: {
      navShop: "فروشگاه",
      men: "مردانه",
      women: "زنانه",
      journal: "ژورنال",
      atelier: "آتلیه",
      stylist: "استایلیست",
      compare: "مقایسه",
      account: "حساب",
      cart: "سبد",
      introEyebrow: "فصل ۱۴۰۵ / راهروی مرمر",
      heroCopy: "خانه مد لوکس برای زنان و مردان — سینمایی، آرام، دقیق.",
      explore: "دیدن کالکشن",
      askStylist: "از استایلیست بپرس",
      homeStoryTitle: "لباس‌هایی که پیش از شما وارد اتاق می‌شوند.",
      homeStoryText:
        "آتلیه نوآر سکوت را به‌عنوان ماده مطالعه می‌کند: ابریشمی که نور را می‌بلعد، پشمی که سایه را نگه می‌دارد، و لیننی که هوا را به خاطر می‌آورد.",
      featured: "سیلوئت‌های منتخب سردبیر",
      shopAll: "همه محصولات",
      filters: "فیلترها",
      sort: "مرتب‌سازی",
      newest: "جدیدترین",
      price: "قیمت",
      popularity: "محبوبیت",
      editors: "انتخاب سردبیر",
      quick: "نمای سریع",
      addCart: "افزودن به سبد",
      addCompare: "مقایسه",
      wishlist: "علاقه‌مندی",
      viewDetail: "جزئیات",
      gender: "جنسیت",
      category: "دسته",
      fabric: "پارچه",
      color: "رنگ",
      season: "فصل",
      priceRange: "حداکثر قیمت",
      sustainability: "امتیاز پایداری",
      all: "همه",
      productDetail: "جزئیات محصول",
      fabricZoom: "نمای نزدیک ۵۰۰٪ پارچه",
      arStub: "امتحان در اتاق — نمونه AR",
      fitting: "اتاق پرو مجازی",
      trace: "گذرنامه پایداری",
      height: "قد",
      weight: "وزن",
      shoulders: "سرشانه",
      calculateFit: "نمایش نقشه فیت",
      compareTitle: "جدول مقایسه زنده",
      compareHint:
        "تا چهار محصول از فروشگاه اضافه کنید. تفاوت‌ها با پالس نرم مشخص می‌شوند.",
      stylistTitle: "کوئیز استایلیست هوشمند",
      next: "بعدی",
      reveal: "نمایش کپسول",
      startOver: "شروع دوباره",
      journalTitle: "ژورنال مد",
      atelierTitle: "خط زمانی آتلیه",
      accountTitle: "حساب نوآر شما",
      checkoutTitle: "تسویه حساب متحرک",
      contactTitle: "تماس با کانسیرج",
      chatPlaceholder: "از کانسیرج بپرسید…",
      send: "ارسال",
      moodboard: "مودبرد علاقه‌مندی",
      exportPdf: "خروجی لوک‌بوک (نمونه)",
      loyalty: "سطوح وفاداری",
      outfit: "اوتفیت‌ساز",
      saveShare: "ذخیره کارت اشتراک (نمونه)",
      empty: "هنوز چیزی اینجا نیست.",
      manifestoEyebrow: "مانیفست / سکوت به‌عنوان ماده",
      manifestoLine: "لباس‌هایی که پیش از شما وارد اتاق می‌شوند.",
      filmStripEyebrow: "ادیت شاخص / شش فریم",
      filmStripTitle: "کالکشنی که مانند فیلم نمایش داده می‌شود.",
      cinematographerEyebrow: "اسکرول فیلم‌بردار",
      cinematographerTitle: "دوربین، لباس را یاد می‌گیرد.",
      sceneOne: "نور عاجی. کت، چارچوب در را مانند معماری نگه می‌دارد.",
      sceneTwo: "سایه از ابریشم می‌گذرد؛ سیلوئت بی‌صدا پاسخ می‌دهد.",
      sceneThree: "ترنچ شامپاینی هوا را می‌شکافد، نه توجه را.",
      sceneFour: "فریم آخر: مرمر، نفس، خویشتن‌داری.",
      fabricPhysicsEyebrow: "فیزیک پارچه / ساخت قابل ردیابی",
      fabricPhysicsTitle: "پارچه هر دست را به خاطر می‌سپارد.",
      atelierLiveEyebrow: "آتلیه زنده",
      atelierLiveTitle: "نبضی از میز برش.",
      footerPrologueEyebrow: "پرولوگ / ادامه",
      footerPrologueTitle: "فیلم بسته می‌شود. پرو آغاز می‌شود.",
    },
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const tr = (key) => t[state.locale][key] || key;
  const isFa = () => state.locale === "fa";
  const persist = (key) =>
    localStorage.setItem(`atelier-${key}`, JSON.stringify(state[key]));
  const productBySlug = (slug) =>
    data.products.find((p) => p.slug === slug) || data.products[0];
  const formatDigits = (value) =>
    isFa()
      ? String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])
      : String(value);
  const money = (usd) =>
    isFa()
      ? `${formatDigits(Math.round(usd * data.brand.currencyRate).toLocaleString("fa-IR"))} تومان`
      : `$${usd.toLocaleString("en-US")} USD`;
  const localName = (p) => p.name[state.locale] || p.name.en;
  const rootPath = () =>
    document.querySelector("base")?.getAttribute("href") || "./";
  const productHref = (slug) =>
    `shop/product/?slug=${encodeURIComponent(slug)}`;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    document.body.classList.add("noise");
    document.body.dir = isFa() ? "rtl" : "ltr";
    document.documentElement.lang = isFa() ? "fa-IR" : "en-US";
    document.body.classList.toggle(
      "home-page",
      document.body.dataset.page === "home",
    );
    injectChrome();
    applyI18nText();
    setupPreloader();
    setupCursor();
    setupLenis();
    setupNavVisibility();
    setupLanguage();
    setupSound();
    setupChat();
    bootPage();
    updateCounts();
  }

  function injectChrome() {
    const chrome = document.createElement("div");
    chrome.innerHTML = `
      <nav class="site-nav" id="site-nav" aria-label="Main navigation">
        <div class="nav-links">
          <a href="shop/" data-i18n="navShop"></a>
          <a href="collections/men/" data-i18n="men"></a>
          <a href="collections/women/" data-i18n="women"></a>
          <a href="journal/" data-i18n="journal"></a>
        </div>
        <a class="brand-word magnet" href="./" aria-label="ATELIER NOIR home">ATELIER NOIR</a>
        <div class="nav-links">
          <a class="optional" href="atelier/" data-i18n="atelier"></a>
          <a class="optional" href="stylist/" data-i18n="stylist"></a>
          <a class="optional" href="compare/"><span data-i18n="compare"></span> <span class="nav-count" id="compare-count">0</span></a>
          <a class="cart-link" href="checkout/"><span data-i18n="cart"></span> <span class="nav-count" id="cart-count">0</span></a>
        </div>
      </nav>
      <div class="lang-pill" role="group" aria-label="Language selector"><button data-lang="en">EN</button><button data-lang="fa">FA</button></div>
      <button class="sound-toggle magnet" id="sound-toggle" aria-label="Toggle ambient sound">♪</button>
      <button class="chat-fab magnet" id="chat-fab" aria-label="Open concierge chat">N</button>
      <aside class="chat-panel" id="chat-panel" aria-label="Concierge chat">
        <button class="icon-btn" id="chat-close" aria-label="Close chat">×</button>
        <h2 class="display" style="font-size:42px">Concierge</h2>
        <div class="chat-log" id="chat-log"><div class="message">${isFa() ? "سلام. برای انتخاب استایل، سایز یا هدیه کمک می‌کنم." : "Bonsoir. I can help with styling, sizing, or gifting."}</div></div>
        <form id="chat-form"><input id="chat-input" placeholder="${tr("chatPlaceholder")}" /><button class="btn small" type="submit">${tr("send")}</button></form>
      </aside>
      <div class="curtain" id="curtain"></div>
      <div class="cursor" id="cursor" data-label=""></div>
    `;
    document.body.prepend(chrome);
    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = `
      <div class="container footer-grid">
        <div><div class="brand-word">ATELIER NOIR</div><p class="lede">${isFa() ? "بوتیک سینمایی، دوخت آرام و تجربه خرید داستانی." : "Cinematic boutique, quiet tailoring, and story-led commerce."}</p></div>
        <div><strong>${tr("navShop")}</strong><a href="shop/">${tr("shopAll")}</a><a href="collections/men/">${tr("men")}</a><a href="collections/women/">${tr("women")}</a></div>
        <div><strong>Stories</strong><a href="journal/">${tr("journal")}</a><a href="atelier/">${tr("atelier")}</a><a href="stylist/">${tr("stylist")}</a></div>
        <div><strong>Concierge</strong><a href="account/">${tr("account")}</a><a href="contact/">${tr("contactTitle")}</a><a href="compare/">${tr("compare")}</a></div>
      </div>
      <div class="container footer-bottom"><span>© 2026 ATELIER NOIR</span><span>WCAG AA-minded static prototype · AVIF/WebP-ready art direction</span></div>`;
    document.body.append(footer);
  }

  function applyI18nText() {
    $$("[data-i18n]").forEach((el) => {
      el.textContent = tr(el.dataset.i18n);
    });
    $$(".lang-pill button").forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.lang === state.locale),
    );
  }

  function setupPreloader() {
    if ($("#preloader")) return;
    const pre = document.createElement("div");
    pre.id = "preloader";
    pre.innerHTML = `<svg class="preloader-mark" viewBox="0 0 300 160" aria-hidden="true"><path d="M24 132 L78 26 L132 132 M52 82 H105 M168 132 V28 L264 132 V28" /></svg>`;
    document.body.prepend(pre);
    setTimeout(() => pre.classList.add("is-hidden"), 1180);
    setTimeout(() => pre.remove(), 2200);
  }

  function setupCursor() {
    const cursor = $("#cursor");
    if (!cursor) return;
    let x = window.innerWidth / 2,
      y = window.innerHeight / 2,
      tx = x,
      ty = y;
    document.addEventListener("mousemove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
    });
    gsap.ticker.add(() => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      cursor.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
    });
    document.addEventListener("mouseover", (e) => {
      const target = e.target.closest(
        "[data-cursor], .product-card, .hero-video-wrap, .magnet, .btn",
      );
      if (!target) return;
      const label =
        target.dataset.cursor ||
        (target.classList.contains("product-card")
          ? "VIEW"
          : target.classList.contains("hero-video-wrap")
            ? "PLAY"
            : "GO");
      cursor.dataset.label = label;
      cursor.classList.add("is-disc");
    });
    document.addEventListener("mouseout", (e) => {
      if (
        e.target.closest(
          "[data-cursor], .product-card, .hero-video-wrap, .magnet, .btn",
        )
      )
        cursor.classList.remove("is-disc");
    });
    $$(".magnet, .btn").forEach((el) => {
      el.addEventListener("mousemove", (ev) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(ev.clientX - r.left - r.width / 2) * 0.12}px, ${(ev.clientY - r.top - r.height / 2) * 0.12}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  function setupLenis() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.add("reduced-motion");
      return;
    }
    if (!window.Lenis) return;
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.86,
      smoothWheel: true,
    });
    lenis.on("scroll", () => window.ScrollTrigger && ScrollTrigger.update());
    if (window.gsap) {
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
    window.lenis = lenis;
  }

  function setupNavVisibility() {
    const nav = $("#site-nav");
    if (!nav) return;
    if (document.body.dataset.page !== "home") {
      nav.classList.add("visible");
      return;
    }
    ScrollTrigger.create({
      start: 80,
      end: 300,
      scrub: true,
      onUpdate: (self) => nav.classList.toggle("visible", self.progress > 0.16),
    });
  }

  function setupLanguage() {
    $$(".lang-pill button").forEach((btn) =>
      btn.addEventListener("click", () => {
        if (btn.dataset.lang === state.locale) return;
        const curtain = $("#curtain");
        gsap
          .timeline({ defaults: { duration: 0.55, ease: "power3.inOut" } })
          .to(curtain, { scaleX: 1 })
          .call(() => {
            state.locale = btn.dataset.lang;
            localStorage.setItem("atelier-locale", state.locale);
            document.body.dir = isFa() ? "rtl" : "ltr";
            document.documentElement.lang = isFa() ? "fa-IR" : "en-US";
            applyI18nText();
            bootPage(true);
          })
          .to(curtain, {
            scaleX: 0,
            transformOrigin: isFa() ? "right" : "left",
          });
      }),
    );
  }

  function setupSound() {
    const btn = $("#sound-toggle");
    let ctx,
      osc,
      gain,
      on = false;
    btn?.addEventListener("click", () => {
      on = !on;
      btn.textContent = on ? "♫" : "♪";
      if (on) {
        ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
        osc = ctx.createOscillator();
        gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = 164.81;
        gain.gain.value = 0.018;
        osc.connect(gain).connect(ctx.destination);
        osc.start();
      } else if (osc) {
        osc.stop();
        osc = null;
      }
    });
  }

  function setupChat() {
    $("#chat-fab")?.addEventListener("click", () =>
      $("#chat-panel").classList.add("open"),
    );
    $("#chat-close")?.addEventListener("click", () =>
      $("#chat-panel").classList.remove("open"),
    );
    $("#chat-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = $("#chat-input");
      if (!input.value.trim()) return;
      const log = $("#chat-log");
      log.insertAdjacentHTML(
        "beforeend",
        `<div class="message user">${input.value}</div>`,
      );
      const answer = isFa()
        ? "برای یک کپسول دقیق، بودجه، موقعیت و بافت دلخواهتان را بگویید. پیشنهاد فوری: پالتوی دودی + شال ابریشمی."
        : "Tell me your occasion, budget, and preferred texture. Instant edit: Smoke Wool Coat + Silk Scarf.";
      setTimeout(() => {
        log.insertAdjacentHTML(
          "beforeend",
          `<div class="message">${answer}</div>`,
        );
        log.scrollTop = log.scrollHeight;
      }, 360);
      input.value = "";
    });
  }

  function bootPage(refresh = false) {
    const page = document.body.dataset.page;
    if (refresh) $$(".dynamic").forEach((el) => (el.innerHTML = ""));
    if (page === "home") renderHome();
    if (page === "shop") renderShop();
    if (page === "product") renderProductDetail();
    if (page === "men" || page === "women") renderLookbook(page);
    if (page === "compare") renderCompare();
    if (page === "stylist") renderStylist();
    if (page === "journal") renderJournal();
    if (page === "atelier") renderAtelier();
    if (page === "account") renderAccount();
    if (page === "checkout") renderCheckout();
    if (page === "contact") renderContact();
    applyI18nText();
    ScrollTrigger.refresh();
  }

  function renderHome() {
    setupHeroMotion();
    if (!document.getElementById("home-cinematic")) setupFabricCanvas();
    const grid = $("#featured-grid");
    if (grid)
      grid.innerHTML = data.products
        .filter((p) => p.badge.includes("Editor"))
        .slice(0, 6)
        .map(productCard)
        .join("");
    bindProductActions(document);
  }

  function setupHeroMotion() {
    const tagline = $("#hero-tagline");
    if (!tagline) return;
    tagline.textContent = data.brand.tagline[state.locale];
  }

  function setupFabricCanvas() {
    const canvas = $("#fabric-canvas");
    if (!canvas || !window.THREE || canvas.dataset.ready) return;
    canvas.dataset.ready = "true";
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      52,
      innerWidth / innerHeight,
      0.1,
      100,
    );
    camera.position.z = 3.4;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setSize(innerWidth, innerHeight);
    const geo = new THREE.PlaneGeometry(3.5, 2.1, 64, 42);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xc9a46b,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    const mouse = { x: 0, y: 0 };
    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX / innerWidth - 0.5;
      mouse.y = e.clientY / innerHeight - 0.5;
    });
    function animate(t) {
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i),
          y = pos.getY(i);
        pos.setZ(
          i,
          Math.sin(x * 3 + t * 0.0012) * 0.08 +
            Math.cos(y * 5 + t * 0.001) * 0.045,
        );
      }
      pos.needsUpdate = true;
      mesh.rotation.y += (mouse.x * 0.32 - mesh.rotation.y) * 0.04;
      mesh.rotation.x += (-mouse.y * 0.22 - mesh.rotation.x) * 0.04;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate(0);
    addEventListener("resize", () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    });
  }

  function productCard(p) {
    return `<article class="product-card" data-slug="${p.slug}" draggable="true" data-cursor="VIEW">
      <a class="product-card-media" href="${productHref(p.slug)}" aria-label="${localName(p)}">
        <img src="${p.image}" alt="${localName(p)} editorial portrait" loading="lazy">
        <video muted loop playsinline preload="none"><source src="${p.video}" type="video/mp4"></video>
      </a>
      <div class="product-card-body">
        <div class="product-kicker"><span>${p.badge}</span><span>${money(p.price)}</span></div>
        <h3>${localName(p)}</h3>
        <p>${p.fabric} · ${p.origin} · ${formatDigits(p.sustainability)}/100</p>
        <div class="card-actions">
          <button class="icon-btn" data-action="wishlist" aria-label="${tr("wishlist")}">♡</button>
          <button class="icon-btn" data-action="compare" aria-label="${tr("addCompare")}">⇄</button>
          <button class="icon-btn" data-action="cart" aria-label="${tr("addCart")}">＋</button>
          <button class="icon-btn" data-action="quick" aria-label="${tr("quick")}">◎</button>
        </div>
      </div>
    </article>`;
  }

  function bindProductActions(root) {
    $$("video", root).forEach((v) => {
      const card = v.closest(".product-card");
      card?.addEventListener("mouseenter", () => v.play().catch(() => {}));
      card?.addEventListener("mouseleave", () => {
        v.pause();
        v.currentTime = 0;
      });
    });
    $$("[data-action]", root).forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const slug =
          btn.closest(".product-card")?.dataset.slug || btn.dataset.slug;
        if (!slug) return;
        const action = btn.dataset.action;
        if (action === "cart") {
          state.cart.push(slug);
          persist("cart");
        }
        if (action === "wishlist" && !state.wishlist.includes(slug)) {
          state.wishlist.push(slug);
          persist("wishlist");
        }
        if (
          action === "compare" &&
          !state.compare.includes(slug) &&
          state.compare.length < 4
        ) {
          state.compare.push(slug);
          persist("compare");
        }
        if (action === "quick") openQuickView(productBySlug(slug));
        updateCounts();
        if (document.body.dataset.page === "compare") renderCompare();
      }),
    );
  }

  function updateCounts() {
    $("#cart-count") &&
      ($("#cart-count").textContent = formatDigits(state.cart.length));
    $("#compare-count") &&
      ($("#compare-count").textContent = formatDigits(state.compare.length));
  }

  function openQuickView(p) {
    let modal = $("#quick-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "quick-modal";
      modal.className = "modal";
      document.body.append(modal);
      modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.closest(".modal-close"))
          modal.classList.remove("open");
      });
    }
    modal.innerHTML = `<div class="modal-card"><button class="icon-btn modal-close" aria-label="Close">×</button><div class="modal-media"><img src="${p.image}" alt="${localName(p)}"></div><div class="modal-copy"><p class="eyebrow">${p.badge}</p><h2 class="display" style="font-size:64px">${localName(p)}</h2><p class="lede">${p.story}</p><p>${money(p.price)} · ${p.fabric} · ${p.origin}</p><div class="cta-row"><button class="btn" data-action="cart" data-slug="${p.slug}">${tr("addCart")}</button><a class="btn secondary" href="${productHref(p.slug)}">${tr("viewDetail")}</a></div></div></div>`;
    modal.classList.add("open");
    bindProductActions(modal);
  }

  function renderShop() {
    const grid = $("#shop-grid"),
      filters = $("#filters"),
      count = $("#result-count");
    if (!grid || !filters) return;
    const params = new URLSearchParams(location.search);
    filters.innerHTML = filterPanel(params);
    function apply() {
      const active = new URLSearchParams(location.search);
      let products = [...data.products];
      ["gender", "category", "fabric", "color", "season"].forEach((key) => {
        const val = active.get(key);
        if (val) products = products.filter((p) => String(p[key]) === val);
      });
      const max = Number(active.get("max") || 1300);
      products = products.filter((p) => p.price <= max);
      const sustain = Number(active.get("sustainability") || 0);
      products = products.filter((p) => p.sustainability >= sustain);
      const sort = active.get("sort") || "newest";
      if (sort === "price") products.sort((a, b) => a.price - b.price);
      if (sort === "popularity") products.sort((a, b) => b.rating - a.rating);
      if (sort === "editors")
        products.sort(
          (a, b) =>
            Number(b.badge.includes("Editor")) -
            Number(a.badge.includes("Editor")),
        );
      count.textContent = formatDigits(products.length);
      grid.innerHTML = products.length
        ? products.map(productCard).join("")
        : `<p class="lede">${tr("empty")}</p>`;
      bindProductActions(grid);
    }
    filters.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-filter]");
      if (!chip) return;
      const url = new URL(location.href);
      const key = chip.dataset.filter,
        val = chip.dataset.value;
      if (!val) url.searchParams.delete(key);
      else url.searchParams.set(key, val);
      history.pushState({}, "", url);
      filters.innerHTML = filterPanel(new URLSearchParams(location.search));
      apply();
    });
    filters.addEventListener("input", (e) => {
      const input = e.target.closest("[data-range]");
      if (!input) return;
      const url = new URL(location.href);
      url.searchParams.set(input.dataset.range, input.value);
      history.replaceState({}, "", url);
      apply();
    });
    $("#sort-select")?.addEventListener("change", (e) => {
      const url = new URL(location.href);
      url.searchParams.set("sort", e.target.value);
      history.pushState({}, "", url);
      apply();
    });
    apply();
  }

  function filterPanel(params) {
    const unique = (key) => [...new Set(data.products.map((p) => p[key]))];
    const chipGroup = (key, values) =>
      `<div class="filter-group"><span class="filter-title">${tr(key)}</span><div class="filter-options"><button class="chip ${!params.get(key) ? "active" : ""}" data-filter="${key}" data-value="">${tr("all")}</button>${values.map((v) => `<button class="chip ${params.get(key) === v ? "active" : ""}" data-filter="${key}" data-value="${v}">${v}</button>`).join("")}</div></div>`;
    const swatches = unique("color")
      .map(
        (c) =>
          `<button class="swatch ${params.get("color") === c ? "active" : ""}" data-filter="color" data-value="${c}" title="${c}" style="background:${colorMap(c)}"></button>`,
      )
      .join("");
    return `<h2>${tr("filters")}</h2>${chipGroup("gender", ["women", "men"])}${chipGroup("category", unique("category"))}${chipGroup("fabric", unique("fabric"))}<div class="filter-group"><span class="filter-title">${tr("color")}</span><div class="filter-options">${swatches}</div></div>${chipGroup("season", unique("season"))}<div class="filter-group"><label>${tr("priceRange")}: ${money(Number(params.get("max") || 1300))}</label><input type="range" min="140" max="1300" value="${params.get("max") || 1300}" data-range="max"></div><div class="filter-group"><label>${tr("sustainability")}: ${formatDigits(params.get("sustainability") || 0)}+</label><input type="range" min="0" max="100" value="${params.get("sustainability") || 0}" data-range="sustainability"></div>`;
  }
  function colorMap(c) {
    return (
      {
        black: "#0B0B0C",
        ivory: "#F5F1EA",
        champagne: "#C9A46B",
        smoke: "#6B6A66",
        blush: "#E7C6BE",
      }[c] || c
    );
  }

  function renderProductDetail() {
    const slug =
      new URLSearchParams(location.search).get("slug") ||
      state.compare[0] ||
      data.products[0].slug;
    const p = productBySlug(slug);
    const mount = $("#product-detail");
    if (!mount) return;
    document.title = `${localName(p)} — ATELIER NOIR`;
    mount.innerHTML = `<div class="detail-grid"><div class="fabric-viewer" id="fabric-viewer"><img src="${p.image}" alt="${localName(p)} 3D fabric preview"><div class="viewer-overlay"></div></div><section><p class="eyebrow">${tr("productDetail")} / ${p.badge}</p><h1 class="display">${localName(p)}</h1><p class="lede">${p.story}</p><p><strong>${money(p.price)}</strong> · ${p.fabric} · ${p.origin} · ${formatDigits(p.rating)}★</p><div class="cta-row"><button class="btn" data-action="cart" data-slug="${p.slug}">${tr("addCart")}</button><button class="btn secondary" data-action="compare" data-slug="${p.slug}">${tr("addCompare")}</button><button class="btn ghost" id="zoom-toggle">${tr("fabricZoom")}</button><button class="btn ghost">${tr("arStub")}</button></div><div class="fit-room"><h2>${tr("fitting")}</h2><div class="silhouette"><svg viewBox="0 0 100 180"><path d="M50 18c13 0 20 10 20 22s-7 22-20 22-20-10-20-22S37 18 50 18Z" fill="#0B0B0C"/><path d="M28 70c16-10 28-10 44 0l12 76c-21 18-47 18-68 0l12-76Z" fill="#0B0B0C"/><path class="heat" d="M32 84c12-8 24-8 36 0l5 34c-15 8-31 8-46 0l5-34Z" fill="#C9A46B"/></svg></div><div class="cta-row"><input aria-label="${tr("height")}" placeholder="${tr("height")} cm"><input aria-label="${tr("weight")}" placeholder="${tr("weight")} kg"><input aria-label="${tr("shoulders")}" placeholder="${tr("shoulders")} cm"></div><button class="btn small" id="fit-btn">${tr("calculateFit")}</button></div><div class="trace-card"><h2>${tr("trace")}</h2><div class="trace-path">${p.trace.map((node) => `<div class="trace-node">${node}</div>`).join("")}</div></div></section></div>`;
    $("#zoom-toggle")?.addEventListener("click", () =>
      $("#fabric-viewer").classList.toggle("zoom"),
    );
    $("#fabric-viewer")?.addEventListener("mousemove", (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty(
        "--zoom-x",
        `${((e.clientX - r.left) / r.width) * 100}%`,
      );
      e.currentTarget.style.setProperty(
        "--zoom-y",
        `${((e.clientY - r.top) / r.height) * 100}%`,
      );
    });
    $("#fit-btn")?.addEventListener("click", () =>
      gsap.fromTo(
        ".heat",
        { opacity: 0.1, scale: 0.86 },
        {
          opacity: 0.9,
          scale: 1.08,
          yoyo: true,
          repeat: 3,
          transformOrigin: "center",
          duration: 0.35,
        },
      ),
    );
    bindProductActions(mount);
  }

  function renderLookbook(gender) {
    const mount = $("#lookbook-grid");
    if (!mount) return;
    mount.innerHTML = data.products
      .filter((p) => p.gender === gender)
      .slice(0, 8)
      .map(
        (p) =>
          `<figure class="look"><img src="${p.image}" alt="${localName(p)} lookbook"><figcaption><span>${localName(p)}</span><a href="${productHref(p.slug)}">${tr("viewDetail")}</a></figcaption></figure>`,
      )
      .join("");
  }

  function renderCompare() {
    const mount = $("#compare-mount");
    if (!mount) return;
    const products = state.compare.slice(0, 4).map(productBySlug);
    const rows = [
      ["price", (p) => money(p.price)],
      ["fabric", (p) => p.fabric],
      ["care", (p) => (p.fabric === "silk" ? "Dry clean" : "Cold gentle")],
      ["sustainability", (p) => `${formatDigits(p.sustainability)}/100`],
      ["origin", (p) => p.origin],
      ["rating", (p) => `${formatDigits(p.rating)}★`],
      ["fit", (p) => p.fit],
    ];
    mount.innerHTML = `<div class="compare-drop">${tr("compareHint")}<div class="cta-row"><a class="btn small" href="shop/">${tr("shopAll")}</a><button class="btn small secondary" id="clear-compare">Clear</button></div></div><div class="compare-table"><table><thead><tr><th>${tr("compare")}</th>${products.map((p) => `<th>${localName(p)}<br><button class="chip" data-remove-compare="${p.slug}">×</button></th>`).join("")}</tr></thead><tbody>${rows
      .map(([label, val]) => {
        const vals = products.map(val);
        const diff = new Set(vals).size > 1;
        return `<tr><th>${label}</th>${vals.map((v) => `<td class="${diff ? "diff" : ""}">${v}</td>`).join("")}</tr>`;
      })
      .join("")}</tbody></table></div>`;
    $("#clear-compare")?.addEventListener("click", () => {
      state.compare = [];
      persist("compare");
      renderCompare();
      updateCounts();
    });
    $$("[data-remove-compare]").forEach((btn) =>
      btn.addEventListener("click", () => {
        state.compare = state.compare.filter(
          (s) => s !== btn.dataset.removeCompare,
        );
        persist("compare");
        renderCompare();
        updateCounts();
      }),
    );
  }

  function renderStylist() {
    const mount = $("#stylist-mount");
    if (!mount) return;
    const questions = [
      {
        key: "body",
        q: {
          en: "Which silhouette feels most like you?",
          fa: "کدام سیلوئت به شما نزدیک‌تر است؟",
        },
        a: ["Tailored", "Fluid", "Oversized", "Sculpted"],
        bg: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=80",
      },
      {
        key: "occasion",
        q: {
          en: "What room are you dressing for?",
          fa: "برای چه فضایی لباس می‌پوشید؟",
        },
        a: ["Gallery dinner", "Work ritual", "Rain weekend", "Noir night"],
        bg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=80",
      },
      {
        key: "mood",
        q: { en: "Choose a color mood.", fa: "حال‌وهوای رنگ را انتخاب کنید." },
        a: ["Noir", "Ivory", "Champagne", "Blush"],
        bg: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=80",
      },
      {
        key: "budget",
        q: { en: "Your capsule budget?", fa: "بودجه کپسول شما؟" },
        a: ["Under 500", "500–1000", "1000–2000", "Noir unlimited"],
        bg: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1800&q=80",
      },
      {
        key: "era",
        q: { en: "Favorite fashion era?", fa: "دوره مد محبوب شما؟" },
        a: ["30s cinema", "70s ease", "90s minimal", "Future heirloom"],
        bg: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80",
      },
      {
        key: "texture",
        q: { en: "Pick a texture.", fa: "یک بافت انتخاب کنید." },
        a: ["Silk", "Wool", "Linen", "Leather"],
        bg: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1800&q=80",
      },
      {
        key: "climate",
        q: { en: "Climate around you?", fa: "آب‌وهوای اطراف شما؟" },
        a: ["Dry heat", "Soft cold", "Humid city", "Four seasons"],
        bg: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1800&q=80",
      },
    ];
    let index = 0;
    state.quiz = [];
    const draw = () => {
      const q = questions[index];
      if (!q) return revealCapsule();
      mount.innerHTML = `<div class="quiz-shell"><div class="quiz-bg" style="background-image:url('${q.bg}')"></div><div class="quiz-card"><div class="quiz-progress"><span style="width:${(index / questions.length) * 100}%"></span></div><p class="eyebrow">${tr("stylistTitle")} · ${formatDigits(index + 1)}/${formatDigits(questions.length)}</p><h1 class="display" style="font-size:clamp(40px,7vw,90px)">${q.q[state.locale]}</h1><div class="quiz-options">${q.a.map((ans) => `<button class="btn ghost" data-answer="${ans}">${ans}</button>`).join("")}</div></div></div>`;
      $$("[data-answer]").forEach((btn) =>
        btn.addEventListener("click", () => {
          state.quiz.push({ key: q.key, value: btn.dataset.answer });
          index++;
          draw();
        }),
      );
    };
    const revealCapsule = () => {
      const picks = data.products
        .filter((p) =>
          (state.quiz.find((x) => x.key === "texture")?.value || "")
            .toLowerCase()
            .includes(p.fabric),
        )
        .concat(data.products)
        .slice(0, 6);
      mount.innerHTML = `<section class="section"><div class="container"><p class="eyebrow">${tr("reveal")}</p><h1 class="display">${isFa() ? "کمد شخصی شما" : "Your private capsule"}</h1><div class="closet-reveal">${picks.map(productCard).join("")}</div><button class="btn" id="quiz-reset">${tr("startOver")}</button></div></section>`;
      bindProductActions(mount);
      $("#quiz-reset").addEventListener("click", () => {
        index = 0;
        state.quiz = [];
        draw();
      });
      gsap.from(".closet-reveal .product-card", {
        y: 70,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
      });
    };
    draw();
  }

  function renderJournal() {
    const mount = $("#journal-grid");
    if (!mount) return;
    mount.innerHTML = data.journal
      .map(
        (a, i) =>
          `<article class="article-card ${a.tall ? "tall" : ""}"><img src="${a.image}" alt="${a.title[state.locale]} cover"><span class="hotspot" style="left:${22 + i * 9}%;top:${26 + i * 7}%"></span><div class="article-body"><p class="eyebrow">${a.tag} · ${formatDigits(a.minutes)} min</p><h2>${a.title[state.locale]}</h2><p>${isFa() ? "روایت، خریدنی و با تصویرسازی پارالاکس." : "A shoppable editorial note with parallax cover behavior."}</p></div></article>`,
      )
      .join("");
    addReadingProgress();
  }

  function addReadingProgress() {
    if ($("#progress-ring")) return;
    const svg = document.createElement("svg");
    svg.id = "progress-ring";
    svg.className = "progress-ring";
    svg.setAttribute("viewBox", "0 0 48 48");
    svg.innerHTML =
      '<circle cx="24" cy="24" r="20"></circle><circle class="bar" cx="24" cy="24" r="20"></circle>';
    document.body.append(svg);
    document.addEventListener(
      "scroll",
      () => {
        const max = document.documentElement.scrollHeight - innerHeight;
        $(".progress-ring .bar").style.strokeDashoffset =
          126 - (scrollY / max) * 126;
      },
      { passive: true },
    );
  }

  function renderAtelier() {
    const mount = $("#timeline");
    if (!mount) return;
    const events = [
      ["2018", "A quiet tailoring study begins between Tehran and Paris."],
      ["2020", "The first wool coat is cut from regenerative cloth."],
      ["2023", "Traceability passports are added to every atelier object."],
      ["2026", "The marble corridor becomes a digital boutique."],
    ];
    mount.innerHTML = events
      .map(
        ([year, text]) =>
          `<article class="timeline-card"><div class="timeline-year">${formatDigits(year)}</div><p class="lede">${isFa() ? translateTimeline(text) : text}</p></article>`,
      )
      .join("");
  }
  function translateTimeline(text) {
    return {
      "A quiet tailoring study begins between Tehran and Paris.":
        "مطالعه‌ای آرام در دوخت، میان تهران و پاریس آغاز می‌شود.",
      "The first wool coat is cut from regenerative cloth.":
        "نخستین پالتوی پشمی از پارچه احیاگر برش می‌خورد.",
      "Traceability passports are added to every atelier object.":
        "گذرنامه ردیابی به هر شیء آتلیه اضافه می‌شود.",
      "The marble corridor becomes a digital boutique.":
        "راهروی مرمر به بوتیکی دیجیتال تبدیل می‌شود.",
    }[text];
  }

  function renderAccount() {
    const mount = $("#account-mount");
    if (!mount) return;
    const wished = state.wishlist.map(productBySlug);
    mount.innerHTML = `<div class="account-grid"><aside class="panel"><h2>${tr("loyalty")}</h2><div class="badges"><span class="badge">Bronze</span><span class="badge">Silver</span><span class="badge">Gold</span><span class="badge">Noir</span></div><p class="lede">${isFa() ? "نشان نوآر با خرید بعدی باز می‌شود." : "Noir badge unlocks with your next order."}</p></aside><section><h2>${tr("moodboard")}</h2><div class="product-grid">${wished.length ? wished.map(productCard).join("") : `<p class="lede">${tr("empty")}</p>`}</div><button class="btn secondary">${tr("exportPdf")}</button></section></div>`;
    bindProductActions(mount);
  }

  function renderCheckout() {
    const mount = $("#checkout-mount");
    if (!mount) return;
    const items = state.cart.map(productBySlug);
    mount.innerHTML = `<div class="checkout-grid"><aside class="panel"><h2>${tr("cart")}</h2>${items.length ? items.map((p) => `<p>${localName(p)} — ${money(p.price)}</p>`).join("") : `<p>${tr("empty")}</p>`}<strong>${money(items.reduce((s, p) => s + p.price, 0))}</strong></aside><section class="checkout-steps">${["Identity", "Address", "Payment", "Review"].map((s, i) => `<div class="step ${i === 0 ? "active" : ""}"><h3>${s}</h3><input placeholder="${s}"></div>`).join("")}<button class="btn" id="step-next">${tr("next")}</button></section></div>`;
    let i = 0;
    $("#step-next")?.addEventListener("click", () => {
      const steps = $$(".step");
      steps[i]?.classList.remove("active");
      i = Math.min(i + 1, steps.length - 1);
      steps[i]?.classList.add("active");
    });
  }

  function renderContact() {
    const mount = $("#contact-mount");
    if (!mount) return;
    mount.innerHTML = `<div class="contact-grid"><section><p class="eyebrow">Tehran · Paris · Online</p><h1 class="display">${tr("contactTitle")}</h1><p class="lede">${isFa() ? "برای قرار خصوصی، سایزبندی یا هدیه با کانسیرج صحبت کنید." : "For private appointments, sizing, or gifts, speak with the concierge."}</p><form class="panel"><input placeholder="Email"><textarea placeholder="Message"></textarea><button class="btn" type="button">${tr("send")}</button></form></section><div class="map" role="img" aria-label="Interactive boutique map stub"></div></div>`;
  }
})();
