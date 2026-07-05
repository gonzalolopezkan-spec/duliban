/* ── El espacio · gallery filters (vanilla, no deps) ──────────────────────
   Supports multiple filter/grid instances on the same page. Clicking a
   [data-filter] button updates aria-pressed and toggles `hidden` on the
   matching figures in the nearest [data-gallery-grid]. */
(function () {
  document.querySelectorAll('[data-gallery-filters]').forEach((filters) => {
    const section = filters.closest('section') || document;
    const grid = section.querySelector('[data-gallery-grid]');
    if (!grid) return;

    const tiles = grid.querySelectorAll('[data-cat]');

    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn || !filters.contains(btn)) return;

      const filter = btn.getAttribute('data-filter');

      filters.querySelectorAll('[data-filter]').forEach((b) => {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });

      tiles.forEach((tile) => {
        const show = filter === 'all' || tile.getAttribute('data-cat') === filter;
        tile.classList.toggle('hidden', !show);
      });
    });
  });
})();
