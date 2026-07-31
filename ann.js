/* Novatio announcement bar (novatio.school) — the navbar is position:fixed,
   so pad the body down by the bar height to keep page content uncovered.
   2026-07-31: also swaps the bar copy to the rolling-enrollment messages
   (new students start every Monday / Luma school-events sign-up) and rotates
   between them, updating the link target to match the visible message. */
(function () {
  var LUMA = 'https://luma.com/novatioschool';
  var MSGS = [
    { html: 'New Students Start Every Monday - <span class="nv-ann-cta">Enroll Now!</span>',
      href: '/admissions', target: '_self' },
    { html: 'Sign Up for Upcoming School Events - <span class="nv-ann-cta">Register Here</span>',
      href: LUMA, target: '_blank' }
  ];

  function bar() {
    return document.getElementById('nv-ann-bar') || document.querySelector('.nv-ann-bar');
  }

  function pad() {
    var b = bar();
    if (!b) return;
    document.body.style.paddingTop = b.offsetHeight + 'px';
  }

  function swapCopy() {
    var b = bar();
    if (!b || b.tagName !== 'A' || b.getAttribute('data-ann-rotating')) return;
    b.setAttribute('data-ann-rotating', '1');
    var i = 0;
    function show(n) {
      b.innerHTML = MSGS[n].html;
      b.setAttribute('href', MSGS[n].href);
      b.setAttribute('target', MSGS[n].target);
      if (MSGS[n].target === '_blank') b.setAttribute('rel', 'noopener');
      else b.removeAttribute('rel');
    }
    show(0);
    setInterval(function () { i = 1 - i; show(i); pad(); }, 6000);
  }

  function init() { swapCopy(); pad(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.addEventListener('load', init);
  window.addEventListener('resize', pad);
})();
