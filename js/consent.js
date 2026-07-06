/* ── Cookie consent banner + Maps gate (vanilla, no deps) ─────────────────
   Storage key: dl-consent-v1 → { thirdParty: boolean, ts: number }.
   Gates any iframe[data-consent-src] (Google Maps embed) behind explicit
   consent, per legal.html#cookies. Injects its own scoped CSS (prefixed
   .cc-) since Tailwind's purge never sees this file. Exposes
   window.dlOpenConsent() to reopen the banner (used by [data-cookie-prefs]
   links in the footer). */
(function () {
  'use strict';

  var STORAGE_KEY = 'dl-consent-v1';
  var scriptEl = document.currentScript;
  var legalHref = (scriptEl && scriptEl.dataset && scriptEl.dataset.legal) || 'legal.html#cookies';
  var lang = (document.documentElement.lang || 'es').slice(0, 2);
  if (lang !== 'en' && lang !== 'ar') lang = 'es';
  var isRTL = document.documentElement.dir === 'rtl' || lang === 'ar';
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── i18n ─────────────────────────────────────────────────────────────── */
  var DICT = {
    es: {
      dialogLabel: 'Preferencias de cookies',
      message: 'Usamos almacenamiento local y, si aceptas, cookies de terceros de Google Maps. Más información en la',
      linkText: 'política de cookies',
      accept: 'Aceptar',
      reject: 'Rechazar',
      customize: 'Personalizar',
      save: 'Guardar',
      mapCheckbox: 'Mapa de Google (cookies de terceros)'
    },
    en: {
      dialogLabel: 'Cookie preferences',
      message: 'We use local storage and, if you accept, third-party Google Maps cookies. More information in the',
      linkText: 'cookie policy',
      accept: 'Accept',
      reject: 'Reject',
      customize: 'Customize',
      save: 'Save',
      mapCheckbox: 'Google Map (third-party cookies)'
    },
    ar: {
      dialogLabel: 'تفضيلات ملفات تعريف الارتباط',
      message: 'نستخدم التخزين المحلي، وإذا وافقت، ملفات تعريف ارتباط تابعة لجهات خارجية من Google Maps. لمزيد من المعلومات راجع',
      linkText: 'سياسة ملفات تعريف الارتباط',
      accept: 'قبول',
      reject: 'رفض',
      customize: 'تخصيص',
      save: 'حفظ',
      mapCheckbox: 'خريطة Google (ملفات تعريف ارتباط تابعة لجهات خارجية)'
    }
  };
  var t = DICT[lang];

  /* ── Storage helpers (never throw) ───────────────────────────────────── */
  function readConsent() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (parsed && typeof parsed.thirdParty === 'boolean') return parsed;
      return null;
    } catch (e) {
      return null;
    }
  }

  function writeConsent(thirdParty) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ thirdParty: !!thirdParty, ts: Date.now() }));
    } catch (e) {
      /* Safari private mode / storage disabled — degrade silently */
    }
  }

  /* ── Apply consent: load gated iframes, hide placeholders ───────────── */
  function loadFrame(frame) {
    var src = frame.getAttribute('data-consent-src');
    if (!src) return;
    if (frame.getAttribute('src') !== src) frame.setAttribute('src', src);
    var container = frame.parentElement;
    var placeholder = container ? container.querySelector('[data-map-placeholder]') : null;
    if (placeholder) placeholder.style.display = 'none';
  }

  function unloadFrame(frame) {
    if (!frame.getAttribute('src')) return;
    /* Navigate the frame away so the third-party document (and its cookies'
       activity) actually stops, then clear the attribute so loadFrame can
       re-gate it later. */
    frame.setAttribute('src', 'about:blank');
    frame.removeAttribute('src');
    var container = frame.parentElement;
    var placeholder = container ? container.querySelector('[data-map-placeholder]') : null;
    if (placeholder) placeholder.style.display = '';
  }

  function applyConsent(thirdParty) {
    document.querySelectorAll('iframe[data-consent-src]').forEach(thirdParty ? loadFrame : unloadFrame);
  }

  /* ── Scoped CSS (prefixed .cc-, not Tailwind) ────────────────────────── */
  function injectStyles() {
    if (document.getElementById('cc-styles')) return;
    var css = [
      '.cc-banner{position:fixed;inset-inline:0;bottom:0;z-index:9999;',
      'background:var(--cc-cedar-deep);color:var(--cc-cream);',
      'padding:16px 20px;box-shadow:0 -2px 24px rgba(0,0,0,.25);',
      'font-family:"Jost",system-ui,sans-serif;',
      'max-height:80vh;overflow-y:auto;}',
      '.cc-banner[hidden]{display:none;}',
      /* El cursor custom del sitio (z-index 90) queda por debajo del banner y
         el nativo esta en cursor:none — restaurar el nativo dentro del banner. */
      'body.has-custom-cursor .cc-banner{cursor:auto;}',
      'body.has-custom-cursor .cc-banner button,body.has-custom-cursor .cc-banner a,body.has-custom-cursor .cc-banner label{cursor:pointer;}',
      '.cc-banner.cc-enter{animation:cc-slide-up .32s ease-out;}',
      '@keyframes cc-slide-up{from{transform:translateY(100%);}to{transform:translateY(0);}}',
      '.cc-inner{max-width:1100px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:14px 20px;}',
      '.cc-text{flex:1 1 320px;font-size:13.5px;line-height:1.55;color:var(--cc-cream);opacity:.92;margin:0;}',
      '.cc-text a{color:var(--cc-gold-soft);text-decoration:underline;text-underline-offset:2px;}',
      '.cc-text a:hover{color:var(--cc-cream);}',
      '.cc-actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center;flex:0 0 auto;}',
      '.cc-btn{appearance:none;border:0;cursor:pointer;border-radius:999px;padding:11px 20px;',
      'font-family:inherit;font-size:12px;letter-spacing:.14em;text-transform:uppercase;',
      'min-height:44px;min-width:44px;line-height:1;transition:background-color .2s ease,opacity .2s ease;}',
      '.cc-btn-accept{background:var(--cc-terracotta);color:var(--cc-cream);}',
      '.cc-btn-accept:hover{background:var(--cc-terracotta-deep);}',
      '.cc-btn-reject{background:transparent;color:var(--cc-cream);border:1px solid rgba(250,247,240,.35);}',
      '.cc-btn-reject:hover{border-color:var(--cc-cream);}',
      '.cc-btn-customize{background:transparent;color:var(--cc-gold-soft);border:1px solid rgba(201,185,140,.4);}',
      '.cc-btn-customize:hover{border-color:var(--cc-gold-soft);color:var(--cc-cream);}',
      '.cc-btn-save{background:var(--cc-terracotta);color:var(--cc-cream);}',
      '.cc-btn-save:hover{background:var(--cc-terracotta-deep);}',
      '.cc-panel{flex:1 1 100%;display:flex;align-items:center;gap:12px;padding-top:6px;',
      'border-top:1px solid rgba(250,247,240,.15);margin-top:6px;}',
      '.cc-panel[hidden]{display:none;}',
      '.cc-checkbox-row{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--cc-cream);}',
      '.cc-checkbox-row input{width:18px;height:18px;accent-color:var(--cc-terracotta);cursor:pointer;}',
      '[dir="rtl"] .cc-inner{direction:rtl;}',
      '@media (prefers-reduced-motion: reduce){.cc-banner.cc-enter{animation:none;}}'
    ].join('');
    var style = document.createElement('style');
    style.id = 'cc-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ── Banner markup + wiring ──────────────────────────────────────────── */
  var banner = null;
  var lastFocused = null;

  /* Escape closes the banner WITHOUT saving — postpones the decision.
     Registered on show, removed on hide. */
  function onEscape(e) {
    if (e.key !== 'Escape') return;
    if (!banner || banner.hidden) return;
    hideBanner();
  }

  function buildBanner() {
    if (banner) return banner;

    banner = document.createElement('div');
    banner.className = 'cc-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', t.dialogLabel);
    banner.setAttribute('aria-modal', 'false');
    if (isRTL) banner.setAttribute('dir', 'rtl');
    banner.hidden = true;

    var safeLegalHref = legalHref.replace(/"/g, '&quot;');

    banner.innerHTML =
      '<div class="cc-inner">' +
        '<p class="cc-text">' + t.message + ' <a href="' + safeLegalHref + '">' + t.linkText + '</a>.</p>' +
        '<div class="cc-actions">' +
          '<button type="button" class="cc-btn cc-btn-reject" data-cc-reject>' + t.reject + '</button>' +
          '<button type="button" class="cc-btn cc-btn-customize" data-cc-customize aria-expanded="false">' + t.customize + '</button>' +
          '<button type="button" class="cc-btn cc-btn-accept" data-cc-accept>' + t.accept + '</button>' +
        '</div>' +
        '<div class="cc-panel" data-cc-panel hidden>' +
          '<label class="cc-checkbox-row">' +
            '<input type="checkbox" data-cc-map-checkbox />' +
            '<span>' + t.mapCheckbox + '</span>' +
          '</label>' +
          '<button type="button" class="cc-btn cc-btn-save" data-cc-save>' + t.save + '</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);

    var acceptBtn = banner.querySelector('[data-cc-accept]');
    var rejectBtn = banner.querySelector('[data-cc-reject]');
    var customizeBtn = banner.querySelector('[data-cc-customize]');
    var saveBtn = banner.querySelector('[data-cc-save]');
    var panel = banner.querySelector('[data-cc-panel]');
    var checkbox = banner.querySelector('[data-cc-map-checkbox]');

    acceptBtn.addEventListener('click', function () {
      writeConsent(true);
      applyConsent(true);
      hideBanner();
    });

    rejectBtn.addEventListener('click', function () {
      writeConsent(false);
      applyConsent(false);
      hideBanner();
    });

    customizeBtn.addEventListener('click', function () {
      var expanded = customizeBtn.getAttribute('aria-expanded') === 'true';
      customizeBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      panel.hidden = expanded;
    });

    saveBtn.addEventListener('click', function () {
      var thirdParty = !!checkbox.checked;
      writeConsent(thirdParty);
      applyConsent(thirdParty);
      hideBanner();
    });

    return banner;
  }

  function showBanner(preloadState) {
    injectStyles();
    var el = buildBanner();
    var checkbox = el.querySelector('[data-cc-map-checkbox]');
    var panel = el.querySelector('[data-cc-panel]');
    var customizeBtn = el.querySelector('[data-cc-customize]');

    if (preloadState) {
      checkbox.checked = !!preloadState.thirdParty;
    }
    panel.hidden = true;
    customizeBtn.setAttribute('aria-expanded', 'false');

    // Remember where focus was so we can return it on close (a11y).
    // Skip if focus is already inside the banner (re-open while open).
    if (!el.contains(document.activeElement)) {
      lastFocused = document.activeElement;
    }
    document.addEventListener('keydown', onEscape);

    el.hidden = false;
    if (!reduceMotion) {
      el.classList.remove('cc-enter');
      // Force reflow so the animation restarts on reopen
      void el.offsetWidth;
      el.classList.add('cc-enter');
    }

    var firstBtn = el.querySelector('[data-cc-reject]');
    if (firstBtn) firstBtn.focus();
  }

  function hideBanner() {
    if (!banner) return;
    banner.hidden = true;
    document.removeEventListener('keydown', onEscape);
    // Return focus to the element that opened the banner, if still valid
    if (
      lastFocused &&
      lastFocused !== document.body &&
      document.documentElement.contains(lastFocused) &&
      typeof lastFocused.focus === 'function'
    ) {
      lastFocused.focus();
    }
    lastFocused = null;
  }

  /* ── Footer "Cookie preferences" links ───────────────────────────────── */
  function wireFooterLinks() {
    document.querySelectorAll('[data-cookie-prefs]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var stored = readConsent();
        showBanner(stored || { thirdParty: false });
      });
    });
  }

  /* ── data-map-load buttons (placeholder "Load map" CTA) ──────────────── */
  function wireMapLoadButtons() {
    document.querySelectorAll('[data-map-load]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Consent is global, but only load THIS button's own map: the
        // sibling iframe of its [data-map-placeholder] container.
        writeConsent(true);
        var placeholder = btn.closest('[data-map-placeholder]');
        var container = placeholder ? placeholder.parentElement : null;
        var frame = container ? container.querySelector('iframe[data-consent-src]') : null;
        if (frame) loadFrame(frame);
      });
    });
  }

  /* ── Public API ───────────────────────────────────────────────────────── */
  window.dlOpenConsent = function () {
    var stored = readConsent();
    showBanner(stored || { thirdParty: false });
  };

  /* ── Init ─────────────────────────────────────────────────────────────── */
  function init() {
    wireFooterLinks();
    wireMapLoadButtons();

    var stored = readConsent();
    if (stored) {
      applyConsent(stored.thirdParty);
    } else {
      injectStyles();
      buildBanner();
      showBanner({ thirdParty: false });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
