# Mensajes para Priya

> **v2 — 7 sep 2026.** Priya ya contestó a la primera tanda. Esto es la respuesta a sus
> respuestas, más la confirmación de la reunión que ella propone para el SEM.

## Lo que contestó, y lo que he verificado

| Su respuesta | Verificado / qué implica |
|---|---|
| Agosto abierto salvo lunes · cerrado 25/12, 01/01 y 06/01 · festivos abiertos salvo lunes | Son **solo 3 fechas** de cierre. Se las pasamos a **Noman**, que es quien lleva el perfil |
| "Nacho ya lo ha pasado a su dominio" | **Cierto: los MX ya no están en SiteGround.** Ahora `mx1/mx2.hostinger.com`, SPF de Hostinger. La dependencia de Luis está rota ✅ |
| "trabajamos con admin, el otro apenas lo usamos" | ⚠️ Pero `reservas@` es el que publicamos en la web **y en el JSON-LD**. Si no se recreó el buzón en la mudanza, ese correo se pierde en silencio |
| El anterior propietario "no sabe" y quiere vender los dominios | Sin él, Tripadvisor / Yelp / Repsol **sí** se recuperan. Facebook es el difícil. Los dominios, sin comprarlos, no hay palanca barata |

**El matiz que importa del correo:** que ya no dependa de Luis está bien, pero si la cuenta
de Hostinger es de Nacho, hemos cambiado una dependencia por otra. Debería estar a nombre
de du Liban y pagada por ellos, con nosotros como usuarios — el mismo criterio que
aplicamos con el Perfil de Empresa, Search Console y ahora Google Ads.

---

## Mensaje 1 — respuesta a sus tres puntos

```
Perfect, thank you Priya. Taking them in order.

🗓️ HOLIDAYS
Got it — so the only actual closures are 25/12, 01/01 and 06/01, August is open except
Mondays, and public holidays are open except Mondays.

One thing to confirm before we load it: on those three dates, are you fully closed all
day, or open with reduced hours? Google treats "closed" and "special hours" differently
and I'd rather ask than guess.

Also — since Noman manages the Business Profile now, I'll pass the dates straight to him
rather than load them myself, so we don't both touch the same thing.

📧 THE EMAIL — solved, with one thing to tidy up
I checked the domain records and confirmed it with Nacho: the move has gone through. Your
email no longer runs through Luis's SiteGround server — it's on Hostinger now. So that
dependency is broken and nobody has to keep paying him €32/month for it.

One thing worth tidying while it's fresh. Right now that hosting is on Nacho's account,
which means technically the dependency moved from Luis to us rather than going away. If
our working relationship ever changed, you'd be in the same position again. Our
recommendation is to put it on an account in du Liban's name, paid by you, with us added
as users — exactly how your Google Business Profile and Search Console are set up, and how
we'll set up Google Ads. You own it, we operate it. It's a small job and much easier to do
now than in a hurry later.

And one practical thing: reservas@dulibanrestaurante.com is the address published on your
website and in the code Google reads. You mentioned you mostly use admin@ — that's fine,
but we should make sure reservas@ still exists after the move and lands somewhere someone
actually reads. If that mailbox wasn't recreated, anyone writing to it is disappearing
into nowhere and you'd never know. Easy to check, worth checking.

🔑 THE PREVIOUS OWNER
Understood, and not a problem — most of it is recoverable without him.

· Tripadvisor: yes. There's an ownership-transfer process; you claim the listing with
  proof of the business (the CIF is enough) and their support handles the change. This
  is the one that matters most, because that profile shows up when people search your
  name and it's currently your weakest one.
· Yelp: same kind of process, verified by a call to your own number.
· Guía Repsol: easiest of all — it's an editorial guide, not a listing you own. We just
  write to them and ask for the correction. This is where your old landline is still
  published.
· Facebook: this is the hard one. Meta has a page ownership dispute process that needs
  proof of business ownership, and it's slow. Worth one attempt for the 2,800 followers;
  if it fails, we build the new page properly and let the old one fade.

On the domains: agreed, don't buy them. He's asking because they have no value to anyone
but you, and paying would just reward that. Without buying there's no cheap way to take
them down — but honestly, the practical damage is small: your real website already ranks
above them for your own name, and your Google profile is correct now. We'll keep an eye
on it, and if it ever starts causing real confusion there are stronger routes we can
look at then.

Same with the landline — agreed, not worth taking over. It does make fixing those
directory listings more valuable though, since that's where the old number still shows.
```

## Mensaje 2 — la reunión

```
And yes to the meeting — that's a much better format than WhatsApp for this.

Thursday evening would suit us better than Tuesday, if that works for you. It gives us
two extra days to arrive with the campaign already drafted, so instead of talking about
it in the abstract you can look at the actual search groups, the actual ad text and the
actual budget split, and tell us what to change.

What we'll bring:
· The campaign structure, built but not launched — nothing spends until you say so
· The search groups in priority order, and what each one costs
· The exact steps to open the Google Ads account, which takes about ten minutes and
  needs you at the keyboard for the payment part
· A clear answer on what we can and can't measure, and what the measurement setup costs

What would help if you can have it to hand:
· Your average ticket per table (not per person) and roughly the margin you keep
· Which nights or services you'd most like to fill — there's no point buying traffic for
  Friday dinner if Friday dinner is already full

Let me know which day works and we'll send an invite.
```

---

## Notas internas (no enviar)

- **Las 3 fechas van a Noman**, no las cargamos nosotros. Es lo que mantiene el reparto
  del 4 de septiembre.
- **Preguntar a Nacho internamente**, antes de la reunión: ¿de quién es la cuenta de
  Hostinger donde está ahora el correo? ¿Y se recreó el buzón `reservas@`? Las dos cosas
  salen en el mensaje y conviene no llegar a la reunión sin saberlo.
- **Si `reservas@` no existe**, hay dos salidas: recrearlo (preferible, es la dirección
  publicada) o cambiar web + JSON-LD a `admin@`, que es feo de cara al público. La primera.
- **Recomiendo jueves 10** sobre martes 8: da margen para que el chat de SEM haga las
  Fases 0 y 1, y llegar con la campaña construida cambia por completo el tono de la
  reunión. Se pasa de pedir permiso a enseñar trabajo.
- **En la reunión no prometer** medición por reserva desde el día 1: eso es la capa 3 y
  depende del ticket de SevenRooms y de las 11–17 h de legales. Sí prometer conversiones
  de llamada, que funcionan desde el minuto uno y encajan con que el teléfono lo atienda
  una IA.
