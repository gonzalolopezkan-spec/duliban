# du Liban — Restaurante libanés en La Moraleja, Madrid

Single-page website para du Liban, un restaurante de alta cocina libanesa establecido en La Moraleja desde 2003.

## Datos del restaurante (verificados, ya integrados)

- **Dirección:** Plaza de la Moraleja, C. de la Estafeta 2 · Local 4/5 · 28109 Alcobendas
- **Teléfono:** +34 916 25 00 72
- **Email reservas:** reservas@dulibanrestaurants.com
- **Horario:** Mar–Sáb 13:00–16:00 · 20:00–00:00 · Dom 13:00–17:00 · Lun cerrado
- **Reservas online:** https://restauranteduliban.es/reservations/
- **Instagram:** @dulibanrestaurant *(handle a confirmar)*

## Tech stack

- HTML estático en un solo archivo `index.html` (~1700 líneas)
- Tailwind CSS vía Play CDN (`https://cdn.tailwindcss.com`)
- Google Fonts: Cormorant Garamond, Allura
- Fontshare: Satoshi (cuerpo)
- Vanilla JS para interacciones — **sin librerías externas**
- Sin build step (pendiente migrar Tailwind a CLI para producción)

## Sistema de diseño (NO cambiar sin discutirlo)

### Paleta — 6 colores, disciplinada

| Token | Hex | Uso |
|---|---|---|
| `cream` | `#F5EFE3` | Fondo base |
| `sand` | `#EADFCB` | Fondo alternativo, paneles de detalle abiertos |
| `cedar` | `#2F4A3E` | Texto principal, fondos secciones oscuras |
| `cedar-deep` | `#1F3329` | Headers de platos, footer |
| `teal` | `#5FAFA8` | Wordmark script "du Liban" (viene de la PDF) |
| `gold` (`saffron`) | `#BFA15A` | Ornamentos, eyebrows |
| `gold-deep` (`burnished`) | `#8B6F2E` | Precios en la carta (pasa WCAG AA en cream) |
| `gold-soft` | `#D9C490` | Acentos sobre fondos oscuros |
| `terracotta` | `#B4533C` | CTAs "Reservar" |
| `terracotta-deep` | `#8E3E2C` | CTA hover |
| `ink` | `#1A1A17` | Texto neutro |

### Tipografía

- **Display + precios:** Cormorant Garamond (Google Fonts) — 300–700, italic disponible
- **Script wordmark "du Liban":** Allura (Google Fonts) — viene del logo de la PDF
- **Body:** Satoshi (Fontshare) — 300, 400, 500, 700. **NUNCA Inter ni Roboto** (criterio explícito del checklist 10k€)

### Motivos visuales

- Ramas de olivo SVG (vienen de los ornamentos de la PDF original)
- Ornamentos dorados con `.ornament` class (líneas + eyebrow)
- Fondo cream con paper-grain SVG superpuesto (multiply ~35%) — añade tactilidad
- Gradientes radiales sutiles teal/terracotta en secciones "elevadas" (`.bg-elevated`, `.bg-elevated-deep`, `.bg-cedar-elevated`)
- Rail editorial en cada sección: `01 · Concepto`, `02 · La carta`, etc. (`.sec-mark`)
- Watermark de rama de olivo gigante en esquinas opuestas a 6% opacidad (`.corner-olive`)

## Estructura del index.html (en orden)

1. **Preloader** — Stroke-draw handwritten "du Liban" en SVG, fade tras 1.1s
2. **Nav** — Glass pill flotante, top-spaced del edge, phone + Reservar siempre visibles
3. **Hero** — Wordmark display "DU LIBAN", olive branch SVG con sway, foto cinemática
4. **Marquee** — Italic Cormorant scrolling con palabras de la carta + dots dorados (38s loop)
5. **01 Concepto** — "Tres generaciones, una sola mesa" + 2 fotos staggered + quote
6. **02 La Carta** — Tag "Carta de verano vigente 2026" + headline + TOC vertical 5 actos + descripción → foto cinemática del horno → acordeón 5 categorías con popup hover por plato
7. **03 La Cocina** — Quote del equipo + 5-tile editorial gallery (5/12 hero + 2×2 + full-width)
8. **Pausa Beirut · Madrid** — Sección cedar oscura con script gigante de fondo, CTAs
9. **04 Eventos privados** — Foto 6/6 + pitch con bullets dorados (embajada/catering/halal)
10. **05 Visítanos** — Dirección + horario + contacto + mapa Google con filtro sepia
11. **Footer** — Wordmark gigante relleno de foto con parallax + nav links + socials

## Interacciones handcrafted (ya implementadas)

Todas respetan `prefers-reduced-motion`.

- **Custom cursor** — dot (6px) + ring (36px) laggy con mix-blend-difference. Solo desktop fine pointer. Se expande sobre interactivos.
- **Magnetic CTAs** — los 3 botones "Reservar" se trasladan según proximidad del cursor (`data-magnetic`).
- **Photo tilt 3D** — cada `.tile` rota ±5deg con perspective 900px según posición del cursor.
- **Word-by-word mask reveal** — headlines con `.word-reveal`. JS envuelve cada palabra al cargar y las desliza desde abajo con stagger de 60ms.
- **Acordeón de la carta**:
  - Barra cedar `rounded-xl` que se expande desde el centro (no left-wipe)
  - Inset 6px arriba/abajo → no es edge-to-edge → respira
  - Title centrado, thumbs 108×74 que slide-in desde 310px del centro al hover/activo
  - Arrow rota: + → 90deg (hover) → 45deg = × (expandido)
  - Detail panel: fondo sand con border-radius bottom, margin -10px arriba para fluir desde la barra
- **Dish-photo popup** — al hover/tap sobre `.dish-name`: card 380px con eyebrow categoría, nombre + precio gold, 2 fotos polaroid rotadas ±1.4°, descripción italic con hairline arriba. Smart-positioning lateral con clamp al viewport.
- **Parallax footer wordmark** — background-position-y se mueve con el scroll
- **Marquee** — pause-on-hover, gold dot separators

## Carta (datos reales de la PDF oficial)

5 categorías, ~40 platos con precios reales:

- **Del Horno** (4): Kafta bil Jebneh 15€, Lahme bi Aajin 13€, Manoucheh Jebneh 12€, Zaatar & Labneh 12€
- **Mezze Frío** (11): Fattoush 14€, Tabbouleh 13€, Salata al Jarjir 12€, Salata al Rubyan 18€, Hummus 13€, Hummus bil Pesto 16€, Moutabal 12€, Warak Enab 14€, Muhammara 14€, Ariche bel Zaatar 15€, Quinoa ma al Shamandar 14€
- **Mezze Caliente** (13): Hummus Lahme 17€, Rass Assfour 22€, Fatteh al Rubyan 22€, Fatteh Djaj 20€, Hallumi 17€, Kebbeh Sajyeh 13€, Hummus Falafel 16€, Batata Meklieh 10€, Batata Harrah 13€, Jawaneh Dajaj 17€, Soujok 18€, Rakakt Jebneh 13€, Okhtobut bil Thoum 25€
- **Masheweh · A la brasa** (9): Taouk 23€, Farrouj 26€, Lahmeh Mshwieh 32€, Kabab 23€, Mawzet Kharouf 35€, Shawarma Lehme 26€, Freekeh Djaj 27€, Okhtobut Mashwi 26€, Samak Mashwi 58€
- **Postres** (5): Em Ali 15€, Mafroukit Ashta 14€, Aish el Saraya 12€, Knefeh 14€, Mhalabieh 11€

## Archivos del proyecto

```
C:\Duliban\
├── CLAUDE.md                              ← este archivo (contexto auto-cargado)
├── index.html                             ← la web entera
├── .gitignore
└── design-inspiration\
    ├── Du-Liban-Comida-Nueva-Carta.pdf   ← carta oficial (precios e ingredientes)
    ├── real-fotos\                        ← 40+ FOTOS REALES del restaurante
    │   ├── interior-del-restaurante-1.jpeg, -2.jpeg
    │   ├── primer-plano-del-chef.jpeg
    │   ├── cocinando-horno.jpeg
    │   ├── cocinando-pescado-parrilla.jpeg
    │   ├── montando-platos-1.jpeg ... -5.jpeg
    │   ├── primer-plano-diagonal-plato-1.jpeg ... -6.jpeg
    │   ├── primer-plano-aero-postre-1.jpeg ... -3.jpeg
    │   ├── camarero-sirviendo-mesa-1.jpeg, -2.jpeg
    │   ├── camarero-sirviendo-pescado.jpeg
    │   ├── terraza-bar-noche-1.jpeg, -2.jpeg
    │   ├── cena-elegante-de-noche-1.jpeg, -2.jpeg
    │   ├── mesa-comida-lujo-abundante.jpeg
    │   ├── comiendo-abundante-mesa-lujo.jpeg
    │   ├── bebiendo-abundante-mesa-lujo.jpeg
    │   ├── primer-plano-montando-cocktail-1.jpeg, -2.jpeg
    │   ├── detalles-bonitos-decoración-1.jpeg ... -3.jpeg
    │   ├── condimentos.jpeg
    │   ├── amigas-al-atardecer.jpeg
    │   ├── plano-aereo-probando-comida.jpeg
    │   ├── plano-diagonal-probando-comida.jpeg
    │   └── lujo-revisando-el-menu.jpeg
    ├── hero-section.png                   ← referencia de layout (Fjordsmaken-style)
    ├── chef-quote-with-galery-...png      ← referencia gallery
    ├── way-of-showing-off-the-food-menu.png ← referencia acordeón carta
    ├── footer-section.png                 ← referencia footer wordmark fill
    ├── handwritting-animation.png         ← referencia handwriting SVG
    ├── preloader\                         ← referencias preloader food crumble
    └── sections-displays-i-like\          ← más referencias de layout
```

## SEO ya implementado

- JSON-LD `Restaurant` schema con dirección, teléfono, email, horarios
- Open Graph + Twitter card meta
- Favicon SVG inline (rama de olivo en cedar sobre cream)

## Repo

https://github.com/gonzalolopezkan-spec/duliban — `main` branch

## Tareas pendientes conocidas (por impacto)

1. **Cambiar placeholders Unsplash por fotos reales** de `design-inspiration/real-fotos/`. Es la mejora visible #1 — pasaría imagery score de 6/10 a 9+/10.
2. **Migrar Tailwind del CDN a build step** (Tailwind CLI → CSS estático, ~80KB menos).
3. **Optimizar imágenes reales:** `.jpeg` → `.webp`, generar `srcset` para responsive.
4. **Confirmar handle real de Instagram** (`@dulibanrestaurant` es suposición).
5. **Pulir microcopy** del story / chef bio — el copy actual es provisional.

## Reglas de trabajo

- **No añadir librerías JS nuevas** sin discutirlo. Todo vanilla + Tailwind.
- **No tocar la paleta ni la tipografía** sin justificación.
- **No usar emojis como iconos** — SVG (Heroicons / Lucide).
- **`prefers-reduced-motion` respetado** en cualquier animación nueva.
- **Mobile no es "desktop encogido"** — decisiones específicas por viewport.
- **Editar `index.html` con `Edit`**, no reescribir entero con `Write` salvo cuando sea inevitable.
- **No usar Inter ni Roboto** como fuente del body — criterio explícito del checklist 10k€.
- **`/ui-ux-pro-max`** se invoca solo para decisiones visuales nuevas, no para cada cambio.

## Cuándo invocar qué skill

| Tarea | Skill |
|---|---|
| Diseñar sección nueva, decisiones estéticas | `/ui-ux-pro-max` |
| Pulido visual concreto, micro-interacciones | `frontend-design:frontend-design` |
| Verificar cambio en navegador | `/verify` |
| Revisar diff antes de commit | `/code-review` |
| Limpieza de código ya construido | `/simplify` |
| Levantar y abrir la web | `/run` |
| Copy, swaps de imágenes, fixes pequeños | Ninguna — trabajo directo |
