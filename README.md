# GymTrack · Presentación del Proyecto Integrador

> **Tu gimnasio. Tu visión. Otro nivel.**

Presentación del proyecto **GymTrack**: comercio electrónico, aplicación móvil y control de acceso IoT para gimnasios.

**Verla en línea:** https://joseoe.github.io/GymTrack-Presentacion/

También funciona sin internet: descarga el repositorio (Code → Download ZIP) y abre `index.html` en el navegador.

## Cómo se presenta

| Tecla | Acción |
|---|---|
| `→` · `Espacio` · clic | Siguiente |
| `←` | Anterior |
| `N` | Guion del orador en un panel lateral (la diapositiva se recorre a la izquierda), con quién presenta, quién sigue y el cronómetro (meta: 15:00; se pone amarillo cuando faltan 2 minutos) |
| `G` | Vista general de todas las diapositivas |
| `F` | Pantalla completa |
| `R` | Reiniciar el cronómetro |

Algunas diapositivas tienen pasos internos antes de pasar a la siguiente:

- **Portada (1):** empieza con la web y la app en grande; con `→` se acomodan y aparece la información.
- **Fases (5):** cada fase entra en grande y con `→` se acomoda; son 3 pasos. El siguiente `→` hace zoom a la arquitectura del comercio electrónico.

## Orden (15 minutos: 10 de exposición + 5 de demostración)

Sigue el hilo que pide la rúbrica: introducción, desarrollo, demostración técnica y conclusiones.

| # | Diapositiva | Tema de la rúbrica | Presenta |
|---|---|---|---|
| 1 | Portada | Introducción | José María |
| 2 | El dato ($30,000 al año) | Introducción | José María |
| 3 | Problema | Introducción | José María |
| 4 | Solución | Introducción | Yael |
| 5 | Fases del proyecto | Desarrollo | Yael |
| 6 | Arquitectura · Comercio electrónico | Negocios Electrónicos (MVP) | Valeria |
| 7 | Arquitectura · App móvil | Desarrollo de Aplicaciones Móviles | Valeria |
| 8 | Recorrido principal del usuario en la app | Desarrollo de Aplicaciones Móviles | Valeria |
| 9 | Arquitectura · IoT (sensores y parámetros monitoreados) | Internet de las Cosas | Edwin |
| 10 | Seguridad · NMX-I-27001-NYCE-2015 | Administración y Seguridad de Redes | Edwin |
| 11 | Plan de negocio electrónico (eShop + MVP con carrito y monitoreo) | Negocios Electrónicos | Eduardo |
| 12 | Demostración técnica en vivo (5 min) | Funcionamiento del proyecto | Edwin (web y app) · Valeria (IoT) |
| 13 | Conclusiones | Conclusiones | Eduardo |
| 14 | Repositorios | Cierre | Eduardo |

## Cómo editarla

Todo el texto, las cifras y las notas están en **`slides.js`**; no hace falta tocar nada más.

- Texto entre `*asteriscos*` sale en naranja.
- `duracion` es el tiempo sugerido de cada diapositiva.
- `presenta` es quién expone la diapositiva; se ve arriba a la derecha.
- `guion` es lo que puede decir, párrafo por párrafo (tecla `N`). Lo que va entre [corchetes] son indicaciones, no se dice en voz alta.

| Archivo | Qué tiene |
|---|---|
| `slides.js` | Contenido de cada diapositiva |
| `app.js` | Dibuja las diapositivas, las gráficas y las transiciones |
| `styles.css` | Diseño (mismas fuentes y colores que gtweb.onrender.com) |
| `img/` | Capturas de la web y la app, y los códigos QR |
| `fonts/` | Barlow Condensed, DM Sans y Manrope (licencia OFL) |

## Equipo

Eduardo Gómez Mejía · Edwin Salvador Soto Hernández · José María Ortiz Escamilla · Valeria Soto Hernández · Yael Antonio Chávez Atanacio
