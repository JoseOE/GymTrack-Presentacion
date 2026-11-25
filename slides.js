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
    { numero: 3, nombre: 'RFID', estado: 'Terminado: lector RFID que registra entradas y salidas y un servo que abre la puerta', avance: 100 }
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
        "Buenos días. Somos GymTrack: Eduardo, Edwin, Valeria, Yael y yo, José María.",
        "[→ se acomoda la portada]",
        "Imaginen un gimnasio donde solo entra quien pagó, donde los socios compran desde su celular y donde el dueño ve todo su negocio en una sola pantalla. Eso es GymTrack.",
        "Es una plataforma para dueños de gimnasios locales y para la gente que entrena con ellos: una tienda en línea, una app para el socio y un lector en la puerta que trabajan juntos. Tu gimnasio. Tu visión. Otro nivel."
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
        "¿Cuánto dinero pierde un gimnasio por la puerta? Hicimos la cuenta.",
        "En un gimnasio de 50 socios, si solo 5 siguen entrando con la membresía vencida, a 500 pesos al mes son 2,500 pesos que no se cobran cada mes: 30 mil pesos al año. Es dinero que el dueño ya ganó y nunca ve.",
        "En una cadena de 10 sucursales, esa fuga llega a entre 240 y 360 mil pesos al año.",
        "[Si preguntan: es una estimación con cifras típicas de un gimnasio local]",
        "Yael les cuenta por qué pasa esto."
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
        "Gracias, José María. Esto no pasa porque los dueños se descuiden. Pasa porque hoy todo depende de personas y de papel.",
        "La puerta depende de quien esté en recepción ese día. Los registros viven en Excel o en una libreta. Confirmar que alguien pagó le quita tiempo al personal. Y el socio llega a una máquina sin saber bien cómo usarla.",
        "Cada una de estas cuatro cosas es una oportunidad: recuperar dinero, ahorrar tiempo y darle al socio una mejor experiencia."
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
        { icono: 'phone', titulo: 'Aplicación móvil', items: ['Membresía', 'Rutinas guiadas con ilustraciones', 'Progreso', 'Compras'] },
        { icono: 'chip', titulo: 'Control de acceso RFID', items: ['Lector RFID UHF', 'Registra entradas y salidas en el panel del dueño', 'Servo que abre la puerta'] }
      ],
      centro: 'Ecosistema GymTrack',
      flujo: [
        { titulo: 'Pago', texto: 'solo puede comprar en un gimnasio quien es miembro de él' },
        { titulo: 'Membresía activa', texto: 'se activa automáticamente al pagar' },
        { titulo: 'Entrada y salida', texto: 'el servo abre la puerta y quedan registradas en el panel del dueño' }
      ],
      duracion: '0:45',
      presenta: "Yael",
      guion: [
        "Por eso creamos GymTrack: tres piezas que se hablan entre sí.",
        "Para el dueño, una tienda en línea y un panel donde ve sus ventas, sus socios y quién entra. Para el socio, una app con su membresía, sus rutinas guiadas y sus compras. Y en la puerta, un lector RFID con un servo que solo le abre a quien está al día.",
        "El resultado es este: el socio paga desde su celular, su membresía se activa sola, pasa su tarjeta y la puerta se abre. Todo queda registrado en el panel del dueño, sin que nadie anote nada a mano.",
        "Eduardo les explica cómo lo construimos."
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
        "Gracias, Yael. Construimos GymTrack en tres fases, y las tres ya funcionan.",
        "[Aparece la Fase 1 en grande]",
        "Primero, el comercio electrónico: cada gimnasio tiene su propia tienda en línea y cobra con tarjeta, PayPal o en efectivo en tiendas. Ya está en producción.",
        "[→ entra la Fase 2]",
        "Segundo, la app para el socio, que ya se instala en Android.",
        "[→ entra la Fase 3]",
        "Y tercero, el control de acceso: un lector RFID que registra cada entrada y un servo que abre la puerta.",
        "[→ aparecen las cifras]",
        "Para probarlo todo junto cargamos 6 gimnasios de demostración, con 42 socios y 196 ventas en 90 días. No son clientes reales, pero el sistema los atiende como si lo fueran. Valeria les muestra la tienda."
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
        "Gracias, Eduardo. Esta es la plataforma de comercio electrónico, pensada para que el gimnasio venda más.",
        "El dueño publica sus planes y productos, como membresías, proteína o accesorios, y sus socios los compran en línea. Puede cobrar con tarjeta, con PayPal o en efectivo en tiendas como OXXO, y también vender en el mostrador. Cada compra genera su recibo en PDF, que le llega por correo.",
        "Desde su panel ve qué se vende más y cuánto vendió en el día y en el mes. También arma su gimnasio con un catálogo de 46 máquinas que trae la ilustración de cada ejercicio.",
        "[Si preguntan por la tecnología: HTML, CSS, JavaScript y Bootstrap en el front; una API REST en Java en Render; los datos en MongoDB Atlas, separados por gimnasio]",
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
        pantallas: ['Membresía', 'Rutinas', 'Entrenamiento guiado', 'Progreso', 'Tienda', 'Pedidos']
      },
      back: {
        nombre: 'Back (servicios)',
        tecnologia: 'La misma API de la web',
        items: ['Autenticación con token Bearer', 'Notificaciones push']
      },
      compartida: 'API compartida con la web',
      kpis: [
        { valor: 612, texto: 'pruebas automatizadas en CI', detalle: 'revisan compras, pagos, permisos y el lector en cada cambio' },
        { valor: 3, texto: 'pasarelas de pago', detalle: 'Tarjeta · PayPal · pago en tienda' }
      ],
      duracion: '0:45',
      presenta: "Valeria",
      guion: [
        "[→ entra deslizándose]",
        "Y para el socio está la app. Con ella ve si su membresía está activa, compra en la tienda de su gimnasio y entrena con las rutinas que le prepara su coach, paso a paso, con la ilustración de cada ejercicio y el descanso cronometrado. En Android, una notificación lo acompaña mientras entrena.",
        "La app trabaja con el mismo sistema que la web: lo que el socio compra en su celular, el dueño lo ve al instante en su panel.",
        "¿Y cómo sabemos que todo funciona? Cada vez que cambiamos algo, 612 pruebas automáticas repiten lo que haría un usuario real: comprar, pagar o entrar por la puerta. Si una sola falla, el cambio no se publica.",
        "[Si el tiempo está justo, salta el párrafo de las pruebas y déjalo para las preguntas]",
        "[Si preguntan por la tecnología: React Native con Expo y TypeScript; la misma API REST, con token; las pruebas corren en GitHub Actions y están en GTWeb/pruebas]",
        "Eduardo les muestra cómo la usa un socio."
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
        { titulo: 'Ve su membresía', texto: 'Ve su gimnasio, si su membresía está activa y hasta cuándo, la rutina del día y su progreso.',
          pantallas: ['Inicio'],
          capturas: [{ src: 'img/app-inicio.png', alt: 'Pantalla Inicio' }] },
        { titulo: 'Elige y paga su plan o producto', texto: 'Elige en la tienda de su gimnasio y paga con tarjeta, PayPal o en tienda, sin ir a recepción.',
          pantallas: ['Tienda', 'Pagar'],
          capturas: [{ src: 'img/app-tienda.png', alt: 'Pantalla Tienda' }, { src: 'img/app-pagar.png', alt: 'Pantalla Pagar' }] },
        { titulo: 'Entrena y mide su avance', texto: 'Sigue la rutina de su coach con la ilustración de cada ejercicio, marca sus series con el descanso en marcha y ve su avance.',
          pantallas: ['Entrenando', 'Progreso'],
          capturas: [{ src: 'img/app-entrenando.png', alt: 'Pantalla Entrenando' }, { src: 'img/app-progreso.png', alt: 'Pantalla Progreso' }] }
      ],
      duracion: '1:00',
      presenta: "Eduardo",
      guion: [
        "Gracias, Valeria. Así es un día con GymTrack para el socio, en cinco pasos.",
        "[→] Se registra o inicia sesión en un minuto.",
        "[→] En Vincular gimnasio escribe el código que le dan en recepción, y el dueño lo aprueba.",
        "[→] En Inicio ve su gimnasio, si su membresía sigue activa y hasta cuándo, la rutina del día y su progreso.",
        "[→] Si necesita renovar, o se le antoja una proteína, lo elige en la Tienda y lo paga en Pagar, sin hacer fila en recepción.",
        "[→] Y entrena: en Entrenando sigue su rutina con la ilustración de cada ejercicio, anota sus kilos y la app le cuenta el descanso. En Progreso ve su racha y cuánto ha avanzado.",
        "[→] Un socio que ve su avance vuelve al gimnasio. Edwin les explica la puerta."
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
      subtitulo: 'Sensores y actuadores: del tag a la nube, al panel "Accesos RFID" y a la puerta',
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
        { icono: 'ledok', titulo: 'Entradas', texto: 'LED verde, buzzer y el servo abre la puerta' },
        { icono: 'ledazul', titulo: 'Salidas', texto: 'LED azul y la puerta se abre para salir' },
        { icono: 'usuario', titulo: 'Quién y cuándo', texto: 'socio, hora y lector de cada pase' },
        { icono: 'ledno', titulo: 'Denegados', texto: 'LED rojo, buzzer y alerta; la puerta no abre' }
      ],
      offline: { titulo: 'Modo sin conexión', texto: 'Si se cae la red, el lector decide con la lista de credenciales que guarda en su memoria.' },
      duracion: '0:55',
      presenta: "Edwin",
      guion: [
        "[→]",
        "Gracias, Eduardo. La tercera pieza es la que cierra la fuga de dinero: la puerta.",
        "El socio acerca su tarjeta al lector y, en un segundo, el sistema revisa si su membresía está al día. Si lo está, se prende el LED verde, suena el buzzer y el servo abre la puerta. Si no, LED rojo y la puerta no se abre; el dueño recibe una alerta en su panel y, si quiere, le abre desde ahí.",
        "Cada entrada y salida queda registrada con nombre y hora, sin que nadie vigile. Si se va el internet, el lector sigue funcionando con la lista de socios que guarda en su memoria. Y la misma tarjeta sirve para recoger pedidos en el mostrador.",
        "[Si preguntan por los componentes: tarjeta RFID UHF; lector YRM1004 conectado por UART a una placa LILYGO T-SIM7070G (un ESP32 con módem); WiFi, LTE-M o 2G; HTTPS a la misma API; servo SG90 en el GPIO 23, que abre 90° por 3 segundos]",
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
        "Un dueño solo nos va a confiar su dinero y los datos de sus socios si están protegidos. Por eso seguimos la norma mexicana NMX-I-27001-NYCE-2015. La publica NYCE, Normalización y Certificación, y es la versión mexicana de la ISO/IEC 27001.",
        "La norma trata de la seguridad de la información: que los datos solo los vea quien debe, que nadie los altere y que siempre estén disponibles. Les mostramos dos de sus controles.",
        "El primero es el A.9.4.3, gestión de contraseñas. Al crear su cuenta, la página le marca en vivo si su contraseña es segura: ocho caracteres, una letra, un número y un símbolo. La guardamos cifrada, así que ni nosotros podemos leerla. Y si la olvida, la cambia con un código que le llega al correo.",
        "El segundo es el A.12.4.1, registro de eventos. El dueño tiene una bitácora donde ve quién entró a su cuenta, qué contraseñas fallaron, qué accesos se negaron y qué se cambió en su gimnasio: precios, reembolsos, altas y bajas. Nadie la puede borrar.",
        "[Si preguntan: las contraseñas se cifran con BCrypt; la bitácora guarda fecha, IP y dispositivo, y se borra sola a los 180 días. De los 114 controles de la norma, aplican 95 y ya están implementados 82; los otros 13 están en proceso]",
        "Ahora, lo mejor: verlo funcionar. Valeria empieza con el lector."
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
        { donde: 'rfid', icono: 'card', titulo: 'Pasa su tarjeta', texto: 'Su membresía está vencida: LED rojo, buzzer y la puerta no se abre', presenta: 'Valeria' },
        { donde: 'web', icono: 'ledno', titulo: 'Acceso negado', texto: 'El panel del dueño muestra el intento al instante', presenta: 'Edwin' },
        { donde: 'app', icono: 'campana', titulo: 'Le llega el aviso', texto: 'Una notificación le pide renovar su membresía', presenta: 'Edwin' },
        { donde: 'app', icono: 'recibo', titulo: 'Paga desde la app', texto: 'Renueva su mensualidad con tarjeta o PayPal', presenta: 'Edwin' },
        { donde: 'rfid', icono: 'servo', titulo: 'Vuelve a pasar su tarjeta', texto: 'Ya renovada: LED verde, buzzer y el servo abre la puerta', presenta: 'Valeria' },
        { donde: 'web', icono: 'grafica', titulo: 'Todo queda registrado', texto: 'El dueño ve el pago y la entrada del socio', presenta: 'Edwin' }
      ],
      duracion: '5:00',
      presenta: ["Edwin","Valeria"],
      guion: [
        { quien: "Todo el equipo", texto: "[Antes de empezar: la web abierta en la laptop con la sesión del dueño, en Accesos RFID; el celular con la app y la sesión del socio vencido, con las notificaciones permitidas; el lector encendido, en línea en el panel y con el servo conectado a la puerta]" },
        { quien: "Todo el equipo", texto: "[Si ensayan antes: al pagar, la membresía de ese socio queda activa, así que para la demo necesitan otro socio vencido]" },
        { quien: "Valeria", texto: "Les vamos a contar la historia de un socio que olvidó renovar su membresía." },
        { quien: "Valeria", texto: "Llega al gimnasio y pasa su tarjeta. [Acercar la tarjeta al lector] LED rojo, suena el buzzer y la puerta no se abre. Nadie tuvo que detenerlo." },
        { quien: "Edwin", texto: "En ese mismo momento, el dueño lo ve en su panel: acceso negado por membresía vencida, con el nombre y la hora." },
        { quien: "Edwin", texto: "[Pasarles el celular a los evaluadores] Y al socio le llega esta notificación: su membresía venció y puede renovarla desde aquí." },
        { quien: "Edwin", texto: "La paga desde la app, sin ir a recepción. [Pagar con la tarjeta de prueba] La app le avisa que ya puede volver a pasar su tarjeta." },
        { quien: "Valeria", texto: "Vuelve a pasar su tarjeta. [Acercar la tarjeta] LED verde, suena el buzzer y el servo le abre la puerta." },
        { quien: "Edwin", texto: "Y el dueño ve las dos cosas en su panel: el pago que acaba de entrar y la entrada del socio." },
        { quien: "Valeria", texto: "En menos de un minuto, el gimnasio cobró una membresía que antes se habría perdido. Eso es GymTrack: la web, la app y el lector trabajando juntos." },
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
        { valor: 'Control', texto: 'El servo solo abre a quien pagó, y cada entrada y salida queda registrada sin depender de quien vigile.' },
        { valor: 'Seguridad', texto: 'La protegimos desde el diseño con la NMX-I-27001, no como un parche al final.' }
      ],
      siguientes: ['Piloto con un gimnasio local', 'Publicar la app en Google Play', 'Sumar el RFID al alcance de la NMX-I-27001'],
      duracion: '0:30',
      presenta: "Yael",
      guion: [
        "[OPCIONAL: si el tiempo ya está justo, solo di la primera y la última frase y pasa al cierre]",
        "Gracias, Valeria. Para cerrar, esto es lo que GymTrack le deja a un gimnasio.",
        "Integración: la tienda, la app y la puerta trabajan juntas, así que lo que el socio paga se refleja en todos lados. Tiempo: el personal deja de llenar bitácoras y de revisar pagos a mano.",
        "Control: la puerta solo se abre a quien pagó, y cada entrada queda registrada. Seguridad: los datos están protegidos con la norma mexicana desde el diseño.",
        "Lo que sigue: un piloto con un gimnasio local, la app en Google Play y sumar el lector al alcance de la norma. Eduardo cierra."
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
        "Todo nuestro código es público: aquí están GTWeb y GTApp, y pueden escanear el código para verlos.",
        "Tu gimnasio. Tu visión. Otro nivel. Muchas gracias, ¿tienen alguna pregunta?"
      ]
    }
  ]
};
