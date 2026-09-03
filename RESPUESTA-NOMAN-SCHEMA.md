# Respuesta a Noman — el mensaje sobre schema (2 sep 2026)

> Contexto: el 2 de septiembre por la noche Noman escribió al grupo diciendo que la web
> no tiene structured data, que hay imágenes lentas y fotos sin descripción, y se ofreció
> a ayudar a arreglarlo. **Los tres puntos son incorrectos**: todo eso se publicó el 22 de
> agosto (bloque B). Verificado en producción el 3 de septiembre:
>
> | Comprobación | Resultado en vivo |
> |---|---|
> | Bloques JSON-LD | 2 (`Restaurant` + `Menu`) |
> | `MenuItem` / `Offer` | 42 y 42 · 5 `MenuSection` |
> | Otros tipos | `GeoCoordinates`, `PostalAddress`, 3 `OpeningHoursSpecification`, 3 `LocationFeatureSpecification` |
> | `alt` con texto | 124 por página, en ES/EN/AR |
> | `srcset` / `.webp` | 113 y 444 referencias |
> | `dulibangourmet.com` (el dominio zombi) | **1 JSON-LD, 1 alt** ← encaja con su diagnóstico |
>
> El tono va deliberadamente agradecido y sin defensiva: tiene buen instinto, está
> mirando la ficha por su cuenta y es mejor tenerlo de aliado que a la contra. La
> corrección se hace dándole la herramienta para que lo compruebe él mismo, no
> discutiendo.

---

## Mensaje

```
Hi Noman, thank you for raising this — genuinely. Schema is one of the highest-leverage
things on a restaurant site, and the fact that you're checking it yourself is good news
for us.

The good news: it's already there. We shipped it on 22 August along with the rest of the
technical SEO work, so if you looked before that date you'd have seen exactly what you
describe.

What's live right now on dulibanrestaurante.com:

• Restaurant schema — address, phone, geo coordinates, opening hours, and the kitchen
  hours declared separately so Google doesn't think you close between 16:00 and 20:00
• The full menu in code — all 42 dishes across the 5 sections, with prices, photos, and
  each one marked as halal
• Declared links to your Google profile, Instagram, Facebook and Tripadvisor, so Google
  treats them all as the same business
• Terrace and shisha declared as amenities

Please don't take our word for it — you can check in 30 seconds. Paste
dulibanrestaurante.com into Google's own Rich Results Test:
https://search.google.com/test/rich-results
You'll see "du Liban" detected as a Restaurant, with the whole menu inside it.

You'll also see a second entry called "du Liban — Cocina" with four warnings about
optional fields. That one is ours too — we used it to tell Google that the kitchen closes
between 16:00 and 20:00 while the bar keeps going. It does the job, but it makes the test
look busier than it should, so we're simplifying it this week. The kitchen hours are
already set properly in the Business Profile, which is where Google actually reads them
from.

Same story on the other two points:
• Image descriptions — 124 per page, in all three languages
• Loading speed — every photo was converted to WebP in two sizes in August. The browser
  gets the light version; the originals stay as a fallback.

One genuine question: which address did you test? Because if it was dulibangourmet.com,
that site really does have almost no schema and almost no image descriptions — but it
isn't ours. It's one of the old sites we flagged in August. It's still live, and it
publishes wrong opening hours (10:00–00:00) and a placeholder phone number. That one is a
real problem, and it's on the list for when Priya speaks to the previous owner about the
Facebook and Tripadvisor credentials.

Where your help would be worth the most right now — and I mean this, your offer is
welcome:

1. Reviews. There's a backlog going back around 45 weeks with no reply. Replying to
   reviews is one of the strongest signals Google reads, and we can't touch it until
   someone authorises us to write on the restaurant's behalf. This is probably the single
   most valuable thing still on the table.
2. Holiday calendar. Send us the Christmas, August and public holiday closures and we'll
   load them into Google in advance, so nobody turns up to a closed door.
3. There's an account with access to the Business Profile — srpotatocm@gmail.com. Do you
   know who that is?
4. You mentioned you've been working on the profile yourself. Could we agree who touches
   what? Otherwise we risk overwriting each other's changes.

And something you'll like: Search Console is now connected, so we finally have real
numbers instead of guesses. Over the last 11 days the site appeared 1,490 times in
Google, got 126 clicks, average position 5.7. But almost every one of those searches is
someone typing "du liban" — people who already know you. Discovery by people who don't is
still close to zero. That's the actual gap, and it's what all of this is building towards.

Thanks again for flagging it. Please keep doing it.
```

---

## Notas internas (no enviar)

- **No mezclar aquí el asunto del correo.** El 22 de agosto Priya preguntó por qué no
  funciona `Admin@dulibanrestaurante.com`, y salió el tema de Luis y los 32 €/mes del
  servidor. Ojo, porque los MX del dominio apuntan a `mailspamprotection.com`, que es
  SiteGround: **el correo sigue alojado donde Luis paga**. Si eso se corta, deja de
  funcionar `reservas@dulibanrestaurante.com`, que está publicado en la web y en el
  JSON-LD. Merece un mensaje aparte, y probablemente con Priya.
- **Noman está editando la ficha por su cuenta** ("while I've been working on our Google
  Business Profile — hours, categories, photos, reviews"). Hay que repartir el terreno
  antes de que nos pisemos; de ahí el punto 4.
- **No sacar el tema del SEM en este mensaje.** Lo rechazó el 22 de agosto con un
  argumento razonable (agosto es atípico, 58 reservas del agente de IA y 59 de Google
  Maps) y propuso él mismo revisarlo en septiembre. Que la revisión la pida él, o
  sácala en un mensaje propio con los datos de Search Console delante. Después del roce
  del 22 de agosto, insistir ahora sería contraproducente.
