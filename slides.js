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
    { numero: 3, nombre: 'IoT', estado: 'Prototipo en desarrollo, demo a finales de noviembre', avance: null, etiqueta: 'En curso' }
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
        { etiqueta: 'Qué', texto: 'Plataforma de comercio electrónico + app móvil + control de acceso IoT' },
        { etiqueta: 'Para quién', texto: 'Dueños de gimnasios locales y medianos (30 a 60 socios) y sus socios' },
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
        "GymTrack es un ecosistema digital para gimnasios: une una plataforma de comercio electrónico, una aplicación móvil y un control de acceso IoT.",
        "Está pensado para dueños de gimnasios locales, de 30 a 60 socios, y para sus socios. Nuestro propósito es simple: que solo entre quien pagó y que el gimnasio venda más."
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
        "[Si preguntan: es una estimación con cifras típicas de un gimnasio local]"
      ]
    },

    // 3 · Problema ───────────────────────────────────────────────────
    {
      id: 'problema',
      tipo: 'problema',
      tema: 'claro',
      seccion: 'Introducción · Problema',
      titulo: 'Definición del *problema*',
      dona: {
        alCorriente: 90,
        vencidos: 10,
        textoAlCorriente: 'socios al corriente',
        textoVencidos: 'con membresía vencida que siguen entrando',
        detalle: '5 de 50'
      },
      causas: [
        { titulo: 'Acceso sin validar', texto: 'Entran socios con membresía vencida porque nadie revisa en la puerta.' },
        { titulo: 'Registros en papel o Excel', texto: 'El estado real de cada socio no está a la vista de nadie.' },
        { titulo: 'Cobros sin verificación', texto: 'Los pagos no se confirman en tiempo real.' },
        { titulo: 'Apps genéricas', texto: 'No conocen las máquinas que de verdad tiene el gimnasio.' }
      ],
      duracion: '0:45',
      presenta: "José María",
      guion: [
        "¿Por qué pasa esto? En ese gimnasio, 9 de cada 10 socios están al corriente, pero 1 de cada 10 entra con la membresía vencida.",
        "Encontramos cuatro causas: el acceso no se valida; los registros están en papel o en Excel; los cobros no se verifican en tiempo real; y las apps genéricas no conocen las máquinas del gimnasio.",
        "El resultado es dinero perdido y una mala experiencia para el socio. Le paso la palabra a Yael para mostrarles nuestra solución."
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
        { icono: 'phone', titulo: 'Aplicación móvil', items: ['Membresía', 'Rutinas', 'Progreso', 'Compras'] },
        { icono: 'chip', titulo: 'Prototipo IoT', items: ['Lector RFID UHF', 'Valida el pago', 'Registra entrada y salida'] }
      ],
      centro: 'Ecosistema GymTrack',
      flujo: [
        { titulo: 'Pago', texto: 'se procesa de forma segura' },
        { titulo: 'Membresía activa', texto: 'se activa automáticamente' },
        { titulo: 'Acceso autorizado', texto: 'entrada y salida sin intervención manual' }
      ],
      duracion: '0:45',
      presenta: "Yael",
      guion: [
        "Gracias, José María. Nuestra solución son tres piezas conectadas a una sola nube.",
        "Una plataforma de comercio electrónico para el dueño: panel, tienda, mostrador y pagos reales. Una aplicación móvil para el socio: su membresía, rutinas, progreso y compras. Y un prototipo IoT: un lector RFID que valida el pago y registra entradas y salidas.",
        "Abajo ven cómo resuelve el problema: el socio paga, su membresía se activa sola y el lector le abre la puerta. Sin papel y sin que nadie revise a mano."
      ]
    },

    // 5 · Fases (vista completa; sigue la fase 1) ────────────────────
    {
      ...FASES,
      id: 'fases',
      foco: 1,
      duracion: '1:10',
      presenta: "Yael",
      guion: [
        "El proyecto lo construimos en tres fases.",
        "[Aparece la Fase 1 en grande]",
        "La primera es el comercio electrónico: la tienda de cada gimnasio, con pagos en sandbox con Stripe, PayPal y Paynet, recibos en PDF y panel de ventas. Ya está en producción.",
        "[→ entra la Fase 2]",
        "La segunda es la aplicación móvil para el socio, también en producción como APK de Android.",
        "[→ entra la Fase 3]",
        "La tercera es el control de acceso IoT, que todavía es un prototipo en desarrollo.",
        "[→ aparecen las cifras]",
        "Abajo ven 6 gimnasios, 42 socios y 196 ventas en 90 días. Son datos de demostración que cargamos en producción para probar el sistema completo; no son clientes reales. Valeria les explica cómo está construida la primera fase."
      ]
    },

    // 6 · Fase 1: arquitectura del comercio electrónico ─────────────
    {
      id: 'web',
      tipo: 'capas',
      fase: 1,
      transicion: 'zoom',      // entra con zoom desde la tarjeta de la fase 1
      tema: 'claro',
      seccion: 'Desarrollo · Fase 1',
      titulo: 'Arquitectura vertical · *Comercio electrónico*',
      capas: [
        { nombre: 'Front', items: ['HTML, CSS, JavaScript, Bootstrap', 'Tienda · checkout · panel del dueño · mostrador · ventas'] },
        { nombre: 'Back', items: ['API REST en Java 17 + Spring Boot', 'Desplegada en Render, la misma que usa la app'] },
        { nombre: 'Servicios', items: ['Stripe · PayPal · Openpay Paynet', 'Recibos PDF (iText) · correo (Brevo) · Google Analytics 4'] },
        { nombre: 'Datos', items: ['MongoDB Atlas multi-gimnasio', 'Seguridad NMX-I-27001: sesiones con hash, bitácora y cabeceras'] }
      ],
      imagen: { src: 'img/web-servicios.png', alt: 'Catálogo de soluciones en gtweb.onrender.com', ruta: 'gtweb.onrender.com/#servicios' },
      acceso: { texto: 'Escanea o entra a la plataforma', boton: 'Entrar a la web' },
      duracion: '1:00',
      presenta: "Valeria",
      guion: [
        "[→ zoom a la Fase 1]",
        "Gracias, Yael. Esta es la arquitectura vertical del comercio electrónico, por capas.",
        "En el front está el sitio en HTML, CSS, JavaScript y Bootstrap: la tienda, el checkout, el panel del dueño, el mostrador y las ventas. En el back, una API REST en Java 17 con Spring Boot, desplegada en Render; es la misma que usa la app.",
        "Como servicios usamos Stripe, PayPal y Openpay para los pagos, iText para los recibos PDF, Brevo para los correos y Google Analytics 4. Los datos viven en MongoDB Atlas, separados por gimnasio y con los controles de seguridad de la norma.",
        "Pueden escanear el código o entrar con el botón para verla en vivo."
      ]
    },

    // 7 · Fase 2: arquitectura de la app móvil ──────────────────────
    {
      id: 'app',
      tipo: 'app',
      fase: 2,
      transicion: 'deslizar',  // entra deslizándose desde la derecha
      tema: 'claro',
      seccion: 'Desarrollo · Fase 2',
      titulo: 'Arquitectura vertical · *App móvil*',
      front: {
        nombre: 'Front (móvil)',
        tecnologia: 'React Native + Expo + TypeScript',
        detalle: 'APK Android',
        pantallas: ['Tienda', 'Más vendidos', 'Membresía', 'Rutinas', 'Progreso', 'Pedidos']
      },
      back: {
        nombre: 'Back (servicios)',
        tecnologia: 'La misma API Spring Boot',
        items: ['Autenticación con token Bearer', 'Notificaciones push']
      },
      compartida: 'API compartida con la web',
      kpis: [
        { valor: 553, texto: 'pruebas automatizadas en CI', detalle: 'de punta a punta sobre la API' },
        { valor: 3, texto: 'pasarelas de pago', detalle: 'Stripe · PayPal · Paynet' }
      ],
      duracion: '0:45',
      presenta: "Valeria",
      guion: [
        "[→ entra deslizándose]",
        "La app móvil la hicimos con React Native, Expo y TypeScript, y se instala como APK de Android.",
        "No duplicamos servidor: usa la misma API de Spring Boot que la web, con autenticación por token y notificaciones push.",
        "Cada cambio pasa por 553 pruebas automatizadas, y los pagos se abren en un navegador seguro, así la app nunca toca los datos de la tarjeta."
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
      imagen: { src: 'img/app-login.png', alt: 'Pantalla de inicio de sesión de la app GymTrack' },
      pasos: [
        { icono: 'usuario', titulo: 'Inicia sesión', pantalla: 'Login / Registro' },
        { icono: 'codigo', titulo: 'Se une a su gimnasio', pantalla: 'Código de recepción' },
        { icono: 'casa', titulo: 'Ve su membresía', pantalla: 'Inicio' },
        { icono: 'bolsa', titulo: 'Elige plan o producto', pantalla: 'Tienda → Carrito' },
        { icono: 'card', titulo: 'Paga', pantalla: 'Stripe · PayPal · Paynet' },
        { icono: 'play', titulo: 'Entrena', pantalla: 'Rutinas → Entrenar' },
        { icono: 'grafica', titulo: 'Mide su avance', pantalla: 'Progreso' }
      ],
      duracion: '0:40',
      presenta: "Valeria",
      guion: [
        "[→]",
        "Este es el recorrido principal del socio dentro de la app.",
        "Inicia sesión, se une a su gimnasio con el código que le dan en recepción, ve su membresía en Inicio, elige un plan o producto en la Tienda, paga, entrena con sus rutinas y revisa su avance en Progreso.",
        "Este mismo recorrido lo van a ver en vivo en la demostración. Edwin sigue con la parte de IoT."
      ]
    },

    // 9 · Fase 3: arquitectura IoT─────────────────────────────────────────
    {
      id: 'hardware',
      tipo: 'hardware',
      fase: 3,
      transicion: 'deslizar',
      tema: 'claro',
      seccion: 'Desarrollo · Fase 3',
      titulo: 'Arquitectura horizontal · *IoT*',
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
        { icono: 'ledok', titulo: 'Entradas', texto: 'LED verde · se guarda al instante' },
        { icono: 'ledazul', titulo: 'Salidas', texto: 'LED azul · cierra la visita' },
        { icono: 'usuario', titulo: 'Quién y cuándo', texto: 'socio, hora y lector de cada pase' },
        { icono: 'ledno', titulo: 'Denegados', texto: 'LED rojo, buzzer y alerta' }
      ],
      offline: { titulo: 'Modo sin conexión', texto: 'Si se cae la red, el lector decide con la lista de credenciales que guarda en su memoria.' },
      duracion: '0:55',
      presenta: "Edwin",
      guion: [
        "[→]",
        "Gracias, Valeria. La tercera fase es una arquitectura de sensores para controlar el acceso, y se lee de izquierda a derecha, igual que viaja el dato.",
        "El socio acerca su credencial UHF; el lector YRM1004 la lee y la pasa por UART a la placa LILYGO, un ESP32 con módem, que le pregunta por HTTPS a nuestra API, por WiFi, LTE-M o 2G. Cada acceso se guarda en MongoDB.",
        "Monitoreamos en tiempo real las entradas, con LED verde; las salidas, con LED azul; quién entra y a qué hora; y los accesos denegados, con LED rojo, buzzer y una alerta en el panel.",
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
      titulo: 'Seguridad · *NMX-I-27001-NYCE-2015*',
      subtitulo: 'Norma mexicana equivalente a ISO/IEC 27001:2013, aplicada como sistema de gestión de seguridad a la web, la app y sus servicios (API, base de datos, pagos y correo).',
      cifras: { aplican: 95, total: 114, implementados: 82, enProceso: 13 },
      controles: [
        { clave: 'A.9', nombre: 'Control de acceso', texto: 'Sesiones con token Bearer; en la base solo queda su huella SHA-256. Cada dueño ve solo su gimnasio.' },
        { clave: 'A.10', nombre: 'Criptografía', texto: 'HTTPS en toda la comunicación y contraseñas guardadas con BCrypt.' },
        { clave: 'A.12', nombre: 'Operación', texto: 'Bitácora de inicios de sesión, accesos negados y acciones del panel (180 días).' },
        { clave: 'A.13', nombre: 'Comunicaciones', texto: 'Cabeceras de seguridad: CSP, HSTS, X-Frame-Options y nosniff.' },
        { clave: 'A.16', nombre: 'Incidentes', texto: 'Procedimiento documentado, con análisis de riesgos y declaración de aplicabilidad.' }
      ],
      duracion: '0:45',
      presenta: "Edwin",
      guion: [
        "Todo esto lo protegemos con la norma mexicana NMX-I-27001-NYCE-2015, que es equivalente a la ISO 27001.",
        "La aplicamos a la web, a la app y a sus servicios. De los 114 controles del Anexo A, 95 aplican a nuestro alcance: 82 ya están implementados y 13 están en proceso.",
        "Por ejemplo: sesiones con token, de las que en la base solo queda su huella; HTTPS y contraseñas con BCrypt; una bitácora de seguridad; cabeceras de protección; y un procedimiento para atender incidentes.",
        "Eduardo les presenta el plan de negocio."
      ]
    },

    // 11 · Plan de negocio electrónico ─────────────────────────────────────────
    {
      id: 'negocio',
      tipo: 'negocio',
      tema: 'claro',
      seccion: 'Desarrollo · Negocio',
      titulo: 'Plan de negocio electrónico · *eShop*',
      cadena: [
        { titulo: 'GymTrack', texto: 'Plataforma SaaS que le da la tienda en línea a cada gimnasio' },
        { titulo: 'Gimnasio', texto: 'Su eShop: vende planes y productos de su propio inventario', destacado: true },
        { titulo: 'Socio', texto: 'Compra en la web, en la app o en el mostrador' }
      ],
      ingresos: [
        { valor: '$499', unidad: 'al mes', texto: 'Suscripción SaaS por gimnasio (ingreso recurrente)' },
        { valor: '$3,500', unidad: 'pago único', texto: 'Lector de acceso IoT' },
        { valor: '$50', unidad: 'por pieza', texto: 'Credencial RFID, con 10%, 20% y 30% de descuento por volumen' }
      ],
      recurrente: '10 gimnasios = *$4,990 al mes*, casi $60,000 al año',
      costos: ['Render y MongoDB Atlas', 'Comisiones de pago', 'Hardware'],
      mvp: 'MVP funcional: *carrito de compras* + monitoreo con *Google Analytics 4* y panel de ventas',
      grafica: {
        titulo: 'Precio por credencial RFID',
        subtitulo: 'según volumen de compra',
        datos: [
          { etiqueta: '1 a 4', valor: 50 },
          { etiqueta: '5 a 9', valor: 45 },
          { etiqueta: '10 a 19', valor: 40 },
          { etiqueta: '20 o más', valor: 35, nota: '50 socios' }
        ]
      },
      duracion: '0:55',
      presenta: "Eduardo",
      guion: [
        "Gracias, Edwin. Nuestro plan de negocio electrónico sigue el modelo eShop: cada gimnasio tiene su propia tienda en línea y vende sus planes y productos de su propio inventario.",
        "GymTrack cobra una suscripción de 499 pesos al mes por gimnasio, que es nuestro ingreso recurrente: con 10 gimnasios son casi 60 mil pesos al año. Además vendemos el hardware: el lector a 3,500 pesos y la credencial a 50, que baja hasta 35 por volumen.",
        "El socio puede comprar en la web, en la app o en el mostrador, donde le vende el encargado desde el panel. El MVP ya funciona con carrito de compras y monitoreo con Google Analytics 4. Ahora, la demostración.",
        "[Si preguntan: no es dropshipping porque el gimnasio tiene inventario propio, y no es marketplace porque el socio solo le compra a su gimnasio]"
      ]
    },

    // 12 · Demostración técnica en vivo ────────────────────────────
    {
      id: 'demo',
      tipo: 'demo',
      tema: 'oscuro',
      seccion: 'Demostración técnica',
      titulo: 'Demostración *en vivo*',
      subtitulo: '5 minutos · lo que vamos a mostrar',
      bloques: [
        { icono: 'laptop', titulo: 'Comercio electrónico', presenta: 'Edwin', donde: 'gtweb.onrender.com', pasos: ['El socio compra un plan en la tienda', 'Paga con tarjeta de prueba (Stripe)', 'Recibe su recibo PDF y su membresía se activa', 'El dueño ve la venta en su panel'] },
        { icono: 'phone', titulo: 'App móvil', presenta: 'Edwin', donde: 'En el celular (APK)', pasos: ['Inicia sesión', 'Revisa su membresía en Inicio', 'Compra en la Tienda', 'Registra un entrenamiento'] },
        { icono: 'chip', titulo: 'Adquisición de datos (IoT)', presenta: 'Valeria', donde: 'Lector RFID + panel', pasos: ['Pasa la credencial por el lector', 'La API la valida y la guarda en MongoDB', 'El panel "Accesos RFID" la muestra al instante', 'Con un tag vencido: LED rojo y alerta'] }
      ],
      duracion: '5:00',
      presenta: ["Edwin","Valeria"],
      guion: [
        { quien: "Edwin", texto: "[Antes: la web abierta con sesión de socio y de dueño, y la app abierta en el celular]" },
        { quien: "Edwin", texto: "Les vamos a mostrar el sistema en vivo. Primero la web: el socio compra un plan en la tienda y paga con la tarjeta de prueba de Stripe, la 4242 4242 4242 4242." },
        { quien: "Edwin", texto: "Le llega su recibo en PDF, su membresía se activa sola y el dueño ve la venta en su panel." },
        { quien: "Edwin", texto: "Ahora en el celular: inicio sesión, en Inicio reviso mi membresía, compro algo en la Tienda y registro un entrenamiento." },
        { quien: "Valeria", texto: "[El lector conectado y el panel \"Accesos RFID\" a la vista]" },
        { quien: "Valeria", texto: "Por último, la adquisición de datos. Paso la credencial por el lector: la API la valida, la guarda en MongoDB y aparece al instante en el panel." },
        { quien: "Valeria", texto: "Si pasamos una credencial vencida: LED rojo, buzzer y una alerta para el dueño." },
        { quien: "Valeria", texto: "[Si algo falla, explicar el flujo con esta diapositiva y seguir]" }
      ]
    },

    // 13 · Conclusiones ────────────────────────────────────────────
    {
      id: 'conclusiones',
      tipo: 'conclusiones',
      tema: 'claro',
      seccion: 'Conclusiones',
      titulo: '*Conclusiones*',
      puntos: [
        { valor: 'Integración', texto: 'Web, app e IoT trabajan sobre la misma API: lo que el socio paga en una se refleja en las otras y en la puerta.' },
        { valor: 'Procesos', texto: 'Cobrar, renovar y controlar el acceso ya no dependen del papel ni de que alguien revise a mano.' },
        { valor: 'Negocio', texto: 'El modelo eShop con suscripción es viable para un gimnasio local y crece con las cadenas.' },
        { valor: 'Seguridad', texto: 'La protegimos desde el diseño con la NMX-I-27001, no como un parche al final.' }
      ],
      siguientes: ['Piloto con un gimnasio local', 'Servo en la puerta', 'Publicar la app en Google Play'],
      duracion: '0:30',
      presenta: "Eduardo",
      guion: [
        "Para cerrar, cuatro conclusiones.",
        "Integración: la web, la app y el IoT comparten la misma API, así que lo que el socio paga se refleja en todas partes, hasta en la puerta. Procesos: cobrar, renovar y controlar el acceso ya no depende del papel.",
        "Negocio: el modelo es viable para un gimnasio local y crece con las cadenas. Seguridad: la aplicamos desde el diseño con la NMX-I-27001.",
        "Lo que sigue: un piloto con un gimnasio local, instalar el servo en la puerta y publicar la app en Google Play."
      ]
    },

    // 14 · Repositorios ──────────────────────────────────────────────
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
          tecnologias: 'Java 17 · Spring Boot · MongoDB Atlas',
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
