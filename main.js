/* ========================================
   CocoCatHouse – main.js
   ======================================== */

// ── Smooth scroll helper ───────────────────────────────────────────────────
function smoothScroll(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
function nav(e, id) { e.preventDefault(); smoothScroll(id); }
function navM(id) {
  smoothScroll(id);
  document.getElementById('mobile-menu').style.display = 'none';
}
