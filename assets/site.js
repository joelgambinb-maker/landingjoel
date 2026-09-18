document.documentElement.classList.add("js");

// Google Ads: etiqueta AW-18436478485. Las etiquetas de cada conversión se rellenan cuando Google las facilita.
var ADS_ID = "AW-18436478485";
// De momento, llamada y WhatsApp cuentan como "Reserva de cita" (una sola conversión de contacto).
var ADS_LABELS = { Llamada: "dmCOCIGPz_AcEJWsmddE", WhatsApp: "dmCOCIGPz_AcEJWsmddE", Reserva: "dmCOCIGPz_AcEJWsmddE" };


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

  // Aviso de cookies: gobierna la etiqueta de Google Ads (modo de consentimiento) y los mapas de Google.
  var CB = {
    es: ["Utilizamos cookies únicamente para medir los resultados de nuestros anuncios de Google y para mostrar los mapas de las sedes. No se instala ninguna cookie sin tu consentimiento.", "Política de cookies", "Aceptar", "Rechazar", "Cookies"],
    en: ["We use cookies only to measure the results of our Google ads and to display the location maps. No cookie is set without your consent.", "Cookie policy", "Accept", "Reject", "Cookies"],
    de: ["Wir verwenden Cookies ausschließlich, um die Ergebnisse unserer Google-Anzeigen zu messen und die Standortkarten anzuzeigen. Ohne Ihre Einwilligung wird kein Cookie gesetzt.", "Cookie-Richtlinie", "Akzeptieren", "Ablehnen", "Cookies"],
    fr: ["Nous utilisons des cookies uniquement pour mesurer les résultats de nos annonces Google et afficher les cartes de nos centres. Aucun cookie n'est déposé sans votre consentement.", "Politique de cookies", "Accepter", "Refuser", "Cookies"],
    nl: ["We gebruiken cookies uitsluitend om de resultaten van onze Google-advertenties te meten en de locatiekaarten te tonen. Zonder uw toestemming wordt geen cookie geplaatst.", "Cookiebeleid", "Accepteren", "Weigeren", "Cookies"],
    no: ["Vi bruker informasjonskapsler kun for å måle resultatene av Google-annonsene våre og for å vise kart over klinikkene. Ingen informasjonskapsler settes uten ditt samtykke.", "Retningslinjer for informasjonskapsler", "Godta", "Avslå", "Informasjonskapsler"],
    sv: ["Vi använder cookies enbart för att mäta resultatet av våra Google-annonser och för att visa kartor över mottagningarna. Inga cookies sätts utan ditt samtycke.", "Cookiepolicy", "Acceptera", "Avböj", "Cookies"],
    pl: ["Używamy plików cookie wyłącznie do mierzenia wyników naszych reklam Google oraz do wyświetlania map placówek. Bez Twojej zgody nie jest zapisywany żaden plik cookie.", "Polityka cookies", "Akceptuję", "Odrzucam", "Pliki cookie"],
    ro: ["Folosim cookie-uri exclusiv pentru a măsura rezultatele anunțurilor noastre Google și pentru a afișa hărțile centrelor. Niciun cookie nu se instalează fără consimțământul dumneavoastră.", "Politica de cookie-uri", "Accept", "Refuz", "Cookie-uri"],
    bg: ["Използваме бисквитки единствено за да измерваме резултатите от рекламите ни в Google и за да показваме картите на клиниките. Без вашето съгласие не се инсталира никаква бисквитка.", "Политика за бисквитките", "Приемам", "Отказвам", "Бисквитки"],
    ru: ["Мы используем cookie исключительно для оценки результатов нашей рекламы в Google и для показа карт клиник. Без вашего согласия cookie не устанавливаются.", "Политика cookie", "Принять", "Отклонить", "Файлы cookie"],
    uk: ["Ми використовуємо cookie виключно для оцінки результатів нашої реклами в Google і для показу карт клінік. Без вашої згоди cookie не встановлюються.", "Політика cookie", "Прийняти", "Відхилити", "Файли cookie"]
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
    if (v === "granted") loadAllMaps();
  }
  function showBanner() {
    if (document.querySelector(".cookie-bar")) return;
    var t = CB[document.documentElement.lang] || CB.es;
    var bar = document.createElement("div");
    bar.className = "cookie-bar";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Cookies");
    bar.innerHTML = '<p class="cb-title">' + t[4] + '</p><p>' + t[0] + ' <a href="/privacidad/#cookies">' + t[1] + '</a></p>' +
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

  // Mapas de Google: se muestran solos cuando hay consentimiento de cookies
  // (guardado o recién dado en el aviso); si no lo hay, se cargan al pulsar.
  function loadMap(a, auto) {
    var f = document.createElement("iframe");
    f.src = a.getAttribute("data-embed");
    f.title = a.getAttribute("data-title") || "";
    f.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    f.setAttribute("allowfullscreen", "");
    f.setAttribute("loading", "lazy");
    a.replaceWith(f);
    if (!auto) track("Mapa", { sede: a.getAttribute("data-title") || "" });
  }
  function loadAllMaps() {
    document.querySelectorAll(".map-load").forEach(function (a) { loadMap(a, true); });
  }
  document.querySelectorAll(".map-load").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); loadMap(a, false); });
  });
  if (consentStored() === "granted") loadAllMaps();

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
