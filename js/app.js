let co = docume;
const state = {
  products: [],
  filtered: [],
  page: 1,
  pageSize: 9,
  view: "grid",
  favorites: new Set(
    JSON.parse(localStorage.getItem("dreamSleepFavorites") || "[]"),
  ),
  compare: new Set(
    JSON.parse(localStorage.getItem("dreamSleepCompare") || "[]"),
  ),
  cart: JSON.parse(localStorage.getItem("dreamSleepCart") || "[]"),
  quizStep: 0,
  quizAnswers: {},
};
const toman = new Intl.NumberFormat("fa-IR");
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const products = [
  {
    id: "m1",
    name: "تشک امپریال مموری کول",
    category: "تشک",
    price: 62500000,
    rating: 4.9,
    newness: 9,
    sleep: ["side", "mixed"],
    firmness: "medium",
    cooling: "cool",
    material: "memory",
    allergy: true,
    height: 32,
    features: ["orthopedic", "zeroMotion", "hotel"],
    desc: "مموری فوم ژلی با لایه تهویه عمیق برای خواب‌های گرم و حساس.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "m2",
    name: "تشک ارتوپدیک پاکت اسپرینگ",
    category: "تشک",
    price: 48800000,
    rating: 4.8,
    newness: 7,
    sleep: ["back", "mixed"],
    firmness: "firm",
    cooling: "balanced",
    material: "spring",
    allergy: true,
    height: 30,
    features: ["orthopedic", "zeroMotion"],
    desc: "فنر پاکتی مستقل با پشتیبانی قوی ستون فقرات و کاهش انتقال حرکت.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "m3",
    name: "تشک لاتکس نچرال گرین",
    category: "تشک",
    price: 73500000,
    rating: 5,
    newness: 10,
    sleep: ["side", "back"],
    firmness: "medium",
    cooling: "cool",
    material: "latex",
    allergy: true,
    height: 28,
    features: ["eco", "orthopedic", "zeroMotion"],
    desc: "لاتکس طبیعی با بازگشت‌پذیری عالی، ضد حساسیت و دوستدار محیط زیست.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "q1",
    name: "لحاف هتلی ابرنرم چهار فصل",
    category: "لحاف",
    price: 12800000,
    rating: 4.7,
    newness: 6,
    sleep: ["mixed"],
    firmness: "soft",
    cooling: "balanced",
    material: "cotton",
    allergy: true,
    height: 8,
    features: ["hotel"],
    desc: "دوخت هتلی، وزن سبک و گرمای متعادل برای تمام فصل‌ها.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "q2",
    name: "لحاف بامبو ترمو اسمارت",
    category: "لحاف",
    price: 17600000,
    rating: 4.9,
    newness: 9,
    sleep: ["mixed", "side"],
    firmness: "soft",
    cooling: "cool",
    material: "bamboo",
    allergy: true,
    height: 7,
    features: ["eco", "hotel"],
    desc: "الیاف بامبو با مدیریت رطوبت برای کسانی که شب‌ها گرمشان می‌شود.",
    image:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p1",
    name: "بالش مموری موجی گردن",
    category: "بالش",
    price: 6900000,
    rating: 4.8,
    newness: 8,
    sleep: ["side", "back"],
    firmness: "medium",
    cooling: "balanced",
    material: "memory",
    allergy: true,
    height: 12,
    features: ["orthopedic"],
    desc: "طراحی ارگونومیک برای کاهش فشار گردن و شانه.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p2",
    name: "بالش لاتکس پرشین ایر",
    category: "بالش",
    price: 8700000,
    rating: 4.7,
    newness: 7,
    sleep: ["stomach", "back"],
    firmness: "soft",
    cooling: "cool",
    material: "latex",
    allergy: true,
    height: 10,
    features: ["eco", "orthopedic"],
    desc: "تهویه بالا و ارتفاع کنترل‌شده برای خواب راحت‌تر.",
    image:
      "https://images.unsplash.com/photo-1629949009765-17fc062f7bfb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s1",
    name: "ست ملحفه ساتن پنبه لوکس",
    category: "ملحفه",
    price: 9400000,
    rating: 4.6,
    newness: 5,
    sleep: ["mixed"],
    firmness: "soft",
    cooling: "warm",
    material: "cotton",
    allergy: false,
    height: 3,
    features: ["hotel"],
    desc: "بافت درخشان، لمس نرم و مناسب اتاق‌های کلاسیک.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s2",
    name: "ست ملحفه کتان بامبو مینیمال",
    category: "ملحفه",
    price: 11200000,
    rating: 4.9,
    newness: 10,
    sleep: ["mixed"],
    firmness: "soft",
    cooling: "cool",
    material: "bamboo",
    allergy: true,
    height: 2,
    features: ["eco"],
    desc: "تنفس‌پذیر، لطیف و مناسب دکورهای مدرن و روشن.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "m4",
    name: "تشک رویال هتل پلاس",
    category: "تشک",
    price: 58000000,
    rating: 4.8,
    newness: 6,
    sleep: ["back", "stomach"],
    firmness: "firm",
    cooling: "warm",
    material: "spring",
    allergy: false,
    height: 34,
    features: ["hotel", "orthopedic"],
    desc: "حس تخت هتل پنج ستاره با تاپر نرم و هسته حمایتی مقاوم.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "m5",
    name: "تشک کودک ضد حساسیت رویا",
    category: "تشک",
    price: 18400000,
    rating: 4.9,
    newness: 8,
    sleep: ["mixed"],
    firmness: "medium",
    cooling: "balanced",
    material: "cotton",
    allergy: true,
    height: 18,
    features: ["eco", "orthopedic"],
    desc: "ارتفاع ایمن، رویه قابل تنفس و متریال مناسب پوست حساس کودک.",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "q3",
    name: "پتو وزن‌دار آرامش عمیق",
    category: "پتو",
    price: 15300000,
    rating: 4.7,
    newness: 9,
    sleep: ["back", "mixed"],
    firmness: "medium",
    cooling: "warm",
    material: "cotton",
    allergy: true,
    height: 5,
    features: ["zeroMotion"],
    desc: "فشار آرام و یکنواخت برای کاهش بی‌قراری و افزایش حس امنیت هنگام خواب.",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
  },
];
const quiz = [
  {
    key: "sleep",
    title: "بیشتر در چه حالتی می‌خوابید؟",
    options: [
      ["side", "به پهلو"],
      ["back", "طاق‌باز"],
      ["stomach", "روی شکم"],
      ["mixed", "ترکیبی"],
    ],
  },
  {
    key: "temp",
    title: "دمای بدن شما در خواب چطور است؟",
    options: [
      ["cool", "زود گرمم می‌شود"],
      ["warm", "معمولاً سردم است"],
      ["balanced", "متعادل هستم"],
    ],
  },
  {
    key: "feel",
    title: "چه حسی از سطح خواب دوست دارید؟",
    options: [
      ["soft", "نرم و ابری"],
      ["medium", "متعادل"],
      ["firm", "سفت و حمایتی"],
    ],
  },
];
function persist() {
  localStorage.setItem(
    "dreamSleepFavorites",
    JSON.stringify([...state.favorites]),
  );
  localStorage.setItem("dreamSleepCompare", JSON.stringify([...state.compare]));
  localStorage.setItem("dreamSleepCart", JSON.stringify(state.cart));
}
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}
function init() {
  state.products = products;
  populateCategories();
  bindEvents();
  applyFilters();
  renderQuiz();
  updateCounters();
  renderCompare();
  initGsap();
}
function populateCategories() {
  const cats = [...new Set(products.map((p) => p.category))];
  $("#category-filter").insertAdjacentHTML(
    "beforeend",
    cats.map((c) => `<option value="${c}">${c}</option>`).join(""),
  );
}
function bindEvents() {
  const menu = $("#menu-toggle"),
    list = $("#primary-menu");
  menu.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    menu.classList.toggle("active", open);
    menu.setAttribute("aria-expanded", open);
  });
  $$("#primary-menu a").forEach((a) =>
    a.addEventListener("click", () => {
      list.classList.remove("open");
      menu.classList.remove("active");
      menu.setAttribute("aria-expanded", "false");
    }),
  );
  window.addEventListener("scroll", () =>
    $("#site-header").classList.toggle("scrolled", window.scrollY > 30),
  );
  document.addEventListener("mousemove", (e) => {
    const g = $("#cursor-glow");
    if (g) {
      g.style.left = e.clientX + "px";
      g.style.top = e.clientY + "px";
    }
  });
  [
    "search-input",
    "category-filter",
    "sleep-filter",
    "firmness-filter",
    "cooling-filter",
    "material-filter",
    "allergy-filter",
    "height-filter",
    "sort-filter",
    "price-filter",
  ].forEach((id) =>
    $("#" + id).addEventListener("input", () => {
      state.page = 1;
      applyFilters();
    }),
  );
  $$(".feature-filter").forEach((c) =>
    c.addEventListener("change", () => {
      state.page = 1;
      applyFilters();
    }),
  );
  $("#price-filter").addEventListener(
    "input",
    (e) =>
      ($("#price-value").textContent =
        toman.format(+e.target.value) + " تومان"),
  );
  $("#reset-filters").addEventListener("click", resetFilters);
  $("#search-focus").addEventListener("click", () =>
    $("#search-input").focus(),
  );
  $$(".view-button").forEach((b) =>
    b.addEventListener("click", () => {
      state.view = b.dataset.view;
      $$(".view-button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      renderProducts();
    }),
  );
  $("#products-grid").addEventListener("click", productAction);
  $("#cart-open").addEventListener("click", () => openDrawer("cart"));
  $("#favorites-open").addEventListener("click", () => openDrawer("favorites"));
  $("#drawer-close").addEventListener("click", closeDrawer);
  $("#side-drawer").addEventListener("click", (e) => {
    if (e.target.id === "side-drawer") closeDrawer();
  });
  $("#drawer-content").addEventListener("click", drawerAction);
  $("#clear-compare").addEventListener("click", () => {
    state.compare.clear();
    persist();
    updateCounters();
    renderProducts();
    renderCompare();
  });
  $("#climate-range").addEventListener("input", updateClimate);
  $$("[data-pressure]").forEach((b) =>
    b.addEventListener("click", () => {
      $("#pressure-map").className = "pressure-map " + b.dataset.pressure;
    }),
  );
  $$("[data-color]").forEach((b) =>
    b.addEventListener(
      "click",
      () =>
        ($("#room-preview").style.background =
          `linear-gradient(160deg, ${b.dataset.color}, #fff4e8 58%)`),
    ),
  );
  $("#newsletter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    toast("عضویت شما ثبت شد؛ به دنیای خواب بهتر خوش آمدید.");
    e.target.reset();
  });
}
function getFilters() {
  return {
    q: $("#search-input").value.trim().toLowerCase(),
    cat: $("#category-filter").value,
    sleep: $("#sleep-filter").value,
    firm: $("#firmness-filter").value,
    cooling: $("#cooling-filter").value,
    mat: $("#material-filter").value,
    allergy: $("#allergy-filter").value,
    height: $("#height-filter").value,
    sort: $("#sort-filter").value,
    price: +$("#price-filter").value,
    features: $$(".feature-filter:checked").map((c) => c.value),
  };
}
function applyFilters() {
  const f = getFilters();
  let arr = products.filter(
    (p) =>
      (!f.q || (p.name + p.desc + p.category).toLowerCase().includes(f.q)) &&
      (f.cat === "all" || p.category === f.cat) &&
      (f.sleep === "all" || p.sleep.includes(f.sleep)) &&
      (f.firm === "all" || p.firmness === f.firm) &&
      (f.cooling === "all" || p.cooling === f.cooling) &&
      (f.mat === "all" || p.material === f.mat) &&
      (f.allergy === "all" || p.allergy) &&
      p.price <= f.price &&
      heightMatch(p.height, f.height) &&
      f.features.every((x) => p.features.includes(x)),
  );
  arr.sort((a, b) =>
    f.sort === "price-asc"
      ? a.price - b.price
      : f.sort === "price-desc"
        ? b.price - a.price
        : f.sort === "rating-desc"
          ? b.rating - a.rating
          : f.sort === "newest"
            ? b.newness - a.newness
            : b.rating + b.newness / 10 - (a.rating + a.newness / 10),
  );
  state.filtered = arr;
  renderProducts();
}
function heightMatch(h, v) {
  return (
    v === "all" ||
    (v === "low" && h < 20) ||
    (v === "mid" && h >= 20 && h <= 30) ||
    (v === "high" && h > 30)
  );
}
function resetFilters() {
  ["search-input"].forEach((id) => ($("#" + id).value = ""));
  [
    "category-filter",
    "sleep-filter",
    "firmness-filter",
    "cooling-filter",
    "material-filter",
    "allergy-filter",
    "height-filter",
  ].forEach((id) => ($("#" + id).value = "all"));
  $("#sort-filter").value = "featured";
  $("#price-filter").value = 80000000;
  $("#price-value").textContent = "۸۰,۰۰۰,۰۰۰ تومان";
  $$(".feature-filter").forEach((c) => (c.checked = false));
  state.page = 1;
  applyFilters();
}
function renderProducts() {
  const grid = $("#products-grid");
  grid.classList.toggle("list-view", state.view === "list");
  const total = state.filtered.length;
  $("#results-count").textContent = `${toman.format(total)} محصول پیدا شد`;
  const pages = Math.max(1, Math.ceil(total / state.pageSize));
  if (state.page > pages) state.page = pages;
  const start = (state.page - 1) * state.pageSize;
  const items = state.filtered.slice(start, start + state.pageSize);
  grid.innerHTML = items.length
    ? items.map(card).join("")
    : `<div class="empty-state">محصولی با این فیلترها پیدا نشد. فیلترها را کمی تغییر دهید.</div>`;
  renderPagination(pages);
  if (window.gsap)
    gsap.from(".product-card", {
      y: 22,
      opacity: 0,
      duration: 0.45,
      stagger: 0.04,
      ease: "power2.out",
    });
}
function card(p) {
  const fav = state.favorites.has(p.id),
    comp = state.compare.has(p.id);
  return `<article class="product-card"><div class="product-media"><img src="${p.image}" alt="${p.name}"><span class="product-badge">${p.category}</span><div class="product-actions"><button class="${fav ? "active" : ""}" data-action="fav" data-id="${p.id}" aria-label="علاقه‌مندی"><i class="fa-${fav ? "solid" : "regular"} fa-heart"></i></button><button class="${comp ? "active" : ""}" data-action="compare" data-id="${p.id}" aria-label="مقایسه"><i class="fa-solid fa-scale-balanced"></i></button></div></div><div class="product-body"><div class="product-meta"><span><i class="fa-solid fa-star"></i> ${p.rating}</span><span>${label(p.firmness)} | ${label(p.cooling)}</span></div><h3>${p.name}</h3><p>${p.desc}</p><div class="tags">${p.features
    .slice(0, 3)
    .map((x) => `<span>${label(x)}</span>`)
    .join(
      "",
    )}</div><div class="price-row"><strong class="price">${toman.format(p.price)} تومان</strong><button class="add-cart" data-action="cart" data-id="${p.id}">افزودن</button></div></div></article>`;
}
function renderPagination(pages) {
  $("#pagination").innerHTML = Array.from(
    { length: pages },
    (_, i) =>
      `<button class="${state.page === i + 1 ? "active" : ""}" data-page="${i + 1}">${toman.format(i + 1)}</button>`,
  ).join("");
  $$("#pagination button").forEach(
    (b) =>
      (b.onclick = () => {
        state.page = +b.dataset.page;
        renderProducts();
      }),
  );
}
function productAction(e) {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const id = btn.dataset.id,
    action = btn.dataset.action;
  if (action === "fav") {
    state.favorites.has(id)
      ? state.favorites.delete(id)
      : state.favorites.add(id);
    toast(
      state.favorites.has(id)
        ? "به علاقه‌مندی اضافه شد"
        : "از علاقه‌مندی حذف شد",
    );
  }
  if (action === "compare") {
    if (state.compare.has(id)) state.compare.delete(id);
    else if (state.compare.size < 3) state.compare.add(id);
    else toast("حداکثر ۳ محصول را می‌توانید مقایسه کنید");
    renderCompare();
  }
  if (action === "cart") {
    const row = state.cart.find((x) => x.id === id);
    row ? row.qty++ : state.cart.push({ id, qty: 1 });
    toast("به سبد خرید اضافه شد");
  }
  persist();
  updateCounters();
  renderProducts();
}
function updateCounters() {
  $("#fav-count").textContent = state.favorites.size;
  $("#cart-count").textContent = state.cart.reduce((s, x) => s + x.qty, 0);
}
function openDrawer(type) {
  const drawer = $("#side-drawer");
  $("#drawer-title").textContent =
    type === "cart" ? "سبد خرید" : "علاقه‌مندی‌ها";
  renderDrawer(type);
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}
function closeDrawer() {
  $("#side-drawer").classList.remove("open");
  $("#side-drawer").setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}
function renderDrawer(type) {
  let html = "";
  if (type === "cart") {
    const sum = state.cart.reduce(
      (s, x) => s + (products.find((p) => p.id === x.id)?.price || 0) * x.qty,
      0,
    );
    html =
      state.cart
        .map((x) =>
          drawerItem(
            products.find((p) => p.id === x.id),
            x.qty,
            "cart",
          ),
        )
        .join("") || `<p class="empty-state">سبد خرید خالی است.</p>`;
    html += state.cart.length
      ? `<h3>جمع کل: ${toman.format(sum)} تومان</h3><button class="primary-button" style="width:100%">ثبت سفارش مشاوره‌ای</button>`
      : "";
  } else {
    html =
      [...state.favorites]
        .map((id) =>
          drawerItem(
            products.find((p) => p.id === id),
            1,
            "fav",
          ),
        )
        .join("") || `<p class="empty-state">هنوز محصولی ذخیره نکرده‌اید.</p>`;
  }
  $("#drawer-content").innerHTML = html;
}
function drawerItem(p, qty, type) {
  if (!p) return "";
  return `<div class="drawer-item"><img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><small>${toman.format(p.price)} تومان ${type === "cart" ? `× ${qty}` : ""}</small></div><button data-remove="${p.id}" data-type="${type}"><i class="fa-solid fa-trash"></i></button></div>`;
}
function drawerAction(e) {
  const b = e.target.closest("button[data-remove]");
  if (!b) return;
  if (b.dataset.type === "cart")
    state.cart = state.cart.filter((x) => x.id !== b.dataset.remove);
  else state.favorites.delete(b.dataset.remove);
  persist();
  updateCounters();
  renderProducts();
  openDrawer(b.dataset.type === "cart" ? "cart" : "favorites");
}
function renderCompare() {
  const ids = [...state.compare];
  const wrap = $("#compare-wrap");
  if (!ids.length) {
    wrap.innerHTML = "<p>برای مقایسه، روی دکمه «مقایسه» محصولات کلیک کنید.</p>";
    return;
  }
  const rows = ids
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);
  wrap.innerHTML = `<table class="compare-table"><thead><tr><th>ویژگی</th>${rows.map((p) => `<th>${p.name}</th>`).join("")}</tr></thead><tbody><tr><td>قیمت</td>${rows.map((p) => `<td>${toman.format(p.price)}</td>`).join("")}</tr><tr><td>امتیاز</td>${rows.map((p) => `<td>${p.rating}</td>`).join("")}</tr><tr><td>سفتی</td>${rows.map((p) => `<td>${label(p.firmness)}</td>`).join("")}</tr><tr><td>دما</td>${rows.map((p) => `<td>${label(p.cooling)}</td>`).join("")}</tr><tr><td>متریال</td>${rows.map((p) => `<td>${label(p.material)}</td>`).join("")}</tr></tbody></table>`;
}
function renderQuiz() {
  const box = $("#quiz-content"),
    prog = $("#quiz-progress");
  if (state.quizStep >= quiz.length) {
    const a = state.quizAnswers;
    const matches = products
      .filter(
        (p) =>
          (!a.sleep || p.sleep.includes(a.sleep)) &&
          (!a.temp || p.cooling === a.temp || p.cooling === "balanced") &&
          (!a.feel || p.firmness === a.feel),
      )
      .slice(0, 3);
    prog.style.width = "100%";
    box.innerHTML = `<div class="quiz-result"><h3>پروفایل خواب شما آماده است</h3><p>سفتی پیشنهادی: <b>${label(a.feel || "medium")}</b>، دمای مناسب: <b>${label(a.temp || "balanced")}</b></p><div class="tags">${matches.map((p) => `<span>${p.name}</span>`).join("")}</div><button class="primary-button" id="quiz-reset">شروع دوباره</button></div>`;
    $("#quiz-reset").onclick = () => {
      state.quizStep = 0;
      state.quizAnswers = {};
      renderQuiz();
    };
    return;
  }
  const q = quiz[state.quizStep];
  prog.style.width = (state.quizStep / quiz.length) * 100 + "%";
  box.innerHTML = `<h3>${q.title}</h3><div class="quiz-options">${q.options.map((o) => `<button data-answer="${o[0]}">${o[1]}</button>`).join("")}</div>`;
  $$("[data-answer]").forEach(
    (b) =>
      (b.onclick = () => {
        state.quizAnswers[q.key] = b.dataset.answer;
        state.quizStep++;
        renderQuiz();
      }),
  );
}
function updateClimate(e) {
  const v = +e.target.value;
  const text =
    v >= 25
      ? "الیاف بامبو، لاتکس یا ژل خنک‌کننده"
      : v <= 19
        ? "لحاف گرم پنبه‌ای و تاپر نرم"
        : "الیاف چهارفصل و تنفس‌پذیر";
  $("#climate-result").textContent = `برای ${toman.format(v)} درجه: ${text}`;
}
function label(x) {
  return (
    {
      soft: "نرم",
      medium: "متعادل",
      firm: "سفت",
      cool: "خنک",
      warm: "گرم",
      balanced: "چهارفصل",
      memory: "مموری فوم",
      latex: "لاتکس",
      spring: "فنر پاکتی",
      cotton: "پنبه",
      bamboo: "بامبو",
      orthopedic: "طبی",
      zeroMotion: "بدون انتقال حرکت",
      hotel: "هتلی",
      eco: "اکو",
    }[x] || x
  );
}
function initGsap() {
  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".brand-mark", {
    rotate: -10,
    scale: 0.82,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
  });
  gsap.from(".navbar", {
    y: -35,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
  });
  gsap.from(".hero-content > *", {
    y: 32,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
  });
  gsap.from(".hero-visual", {
    scale: 0.92,
    opacity: 0,
    duration: 0.9,
    ease: "back.out(1.4)",
  });
  gsap.to(".hero-orb-one", {
    y: 38,
    x: -24,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  gsap.to(".hero-orb-two", {
    y: -32,
    x: 28,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  $$(".reveal-up").forEach((el) =>
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 86%" },
      y: 42,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    }),
  );
  $$(".reveal-scale").forEach((el) =>
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 85%" },
      scale: 0.94,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    }),
  );
}
document.addEventListener("DOMContentLoaded", init);
l