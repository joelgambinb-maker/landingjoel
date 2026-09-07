document.documentElement.classList.add("js");

// Google Ads: etiqueta AW-18436478485. Las etiquetas de cada conversión se rellenan cuando Google las facilita.
var ADS_ID = "AW-18436478485";
var ADS_LABELS = { Llamada: "", WhatsApp: "", Reserva: "" };


// Transiciones sutiles entre zonas: los bloques aparecen al entrar en pantalla.
(function () {
  var groups = document.querySelectorAll(".service-cards, .duo, .why-grid, .related .cards, .graft-cards");
  var singles = document.querySelectorAll(".section-head, .sede-band, .booking, .split-row, .evidence, .diagram, .tablewrap");
  groups.forEach(function (el) { el.classList.add("reveal-group"); });
  singles.forEach(function (el) { el.classList.add("reveal"); });
  var pending = Array.prototype.slice.call(document.querySelectorAll(".reveal, .reveal-group"));
  if (!pending.length) return;
  function check() {
    var limit = window.innerHeight * 0.94;
    pending = pending.filter(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < limit) { el.classList.add("in"); return false; }
      return true;
    });
    if (!pending.length) {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    }
  }
  check();
  window.addEventListener("scroll", check, { passive: true });
  window.addEventListener("resize", check);
  window.addEventListener("load", check);
})();

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  // Selector de idioma: se cierra al pulsar fuera o con Escape.
  var menu = document.querySelector(".lang-menu");
  if (menu) {
    document.addEventListener("click", function (e) {
      if (menu.open && !menu.contains(e.target)) menu.open = false;
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.open) menu.open = false;
    });
  }

  // Aviso de cookies: solo gobierna la etiqueta de Google Ads (modo de consentimiento).
  var CB = {
    es: ["Usamos cookies solo para medir si nuestros anuncios de Google traen pacientes. Sin tu permiso no se instala ninguna cookie.", "Más información", "Aceptar", "Rechazar"],
    en: ["We use cookies only to measure whether our Google ads bring patients. Without your permission no cookie is set.", "More information", "Accept", "Reject"],
    de: ["Wir verwenden Cookies nur, um zu messen, ob unsere Google-Anzeigen Patienten bringen. Ohne Ihre Zustimmung wird kein Cookie gesetzt.", "Mehr erfahren", "Akzeptieren", "Ablehnen"],
    fr: ["Nous utilisons des cookies uniquement pour mesurer si nos annonces Google nous amènent des patients. Sans votre accord, aucun cookie n'est déposé.", "En savoir plus", "Accepter", "Refuser"],
    nl: ["We gebruiken cookies alleen om te meten of onze Google-advertenties patiënten opleveren. Zonder uw toestemming wordt geen cookie geplaatst.", "Meer informatie", "Accepteren", "Weigeren"],
    no: ["Vi bruker informasjonskapsler bare for å måle om Google-annonsene våre gir pasienter. Uten ditt samtykke settes ingen informasjonskapsler.", "Mer informasjon", "Godta", "Avslå"],
    sv: ["Vi använder cookies enbart för att mäta om våra Google-annonser ger patienter. Utan ditt samtycke sätts inga cookies.", "Mer information", "Acceptera", "Avböj"],
    pl: ["Używamy plików cookie wyłącznie po to, aby mierzyć, czy nasze reklamy Google przynoszą pacjentów. Bez Twojej zgody żaden plik cookie nie zostanie zapisany.", "Więcej informacji", "Akceptuję", "Odrzucam"],
    ro: ["Folosim cookie-uri doar pentru a măsura dacă anunțurile noastre Google aduc pacienți. Fără acordul dumneavoastră nu se instalează niciun cookie.", "Mai multe informații", "Accept", "Refuz"],
    bg: ["Използваме бисквитки само за да измерим дали рекламите ни в Google водят пациенти. Без вашето съгласие не се инсталира никаква бисквитка.", "Повече информация", "Приемам", "Отказвам"],
    ru: ["Мы используем cookie только для того, чтобы понять, приводит ли наша реклама в Google пациентов. Без вашего согласия cookie не устанавливаются.", "Подробнее", "Принять", "Отклонить"],
    uk: ["Ми використовуємо cookie лише для того, щоб зрозуміти, чи приводить наша реклама в Google пацієнтів. Без вашої згоди cookie не встановлюються.", "Докладніше", "Прийняти", "Відхилити"]
  };
  function consentStored() {
    try {
      var c = JSON.parse(localStorage.getItem("jg-consent") || "null");
      return c && (Date.now() - c.t < 31536000000) ? c.v : null;
    } catch (e) { return null; }
  }
  function saveConsent(v) {
    try { localStorage.setItem("jg-consent", JSON.stringify({ v: v, t: Date.now() })); } catch (e) {}
    if (typeof window.gtag === "function") {
      var s = v === "granted" ? "granted" : "denied";
      window.gtag("consent", "update", { ad_storage: s, ad_user_data: s, ad_personalization: s });
    }
  }
  function showBanner() {
    if (document.querySelector(".cookie-bar")) return;
    var t = CB[document.documentElement.lang] || CB.es;
    var bar = document.createElement("div");
    bar.className = "cookie-bar";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Cookies");
    bar.innerHTML = '<p>' + t[0] + ' <a href="/privacidad/#cookies">' + t[1] + '</a></p>' +
      '<div class="cb-actions"><button type="button" class="cb-reject">' + t[3] + '</button><button type="button" class="cb-accept">' + t[2] + '</button></div>';
    bar.querySelector(".cb-accept").addEventListener("click", function () { saveConsent("granted"); bar.remove(); });
    bar.querySelector(".cb-reject").addEventListener("click", function () { saveConsent("denied"); bar.remove(); });
    document.body.appendChild(bar);
  }
  if (!consentStored()) showBanner();
  document.querySelectorAll(".cookie-settings").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); showBanner(); });
  });

  // Medición sin cookies (Plausible): llamada, WhatsApp, reserva, idioma y mapa.
  function track(name, props) {
    if (typeof window.plausible === "function") window.plausible(name, { props: props || {} });
    if (ADS_LABELS[name] && typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: ADS_ID + "/" + ADS_LABELS[name] });
    }
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a") : null;
    if (!a) return;
    var h = a.getAttribute("href") || "";
    if (h.indexOf("tel:") === 0) track("Llamada", { page: location.pathname });
    else if (h.indexOf("wa.me") !== -1) track("WhatsApp", { page: location.pathname });
    else if (h.indexOf("doctoralia.es") !== -1) track("Reserva", { page: location.pathname, via: "enlace" });
    else if (a.hasAttribute("hreflang") && a.closest(".lang-menu")) track("Idioma", { to: a.getAttribute("hreflang"), from: document.documentElement.lang });
  });
  var widgetTracked = false;
  window.addEventListener("blur", function () {
    var el = document.activeElement;
    if (!widgetTracked && el && el.tagName === "IFRAME" && el.closest(".bw-frame")) {
      widgetTracked = true;
      track("Reserva", { page: location.pathname, via: "calendario" });
    }
  });

  // Mapas de Google: se cargan al pulsar, para no dejar cookies de terceros antes.
  document.querySelectorAll(".map-load").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var f = document.createElement("iframe");
      f.src = a.getAttribute("data-embed");
      f.title = a.getAttribute("data-title") || "";
      f.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      f.setAttribute("allowfullscreen", "");
      a.replaceWith(f);
      track("Mapa", { sede: a.getAttribute("data-title") || "" });
    });
  });

  // Widget de reserva de Doctoralia: el script se carga cuando el
  // calendario se acerca al viewport, para no penalizar la carga inicial.
  var frame = document.querySelector(".bw-frame");
  if (frame) {
    var loadWidget = function () {
      if (document.getElementById("zl-widget-s")) return;
      var js = document.createElement("script");
      js.id = "zl-widget-s";
      js.src = "https://platform.docplanner.com/js/widget.js";
      document.body.appendChild(js);
    };
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            loadWidget();
            io.disconnect();
          }
        });
      }, { rootMargin: "900px 0px" });
      io.observe(frame);
    } else {
      loadWidget();
    }
  }
});
