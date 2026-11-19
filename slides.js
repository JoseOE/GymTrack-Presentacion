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
      notas: '(Empieza con la página a pantalla completa: preséntala y presiona → para que aparezca la información.) Buenos días, somos el equipo GymTrack. QUÉ vamos a hacer: un ecosistema que une comercio electrónico, aplicación móvil y control de acceso IoT. PARA QUIÉN: gimnasios locales (típicamente de 30 a 60 socios) y sus socios (cada gimnasio con su propia tienda en línea), y que también escala a cadenas. PROPÓSITO: que solo entre quien pagó y que el gimnasio venda más, sin papel ni Excel. Presentar a los integrantes y quién expone cada parte.'
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
      escala: 'Gimnasio local de 50 socios. En una cadena de 10 sucursales (300 socios c/u) la pérdida sube a *$1,800,000 al año*.',
      duracion: '0:45',
      notas: 'STORYTELLING: Pensemos en un gimnasio local típico de 50 socios. Solo el 10% tiene la membresía vencida, pero sigue entrando porque nadie lo revisa en la puerta: 5 personas. A $500 por mes son $2,500 que no se cobran cada mes; la gráfica muestra cómo se acumulan hasta $30,000 al año. Para un gimnasio pequeño eso es casi la renta de un mes o un equipo nuevo. (Pausa.) Y escala: en una cadena de 10 sucursales con 300 socios cada una, la misma fuga son $150,000 al mes y $1,800,000 al año. Aclarar que es una estimación con cifras típicas.'
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
      notas: 'DEFINICIÓN DEL PROBLEMA. En el gimnasio de 50 socios, 9 de cada 10 están al corriente, pero 1 de cada 10 entra con la membresía vencida (5 personas). Las causas: 1) el acceso no se valida; 2) los registros se llevan en papel o Excel; 3) los cobros no se verifican en tiempo real; 4) las apps genéricas no conocen las máquinas del gimnasio. Resultado: dinero que se pierde y una mala experiencia para el socio.'
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
      notas: 'SOLUCIÓN TECNOLÓGICA: tres piezas conectadas a una sola nube. 1) Plataforma de comercio electrónico para el dueño: panel, tienda, mostrador y pagos reales. 2) Aplicación móvil para el socio: membresía, rutinas con las máquinas reales, progreso y compras. 3) Prototipo IoT: lector RFID UHF que valida el pago y registra entrada y salida. CÓMO RESUELVE EL PROBLEMA (fila de abajo): el socio paga, la membresía se activa sola y el lector le abre. Sin papel, sin Excel y sin que nadie revise a mano.'
    },

    // 5 · Fases (vista completa; sigue la fase 1) ────────────────────
    {
      ...FASES,
      id: 'fases',
      foco: 1,
      duracion: '1:10',
      notas: 'FASES DEL PROYECTO (recorrido: cada → acomoda una fase y trae la siguiente). Empieza con la FASE 1 en grande: comercio electrónico, tienda por gimnasio con pagos reales en sandbox (Stripe, PayPal, Paynet), recibos PDF y panel de ventas; en producción. → FASE 2: aplicación móvil para el socio (membresía, rutinas con las máquinas reales, progreso y tienda); en producción como APK. → FASE 3: control de acceso IoT con lector RFID UHF, prototipo con demo a finales de noviembre (la expone Saúl). → aparecen las cifras. ACLARAR: los números de abajo (6 gimnasios, 42 socios, 196 ventas en 90 días) son DATOS DE DEMOSTRACIÓN que cargamos en el servidor de producción para probar el sistema completo; NO son clientes reales pagando. Sirven para mostrar que la plataforma ya funciona con el volumen de varios gimnasios locales a la vez. Al presionar → se hace zoom a la fase 1 y entramos a su arquitectura.'
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
      notas: 'Arquitectura VERTICAL = software, por capas. Comercio electrónico. FRONT: sitio web en HTML, CSS, JavaScript y Bootstrap: tienda, checkout, panel del dueño, mostrador y ventas. BACK: API REST en Java 17 con Spring Boot desplegada en Render; es la misma que usa la app. SERVICIOS que ofrecemos: pagos reales en sandbox con Stripe, PayPal y Openpay/Paynet; recibos PDF con iText; correos con Brevo; analítica con Google Analytics 4. DATOS: MongoDB Atlas multi-gimnasio (cada gimnasio ve solo lo suyo) y controles de la NMX-I-27001: sesiones guardadas como hash, bitácora y cabeceras de seguridad. Invitar a escanear el QR o abrir la web con el botón.'
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
      notas: 'Arquitectura vertical de la APLICACIÓN MÓVIL. FRONT: React Native con Expo y TypeScript; se distribuye como APK de Android. Pantallas: tienda, más vendidos, membresía, rutinas, progreso y pedidos. BACK: no duplicamos servidor; la app usa la misma API Spring Boot que la web, con token Bearer y notificaciones push. Calidad: 553 pruebas automatizadas de punta a punta corren sobre la API en cada cambio. Pagos: Stripe, PayPal y Paynet se abren en un navegador seguro, así la app nunca toca datos de tarjeta.'
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
      notas: 'RECORRIDO PRINCIPAL DEL USUARIO (mapeo que pide Desarrollo de Aplicaciones Móviles). 1) Inicia sesión o se registra. 2) Se une a su gimnasio con el código que le dan en recepción. 3) En Inicio ve su membresía, cuándo vence y los avisos. 4) En la Tienda elige un plan o producto y lo agrega al carrito. 5) Paga con Stripe, PayPal o Paynet en un navegador seguro. 6) En Rutinas abre la de su gimnasio y en Entrenar registra cada serie. 7) En Progreso ve su avance. Esto mismo lo mostramos en vivo en la demostración.'
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
        { icono: 'usuario', titulo: 'Ocupación', texto: 'sensor "Gimnasio ocupado"' },
        { icono: 'ledno', titulo: 'Denegados', texto: 'LED rojo, buzzer y alerta' }
      ],
      offline: { titulo: 'Voz y Alexa', texto: 'Entrada o salida por voz (XIAO ESP32-S3) y Alexa por Matter. Sin internet decide con su lista local.' },
      duracion: '0:55',
      notas: 'Arquitectura HORIZONTAL = sensores IoT para monitorear el acceso, un problema real del gimnasio. De izquierda a derecha, como viaja el dato: el socio acerca su credencial UHF; el lector YRM1004 la lee y la pasa por UART al LILYGO T-SIM7070G (ESP32 con módem), que pregunta por HTTPS a la API de GTWeb (WiFi, LTE-M o 2G) y lo guarda en MongoDB Atlas. PARÁMETROS QUE MONITOREA en tiempo real: ENTRADAS (LED verde), SALIDAS (LED azul), OCUPACIÓN del gimnasio (sensor Matter "Gimnasio ocupado") y ACCESOS DENEGADOS (LED rojo, buzzer y alerta en el panel "Accesos RFID", desde donde el dueño puede dar acceso). Extras: entrada o salida por voz con una XIAO ESP32-S3 y una Alexa por Matter que saluda al socio y prende la lámpara. Sin internet decide con su lista local. Por qué HTTPS y no MQTT: el lector siempre pregunta, así que HTTPS con una llave por lector (guardada como hash SHA-256) basta. El servo de la puerta es el siguiente paso.'
    },

    // 10 · Seguridad: norma mexicana NMX-I-27001-NYCE-2015 ──────────
    {
      id: 'seguridad',
      tipo: 'seguridad',
      tema: 'oscuro',
      seccion: 'Desarrollo · Seguridad',
      titulo: 'Seguridad · *NMX-I-27001-NYCE-2015*',
      subtitulo: 'Norma mexicana equivalente a ISO/IEC 27001:2013, aplicada como sistema de gestión de seguridad a la web, la app y el IoT.',
      cifras: { aplican: 95, total: 114, implementados: 82, enProceso: 13 },
      controles: [
        { clave: 'A.9', nombre: 'Control de acceso', texto: 'Sesiones con token Bearer; en la base solo queda su huella SHA-256. Cada dueño ve solo su gimnasio.' },
        { clave: 'A.10', nombre: 'Criptografía', texto: 'HTTPS en web, app y lector; cada lector tiene su llave guardada como hash.' },
        { clave: 'A.12', nombre: 'Operación', texto: 'Bitácora de inicios de sesión, accesos negados y acciones del panel (180 días).' },
        { clave: 'A.13', nombre: 'Comunicaciones', texto: 'Cabeceras de seguridad: CSP, HSTS, X-Frame-Options y nosniff.' },
        { clave: 'A.16', nombre: 'Incidentes', texto: 'Procedimiento documentado, con análisis de riesgos y declaración de aplicabilidad.' }
      ],
      duracion: '0:45',
      notas: 'ADMINISTRACIÓN Y SEGURIDAD DE REDES: asociamos la norma mexicana NMX-I-27001-NYCE-2015 (equivalente a ISO/IEC 27001:2013) con su aplicación en GymTrack. De los 114 controles del Anexo A, 95 aplican a nuestro alcance: 82 ya están implementados y 13 en proceso. Ejemplos: A.9 control de acceso (token Bearer y huella SHA-256, cada dueño solo ve lo suyo); A.10 criptografía (HTTPS en web, app y lector, llave por lector como hash); A.12 operación (bitácora de seguridad); A.13 comunicaciones (cabeceras CSP, HSTS…); A.16 incidentes (procedimiento documentado). Todo está documentado en GTWeb/docs/iso27001.'
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
        { titulo: 'Socio', texto: 'Compra en la tienda de su gimnasio, en la web o la app' }
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
      notas: 'PLAN DE NEGOCIO ELECTRÓNICO con modelo eSHOP. El MVP ya funciona: tienda con carrito de compras y monitoreo con Google Analytics 4 (ve productos, agrega al carrito, inicia pago y compra) más el panel de ventas del dueño. Cada gimnasio tiene su propia tienda en línea y vende SUS planes y productos a sus socios, desde la web o la app. Por qué es eShop y no otro modelo: NO es dropshipping, porque el gimnasio tiene inventario propio (el sistema lleva existencias y apartados) y entrega en su mostrador; NO es marketplace, porque el socio compra solo a su gimnasio y no compara vendedores. GymTrack es quien da la plataforma: cobra una suscripción SaaS de $499 al mes (precio estimado) más el hardware. La suscripción es nuestro ingreso recurrente: 10 gimnasios = $4,990 al mes, casi $60,000 al año. Hardware (pago único): lector de acceso $3,500 y credencial RFID $50, que baja a $45, $40 y $35 por volumen (gráfica de la derecha). Un gimnasio de 50 socios ya paga $35 por credencial. Una cadena compra mucho más volumen, así que siempre obtiene el mejor precio y reparte la plataforma entre todas sus sucursales. Costos: nube Render y MongoDB Atlas, comisiones de pasarela y hardware.'
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
        { icono: 'laptop', titulo: 'Comercio electrónico', donde: 'gtweb.onrender.com', pasos: ['El socio compra un plan en la tienda', 'Paga con tarjeta de prueba (Stripe)', 'Recibe su recibo PDF y su membresía se activa', 'El dueño ve la venta en su panel'] },
        { icono: 'phone', titulo: 'App móvil', donde: 'En el celular (APK)', pasos: ['Inicia sesión', 'Revisa su membresía en Inicio', 'Compra en la Tienda', 'Registra un entrenamiento'] },
        { icono: 'chip', titulo: 'Adquisición de datos (IoT)', donde: 'Lector RFID + panel', pasos: ['Pasa la credencial por el lector', 'La API la valida y la guarda en MongoDB', 'El panel "Accesos RFID" la muestra al instante', 'Con un tag vencido: LED rojo y alerta'] }
      ],
      duracion: '5:00',
      notas: 'DEMOSTRACIÓN TÉCNICA (5 minutos, lo pide la rúbrica). Tener abiertos ANTES: la web con sesión de socio y de dueño, la app en el celular con sesión iniciada, el lector conectado y el panel "Accesos RFID" a la vista. 1) WEB: compra completa con tarjeta de prueba 4242 4242 4242 4242 → recibo PDF → membresía activa → venta en el panel. 2) APP en vivo: navegar Inicio, Tienda y Entrenar sin fallas. 3) IoT: pasar la credencial y mostrar que el acceso aparece y se guarda en tiempo real; luego un tag vencido para la alerta. Si algo falla, explicar el flujo con esta diapositiva y seguir.'
    },

    // 13 · Conclusiones ────────────────────────────────────────────
    {
      id: 'conclusiones',
      tipo: 'conclusiones',
      tema: 'claro',
      seccion: 'Conclusiones',
      titulo: '*Conclusiones*',
      puntos: [
        { valor: '$30,000', texto: 'al año pierde un gimnasio de 50 socios por accesos sin validar: el problema es real y medible.' },
        { valor: '2 de 3', texto: 'fases en producción: tienda con carrito y pagos en sandbox, y app móvil, con 553 pruebas automatizadas.' },
        { valor: 'IoT', texto: 'cierra el ciclo: solo entra quien pagó y cada acceso queda registrado en tiempo real.' },
        { valor: '95/114', texto: 'controles de la NMX-I-27001 aplican; 82 ya están implementados.' }
      ],
      siguientes: ['Piloto con un gimnasio local', 'Servo en la puerta', 'Publicar la app en Google Play'],
      duracion: '0:30',
      notas: 'CONCLUSIONES. El problema es real y medible: $30,000 al año en un gimnasio de 50 socios. Construimos un ecosistema: tienda en línea con carrito y pagos, app para el socio y control de acceso IoT, con 553 pruebas automatizadas y la norma NMX-I-27001 aplicada (82 de 95 controles ya implementados). Siguientes pasos: un piloto con un gimnasio local, el servo de la puerta y publicar la app en Google Play.'
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
      notas: 'CIERRE. Aquí están los dos repositorios públicos: GTWeb (plataforma web y API) y GTApp (aplicación móvil). Pueden escanear el QR para ver el código. Gracias, ¿preguntas?'
    }
  ]
};
