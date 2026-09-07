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

### Actualización 2 — del histórico de WhatsApp, leído el 3 sep 2026

Repasando el grupo entero aparecieron respuestas del 22 de agosto que teníamos por
pendientes, más contexto nuevo.

**Resueltas:**

| # | Respuesta de Noman (22 ago) |
|---|---|
| A18 | **Uber Eats como proveedor preferente**, manteniendo Glovo disponible. "Their commissions are essentially the same" |
| A11 | **Se queda 2012.** "We don't want to change the restaurant's established history or create confusion for existing customers." Sobre 2008 no sabe a qué se refiere y remite a Priya. **Decisión: la web no toca la frase de 2008**, que habla del local y no de du Liban |

**SEM: rechazado por ahora.** El 22 de agosto Noman declinó la campaña con un argumento
sólido: agosto es atípico y aun así llevaban **58 reservas del agente de IA y 59 de Google
Maps** ese mes. Propuso usar agosto como línea base y **revisar en septiembre**. Ya
estamos en septiembre y ahora además hay datos de Search Console, pero **que lo pida él**:
hubo roce porque el análisis se hizo de urgencia a petición de Priya y luego se descartó.

**El foco que ha marcado el cliente** (25 ago) es **influencers**, no publicidad pagada.

**Riesgo nuevo — el correo.** Priya preguntó el 22 de agosto por qué no funciona
`Admin@dulibanrestaurante.com`. Salió que un tal **Luis** paga 32 €/mes de servidor y que
no quieren seguir pagándole. Los MX del dominio apuntan a `mailspamprotection.com`, que es
**SiteGround**: el correo sigue alojado donde Luis paga. Si eso se corta, deja de
funcionar `reservas@dulibanrestaurante.com`, que está publicado en la web y en el JSON-LD.
**Sin dueño asignado. Conviene tratarlo con Priya, aparte.**

**Coordinación.** Noman está editando la ficha por su cuenta ("hours, categories, photos,
reviews"). Hay que repartir quién toca qué antes de pisarnos.

**Su auditoría de schema era errónea** (ver `RESPUESTA-NOMAN-SCHEMA.md`): lo que describe
como ausente lleva publicado desde el 22 de agosto. Todo apunta a que miró
`dulibangourmet.com`, que sí tiene 1 solo bloque JSON-LD y 1 solo `alt`.

### Actualización 3 — respuesta de Noman, 4 sep 2026. **Cambia el reparto**

**Reparto acordado y aceptado por las dos partes:**

> **Noman → Perfil de Empresa** (publicaciones, fotos, carta, respuestas a reseñas)
> **Nosotros → web** (y ahora SEM, que Priya ha reactivado)

Esto **elimina de nuestra lista** A19, A20 y A12: las lleva él. Confirmado por él mismo:
última publicación hace 4 días, última foto hace 3. Mi diagnóstico de "cero publicaciones
en un año" era de datos del 21 de agosto y se quedó viejo.

**Cerradas por decisión suya:**

| # | Decisión |
|---|---|
| Schema | Lo verificó él en el Rich Results Test: 4 elementos válidos, 0 errores. Conforme |
| `department` de cocina | **Se queda.** "It makes sense given that the kitchen and bar hours are different" |
| Rango 20–60 € | **Se queda.** "It accurately reflects the real menu" |
| A12 festivos | Se coordina **directamente con Priya** |

**A21 — Preguntas y respuestas: TAREA MUERTA.** Noman tenía razón y lo he verificado:
Google discontinuó la Q&A API el **3 nov 2025** y empezó a retirar la sección pública el
**3 dic 2025**. La sustituye *"Ask about this place"*, generada por Gemini a partir de las
fuentes del perfil. **Implicación estratégica:** lo que antes se sembraba en Q&A ahora hay
que ponerlo donde la IA lo lee — descripción, atributos, carta y **web**. Es decir, refuerza
el valor del schema y del FAQ de B7 que ya están hechos, no lo anula.

**⚠️ Seguridad — `srpotatocm@gmail.com` no es de nadie conocido.** Noman confirma que dos
de las tres cuentas son suyas y que **"Sr. Potato" no la reconoce**. Nosotros tampoco la
hemos usado nunca. Es un **gestor con permisos de edición sobre una ficha de 1.185
reseñas**. Recomendación: que la quite.

**Hecho el 7 sep:** los 10 `alt` que señaló, en las tres páginas (commit `be6ee0d`). Eran
exactamente las 10 miniaturas del acordeón; su auditoría fue completa y correcta.

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
| ~~E1~~ | ~~Search Console + subir sitemap~~ | ✅ **HECHO 22 ago 2026.** Propiedad de prefijo de URL `https://dulibanrestaurante.com/` bajo la cuenta del restaurante (`authuser=7`), verificada por meta tag (`v_t6JymeWuok_…`, en `index.html`). Sitemap enviado: estado *Success*, 3 páginas descubiertas. **Pendiente:** añadir usuarios y, si algún día hay acceso a GoDaddy, montar además la propiedad de dominio |
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

---

## Actualización 4 — respuestas de Priya, 7 sep 2026

**Festivos, resueltos.** Solo tres cierres: **25/12, 01/01 y 06/01**. Agosto abierto salvo
lunes; festivos abiertos salvo lunes. Pendiente una confirmación (cierre total o horario
reducido) y **pasárselas a Noman**, que es quien carga el perfil.

**El correo, resuelto a medias.** Verificado el 7 sep: los MX ya **no** están en
SiteGround, ahora son `mx1/mx2.hostinger.com` con SPF de Hostinger. Nacho lo movió. La
dependencia de Luis y sus 32 €/mes está rota. Pero quedan dos cabos:

1. **¿De quién es la cuenta de Hostinger?** Si es de Nacho, hemos cambiado una dependencia
   por otra. Debería estar a nombre de du Liban y pagada por ellos, con nosotros como
   usuarios — el mismo criterio que el Perfil de Empresa, Search Console y Google Ads.
2. **¿Existe todavía el buzón `reservas@`?** Priya dice que usan `admin@` y que "el otro
   apenas lo usamos", pero `reservas@` es el que publicamos en la web **y en el JSON-LD**.
   Si no se recreó en la mudanza, ese correo se pierde sin que nadie se entere.

**El propietario anterior no colabora.** Dice que no sabe. Tiene el fijo (no lo quieren) y
los dos dominios, que **quiere vender** (no los quieren comprar). Sin él:

| Ficha | ¿Recuperable? |
|---|---|
| Tripadvisor | **Sí** — proceso de cambio de titularidad con el CIF |
| Yelp | **Sí** — reclamación verificada por llamada al número del negocio |
| Guía Repsol | **Sí, trivial** — es guía editorial, se escribe y ya |
| Facebook | **Difícil** — disputa de titularidad en Meta, lenta. Un intento por los 2.800 seguidores |
| Los dominios | **No, sin comprarlos.** Daño real bajo: nuestra web ya les gana en la SERP de marca |

**SEM: reunión el jueves.** Priya propone martes o jueves por la tarde para cerrar la
cuenta de Google Ads y el resto de puntos. Preparación en `REUNION-SEM-PREP.md`.
