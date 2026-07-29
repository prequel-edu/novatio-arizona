/* FAQPage JSON-LD injector for novatio.school blog articles.
   Loaded by the Blog Posts Template (Webflow). Reads the rendered
   "Frequently Asked Questions" section (h2#frequently-asked-questions
   followed by h3 question / p answer pairs inside the article rich text)
   and injects schema.org FAQPage markup. No-ops if the section is absent. */
(function () {
  var d = document;
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
