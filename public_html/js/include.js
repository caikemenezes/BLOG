// Carrega o cabeçalho e o rodapé (partials/header.html e partials/footer.html)
// em qualquer página que tenha os elementos <div id="site-header"> e <div id="site-footer">.
// Também marca o link do menu ativo e preenche o ano e a citação do dia.

const QUOTES = [
  {
    text: "A oração é o levantar da mente e do coração a Deus ou o pedir bens convenientes.",
    author: "São João Damasceno",
  },
  {
    text: "Fora do amor não há nem sequer sombra de esperança.",
    author: "São Tomás de Aquino",
  },
  {
    text: "Nada te perturbe, nada te espante; tudo passa, Deus não muda.",
    author: "Santa Teresa d'Ávila",
  },
  {
    text: "A glória de Deus é o homem vivo.",
    author: "Santo Irineu de Lyon",
  },
  {
    text: "Onde está a caridade e o amor, aí está Deus.",
    author: "Tradição da Igreja",
  },
];

function getQuoteOfTheDay(date = new Date()) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const diff =
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - start;
  const dayOfYear = Math.floor(diff / 86400000);
  return QUOTES[dayOfYear % QUOTES.length];
}

function markActiveNavLink() {
  const path = window.location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll(".main-nav a, .footer-col a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    if (href === path || (href === "/" && path === "/")) {
      link.classList.add("active");
    }
  });
}

function fillQuoteOfDay() {
  const box = document.querySelector("[data-quote-text]");
  if (!box) return;
  const quote = getQuoteOfTheDay();
  document.querySelector("[data-quote-text]").textContent = `"${quote.text}"`;
  document.querySelector("[data-quote-author]").textContent = `— ${quote.author}`;
}

function fillFooterYear() {
  const el = document.querySelector("[data-current-year]");
  if (el) el.textContent = new Date().getFullYear();
}

function loadPartial(selector, url, afterInsert) {
  const target = document.querySelector(selector);
  if (!target) return Promise.resolve();
  return fetch(url)
    .then((res) => res.text())
    .then((markup) => {
      target.innerHTML = markup;
      if (afterInsert) afterInsert();
    })
    .catch((err) => {
      console.error(`Falha ao carregar ${url}:`, err);
    });
}

function initHeroCarousel() {
  const hero = document.getElementById("hero-carousel");
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll(".hero-slide"));
  const dots = Array.from(hero.querySelectorAll(".hero-dot"));
  const prevBtn = hero.querySelector(".hero-arrow-prev");
  const nextBtn = hero.querySelector(".hero-arrow-next");
  let current = Math.max(0, slides.findIndex((s) => s.classList.contains("is-active")));
  let timer;

  function goTo(index) {
    const next = (index + slides.length) % slides.length;
    slides[current].classList.remove("is-active");
    dots[current]?.classList.remove("is-active");
    current = next;
    slides[current].classList.add("is-active");
    dots[current]?.classList.add("is-active");
  }

  function restartAutoplay() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 6000);
  }

  prevBtn?.addEventListener("click", () => {
    goTo(current - 1);
    restartAutoplay();
  });
  nextBtn?.addEventListener("click", () => {
    goTo(current + 1);
    restartAutoplay();
  });
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goTo(i);
      restartAutoplay();
    });
  });

  restartAutoplay();
}

document.addEventListener("DOMContentLoaded", () => {
  initHeroCarousel();
  Promise.all([
    loadPartial("#site-header", "/partials/header.html", markActiveNavLink),
    loadPartial("#site-footer", "/partials/footer.html", () => {
      markActiveNavLink();
      fillFooterYear();
    }),
  ]).then(fillQuoteOfDay);
});
