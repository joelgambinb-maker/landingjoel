document.documentElement.classList.add("js");

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

  // Medición sin cookies (Plausible): llamada, WhatsApp, reserva, idioma y mapa.
  function track(name, props) {
    if (typeof window.plausible === "function") window.plausible(name, { props: props || {} });
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
