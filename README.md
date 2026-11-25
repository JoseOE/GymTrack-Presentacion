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
- **Recorrido en la app (8):** cada `→` abre en grande las pantallas de un paso (capturas reales de la app) y, con el siguiente, se encogen hasta su tarjeta; son 6 pasos.

## Orden y tiempos (meta: 15:00)

Sigue el hilo que pide la rúbrica: introducción, desarrollo, demostración técnica y conclusiones. Suman **14:40**: 9:40 de exposición y 5:00 de demostración, con 20 segundos de margen.

| # | Diapositiva | Presenta | Tiempo |
|---|---|---|---|
| 1 | Portada | José María | 0:50 |
| 2 | El dato ($30,000 al año) | José María | 0:45 |
| 3 | Área de oportunidad | Yael | 0:45 |
| 4 | Solución | Yael | 0:45 |
| 5 | Fases del proyecto | Eduardo | 1:10 |
| 6 | Comercio electrónico | Valeria | 1:00 |
| 7 | App móvil | Valeria | 0:45 |
| 8 | Recorrido principal del usuario en la app | Eduardo | 1:00 |
| 9 | RFID (lector, servo de la puerta y modo sin conexión) | Edwin | 0:55 |
| 10 | Seguridad · NMX-I-27001: contraseñas (A.9.4.3) y registro de eventos (A.12.4.1) | Edwin | 1:00 |
| 11 | Demostración: socio vencido → acceso negado → aviso en la app → paga → vuelve a pasar la tarjeta y el servo abre | Edwin (web y app) · Valeria (RFID) · todos apoyan | 5:00 |
| 12 | Conclusiones (**opcional**: si no alcanza el tiempo, se pasa rápido) | Yael | 0:30 |
| 13 | Repositorios y cierre | Eduardo | 0:15 |
| | **Total** | | **14:40** |

### Tiempo de cada integrante

| Integrante | Diapositivas | Exposición | Demostración |
|---|---|---|---|
| José María | 1 y 2 | 1:35 | apoya |
| Yael | 3, 4 y 12 | 2:00 (1:30 sin las conclusiones) | apoya |
| Eduardo | 5, 8 y 13 | 2:25 | apoya |
| Valeria | 6 y 7 | 1:45 | explica el RFID |
| Edwin | 9 y 10 | 1:55 | explica la web y la app |

En la demostración, Edwin y Valeria explican y los demás manejan la laptop, el celular y la tarjeta. El cronómetro del guion (tecla `N`) se pone amarillo cuando faltan 2 minutos.

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
