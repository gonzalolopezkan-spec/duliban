# du Liban — Restaurante libanés en La Moraleja, Madrid

Single-page website para du Liban, restaurante de alta cocina libanesa en La Moraleja. Tres idiomas: ES (`index.html`), EN (`en/index.html`), AR (`ar/index.html`, RTL). Desde julio 2026 el diseño vigente es la **identidad de marca oficial** (antes vivía en `/brand`, promocionada a raíz en la rama `brand-definitivo`; el diseño "clásico" Cormorant/Satoshi vive solo en el historial de git, hasta el commit `9435c20`).

## Datos del restaurante (verificados, ya integrados)

- **Dirección:** Plaza de la Moraleja, C. de la Estafeta 2 · Local 4/5 · 28109 Alcobendas. **Discrepancia resuelta (27 jul 2026):** el complejo se llama comercialmente *Centro Comercial Plaza Moraleja* y se accede desde la *Plaza de la Fuente*; las dos son correctas. La web usa el nombre comercial ("Plaza de la Moraleja"), `legal.html` usa el registral ("Plaza de la Fuente"). El "Plaza de Fuentes 2, 28100" de la WordPress antigua era erróneo (CP mal).
- **Razón social:** DULIBAN DE LA MORALEJA 2025, S.L. · **CIF** B24950560 · domicilio registral: C. de la Estafeta 2 — Plaza de la Fuente, La Moraleja, 28109 Alcobendas (confirmado por el cliente 27 jul 2026, ya integrado en `legal.html`)
- **Teléfono:** +34 917 54 48 38 (lo contesta una IA, no una persona — el copy de la web debería ir también a su base de conocimiento)
- **WhatsApp:** +34 690 206 459 (`wa.me/34690206459` — solo icono del footer; los botones Reservar ya NO van por WhatsApp)
- **Email:** reservas@dulibanrestaurante.com (dominio "restaurante" singular — confirmado por el cliente)
- **Horario:** restaurante Mar–Dom 13:00–01:00 · Lun cerrado. **Cocina:** 13:00–16:30 y 20:00–23:30. Fuera del horario de cocina sigue habiendo coctelería/barra y shishas hasta el cierre (confirmado 27 jul 2026).
- **Perros:** admitidos en las dos terrazas · **Terrazas:** dos, una cubierta y otra exterior; se puede fumar shisha en ambas · **Shisha:** tradicional (tabaco y carbón natural), sin variantes de carbón ruso
- **Cocineros:** ❌ NO destacar a ninguno, ni nombre ni cara (petición expresa del cliente, 27 jul 2026). El jefe de cocina real no quiere aparecer; "Chef Fahed" no es el principal. Revisable más adelante si el chef cambia de opinión.
- **Platos clave:** *Hummus bil Pesto* (16 €) es el plato por el que la gente vuelve — creación de la casa, pesto **de pistacho** (no de albahaca). *Mawzet Kharouf* (35 €) es el que el cliente querría que se pidiera más.
- **Reservas online:** https://www.sevenrooms.com/explore/duliban/reservations/create/search/ (los 3 botones `.btn-reserve` + JSON-LD `acceptsReservations`)
- **Instagram:** eliminado de la web a petición del cliente (el handle nunca se confirmó)
- **Halal:** cocina 100% halal con certificado (badge en hero + banda USP `#halal` + JSON-LD). La entidad certificadora NO se conoce — no inventarla.
- **Shisha en terraza:** USP destacada junto al halal ("combinación única en Madrid" — claim del cliente)

## Tech stack

- HTML estático: 3 páginas espejo (~3000 líneas c/u) + `legal.html`. `en/` y `ar/` referencian assets con prefijo `../`. `ar/` es `dir="rtl"` con fuentes árabes (Noto Naskh Arabic, IBM Plex Sans Arabic) y reglas propias (p. ej. dígitos LTR en horarios).
- Tailwind CSS compilado: `npm run build:css` → `dist/styles.css` (config única `tailwind.config.js`, entrada `src/input.css`). **Recompilar tras tocar clases en cualquier HTML** — `content` cubre las 3 páginas + legal.html.
- Google Fonts: **Jost** (display + body; sustituta libre de Nobel del manual de marca) y **Allura** (script del wordmark).
- Vanilla JS: casi todo inline en cada HTML; dos externos compartidos con `defer`: `js/gallery.js` (filtros de galería) y `js/consent.js` (banner de cookies + gate de Google Maps; API `window.dlOpenConsent()`; localStorage `dl-consent-v1`; i18n es/en/ar por `document.documentElement.lang` y ruta a legal vía `data-legal` del script tag).

## Sistema de diseño (paleta de marca — NO cambiar sin discutirlo)

Mismos NOMBRES de token que siempre, remapeados a la paleta del manual (`brand_assets/brand_kit.md`):

| Token | Hex | Uso |
|---|---|---|
| `cream` | `#FAF7F0` | Fondo base |
| `sand` | `#EFE9DC` | Fondo alternativo |
| `cedar` | `#3C3D3F` | Texto principal, fondos oscuros |
| `cedar-deep` | `#262729` | Footer, headers |
| `teal` | `#00A6CE` | Acento PANTONE 312C (wordmark "du") |
| `gold` | `#85754E` | Ornamentos PANTONE 871C (NO texto pequeño) |
| `gold-soft` | `#C9B98C` | Acentos sobre fondos oscuros |
| `gold-deep` | `#6E6041` | Texto dorado AA (≥4.5:1 sobre cream) |
| `terracotta` | `#0A7390` | CTAs Reservar (turquesa oscurecido AA) |
| `terracotta-deep` | `#085F77` | CTA hover |
| `ink` | `#474749` | Texto neutro (gris de marca K87) |

Ornamentos PNG del manual en `brand_assets/` (logo_full, ornament_floral, pattern_arabesque_gold, border_geo2…). Hay 5 PNG sin trackear no referenciados — no borrar sin preguntar.

- **No usar Inter ni Roboto.** No añadir librerías JS. No emojis como iconos (SVG). `prefers-reduced-motion` en toda animación nueva. Mobile con decisiones propias, no "desktop encogido".

## Estructura de las páginas (en orden)

1. **Nav** — glass pill flotante: logo, links (Concepto · Carta · Cocina · **El espacio** · Eventos · Visítanos), lang switch ES·EN·AR, teléfono, botón Reservar (SevenRooms, target _blank)
2. **Hero** — vídeo `assets/hero-mezze.mp4`, textos esquinados `.seh-text` (bl: "La Moraleja · Madrid"; **br: badge "100% Halal certificado"**)
3. **Marquee** de la carta
4. **Banda USP `#halal`** (sin número, fondo cedar-elevated + arabesco): foto shisha + "Cocina 100% halal certificada. Shisha en la terraza." + 3 bullets
5. **01 Concepto**
6. **02 La carta** — acordeón 5 categorías (`menu-block[data-cat]`) + popup de platos (JS `PHOTO_BASE`/`DISH_PHOTOS`)
7. **03 La cocina** — zoom-parallax + carrusel horizontal `xc-card` (⚠️ la card puente `xc-card-bridge` y la card 01 DEBEN compartir imagen — cross-fade)
8. **— Pausa** Beirut · Madrid (banda oscura)
9. **04 El espacio** — galería filtrable (pestañas `data-filter` all/terraza/interior/bar/comida, 16 `figure[data-cat]`, fotos de `fotos/`). El atributo `data-cat` se comparte con el acordeón de la carta: los selectores de ambos JS están acotados a su contenedor — mantenerlo así.
10. **05 Eventos privados**
11. **06 Visítanos** — dirección, horario, contacto, mapa Google **gateado por consentimiento** (`iframe[data-consent-src]` + placeholder "Cargar mapa")
12. **Footer** — wordmark, nav, contacto (tel + WhatsApp), dirección enlazada a Google Maps, legales → `legal.html#…` + "Preferencias de cookies" (`data-cookie-prefs`)

## legal.html

Página única en español (noindex): `#condiciones`, `#privacidad`, `#cookies`. Redactada para lo que la web ES (estática, sin formularios ni analítica; único tercero: Google Maps gateado; reservas en SevenRooms como responsable externo). **Placeholder pendiente:** `[razón social y CIF pendientes de completar por el titular]`. El texto de cookies describe el mecanismo real de `js/consent.js` — si se cambia el comportamiento, actualizar el texto (y viceversa).

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
├── CLAUDE.md
├── index.html · en\index.html · ar\index.html   ← las 3 páginas (espejo, AR +~67 líneas)
├── legal.html                                    ← políticas (solo ES)
├── js\gallery.js · js\consent.js                 ← únicos JS externos
├── dist\styles.css                               ← Tailwind compilado (SE COMITEA)
├── src\input.css · tailwind.config.js · package.json
├── assets\hero-mezze.mp4
├── brand_assets\                                 ← logo + ornamentos del manual de marca
├── fotos\                                        ← 38 fotos nuevas normalizadas (galería etc.)
│   └── platos\                                   ← 37 WebP de plato (una por plato, 900px, ~2,5 MB en total)
├── fotos nuevas\                                 ← origen crudo (gitignored, NO tocar)
└── design-inspiration\
    ├── Du-Liban-Comida-Nueva-Carta.pdf
    └── real-fotos\                               ← 40+ fotos de la primera sesión
```

⚠️ Fotos VETADAS por el cliente (no volver a usar): `primer-plano-del-chef.jpeg` y `comiendo-abundante-mesa-lujo.jpeg` (siguen en real-fotos/ pero sin permiso de publicación). En general: ninguna foto con una cara como sujeto principal sin OK del cliente.

## SEO

JSON-LD `Restaurant` en las 3 páginas (tel/email/horario/`servesCuisine ["Lebanese","Halal"]`/`acceptsReservations`/keywords) + Open Graph + hreflang ES/EN/AR + favicon SVG inline.

## Repo

https://github.com/gonzalolopezkan-spec/duliban — trabajo actual en rama **`brand-definitivo`** (11 commits sobre main, sin pushear). `main` aún tiene la estructura antigua (clásico + /brand).

## Tareas pendientes conocidas (por impacto)

1. **Merge/push de `brand-definitivo`** cuando el usuario lo decida.
2. **Fotos de platos**: ✅ hecho el 4 ago 2026 — el cliente envió 37 fotos (retocadas con IA para casar con la paleta), convertidas a WebP en `fotos/platos/` y mapeadas en `DISH_PHOTOS` de las 3 páginas. Cubren **38 de los 42 platos**. Faltan **Warak Enab, Kebbeh Sajyeh, Soujok y Freekeh Djaj** (muestran hueco, no foto equivocada). Detalle en `fotos-stock/PLATOS-PENDIENTES-DE-FOTO.md`.
3. **Acceso a SevenRooms** pendiente de que lo dé el cliente. Objetivo: que el email post-visita enlace al formulario de reseña de **Google**. ⚠️ Google NO permite importar reseñas de terceros a su ficha — no prometerlo.
4. **¿El local de 2008 ya se llamaba du Liban?** Sin confirmar. Por eso `#concepto` dice "La cocina de la Plaza de la Moraleja abrió en septiembre de 2008" y no "du Liban abrió…". Si se confirma, se puede usar la versión fuerte.
5. **Entidad certificadora del halal**: sigue sin conocerse — no inventarla.
6. **Validar la URL de SevenRooms** en producción (la pasó el cliente; responde, pero conviene una reserva de prueba).
7. **Optimizar imágenes**: `.jpeg` → `.webp` + `srcset` (las 38 de `fotos/` y las de `design-inspiration/real-fotos/`; las de `fotos/platos/` ya van en WebP).
8. **og:image** con URL absoluta cuando haya dominio definitivo.
9. Borrar `fotos nuevas/` del disco cuando el cliente valide la selección.
10. **Ficha de Google Business**: activar el atributo "Admite perros" (la web ya lo dice, pero esas búsquedas se resuelven en Maps).

## Reglas de trabajo

- **Editar con `Edit`**, no reescribir archivos enteros salvo inevitable.
- **Todo cambio de contenido va a LAS TRES páginas** (ES/EN/AR, traducido — en AR con árabe real, dígitos arábigos orientales ١٢٣ en texto árabe y latinos en horas).
- Tras tocar clases Tailwind: `npm run build:css` y comitear `dist/styles.css`.
- No tocar paleta/tipografía sin justificación. No librerías JS nuevas.
- `/ui-ux-pro-max` solo para decisiones visuales nuevas.

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
