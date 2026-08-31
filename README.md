# drjoelgambin.com — Web del Dr. Joel Gambín Botella

Web personal de Joel Gambín Botella, traumatólogo especialista en artroscopia deportiva (rodilla, LCA, tobillo y preservación articular). Torrevieja · Elche · Alicante.

## Estado del proyecto

- ✅ **Fase 0 — Estudio de mercado**: [`docs/estudio-mercado-traumatologia.md`](docs/estudio-mercado-traumatologia.md)
- ✅ **Fase 0 — Plan de marca y decisiones**: [`docs/plan-de-marca.md`](docs/plan-de-marca.md)
- ✅ **Fase 1 — Web estática bilingüe** (15 páginas ES/EN, ver estructura abajo)
- ⬜ Fase 2 — Dominio, hosting, fotos/vídeo reales, WhatsApp, Google Business, widget Doctoralia
- ⬜ Fase 3 — Blog, vídeos por patología, más landings

## Estructura del sitio

```
/                                          Home (ES)
/sobre-mi/                                 Biografía y trayectoria
/tratamientos/ligamento-cruzado-anterior/  LCA
/tratamientos/artroscopia-rodilla/         Rodilla: menisco y cartílago
/tratamientos/artroscopia-tobillo/         Tobillo: artroscopia y ligamentos
/tratamientos/preservacion-articular/      PRP, ácido hialurónico, ecoguiadas
/contacto/                                 Sedes y citas
/aviso-legal/  /privacidad/                Textos legales
/en/...                                    Espejo completo en inglés (mercado expat)
/assets/styles.css  /assets/site.js        Diseño y JS (sin frameworks)
robots.txt  sitemap.xml
```

## Stack y principios

- **HTML/CSS estático puro**, sin frameworks ni build: Core Web Vitals en verde por diseño.
- **Bilingüe ES/EN** con hreflang; canonicals apuntan a `https://drjoelgambin.com` (dominio recomendado, pendiente de registro).
- **SEO**: una landing por patología + ciudad, schema.org (Physician, FAQPage), sitemap.
- **Conversión móvil**: barra fija inferior con Llamar + Cita online (Doctoralia).
- **Cumplimiento**: nº colegiado visible, sin promesas de curación, reseñas solo verificadas (Doctoralia), sin cookies de seguimiento.

## Datos pendientes (marcados en el código o en `docs/plan-de-marca.md`)

Fotos profesionales · vídeo Levante UD · WhatsApp profesional · NIF y colegio provincial (aviso legal) · registros sanitarios de los centros · horarios exactos de consulta · confirmación del dominio.

## Publicar

Cualquier hosting estático sirve (GitHub Pages con dominio propio, Netlify, Cloudflare Pages o hosting UE clásico). Debe servirse desde la raíz del dominio (las rutas son absolutas: `/assets/...`).
