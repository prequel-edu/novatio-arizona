/* FAQPage JSON-LD injector for novatio.school blog articles.
   Loaded by the Blog Posts Template (Webflow). Reads the rendered
   "Frequently Asked Questions" section (h2#frequently-asked-questions
   followed by h3 question / p answer pairs inside the article rich text)
   and injects schema.org FAQPage markup. No-ops if the section is absent. */
(function () {
  var d = document;
  /* --- Rich-text table styling (added 2026-08-21) ---------------------
     Webflow's blog rich text ships <table> with no borders, no cell
     padding and no header rule, so generated comparison tables render as
     columns of text running together. Inject scoped CSS once, and wrap
     each table so wide ones scroll instead of breaking the page. Runs
     before any early return below so it applies to every article. */
  try {
    if (!d.getElementById('np-rt-table-css')) {
      var st = d.createElement('style');
      st.id = 'np-rt-table-css';
      st.textContent =
        '.w-richtext .np-table-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0}' +
        '.w-richtext table{width:100%;border-collapse:collapse;font-size:.95em;line-height:1.45}' +
        '.w-richtext table th,.w-richtext table td{padding:.65rem .85rem;text-align:left;vertical-align:top;border-bottom:1px solid #e4e2dd}' +
        '.w-richtext table thead th{border-bottom:2px solid #222625;font-weight:700;white-space:nowrap}' +
        '.w-richtext table tbody tr:nth-child(even){background:#faf9f6}' +
        '.w-richtext table tbody tr:last-child td{border-bottom:none}';
      d.head.appendChild(st);
    }
    var tables = d.querySelectorAll('.w-richtext table');
    for (var t = 0; t < tables.length; t++) {
      var tbl = tables[t];
      if (tbl.parentNode && tbl.parentNode.className === 'np-table-scroll') continue;
      var wrap = d.createElement('div');
      wrap.className = 'np-table-scroll';
      tbl.parentNode.insertBefore(wrap, tbl);
      wrap.appendChild(tbl);
    }
  } catch (e) {}
  /* Backfill BlogPosting image: the template's inline JSON-LD builder runs
     before the hero <img> exists in the DOM, so it misses the image. This
     script loads deferred, after the DOM is complete. */
  try {
    var bp = d.getElementById('np-blogposting');
    var hero = d.querySelector('img.blog-hero');
    if (bp && hero && hero.src && hero.src.indexOf('placeholder') < 0) {
      var o = JSON.parse(bp.textContent || '{}');
      if (o && !o.image) { o.image = hero.src; bp.textContent = JSON.stringify(o); }
    }
  } catch (e) {}
  /* If the page already ships server-side FAQPage JSON-LD (Webflow page
     settings bind the faq-schema-json CMS field), don't inject a duplicate. */
  var existing = d.querySelectorAll('script[type="application/ld+json"]');
  for (var j = 0; j < existing.length; j++) {
    if ((existing[j].textContent || '').indexOf('"FAQPage"') >= 0) return;
  }
  var h2 = d.getElementById('frequently-asked-questions');
  if (!h2) {
    var hs = d.querySelectorAll('h2');
    for (var i = 0; i < hs.length; i++) {
      if (/frequently asked questions/i.test(hs[i].textContent)) { h2 = hs[i]; break; }
    }
  }
  if (!h2) return;
  var entities = [];
  var node = h2.nextElementSibling;
  var q = null, answer = [];
  function flush() {
    if (q && answer.length) {
      entities.push({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: answer.join(' ') }
      });
    }
    answer = [];
  }
  while (node && node.tagName !== 'H2') {
    if (node.tagName === 'H3') { flush(); q = node.textContent.trim(); }
    else if (node.tagName === 'P' && q) { answer.push(node.textContent.trim()); }
    node = node.nextElementSibling;
  }
  flush();
  if (!entities.length) return;
  var s = d.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entities
  });
  d.head.appendChild(s);
})();
