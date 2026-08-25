// mobile menu
const burger = document.getElementById("burgerBtn");
const menu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");
burger.addEventListener("click", () => {
  menu.classList.add("open");
  burger.setAttribute("aria-expanded", "true");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }),
);

// theme toggle
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
function setTheme(t) {
  root.setAttribute("data-theme", t);
  localStorage.setItem("sb7-theme", t);
}
const savedTheme =
  localStorage.getItem("sb7-theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
setTheme(savedTheme);
themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(current);
});

// callback popover
const callbackBtn = document.getElementById("callbackBtn");
const callbackPop = document.getElementById("callbackPop");
const callbackCopy = document.getElementById("callbackCopy");
callbackBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = callbackPop.classList.toggle("open");
  callbackBtn.setAttribute("aria-expanded", isOpen);
});
document.addEventListener("click", (e) => {
  if (!callbackPop.contains(e.target) && e.target !== callbackBtn) {
    callbackPop.classList.remove("open");
    callbackBtn.setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    callbackPop.classList.remove("open");
    callbackBtn.setAttribute("aria-expanded", "false");
  }
});
callbackCopy.addEventListener("click", () => {
  navigator.clipboard.writeText("+998-99-046-76-96").then(() => {
    const original = callbackCopy.textContent;
    callbackCopy.textContent =
      document.documentElement.lang === "uz" ? "Nusxalandi ✓" : "Скопировано ✓";
    setTimeout(() => {
      callbackCopy.textContent = original;
    }, 1800);
  });
});

// language toggle
const langNodes = document.querySelectorAll("[data-ru]");
const langRuBtn = document.getElementById("langRu");
const langUzBtn = document.getElementById("langUz");
function setLang(lang) {
  langNodes.forEach((el) => {
    el.textContent = el.getAttribute("data-" + lang);
  });
  document.documentElement.lang = lang;
  langRuBtn.classList.toggle("active", lang === "ru");
  langUzBtn.classList.toggle("active", lang === "uz");
  localStorage.setItem("sb7-lang", lang);
}
langRuBtn.addEventListener("click", () => setLang("ru"));
langUzBtn.addEventListener("click", () => setLang("uz"));
setLang(localStorage.getItem("sb7-lang") || "ru");

// logout helper
function sb7Logout() {
  sessionStorage.removeItem("sb7-authed");
  window.location.href = "login.html";
}

// ============================================================
// ========== ДАННЫЕ ТОВАРОВ (20 товаров) =====================
// ============================================================
const productsData = [
  // === ЦЕМЕНТ И СМЕСИ (4 товара) ===
  {
    id: 1,
    category: "cement",
    name_ru: "Цемент М500",
    name_uz: "Sement M500",
    desc_ru: "Портландцемент М500 для ответственных конструкций",
    desc_uz: "Mas'uliyatli konstruksiyalar uchun Portlandsement M500",
    price: 52000,
    unit_ru: "мешок 50 кг",
    unit_uz: "qop 50 kg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkRjzNORdNMp3zdEIDMtD9HofSIqE6hrlpu84oRcUX8M9Qn4Or3uEqpiM&s=10",
    stock: true,
    specs: {
      strength: "М500",
      weight: "50 кг",
      type_ru: "Портландцемент",
      type_uz: "Portlandsement",
    },
  },
  {
    id: 2,
    category: "cement",
    name_ru: "Цемент М400",
    name_uz: "Sement M400",
    desc_ru: "Портландцемент М400 для общестроительных работ",
    desc_uz: "Umumqurilish ishlari uchun Portlandsement M400",
    price: 48000,
    unit_ru: "мешок 50 кг",
    unit_uz: "qop 50 kg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACUdDlaJWuhlBOfIzrd_PL9GvcooKlOSmVyEUfG0CvJn2JKk5cjB5jdw&s=10",
    stock: true,
    specs: {
      strength: "М400",
      weight: "50 кг",
      type_ru: "Портландцемент",
      type_uz: "Portlandsement",
    },
  },
  {
    id: 13,
    category: "cement",
    name_ru: "Штукатурная смесь",
    name_uz: "Shtukaturka aralashmasi",
    desc_ru: "Сухая штукатурная смесь для внутренних работ",
    desc_uz: "Ichki ishlar uchun quruq shtukaturka aralashmasi",
    price: 32000,
    unit_ru: "мешок 30 кг",
    unit_uz: "qop 30 kg",
    image: "https://stroyzone.com/upload/iblock/efc/70184625402.jpg",
    stock: true,
    specs: { type_ru: "Гипсовая", type_uz: "Gipsli", weight: "30 кг" },
  },
  {
    id: 14,
    category: "cement",
    name_ru: "Наливной пол",
    name_uz: "Quyma pol",
    desc_ru: "Самовыравнивающаяся смесь для пола",
    desc_uz: "Pol uchun o'z-o'zidan tekislanadigan aralashma",
    price: 45000,
    unit_ru: "мешок 25 кг",
    unit_uz: "qop 25 kg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDDtLSEgJr6rVXNlKObThqVsSo4mnS3QsQ75HjAp5QA&s=10",
    stock: true,
    specs: { type_ru: "Цементная", type_uz: "Sementli", weight: "25 кг" },
  },

  // === КИРПИЧ И БЛОКИ (4 товара) ===
  {
    id: 3,
    category: "brick",
    name_ru: "Кирпич керамический",
    name_uz: "Keramik g'isht",
    desc_ru: "Полнотелый керамический кирпич М150",
    desc_uz: "To'liq tanaqli keramik g'isht M150",
    price: 1100,
    unit_ru: "за штуку",
    unit_uz: "dona uchun",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XjcsYt7yHRU-sXCeFQ_m9nrriBI19nCK7M844Q40lw&s=10",
    stock: true,
    specs: {
      strength: "М150",
      size: "250×120×65",
      type_ru: "Керамический",
      type_uz: "Keramik",
    },
  },
  {
    id: 4,
    category: "brick",
    name_ru: "Кирпич силикатный",
    name_uz: "Silikat g'isht",
    desc_ru: "Силикатный кирпич для кладки стен",
    desc_uz: "Devor qurish uchun silikat g'isht",
    price: 950,
    unit_ru: "за штуку",
    unit_uz: "dona uchun",
    image:
      "https://mirkeramiki.com.ua/image/cache/catalog/kirpich-silikat-4-785x558.jpg",
    stock: true,
    specs: {
      strength: "М150",
      size: "250×120×65",
      type_ru: "Силикатный",
      type_uz: "Silikat",
    },
  },
  {
    id: 5,
    category: "brick",
    name_ru: "Блок газобетонный",
    name_uz: "Gazobeton blok",
    desc_ru: "Газобетонный блок D500 для стен",
    desc_uz: "Devor uchun gazobeton blok D500",
    price: 2800,
    unit_ru: "за штуку",
    unit_uz: "dona uchun",
    image:
      "https://frankfurt.apollo.olxcdn.com/v1/files/8hgi9xba68uc1-UZ/image",
    stock: true,
    specs: {
      density: "D500",
      size: "600×300×200",
      type_ru: "Газобетон",
      type_uz: "Gazobeton",
    },
  },
  {
    id: 15,
    category: "brick",
    name_ru: "Керамзитоблок",
    name_uz: "Keramzitblok",
    desc_ru: "Керамзитобетонный блок для перегородок",
    desc_uz: "Bo'linmalar uchun keramzitbeton blok",
    price: 2100,
    unit_ru: "за штуку",
    unit_uz: "dona uchun",
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?w=400&q=80&auto=format&fit=crop",
    stock: true,
    specs: {
      size: "390×190×188",
      type_ru: "Керамзитобетон",
      type_uz: "Keramzitbeton",
    },
  },

  // === МЕТАЛЛОПРОКАТ (3 товара) ===
  {
    id: 6,
    category: "metal",
    name_ru: "Арматура А500С",
    name_uz: "Armatura A500S",
    desc_ru: "Арматура рифленая диаметр 12 мм",
    desc_uz: "12 mm diametrli gofrirovka armatura",
    price: 12400,
    unit_ru: "за метр",
    unit_uz: "metr uchun",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjsraViIgdMFgeAyXU_M8KKlxKT-lcPModIm6yjTXoTKotYLnq7AHNJk&s=10",
    stock: false,
    specs: {
      diameter: "12 мм",
      class: "А500С",
      type_ru: "Рифленая",
      type_uz: "Gofrirovka",
    },
  },
  {
    id: 7,
    category: "metal",
    name_ru: "Профильная труба",
    name_uz: "Profil quvur",
    desc_ru: "Профильная труба 40×20×2 мм",
    desc_uz: "Profil quvur 40×20×2 mm",
    price: 8400,
    unit_ru: "за метр",
    unit_uz: "metr uchun",
    image:
      "https://kzmc.uz/media/uploads/images/profilnie_nerjaveyuschie_trubi_kategoriya.jpg",
    stock: true,
    specs: { size: "40×20×2", type_ru: "Профильная", type_uz: "Profil" },
  },
  {
    id: 16,
    category: "metal",
    name_ru: "Уголок стальной",
    name_uz: "Po'lat burchak",
    desc_ru: "Стальной уголок 50×50×5 мм",
    desc_uz: "Po'lat burchak 50×50×5 mm",
    price: 7200,
    unit_ru: "за метр",
    unit_uz: "metr uchun",
    image: "https://kzmc.uz/media/uploads/images/sudovoj_ugolok.jpg",
    stock: true,
    specs: { size: "50×50×5", type_ru: "Уголок", type_uz: "Burchak" },
  },

  // === ИЗОЛЯЦИЯ (3 товара) ===
  {
    id: 8,
    category: "insulation",
    name_ru: "Минвата 100мм",
    name_uz: "Mineral paxta 100mm",
    desc_ru: "Минеральная вата плотность 50 кг/м³",
    desc_uz: "Mineral paxta zichligi 50 kg/m³",
    price: 61000,
    unit_ru: "за м²",
    unit_uz: "m² uchun",
    image: "https://images.prom.ua/1679838303_w1280_h640_1679838303.jpg",
    stock: true,
    specs: {
      thickness: "100 мм",
      density: "50 кг/м³",
      type_ru: "Минвата",
      type_uz: "Mineral paxta",
    },
  },
  {
    id: 9,
    category: "insulation",
    name_ru: "Пенополистирол",
    name_uz: "Penopolistirol",
    desc_ru: "Пенополистирол экструдированный 50мм",
    desc_uz: "Ekstrudirovka penopolistirol 50mm",
    price: 45000,
    unit_ru: "за м²",
    unit_uz: "m² uchun",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWhWlJNG88DY111qQ6qZKAYFNIIMJMjUMbP8XqzzoOQ&s=10",
    stock: true,
    specs: {
      thickness: "50 мм",
      type_ru: "Экструдированный",
      type_uz: "Ekstrudirovka",
    },
  },
  {
    id: 17,
    category: "insulation",
    name_ru: "Пароизоляция",
    name_uz: "Bug' izolyatsiyasi",
    desc_ru: "Пароизоляционная плёнка для кровли",
    desc_uz: "Tom yopish uchun bug' izolyatsiya plyonkasi",
    price: 32000,
    unit_ru: "за м²",
    unit_uz: "m² uchun",
    image:
      "https://postroibanu.ru/wp-content/uploads/2017/03/paroizolyaciya.jpg",
    stock: true,
    specs: { thickness: "0.2 мм", type_ru: "Плёнка", type_uz: "Plyonka" },
  },

  // === КРОВЛЯ (3 товара) ===
  {
    id: 10,
    category: "roofing",
    name_ru: "Металлочерепица",
    name_uz: "Metalcherepitsa",
    desc_ru: "Металлочерепица Монтеррей",
    desc_uz: "Monterrey metalcherepitsa",
    price: 84000,
    unit_ru: "за м²",
    unit_uz: "m² uchun",
    image: "https://kroi.by/wp-content/uploads/2020/12/213566.jpg",
    stock: true,
    specs: {
      type_ru: "Монтеррей",
      thickness: "0.45 мм",
      color_ru: "Красный",
      color_uz: "Qizil",
    },
  },
  {
    id: 11,
    category: "roofing",
    name_ru: "Профнастил С-8",
    name_uz: "Profnastil S-8",
    desc_ru: "Профнастил оцинкованный 0.4 мм",
    desc_uz: "Sinklangan profnastil 0.4 mm",
    price: 62000,
    unit_ru: "за м²",
    unit_uz: "m² uchun",
    image: "https://st47.stpulscen.ru/images/product/493/328/380_medium3.jpg",
    stock: true,
    specs: {
      type_ru: "С-8",
      thickness: "0.4 мм",
      coating_ru: "Оцинкованный",
      coating_uz: "Sinklangan",
    },
  },
  {
    id: 18,
    category: "roofing",
    name_ru: "Ондулин",
    name_uz: "Ondulin",
    desc_ru: "Ондулин кровельный лист",
    desc_uz: "Ondulin tom yopish varag'i",
    price: 38000,
    unit_ru: "за м²",
    unit_uz: "m² uchun",
    image: "https://st23.stpulscen.ru/images/product/546/722/411_original.jpg",
    stock: true,
    specs: {
      type_ru: "Ондулин",
      thickness: "0.3 мм",
      color_ru: "Коричневый",
      color_uz: "Jigarrang",
    },
  },

  // === ИНСТРУМЕНТ (3 товара) ===
  {
    id: 12,
    category: "tools",
    name_ru: "Дрель аккумуляторная",
    name_uz: "Akkumulyatorli burg'ulash",
    desc_ru: "Аккумуляторная дрель 18В с зарядкой",
    desc_uz: "18V akkumulyatorli burg'ulash zaryadlovchi bilan",
    price: 125000,
    unit_ru: "за единицу",
    unit_uz: "dona uchun",
    image:
      "https://avatars.mds.yandex.net/get-mpic/5286714/2a0000019165ad60ff01b6d1edb9e48276b2/orig",
    stock: true,
    specs: {
      voltage: "18В",
      battery_ru: "Литий-ион",
      battery_uz: "Lityum-ion",
    },
  },
  {
    id: 19,
    category: "tools",
    name_ru: "Перфоратор",
    name_uz: "Perforator",
    desc_ru: "Перфоратор 800Вт для бетона",
    desc_uz: "Beton uchun 800Vt perforator",
    price: 89000,
    unit_ru: "за единицу",
    unit_uz: "dona uchun",
    image:
      "https://220volt.uz/image/cache/catalog/Makita/perforators/2470_00-1500x1500.jpg.webp",
    stock: true,
    specs: { power: "800 Вт", type_ru: "Ударный", type_uz: "Zarbali" },
  },
  {
    id: 20,
    category: "tools",
    name_ru: "Болгарка",
    name_uz: "Bolgarka",
    desc_ru: "Угловая шлифовальная машина 125мм",
    desc_uz: "125 mm burchakli maydalagich",
    price: 72000,
    unit_ru: "за единицу",
    unit_uz: "dona uchun",
    image:
      "https://220volt.uz/image/cache/catalog/Makita/bolgarians/9050_GA-320x320.jpg.webp",
    stock: true,
    specs: { power: "850 Вт", disc_ru: "125 мм", disc_uz: "125 mm" },
  },
];

// ============================================================
// ========== КОРЗИНА =========================================
// ============================================================
let cart = JSON.parse(localStorage.getItem("sb7-cart")) || [];

function saveCart() {
  localStorage.setItem("sb7-cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cartCount");
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

function getProduct(id) {
  return productsData.find((p) => p.id === id);
}

function addToCart(productId) {
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  saveCart();
  showToast("Товар добавлен в корзину!");
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

function changeQuantity(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    saveCart();
    renderCart();
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function clearCart() {
  if (cart.length === 0) return;
  if (
    confirm(
      document.documentElement.lang === "ru"
        ? "Очистить корзину?"
        : "Savatni tozalash?",
    )
  ) {
    cart = [];
    saveCart();
    renderCart();
    showToast(
      document.documentElement.lang === "ru"
        ? "Корзина очищена"
        : "Savat tozalandi",
    );
  }
}

function checkout() {
  if (cart.length === 0) {
    showToast(
      document.documentElement.lang === "ru" ? "Корзина пуста" : "Savat bo'sh",
    );
    return;
  }
  const total = getCartTotal().toLocaleString();
  const lang = document.documentElement.lang || "ru";
  const msg =
    lang === "ru"
      ? `✅ Заказ оформлен! Сумма: ${total} сум. Спасибо за покупку!`
      : `✅ Buyurtma qabul qilindi! Jami: ${total} so‘m. Xaridingiz uchun rahmat!`;
  alert(msg);
  cart = [];
  saveCart();
  renderCart();
  showToast(lang === "ru" ? "Заказ оформлен!" : "Buyurtma qabul qilindi!");
}

// Toast уведомление
function showToast(message) {
  const existing = document.querySelector(".toast-notification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }, 10);
}

// ============================================================
// ========== КАТАЛОГ =========================================
// ============================================================
function getCategoryName(category) {
  const lang = document.documentElement.lang || "ru";
  const names = {
    cement: { ru: "Цемент и сухие смеси", uz: "Sement va quruq aralashmalar" },
    brick: { ru: "Кирпич и блоки", uz: "G'isht va bloklar" },
    metal: { ru: "Металлопрокат", uz: "Metalprokat" },
    insulation: { ru: "Изоляция", uz: "Izolyatsiya" },
    roofing: { ru: "Кровля и водосток", uz: "Tom yopish va suv oqizish" },
    tools: { ru: "Инструмент и крепёж", uz: "Asbob va mahkamlagichlar" },
  };
  return names[category] ? names[category][lang] : category;
}

function renderProducts(products) {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  const lang = document.documentElement.lang || "ru";
  container.innerHTML = products
    .map(
      (p) => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-card-image">
        <img src="${p.image}" alt="${p[`name_${lang}`]}" loading="lazy" />
        ${!p.stock ? `<span class="product-badge out-of-stock">${lang === "ru" ? "Нет в наличии" : "Mavjud emas"}</span>` : ""}
      </div>
      <div class="product-card-body">
        <h3>${p[`name_${lang}`]}</h3>
        <p class="product-desc">${p[`desc_${lang}`]}</p>
        <div class="product-meta">
          <div class="product-price">
            ${p.price.toLocaleString()} сум
            <span>${p[`unit_${lang}`]}</span>
          </div>
          <div class="product-actions">
            <a href="product.html?id=${p.id}" class="btn btn-outline-small">${lang === "ru" ? "Подробнее" : "Batafsil"}</a>
            <button class="btn btn-orange-small" onclick="addToCart(${p.id})" ${!p.stock ? "disabled" : ""}>
              ${lang === "ru" ? "В корзину" : "Savatga"}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function initCatalog() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const container = document.getElementById("productsGrid");
  const title = document.getElementById("catalogTitle");

  if (!container) return;

  let filtered = productsData;
  let pageTitle = "";
  const lang = document.documentElement.lang || "ru";

  if (category) {
    filtered = productsData.filter((p) => p.category === category);
    pageTitle = getCategoryName(category);
  } else {
    pageTitle = lang === "ru" ? "Все товары" : "Barcha mahsulotlar";
  }

  if (title) {
    title.textContent = pageTitle;
  }

  renderProducts(filtered);
}

// ============================================================
// ========== СТРАНИЦА ТОВАРА ==================================
// ============================================================
function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const container = document.getElementById("productDetail");
  if (!container || !id) return;

  const product = getProduct(id);
  if (!product) {
    container.innerHTML = `<p>${document.documentElement.lang === "ru" ? "Товар не найден" : "Mahsulot topilmadi"}</p>`;
    return;
  }

  const lang = document.documentElement.lang || "ru";
  const isStock = product.stock;

  container.innerHTML = `
    <div class="product-detail-wrapper">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product[`name_${lang}`]}" />
      </div>
      <div class="product-detail-info">
        <div class="product-detail-category">${getCategoryName(product.category)}</div>
        <h1>${product[`name_${lang}`]}</h1>
        <p class="product-detail-desc">${product[`desc_${lang}`]}</p>
        <div class="product-detail-price">
          ${product.price.toLocaleString()} сум
          <span>${product[`unit_${lang}`]}</span>
        </div>
        <div class="product-detail-stock ${isStock ? "in-stock" : "out-of-stock"}">
          ${
            isStock
              ? lang === "ru"
                ? "✅ В наличии"
                : "✅ Mavjud"
              : lang === "ru"
                ? "❌ Нет в наличии"
                : "❌ Mavjud emas"
          }
        </div>
        <button class="btn btn-orange" onclick="addToCart(${product.id})" ${!isStock ? "disabled" : ""}>
          ${lang === "ru" ? "Добавить в корзину" : "Savatga qo'shish"}
        </button>
        <button class="btn btn-outline" onclick="window.history.back()">
          ${lang === "ru" ? "← Назад к каталогу" : "← Katalogga qaytish"}
        </button>
        <div class="product-detail-specs">
          <h3>${lang === "ru" ? "Характеристики" : "Xususiyatlar"}</h3>
          <ul>
            ${Object.entries(product.specs || {})
              .map(
                ([key, value]) => `
              <li><span>${key}:</span> ${value}</li>
            `,
              )
              .join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// ========== КОРЗИНА (страница) ==============================
// ============================================================
function renderCart() {
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const countEl = document.getElementById("cartItemsCount");
  if (!container) return;

  const lang = document.documentElement.lang || "ru";

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>${lang === "ru" ? "Корзина пуста" : "Savat bo'sh"}</p>
        <a href="catalog.html" class="btn btn-orange">${lang === "ru" ? "Перейти в каталог" : "Katalogga o'tish"}</a>
      </div>
    `;
    if (totalEl) totalEl.textContent = "0 сум";
    if (countEl) countEl.textContent = "0";
    return;
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countEl) countEl.textContent = totalItems;

  container.innerHTML = cart
    .map((item) => {
      const product = getProduct(item.id);
      if (!product) return "";
      return `
      <div class="cart-item" data-id="${item.id}">
        <img src="${product.image}" alt="${product[`name_${lang}`]}" />
        <div class="cart-item-info">
          <h4>${product[`name_${lang}`]}</h4>
          <p>${product.price.toLocaleString()} сум / ${product[`unit_${lang}`]}</p>
        </div>
        <div class="cart-item-controls">
          <button onclick="changeQuantity(${item.id}, -1)" class="qty-btn">−</button>
          <span class="qty-count">${item.quantity}</span>
          <button onclick="changeQuantity(${item.id}, 1)" class="qty-btn">+</button>
        </div>
        <div class="cart-item-total">
          ${(product.price * item.quantity).toLocaleString()} сум
        </div>
        <button onclick="removeFromCart(${item.id})" class="cart-remove" title="${lang === "ru" ? "Удалить" : "O'chirish"}">×</button>
      </div>
    `;
    })
    .join("");

  if (totalEl) {
    totalEl.textContent = getCartTotal().toLocaleString() + " сум";
  }
}

// ============================================================
// ========== МОДАЛЬНЫЕ ОКНА (НОВОЕ) ===========================
// ============================================================

// Открыть модальное окно заявки
function openRequestModal() {
  const modal = document.getElementById("requestModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Открыть модальное окно оптовиков
function openWholesaleModal() {
  const modal = document.getElementById("wholesaleModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Закрыть модальное окно
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Закрыть модальное окно при клике на overlay
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Закрыть модальное окно по Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.active").forEach((modal) => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
});

// ============================================================
// ========== ОТПРАВКА ЗАЯВОК ================================
// ============================================================

// Отправка заявки (консультация)
function submitRequest(e) {
  e.preventDefault();

  const name = document.getElementById("requestName").value.trim();
  const phone = document.getElementById("requestPhone").value.trim();
  const comment = document.getElementById("requestComment").value.trim();

  if (!name || !phone) {
    showToast(
      document.documentElement.lang === "ru"
        ? "Заполните имя и телефон"
        : "Ism va telefonni to'ldiring",
    );
    return;
  }

  // Имитация отправки
  console.log("📋 Заявка отправлена:", { name, phone, comment });

  // Показываем сообщение об успехе
  const lang = document.documentElement.lang || "ru";
  const msg =
    lang === "ru"
      ? `✅ Спасибо, ${name}! Наш менеджер свяжется с вами в течение 15 минут.`
      : `✅ Rahmat, ${name}! Menejerimiz 15 daqiqa ichida siz bilan bog'lanadi.`;

  showToast(msg);

  // Закрываем модальное окно
  closeModal("requestModal");

  // Очищаем форму
  document.getElementById("requestForm").reset();
}

// Отправка заявки (оптовикам)
function submitWholesale(e) {
  e.preventDefault();

  const company = document.getElementById("wholesaleCompany").value.trim();
  const name = document.getElementById("wholesaleName").value.trim();
  const phone = document.getElementById("wholesalePhone").value.trim();
  const volume = document.getElementById("wholesaleVolume").value;

  if (!company || !name || !phone) {
    showToast(
      document.documentElement.lang === "ru"
        ? "Заполните все обязательные поля"
        : "Barcha majburiy maydonlarni to'ldiring",
    );
    return;
  }

  // Имитация отправки
  console.log("🏢 Заявка оптовика:", { company, name, phone, volume });

  // Показываем сообщение об успехе
  const lang = document.documentElement.lang || "ru";
  const msg =
    lang === "ru"
      ? `✅ Спасибо, ${name}! Наш менеджер по оптовым продажам свяжется с вами в ближайшее время.`
      : `✅ Rahmat, ${name}! Ulgurji savdo menejerimiz yaqin orada siz bilan bog'lanadi.`;

  showToast(msg);

  // Закрываем модальное окно
  closeModal("wholesaleModal");

  // Очищаем форму
  document.getElementById("wholesaleForm").reset();
}

// ============================================================
// ========== ИНИЦИАЛИЗАЦИЯ ===================================
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  const path = window.location.pathname;
  if (path.includes("catalog.html")) {
    initCatalog();
  } else if (path.includes("product.html")) {
    initProductPage();
  } else if (path.includes("cart.html")) {
    renderCart();
  }
});
