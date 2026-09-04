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
