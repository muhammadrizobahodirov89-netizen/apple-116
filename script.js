(() => {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const searchBtn = document.getElementById('searchBtn');
  const search = document.getElementById('search');

  burger.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('#navLinks a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open')));

  searchBtn.addEventListener('click', () => {
    search.classList.toggle('show');
    if (search.classList.contains('show')) search.querySelector('input').focus();
  });
  search.addEventListener('submit', e => e.preventDefault());
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { search.classList.remove('show'); nav.classList.remove('open'); }
  });

  // Hero devices grow slightly as the section scrolls into view
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const items = [...document.querySelectorAll('.parallax')];
    const update = () => {
      const vh = innerHeight;
      items.forEach(el => {
        const r = el.getBoundingClientRect();
        const p = Math.min(Math.max((vh - r.top) / (vh * 0.9), 0), 1);
        el.style.transform = `scale(${0.88 + 0.12 * p})`;
      });
    };
    addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    addEventListener('resize', update);
    update();
  }
})();
