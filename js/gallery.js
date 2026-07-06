/* ── El espacio · gallery filters (vanilla, no deps) ──────────────────────
   Supports multiple filter/grid instances on the same page. Clicking a
   [data-filter] button updates aria-pressed and toggles `hidden` on the
   matching figures in the nearest [data-gallery-grid].

   Mobile-only pagination: with the "all" filter active on narrow viewports,
   only the first PAGE_SIZE tiles show; a "Ver más" button reveals the next
   PAGE_SIZE each click. Desktop and non-"all" filters always show every
   matching tile (no pagination). */
(function () {
  const PAGE_SIZE = 7;
  const mqMobile = window.matchMedia('(max-width: 1023px)');

  document.querySelectorAll('[data-gallery-filters]').forEach((filters) => {
    const section = filters.closest('section') || document;
    const grid = section.querySelector('[data-gallery-grid]');
    if (!grid) return;

    const tiles = Array.from(grid.querySelectorAll('[data-cat]'));
    const moreWrap = section.querySelector('[data-gallery-more-wrap]');
    const moreBtn = moreWrap ? moreWrap.querySelector('[data-gallery-more]') : null;

    let currentFilter = 'all';
    let visibleCount = PAGE_SIZE;

    function render() {
      const paginate = currentFilter === 'all' && mqMobile.matches;
      let shownSoFar = 0;
      let totalMatching = 0;

      tiles.forEach((tile) => {
        const isMatch = currentFilter === 'all' || tile.getAttribute('data-cat') === currentFilter;
        let show = isMatch;
        if (isMatch) {
          totalMatching += 1;
          if (paginate) {
            shownSoFar += 1;
            show = shownSoFar <= visibleCount;
          }
        }
        tile.classList.toggle('hidden', !show);
      });

      if (moreWrap) {
        const remaining = paginate ? totalMatching - visibleCount : 0;
        moreWrap.classList.toggle('hidden', remaining <= 0);
      }
    }

    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn || !filters.contains(btn)) return;

      currentFilter = btn.getAttribute('data-filter');
      visibleCount = PAGE_SIZE;

      filters.querySelectorAll('[data-filter]').forEach((b) => {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });

      render();
    });

    if (moreBtn) {
      moreBtn.addEventListener('click', () => {
        visibleCount += PAGE_SIZE;
        render();
      });
    }

    if (mqMobile.addEventListener) mqMobile.addEventListener('change', render);
    else if (mqMobile.addListener) mqMobile.addListener(render);

    render();
  });
})();
