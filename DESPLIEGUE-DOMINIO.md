# Conectar `dulibanrestaurante.com` con la web nueva

## Estado actual

| Cosa | Dónde está |
|---|---|
| Código de la web | GitHub: `gonzalolopezkan-spec/duliban`, rama `main` |
| Web publicada (provisional) | https://gonzalolopezkan-spec.github.io/duliban/ (GitHub Pages) |
| DNS del dominio | SiteGround (`ns1.siteground.net`, `ns2.siteground.net`) |
| Dominio apuntando a | `34.175.232.129` — SiteGround, la WordPress vieja (devuelve **403**) |
| Correo del dominio | SiteGround: MX `mx10/20/30.antispam.mailspamprotection.com` |

Destino elegido por CMS: **Vercel** o **Cloudflare Pages**.

## Recomendación: Vercel

El motivo es el correo. `reservas@dulibanrestaurante.com` vive en SiteGround.

- **Vercel** conecta el dominio raíz con un simple registro **A**, dejando los nameservers en SiteGround. El correo no se toca en ningún momento. Riesgo mínimo.
- **Cloudflare Pages** exige que el dominio entero esté en el DNS de Cloudflare para poder usar el dominio raíz, es decir **cambiar los nameservers**. Cloudflare importa los registros existentes automáticamente, pero si algún MX o TXT (SPF/DKIM) no se copia bien, el correo del restaurante deja de funcionar hasta que se arregle.

Las dos son gratis para este sitio y las dos despliegan solas en cada push a `main`. Vercel es el camino sin riesgo para el correo.

---

## Opción A — Vercel (recomendada)

### 1. Crear el proyecto (5 minutos, en el navegador)

1. Entrar en https://vercel.com y **iniciar sesión con GitHub** (la cuenta `gonzalolopezkan-spec`).
2. *Add New… → Project* → importar el repositorio **`duliban`**.
3. En la pantalla de configuración:
   - **Framework Preset:** `Other`
   - **Build Command:** vacío (desactivar el override)
   - **Output Directory:** `.` (la raíz)
   - **Install Command:** vacío

   El archivo `vercel.json` del repo ya deja esto configurado, así que basta con no tocar nada y pulsar **Deploy**.
4. Al terminar da una URL tipo `duliban.vercel.app`. Ahí ya se puede comprobar que todo se ve bien antes de mover el dominio.

### 2. Añadir el dominio

En el proyecto → *Settings → Domains* → añadir `dulibanrestaurante.com` (Vercel añade `www` automáticamente y crea la redirección).

Vercel mostrará entonces **los valores DNS exactos** que hay que copiar. Normalmente son:

- Raíz `@` → registro **A** apuntando a la IP que indique Vercel (históricamente `76.76.21.21`; **usar siempre la que muestre el panel**, que puede ser distinta por proyecto).
- `www` → registro **CNAME** al host que indique Vercel (`cname.vercel-dns.com` o una variante propia del proyecto).

### 3. Lo que tiene que hacer Nacho en SiteGround

En el editor de zona DNS de SiteGround:

1. **Borrar** el registro **A** de la raíz (`34.175.232.129`).
2. **Borrar** el registro **A** de `www` (`34.175.232.129`).
3. **Crear** el A de la raíz y el CNAME de `www` con los valores que muestre Vercel.

⚠️ **No tocar nada más.** En concreto, dejar intactos:
- los registros **MX** (`mx10/20/30.antispam.mailspamprotection.com`) → el correo del restaurante,
- los registros **TXT** (SPF, DKIM, verificaciones),
- los nameservers.

### 4. Cerrar

Cuando el DNS propague (de minutos a 2–4 h; el TTL actual es ~75 min), Vercel emite el certificado HTTPS solo. Después: apagar GitHub Pages en *Settings → Pages* del repo para no dejar dos sitios publicados.

---

## Opción B — Cloudflare Pages

Solo si CMS insiste en Cloudflare. Implica mover los nameservers, así que **el correo entra en juego**.

1. Crear cuenta en https://dash.cloudflare.com y *Add a site* → `dulibanrestaurante.com`. Cloudflare escanea el DNS actual de SiteGround e importa los registros.
2. **Antes de continuar, verificar uno por uno** que los tres MX y todos los TXT (SPF/DKIM) se han importado exactamente igual. Si falta alguno, añadirlo a mano. Este es el paso crítico.
3. Cloudflare da dos nameservers propios. Nacho los pone en el registrador del dominio, sustituyendo a los de SiteGround.
4. En Cloudflare → *Workers & Pages → Create → Pages → Connect to Git* → repo `duliban`. Framework `None`, build command vacío, output directory `/`.
5. En el proyecto de Pages → *Custom domains* → añadir `dulibanrestaurante.com` y `www`. Al estar el DNS ya en Cloudflare, los registros se crean solos.

El archivo `vercel.json` es específico de Vercel; en Cloudflare Pages no molesta, pero las cabeceras de caché habría que replicarlas en un archivo `_headers` si se quiere el mismo comportamiento.

---

## Qué ha cambiado en el repo

- Añadido **`vercel.json`** — configura el despliegue estático y las cabeceras de caché.
- Eliminado el archivo **`CNAME`** — era exclusivo de GitHub Pages y entraría en conflicto.

## Pendiente después de conectar el dominio

- Actualizar `og:image` a URL absoluta con el dominio definitivo (hoy es una ruta relativa).
- Añadir `<link rel="canonical">` y hreflang absolutos.
