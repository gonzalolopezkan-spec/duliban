# SEM · Fase 0 (preparar) y Fase 1 (campaña construida)

*7 sep 2026 · Nada de esto está publicado. No se ha gastado un euro.*

---

# ⚠️ Lo primero: la pestaña que hay abierta lleva al sitio equivocado

La pestaña abierta está en `ads.google.com/aw/signup/mobile/business`, con el nombre
"Du Liban" ya escrito y el ID de cliente **428-606-6425** creado a medias.

**Ese flujo termina en una Smart Campaign.** Es el modo simplificado de Google: no deja
elegir concordancias, ni añadir negativos, ni ver términos de búsqueda, ni controlar
pujas. Es exactamente lo contrario de lo que describe la propuesta que Priya aprobó. Y
encima esta variante concreta va enganchada al Perfil de Empresa ("Your Business Profile
page (optimized for ads)"), que lo cierra todavía más.

**No completes ese flujo.** Si se termina, se acaba con una cuenta en modo Smart y sacarla
de ahí es un incordio.

## El camino correcto — quién y en qué orden

Yo no puedo crear cuentas ni introducir medios de pago; eso lo tiene que hacer una
persona. Estos son los pasos exactos.

**Paso 1 — llegar al modo experto**

1. Cierra la pestaña actual sin darle a *Next*.
2. Entra en `https://ads.google.com/` con la cuenta **dulibanrestaurants12@gmail.com**
   (es `authuser=7` en tu Chrome).
3. En la primera pantalla, donde pregunta por el objetivo publicitario, busca abajo del
   todo el enlace pequeño **"Cambiar al modo experto" / "Switch to Expert Mode"**. Está
   deliberadamente discreto.
4. Ya en modo experto, ignora todas las opciones de campaña y pulsa abajo
   **"Crear una cuenta sin campaña" / "Create an account without a campaign"**.
5. Comprueba **zona horaria (Madrid)** y **moneda (EUR)** — ⚠️ **no se pueden cambiar
   después**. Enviar.

**Paso 2 — la facturación (esto lo hace Priya, no nosotros)**

6. Con la cuenta ya creada, *Facturación → Configuración*: datos fiscales de
   **DULIBAN DE LA MORALEJA 2025, S.L.**, CIF **B24950560**, dirección
   C. de la Estafeta 2, Local 4/5, 28109 Alcobendas.
7. **Priya introduce su tarjeta.** Ni tú ni yo tocamos ese dato.

**Paso 3 — accesos**

8. *Administración → Acceso y seguridad → +* y añadir a vuestro correo de trabajo con
   nivel **Administrador estándar**.

**Paso 4 — enlazados (antes de lanzar)**

9. Vincular con el **Perfil de Empresa** (da la extensión de ubicación y "Cómo llegar").
10. Vincular con **Search Console** — ya está verificado con esa misma cuenta.
11. Comprobar que la **etiqueta automática (auto-tagging / GCLID)** está activada.

**Paso 5 — el crédito de 400 €: NO todavía**

12. No activar el código hasta que la campaña esté lista para gastar. El reloj arranca al
    activarlo: hay que gastar 400 € propios en 60 días y el crédito caduca a los 60 de
    abonarse.

---

# Fase 0b — El ticket para SevenRooms

Lo tiene que enviar alguien con nivel **Superuser** de la cuenta de SevenRooms de du Liban.
Sin esto podemos contar clics, pero no reservas.

```
Subject: Request to install Google Tag Manager container on our reservation widget

Hi,

We're du Liban (La Moraleja, Madrid). We're starting a Google Ads campaign and we need
to measure which advertising clicks turn into completed reservations.

Could you please install our Google Tag Manager container inside our SevenRooms booking
widget? Our container ID is: GTM-XXXXXXX

We understand the widget fires a `successfulCheckout` event on a completed booking — we
would attach our Google Ads conversion tag to that event.

Two related questions:

1. Our booking flow opens sevenrooms.com in a new tab from our website
   (dulibanrestaurante.com). To attribute the booking correctly we need the Google click
   identifier to survive that jump — that means cross-domain linking, with the `_gl`
   parameter carried across and read on your side. Could you confirm this works with your
   widget, and whether anything is needed from your end?

2. Could you also confirm whether per-channel booking source reporting is already
   available on our account? We'd like to tag bookings by origin.

Thank you,
```

> **Ojo:** el `GTM-XXXXXXX` hay que sustituirlo por el contenedor real, que todavía no
> existe. Se crea en la Fase 2. Si Priya quiere mandarlo ya, mejor esperar al contenedor;
> si no, SevenRooms pedirá el ID y se pierde una vuelta de correo.

---

# Fase 1 — La campaña, construida

## Configuración

| Ajuste | Valor | Por qué |
|---|---|---|
| Tipo | **Búsqueda** solamente | Nada de Display ni Vídeo. Display se come el presupuesto con clics de baja intención |
| Red | Google Search · **Search Partners OFF** | Partners tiene peor calidad y con 10 €/día no hay margen para experimentar |
| Presupuesto | **10 €/día** (≈300 €/mes) | Escenario Test de la propuesta |
| Puja | **Maximizar clics con límite de CPC de 0,60 €** las 2 primeras semanas | Sin conversiones históricas, Smart Bidding no tiene con qué aprender. El límite evita sorpresas |
| Ubicaciones | Radio de **8 km** desde C. de la Estafeta 2 + Alcobendas + San Sebastián de los Reyes + distrito de Fuencarral-El Pardo (Sanchinarro, Las Tablas, Montecarmelo) | Es su mercado real |
| **Opción de ubicación** | **"Presencia: personas que se encuentran habitualmente en las zonas seleccionadas"** | ⚠️ **El ajuste que más dinero quema si se deja mal.** Por defecto Google usa "presencia o interés", que enseña el anuncio a alguien en Sevilla que buscó "restaurante Madrid" |
| Idiomas | Español · Inglés · **Árabe** | La Moraleja tiene comunidad internacional y del Golfo, y la web ya está en los tres |
| Horario | Mar–Dom **11:00–23:30** · lunes apagado | Se busca antes de ir. Los lunes cierran |
| Dispositivos | Todos, sin ajuste inicial | El móvil dominará; se ajusta con datos, no a priori |

## Grupos de anuncios

La propuesta describe 6. **Con 300 €/mes recomiendo arrancar con 3.** Seis grupos a
10 €/día es repartir tan fino que ninguno acumula datos suficientes para aprender nada.
Shisha y Ocasiones entran el mes 2; Local genérico solo en escenario Standard.

### G1 · Marca — *arranca*

Presupuesto orientativo: 10–15%. Barato y defensivo.

```
[du liban]                    "du liban madrid"
[duliban]                     "du liban la moraleja"
[restaurante du liban]        "du liban reservas"
[du liban alcobendas]         "du liban carta"
```
*(`[corchetes]` = concordancia exacta · `"comillas"` = de frase)*

**Para qué sirve, porque no es obvio:** al buscar su nombre, hoy Google enseña su
Tripadvisor con la cita *"El peor restaurante árabe de Madrid"*. Un anuncio de marca cuesta
céntimos, empuja eso hacia abajo y les protege el día que un competidor decida pujar por
su nombre. Es seguro, no crecimiento.

### G2 · Libanés — *arranca*

Presupuesto orientativo: 35%.

```
"restaurante libanes madrid"      "comida libanesa madrid"
"restaurante libanes alcobendas"  "restaurante libanes la moraleja"
"cocina libanesa madrid"          "mezze madrid"
"restaurante libanes cerca"       [restaurante libanes madrid]
```

### G3 · Halal — *arranca*

Presupuesto orientativo: 50%. **Es el grupo con más recorrido.**

```
"restaurante halal madrid"        "comida halal madrid"
"restaurante halal alcobendas"    "restaurante halal cerca de mi"
"halal restaurant madrid"         "halal food madrid"
"مطعم حلال مدريد"
```

**Por qué aquí:** Al-Mounia se anuncia con el titular literal *"Restaurante Halal Madrid"*
sin ser libanés ni tener certificado. du Liban sí lo tiene. Es el único sitio donde
podemos decir algo que el competidor no puede.

### G4 · Shisha — *mes 2*
```
"terraza shisha madrid"   "restaurante con shisha madrid"
"cachimba madrid"         "shisha la moraleja"
```
Nadie se anuncia ahí hoy.

### G5 · Local genérico — *solo escenario Standard*
```
"restaurante la moraleja"  "restaurantes alcobendas"  "donde comer en la moraleja"
```
Volumen alto, intención difusa, coste por reserva peor.

### G6 · Ocasiones — *mes 2*
```
"cena romantica madrid norte"  "restaurante para eventos alcobendas"
"comida de empresa la moraleja"  "restaurante para grupos alcobendas"
```

## Negativos — esto es lo que separa una campaña sana de una que sangra

A nivel de campaña, desde el día 1:

**Empleo** · trabajo · empleo · vacante · curriculum · cv · camarero · cocinero · sueldo ·
contratar · oferta de empleo

**Recetas y hazlo tú** · receta · recetas · como hacer · casero · ingredientes · thermomix ·
tutorial

**Precio bajo** — chocan con un ticket de 30–40 € · barato · gratis · low cost ·
menu del dia · oferta · descuento · cupon · 10 euros · economico

**Buffet** — no lo hacen · buffet · bufet · all you can eat · tenedor libre

**Cocina equivocada** · kebab · doner · turco · griego · sirio · marroqui · falafel barato

**Otras ciudades** · barcelona · valencia · sevilla · malaga · bilbao · zaragoza · alicante ·
murcia · dubai · beirut

**Negocio, no cliente** · franquicia · abrir restaurante · proveedor · mayorista ·
distribuidor · curso · escuela

**Competencia por nombre** (en G2, G3, G5) · liba garden · beytna · casa arabe · al mounia ·
saona · la maquina · aurea

**Delivery** — decisión a tomar contigo: glovo · uber eats · just eat · a domicilio ·
comida a domicilio.
*Razón para excluirlos:* pagar un clic que acaba en un pedido de Glovo con comisión es de
los peores resultados posibles para un ticket de 30–40 €. Pero **el delivery es real**, así
que es una decisión de negocio, no técnica. **Mi recomendación: excluirlos en el Test** y
revisarlo con datos.

## Anuncios

Tres anuncios responsive por grupo. Reglas de marca: **sin superlativos** (van contra las
directrices de contenido de Google y contra el tono de la casa), halal y shisha como
diferenciales reales, nada de promociones inventadas.

### G3 · Halal — el que más importa

**Titulares** (máx. 30 caracteres cada uno)
```
Cocina libanesa 100% halal
Restaurante halal certificado
du Liban · La Moraleja
Halal en el norte de Madrid
Mezze, brasa y horno de leña
Reserva mesa online
Terraza y shisha
Cocina hasta las 23:30
```
**Descripciones** (máx. 90)
```
Cocina 100% halal certificada. Recetas familiares de Beirut en La Moraleja.
Dos terrazas, una cubierta. Se puede fumar shisha en las dos. Reserva online.
```
**URL final:** `https://dulibanrestaurante.com/#halal`

### G2 · Libanés
```
Restaurante libanés Madrid     Alta cocina libanesa
Recetas de Beirut              du Liban · La Moraleja
42 platos, mezze y brasa       Hummus bil Pesto de la casa
```
**URL final:** `https://dulibanrestaurante.com/#carta`

### G1 · Marca
```
du Liban · Web oficial         Reserva en la web oficial
Libanés en La Moraleja         Carta, horarios y reservas
```
**URL final:** `https://dulibanrestaurante.com/`

**Sufijo de URL final** (en todos): `utm_source=google&utm_medium=cpc&utm_campaign=sem_test&utm_content={adgroupid}`

## Extensiones

| Tipo | Contenido |
|---|---|
| **Llamada** | +34 917 54 48 38 · **con conversiones de llamada activadas** ← la medición del día 1 |
| **Ubicación** | Vinculada al Perfil de Empresa |
| **Enlaces de sitio** | Ver la carta `#carta` · Reservar mesa (SevenRooms) · Eventos privados `#eventos` · Cómo llegar `#visitanos` |
| **Textos destacados** | Cocina 100% halal certificada · Shisha en dos terrazas · Se admiten perros · Cocina hasta las 23:30 · Aparcamiento en el centro |
| **Fragmentos estructurados** | Tipo de cocina: Libanesa, Mezze, Brasa, Postres |

## Medición desde el día 1, sin tocar los legales

Esto es lo que permite lanzar **sin esperar** a las 11–17 h de trabajo de consentimiento:

1. **Conversiones de llamada** con número de desvío de Google. Encaja perfecto: el teléfono
   lo atiende una IA 24 h, así que ninguna llamada se pierde. No usa cookies.
2. **Informe por canal de SevenRooms**, etiquetando reservas por origen.
3. **Métrica "Bookings"** del Perfil de Empresa.

La atribución real por reserva (capa 3) llega con el contenedor en SevenRooms y el trabajo
legal. **Va en paralelo, no bloquea el lanzamiento.**

---

# Lo que falta antes de poder lanzar

| | Quién |
|---|---|
| Cuenta creada en modo experto, zona horaria y moneda | Tú (10 min) |
| Tarjeta | **Priya** |
| Ticket medio por mesa y margen | Priya |
| Escenario confirmado (300 €/mes × 2) | Priya |
| Decisión sobre los negativos de delivery | Tú + Priya |
| Franjas que quieren llenar | Priya |
| Vinculación con Perfil de Empresa y Search Console | Tú, tras crear la cuenta |
