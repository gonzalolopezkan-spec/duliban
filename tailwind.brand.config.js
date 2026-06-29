/** @type {import('tailwindcss').Config} */
// Variante "imagen de marca" — mismos NOMBRES de token que el sitio actual,
// pero remapeados a la paleta del manual de marca oficial (brand_assets/brand_kit.md).
// Así las utilidades de Tailwind (bg-cream, text-cedar, text-gold-deep, …) heredan
// los colores de marca sin tocar una sola clase del HTML. Salida: brand/styles.css.
module.exports = {
  content: ['./brand/index.html'],
  theme: {
    extend: {
      colors: {
        // Bases claras (antes crema/arena) — base premium cálida y limpia
        cream: '#FAF7F0',
        sand: '#EFE9DC',
        // Oscuros (antes cedro) — carbón cálido neutro, asienta el oro + turquesa
        cedar: '#3C3D3F',
        'cedar-deep': '#262729',
        // Acento de marca: turquesa PANTONE 312C (decorativo / wordmark "du")
        teal: '#00A6CE',
        // Oro/oliva PANTONE 871C — ornamento (gold) y texto AA (gold-deep ≥4.5:1)
        gold: '#85754E',
        'gold-soft': '#C9B98C',
        'gold-deep': '#6E6041',
        // CTAs "Reservar" — turquesa de marca oscurecido a AA (texto crema ≥4.5:1)
        terracotta: '#0A7390',
        'terracotta-deep': '#085F77',
        // Texto neutro = gris de marca K87
        ink: '#474749',
      },
      fontFamily: {
        // Nobel no está libre en web → Jost (geométrica, mismo aire) como sustituta
        display: ['"Jost"', 'system-ui', 'sans-serif'],
        // Wordmark/logotipo script — Allura (sustituta libre del script del logo de marca)
        script: ['"Allura"', 'cursive'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        'wider-2': '0.18em',
        'widest-2': '0.32em',
      },
    },
  },
};
