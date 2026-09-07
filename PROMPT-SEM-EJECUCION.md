# Prompt para el chat de ejecución del SEM

Abrir un chat nuevo en `C:\Duliban` o en un worktree propio y pegar el bloque.

> Este prompt está escrito sabiendo que **Gonzalo no ha trabajado SEM nunca**. Por eso le
> pide al chat que explique mientras hace, y que no dé por sabido nada del vocabulario de
> Google Ads.

---

```
Vamos a poner en marcha la campaña de Google Ads de du Liban, un restaurante libanés
de alta cocina en La Moraleja (Alcobendas, Madrid). La clienta (Priya) ya ha dado
luz verde al plan.

AVISO IMPORTANTE SOBRE MÍ
Yo no he trabajado SEM nunca. Sé de SEO y de web, pero de Google Ads no. Así que:
· Explícame lo que vas haciendo y por qué, en cristiano, sin dar por sabido el
  vocabulario (CPC, CPA, ROAS, concordancia, Smart Bidding, calidad del anuncio…).
  La primera vez que uses un término, defínelo en una línea.
· Cuando haya una decisión que tomar, dame tu recomendación y el porqué, no una
  lista de opciones para que elija a ciegas.
· Si detectas que estoy a punto de hacer algo que quema dinero, párame.

LEE ESTO PRIMERO — está todo en el repo
  · SEM-PROPUESTA-DULIBAN.md   ← lo que se le envió al cliente y ha aprobado
  · SEM-INVESTIGACION.md        ← la investigación con los datos crudos y las fuentes
  · SEO-LOCAL-PLAN.md · SEO-LOCAL-REPARTO.md ← contexto del negocio y quién hace qué
  · CLAUDE.md

Presta atención especial a §6 de SEM-INVESTIGACION.md (medición y el problema legal)
y a §8 de la propuesta (lo que necesitamos del cliente).

═══════════════════════════════════════════════════════════════════
LO QUE YA SABEMOS DEL NEGOCIO
═══════════════════════════════════════════════════════════════════
· Ticket 30–40 €/persona · mesa media estimada ~100 € (pendiente de que Priya
  confirme el ticket real por mesa y el margen — es el dato que decide todo)
· Cocina 100% halal certificada · shisha en dos terrazas · perros admitidos ·
  eventos privados · Mar–Dom 13:00–01:00, lunes cerrado
· Reservas en SevenRooms, integradas con Reserve with Google
· Google: 4,4 ★ · 1.185 reseñas · el teléfono lo atiende una IA 24 h
· Search Console (desde el 22 ago): ~1.490 impresiones y 126 clics en 11 días,
  posición media 5,7 — pero casi todo son búsquedas de marca. El descubrimiento
  por gente que no les conoce es casi cero. Ese es el hueco que ataca el SEM.
· Competencia que SÍ se anuncia (verificado 21 ago): Al-Mounia con el titular
  literal "Restaurante Halal Madrid" sin ser libanés ni tener certificado, Beytna
  en "restaurante libanés madrid", y TheFork en genéricas.

═══════════════════════════════════════════════════════════════════
REGLAS QUE NO SE NEGOCIAN
═══════════════════════════════════════════════════════════════════
1. NUNCA pidas, manejes ni introduzcas datos de tarjeta. La cuenta de Google Ads la
   crea Priya con su medio de pago; nosotros entramos como usuarios. Si algún paso
   requiere meter una tarjeta, se para y lo hace ella.
2. NO lanzar ninguna campaña ni activar ningún gasto sin que yo lo apruebe
   explícitamente en este chat. Construir sí, publicar no.
3. NO activar el código del crédito de 400 € hasta que la campaña esté lista para
   gastar de verdad. Los términos exigen gastar 400 € propios en 60 días desde que
   se activa, y el crédito caduca 60 días después de abonarse. Activarlo antes de
   tiempo lo tira a la basura.
4. El MCP de Supermetrics tiene herramientas de Google Ads pero está SIN AUTORIZAR.
   No intentes el OAuth. Si hace falta para informes, dímelo y lo autorizo yo.
5. Distingue siempre DATO de ESTIMACIÓN. Si algo no se puede saber sin herramienta
   de pago, dilo; no lo rellenes con un número plausible.

═══════════════════════════════════════════════════════════════════
FASES — empieza por la 0 y párate a que yo revise
═══════════════════════════════════════════════════════════════════

FASE 0 · Preparar el terreno (se puede hacer YA, sin cuenta)
  a) Redáctame las instrucciones paso a paso que le voy a enviar a Priya para que
     cree la cuenta de Google Ads y meta su tarjeta. Con capturas descritas, en
     inglés, pensadas para alguien que no es técnico. Diez minutos de su tiempo.
  b) Redacta el ticket que Priya tiene que enviar a soporte de SevenRooms pidiendo
     que instalen nuestro contenedor de medición en el widget de reservas. Tiene que
     mencionar el evento `successfulCheckout` (§6.1 de la investigación) y salir de
     una cuenta con nivel Superuser.
  c) Dime exactamente qué accesos necesitaremos y en qué orden.

FASE 1 · Construir la campaña en frío, para que yo la revise antes de que exista
  Estructura completa según §3 de la propuesta: 6 grupos de búsquedas (marca,
  libanés, halal, shisha, local genérico, ocasiones), con:
  · palabras clave y sus concordancias, con la lógica explicada
  · NEGATIVOS — insiste aquí. Es lo que separa una campaña que funciona de una que
    sangra. Piensa en trabajo, recetas, delivery si no lo queremos, franquicias,
    "cerca de mí" fuera de zona, otros restaurantes por nombre…
  · anuncios (titulares y descripciones) en español, respetando la marca: nada de
    superlativos, halal y shisha como diferenciales reales, ticket 30–40 €
  · extensiones: ubicación, llamada, enlaces de sitio, textos destacados
  · segmentación geográfica del norte de Madrid y horario de emisión
  Entrégamelo como documento para revisar, no lo subas a ningún sitio.

FASE 2 · Medición
  Ojo con la secuencia, que importa:
  · La CAPA 1 no usa cookies y funciona desde el día 1: conversiones de llamada con
    número de desvío de Google (encaja perfecto porque el teléfono lo atiende una
    IA) + informe por canal de SevenRooms. **Con esto la campaña puede arrancar sin
    esperar al trabajo legal.**
  · La CAPA 3 (la buena, reserva real atribuida) necesita GTM dentro de SevenRooms,
    el linker cross-domain y las 11–17 h de trabajo de consentimiento y legales
    descritas en §6.3. Eso va en paralelo, no bloquea el lanzamiento.
  · legal.html dice hoy que la web NO tiene analítica. Cualquier etiqueta obliga a
    reescribirlo y a ampliar js/consent.js con Consent Mode v2. Si tocas eso, va a
    las 3 páginas y el texto legal tiene que quedar verdadero.

FASE 3 · Lanzamiento — solo con mi OK explícito

FASE 4 · Optimización semanal
  Términos de búsqueda reales → negativos nuevos. Auction Insights a las 2–3 semanas
  para ver quién puja de verdad contra nosotros. Ajuste de presupuesto según el coste
  por reserva real, no según el estimado.

═══════════════════════════════════════════════════════════════════
CÓMO TRABAJAR
═══════════════════════════════════════════════════════════════════
· Un documento por fase, en el repo, en español.
· Commits pequeños. No hagas push sin pedírmelo.
· Al final de cada fase, párate y explícame en cuatro líneas qué has hecho, qué
  decisión tengo que tomar y qué pasa si me equivoco.
· Si algo de la propuesta ya no encaja con lo que ves hoy en Google, dímelo en vez
  de seguir el plan a ciegas. La investigación es del 21 de agosto.
```

---

## Estado de lo que depende del cliente

| Lo que hace falta | Estado |
|---|---|
| Luz verde al plan | ✅ Priya |
| Ticket medio por mesa y margen | ⏳ pedido en `MENSAJE-PRIYA.md` |
| Escenario y presupuesto confirmados | ⏳ pedido (propuesta: 300 €/mes × 2 meses) |
| Cuenta de Google Ads + tarjeta suya | ⏳ pedido |
| Ticket a SevenRooms | ⏳ pedido |
| Aprobación de las 11–17 h de legales | ⏳ pedido |
| Certificado halal | ⏳ pedido |
| Franjas que quieren llenar | ⏳ pedido |

La Fase 0 y la Fase 1 **no dependen de nada de esto** y se pueden hacer hoy.
