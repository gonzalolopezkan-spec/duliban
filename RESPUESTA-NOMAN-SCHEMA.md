# Respuesta a Noman — el mensaje sobre schema (v2, 3 sep 2026)

> **Verificado en vivo el 3 de septiembre antes de escribir nada.** Esta versión corrige
> dos afirmaciones de mi borrador anterior que eran injustas con el cliente.

## Lo que dice el test de Google (abierto y desplegado entero)

```
Se han detectado 4 elementos válidos · 0 errores

Empresas locales ....... 2 elementos válidos  · problemas no críticos
Organización ........... 2 elementos válidos  · sin problemas

Elementos: "du Liban"  ✅ limpio
           "du Liban — Cocina"  ✅ válido, 4 avisos de campos OPCIONALES
                                 (telephone, priceRange, address, image)
```

Son **las mismas dos entidades contadas en dos categorías**, no cuatro cosas distintas.
El `Menu` no sale como categoría propia porque Google no tiene resultado enriquecido de
carta: va dentro del `Restaurant`. Los 42 platos están en el código, comprobado.

## Lo que corrijo de mi borrador anterior

| Afirmación mía | La realidad |
|---|---|
| "Backlog de 45 semanas sin responder, es lo más valioso que queda" | **Falso en el tono.** Las reseñas recientes se responden y bien: la última entró hace 5 días y tenía respuesta del propietario a los 4. La sin responder más reciente es de **hace 47 semanas** — histórico anterior a nosotros. Es cola vieja y de bajo valor, no negligencia |
| "Necesitamos autorización para responder reseñas" | Suena a reproche cuando **ya lo están haciendo ellos**. Reformulado como ofrecimiento, no como bloqueo |
| "¿Quién es srpotatocm@gmail.com?" | Hay **tres** cuentas: `dulibanrestaurants12@` (propietario principal), `dulibanrestaurants@` (gestor) y `srpotatocm@` — "Sr. Potato", con logo propio y pinta de agencia. Probablemente Noman entra por la principal, la misma que nosotros. Preguntado con suavidad, sin señalar |

**Sigue siendo cierto:** *Horario especial → Añadir*. Está vacío, el calendario de
festivos hace falta de verdad.

**Confirmado hecho en la ficha:** "Se sirve comida hasta tarde" y "Tiene happy hour"
corregidos · perros activados · aparcamiento limpio y con "No ofrece servicio de
aparcacoches" · 5 categorías secundarias incluida *Restaurante halal* · descripción nueva
con halal, shisha, dos terrazas y 2012 · dirección con Local 4/5.

---

## Mensaje

```
Hi Noman,

Thank you for this — really. It's genuinely useful to have you looking at this side of
things too, and you're right that schema is one of the most valuable things a restaurant
site can have. Please keep doing it.

The good news is that it's already in place. We built it in August, along with the rest
of the technical SEO work, so if you checked before the 22nd you'd have seen exactly what
you describe.

What's live right now:
• Restaurant schema — address, phone, coordinates, opening hours, and the kitchen hours
  declared separately so Google doesn't assume you're closed between 16:00 and 20:00
• The full menu in code — all 42 dishes across the 5 sections, with prices, photos and
  each one marked as halal
• Your Google profile, Instagram, Facebook and Tripadvisor declared as the same business
• Terrace and shisha declared as amenities

Please don't take our word for it — it takes 30 seconds:
https://search.google.com/test/rich-results
Paste dulibanrestaurante.com and you'll get "4 valid items detected, 0 errors".

Two things you'll see there that are worth explaining, so they don't look like faults:

The menu doesn't appear as its own line. That's normal — Google has no separate "menu"
result, so the dishes live inside the restaurant entity. They're all there.

And you'll see a second entry called "du Liban — Cocina" with four warnings. That one is
deliberate: it's how we tell Google that the kitchen closes 16:00–20:00 while the bar
keeps going, which is exactly the confusion you flagged a couple of weeks ago. The
warnings are all optional fields, nothing broken. If you'd rather we simplify it and
leave the kitchen hours only on the Business Profile and the page itself, say the word —
it's a five-minute change either way. Happy to go with whatever you prefer.

On your other two points, this is where you can really help us:

Images. Every photo was converted to WebP in two sizes back in August, and there are 124
image descriptions per page across all three languages. But you're the one who noticed
something, and you may well be seeing something we're not — different device, different
connection, a page we haven't looked at recently. Could you send us the specific images
that felt slow, and any you found without a description? Even just a screenshot or the
section name. We'll fix them the same day.

A couple of things from our side:

Your reviews are in good shape, and that's on you — the last one came in five days ago
and was answered within four. The only ones sitting without a reply go back about a year,
before we came in. If at some point you'd like us to work through that old tail, we're
happy to draft replies for you to approve — but honestly it's low priority compared to
what you're already doing well.

The one gap we can't fill ourselves is the holiday calendar. Special hours on the profile
are still empty. If you send us Christmas, August and public holiday closures, we'll load
them in advance so nobody turns up to a closed door — and Google treats it as a sign the
profile is actively maintained.

There are also three accounts with access to the Business Profile at the moment:
dulibanrestaurants12@gmail.com (main owner), dulibanrestaurants@gmail.com, and
srpotatocm@gmail.com ("Sr. Potato"). If they're all people you know, that's completely
fine — we just like to check now and then that everyone with access is still meant to
have it.

And since you mentioned you've been working on the profile too — could we agree who
handles what? Not a problem at all, we'd just rather not overwrite each other's changes
by accident.

Finally, what we'd like to do next — and we'd like your approval before we start:

1. Weekly posts on the Google profile. There hasn't been one in over a year, and Google
   reads them as a sign the business is active.
2. Regular photo uploads — Google is specifically asking for interior and menu photos.
3. Seeding the Questions & Answers section on the profile. It's empty right now, and if
   we don't fill it, other people will — often with wrong answers.
4. The price range on your profile changed from €30–40 to €20–60 when we uploaded the
   real menu. Google recalculates it from the dish prices, and it now sees everything from
   €10 to €58. It's accurate, but it does read as less premium. We'd leave it as is, but
   it's your call.

One last thing you might like: Search Console is now connected, so we finally have real
numbers. Over the last 11 days the site appeared 1,490 times in Google with 126 clicks,
average position 5.7. But almost every one of those searches is someone typing "du liban"
— people who already know you. That's the real gap, and it's what all this is building
towards.

Thanks again for raising it. This kind of thing is much better caught than missed.
```

---

## Notas internas (no enviar)

- **El `department` se queda**, por decisión de Gonzalo. El mensaje lo explica como
  deliberado y le ofrece a Noman elegir. Si dice que lo simplifiquemos, es quitar el bloque
  de las 3 páginas y dejar el horario de cocina donde ya está bien puesto: la ficha y la
  propia página.
- **No mezclar aquí el correo.** `Admin@dulibanrestaurante.com` no funciona y los MX
  apuntan a SiteGround, el servidor que paga Luis por 32 €/mes y que quieren dejar de
  pagar. Si eso se corta, cae `reservas@dulibanrestaurante.com`, que está en la web y en
  el JSON-LD. Mensaje aparte, y con Priya.
- **No sacar el SEM.** Lo rechazó el 22 de agosto con argumentos (58 reservas del agente
  de IA + 59 de Google Maps en agosto) y propuso él revisarlo en septiembre. Que lo pida
  él, o va en un mensaje propio.
- El foco que marcó el cliente el 25 de agosto son **influencers**, no publicidad.
