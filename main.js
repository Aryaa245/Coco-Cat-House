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
