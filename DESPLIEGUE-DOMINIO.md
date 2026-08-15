# `dulibanrestaurante.com` — registros DNS definitivos

## Situación (verificada el 15 ago 2026)

El dominio ya **no** está en SiteGround: los nameservers son ahora `ns19.domaincontrol.com` y
`ns20.domaincontrol.com` (**GoDaddy**). En esa mudanza:

- Se aplicaron los registros de **GitHub Pages** (apex `A 185.199.108.153`, `www` CNAME a
  `gonzalolopezkan-spec.github.io`) — corresponden a las instrucciones antiguas, ya superadas.
- **Se perdieron los registros MX, SPF, DKIM y DMARC.** Sin MX, el correo entrante de
  `reservas@dulibanrestaurante.com` no se entrega. Esto es lo primero que hay que arreglar.

La zona antigua de SiteGround sigue respondiendo, así que los valores originales se han podido
recuperar íntegros y están abajo.

---

## 1. Correo — RESTAURAR YA (prioridad máxima)

### MX (tres registros, en la raíz `@`)

| Prioridad | Valor |
|---|---|
| 10 | `mx10.antispam.mailspamprotection.com` |
| 20 | `mx20.antispam.mailspamprotection.com` |
| 30 | `mx30.antispam.mailspamprotection.com` |

### TXT — SPF (en la raíz `@`)

```
v=spf1 +a +mx include:dulibanrestaurante.com.spf.auto.dnssmarthost.net ~all
```

### CNAME — DKIM

| Nombre | Valor |
|---|---|
| `default._domainkey` | `dulibanrestaurante.com.default.dkim.auto.dnssmarthost.net` |

### TXT — DMARC

| Nombre | Valor |
|---|---|
| `_dmarc` | `v=DMARC1; p=none; aspf=r; adkim=r;` |

> Nota: el buzón sigue alojado en SiteGround. Si el cliente ha cancelado ese hosting, estos
> registros no bastarán y habrá que decidir dónde vive el correo a partir de ahora.

---

## 2. Web — apuntar a Vercel

Sustituir los registros actuales de GitHub Pages por estos dos:

| Tipo | Nombre | Valor |
|---|---|---|
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `914390cc79029ae1.vercel-dns-017.com` |

Concretamente:

- **Borrar** el `A` de `@` que apunta a `185.199.108.153` → crear el `A` a `216.198.79.1`.
- **Borrar** el `CNAME` de `www` que apunta a `gonzalolopezkan-spec.github.io` → crear el `CNAME`
  a `914390cc79029ae1.vercel-dns-017.com`.

La web vivirá en `dulibanrestaurante.com`; `www` redirige ahí automáticamente (lo gestiona Vercel).

El HTTPS lo emite Vercel solo, sin coste ni instalación, en cuanto el DNS apunte bien. **No hay
registros CAA** en la zona, así que nada bloquea la emisión del certificado.

---

## 3. Cerrar

Cuando el dominio responda desde Vercel: apagar GitHub Pages en el repo (*Settings → Pages*) y
poner `og:image` con URL absoluta.

## Estado del proyecto

- Web desplegada en Vercel: proyecto `duliban` → https://duliban.vercel.app (rama `main`, redespliegue
  automático en cada push).
- Dominio ya añadido en Vercel; marca "Invalid Configuration" hasta que el DNS apunte.
