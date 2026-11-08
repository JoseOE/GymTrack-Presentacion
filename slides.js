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
 *   - "notas" son las notas del orador (tecla N durante la presentación).
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
  seccion: 'Fases',
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
  duracionTotal: '12:00',

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
      duracion: '1:00',
      notas: '(Empieza con la página a pantalla completa: preséntala y presiona → para que aparezca la información.) Buenos días, somos el equipo GymTrack. QUÉ vamos a hacer: un ecosistema que une comercio electrónico, aplicación móvil y control de acceso IoT. PARA QUIÉN: gimnasios locales (típicamente de 30 a 60 socios) y sus socios (cada gimnasio con su propia tienda en línea), y que también escala a cadenas. PROPÓSITO: que solo entre quien pagó y que el gimnasio venda más, sin papel ni Excel. Presentar a los integrantes y quién expone cada parte.'
    },

    // 2 · El dato ────────────────────────────────────────────────────
    {
      id: 'dato',
      tipo: 'dato',
      tema: 'oscuro',
      seccion: 'El dato',
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
      escala: 'Gimnasio local de 50 socios. En una cadena de 10 sucursales (300 socios c/u) la pérdida sube a *$1,800,000 al año*.',
      duracion: '1:00',
      notas: 'STORYTELLING: Pensemos en un gimnasio local típico de 50 socios. Solo el 10% tiene la membresía vencida, pero sigue entrando porque nadie lo revisa en la puerta: 5 personas. A $500 por mes son $2,500 que no se cobran cada mes; la gráfica muestra cómo se acumulan hasta $30,000 al año. Para un gimnasio pequeño eso es casi la renta de un mes o un equipo nuevo. (Pausa.) Y escala: en una cadena de 10 sucursales con 300 socios cada una, la misma fuga son $150,000 al mes y $1,800,000 al año. Aclarar que es una estimación con cifras típicas.'
    },

    // 3 · Problema ───────────────────────────────────────────────────
    {
      id: 'problema',
      tipo: 'problema',
      tema: 'claro',
      seccion: 'Problema',
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
      duracion: '1:10',
      notas: 'DEFINICIÓN DEL PROBLEMA. En el gimnasio de 50 socios, 9 de cada 10 están al corriente, pero 1 de cada 10 entra con la membresía vencida (5 personas). Las causas: 1) el acceso no se valida; 2) los registros se llevan en papel o Excel; 3) los cobros no se verifican en tiempo real; 4) las apps genéricas no conocen las máquinas del gimnasio. Resultado: dinero que se pierde y una mala experiencia para el socio.'
    },

    // 4 · Solución ───────────────────────────────────────────────────
    {
      id: 'solucion',
      tipo: 'solucion',
      tema: 'claro',
      seccion: 'Solución',
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
      duracion: '1:10',
      notas: 'SOLUCIÓN TECNOLÓGICA: tres piezas conectadas a una sola nube. 1) Plataforma de comercio electrónico para el dueño: panel, tienda, mostrador y pagos reales. 2) Aplicación móvil para el socio: membresía, rutinas con las máquinas reales, progreso y compras. 3) Prototipo IoT: lector RFID UHF que valida el pago y registra entrada y salida. CÓMO RESUELVE EL PROBLEMA (fila de abajo): el socio paga, la membresía se activa sola y el lector le abre. Sin papel, sin Excel y sin que nadie revise a mano.'
    },

    // 5 · Fases (vista completa; sigue la fase 1) ────────────────────
    {
      ...FASES,
      id: 'fases',
      foco: 1,
      duracion: '2:00',
      notas: 'FASES DEL PROYECTO (recorrido: cada → acomoda una fase y trae la siguiente). Empieza con la FASE 1 en grande: comercio electrónico, tienda por gimnasio con pagos reales en sandbox (Stripe, PayPal, Paynet), recibos PDF y panel de ventas; en producción. → FASE 2: aplicación móvil para el socio (membresía, rutinas con las máquinas reales, progreso y tienda); en producción como APK. → FASE 3: control de acceso IoT con lector RFID UHF, prototipo con demo a finales de noviembre (la expone Saúl). → aparecen las cifras. ACLARAR: los números de abajo (6 gimnasios, 42 socios, 196 ventas en 90 días) son DATOS DE DEMOSTRACIÓN que cargamos en el servidor de producción para probar el sistema completo; NO son clientes reales pagando. Sirven para mostrar que la plataforma ya funciona con el volumen de varios gimnasios locales a la vez. Al presionar → se hace zoom a la fase 1 y entramos a su arquitectura.'
    },

    // 6 · Fase 1: arquitectura del comercio electrónico ─────────────
    {
      id: 'web',
      tipo: 'capas',
      fase: 1,
      transicion: 'zoom',      // entra con zoom desde la tarjeta de la fase 1
      tema: 'claro',
      seccion: 'Fase 1 · Arquitectura',
      titulo: 'Arquitectura vertical · *Comercio electrónico*',
      capas: [
        { nombre: 'Front', items: ['HTML, CSS, JavaScript, Bootstrap', 'Tienda · checkout · panel del dueño · mostrador · ventas'] },
        { nombre: 'Back', items: ['API REST en Java 17 + Spring Boot', 'Desplegada en Render, la misma que usa la app'] },
        { nombre: 'Servicios', items: ['Stripe · PayPal · Openpay Paynet', 'Recibos PDF (iText) · correo (Brevo) · Google Analytics 4'] },
        { nombre: 'Datos', items: ['MongoDB Atlas multi-gimnasio', 'Controles ISO 27001: bitácora, cabeceras y respaldos cifrados'] }
      ],
      imagen: { src: 'img/web-servicios.png', alt: 'Catálogo de soluciones en gtweb.onrender.com', ruta: 'gtweb.onrender.com/#servicios' },
      acceso: { texto: 'Escanea o entra a la plataforma', boton: 'Entrar a la web' },
      duracion: '1:30',
      notas: 'Arquitectura VERTICAL = software, por capas. Comercio electrónico. FRONT: sitio web en HTML, CSS, JavaScript y Bootstrap: tienda, checkout, panel del dueño, mostrador y ventas. BACK: API REST en Java 17 con Spring Boot desplegada en Render; es la misma que usa la app. SERVICIOS que ofrecemos: pagos reales en sandbox con Stripe, PayPal y Openpay/Paynet; recibos PDF con iText; correos con Brevo; analítica con Google Analytics 4. DATOS: MongoDB Atlas multi-gimnasio (cada gimnasio ve solo lo suyo) y controles ISO 27001: bitácora, cabeceras de seguridad y respaldos cifrados. Invitar a escanear el QR o abrir la web con el botón.'
    },

    // 7 · Fase 2: arquitectura de la app móvil ──────────────────────
    {
      id: 'app',
      tipo: 'app',
      fase: 2,
      transicion: 'deslizar',  // entra deslizándose desde la derecha
      tema: 'claro',
      seccion: 'Fase 2 · Arquitectura',
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
        { valor: 387, texto: 'pruebas automatizadas en CI' },
        { valor: 3, texto: 'pasarelas de pago', detalle: 'Stripe · PayPal · Paynet' }
      ],
      duracion: '1:00',
      notas: 'Arquitectura vertical de la APLICACIÓN MÓVIL. FRONT: React Native con Expo y TypeScript; se distribuye como APK de Android. Pantallas: tienda, más vendidos, membresía, rutinas, progreso y pedidos. BACK: no duplicamos servidor; la app usa la misma API Spring Boot que la web, con token Bearer y notificaciones push. Calidad: 387 pruebas automatizadas corren en cada cambio. Pagos: Stripe, PayPal y Paynet se abren en un navegador seguro, así la app nunca toca datos de tarjeta.'
    },

    // 8 · Fase 3: arquitectura IoT─────────────────────────────────────────
    {
      id: 'hardware',
      tipo: 'hardware',
      fase: 3,
      transicion: 'deslizar',
      tema: 'claro',
      seccion: 'Fase 3 · Arquitectura',
      titulo: 'Arquitectura horizontal · *IoT*',
      subtitulo: 'Flujo de acceso y comunicación del hardware, de izquierda a derecha',
      nodos: [
        { icono: 'card', titulo: 'Credencial', texto: 'RFID UHF' },
        { icono: 'reader', titulo: 'Lector UHF', texto: 'YRM1004', enlace: 'UHF' },
        { icono: 'chip', titulo: 'ESP32', texto: 'LILYGO T-SIM7070G', destacado: true, enlace: 'UART' },
        { icono: 'wifi', titulo: 'WiFi', texto: 'principal · LTE de respaldo' },
        { icono: 'lock', titulo: 'HTTPS', texto: 'misma API y seguridad' },
        { icono: 'cloud', titulo: 'Servidor', texto: 'GymTrack en la nube' }
      ],
      actuadores: [
        { icono: 'ledok', titulo: 'LED verde', texto: 'acceso' },
        { icono: 'ledno', titulo: 'LED rojo', texto: 'denegado' },
        { icono: 'buzzer', titulo: 'Buzzer', texto: 'aviso sonoro' },
        { icono: 'servo', titulo: 'Servo', texto: 'de puerta' }
      ],
      offline: { titulo: 'Modo sin conexión', texto: 'Lista local de credenciales y cola de eventos que se sincroniza al volver la red.' },
      duracion: '1:15',
      notas: 'Arquitectura HORIZONTAL = hardware IoT. Se lee de izquierda a derecha, igual que viaja el dato: el socio acerca su credencial UHF; el lector YRM1004 la lee por UART; el LILYGO T-SIM7070G (ESP32 con módem LTE) consulta por HTTPS al servidor GymTrack (WiFi principal, LTE de respaldo). El servidor responde si la membresía está activa y el ESP32 acciona: LED verde + servo = acceso; LED rojo + buzzer = denegado. Se registra entrada y salida. Sin internet usa una lista local y una cola de eventos. Por qué HTTPS y no MQTT: es una petición-respuesta corta y reutiliza la misma API y seguridad del sistema.'
    },

    // 9 · Modelo de negocio ─────────────────────────────────────────
    {
      id: 'negocio',
      tipo: 'negocio',
      tema: 'claro',
      seccion: 'Negocio',
      titulo: 'Modelo de negocio · *eShop*',
      cadena: [
        { titulo: 'GymTrack', texto: 'Plataforma SaaS que le da la tienda en línea a cada gimnasio' },
        { titulo: 'Gimnasio', texto: 'Su eShop: vende planes y productos de su propio inventario', destacado: true },
        { titulo: 'Socio', texto: 'Compra en la tienda de su gimnasio, en la web o la app' }
      ],
      ingresos: [
        { valor: '$499', unidad: 'al mes', texto: 'Suscripción SaaS por gimnasio (ingreso recurrente)' },
        { valor: '$3,500', unidad: 'pago único', texto: 'Lector de acceso IoT' },
        { valor: '$50', unidad: 'por pieza', texto: 'Credencial RFID, con 10%, 20% y 30% de descuento por volumen' }
      ],
      recurrente: '10 gimnasios = *$4,990 al mes*, casi $60,000 al año',
      costos: ['Nube (Render) y MongoDB Atlas', 'Comisiones de pasarela de pago', 'Adquisición y soporte de hardware'],
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
      duracion: '1:25',
      notas: 'MODELO DE NEGOCIO: eSHOP. Cada gimnasio tiene su propia tienda en línea y vende SUS planes y productos a sus socios, desde la web o la app. Por qué es eShop y no otro modelo: NO es dropshipping, porque el gimnasio tiene inventario propio (el sistema lleva existencias y apartados) y entrega en su mostrador; NO es marketplace, porque el socio compra solo a su gimnasio y no compara vendedores. GymTrack es quien da la plataforma: cobra una suscripción SaaS de $499 al mes (precio estimado) más el hardware. La suscripción es nuestro ingreso recurrente: 10 gimnasios = $4,990 al mes, casi $60,000 al año. Hardware (pago único): lector de acceso $3,500 y credencial RFID $50, que baja a $45, $40 y $35 por volumen (gráfica de la derecha). Un gimnasio de 50 socios ya paga $35 por credencial. Una cadena compra mucho más volumen, así que siempre obtiene el mejor precio y reparte la plataforma entre todas sus sucursales. Costos: nube Render y MongoDB Atlas, comisiones de pasarela y hardware.'
    },

    // 10 · Repositorios ──────────────────────────────────────────────
    {
      id: 'repositorios',
      tipo: 'repos',
      tema: 'marca',
      seccion: 'Repositorios',
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
      duracion: '0:30',
      notas: 'CIERRE. Aquí están los dos repositorios públicos: GTWeb (plataforma web y API) y GTApp (aplicación móvil). Pueden escanear el QR para ver el código. Gracias, ¿preguntas?'
    }
  ]
};
