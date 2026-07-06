/* du Liban — menú de navegación móvil (disparado por el botón hamburguesa; el logo
   siempre enlaza al inicio, no abre el menú).
   Vanilla JS, sin dependencias. Compartido por index.html, en/ y ar/ (agnóstico al idioma:
   el contenido traducido vive en el HTML). API implícita vía atributos data-*. */
(function () {
  'use strict';

  var menu = document.getElementById('mobile-menu');
  if (!menu) return;

  var toggles = Array.prototype.slice.call(document.querySelectorAll('[data-nav-toggle]'));
  var mqMobile = window.matchMedia('(max-width: 1023px)');
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var isOpen = false;
  var hideTimer = null;

  function setExpanded(v) {
    var val = v ? 'true' : 'false';
    toggles.forEach(function (t) { t.setAttribute('aria-expanded', val); });
  }

  function open() {
    if (isOpen) return;
    isOpen = true;
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
    menu.hidden = false;
    void menu.offsetWidth; /* reflow para que corra la transición */
    menu.classList.add('is-open');
    setExpanded(true);
    document.addEventListener('click', onDocClick, true);
    document.addEventListener('keydown', onKey);
  }

  function finishHide() {
    if (!isOpen) menu.hidden = true;
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    menu.classList.remove('is-open');
    setExpanded(false);
    document.removeEventListener('click', onDocClick, true);
    document.removeEventListener('keydown', onKey);
    if (mqReduce.matches) {
      finishHide();
    } else {
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(finishHide, 280); /* respaldo por si no llega transitionend */
      var onEnd = function () { menu.removeEventListener('transitionend', onEnd); finishHide(); };
      menu.addEventListener('transitionend', onEnd);
    }
  }

  function toggle() { if (isOpen) { close(); } else { open(); } }

  function onKey(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      close();
      if (toggles[0]) toggles[0].focus();
    }
  }

  function onDocClick(e) {
    if (menu.contains(e.target)) return;
    for (var i = 0; i < toggles.length; i++) {
      if (toggles[i].contains(e.target)) return;
    }
    close();
  }

  toggles.forEach(function (t) {
    t.addEventListener('click', function (e) { e.preventDefault(); toggle(); });
  });

  /* Cerrar al pulsar cualquier enlace del menú. */
  menu.addEventListener('click', function (e) {
    var el = e.target;
    while (el && el !== menu) {
      if (el.hasAttribute && el.hasAttribute('data-nav-close')) { close(); return; }
      el = el.parentNode;
    }
  });

  /* Si la ventana crece a escritorio, asegurar el menú cerrado y oculto. */
  function onViewportChange() {
    if (!mqMobile.matches) { close(); menu.hidden = true; }
  }
  if (mqMobile.addEventListener) { mqMobile.addEventListener('change', onViewportChange); }
  else if (mqMobile.addListener) { mqMobile.addListener(onViewportChange); }
})();
