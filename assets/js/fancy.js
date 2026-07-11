/* Small progressive-enhancement touches: reading progress bar + back-to-top.
   Styled in _sass/_custom.scss (#scroll-progress, #back-to-top). */
(function () {
  var bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.appendChild(bar);

  var btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<span>🚀</span>'; // 🚀 rotated upright via CSS
  document.body.appendChild(btn);
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function onScroll() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var y = window.pageYOffset || doc.scrollTop;
    bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    btn.classList.toggle('is-visible', y > 400);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
})();
