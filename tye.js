// thank-you-eligible page enhancements (novatio.school/thank-you-eligible)
// Hosted here (arizona.novatio.school/tye.js) because Webflow's freeform-code
// validator 406s on inline iframe-building JS. Loaded from the page footer.
// 1. Forwards lead params onto apply.novatio.school links
// 2. Embeds Karissa's HubSpot meetings calendar (prefilled) into .book-embed
// 3. Personalizes the H1 with first_name
document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(window.location.search);
  var pass = ["first_name","last_name","email","phone","zip","state_code","grade_eligibility","lp_variant","utm_source","utm_medium","utm_campaign","utm_term","utm_content","fbadid"];
  var qp = new URLSearchParams();
  pass.forEach(function (k) { var v = params.get(k); if (v) qp.append(k, v); });
  if (qp.toString()) {
    document.querySelectorAll("a[href*='apply.novatio.school']").forEach(function (a) {
      try {
        var u = new URL(a.href);
        qp.forEach(function (v, k) { u.searchParams.set(k, v); });
        a.href = u.toString();
      } catch (e) {}
    });
  }

  var BOOKING = "https://meetings.hubspot.com/karissa-ham/novatio-admissions";
  function bookingUrl(embed) {
    try {
      var u = new URL(BOOKING);
      if (embed) u.searchParams.set("embed", "true");
      if (params.get("first_name")) u.searchParams.set("firstName", params.get("first_name"));
      if (params.get("last_name")) u.searchParams.set("lastName", params.get("last_name"));
      if (params.get("email")) u.searchParams.set("email", params.get("email"));
      return u.toString();
    } catch (e) { return BOOKING; }
  }

  document.querySelectorAll("a[href*='meetings.hubspot.com']").forEach(function (a) {
    a.href = bookingUrl(false);
  });

  var box = document.querySelector(".book-embed");
  if (box) {
    var f = document.createElement("iframe");
    f.src = bookingUrl(true);
    f.title = "Book a call with Novatio admissions";
    f.style.cssText = "width:100%;min-height:660px;border:none;border-radius:12px;margin-top:12px;background:#fff;";
    box.appendChild(f);
    var p = document.createElement("p");
    p.style.cssText = "font-size:0.85rem;margin-top:8px;";
    p.appendChild(document.createTextNode("Calendar not loading? "));
    var fb = document.createElement("a");
    fb.href = bookingUrl(false);
    fb.target = "_blank";
    fb.rel = "noopener";
    fb.style.textDecoration = "underline";
    fb.appendChild(document.createTextNode("Open the booking page"));
    p.appendChild(fb);
    p.appendChild(document.createTextNode("."));
    box.appendChild(p);
  }

  var fn = params.get("first_name");
  if (fn && /^[A-Za-z' -]{2,20}$/.test(fn)) {
    var h = document.querySelector("h1");
    if (h && h.textContent.indexOf("eligible") !== -1) {
      h.textContent = "Great news, " + fn.charAt(0).toUpperCase() + fn.slice(1) + "! Your child is eligible.";
    }
  }
});
