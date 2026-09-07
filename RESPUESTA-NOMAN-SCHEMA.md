# Respuesta a Noman — cierre del hilo de schema e imágenes (7 sep 2026)

> Contexto: el 4 de septiembre Noman contestó confirmando el schema por su cuenta,
> reclamando el reparto de responsabilidades, dándonos la lista exacta de imágenes sin
> descripción, y corrigiéndonos en lo de las Preguntas y respuestas. Gonzalo ya le
> respondió que haría los cambios de web y que arrancaba el SEM a petición de Priya.
> Este mensaje es el seguimiento: entrega hecha + las dos cosas que quedan.

## Verificado antes de escribir

| Cosa | Resultado |
|---|---|
| Sus 10 imágenes | **Exactas.** Son las 10 miniaturas `row-thumb` del acordeón, 2 por categoría. Ni una más ni una menos. Auditoría impecable |
| Por qué estaban vacías | Viven **dentro del `<button>`** que abre cada categoría. Con `alt` y sin `aria-hidden`, el nombre accesible del botón sería "Zaatar Labneh Kafta bil Jebneh Del Horno" |
| Arreglo aplicado | `alt` descriptivo **manteniendo `aria-hidden`**: los lectores de pantalla las siguen saltando, los rastreadores ya las leen. 30 cambios (10 × 3 idiomas), commit `be6ee0d` |
| Su afirmación sobre Q&A | **Correcta.** API discontinuada el 3 nov 2025, sección pública retirándose desde el 3 dic 2025, sustituida por *"Ask about this place"* (Gemini) |

## Lo que cambia en nuestro plan

- **A19, A20, A12 salen de nuestra lista.** Publicaciones, fotos y festivos son suyos.
- **A21 (sembrar Q&A) está muerta** — pero su sustituto lee descripción, atributos, carta
  y web, así que el schema y el FAQ que ya hicimos valen más, no menos.
- **`srpotatocm@gmail.com`**: no es nuestra, nunca la hemos usado. Que la quite.

---

## Mensaje

```
Hi Noman,

Following up on the website side — the ten images are done.

You were exactly right, by the way: those ten were the complete list, not a sample. They
were the thumbnails on the menu category headers, two per section. Nice catch.

Worth explaining why they were empty, because it wasn't an oversight and it changes how we
fixed them. Those thumbnails sit inside the button that opens each menu category. If you
give an image inside a button a description and nothing else, screen readers stop
announcing the button as "Del Horno" and start announcing it as "Zaatar Labneh Kafta bil
Jebneh Del Horno" — the description gets absorbed into the button's name. That's why they
were deliberately left blank.

So we did both: each one now has a full description for Google to read, while staying
hidden from screen readers so the buttons keep working properly. Thirty changes in total,
ten images across the Spanish, English and Arabic pages. They're live now.

The descriptions say something the dish title doesn't — for example "Mawzet Kharouf, lamb
shank with spiced rice and nuts — du Liban, La Moraleja" rather than just the name. That
should help those dish photos start showing up in Google Images, which they couldn't
before.

On the Q&A — thank you for correcting us, and you're right. We checked: the API was
discontinued on 3 November 2025 and the public section started being removed on
3 December, replaced by the AI-generated "Ask about this place".

One thing worth knowing, though, because it works in your favour: that AI feature builds
its answers from your profile's description, attributes and menu, and from the website. So
the questions people used to ask in Q&A are now being answered automatically from those
sources. That's a good argument for keeping the profile detailed on your side and the
structured data thorough on ours — between us we're feeding the same system. It also means
the FAQ section we added to the website in August is doing more work than we expected.

Two things still open, and then I think we're clear:

Sr. Potato — that account isn't ours. We've only ever used the main profile account, never
that one, and we don't know who it belongs to. Since it isn't yours either and it has
manager-level editing rights on a profile with 1,185 reviews, I'd remove it. If it turns
out someone needed it, it's easy to add back; leaving an unidentified account with edit
access is the riskier of the two.

Holiday closures — will do, I'll go to Priya directly for the Christmas, August and public
holiday dates.

And agreed on the split: your side the Business Profile, our side the website, plus the
SEM work Priya has asked us to pick up. I'll keep you posted on that as it develops, and
if there's anything specific you want covered or avoided there, just say.

Thanks for being thorough on this — it's genuinely better having two people checking.
```

---

## Notas internas (no enviar)

- **El SEM está reactivado** por Priya. Ojo con el histórico: Noman lo declinó el 22 de
  agosto con argumentos (58 reservas del agente de IA + 59 de Google Maps en agosto) y
  hubo roce porque el análisis se hizo de urgencia y luego se descartó. El mensaje se lo
  menciona de pasada y le ofrece voz, que es la forma de que no vuelva a pasar.
- **Sigue sin dueño el asunto del correo.** `Admin@dulibanrestaurante.com` no funciona y
  los MX apuntan a SiteGround, el servidor que paga Luis por 32 €/mes y que quieren dejar
  de pagar. Si eso se corta, cae `reservas@dulibanrestaurante.com`, publicado en la web y
  en el JSON-LD. Va con Priya, junto con los festivos.
- **Aprovechar el contacto con Priya** para las tres cosas de golpe: festivos, el correo
  y el estado de las credenciales del propietario anterior (Facebook, Tripadvisor, Yelp,
  Repsol y los dominios `dulibangourmet.com` / `dulibanrestaurants.com`).
