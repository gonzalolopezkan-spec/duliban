/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scans the single page for utility classes (incl. arbitrary values like text-[11px]).
  content: ['./index.html'],
  theme: {
    extend: {
      // Same disciplined palette as the design system. Prices/eyebrows use gold-deep
      // and CTAs use terracotta at AA-compliant darkness (see :root in index.html).
      colors: {
        cream: '#F5EFE3',
        sand: '#EADFCB',
        cedar: '#2F4A3E',
        'cedar-deep': '#1F3329',
        teal: '#5FAFA8',
        gold: '#BFA15A',
        'gold-soft': '#D9C490',
        'gold-deep': '#7C6226',
        terracotta: '#A64A33',
        'terracotta-deep': '#8E3E2C',
        ink: '#1A1A17',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        script: ['"Allura"', 'cursive'],
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        'wider-2': '0.18em',
        'widest-2': '0.32em',
      },
    },
  },
};
