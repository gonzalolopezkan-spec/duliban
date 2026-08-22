# Prompt para el nuevo chat de Claude Code — bloque web

> ⚠️ **CORRECCIÓN del 21 ago 2026, posterior al envío del prompt.** Esta rama
> (`claude/duliban-local-seo-plan-9c005a`, en `74a80b1`) **no incluye** el commit
> `1d3f82b` "Photograph Warak Enab and Kebbeh Sajyeh, and serve the right manoucheh",
> que vive en `claude/web-dish-photos-066d3e`. Consecuencias:
>
> - Los platos sin foto son **2** (Soujok y Freekeh Djaj), no 4. Aquí se ven 38 entradas
>   en `DISH_PHOTOS`; en la otra rama hay 40, que es lo que el cliente ha revisado.
> - El cliente dio su feedback sobre **esa** versión, no sobre esta.
> - W1 y W2 tocan `index.html` en zonas cercanas → conflicto casi seguro al fusionar.
>
> **Antes de tocar nada, el chat nuevo tiene que traerse `1d3f82b`** (rebase o merge de
> `claude/web-dish-photos-066d3e`) y confirmar que quedan 40 entradas en `DISH_PHOTOS`.
> El texto de abajo queda tal cual salvo por esto.

Copiar todo lo que hay dentro del bloque, pegarlo en un chat nuevo abierto **en este
mismo worktree** (`C:\Duliban\.claude\worktrees\menu-dish-photos-efa331`, rama
`claude/duliban-local-seo-plan-9c005a`).

---

```
Vas a ejecutar el bloque WEB del plan de SEO local de du Liban, más dos peticiones
que acaba de mandar el cliente. Todo lo que hay aquí es trabajo nuestro: no depende
de ninguna respuesta pendiente del restaurante.

Contexto obligatorio antes de tocar nada — léelos:
  · CLAUDE.md               (reglas del proyecto; se aplican enteras)
  · SEO-LOCAL-PLAN.md       (diagnóstico completo, con §1.4 de aparcamiento verificado)
  · SEO-LOCAL-REPARTO.md    (qué es nuestro y qué no)

═══════════════════════════════════════════════════════════════════
PARTE 1 — Feedback del cliente (hazlo primero, es lo que están esperando)
═══════════════════════════════════════════════════════════════════

W1 · HORARIOS MUCHO MÁS VISIBLES

El cliente dice, literalmente: "it should be clearly highlighted that Kitchen
13:00–16:00 and 20:00–23:30, Restaurant open 13:00–01:00, 16:00–20:00 cocktails
& shisha only, 23:30–01:00 cocktails & shisha only. This will help avoid customers
coming during the kitchen closing hours expecting to order food."

Hoy esto vive medio escondido en el bloque "Antes de venir" de #visitanos, y encima
está MAL: pone "Comidas 13:00 – 16:30" y son las 16:00.
  · index.html:2637 · en/index.html:2636 · ar/index.html:2702

Qué hay que hacer:
  a) Corregir 16:30 → 16:00 en las tres páginas.
  b) Rediseñar el bloque de horario de #visitanos para que las cuatro franjas se lean
     de un vistazo y quede claro CUÁNDO SE PUEDE COMER y cuándo solo hay barra:
        Restaurante ....... Mar–Dom 13:00 – 01:00   (Lunes cerrado)
        Cocina ............ 13:00 – 16:00  ·  20:00 – 23:30
        Solo coctelería y shisha ... 16:00 – 20:00  ·  23:30 – 01:00
     Es el problema real que quieren evitar: gente que llega a las 17:00 a comer.
  c) Valora si además merece la pena una señal en el hero o en la nav (algo discreto
     tipo "Cocina 13:00–16:00 · 20:00–23:30"). Propónmelo antes de hacerlo, no lo
     des por hecho.
  d) A las TRES páginas, traducido. En árabe, árabe real; dígitos arábigos orientales
     en prosa y latinos en las horas, como ya se hace en el resto de la página.
  e) Diseño: usa el sistema que ya existe (.hours-row, tokens de la paleta). No
     inventes componentes nuevos ni cambies la paleta ni la tipografía.

W2 · BUG — la foto del plato desaparece al hacer zoom

El cliente dice: "the photos disappear normally when scrolling, which is fine.
However, when you zoom in on the menu, the dish photo disappears as well. Ideally
the photo should remain visible when zooming in."

Causa localizada: index.html:3352 (y su equivalente en en/ y ar/) hace
    window.addEventListener('resize', () => hidePopup());
y el zoom del navegador dispara un evento `resize`. Por eso se cierra el popup.

Arreglo propuesto: en lugar de cerrar, RECOLOCAR. Ya existe positionPopup(dish, instant):
    window.addEventListener('resize', () => {
      if (activeDish && popup.classList.contains('open')) positionPopup(activeDish, true);
      else hidePopup();
    });

Ojo con dos cosas antes de darlo por bueno:
  · En móvil el pinch-zoom NO dispara `resize` de window sino `visualViewport.resize`,
    y getBoundingClientRect devuelve coordenadas del layout viewport. Puede que el
    popup acabe fuera de la pantalla visible. Compruébalo y, si hace falta, usa
    window.visualViewport.
  · El scroll debe SEGUIR cerrando el popup (línea 3351). El cliente dice
    expresamente que ese comportamiento está bien.

Verifica el arreglo de verdad, no por inspección: zoom con Ctrl +/- en escritorio
y pinch en viewport móvil. Nada de .click() programático — en este proyecto ya dio
falsos positivos; usa clics reales del navegador.

═══════════════════════════════════════════════════════════════════
PARTE 2 — Bloque web del plan de SEO local
═══════════════════════════════════════════════════════════════════

B1 · hreflang absolutos + canonical
    Hoy son relativos (index.html:16 y equivalentes) y por eso el clúster ES/EN/AR
    no se forma. Dominio canónico: https://dulibanrestaurante.com (el www hace 308
    al apex, ya comprobado). Formas canónicas: / · /en/ · /ar/ · /legal.html
    Añade rel="canonical" autorreferencial en las cuatro páginas.
    ⚠️ NO redirijas /index.html → / en vercel.json: con outputDirectory "." hay
    riesgo de bucle. Ese duplicado se resuelve solo con el canonical.

B2 · robots.txt + sitemap.xml
    Ahora mismo los dos dan 404 en producción. El sitemap con las 3 páginas
    (legal.html va noindex, así que fuera).

B3 · 301 de las URLs muertas, en vercel.json
    Google todavía enseña un sitelink "Nosotros" bajo el resultado #1 que lleva a
    un 404. Mapa:
      /galeria/            → /#espacio
      /nosotros/           → /#concepto
      /servicios/          → /#eventos
      /condiciones-de-uso/ → /legal.html#condiciones
    Y por si acaso: /carta/ /menu/ /contacto/ /reservas/ /blog/ → /
    Verifica con curl que devuelven 301 y no 308 hacia sitios raros.

B4 · JSON-LD enriquecido, en las 3 páginas
    Añadir al Restaurant que ya existe:
      "@id": "https://dulibanrestaurante.com/#restaurant"  (mismo @id en las 3)
      "url", "geo" → 40.5144083 / -3.6527684
      "hasMap": "https://maps.google.com/?cid=4211647486579061917"
      "sameAs": ficha de Google (misma URL del cid), Instagram
                (instagram.com/dulibanrestaurante), Facebook
                (facebook.com/RestauranteDuLiban) y Tripadvisor
                — la URL exacta de Tripadvisor búscala y verifícala, no la inventes.
      "currenciesAccepted": "EUR", "paymentAccepted"
      openingHoursSpecification separado para la COCINA: 13:00–16:00 y 20:00–23:30,
      martes a domingo. El principal sigue siendo 13:00–01:00.
    Para la shisha NO uses smokingAllowed:true (diría que se fuma en todo el local,
    y es solo en las terrazas). Usa amenityFeature con LocationFeatureSpecification.
    Valida el resultado en el validador de schema.org antes de dar por cerrado.

B5 · Schema de carta completo
    Menu + 5 MenuSection + los 42 MenuItem con nombre, descripción, precio (EUR),
    foto de fotos/platos/ cuando exista y "suitableForDiet": "https://schema.org/HalalDiet".
    Los datos están en el acordeón de #carta y en CLAUDE.md; los precios están
    confirmados como vigentes (21 ago 2026). Cuatro platos no tienen foto a propósito
    (Warak Enab, Kebbeh Sajyeh, Soujok, Freekeh Djaj): déjalos sin image, no
    inventes ni rellenes con otra.
    Es mucho JSON: genera el bloque con un script en el scratchpad a partir del HTML
    en vez de escribirlo a mano, y hazlo en los tres idiomas.

B6 · og:image absoluta 1200×630 + og:url
    Hoy la ruta es relativa y no resuelve al compartir. Hace falta un asset real de
    1200×630 — comprueba primero qué herramienta de imagen hay disponible en el
    equipo antes de prometer nada. Si no hay forma de generarlo, dímelo y elegimos
    una foto existente con recorte aceptable, pero no dejes un og:image roto.

B8 · Enlazar la web con la ficha
    Botones "Ver en Google Maps" y "Escribir una reseña" en #visitanos y en el footer,
    en las 3 páginas. El enlace de reseña lo generamos desde el panel; hasta entonces
    usa https://search.google.com/local/writereview?placeid=... y déjame un TODO
    visible con el placeid pendiente.

B9 · alt descriptivos con contexto local
    ~70 fotos de galería + 37 de plato, en las 3 páginas.
    Bien: alt="Terraza cubierta de du Liban en la Plaza de la Moraleja"
    Mal:  alt="terraza"
    En cada idioma, en su idioma.

B10 · <title> de las 3 páginas
    ES: du Liban — Restaurante libanés halal en La Moraleja (Alcobendas, Madrid)
    EN y AR: el equivalente. Sin amontonar keywords.

B11 · WebP + srcset
    Las 38 de fotos/ y las de design-inspiration/real-fotos/. Las de fotos/platos/ ya
    están en WebP. Comprueba primero qué conversor hay instalado; si no hay ninguno,
    para y dímelo — mejor no hacerlo que dejarlo a medias.
    OJO: las imágenes se sirven con Cache-Control immutable (vercel.json). Cambiar
    los bytes de un archivo existente no llega a nadie; los .webp son nombres nuevos,
    así que no hay problema, pero no sobrescribas .jpeg existentes esperando que se
    actualicen.

═══════════════════════════════════════════════════════════════════
FUERA DE ALCANCE — no lo toques
═══════════════════════════════════════════════════════════════════
· B7 (contenido local + FAQ de #visitanos). Las respuestas de aparcamiento y
  delivery dependen del restaurante y todavía no han contestado.
· TODO el bloque A: la ficha de Google Business Profile. Se hará en otro chat.
· Bloque C (citaciones y dominios) y bloque D (reseñas).
· Search Console (E1): hay que tocar el DNS en el registrador, lo hago yo.
· Analítica: la web declara en legal.html que NO tiene analítica. No añadas GA4 ni
  ningún script de terceros. Si crees que hace falta, pregúntame.

═══════════════════════════════════════════════════════════════════
CÓMO TRABAJAR
═══════════════════════════════════════════════════════════════════
· Todo cambio de contenido va a las TRES páginas, traducido.
· Edita con Edit, no reescribas archivos enteros.
· Si tocas clases Tailwind: npm run build:css y comitea dist/styles.css.
· Commits pequeños y en español, uno por tarea (W1, W2, B1…). NO hagas push sin
  pedírmelo.
· Verifica en navegador lo que sea verificable (W1, W2, B8) antes de darlo por hecho.
  Screenshot como prueba.
· Empieza por W1 y W2, que son lo que espera el cliente, y páramelos a revisar antes
  de seguir con B1–B11.
· Si algo del plan choca con lo que ves en el código, dímelo en vez de improvisar.
```

---

## El segundo chat (la ficha de Google) — todavía no

El bloque A también es "nuestra parte" y tenemos el acceso, pero conviene esperar a que
contesten el WhatsApp para hacerlo de una sola pasada: A3 (descripción), A7d, A8, A11 y
A18 dependen de esas respuestas, y no tiene sentido entrar dos veces a la ficha.

Lo que **ya** se puede hacer sin respuesta (A6, A7abc, A9, A10, A15, A16, A17) son
cambios en un perfil público y en vivo. Cuando toque, ese chat debería ir de uno en uno,
con captura antes y después de cada cambio, y usando `authuser=7`
(ver `SEO-LOCAL-REPARTO.md` y la memoria del proyecto).
