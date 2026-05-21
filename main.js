/* ========================================
   CocoCatHouse – main.js
   ======================================== */

// ── Smooth scroll helper ───────────────────────────────────────────────────
function smoothScroll(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
function nav(e, id) {
  e.preventDefault();
  smoothScroll(id);
}
function navM(id) {
  smoothScroll(id);
  document.getElementById("mobile-menu").style.display = "none";
}

// ── Mobile menu toggle ─────────────────────────────────────────────────────
function toggleMenu() {
  const m = document.getElementById("mobile-menu");
  m.style.display = m.style.display === "block" ? "none" : "block";
}

// ── WhatsApp functions ─────────────────────────────────────────────────────
function openWA(msg) {
  const num = "6282123993997";
  const text = msg || "Halo CocoCatHouse! Saya ingin booking grooming untuk kucing saya 🐱";
  window.open("https://wa.me/" + num + "?text=" + encodeURIComponent(text), "_blank");
}
function bookWA() {
  const name = document.getElementById("f-name").value || "[nama]";
  const phone = document.getElementById("f-phone").value || "[no hp]";
  const date = document.getElementById("f-date").value || "[tanggal]";
  const service = document.getElementById("f-service").value || "[layanan]";
  openWA("Halo CocoCatHouse!\nNama: " + name + "\nNo HP: " + phone + "\nLayanan: " + service + "\nTanggal: " + date);
}

// ── Scroll Reveal ──────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => revealObserver.observe(el));

// ── Testimonial Slider ─────────────────────────────────────────────────────
const track = document.getElementById("testiTrack");
const cards = track.querySelectorAll(".testi-card");
const dotsWrap = document.getElementById("testiDots");
const total = cards.length;
let current = 0;
let autoTimer;

const cardWidth = () => cards[0].offsetWidth + 24; // gap = 24px


// Buat dot navigation
cards.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot-btn' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Slide ${i + 1}`);
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});

function updateDots() {
  dotsWrap.querySelectorAll('.dot-btn').forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });
}

function goTo(idx) {
  current = Math.max(0, Math.min(idx, total - 1));
  track.style.transform = `translateX(-${current * cardWidth()}px)`;
  updateDots();
}

document.getElementById('testiPrev').addEventListener('click', () => {
  goTo(current > 0 ? current - 1 : total - 1);
  resetAutoSlide();
});

document.getElementById('testiNext').addEventListener('click', () => {
  goTo(current < total - 1 ? current + 1 : 0);
  resetAutoSlide();
});

function startAutoSlide() {
  autoTimer = setInterval(() => {
    goTo(current < total - 1 ? current + 1 : 0);
  }, 4500);
}

function resetAutoSlide() {
  clearInterval(autoTimer);
  startAutoSlide();
}

startAutoSlide();

// ── FAQ Accordion ──────────────────────────────────────────────────────────
document.querySelectorAll('[data-faq]').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // Tutup semua
    document.querySelectorAll('[data-faq]').forEach(i => i.classList.remove('open'));
    // Buka yang diklik (jika belum terbuka)
    if (!isOpen) item.classList.add('open');
  });
});

