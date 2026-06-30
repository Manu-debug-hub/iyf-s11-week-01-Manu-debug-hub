// assets/js/main.js
// Mobile nav toggle and set copyright year
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.setAttribute('aria-hidden', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      if (window.innerWidth <= 700) {
        toggle.setAttribute('aria-expanded','false');
        nav.setAttribute('aria-hidden','true');
      }
    }));
  }
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
});
