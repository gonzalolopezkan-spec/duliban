# SEO local — reparto de responsabilidades

> Complemento de [SEO-LOCAL-PLAN.md](SEO-LOCAL-PLAN.md). Los códigos (A1, B3, C7…) son los
> mismos que en el plan. Actualizado el 21 de agosto de 2026.

Tres cubos, no dos. El del medio es el que justifica que enviemos la presentación al
restaurante antes de tocar nada de la ficha.

| Cubo | Qué es | Cuántas tareas |
|---|---|---|
| **1 · Nosotros, ya** | Ni pregunta ni permiso. Se puede empezar hoy | 18 |
| **2 · Nosotros, bloqueado** | Lo ejecutamos nosotros, pero falta un dato o un OK suyo | 14 |
| **3 · Solo ellos** | Accesos, credenciales, presupuesto, operativa de sala | 16 |

---

## Actualización — respuestas de Noman, 21 ago 2026

### Desbloqueado, pasa al cubo 1

| # | Respuesta | Qué hacemos |
|---|---|---|
| A1 | **Delivery SÍ**: Glovo y Uber Eats activos, recogida y entrega | Se queda encendido. Atributos *A domicilio* y *Para llevar* son correctos |
| A2 | **"There is no 10% Glovo promotion"** | La publicación de hace 4 años es **publicidad falsa**. Borrar sin más discusión |
| A7d | **Sin gluten SÍ · Menú infantil NO** | Activar solo el de sin gluten |
| A8 | **"We do not offer valet parking"** | Quitar *Servicio de aparcacoches*, *Muchas plazas libres* y *Con aparcamiento propio*. Dejar los tres de pago |
| A11 | **Abrió en 2012** | Fecha de apertura = 2012 |
| A18 | — | Quitar la entrada falsa de `dulibanrestaurante.com` de *Food ordering* (la web no tiene sistema de pedidos) |
| D6 | **El email post-visita con enlace de reseña de Google ya funciona** | Tarea cerrada. Actualizar también el pendiente nº 3 de `CLAUDE.md` |
| A21 · B7 | Con aparcamiento (§1.4 del plan), delivery y sin gluten resueltos | El FAQ y las Q&A ya se pueden redactar casi enteros |

### Sigue abierto — preguntas que no contestó

1. **¿Glovo o Uber Eats como proveedor preferente?** Sin esto Google elige por su cuenta.
   Criterio: el que menos comisión cobre.
2. **¿Validáis el tique del parking?** No contestó. Por defecto: no lo declaramos.

### Se ha complicado — los dominios (C1 · C2)

Noman dice que **no son suyos** y que no tienen acceso. Pero los datos de registro
apuntan al **propietario anterior**, el mismo que retiene las credenciales de Facebook,
Tripadvisor, Yelp y Guía Repsol:

| Dominio | Registrado | Caduca | Último cambio |
|---|---|---|---|
| `dulibanrestaurants.com` | **2012-08-03** ← el año que abrió el restaurante | 2027 | **2026-08-04** (hace 18 días) |
| `dulibangourmet.com` | 2018-09-11 | **2029** | 2025-03-13 |

Los dos están pagados por años por delante y con cambios recientes: alguien los mantiene
vivos a propósito. **Acción concreta:** cuando Priya contacte con el propietario anterior
en septiembre, que pida también **los dominios**, no solo las redes sociales. Van en el
mismo paquete.

Mientras tanto solo cabe mitigar: que nuestra web los supere en la SERP de marca y, si
`dulibangourmet.com` sigue publicando horarios y teléfonos falsos bajo el nombre du Liban,
valorar una reclamación por uso de marca.

### Bloqueado hasta septiembre (C3 · C4 · C5 · C6)

Sin credenciales de Facebook, Tripadvisor, Yelp ni Guía Repsol. Priya insiste en
septiembre. **Mitigación posible sin credenciales:** Tripadvisor, Yelp y Guía Repsol
admiten "sugerir una edición" desde fuera, y la ficha de Tripadvisor se puede **reclamar**
con verificación al teléfono del negocio, que sí controlan. Merece la pena intentarlo
antes de esperar a septiembre.

### ⚠️ Contradicción nueva: 2008 vs 2012

Noman dice que el restaurante **abrió en 2012**. La web dice hoy *"La cocina de la Plaza
de la Moraleja abrió en septiembre de 2008"* — una frase redactada a propósito para
hablar del local, no de du Liban, precisamente porque no estaba confirmado (pendiente nº 4
de `CLAUDE.md`).

Las dos cosas pueden ser ciertas a la vez, pero públicamente van a convivir un "desde
2008" en la web y un "2012" en Google. Hay que decidir: o se aclara la frase de la web, o
se confirma con Noman qué pasó en 2008. **Pendiente de decisión.**

---

## Cubo 1 — Nosotros, ejecutable ya

### 1.1 Web (no toca nada visible para el cliente)

| # | Acción | Por qué no necesita a nadie |
|---|---|---|
| B1 | `hreflang` absolutos + `canonical` | Corrección técnica pura |
| B2 | `robots.txt` + `sitemap.xml` | ídem |
| B3 | 301 de `/galeria/`, `/nosotros/`, `/servicios/`, `/condiciones-de-uso/` | Arregla el sitelink roto del resultado #1. Objetivamente roto hoy |
| B4 | JSON-LD: `@id`, `url`, `geo`, `hasMap`, `sameAs`, `paymentAccepted`, `smokingAllowed` | Datos ya verificados en `CLAUDE.md` y en la ficha |
| B5 | Schema de carta: 42 `MenuItem` con precio y `HalalDiet` | La carta oficial ya está en el repo |
| B6 | `og:image` absoluta 1200×630 + `og:url` | Corrección técnica |
| B8 | Botones "Ver en Google Maps" y "Escribir una reseña" | Enlaces a su propia ficha |
| B9 | `alt` descriptivos en las ~107 imágenes | Redacción nuestra |
| B10 | `<title>` con *halal* y *Alcobendas* | Redacción nuestra |
| B11 | WebP + `srcset` (pendiente #7 de `CLAUDE.md`) | Optimización |

⚠️ **Un matiz en B4**: el horario de cocina depende de A13 (16:00 vs 16:30). Ponemos el
valor actual de la web (16:30) y lo ajustamos cuando respondan. No bloquea.

### 1.2 Ficha de Google — solo correcciones objetivas

Son cosas que hoy son **demostrablemente falsas** o que contradicen a la propia ficha.
Aun así van listadas en la presentación, para que no haya sorpresas.

| # | Acción | Prueba de que es un error, no una opinión |
|---|---|---|
| A6 | Quitar *"No happy-hour drinks"* | La ficha publica "Hora feliz 16:00–20:00" |
| A6 | Quitar *"No late-night food"* | Cocina hasta 23:30, barra hasta 01:00 |
| A7a | Activar *Se admiten perros* | Confirmado por el cliente el 27 jul 2026 |
| A7b | Activar halal / *Restaurante halal* | Cocina 100 % halal certificada, confirmado |
| A7c | Activar shisha / zona de fumadores | Confirmado: shisha en las dos terrazas |
| A9 | Categorías secundarias: Oriente Medio, halal, bar de cócteles, salón de shisha, local para eventos | Todas ciertas y ya reflejadas en la web |
| A10 | "Se encuentra en": *Estanco Plaza Moraleja* → *Centro Comercial Plaza Moraleja* | El estanco es otro negocio |
| A16 | Enlace "Menú" → `dulibanrestaurante.com/#carta` | Hoy apunta a la página de reservas |
| A17 | Destacar *Hummus bil Pesto* y *Mawzet Kharouf* | Elección del propio cliente |
| A15 | Publicar la carta real (42 platos con precio y foto) en la ficha | Precios confirmados vigentes el 21 ago 2026 |

### 1.3 Medición

| # | Acción | Nota |
|---|---|---|
| E1 | Search Console verificado por DNS + subir sitemap | El DNS ya lo controlamos (`DESPLIEGUE-DOMINIO.md`). Sin cookies, no toca `legal.html` |
| E3 | UTM en el enlace web de la ficha | Cambio interno, invisible para el cliente |
| E2 | Revisión mensual del rendimiento de la ficha | Trabajo nuestro, recurrente |
| D7 | Vigilar los temas que Google extrae de las reseñas | Observación |

---

## Cubo 2 — Nosotros, pero bloqueado por una respuesta suya

Aquí es donde importa la presentación: **una sola respuesta suya desbloquea varias tareas
nuestras**.

| # | Acción nuestra | Qué necesitamos de ellos |
|---|---|---|
| A3 | Reescribir la descripción (750 car.) | La decisión de delivery (A1) + su visto bueno al texto |
| A2 | Borrar la publicación de Glovo (4 años) y la de 2020 | Un "adelante". Es contenido suyo, aunque esté caduco |
| A18 | Configurar o apagar *Food ordering* + área de servicio | **A1: ¿sigue habiendo delivery? ¿con qué proveedor?** |
| A7d | Atributos *sin gluten* y *menú infantil* | ¿Existen? |
| A8 | Dejar los atributos de aparcamiento correctos (ver §1.4 del plan: parking del complejo 0,0408 €/min hasta las 02:00 + zona azul en la calle) | Solo queda: **¿existe el aparcacoches?** ¿validáis el tique del parking? |
| A11 | Rellenar fecha de apertura | ¿Qué año ponemos? (enlaza con la duda de 2008) |
| A13 | Unificar cierre de cocina en ficha y web | ¿16:00 o 16:30? |
| A14 | Dirección canónica ficha ↔ web + añadir "Local 4/5" | ¿"Plaza de la Moraleja" o "Plaza de la Fuente"? |
| ~~A15~~ | ~~Publicar la carta real (42 platos) en la ficha~~ | ✅ **DESBLOQUEADO 21 ago 2026** — precios de la web confirmados vigentes. Pasa al cubo 1 |
| A20 | Subir fotos, incluida la **fachada** que pide Google | ¿Tenemos foto de fachada aprobada? Ninguna cara sin OK |
| A21 | Sembrar 8–10 preguntas y respuestas | Las respuestas de aparcamiento, sin gluten y delivery |
| B7 | Bloque FAQ visible en las 3 páginas | Las mismas respuestas que A21 |
| A19 | Calendario de publicaciones semanales | Visto bueno al tono y al calendario |
| C9 | Alta en directorios halal | **El certificado halal** (documento o foto del sello) |

---

## Cubo 3 — Solo el restaurante

### 3.1 Decisiones de negocio

| # | Decisión | Impacto si no se decide |
|---|---|---|
| A1 | **¿Sigue habiendo delivery y take-away?** | Bloquea A3, A18 y la mitad de los atributos |
| A5 | ¿Migramos el perfil del Gmail genérico a un correo del dominio? | Riesgo de perder la ficha y sus 1.180 reseñas |
| A14 | Dirección comercial vs registral | Incoherencia web/ficha/directorios |
| E5 | Analítica web: Vercel (sin cookies) o GA4 | GA4 obliga a reescribir `legal.html` y el banner |
| E4 | ¿Aprueban ~30 €/mes de herramienta de seguimiento local? | Sin esto no hay forma seria de medir el pack local |
| E6 | Crédito de 400 € de Google Ads que ofrece el panel | Es publicidad, no SEO. Recomendación: más adelante |
| D3 | ¿Nos autorizan a responder reseñas en su nombre? | Hay backlog sin responder desde hace 45 semanas |

### 3.2 Accesos y credenciales

| # | Qué necesitamos | Para qué |
|---|---|---|
| A4 | Lista de propietarios/administradores del perfil, y confirmar que el **propietario principal** es el restaurante y no una agencia antigua | Seguridad |
| C1 | Control de **`dulibangourmet.com`** | Cerrarlo o redirigirlo. Hoy publica horario y teléfono falsos |
| C2 | Control de `dulibanrestaurants.com` y `restauranteduliban.es` | ídem |
| C3 | Acceso o reclamación de **Tripadvisor** | Corregir web, teléfono y rango de precios |
| C4 | Contacto con **Guía Repsol** | Teléfono antiguo y handle de IG erróneo |
| C5 | Acceso a **Facebook** | Web y teléfono antiguos |
| C7 | ¿Qué es `@rest_duliban`? | Cuenta antigua propia o de un tercero |
| D6 | Acceso a **SevenRooms** | Email post-visita con enlace de reseña |
| C8 | Verificación por teléfono/postal en Apple Business Connect, Bing Places, etc. | El código llega al local |

### 3.3 Operativa de sala

| # | Acción | Quién |
|---|---|---|
| D1 | Imprimir y colocar el **QR de reseñas** en la cuenta y en las mesas | Ellos (nosotros generamos el QR) |
| D2 | Formar al equipo en la frase de pedir reseña al cobrar | Ellos (nosotros escribimos el guion) |
| A12 | Facilitar el calendario de **festivos y cierres** (Navidad, agosto) | Ellos |

---

## Ruta crítica

```
Presentación → du Liban responde A1 (delivery) + los datos del cubo 2
                         │
                         ├──> desbloquea A3, A18, A7d, A8, A11, A13, A14, A21, B7
                         │
Mientras tanto, en paralelo y sin esperar:
   Cubo 1 · Web ......... B1 B2 B3 B4 B5 B6 B8 B9 B10 B11   ← nuevo chat de Code
   Cubo 1 · Ficha ....... A6 A7abc A9 A10 A16 A17
   Cubo 1 · Medición .... E1 E3
```

**Cifra clave:** de las 48 tareas del plan, **18 no dependen de nadie**. Es casi el 40 %
del trabajo, y es la parte que arregla los errores visibles hoy en Google.
