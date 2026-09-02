# Plan de marca y decisiones — Web del Dr. Joel Gambín Botella

**Fecha:** 31/08/2026 · Basado en el [estudio de mercado](estudio-mercado-traumatologia.md) y la investigación del entorno digital de Joel.

---

## 1. Posicionamiento

> **"El traumatólogo del fútbol profesional, ahora con consulta en Torrevieja — en español y en inglés."**

- **Bandera:** artroscopia deportiva de **rodilla (LCA) y tobillo** + **preservación articular** (estilo Instituto Cugat: clínica de autor, sobria, internacional).
- **Prueba social única en la zona:** ex jefe de los servicios médicos del **Levante UD** (LaLiga); cirugía a futbolista profesional (Sergio Lozano) junto al Dr. Jordi Vega en Clínica Tres Torres; **1er Premio Bruce Reider 2022 (SETRADE)**; traumatólogo en la **Copa Davis**; tutor del Fellowship de Rodilla (IMSKE); miembro de SECOT, AEA, SEROD, SETRADE y AEMEF; **12 opiniones 5/5 en Doctoralia**.
- **Dualidad de valor:** cirugía de nivel hospitalario (IMED Elche / IMED Alicante vía Traumacare) + cercanía de consulta local (Clínica Salar, a pie de calle en Torrevieja).
- **Dos públicos:** (a) deportista amateur y paciente español de la Vega Baja / Alicante; (b) **residente expat angloparlante de la Costa Blanca**, hoy huérfano de especialista con rostro (solo encuentra hospitales genéricos y agregadores).

## 2. Hallazgos del entorno digital (agosto 2026)

| Hallazgo | Implicación |
|---|---|
| Ningún traumatólogo individual con web personal en Torrevieja/Vega Baja (ES ni EN) | Hueco de marca personal completamente vacío |
| Traumacare Medical Group: web mínima, solo home indexada, Joel no aparece | La web personal será su único escaparate |
| TraumaCare Clinic (Torrevieja) hace SEO local generalista | Diferenciarse por subespecialidad (rodilla-LCA-tobillo deportivo), no competir en genérico |
| Web de Clínica Salar: bio de Joel desactualizada (Levante UD/IMSKE en presente); sin registro sanitario visible | Pedir actualización; la web propia debe ser la fuente canónica |
| Doctoralia: perfil activo Torrevieja (12 op., 5/5) + **perfil duplicado antiguo (Villajoyosa)** | Solicitar fusión/cierre del duplicado a Doctoralia |
| Top Doctors: aún le sitúa en Valencia (IMSKE) | Solicitar actualización |
| Competencia local: Quirónsalud Torrevieja (unidad de rodilla, EN), IMED, Traumavist, KLINIK PM (landing EN), TraumaPlus; Ripoll y De Prado en Murcia | Institucional y sin rostro; se gana con marca personal + subespecialidad + EN |
| Búsquedas EN ("knee surgeon Torrevieja", "ACL surgery Costa Blanca") capturadas por hospitales y portales de turismo médico | Versión EN nativa con landings de intención local = mayor oportunidad medible |

## 3. Decisiones tomadas

- **Dominio recomendado:** `drjoelgambin.com` (+ `drjoelgambin.es` y `joelgambin.com` defensivos). Comprobados sin registro DNS el 31/08/2026 (pendiente de confirmación al registrar). Los canonicals/hreflang de la web ya apuntan a `https://drjoelgambin.com`.
- **Marca:** "Dr. Joel Gambín" (nombre completo "Dr. Joel Gambín Botella" en bio y legal).
- **Idiomas:** ES + EN completos desde el día 1 (`/` y `/en/`).
- **Stack:** sitio estático HTML/CSS puro (sin frameworks) → Core Web Vitals en verde garantizados; hosting propuesto: GitHub Pages o cualquier hosting UE.
- **Reserva de cita fase 1:** teléfono (Clínica Salar: +34 681 87 65 04) + cita online vía perfil de Doctoralia. Fase 2: widget de Doctoralia embebido y WhatsApp Business (pendiente número).
- **Arquitectura fase 1:**
  - `/` Home (bandera + prueba social + tratamientos + sedes)
  - `/sobre-mi/` (E-E-A-T completo)
  - `/tratamientos/ligamento-cruzado-anterior/` · `/tratamientos/artroscopia-rodilla/` · `/tratamientos/artroscopia-tobillo/` (incluye reparación ligamentaria) · `/tratamientos/preservacion-articular/` (PRP, ácido hialurónico, ecoguiadas)
  - `/contacto/` (sedes, teléfonos, cita online)
  - `/aviso-legal/` · `/privacidad/`
  - `/en/` espejo completo (home, about, 4 treatments, contact)
- **Cumplimiento:** nº colegiado 460311992 visible en footer y aviso legal; sin promesas de curación; testimonios = solo reseñas verificadas de Doctoralia enlazadas; sin cookies de seguimiento (sin banner necesario en fase 1); contenido con aviso "no sustituye la consulta".

## 4. Acciones fuera de la web (checklist para Joel)

1. **Registrar dominio** `drjoelgambin.com` (+ defensivos) — Namecheap/DonDominio, ~10-15 €/año.
2. **Crear Google Business Profile** propio en Torrevieja, categoría "Traumatólogo" (no "Médico"), con fotos reales, y sistema de petición de reseñas tras consulta.
3. **Doctoralia:** pedir la fusión/eliminación del perfil duplicado de Villajoyosa (soporte Doctoralia) — dispersa reseñas y SEO; el premio Bruce Reider figura solo en el antiguo.
4. **Top Doctors:** actualizar ubicación (de Valencia/IMSKE a Torrevieja/Alicante).
5. **Clínica Salar:** pedir que actualicen la bio (ya no es jefe del Levante UD ni está en IMSKE) y enlacen a la nueva web; preguntar el nº de registro sanitario del centro para citarlo.
6. **Confirmar con el Colegio de Médicos** (¿Valencia o Alicante?) los requisitos de publicidad sanitaria de la Comunitat Valenciana antes del lanzamiento.
7. **Material pendiente:** fotos profesionales (consulta + retrato), enlace del vídeo del Levante UD, artículos de prensa guardados, número de WhatsApp profesional, horarios exactos por sede, teléfono de citas de IMED/Traumacare.

## 5. Rediseño v2 (01/09/2026) — feedback de Joel

- **Dirección visual: minimalista** (referencia del cliente: ignaciosaezaviles.es — no accesible desde el entorno de desarrollo; pendiente afinar con capturas). Blanco, tipografía Manrope, un solo acento discreto, mucho espacio, poco texto.
- **Tono sobrio, sin autobombo**: eliminadas todas las menciones destacadas a "jefe del Levante UD", "deportistas de élite/profesionales" y los enlaces a partes médicos de jugadores. La etapa en el fútbol profesional queda como una línea discreta del CV en "Sobre mí" (patrón similar al de la élite europea: currículum factual, no marketing).
- **WhatsApp activado**: 681 876 504 (mismo número de Salar) con mensaje precargado; presente en hero, banda CTA, contacto y barra móvil (Llamar · WhatsApp · Cita).
- **Vídeo Levante UD**: enlazado con miniatura desde "Sobre mí" (https://www.youtube.com/watch?v=YFXDBqkJJaA) — enlaza a YouTube, no se incrusta: sin cookies de terceros y sin necesidad de autorización (enlazar contenido público del canal del club es lícito; no reproducirlo como propio). Antes del lanzamiento: descargar la miniatura y servirla en local (ahora se carga de img.youtube.com).
- **Colegio confirmado**: Ilustre Colegio Oficial de Médicos de Valencia, colegiado n.º 460311992 (actualizado en aviso legal y footers). NIF pendiente.
- **Dominio registrado** por Joel (drjoelgambin.com); añadido fichero CNAME para GitHub Pages.
- **Pendiente de Joel**: fotos (retrato + consulta), capturas de la web de referencia para afinar el diseño, NIF, registros sanitarios de los centros, días de consulta en Salar.

## 6. Rediseño v3 (02/09/2026) — estilo de referencia aplicado

Joel aportó capturas de la web de referencia (ignaciosaezaviles.es) y se aplicó su lenguaje visual completo: fondo blanco con secciones azul cielo muy suave (#EAF4F9), titulares en azul petróleo (#17404E), eyebrows azul claro sin mayúsculas, **botones negros tipo píldora**, tarjetas redondeadas (20px) con sombra suave, tipografía **Lato**, tarjetas dúo en el hero (checklist blanca + panel oscuro de cita), tarjetas de servicio con zona de foto (placeholders degradados hasta tener fotos reales), sección "¿Por qué elegir?" con retrato + tarjeta de checks, banda de sedes en panel verde azulado oscuro con pines, y footer oscuro. Nota de cumplimiento: la referencia muestra tarjetas de opiniones con citas y avatares; en la web de Joel la sección replica el estilo visual pero muestra únicamente la valoración agregada real de Doctoralia (5,0 · 12 opiniones) enlazada, sin citas fabricadas, conforme a la normativa de publicidad sanitaria.

## 7. Roadmap

| Fase | Contenido | Estado |
|---|---|---|
| 0 | Estudio de mercado + plan de marca | ✅ |
| 1 | Web estática bilingüe (16 páginas) con SEO on-page y schema | 🔨 En curso |
| 2 | Fotos/vídeo reales, WhatsApp, widget Doctoralia embebido, Google Business | ⬜ |
| 3 | Blog (2-4/mes), vídeos por patología, ampliación de landings (menisco, cartílago, LOD…) | ⬜ |
| 4 | Segunda opinión online estructurada + página paciente internacional ampliada | ⬜ |
