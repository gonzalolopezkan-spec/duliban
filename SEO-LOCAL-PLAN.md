# Plan de SEO local — du Liban

> **Auditoría del 21 de agosto de 2026**, con acceso real al panel de gestión del Perfil
> de Empresa (`dulibanrestaurants12@gmail.com`, authuser=7), a la ficha pública de Maps,
> a la web en producción `https://dulibanrestaurante.com/` y a la SERP de marca.
> Todo lo del apartado "Diagnóstico" está verificado con captura. Lo que no he podido
> comprobar va marcado como **[por confirmar]**.
>
> *Nota de transparencia: no he modificado nada del perfil. Lo único que toqué fue
> descartar el aviso informativo "Your attributes were updated by Google", que no altera
> ningún dato.*

---

## 0. Datos de la ficha

| Dato | Valor |
|---|---|
| Nombre en Google | `Du Liban` |
| Listing ID | `12463721574457408819` |
| CID | `4211647486579061917` → `https://maps.google.com/?cid=4211647486579061917` |
| Coordenadas | `40.5144083, -3.6527684` · Plus Code `G87W+QV Alcobendas` |
| Cuenta gestora | **`dulibanrestaurants12@gmail.com`** ("Duliban Restaurants") |
| Valoración | **4,4 ★ · 1.180 reseñas** |
| Interacciones mar–ago 2026 | **4.966** |
| Vistas del perfil último mes | **4.210** |
| Fuerza del perfil (según Google) | **Incompleto** |

---

## 1. Diagnóstico

### 1.1 El titular

**La ficha de Google sigue siendo la del restaurante anterior a la reforma.** No es que
esté "poco optimizada": es que describe otro negocio. La prueba más clara está en las
publicaciones, que siguen vivas y visibles:

```
Publicada hace 4 años  →  "Delivery (Glovo) Take Away (10% descuento) al 917544838"
Publicada hace 6 años  →  "Best lebanese food in Madrid!"
Publicada el año pasado →  (una foto, sin texto)
```

Tres publicaciones en seis años, la más reciente de hace un año. Y la descripción del
negocio, que es el texto que el propietario controla, dice literalmente:

> `Best Lebanese food! Reserva online. Delivery & Take Away available.`

67 caracteres de los 750 disponibles, mitad en inglés y mitad en español, empezando por
un superlativo (que además va contra las directrices de contenido de Google) y vendiendo
delivery. Ni una palabra de **halal**, **shisha**, **terraza**, **La Moraleja** ni
**eventos privados** — es decir, ninguna de las cosas por las que hoy existe du Liban.

Todo lo demás que sigue es consecuencia de esto.

### 1.2 Lo que está bien y no hay que tocar

- **1.180 reseñas con 4,4 ★.** Los restaurantes que entran en top-3 del pack local
  promedian ~560 reseñas. du Liban dobla esa cifra.
- **La respuesta a reseñas recientes es excelente.** La última reseña entró hace 23 h y
  se respondió en 20 h. Y las respuestas están escritas, no son plantillas.
- **WhatsApp configurado como canal de chat** (`wa.me/34690206459`) — muy poca gente lo
  tiene puesto.
- **Redes enlazadas correctamente**: `facebook.com/RestauranteDuLiban` e
  `instagram.com/dulibanrestaurante`.
- **Horarios bien montados**, incluidos los secundarios: `Hora feliz 16:00–20:00` y
  `Cocina 13:00–16:00, 20:00–23:30`.
- **Reserva integrada con Google Reserve** (vía SevenRooms): el botón "Reservar una mesa"
  funciona nativamente dentro de Google.
- **La web nueva rankea #1** en marca y ya está indexada.

### 1.3 Los problemas, por impacto

#### P1 — La carta que Google enseña la controla un agregador de delivery

En *Edit menu* la fuente seleccionada es:

```
Yemeksepeti  ✓  34 items
```

**La carta de la ficha viene de la base de datos de una plataforma de reparto** (grupo
Delivery Hero), con 34 platos, y no de du Liban. Por eso los "platos populares" que
muestra Google son *Tabbouleh* y **"Rakakat Jibneh 4 Uds"** — un nombre de producto de
delivery que ni siquiera coincide con el *Rakakt Jebneh* de la carta oficial.

La carta real tiene **42 platos en 5 categorías** con precios y, desde el 4 de agosto,
**37 fotos propias en WebP**. Nada de eso está en Google. El panel ofrece el botón
"Create or copy a menu", así que se puede publicar la carta real de forma nativa.

Y para rematar: el campo **"Menu or services link" apunta a la URL de reservas de
SevenRooms**. Quien pulsa "Menú" en Google acaba en un widget de reserva.

#### P2 — El delivery está encendido, sin proveedor preferente, y es el eje del mensaje

*Food ordering* está **activado**, con tres proveedores y **ninguno marcado como
preferente**:

| Proveedor | Estado |
|---|---|
| `dulibanrestaurante.com` | Ofrece recogida y entrega *(la web no tiene ningún sistema de pedidos)* |
| **Glovo** | Ofrece recogida y entrega |
| **Uber Eats** | Ofrece recogida y entrega |

Además hay un **área de servicio** configurada que cubre media Comunidad de Madrid
(*Cuenca del Guadarrama*, *Cuenca Alta del Manzanares*, *Área Metropolitana y Corredor
del Henares*).

Esto plantea una decisión de negocio, no solo de SEO. **[por confirmar]**

- Si el delivery **sigue activo**: hay que marcar un proveedor preferente (el que menos
  comisión cobre), quitar la entrada falsa de `dulibanrestaurante.com` y ajustar el área
  de servicio a lo real.
- Si **ya no se hace delivery** (que es lo que sugiere todo lo demás del proyecto): hay
  que apagarlo entero, quitar los atributos *A domicilio* / *Para llevar*, borrar el área
  de servicio y borrar la publicación de Glovo. Cada pedido que entra por ahí es una
  expectativa que el restaurante ya no cumple.

En cualquiera de los dos casos, un restaurante de 30–40 € por persona que se posiciona
en Google como "Delivery & Take Away" se está posicionando **contra** su propio ticket
medio.

#### P3 — Google ha metido atributos negativos que se contradicen con la propia ficha

El panel avisa: *"Your attributes were updated by Google"*. Varios atributos están
puestos por inferencia de Google, no por el negocio. Dos son directamente falsos:

| Atributo actual | Realidad |
|---|---|
| **"No late-night food"** (no sirve cenas tardías) | La cocina cierra a las 23:30 y la barra sigue hasta la 1:00 |
| **"No happy-hour drinks"** (no tiene hora feliz) | **La propia ficha publica "Hora feliz 16:00–20:00"** |

El segundo es una contradicción interna de la ficha consigo misma. Ambos se pueden
sobrescribir a mano desde *Offerings*.

#### P4 — La USP entera está ausente de la ficha

Lista completa de atributos activos hoy (pestaña *Información*):

```
Accesibilidad     Acceso / aparcamiento / aseo / asientos para sillas de ruedas
Opciones servicio Terraza · A domicilio · Para llevar · Comer allí
Destacado         Buen café · Carta de tés · Carta de vinos · Cócteles · Postres ·
                  Chimenea · Sin música en directo · No es sitio de ver deporte
Popular por       Comida · Cena · Cenar solo
Qué ofrece        Alcohol · Café · Cerveza · Cócteles · Comida saludable · Vegetariana ·
                  Licores · Platos veganos · Vino · SIN comida tardía · SIN hora feliz
Opciones local    Comida · Cena · Postres · Sitio para sentarse · Servicio en mesa
Servicios         Aseos · Bar · Wi-Fi · Wi-Fi gratis
Ambiente          Acogedor · De moda · Exclusivo · Romántico · Tranquilo
Clientela         Grupos · Ideal para familias
Planificación     Se recomienda reservar · Es obligatorio reservar · Se aceptan reservas
Pagos             NFC · Tarjetas de crédito · Tarjetas de débito
Niños             Tronas
Aparcamiento      Muchas plazas libres · De pago · En la calle de pago · Propio ·
                  Parking de pago · Aparcacoches   ← seis a la vez, incompatibles
```

Lo que **no** aparece por ningún lado:

- ❌ **Halal.** Cocina 100% halal certificada, y en la ficha no hay ni atributo, ni
  descripción, ni categoría, ni publicación. `restaurante halal Madrid` y
  `comida halal cerca de mí` son búsquedas de altísima intención en las que du Liban
  hoy no compite desde Maps.
- ❌ **Shisha.** Solo lo menciona el resumen editorial que redactó Google, que no
  controlamos.
- ❌ **Se admiten perros.** Está en la web pero no en la ficha, y esa búsqueda se resuelve
  en Maps (ya estaba pendiente en `CLAUDE.md`).
- ❌ Sin gluten, menú infantil, espacio para eventos privados.
- ❌ **Fecha de apertura vacía** (2008 sería una señal de antigüedad y confianza).
- ❌ **"From the business"** (atributos de identidad) vacío.
- ❌ **Horarios especiales sin configurar**: ni festivos, ni Navidad, ni agosto.

#### P5 — Solo hay una categoría secundaria, y es la más genérica posible

```
Lebanese restaurant   [PRIMARIA]   ✓ correcta
Mediterranean restaurant           ← única secundaria
```

Google permite hasta 9 secundarias y cada una es una puerta de entrada a un conjunto
distinto de búsquedas. Faltan las que describen lo que du Liban realmente es:
*Restaurante de Oriente Medio*, *Restaurante halal*, *Bar de cócteles*, *Salón de
shisha*, *Local para eventos*.

#### P6 — Las Preguntas y respuestas están vacías

El bloque no aparece en el perfil público: cero preguntas. Es un espacio que, si no lo
llenas tú, lo llena cualquiera — y las respuestas de terceros suelen ser incorrectas.
Google permite expresamente que el negocio publique y responda sus propias preguntas.

#### P7 — Hay un dominio zombi con contenido de du Liban y datos equivocados

| Dominio | Estado (comprobado) | Problema |
|---|---|---|
| **`dulibangourmet.com`** | **Vivo e indexado** | Web de du Liban con **horario falso** ("Open Daily: 10 AM – 12 AM"), dirección *"Calle de Ejemplo 123"* y teléfono *"+34 910 000 000"* |
| `dulibanrestaurants.com` | Vivo, aparcado | Página de publicidad de hosting indexada bajo el nombre de la marca |
| `restauranteduliban.es` | Conexión rechazada | Muerto, pero Facebook lo sigue citando |

`dulibangourmet.com` es contenido de marca real (menciona La Moraleja, terrazas y shisha)
con NAP inventado. Para Google es una señal contradictoria sobre cuál es el teléfono y el
horario reales; para un cliente que lo abra, es una web rota que dice que abren a las 10.

#### P8 — La web tiene fallos técnicos de internacionalización e indexación

| Fallo | Detalle | Archivos |
|---|---|---|
| **`hreflang` con URLs relativas** | `href="index.html"`, `href="../en/index.html"`. Google exige URLs absolutas: tal cual está, el clúster ES/EN/AR no se forma y las tres páginas compiten entre sí | [index.html:16](index.html:16), [en/index.html:16](en/index.html:16), [ar/index.html:16](ar/index.html:16) |
| Sin `rel="canonical"` | `/` y `/index.html` devuelven ambos 200 → duplicado | las 3 páginas + `legal.html` |
| Sin `robots.txt` | 404 en producción | — |
| Sin `sitemap.xml` | 404 en producción | — |
| `og:image` relativa | `design-inspiration/real-fotos/…`, no resuelve al compartir | las 3 páginas |

#### P9 — Google enseña un enlace roto en el resultado #1 de marca

Buscando `duliban`, bajo el resultado de `dulibanrestaurante.com` aparece un **sitelink
llamado "Nosotros"** con el texto *"Quiénes Somos? Nuestra cocina es tradición
libanesa…"*. Ese texto **no existe en ninguna de las tres páginas del sitio nuevo**
(comprobado por grep) y `/nosotros/` devuelve **404**.

Es decir: el enlace más visible de la marca en Google lleva a una página de error.
`site:dulibanrestaurante.com` devuelve 7 resultados y cuatro son restos del WordPress
antiguo, todos en 404:

```
/galeria/  ·  /nosotros/  ·  /servicios/  ·  /condiciones-de-uso/
```

Además `/en/index.html` y `/ar/index.html` están indexadas con el sufijo `.html` en lugar
de `/en/` y `/ar/`.

#### P10 — El JSON-LD es correcto pero mínimo

Tiene nombre, imagen, cocina, precio, teléfono, email, dirección, horario y
`acceptsReservations`. Le falta lo que conecta la web con la entidad:

- `@id` y `url` estables · `geo` con las coordenadas · `hasMap` al CID de la ficha
- **`sameAs`** con Google, Tripadvisor, Instagram y Facebook — hoy no existe ningún
  vínculo declarado entre la web y el perfil
- **`hasMenu` / `Menu` / `MenuSection` / `MenuItem`** con los 42 platos, precios y
  `suitableForDiet: HalalDiet`
- Horario de cocina y hora feliz como `OpeningHoursSpecification` separados
- `paymentAccepted`, `currenciesAccepted`, `smokingAllowed`

#### P11 — Riesgos de gobernanza

- El perfil cuelga de un **Gmail genérico** (`dulibanrestaurants12@gmail.com`), no de un
  correo del dominio. Si se pierde ese acceso, se pierde la ficha con sus 1.180 reseñas.
  El propio Google sugiere en el panel migrar a correo corporativo.
- **[por confirmar]** quién más figura como propietario/administrador, y si el
  propietario principal es el cliente y no una agencia anterior.
- **Cero medición**: no hay Search Console, ni analítica, ni seguimiento de posiciones.

  > ⚠️ `legal.html` afirma que la web **no tiene analítica** y que el único tercero es
  > Google Maps. Search Console no usa cookies y no obliga a tocar nada. **GA4 sí
  > obligaría a reescribir `legal.html` y `js/consent.js`.**

#### P12 — Citaciones (NAP) inconsistentes

| Fuente | Qué dice | Correcto |
|---|---|---|
| Guía Repsol | Tel. **916250072** · IG `@rest_duliban` · "Menos de 35 €" | Tel. 917 54 48 38 · `@dulibanrestaurante` |
| Facebook (2,8 mil seg.) | Web `restauranteduliban.es` · tel. **91 625 00 72** | Web y tel. nuevos |
| Los5mejores | Tel. **91 625 00 72** | ídem |
| Tripadvisor (4,0 · 389) | Rango de precio **€€€€ / $$$$** | 30–40 € por persona |
| Mapcarta | Sitúa el local en *Moraleja Green* | Centro Comercial Plaza Moraleja |
| Google (ficha) | "Se encuentra en: **Estanco** Plaza Moraleja" | Centro Comercial Plaza Moraleja |
| `dulibangourmet.com` | Dirección, teléfono y horario inventados | — |

Y dos incoherencias internas nuestras:

- La ficha usa **"Plaza de la Fuente"** (nombre registral, sin "Local 4/5"); la web usa
  **"Plaza de la Moraleja"** (nombre comercial). Hay que elegir uno como canónico y usar
  el otro solo en `legal.html`.
- La cocina cierra a las **16:00** según la ficha y a las **16:30** según la web.

### 1.4 Aparcamiento — datos verificados (21 ago 2026)

Investigado para poder cerrar A8 y alimentar el contenido local de B7. Hay **dos** cosas
distintas y las dos son de pago:

**1. Parking del propio complejo** — [plazadelamoraleja.es](https://plazadelamoraleja.es/como-llegar/)

| Dato | Valor |
|---|---|
| Nombre oficial del complejo | **Plaza Moraleja 2**, C/ Estafeta 2, 28109 Alcobendas |
| Tarifa | desde **0,0408 €/min** (≈2,45 €/h), máximo **55 €/día** |
| Horario | **08:00–02:00 ininterrumpido** ← cubre entero el horario del restaurante |
| Pago | Cajas automáticas antes de retirar el vehículo |
| Aparcacoches | **No se menciona en ninguna fuente** |

**2. Calle — zona ORA (azul) de Alcobendas.** Plaza de la Moraleja y C/ Estafeta están
dentro de la zona regulada:

| Dato | Valor |
|---|---|
| Horario | L–V **9:30–20:00** continuo (**salvo agosto**) · Sábados 9:30–14:00 |
| Máximo | **2 horas** |
| Tarifa | 60 min 0,90 € · 120 min 2,30 € |
| Gratis | Cenas (desde las 20:00), sábados tarde, domingos y todo agosto |

**Consecuencias:**

- Atributos **correctos** en la ficha: *Aparcamiento de pago*, *Parking de pago*,
  *Aparcamiento en la calle de pago*.
- Atributos a **quitar**: *Muchas plazas libres* (falso) y *Con aparcamiento propio*
  (el parking es del centro comercial, no del restaurante).
- *Servicio de aparcacoches*: **[por confirmar]** con el restaurante. Es el atributo con
  más riesgo de generar una reseña de 1 ★ si no es cierto.
- **Contenido para B7 y A21:** el matiz que de verdad ayuda al cliente es que en la calle
  el máximo son 2 horas y se paga hasta las 20:00 entre semana, así que **para una comida
  larga conviene el parking del centro**, que además aguanta hasta las 02:00. Para las
  cenas y los fines de semana, la calle es gratis.
- Corregir "Se encuentra en" apuntando a **Plaza Moraleja 2** (nombre oficial del
  complejo), no a *Estanco Plaza Moraleja*.

### 1.5 El vecindario competitivo

| Restaurante | Valoración | Reseñas |
|---|---|---|
| **du Liban** | **4,4** | **1.180** |
| Restaurante Daily | 4,1 | 1.209 |
| Casa Árabe Alcobendas | **4,6** | 728 |
| Liba Garden (Las Tablas) | 4,4 | 498 |
| Restaurante Áurea La Moraleja | 4,2 | 359 |

En volumen du Liban gana. En **nota** pierde contra Casa Árabe, que es el competidor
directo en cocina árabe de la zona. Subir de 4,4 a 4,5 es realista y tiene efecto directo
en el pack local.

---

## 2. Plan de implementación

Cinco bloques. Todo el bloque A ya es ejecutable: tenemos el acceso.

### Bloque A — Google Business Profile
*El 32 % del peso del ranking local está aquí, y otro 16 % en reseñas. Es la mitad del juego.*

#### A.0 · Bloqueantes (esta semana)

| # | Acción | Esfuerzo |
|---|---|---|
| A1 | **Decidir qué pasa con el delivery** (ver P2). Es la decisión que condiciona descripción, atributos, área de servicio y publicaciones | reunión |
| A2 | **Borrar la publicación de Glovo de hace 4 años** y la de "Best lebanese food" de hace 6 | 5 min |
| A3 | **Reescribir la descripción** (750 caracteres, en español): halal certificado, shisha en las dos terrazas, perros, La Moraleja / Alcobendas, cocina hasta las 23:30 y barra hasta la 1:00, eventos privados, desde 2008. Sin superlativos | 45 min |
| A4 | Auditar **usuarios y roles**; confirmar que el propietario principal es el cliente | 15 min |
| A5 | Planificar la migración del perfil a un **correo del dominio** en vez del Gmail genérico | 30 min |

#### A.1 · Datos de la ficha

| # | Acción | Esfuerzo |
|---|---|---|
| A6 | **Sobrescribir los atributos falsos**: quitar *No late-night food* y *No happy-hour drinks* | 10 min |
| A7 | **Activar los que faltan**: *Se admiten perros*, halal (ver nota), sin gluten si aplica, zona de fumadores/shisha, menú infantil | 30 min |
| A8 | **Limpiar aparcamiento**: dejar solo los 1–2 reales de los seis actuales | 10 min |
| A9 | **Añadir categorías secundarias**: Restaurante de Oriente Medio, Restaurante halal, Bar de cócteles, Salón de shisha, Local para eventos | 20 min |
| A10 | Corregir **"Se encuentra en"**: *Estanco Plaza Moraleja* → *Centro Comercial Plaza Moraleja* | 10 min |
| A11 | Rellenar **fecha de apertura** | 5 min |
| A12 | Cargar **horarios especiales**: festivos de Madrid, Navidad, agosto | 30 min |
| A13 | **Unificar el cierre de cocina** (16:00 vs 16:30) entre ficha y web | 10 min |
| A14 | Unificar la **dirección canónica** entre ficha y web, y añadir "Local 4/5" a la ficha | 15 min |

> **Sobre el atributo halal:** hay que comprobar en *Offerings* si Google ofrece
> *"Serves halal food"* para esta categoría en España — se ve en 30 segundos. Si **no**
> existe, el halal se cubre igualmente por otras cuatro vías: descripción, categoría
> secundaria *Restaurante halal*, publicaciones y la carta. **No inventar la entidad
> certificadora**, que sigue sin conocerse.

#### A.2 · Carta y pedidos

| # | Acción | Esfuerzo |
|---|---|---|
| A15 | **Sustituir la carta de Yemeksepeti por la real**: 42 platos, 5 categorías, precios y las 37 fotos WebP que ya tenemos, con "Create or copy a menu" | 3 h |
| A16 | **Cambiar el enlace "Menú"** de la URL de reservas de SevenRooms a `dulibanrestaurante.com/#carta` | 5 min |
| A17 | Marcar *Hummus bil Pesto* y *Mawzet Kharouf* como **platos destacados** | 15 min |
| A18 | Según A1: fijar **proveedor preferente** y borrar la entrada falsa de `dulibanrestaurante.com`, **o** apagar *Food ordering* y borrar el área de servicio | 20 min |

#### A.3 · Rutina semanal (lo que mueve la aguja a medio plazo)

| # | Acción | Esfuerzo |
|---|---|---|
| A19 | **Una publicación por semana.** Rotación: plato de temporada → terraza y shisha → evento privado → halal → cóctel. Con foto y CTA a SevenRooms | 30 min/sem |
| A20 | **3–5 fotos por semana**, no todas de golpe, etiquetadas por categoría. Prioridad según el propio checklist de Google: **fachada**, fotos de carta, fotos de platos | 20 min/sem |
| A21 | **Sembrar 8–10 preguntas y respuestas**: ¿es halal?, ¿hay certificado?, ¿se puede fumar shisha?, ¿admiten perros?, ¿dónde aparco?, ¿hasta qué hora hay cocina?, ¿hacen eventos privados?, ¿hay opciones veganas? | 1 h |

### Bloque B — Web
*19 % del peso. Es lo que controlamos al 100 % y se puede empezar hoy.*

| # | Acción | Archivos | Esfuerzo |
|---|---|---|---|
| B1 | **`hreflang` con URLs absolutas** + `canonical` autorreferencial | las 3 páginas + `legal.html` | 30 min |
| B2 | **`robots.txt` + `sitemap.xml`** | nuevos, en raíz | 20 min |
| B3 | **301 de las URLs muertas** — mata el sitelink roto de P9: `/galeria/`→`/#espacio`, `/nosotros/`→`/#concepto`, `/servicios/`→`/#eventos`, `/condiciones-de-uso/`→`/legal.html#condiciones`. Añadir `/carta/`, `/menu/`, `/contacto/`, `/reservas/`, `/blog/` por si acaso | `vercel.json` | 30 min |
| B4 | **JSON-LD enriquecido**: `@id`, `url`, `geo`, `hasMap` (CID), `sameAs`, `paymentAccepted`, `smokingAllowed`, horarios de cocina | las 3 páginas | 1 h |
| B5 | **Schema de carta completo**: `Menu` + 5 `MenuSection` + 42 `MenuItem` con precio, foto y `suitableForDiet: HalalDiet`. Es el mismo trabajo de datos que A15, aprovechable dos veces | las 3 páginas | 3 h |
| B6 | `og:image` absoluta 1200×630 + `og:url` | las 3 páginas | 30 min |
| B7 | **Contenido local**: ampliar `#visitanos` con cómo llegar desde la A-1, dónde aparcar en la Plaza, referencia al Centro Comercial Plaza Moraleja; y un bloque FAQ visible que replique las Q&A de A21 | las 3 páginas | 3 h |
| B8 | Enlazar web ↔ ficha: botones "Ver en Google Maps" y "Escribir una reseña" en `#visitanos` y footer | las 3 páginas | 30 min |
| B9 | `alt` descriptivos con contexto local en las ~70 fotos de galería y las 37 de plato | las 3 páginas | 2 h |
| B10 | Ajustar `<title>`: `du Liban — Restaurante libanés halal en La Moraleja (Alcobendas, Madrid)` | las 3 páginas | 15 min |
| B11 | Terminar el paso a WebP + `srcset` (pendiente #7 de `CLAUDE.md`) — afecta a Core Web Vitals | `fotos/`, `design-inspiration/` | 3 h |

> Recompilar CSS solo si se tocan clases Tailwind (`npm run build:css`). El contenido
> nuevo (B7) va **a las tres páginas**, traducido, con árabe real y dígitos arábigos
> orientales en texto y latinos en horas.

### Bloque C — Citaciones y dominios

| # | Acción | Esfuerzo |
|---|---|---|
| C1 | **Averiguar quién controla `dulibangourmet.com`** y cerrarlo o redirigirlo 301. Si es del cliente es trivial | 1 h + espera |
| C2 | Lo mismo con `dulibanrestaurants.com` y `restauranteduliban.es` | 1 h |
| C3 | **Reclamar y corregir Tripadvisor**: web, teléfono, rango de precios (€€€€ → 30–40 €), fotos nuevas | 1 h |
| C4 | Corregir **Guía Repsol** (teléfono, handle de IG, rango de precio) | 30 min |
| C5 | Corregir **Facebook**: web y teléfono antiguos | 20 min |
| C6 | Corregir **Los5mejores** y **Mapcarta** (ubicación en Moraleja Green) | 40 min |
| C7 | Confirmar si `@rest_duliban` es una cuenta antigua del negocio o de un tercero | 20 min |
| C8 | **Altas/actualizaciones en agregadores**: Apple Business Connect, Bing Places, TheFork, Foursquare, Yelp, Waze. Apple es el más descuidado y alimenta Siri y los mapas de iPhone | 3 h |
| C9 | **Directorios halal** (nicho, alta conversión): Zabihah, HalalTrip, HalalBooking y directorios de la comunidad musulmana de Madrid | 2 h |
| C10 | Enlaces locales: Ayuntamiento de Alcobendas, comerciantes de La Moraleja, guías de la zona, prensa local | continuo |

### Bloque D — Reseñas
*16 % del peso, y la palanca más rentable a corto plazo.*

Objetivo: **4,4 → 4,5** y flujo constante (la frescura pesa más que el acumulado).

| # | Acción |
|---|---|
| D1 | Generar el enlace corto desde **"Ask for reviews"** del panel y ponerlo en un **QR en la cuenta y en las mesas** |
| D2 | Guion de una línea para sala al cobrar. Nunca condicionado a dejar 5 ★ — viola las políticas de Google |
| D3 | **Vaciar el backlog de reseñas sin responder** (la más reciente sin respuesta es de hace 45 semanas). Las recientes ya se responden bien; el histórico no |
| D4 | Mantener respuesta al 100 % en menos de 48 h y **en el idioma de la reseña** |
| D5 | Mencionar de forma natural *halal*, *terraza*, *shisha* y *La Moraleja* en las respuestas: Google lee ese texto |
| D6 | Con el acceso a SevenRooms: email post-visita con el enlace de reseña de **Google**. ⚠️ Google **no** permite importar reseñas de terceros — no prometerlo |
| D7 | Vigilar los temas que Google extrae de las reseñas (hoy: `terraza` 47 · `decoración` 25 · `carta` 24 · `cócteles` 21). Que *halal* y *shisha* entren en esa lista es un KPI en sí mismo |

### Bloque E — Medición

Punto de partida medido hoy, para poder comparar dentro de tres meses:

```
Interacciones mar–ago 2026 ....... 4.966
Vistas del perfil, último mes .... 4.210
Reseñas .......................... 1.180 · 4,4 ★
```

*(La curva de interacciones sube hasta un pico y **baja en el último mes** — conviene
mirar si es estacionalidad de agosto o algo más.)*

| # | Acción | Nota |
|---|---|---|
| E1 | **Search Console** verificado por DNS (ya controlamos el registro, ver `DESPLIEGUE-DOMINIO.md`). Subir el sitemap | Sin cookies → no toca `legal.html` |
| E2 | Revisión mensual del **Rendimiento** de la ficha por pestaña: llamadas, clics de chat, reservas, cómo llegar, clics a web | La proporción descubrimiento/marca es el indicador real |
| E3 | **UTM en el enlace web de la ficha** (`?utm_source=google&utm_medium=organic&utm_campaign=gbp`) | Separa el tráfico que viene de Maps |
| E4 | Rejilla de posiciones locales (Local Falcon / BrightLocal) para `restaurante libanés Madrid`, `restaurante halal Madrid`, `terraza shisha Madrid`, `restaurante libanés La Moraleja` | ~30 €/mes. Es la única forma seria de medir el pack local |
| E5 | Analítica web | **Decisión del cliente.** Vercel Analytics es sin cookies y no obliga a tocar los legales; GA4 sí |
| E6 | Ignorar por ahora el **crédito de 400 € de Google Ads** que ofrece el panel | Es publicidad, no SEO. Solo tiene sentido cuando la ficha esté ordenada |

---

## 3. Orden de ejecución

**Semana 1 — parar hemorragias**
A1 (decisión delivery) · A2 (borrar posts viejos) · A3 (descripción) · A4 · B1 · B2 · B3 · E1 · C1

**Semana 2 — la ficha**
A6 · A7 · A8 · A9 · A10 · A11 · A13 · A14 · A16 · A18 · D1 · D2 · E3

**Semanas 3–4 — carta y profundidad**
A15 · A17 · A21 · B4 · B5 · B6 · B10 · C3 · C4 · C5 · D3

**Mes 2 — contenido y expansión**
A5 · A12 · B7 · B8 · B9 · B11 · C6 · C8 · C9 · E4

**Continuo**
A19 (publicación semanal) · A20 (fotos semanales) · D4–D7 · C10

---

## 4. Qué esperar, y qué no

**Realista a 3–6 meses**, si se ejecuta también la parte continua:

- Aparecer en el pack local de `restaurante halal Madrid` y `restaurante libanés
  Alcobendas` — hoy no se compite en esas búsquedas desde la ficha.
- Subir a 4,5 ★ con flujo constante de reseñas.
- Más vistas de descubrimiento (gente que no buscaba "du Liban") sobre las 4.210
  mensuales actuales.
- Que la carta que Google enseña sea la de du Liban y no la de una plataforma de reparto.

**Lo que no voy a prometer:**

- Posición 1 en `restaurante libanés Madrid` a nivel de toda la ciudad. El pack local es
  fuertemente geográfico: desde Chamberí saldrán los de Chamberí. Se puede ganar el radio
  La Moraleja–Alcobendas–norte de Madrid, que es el mercado real.
- Efecto inmediato. Categorías y atributos tardan días o semanas en reflejarse, y las
  publicaciones necesitan cadencia sostenida para valer algo.
- Importar reseñas de Tripadvisor a Google. No se puede.

---

## 5. Pendiente de confirmar con el cliente

1. **¿Sigue habiendo delivery y take-away?** Es la decisión que desbloquea media ficha.
   Si sí, ¿con qué proveedor interesa quedarse (Glovo o Uber Eats)?
2. **Aparcamiento** — parcialmente resuelto el 21 ago 2026 (ver §1.4). Queda por
   confirmar solo: ¿existe de verdad el **servicio de aparcacoches**? ¿El restaurante
   **valida el tique** del parking del centro?
3. **Cocina**: ¿cierra a las 16:00 o a las 16:30?
4. **Dirección canónica**: ¿"Plaza de la Moraleja" (web) o "Plaza de la Fuente" (ficha)?
5. ¿De quién es **`dulibangourmet.com`**? ¿Y `dulibanrestaurants.com` /
   `restauranteduliban.es`?
6. ¿Quién más tiene acceso al perfil, y quién es el **propietario principal**?
   ¿Migramos el perfil del Gmail genérico a un correo del dominio?
7. ¿**Fecha de apertura** para la ficha? (enlaza con la duda de si el local de 2008 ya se
   llamaba du Liban)
8. ¿Hay **opciones sin gluten** y **menú infantil** que podamos declarar?
9. **Analítica**: ¿Vercel Analytics (sin cookies, sin tocar legales) o GA4 (obliga a
   reescribir `legal.html` y el banner)?
10. La **entidad certificadora del halal** sigue sin conocerse. Con el certificado en mano
    se puede publicar una foto del sello en la ficha, que es de lo que más convierte en
    ese nicho.
