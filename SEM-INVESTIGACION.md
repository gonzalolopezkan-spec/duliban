# SEM (Google Ads) — investigación interna · du Liban

> **21 de agosto de 2026.** Investigación previa a la propuesta de SEM. No se ha creado
> ninguna campaña, no se ha conectado ninguna cuenta de pago y no se ha gastado nada.
> Convención: **[DATO]** = verificado con fuente · **[ESTIMACIÓN]** = cálculo nuestro con
> las hipótesis a la vista · **[OBSERVADO]** = comprobado en vivo por nosotros ese día.
>
> Documentos hermanos: [SEM-PROPUESTA-DULIBAN.md](SEM-PROPUESTA-DULIBAN.md) (cliente, EN)
> · `SEO-LOCAL-PLAN.md` (auditoría de la ficha, mismo día).

---

## 0. Resumen ejecutivo

1. **Sí hay competencia pagando por nuestras búsquedas**, pero no es la que pensábamos:
   en las comprobaciones en vivo del 21-ago los anunciantes activos eran **Beytna**
   (libanés, 4,8★·5,4k reseñas), **Al-Mounia** (marroquí, puja explícitamente por
   "restaurante halal madrid") y **TheFork**. El anuncio de **Liba Garden** que vio
   Gonzalo no se reprodujo en ninguna de las ~9 búsquedas del día — cuenta intermitente,
   con presupuesto agotado o con franjas horarias.
2. **Nadie puja por la marca "du Liban"** a día de hoy. La defensa de marca costaría
   céntimos y de paso empuja hacia abajo el snippet negativo de Tripadvisor ("El peor
   restaurante árabe de Madrid…") que sale hoy en la SERP de marca.
3. **Volúmenes y pujas reales conseguidos** (21-ago, tarde): KeywordTool no dio nada,
   pero el Keyword Planner de la cuenta de Google Ads de Gonzalo (892-130-5901) sí —
   30 keywords con rangos de volumen y pujas de parte superior de página (§2.3).
   Titular: **las pujas reales son 2–4× más baratas** que la hipótesis de planificación
   inicial (mayoría entre 0,10 y 0,85 €), y `restaurante halal cerca de mi` mueve
   **10–100 mil búsquedas/mes** en España.
4. **El crédito de 400 € es real pero no es regalo inmediato**: hay que gastar 400 €
   propios en 60 días y el crédito llega después y caduca a los 60 días de abonarse.
   En la práctica: financia el segundo y tercer mes, no el primero.
5. **Tripadvisor de pago: no.** Su producto de Ads es tráfico que se queda dentro de
   Tripadvisor, la audiencia es turista, y el perfil de du Liban allí (4,0·390, rango
   €€€€ erróneo) es su activo más débil. Lo gratis (reclamar y corregir la ficha, C3
   del plan SEO) sí.
6. **La medición es el trabajo de verdad**: la conversión ocurre en sevenrooms.com.
   Hay vía documentada (GTM instalado por SevenRooms + evento `successfulCheckout`),
   pero exige Consent Mode v2, reescribir `legal.html` y ampliar `js/consent.js`.
   Está cuantificado en §6.

---

## 1. Verificación de la competencia (en vivo, 21-ago-2026 ~14:20–14:40, IP Madrid)

Método: búsquedas reales en google.es desde el Chrome del usuario (IP residencial de
Madrid), más el Centro de Transparencia de Anuncios de Google. Los anuncios de search
son intermitentes (presupuesto, franja, subasta): "no visto" ≠ "no existe", por eso
cada celda lleva la hora del muestreo único.

| Búsqueda | ¿Anuncios? [OBSERVADO] |
|---|---|
| `du liban restaurante la moraleja` | **Ninguno.** #1 orgánico propio |
| `du liban madrid` | Ninguno |
| `restaurante libanes la moraleja` | Ninguno. #1 orgánico propio |
| `restaurante libanes madrid` | **Beytna** (patrocinado local: "El Mejor valorado de Madrid… Menú del día y degustación. Terraza acojedora" — sic) + **TheFork** (anuncio de búsqueda, badge "Más de 1 millón de visitas el mes pasado") |
| `restaurante halal madrid` | **Al-Mounia** (`restaurantealmounia.es`): titular literal "**Restaurante Halal Madrid** — Alta cocina halal…", con sitelinks |
| `comida halal madrid` | **Al-Mounia** otra vez (badge "Más de 10.000 visitas el mes pasado") |
| `terraza shisha madrid` | Ninguno |
| `restaurante la moraleja` | Ninguno |
| `restaurante alcobendas` | Ninguno |
| `liba garden` (su marca) | Ninguno — **no defienden ni su propia marca** |

### 1.1 Los puntos de partida del usuario, contrastados

- **"Liba Garden ya se anuncia"** — *no reproducido hoy*. En ninguna de las 9+
  búsquedas apareció su anuncio, y el Centro de Transparencia devuelve **0 anuncios**
  para `libagarden.com` (región España, cualquier fecha). El avistamiento de Gonzalo es
  creíble (los anuncios de cuentas pequeñas van y vienen), pero la foto de hoy es: si
  se anuncian, es con poco presupuesto, con dayparting, o lo han pausado. **Lo que sí
  es seguro es que no estaban pujando por la marca "du Liban" ni por las genéricas en
  el momento del muestreo.** Quien sí puja de forma consistente es **Al-Mounia** (dos
  búsquedas halal distintas) y **Beytna** (formato local, ligado a su ficha).
- **Casa Árabe Alcobendas, Daily y Áurea**: ningún anuncio visto en ninguna búsqueda,
  incluidas `restaurante alcobendas` y `restaurante la moraleja`. Sin indicios de que
  hagan SEM.

### 1.2 Límite de la herramienta de transparencia [OBSERVADO]

El Centro de Transparencia funciona (control: `thefork.es` → 25 anuncios de "LA
FOURCHETTE ESPAÑA SL, Verificado"), pero devuelve **0 anuncios** para
`libagarden.com`, `beytna.com` y `restaurantealmounia.es` — **incluso habiendo visto
el anuncio de Al-Mounia y Beytna en vivo minutos antes**. Conclusión operativa: para
anunciantes locales pequeños (sin verificar) el Centro no retiene creatividades y no
sirve para estimar gasto ni antigüedad de campañas. No apoyarse en él en la propuesta.

### 1.3 Hallazgos colaterales de la SERP (alimentan el plan SEO)

- El snippet de Tripadvisor en las búsquedas de marca (`du liban madrid`,
  `restaurante libanes alcobendas`) muestra **"El peor restaurante árabe de Madrid.
  Comida muy básica y excesivamente cara…"** y el rango **€€€€**. Razón adicional para
  la campaña de defensa de marca y para C3 (reclamar Tripadvisor).
- `dulibangourmet.com` (el dominio zombi de P7) sigue rankeando en la marca.
- du Liban **no aparece** en el pack local de `restaurante la moraleja` (salen Taberna
  de la Moraleja, A Brasa, La Penela, Peppe Fusco — vecinos del mismo complejo), ni en
  nada de shisha, ni en nada de halal. Coherente con el diagnóstico del plan SEO: la
  ficha no compite en las búsquedas que definen el negocio.
- Competidor no contemplado: **Fatoush Madrid** (`fatoush.es`) — libanés **halal** con
  **shisha**, tres locales (Chamberí, Tetuán, Canillas "abre el 1 de septiembre"),
  IG 10k. Posicionamiento casi idéntico al nuestro y SEO fuerte. Vigilarlo.

---

## 2. Palabras clave (A)

### 2.1 Lo que se pudo y no se pudo obtener

**No hay volúmenes.** [DATO sobre la herramienta] El MCP de KeywordTool en modo
invitado solo devuelve métricas "si están en caché" y ninguna de las **14 semillas**
consultadas (país España, español, Google; 2 extra en Bing/cachimba) tenía caché:
todas volvieron como "keyword text only". Gastadas 14 de las 84 peticiones del día;
paré ahí porque más peticiones no iban a producir métricas, solo más textos.

**Cómo se cierra el hueco (gratis):** el **Keyword Planner** de Google Ads da rangos
de volumen reales para España **sin gastar un euro** en cuanto la cuenta existe (y
medias exactas cuando hay facturación activa). Es el paso 1 de la implementación, no
hace falta comprar nada. Alternativa de pago: KeywordTool Pro 68–88 $/mes o Semrush
~130 €/mes — innecesarios para esto.

**Proxy débil que sí tenemos** [OBSERVADO]: nº total de sugerencias de autocompletar
por semilla (correlaciona burdamente con demanda, no es volumen): `restaurante
alcobendas` 425 · `restaurante la moraleja` 270 · `shisha madrid` 201 · `cachimba
madrid` 125 · `restaurante libanés madrid` 120 · `restaurante árabe madrid` 84 ·
`hummus madrid` 65 · `cena romántica madrid` 61 · `restaurante halal madrid` 61 ·
`comida halal madrid` 55 · `mezze madrid` 47 · `terraza shisha madrid` 8.

### 2.2 Estructura de grupos propuesta, con lectura de intención

Del texto de las ~180 sugerencias recogidas:

| Grupo | Keywords núcleo (de las sugerencias reales) | Intención |
|---|---|---|
| **1 · Marca (defensa)** | du liban, duliban, du liban carta/reservas/opiniones | Reservar — la más caliente. CPC de céntimos. Además tapa el snippet negativo de Tripadvisor |
| **2 · Libanés** | restaurante libanés madrid · mejor restaurante libanés madrid · restaurante libanés alcobendas / la moraleja / las tablas | **Reservar.** El corazón de la campaña |
| **3 · Halal** | restaurante halal madrid (+ cerca de mí, centro, mejor valorados) · restaurantes comida halal madrid | **Reservar**, nicho de altísima afinidad. Al-Mounia ya está pujando aquí y du Liban tiene mejor producto (certificado + libanés). "comida halal madrid" es mixta (mezcla delivery) — concordancia de frase y negativas |
| **4 · Shisha/cachimba** | terraza shisha madrid · shisha madrid cerca de mí · sitios de cachimba madrid · fumar cachimba madrid · terraza cachimba madrid · shisha lounge | Reservar/visitar. ⚠️ El término castizo es **cachimba** — el doble de sugerencias que shisha. Nadie anunciándose hoy: hueco barato |
| **5 · Zona** | restaurante la moraleja · restaurante alcobendas (+ con terraza, abierto ahora) | Reservar, pero genérica: compite con toda la oferta de la zona. Solo en escenario alto |
| **6 · Ocasión** | cena romántica madrid (con vistas, restaurante) · restaurante (para) eventos privados madrid | Reservar, volumen bajo en eventos (26 sugerencias) pero ticket alto. Romántica solo geo-acotada al norte |
| Descartadas | mezze madrid (ruido de marcas), hummus madrid (mitad informacional/recetas), restaurante árabe madrid (la dominan marcas ajenas — probar solo en escenario alto) | Informarse |

**Negativas iniciales:** tienda, comprar, receta, tabaco, carbón, estanco, barato,
a domicilio, delivery, kebab, buffet, curso, trabajo/empleo, segunda mano.

### 2.3 Datos reales del Keyword Planner [DATO — 21-ago-2026]

Plan creado en la cuenta de Google Ads de Gonzalo (892-130-5901, sin campañas
activas → los volúmenes salen en **rangos**, no medias exactas; con gasto activo se
afinarían). Segmentación: **España**, todos los idiomas, Google, ago 2025 – jul 2026.
"Puja" = puja por la parte superior de la página (intervalo bajo–alto).

| Keyword | Búsquedas/mes | Compet. | Puja |
|---|---|---|---|
| **du liban** | **1 mil – 10 mil** | Baja | 0,17 – 0,99 € |
| duliban restaurante | 10 – 100 · **+900 % en 3 meses** | Baja | 0,25 – 0,63 € |
| **restaurante libanes madrid** | **1 mil – 10 mil** | Media | 0,16 – 0,60 € |
| mejor restaurante libanes madrid | 100 – 1 mil (−90 % interanual) | Media | 0,16 – 0,59 € |
| restaurante libanes alcobendas | 10 – 100 | Baja | — |
| restaurante libanes la moraleja | 10 – 100 | Baja | 0,24 – 0,68 € |
| restaurante libanes las tablas | 10 – 100 | Media | 0,11 – 0,52 € |
| **restaurante halal cerca de mi** | **10 mil – 100 mil** | Baja | 0,18 – 0,64 € |
| restaurante halal madrid | 100 – 1 mil | Media | 0,07 – 0,49 € |
| comida halal madrid | 10 – 100 | Media | — |
| restaurante arabe madrid | 100 – 1 mil | Media | 0,19 – 0,84 € |
| restaurante arabe alcobendas | 10 – 100 | Baja | 0,20 – 0,59 € |
| cachimba madrid | 100 – 1 mil | Baja | — |
| sitios de cachimba madrid · terraza cachimba madrid | 10 – 100 c/u | Baja | — |
| shisha madrid · terraza shisha madrid · shisha lounge madrid · shisha madrid cerca de mi | **sin datos** (ver nota) | — | — |
| **restaurante la moraleja** | **1 mil – 10 mil** | Baja | 0,20 – 0,84 € |
| **restaurante alcobendas** | **1 mil – 10 mil** | Baja | 0,15 – 0,43 € |
| restaurantes en la moraleja con terraza | 10 – 100 | Baja | — |
| restaurante con terraza alcobendas | 10 – 100 | Baja | 0,11 – 0,39 € |
| donde comer en alcobendas | 100 – 1 mil | Baja | 0,11 – 0,44 € |
| cena romantica madrid | 100 – 1 mil | **Alta** | 0,19 – 0,84 € |
| restaurante eventos madrid | 100 – 1 mil · **+900 % en 3 meses** | Baja | **0,66 – 2,32 €** |
| restaurante para eventos privados madrid · mezze madrid · mejor restaurante halal madrid | sin datos | — | — |
| hummus madrid | 10 – 100 | Baja | — |

**Lecturas:**

- **Las pujas reales tumban la hipótesis de CPC 1,0–1,5 €.** Casi todo el mapa está
  entre 0,10 y 0,85 €. Nueva cifra de planificación: **CPC 0,30–0,70 €** — lo que
  ~duplica los clics por euro de los escenarios originales.
- `restaurante halal cerca de mi` (10–100 mil/mes, España) es la mina: se captura con
  geo-segmentación al norte de Madrid + concordancia de frase, pagando solo la
  porción local de ese volumen.
- `du liban` con 1–10 mil/mes sorprende al alza — ⚠️ parte es ruido en francés ("du
  Liban" = "del Líbano" en cualquier contexto). La campaña de marca debe ir en exacta
  `[du liban]` + variantes con "restaurante/carta/reservas", no en amplia.
- `duliban restaurante` +900 % en tres meses: la marca está creciendo en búsqueda —
  coherente con la web nueva rankeando y la actividad del verano.
- **⚠️ Los términos "shisha" devuelven "sin datos" mientras "cachimba" sí tiene** —
  patrón típico de término restringido por la política de tabaco de Google Ads
  [ESTIMACIÓN/hipótesis]. Riesgo real de que el grupo 4 sufra desaprobaciones si el
  anuncio menciona shisha explícitamente. Plan B: pujar por los términos "cachimba"
  (sí tienen datos), aterrizar en la sección terrazas, y NO mencionar tabaco en el
  creativo. Validar en la primera semana de campaña.
- `restaurante eventos madrid` es lo más caro (0,66–2,32 €) y crece +900 % — hay
  demanda comercial. Con el ticket de un evento privado, un CPC de 2 € sigue siendo
  regalado; mantenerlo en el escenario Normal.
- `cena romantica madrid` es la única con competitividad **Alta** — entrar con puja
  baja o dejarla para el escenario Agresivo.

**Geo:** radio norte de Madrid (Alcobendas, SS de los Reyes, La Moraleja, Encinar,
Fuente del Fresno, Sanchinarro, Las Tablas, Mirasierra) para los grupos 2–6; la marca
sin restricción. **Franjas:** cocina 13:00–16:30 y 20:00–23:30 con margen previo;
shisha hasta cierre.

---

## 3. Gasto de la competencia (B)

**Método y honestidad:** sin Semrush/SpyFu no hay cifra fiable. El Centro de
Transparencia no retiene sus anuncios (§1.2). Lo que sigue es
volumen × CPC × cuota de impresiones **[ESTIMACIÓN]** con los volúmenes también
estimados (los reales, pendientes del Keyword Planner). Margen de error: fácilmente
±2× en cada dirección.

Hipótesis comunes: cluster "restaurante/comida halal madrid" ~2.000–5.000 búsquedas/mes;
"restaurante libanés madrid" y variantes ~1.500–4.000/mes; CPC restauración España
0,80–2,10 € [DATO, ver §5]; cuota de impresiones de un anunciante pequeño 20–50 %.

| Anunciante | Cálculo | Estimación mensual |
|---|---|---|
| **Al-Mounia** | Puja consistente en halal (2/2 muestras) + probablemente árabe/marroquí. 3.500 búsq. × CTR 7 % × IS 35 % × 1,2 € | **~100–400 €/mes** en el cluster halal; total cuenta quizá 300–800 € |
| **Beytna** | Formato local + search en libanés. Similar | **~200–600 €/mes** |
| **Liba Garden** | No visto hoy; avistamiento único previo | **0–300 €/mes** (esporádico o pausado) |
| **TheFork** | Portal nacional, presupuesto de otra liga | Irrelevante como referencia |
| Casa Árabe / Daily / Áurea | Sin indicios | ~0 € |

**Cómo se sabría de verdad** (en orden de coste): (1) **Auction Insights** de Google
Ads — gratis, exacto (% de coincidencia de subasta, cuota de impresiones de cada
competidor), pero solo una vez nuestras campañas estén activas: a las 2–3 semanas
tendremos la foto real; (2) Semrush/SpyFu ~120–130 €/mes, estimaciones de tráfico de
pago por dominio; (3) muestreo manual sistemático (gratis, laborioso, sesgado).

**Lectura estratégica:** la competencia SEM en este nicho es débil y desordenada.
Nadie cubre bien halal+libanés+shisha juntos, nadie defiende marcas, y en la zona
norte no puja nadie. Entrar ahora es barato; el riesgo no es la subasta, es nuestra
propia ficha (P1/P2 del plan SEO) convirtiendo mal el clic.

---

## 4. Presupuesto para du Liban (C) — desde el negocio hacia atrás

Cadena de valor [ESTIMACIÓN con hipótesis explícitas]:

- Ticket 30–40 €/persona [DATO cliente] × mesa media 2,5–3 personas → **~90–110 € de
  facturación por reserva** (uso 100 €).
- Margen bruto restauración ~65–70 % s/ comida; contribución neta por mesa incremental
  (sin coste fijo añadido) razonable: **~30–40 €**.
- Además: shisha/coctelería post-cocina sube el ticket, y un cliente de la zona que
  repite vale varias visitas (LTV ≥ 2–3× la primera) — no lo meto en el número, es
  colchón.
- **Coste por reserva (CPA) asumible: hasta ~15 € cómodo, hasta ~25 € tolerable en
  fase de prueba.** A 15 € de CPA y 100 € de ticket, el coste de marketing es el 15 %
  de la primera visita y se diluye con la recurrencia.
- Conversión esperada clic→reserva (reserva SevenRooms + llamada + Reserve with
  Google): **5–8 %** [ESTIMACIÓN anclada en el 8,05 % mediano del sector US, ver §5,
  rebajada por fricción del salto a SevenRooms]. Con el **CPC real de 0,30–0,70 €**
  (Keyword Planner, §2.3) → **CPA teórico 5–14 €** — por debajo del umbral cómodo ya
  desde el arranque. (La hipótesis previa de CPC 1,0–1,5 € daba 13–30 €; se mantiene
  como techo pesimista.)
- ⚠️ **El ticket y el margen son hipótesis nuestras hasta que el cliente los
  confirme.** Los 30–40 €/persona vienen del propio cliente, pero la mesa media, el
  peso de shisha/coctelería y el margen por mesa no. El mensaje de WhatsApp los
  pregunta explícitamente (ver `feedback_sem_message_first`): sin esos dos números,
  el umbral de CPA rentable es provisional.

### Tres escenarios

| | **Prueba** | **Normal** | **Agresivo** |
|---|---|---|---|
| Presupuesto/mes | **300 €** (10 €/día) | **600 €** (20 €/día) | **1.200 €** (40 €/día) |
| Grupos activos | 1 Marca + 2 Libanés + 3 Halal | + 4 Shisha + 6 Eventos | + 5 Zona + romántica + árabe, y ampliar geo hacia Madrid capital en halal |
| Clics esperados (CPC 0,30–0,70 € real; techo 1,5 €) | ~400–1.000 | ~850–2.000 | ~1.700–4.000 |
| Reservas/mes esperadas (5–8 %) | **20–50** | **45–110** | ver nota de inventario |
| CPA esperado | 5–14 € (techo 30 €) | 5–14 € | 6–18 € (la cola de zona convierte peor) |
| Facturación estimada (100 €/reserva) | 2.000–5.000 € | 4.500–11.000 € | — |
| Para qué sirve | Validar CPA real y volumen; activar el crédito de 400 € | Régimen de crucero recomendado | Solo si Normal da CPA <15 € sostenido y hay capacidad de sala (ojo viernes/sábado ya llenos) |

> **Nota de inventario (escenario Agresivo):** con CPC ~0,5 €, 1.200 €/mes son
> ~2.400 clics — probablemente **más inventario del que existe** en el radio norte
> con estas keywords (los volúmenes locales son rangos de 1–10 mil). El presupuesto
> agresivo solo se absorbe abriendo el halal a todo Madrid y sumando ocasión
> (romántica, eventos). Alternativa más sana: quedarse en Normal y que el sobrante
> financie el trabajo de medición/SEO.
>
> **Nota de humildad:** los rangos de reservas del cuadro salen de multiplicar
> rangos (volumen × CPC × CVR estimada) — el intervalo real del mes 1 será más feo
> que la celda. El compromiso con el cliente es el CPA objetivo (<15 €), no la
> celda de reservas.

**Recomendación:** empezar en Prueba 2 meses (los 400 € gastados activan el crédito),
pasar a Normal el mes 3 pagándolo en gran parte con el crédito, y decidir Agresivo
con datos. El límite real del escenario agresivo no es el dinero, es la **capacidad de
sala en horas punta**: los anuncios se pueden ajustar para empujar valle (mediodías
entre semana, domingos noche), que es donde una reserva incremental vale de verdad.

---

## 5. Benchmarks: qué esperar de verdad (D)

Sector "Restaurants & Food", búsqueda de Google, **medianas de 13.474 campañas US,
abr-2025→mar-2026** [DATO — WordStream/LocaliQ 2026: wordstream.com/blog/2026-google-ads-benchmarks]:

| Métrica | Restauración | Media todos los sectores |
|---|---|---|
| CTR | **6,83 %** | 6,64 % |
| CPC | **2,05 $** | 5,42 $ |
| Conversión | **8,05 %** | 8,18 % |
| Coste por lead | **30,57 $** | 66,69 $ |

Serie 2025 para tendencia [DATO]: CTR 7,58 % · CPC 2,05 $ · CVR 7,09 % · CPL 30,27 $.
Restauración es el 2.º CPC más bajo de toda la plataforma.

España [ESTIMACIÓN de agencias, sin muestra publicada]: CPC general 0,80–2,50 €
(organikmarketing.es 2026); restauración Barcelona 0,80–2,10 € según zona y hora
(semconsultingbcn.com 2026). **Superado por dato propio:** las pujas top-of-page
reales de nuestras keywords (§2.3) están casi todas en 0,10–0,85 € — **cifra de
planificación definitiva: CPC 0,30–0,70 €**, con 1,5 € como techo pesimista.

**Plazos** [DATO Google + consenso de agencias]: el aprendizaje de Smart Bidding tarda
"hasta 3 semanas o 1–2 ciclos de conversión" (support.google.com/google-ads/answer/13020501);
con el volumen de conversiones bajo de un restaurante local, **no juzgar CPA hasta la
semana 3–4** y no tocar puja/presupuesto en ese periodo (cada cambio grande reinicia
el aprendizaje). Clics e impresiones se ven el día 1; el CPA estabilizado, en el mes 2.

**No existe** benchmark España/Europa con metodología publicada, ni desglose "fine
dining" — WordStream agrupa toda la restauración y es US/USD. Marcado como límite.

---

## 6. Medición (E) — el problema legal y su solución

### 6.1 La arquitectura que funciona [DATO por triangulación de 3 agencias]

SevenRooms **no** es self-service: hay que pedir (contacto con nivel **Superuser** de
la cuenta SevenRooms de du Liban, vía ticket a soporte) que **instalen nuestro
contenedor de GTM dentro de su widget**. El widget emite eventos JS predefinidos —
el que importa es **`successfulCheckout`** (case-sensitive) — y sobre ese evento se
cuelgan la etiqueta de conversión de Google Ads y GA4. Fuentes: evolvingdigital.com.au,
joliapp.com (2026), monogic.co. No hay artículo público en help.sevenrooms.com
(no verificable — confirmar con el account manager cuando el cliente dé el acceso).

**Detalle técnico crítico (nuestro caso concreto):** la web enlaza a
`sevenrooms.com/explore/duliban/...` en pestaña nueva — no hay iframe (bien: el modo
iframe es el problemático con cookies de terceros). Pero el **GCLID no sobrevive al
salto de dominio por sí solo**: hace falta el **linker cross-domain** de gtag/GTM en
`dulibanrestaurante.com` (parámetro `_gl` añadido al enlace saliente) y el contenedor
dentro de SevenRooms leyéndolo. Configurable; probarlo es parte del setup.

### 6.2 Las tres capas de medición, de menos a más esfuerzo

1. **Sin tocar la web (día 1, sin cookies):** conversiones de **llamada** con número
   de desvío de Google (disponible en España [DATO: support.google.com/google-ads/answer/2454052]
   — encaja perfecto porque el teléfono lo atiende una IA 24 h, cada llamada de anuncio
   queda contada), + informe por canal de SevenRooms (etiqueta cada reserva por origen)
   + métrica "Bookings" del Perfil de Empresa [DATO: support.google.com/business/answer/9918094].
   Nota: **no hay confirmación** de que las reservas de Reserve with Google se
   atribuyan como conversión a Ads — se ven en el panel de GBP, no en Ads (no verificable).
2. **Proxy en dominio propio:** clic en los botones Reservar como conversión
   secundaria. Infla (no todo clic reserva) — nunca como conversión principal.
3. **La de verdad:** GTM en SevenRooms + `successfulCheckout` + linker (§6.1). Con
   esto el CPA por reserva es real y Smart Bidding puede optimizar a reserva.

### 6.3 El coste legal/técnico que no se puede esconder [DATO]

`legal.html` afirma hoy que la web no tiene analítica y que el único tercero es Google
Maps; `js/consent.js` solo gatea el mapa. Cualquier etiqueta de Google Ads:

- Exige **Consent Mode v2** (obligatorio en el EEE desde marzo 2024 [DATO:
  support.google.com/google-ads/answer/13695607]): señales `ad_storage`,
  `ad_user_data`, `ad_personalization`, `analytics_storage` desde el banner.
- En modo "advanced" (etiquetas siempre cargadas, pings sin cookies si se rechaza)
  Google **modela** conversiones perdidas [DATO: support.google.com/google-ads/answer/10548233];
  en modo "basic" (no cargar nada sin consentimiento — lo más conservador y lo más
  coherente con el espíritu del banner actual) se pierde el modelado.
- Punto abierto: si Google exige **CMP certificada** o basta nuestro banner emitiendo
  las señales correctamente — las fuentes divergen; validar al implementar
  (no verificable hoy).

**Trabajo real cuantificado:**

| Tarea | Esfuerzo |
|---|---|
| Ampliar `js/consent.js`: 2 categorías (mapa / publicidad), señales Consent Mode v2, re-consentimiento de quien ya eligió (bump de `dl-consent-v1`) | 4–6 h |
| gtag/GTM en las 3 páginas + linker cross-domain + conversión de llamada + clic-reserva | 3–4 h |
| Reescribir `#cookies` y `#privacidad` de `legal.html` (solo ES) coherentes con el mecanismo real | 2–3 h |
| Coordinación SevenRooms (ticket Superuser, verificación `successfulCheckout`, prueba de reserva real) | 2–4 h + espera del ticket |
| **Total setup de medición** | **~11–17 h una vez** |

### 6.4 Crédito de 400 € [DATO]

Términos España (google.com/intl/es_es/ads/coupons/terms/ + support 6388096): cuenta
con **<14 días** desde la primera impresión, **gastar 400 € en 60 días** desde aplicar
el código, crédito abonado después (hasta 35 días según términos genéricos; ~5 según
el cupón UE citado por terceros) y **caduca a los 60 días** de abonarse. Un solo
crédito por cliente, solo facturación España. ⚠️ Verificar el importe/ventana exactos
en el enlace de T&C del banner del panel del cliente antes de prometer nada.
Consecuencia de diseño: **no activar el código hasta que la campaña esté lista para
gastar de verdad**, y planificar el gasto del crédito dentro de su ventana.

### 6.5 Herramientas conectadas

El MCP de Supermetrics (con conectores de Google Ads para informes) está **sin
autorizar** — OAuth pendiente. No es necesario para lanzar; sería útil para el
reporting mensual automatizado. Si se quiere usar, hay que autorizarlo desde una
sesión interactiva (`/mcp`) o los ajustes de conectores de claude.ai.

---

## 7. Google Ads vs Tripadvisor (F)

**Recomendación única: Google Ads. Tripadvisor de pago, no.** Datos:

| | Google Ads | Tripadvisor Ads / Premium |
|---|---|---|
| Modelo | CPC, presupuesto libre, sin permanencia | Ads: CPC dentro de Tripadvisor, renovación mensual automática [DATO: tripadvisor.com/business/restaurants/ads]. Premium: suscripción de visibilidad |
| Precio | Lo que decidamos (300–1.200 €/mes) | Opaco, personalizado por local. Referencias: 2,69–8,08 $/día (reviewgrower), 3–12 €/día (Bilnea 2019, ≈90–360 €/mes); Premium £64,99/mes (2019, The Caterer). Sin tarifario público 2026 [DATO] |
| A dónde va el clic | **Nuestra web y nuestra reserva** | **Al perfil de Tripadvisor** ("drive traffic to your listing") — ni web, ni píxel, ni SevenRooms [DATO] |
| Audiencia | Quien busca restaurante en la zona **ahora** | Mayoritariamente turista planificando [INFERENCIA razonada] |
| El activo de du Liban en cada plataforma | Google: **4,4★ · 1.180 reseñas**, ficha integrada con Reserve | Tripadvisor: **4,0★ · 390**, rango €€€€ erróneo, datos viejos — pagaríamos por enseñar nuestro perfil más débil |
| Contexto España | Las reseñas deciden (59 % factor nº1, TheFork Lab 2026, 6.000 encuestados [DATO: infohoreca.com]) y los estudios españoles recientes miden reseñas de **Google**, no de Tripadvisor | ROI cuestionado incluso en hostelería turística (caso Q4Launch: 6 $/clic sin retorno) |

La hipótesis de Gonzalo era correcta en la conclusión y aproximada en el modelo de
negocio: Tripadvisor Ads es **CPC con renovación mensual**, no exactamente
"suscripción anual" (Premium sí es suscripción). La conclusión no cambia: no compensa.
Lo que sí: **C3 del plan SEO (gratis)** — reclamar el perfil, corregir €€€€ → 30–40 €,
teléfono, web y fotos, porque ese perfil sale en nuestra SERP de marca con un snippet
negativo.

---

## 8. Lo que no he podido averiguar y por qué

1. ~~Volúmenes de búsqueda reales~~ — **resuelto el mismo día** vía Keyword Planner de
   la cuenta de Gonzalo (§2.3). Quedan en rangos (no medias exactas) porque la cuenta
   no tiene gasto activo; se afinan solas cuando la campaña arranque. Pendiente
   dentro de esto: por qué los términos "shisha" no devuelven datos (hipótesis:
   política de tabaco) — se valida lanzando.
2. **Si Liba Garden está anunciándose ahora y cuánto gasta** — anuncio no reproducido
   en 9+ búsquedas; Centro de Transparencia sin retención para anunciantes pequeños.
   Solución: Auction Insights (gratis) a las 2–3 semanas de campaña propia; o
   Semrush ~130 €/mes para una estimación externa.
3. **Gasto real de Al-Mounia/Beytna** — misma limitación; solo estimación ±2×.
4. **T&C exactos del cupón de 400 € del panel del cliente** — los términos públicos no
   citan el importe; verificar en el enlace del propio banner (acceso: cuenta GBP del
   cliente).
5. **Documentación oficial de SevenRooms sobre GTM/píxeles** — help center no indexado;
   mecanismo confirmado por 3 agencias independientes. Confirmar con su soporte.
6. **Si Reserve with Google atribuye reservas a campañas de Ads** — sin fuente que lo
   confirme; asumir que no.
7. **Si el modelado de conversiones exige CMP certificada** para un banner propio —
   fuentes divergentes; validar al implementar.
8. **Benchmarks de restauración España con metodología** — no existen publicados; se
   usa US (WordStream) + rangos de agencias españolas.
