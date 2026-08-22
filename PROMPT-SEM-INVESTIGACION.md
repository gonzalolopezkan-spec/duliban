# Prompt para el chat de investigación SEM

Abrir un chat nuevo en `C:\Duliban` (o en un worktree propio) y pegar el bloque.

---

```
Necesito preparar una propuesta de SEM (Google Ads) para du Liban, un restaurante
libanés de alta cocina en La Moraleja (Alcobendas, Madrid). El cliente lo ha pedido
él. Esto es INVESTIGACIÓN Y PROPUESTA: no vas a crear ninguna campaña ni a gastar
un euro.

Lee primero, que ahí está todo el contexto del negocio y de su presencia digital:
  · CLAUDE.md
  · SEO-LOCAL-PLAN.md      (auditoría de la ficha de Google y de la web, 21 ago 2026)
  · SEO-LOCAL-REPARTO.md

Datos del negocio que ya están verificados y no hace falta volver a buscar:
  · Ticket medio 30–40 €/persona. Cocina 100% halal certificada. Shisha en las dos
    terrazas. Perros admitidos. Eventos privados.
  · Restaurante Mar–Dom 13:00–01:00, lunes cerrado. Cocina 13:00–16:00 y 20:00–23:30.
  · Google: 4,4 ★ con 1.180 reseñas · 4.210 vistas de ficha al mes ·
    4.966 interacciones entre marzo y agosto de 2026.
  · Reservas en SevenRooms, integradas con Google Reserve.
  · Competencia local: Casa Árabe Alcobendas (4,6 · 728), Liba Garden (4,4 · 498),
    Restaurante Daily (4,1 · 1.209), Restaurante Áurea La Moraleja (4,2 · 359).

═══════════════════════════════════════════════════════════════════
PUNTOS DE PARTIDA QUE YA TENGO — confírmalos, no los repitas a ciegas
═══════════════════════════════════════════════════════════════════
1. LIBA GARDEN YA SE ANUNCIA EN GOOGLE. Buscando "du Liban restaurante La Moraleja"
   aparece un anuncio de libagarden.com. Confírmalo y averigua hasta dónde llega:
   ¿pujan por la marca "du Liban"? ¿por "restaurante libanés Madrid"? ¿por halal?
   Mira también si lo hacen Casa Árabe, Daily o Áurea.
2. HAY 400 € DE CRÉDITO DE GOOGLE ADS esperando en el panel de Perfil de Empresa
   del cliente ("Claim your credit", solo para anunciantes nuevos). Verifica
   condiciones reales: normalmente hay que gastar una cantidad equivalente primero.
3. TRIPADVISOR. Mi hipótesis es que no compensa: producto de suscripción anual,
   pensado para turistas, y su Tripadvisor (4,0 · 389) es mucho más débil que su
   Google (4,4 · 1.180). Contrástalo con datos y precios reales de los productos de
   pago de Tripadvisor en España, y dime si me equivoco.

═══════════════════════════════════════════════════════════════════
QUÉ TIENES QUE AVERIGUAR
═══════════════════════════════════════════════════════════════════

A · PALABRAS CLAVE Y DEMANDA REAL
    Hay un MCP de KeywordTool conectado y funcionando en modo invitado:
    keywordtool-suggestions-guest. Limitación importante: solo las 5 PRIMERAS
    keywords de cada respuesta traen volumen, competencia y pujas de puja superior
    (top_of_page_bid_low/high); el resto vienen sin métricas. Quedan ~67 peticiones
    hoy, así que planifica: agrupa por semillas y usa `exclude` para no repetir.
    Usa country="Spain", language="Spanish", platform="google".

    Semillas mínimas a cubrir:
      restaurante libanés madrid · restaurante libanés la moraleja ·
      restaurante halal madrid · comida halal madrid · restaurante con shisha madrid ·
      terraza shisha madrid · restaurante alcobendas · restaurante la moraleja ·
      cena romántica madrid norte · eventos privados restaurante madrid ·
      mezze madrid · hummus madrid · restaurante árabe madrid

    Para cada grupo quiero: volumen mensual, competencia y rango de puja. Y una
    lectura tuya de cuáles tienen intención de RESERVAR frente a intención de
    informarse.

B · CUÁNTO SE GASTA LA COMPETENCIA
    Estima el gasto de Liba Garden y de quien más se anuncie. No tenemos herramientas
    de pago tipo Semrush, así que sé honesto con el método y con el margen de error:
    volumen × CPC estimado × cuota de impresiones plausible. Si no puedes estimarlo
    con rigor, dilo y propón cómo se sabría de verdad.

C · CUÁNTO DEBERÍA GASTARSE DU LIBAN
    Trabaja hacia atrás desde el negocio, no desde el presupuesto:
    ticket 30–40 €/persona → mesa media → cuántas reservas hacen falta al mes para
    que la inversión tenga sentido → coste por reserva asumible → presupuesto.
    Da tres escenarios (prueba / normal / agresivo) con cifra mensual y qué esperar
    de cada uno. Nada de "depende": mójate con números y explica el razonamiento.

D · QUÉ ESPERAR, DE VERDAD
    Rango realista de CTR, coste por clic y coste por reserva para restauración local
    en España. Y cuándo se empiezan a ver resultados. Marca claramente qué es dato
    con fuente y qué es estimación tuya.

E · MEDICIÓN — y aquí hay un problema legal
    La conversión de este negocio es una reserva, y las reservas ocurren en
    SevenRooms, fuera del dominio. Investiga cómo se mide eso de verdad
    (conversiones importadas, seguimiento entre dominios, conversiones de llamada,
    conversiones locales de Google).
    ⚠️ IMPORTANTE: legal.html declara hoy que la web NO tiene analítica y que el
    único tercero es Google Maps, gateado por consentimiento (js/consent.js).
    Cualquier etiqueta de Google Ads usa cookies y obliga a reescribir los dos.
    Eso es trabajo real: cuantifícalo y méteselo a la propuesta, no lo escondas.

F · GOOGLE ADS vs TRIPADVISOR
    Recomendación con argumentos y precios reales de ambos. Una sola recomendación,
    no un "depende".

═══════════════════════════════════════════════════════════════════
ENTREGABLES — dos documentos
═══════════════════════════════════════════════════════════════════

1) SEM-INVESTIGACION.md — interno, para nosotros
   Todo lo de arriba con las fuentes y los números en crudo. Aquí sí puede haber
   jerga. Incluye una sección de "lo que no he podido averiguar y por qué".

2) SEM-PROPUESTA-DULIBAN.md — para el cliente, en inglés
   El grupo de WhatsApp es "Du Liban / Kan Capture" y el contacto es Noman Ahmadzai;
   la conversación va en inglés. Sencilla, sin jerga, y que conteste sus preguntas:
     · ¿qué podemos esperar del SEM?
     · ¿cuánto deberían gastarse?
     · ¿hay competencia haciéndolo? ¿cuánto se gastan?
     · ¿por qué palabras competiríamos?
   Estructura sugerida: dónde están hoy → qué hace la competencia (empieza por lo de
   Liba Garden, que es lo que más les va a mover) → qué proponemos → tres escenarios
   de presupuesto → qué esperar y en cuánto tiempo → qué necesitamos de ellos.
   Y sé honesto con lo que el SEM NO va a arreglar: si la ficha de Google sigue
   diciendo que hacen delivery y enseñando la carta de una plataforma de reparto,
   pagar por clics es tirar dinero. El SEO local va primero, o a la vez.

═══════════════════════════════════════════════════════════════════
REGLAS
═══════════════════════════════════════════════════════════════════
· NO crees campañas, NO conectes cuentas de pago, NO gastes nada.
· Hay un MCP de Supermetrics conectado con herramientas de Google Ads
  (campaign_create, data_query…) pero está SIN AUTORIZAR. No intentes el OAuth.
  Si crees que hace falta para el seguimiento posterior, dilo en la propuesta.
· Cita fuentes de todo dato externo. Distingue siempre dato de estimación.
· Si algo no se puede saber sin una herramienta de pago, dilo claramente y di
  cuánto costaría saberlo. Prefiero un hueco honesto a un número inventado.
· Pregúntame antes de gastar más de la mitad de la cuota diaria de KeywordTool.
```
