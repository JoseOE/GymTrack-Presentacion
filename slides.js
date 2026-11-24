/*
 * Contenido de la presentación GymTrack (Proyecto Integrador).
 *
 * Aquí vive TODO el texto y los números de cada diapositiva. Para cambiar
 * algo (una cifra, un título, las notas del orador) edita solo este archivo;
 * app.js se encarga de dibujarlo.
 *
 * Convenciones:
 *   - Texto entre *asteriscos* sale en naranja (acento de marca).
 *   - "\n" hace un salto de línea.
 *   - "presenta" es quién expone la diapositiva (se ve arriba a la derecha).
 *   - "guion" es lo que puede decir, párrafo por párrafo (tecla N abre el panel).
 *     Entre [corchetes] van indicaciones de escena que no se dicen en voz alta.
 *   - "duracion" es el tiempo sugerido para esa diapositiva (mm:ss).
 *   - "opcional: true" marca una diapositiva que se puede pasar rápido si no
 *     alcanza el tiempo (solo se avisa en el guion y en la vista general).
 *   - El orden del arreglo "diapositivas" es el orden en que se presentan.
 */

// Fases del proyecto. "foco" marca la fase que se presenta a continuación;
// con → se hace zoom a esa fase y entra su arquitectura.
const FASES = {
  tipo: 'fases',
  // Recorrido guiado: cada fase aparece en grande y con → se acomoda en su
  // columna mientras entra la siguiente. Al acomodar la 3 salen las cifras.
  recorrido: true,
  pasos: 3,
  tema: 'oscuro',
  seccion: 'Desarrollo · Fases',
  titulo: 'Fases del *proyecto*',
  fases: [
    { numero: 1, nombre: 'Comercio electrónico', estado: 'En producción', avance: 100 },
    { numero: 2, nombre: 'Aplicación móvil', estado: 'En producción (APK Android)', avance: 100 },
    { numero: 3, nombre: 'RFID', estado: 'Terminado: lector RFID que registra entradas y salidas', avance: 100 }
  ],
  metricas: [
    { valor: 6, texto: 'gimnasios' },
    { valor: 42, texto: 'socios' },
    { valor: 196, texto: 'ventas en 90 días' }
  ],
  aclaracion: 'Datos de demostración cargados en el servidor de producción para probar el sistema completo. No son clientes reales.'
};

window.PRESENTACION = {
  titulo: 'GymTrack · Proyecto Integrador',
  eslogan: 'Tu gimnasio. Tu visión. Otro nivel.',
  sitio: { url: 'https://gtweb.onrender.com', texto: 'gtweb.onrender.com', qr: 'img/qr-gtweb.svg' },
  duracionTotal: '15:00',

  diapositivas: [
    // 1 · Portada ────────────────────────────────────────────────────
    {
      id: 'portada',
      tipo: 'portada',
      tema: 'oscuro',
      seccion: 'Proyecto Integrador',
      // Primero la captura a pantalla completa; con → se recorre y sale la info
      intro: true,
      titulo: 'Ecosistema digital para la gestión, venta y *control de acceso* de gimnasios.',
      puntos: [
        { etiqueta: 'Qué', texto: 'Plataforma de comercio electrónico + app móvil + control de acceso RFID' },
        { etiqueta: 'Para quién', texto: 'Dueños de gimnasios locales y las personas que entrenan en ellos' },
        { etiqueta: 'Propósito', texto: 'Que solo entre quien pagó y que el gimnasio *venda más*' }
      ],
      integrantes: [
        'Eduardo Gómez Mejía',
        'Edwin Salvador Soto Hernández',
        'José María Ortiz Escamilla',
        'Valeria Soto Hernández',
        'Yael Antonio Chávez Atanacio'
      ],
      imagen: { src: 'img/web-inicio.png', alt: 'Página de inicio de GymTrack en producción' },
      // Captura de la app: al inicio va junto a la web y después queda en la esquina inferior derecha
      app: { src: 'img/app-login.png', alt: 'Pantalla de inicio de sesión de la app GymTrack' },
      duracion: '0:50',
      presenta: "José María",
      guion: [
        "[Al iniciar se ven la web y la app en grande]",
        "Buenos días. Somos el equipo GymTrack: Eduardo, Edwin, Valeria, Yael y yo, José María.",
        "[→ se acomoda la portada]",
        "GymTrack es un ecosistema digital para gimnasios: une una plataforma de comercio electrónico, una aplicación móvil y un control de acceso con RFID.",
        "Está pensado para dueños de gimnasios locales y para las personas que entrenan en ellos. Nuestro propósito es simple: que solo entre quien pagó y que el gimnasio venda más. Por eso nuestro eslogan es: Tu gimnasio. Tu visión. Otro nivel."
      ]
    },

    // 2 · El dato ────────────────────────────────────────────────────
    {
      id: 'dato',
      tipo: 'dato',
      tema: 'oscuro',
      seccion: 'Introducción · El dato',
      cifra: { valor: 30000, prefijo: '$', sufijo: '' },
      bajada: 'MXN al año que se van *por la puerta*',
      formula: '50 socios × 10% con membresía vencida × $500 = *$2,500 al mes*',
      grafica: {
        titulo: 'Pérdida acumulada (MXN)',
        datos: [
          { etiqueta: 'Mes 1', valor: 2500 },
          { etiqueta: 'Mes 3', valor: 7500 },
          { etiqueta: 'Mes 6', valor: 15000 },
          { etiqueta: 'Mes 9', valor: 22500 },
          { etiqueta: 'Mes 12', valor: 30000 }
        ]
      },
      escala: 'Gimnasio local de 50 socios. En una cadena de 10 sucursales de 40 a 60 socios cada una, la pérdida sube a *$240,000 – $360,000 al año*.',
      duracion: '0:45',
      presenta: "José María",
      guion: [
        "Empecemos con un número: treinta mil pesos al año.",
        "Imaginen un gimnasio de 50 socios. Si solo el 10% tiene la membresía vencida y sigue entrando porque nadie revisa en la puerta, son 5 personas. A 500 pesos al mes son 2,500 pesos que no se cobran cada mes; en un año, 30,000.",
        "Y si pensamos en una cadena de 10 sucursales de 40 a 60 socios, esa misma fuga llega a entre 240 y 360 mil pesos al año.",
        "[Si preguntan: es una estimación con cifras típicas de un gimnasio local]",
        "Le paso la palabra a Yael para explicarles de dónde viene esto."
      ]
    },

    // 3 · Área de oportunidad ────────────────────────────────────────
    {
      id: 'problema',
      tipo: 'problema',
      tema: 'claro',
      seccion: 'Introducción · Área de oportunidad',
      titulo: 'Área de *oportunidad*',
      dona: {
        alCorriente: 90,
        vencidos: 10,
        textoAlCorriente: 'socios al corriente',
        textoVencidos: 'con membresía vencida que siguen entrando',
        detalle: '5 de 50'
      },
      causas: [
        { titulo: 'Vigilancia de la puerta', texto: 'Depende de personas que cambian o no siempre están; es difícil de mantener.' },
        { titulo: 'Registros manuales', texto: 'Sin un sistema, todo se anota en Excel o en bitácoras; digitalizarlo ahorra tiempo.' },
        { titulo: 'Validación de pagos', texto: 'Confirmar que un socio pagó lleva tiempo y se hace a mano.' },
        { titulo: 'Manuales de uso de máquinas', texto: 'El socio no tiene a la mano cómo usar las máquinas de su gimnasio.' }
      ],
      duracion: '0:45',
      presenta: "Yael",
      guion: [
        "Gracias, José María. En ese gimnasio, 9 de cada 10 socios están al corriente, pero 1 de cada 10 entra con la membresía vencida. Ahí vemos cuatro áreas de oportunidad.",
        "Primero, la vigilancia de la puerta: depende de personas que cambian o que no siempre están, y eso es difícil de mantener. Segundo, los registros: los gimnasios no tienen un sistema y anotan todo en Excel o en bitácoras, así que digitalizarlo les ahorra tiempo.",
        "Tercero, la validación de pagos: confirmar que un socio pagó lleva tiempo. Y cuarto, los manuales de uso: el socio no tiene a la mano cómo usar las máquinas de su gimnasio."
      ]
    },

    // 4 · Solución ───────────────────────────────────────────────────
    {
      id: 'solucion',
      tipo: 'solucion',
      tema: 'claro',
      seccion: 'Introducción · Solución',
      titulo: 'Solución *tecnológica*',
      pilares: [
        { icono: 'laptop', titulo: 'Plataforma de comercio electrónico', items: ['Panel del dueño', 'Tienda', 'Mostrador', 'Pagos reales'] },
        { icono: 'phone', titulo: 'Aplicación móvil', items: ['Membresía', 'Rutinas con fotos de cada ejercicio', 'Progreso', 'Compras'] },
        { icono: 'chip', titulo: 'Control de acceso RFID', items: ['Lector RFID UHF', 'Registra entradas y salidas en el panel del dueño'] }
      ],
      centro: 'Ecosistema GymTrack',
      flujo: [
        { titulo: 'Pago', texto: 'solo puede comprar en un gimnasio quien es miembro de él' },
        { titulo: 'Membresía activa', texto: 'se activa automáticamente al pagar' },
        { titulo: 'Entrada y salida', texto: 'quedan registradas en el panel del dueño del gimnasio' }
      ],
      duracion: '0:45',
      presenta: "Yael",
      guion: [
        "Nuestra solución son tres piezas conectadas a una sola nube.",
        "Una plataforma de comercio electrónico para el dueño: panel, tienda, mostrador y pagos reales. Una aplicación móvil para el socio: su membresía, sus rutinas con fotos de cómo se hace cada ejercicio, su progreso y sus compras. Y un control de acceso RFID: un lector que registra las entradas y salidas en el panel del dueño del gimnasio.",
        "Abajo ven el flujo: el socio paga, y solo puede comprar en un gimnasio si es miembro de él; su membresía se activa sola; y su entrada y su salida quedan registradas en el panel del dueño de ese gimnasio, sin que nadie las anote a mano.",
        "Eduardo les cuenta cómo lo construimos."
      ]
    },

    // 5 · Fases (vista completa; sigue la fase 1) ────────────────────
    {
      ...FASES,
      id: 'fases',
      foco: 1,
      duracion: '1:10',
      presenta: "Eduardo",
      guion: [
        "Gracias, Yael. El proyecto lo construimos en tres fases.",
        "[Aparece la Fase 1 en grande]",
        "La primera es el comercio electrónico: la tienda de cada gimnasio, con pago con tarjeta, PayPal y pago en tienda, recibos en PDF y panel de ventas. Ya está en producción.",
        "[→ entra la Fase 2]",
        "La segunda es la aplicación móvil para el socio, también en producción como APK de Android.",
        "[→ entra la Fase 3]",
        "La tercera es el control de acceso con RFID, que ya terminamos: el lector registra las entradas y salidas de cada socio.",
        "[→ aparecen las cifras]",
        "Abajo ven 6 gimnasios, 42 socios y 196 ventas en 90 días. Son datos de demostración que cargamos en producción para probar el sistema completo; no son clientes reales. Valeria les explica cada fase."
      ]
    },

    // 6 · Fase 1: comercio electrónico ───────────────────────────────
    {
      id: 'web',
      tipo: 'capas',
      fase: 1,
      transicion: 'zoom',      // entra con zoom desde la tarjeta de la fase 1
      tema: 'claro',
      seccion: 'Desarrollo · Fase 1',
      titulo: '*Comercio electrónico*',
      capas: [
        { nombre: 'Front', items: ['HTML, CSS, JavaScript, Bootstrap · tema claro y oscuro', 'Tienda · checkout · panel del dueño · mostrador · ventas · catálogo de máquinas'] },
        { nombre: 'Back', items: ['API REST en Java', 'Desplegada en Render, la misma que usa la app'] },
        { nombre: 'Servicios', items: ['Pago con tarjeta · PayPal · pago en tienda', 'Recibos PDF · correos · Google Analytics 4'] },
        { nombre: 'Datos', items: ['MongoDB Atlas multi-gimnasio', 'Seguridad NMX-I-27001: sesiones con hash, bitácora y cabeceras'] }
      ],
      imagen: { src: 'img/web-servicios.png', alt: 'Catálogo de soluciones en gtweb.onrender.com', ruta: 'gtweb.onrender.com/#servicios' },
      acceso: { texto: 'Escanea o entra a la plataforma', boton: 'Entrar a la web' },
      duracion: '1:00',
      presenta: "Valeria",
      guion: [
        "[→ zoom a la Fase 1]",
        "Gracias, Eduardo. Este es el comercio electrónico, por capas.",
        "En el front está el sitio en HTML, CSS, JavaScript y Bootstrap: la tienda, el checkout, el panel del dueño, el mostrador, las ventas y un catálogo de 42 máquinas con fotos de cada ejercicio, en tema claro u oscuro. En el back, una API REST en Java desplegada en Render; es la misma que usa la app.",
        "Como servicios ofrecemos tres formas de pago: con tarjeta, con PayPal y en efectivo en tiendas. Además, recibos en PDF, correos y analítica con Google Analytics 4. Los datos viven en MongoDB Atlas, separados por gimnasio y con los controles de seguridad de la norma.",
        "Pueden escanear el código o entrar con el botón para verla en vivo."
      ]
    },

    // 7 · Fase 2: app móvil ──────────────────────────────────────────
    {
      id: 'app',
      tipo: 'app',
      fase: 2,
      transicion: 'deslizar',  // entra deslizándose desde la derecha
      tema: 'claro',
      seccion: 'Desarrollo · Fase 2',
      titulo: '*App móvil*',
      front: {
        nombre: 'Front (móvil)',
        tecnologia: 'React Native + Expo + TypeScript',
        detalle: 'APK Android',
        pantallas: ['Tienda', 'Más vendidos', 'Membresía', 'Rutinas', 'Progreso', 'Pedidos']
      },
      back: {
        nombre: 'Back (servicios)',
        tecnologia: 'La misma API de la web',
        items: ['Autenticación con token Bearer', 'Notificaciones push']
      },
      compartida: 'API compartida con la web',
      kpis: [
        { valor: 591, texto: 'pruebas automatizadas en CI', detalle: 'revisan compras, pagos, permisos y el lector en cada cambio' },
        { valor: 3, texto: 'pasarelas de pago', detalle: 'Tarjeta · PayPal · pago en tienda' }
      ],
      duracion: '0:45',
      presenta: "Valeria",
      guion: [
        "[→ entra deslizándose]",
        "La app móvil la hicimos con React Native, Expo y TypeScript, y se instala como APK de Android.",
        "No duplicamos servidor: usa la misma API que la web, con autenticación por token y notificaciones push.",
        "Para asegurar la calidad tenemos 591 pruebas automatizadas que corren en GitHub Actions, nuestro CI, cada vez que alguien sube un cambio. Son pruebas de punta a punta: un programa hace lo mismo que haría un usuario contra la API real, como registrarse, unirse a un gimnasio, comprar con tarjeta, PayPal o en tienda, recibir su recibo, entrar con el lector o intentar ver datos de otro gimnasio, y revisa que el resultado sea el correcto.",
        "Si una sola de esas pruebas falla, el cambio no se publica. Así la web y la app, que usan la misma API, no se rompen sin que nos demos cuenta.",
        "[Si preguntan: están en GTWeb/pruebas; cada una imprime ✔ o ✘ por comprobación]",
        "Las tres pasarelas son pago con tarjeta, PayPal y pago en tienda, y se abren en un navegador seguro, así la app nunca toca los datos de la tarjeta.",
        "Eduardo les muestra el recorrido del usuario en la app."
      ]
    },

    // 8 · Fase 2: recorrido principal del usuario en la app ────────
    {
      id: 'recorrido-app',
      tipo: 'recorrido',
      fase: 2,
      transicion: 'deslizar',
      tema: 'claro',
      seccion: 'Desarrollo · Fase 2',
      titulo: 'Recorrido principal del *usuario en la app*',
      subtitulo: 'De abrir la app a su primer entrenamiento',
      // Recorrido guiado: cada → abre las pantallas de un paso en grande y,
      // con el siguiente, se acomodan en su tarjeta (como en Fases).
      pasos: 6,
      etapas: [
        { titulo: 'Inicia sesión', texto: 'Entra con su correo y contraseña. Si es nuevo, crea su cuenta en un minuto.',
          pantallas: ['Iniciar sesión', 'Crear cuenta'],
          capturas: [{ src: 'img/app-login.png', alt: 'Pantalla Iniciar sesión' }, { src: 'img/app-registro.png', alt: 'Pantalla Crear cuenta' }] },
        { titulo: 'Se une a su gimnasio', texto: 'Escribe el código que le dan en recepción y el dueño aprueba su solicitud.',
          pantallas: ['Vincular gimnasio'],
          capturas: [{ src: 'img/app-vincular.png', alt: 'Pantalla Vincular gimnasio' }] },
        { titulo: 'Ve su membresía', texto: 'Ve su gimnasio, si su membresía está activa y hasta cuándo, y la rutina del día.',
          pantallas: ['Inicio'],
          capturas: [{ src: 'img/app-inicio.png', alt: 'Pantalla Inicio' }] },
        { titulo: 'Elige y paga su plan o producto', texto: 'Elige en la tienda de su gimnasio y paga con tarjeta, PayPal o en tienda, sin ir a recepción.',
          pantallas: ['Tienda', 'Pagar'],
          capturas: [{ src: 'img/app-tienda.png', alt: 'Pantalla Tienda' }, { src: 'img/app-pagar.png', alt: 'Pantalla Pagar' }] },
        { titulo: 'Entrena y mide su avance', texto: 'Sigue la rutina paso a paso, con fotos de cómo se hace cada ejercicio; anota series y peso, y ve su avance.',
          pantallas: ['Entrenar', 'Progreso'],
          capturas: [{ src: 'img/app-entrenar.png', alt: 'Pantalla Entrenar' }, { src: 'img/app-progreso.png', alt: 'Pantalla Progreso' }] }
      ],
      duracion: '1:00',
      presenta: "Eduardo",
      guion: [
        "Gracias, Valeria. Este es el recorrido principal del socio dentro de la app, en cinco pasos. En cada uno les muestro la pantalla donde lo hace.",
        "[→] Primero inicia sesión en Iniciar sesión, o crea su cuenta en Crear cuenta si es nuevo.",
        "[→] Luego, en Vincular gimnasio, se une a su gimnasio con el código que le dan en recepción, y el dueño aprueba su solicitud.",
        "[→] En Inicio ve su gimnasio, si su membresía está activa y hasta cuándo, y la rutina del día.",
        "[→] En la Tienda elige su plan o un producto y lo paga en Pagar, con tarjeta, PayPal o en tienda, sin ir a recepción.",
        "[→] Y por último, en Entrenar sigue la rutina de su coach paso a paso, con fotos de cómo se hace cada ejercicio, anota sus series y su peso, y en Progreso ve su racha y cuánto avanza.",
        "[→] Así queda el recorrido completo. La renovación y el pago los van a ver en la demostración. Edwin sigue con el RFID."
      ]
    },

    // 9 · Fase 3: RFID ───────────────────────────────────────────────
    {
      id: 'hardware',
      tipo: 'hardware',
      fase: 3,
      transicion: 'deslizar',
      tema: 'claro',
      seccion: 'Desarrollo · Fase 3',
      titulo: '*RFID*',
      subtitulo: 'Arquitectura de sensores: del tag a la nube y al panel "Accesos RFID"',
      nodos: [
        { icono: 'card', titulo: 'Credencial', texto: 'RFID UHF' },
        { icono: 'reader', titulo: 'Lector UHF', texto: 'YRM1004', enlace: 'UHF' },
        { icono: 'chip', titulo: 'ESP32', texto: 'LILYGO T-SIM7070G', destacado: true, enlace: 'UART' },
        { icono: 'wifi', titulo: 'Red', texto: 'WiFi · LTE-M o 2G' },
        { icono: 'lock', titulo: 'HTTPS', texto: 'misma API y seguridad' },
        { icono: 'cloud', titulo: 'GTWeb', texto: 'API en Render + MongoDB Atlas' }
      ],
      tituloActuadores: 'Parámetros que monitorea en tiempo real',
      actuadores: [
        { icono: 'ledok', titulo: 'Entradas', texto: 'LED verde y buzzer al permitir el paso' },
        { icono: 'ledazul', titulo: 'Salidas', texto: 'LED azul · cierra la visita' },
        { icono: 'usuario', titulo: 'Quién y cuándo', texto: 'socio, hora y lector de cada pase' },
        { icono: 'ledno', titulo: 'Denegados', texto: 'LED rojo, buzzer y alerta' }
      ],
      offline: { titulo: 'Modo sin conexión', texto: 'Si se cae la red, el lector decide con la lista de credenciales que guarda en su memoria.' },
      duracion: '0:55',
      presenta: "Edwin",
      guion: [
        "[→]",
        "Gracias, Eduardo. La tercera fase es el control de acceso con RFID, una arquitectura de sensores que se lee de izquierda a derecha, igual que viaja el dato.",
        "El socio acerca su credencial UHF; el lector YRM1004 la lee y la pasa por UART a la placa LILYGO, un ESP32 con módem, que le pregunta por HTTPS a nuestra API, por WiFi, LTE-M o 2G. Cada acceso se guarda en MongoDB.",
        "Monitoreamos en tiempo real las entradas, con LED verde y un pitido del buzzer; las salidas, con LED azul; quién entra y a qué hora; y los accesos denegados, con LED rojo, buzzer y una alerta en el panel.",
        "Y si se cae la red, el lector decide con la lista de credenciales que guarda en su memoria.",
        "[Si preguntan por qué HTTPS y no MQTT: el lector siempre pregunta, así que basta HTTPS con una llave por lector]"
      ]
    },

    // 10 · Seguridad: norma mexicana NMX-I-27001-NYCE-2015 ──────────
    {
      id: 'seguridad',
      tipo: 'seguridad',
      tema: 'oscuro',
      seccion: 'Desarrollo · Seguridad',
      titulo: 'Seguridad · *NMX-I-27001*',
      subtitulo: 'Dos controles de la norma y cómo funcionan en GymTrack',
      // Asociación que la publica, la norma y a qué se refiere
      marco: [
        { etiqueta: 'Asociación', valor: 'NYCE', texto: 'Normalización y Certificación: el organismo mexicano que publica la norma' },
        { etiqueta: 'Norma', valor: 'NMX-I-27001-NYCE-2015', texto: 'Versión mexicana de la *ISO/IEC 27001:2013*' },
        { etiqueta: 'A qué se refiere', valor: 'Seguridad de la información', texto: 'Proteger los datos para que solo los vea quien debe, no se alteren y estén disponibles' }
      ],
      controles: [
        {
          clave: 'A.9.4.3', dominio: 'A.9 · Control de acceso', nombre: 'Gestión de contraseñas',
          pide: 'Que las contraseñas sean seguras y que el sistema las guarde protegidas.',
          como: [
            'Al crear la cuenta, la página marca en vivo los requisitos: *8 caracteres, letra, número y símbolo*',
            'Se guarda cifrada con *BCrypt*: ni nosotros podemos leerla',
            'Si la olvida, la cambia con un *código* que le llega a su correo'
          ],
          donde: 'Página Crear cuenta'
        },
        {
          clave: 'A.12.4.1', dominio: 'A.12 · Seguridad de las operaciones', nombre: 'Registro de eventos',
          pide: 'Guardar un registro de lo que pasa en el sistema: quién hizo qué y cuándo.',
          como: [
            'Cada inicio de sesión, contraseña incorrecta y acceso negado queda anotado con *fecha, IP y dispositivo*',
            'También los cambios del dueño: *precios, reembolsos, altas y bajas* de miembros',
            'Nadie la puede editar ni borrar; se borra sola a los *180 días*'
          ],
          donde: 'Panel del dueño → Bitácora'
        }
      ],
      duracion: '1:00',
      presenta: "Edwin",
      guion: [
        "Para la seguridad usamos la norma mexicana NMX-I-27001-NYCE-2015. La publica NYCE, Normalización y Certificación, el organismo mexicano de normalización; es la versión mexicana de la norma internacional ISO/IEC 27001.",
        "¿A qué se refiere? A la seguridad de la información: proteger los datos para que solo los vea quien debe, que nadie los altere y que estén disponibles cuando se necesitan. Para eso la norma trae 114 controles; les vamos a explicar dos.",
        "El primero es el A.9.4.3, gestión de contraseñas, que es parte del control de acceso. Pide que las contraseñas sean seguras y que el sistema las guarde protegidas.",
        "En la página funciona así: al crear la cuenta, mientras la persona escribe su contraseña se van marcando los requisitos: ocho caracteres, una letra, un número y un símbolo. Al guardarla la ciframos con BCrypt, así que ni nosotros podemos leerla. Y si la olvida, la cambia con un código de un solo uso que le llega a su correo.",
        "El segundo es el A.12.4.1, registro de eventos. Pide guardar un registro de lo que pasa en el sistema, para saber quién hizo qué y cuándo.",
        "En GymTrack es la bitácora de seguridad que el dueño ve en su panel: cada inicio de sesión, cada contraseña incorrecta y cada acceso negado, con la fecha, la IP y el dispositivo. También quedan los cambios importantes del dueño, como precios, reembolsos y altas o bajas de miembros. Nadie la puede editar ni borrar, y se borra sola a los 180 días.",
        "[Si preguntan por los demás controles: de los 114, aplican 95 a GymTrack y 82 ya están implementados; los otros 13 están en proceso]",
        "Ahora, la demostración. Valeria empieza con el lector."
      ]
    },

    // 11 · Demostración técnica ─────────────────────────────────
    {
      id: 'demo',
      tipo: 'demo',
      tema: 'oscuro',
      seccion: 'Demostración técnica',
      titulo: '*Demostración*',
      subtitulo: 'Un socio con la membresía vencida intenta entrar al gimnasio',
      lugares: {
        rfid: { icono: 'chip', nombre: 'Adquisición de datos' },
        web: { icono: 'laptop', nombre: 'Web' },
        app: { icono: 'phone', nombre: 'App móvil' }
      },
      pasos: [
        { donde: 'rfid', icono: 'card', titulo: 'Pasa su tarjeta', texto: 'Su membresía está vencida: LED rojo y buzzer, acceso negado', presenta: 'Valeria' },
        { donde: 'web', icono: 'ledno', titulo: 'Acceso negado', texto: 'El panel del dueño muestra el intento al instante', presenta: 'Edwin' },
        { donde: 'app', icono: 'campana', titulo: 'Le llega el aviso', texto: 'Una notificación le pide renovar su membresía', presenta: 'Edwin' },
        { donde: 'app', icono: 'recibo', titulo: 'Paga desde la app', texto: 'Renueva su mensualidad con tarjeta o PayPal', presenta: 'Edwin' },
        { donde: 'rfid', icono: 'card', titulo: 'Vuelve a pasar su tarjeta', texto: 'Ya renovada: LED verde, buzzer y su entrada queda registrada', presenta: 'Valeria' },
        { donde: 'web', icono: 'grafica', titulo: 'Todo queda registrado', texto: 'El dueño ve el pago y la entrada del socio', presenta: 'Edwin' }
      ],
      duracion: '5:00',
      presenta: ["Edwin","Valeria"],
      guion: [
        { quien: "Todo el equipo", texto: "[Antes de empezar: la web abierta en la laptop con la sesión del dueño, en Accesos RFID; el celular con la app y la sesión del socio vencido, con las notificaciones permitidas; el lector encendido y en línea en el panel]" },
        { quien: "Todo el equipo", texto: "[Si ensayan antes: al pagar, la membresía de ese socio queda activa, así que para la demo necesitan otro socio vencido]" },
        { quien: "Valeria", texto: "Les vamos a mostrar todo el sistema en un solo flujo: la adquisición de datos con el RFID, la web y la app." },
        { quien: "Valeria", texto: "Este socio tiene su membresía vencida e intenta entrar. [Acercar la tarjeta al lector] El lector manda la lectura a la API, que revisa su membresía: LED rojo, suena el buzzer y no puede pasar." },
        { quien: "Edwin", texto: "En la web, el dueño ve al instante el intento: acceso negado por membresía vencida, con la hora." },
        { quien: "Edwin", texto: "[Pasarles el celular a los evaluadores] Al mismo tiempo, al socio le llega esta notificación para renovar." },
        { quien: "Edwin", texto: "Desde la app paga su mensualidad. [Pagar con la tarjeta de prueba] Al terminar, la app le dice que ya puede volver a pasar su tarjeta." },
        { quien: "Valeria", texto: "Ya con el pago confirmado, vuelve a pasar su tarjeta. [Acercar la tarjeta] Ahora el lector la acepta: LED verde, suena el buzzer y su entrada queda registrada. Le pedimos pasarla otra vez para asegurarnos de que la persona sí está en la puerta." },
        { quien: "Edwin", texto: "Y en la web el dueño ve las dos cosas: el pago de la mensualidad y la entrada del socio." },
        { quien: "Valeria", texto: "Así, con un solo socio, vieron la web, la app y la adquisición de datos trabajando juntas sobre la misma API." },
        { quien: "Todo el equipo", texto: "[Si algo falla, explicar el flujo con esta diapositiva y seguir]" }
      ]
    },

    // 12 · Conclusiones (opcional) ──────────────────────────────────
    {
      id: 'conclusiones',
      tipo: 'conclusiones',
      tema: 'claro',
      seccion: 'Conclusiones',
      opcional: true,
      titulo: '*Conclusiones*',
      puntos: [
        { valor: 'Integración', texto: 'Web, app y RFID trabajan sobre la misma API: lo que el socio compra se refleja en todas partes.' },
        { valor: 'Tiempo', texto: 'Registros, cobros y validación de pagos ya no dependen del Excel ni de las bitácoras.' },
        { valor: 'Control', texto: 'Cada entrada y salida queda registrada, sin depender de quien vigila la puerta.' },
        { valor: 'Seguridad', texto: 'La protegimos desde el diseño con la NMX-I-27001, no como un parche al final.' }
      ],
      siguientes: ['Piloto con un gimnasio local', 'Publicar la app en Google Play', 'Sumar el RFID al alcance de la NMX-I-27001'],
      duracion: '0:30',
      presenta: "Yael",
      guion: [
        "[OPCIONAL: si el tiempo ya está justo, solo di la primera y la última frase y pasa al cierre]",
        "Gracias, Valeria.",
        "Para cerrar, cuatro conclusiones.",
        "Integración: la web, la app y el RFID comparten la misma API, así que lo que el socio compra se refleja en todas partes. Tiempo: los registros, los cobros y la validación de pagos ya no dependen del Excel.",
        "Control: cada entrada y salida queda registrada sin depender de quien vigila la puerta. Seguridad: la aplicamos desde el diseño con la NMX-I-27001.",
        "Lo que sigue: un piloto con un gimnasio local, publicar la app en Google Play y sumar el RFID al alcance de la norma de seguridad. Eduardo cierra."
      ]
    },

    // 13 · Repositorios ──────────────────────────────────────────────
    {
      id: 'repositorios',
      tipo: 'repos',
      tema: 'marca',
      seccion: 'Cierre',
      titulo: 'Código del *proyecto*',
      repos: [
        {
          nombre: 'GTWeb',
          texto: 'Plataforma de comercio electrónico y API REST',
          tecnologias: 'Java · MongoDB Atlas',
          url: 'https://github.com/JoseOE/GTWeb',
          ruta: 'github.com/JoseOE/GTWeb',
          qr: 'img/qr-gtweb-repo.svg'
        },
        {
          nombre: 'GTApp',
          texto: 'Aplicación móvil para los socios',
          tecnologias: 'React Native · Expo · TypeScript',
          url: 'https://github.com/JoseOE/GTApp',
          ruta: 'github.com/JoseOE/GTApp',
          qr: 'img/qr-gtapp-repo.svg'
        }
      ],
      despedida: 'Gracias. ¿Preguntas?',
      duracion: '0:15',
      presenta: "Eduardo",
      guion: [
        "Aquí están nuestros dos repositorios públicos, GTWeb y GTApp; pueden escanear el código para verlos.",
        "Muchas gracias. ¿Tienen alguna pregunta?"
      ]
    }
  ]
};
