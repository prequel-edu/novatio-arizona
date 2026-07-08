/* Novatio announcement bar (novatio.school) — the navbar is position:fixed,
   so pad the body down by the bar height to keep page content uncovered. */
(function () {
  function pad() {
    var bar = document.getElementById('nv-ann-bar') || document.querySelector('.nv-ann-bar');
    if (!bar) return;
    document.body.style.paddingTop = bar.offsetHeight + 'px';
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pad);
  } else {
    pad();
  }
  window.addEventListener('load', pad);
  window.addEventListener('resize', pad);
})();
