/*
 * Motor de la presentación: lee window.PRESENTACION (slides.js) y dibuja cada
 * diapositiva según su "tipo". No hace falta tocar este archivo para cambiar
 * textos o cifras.
 *
 * Teclas: → / Espacio / Re Pág = siguiente · ← / Av Pág = anterior
 *         N = notas del orador · G = vista general · F = pantalla completa
 *         R = reiniciar el cronómetro · Inicio / Fin = primera / última
 */
(function () {
  'use strict';

  const P = window.PRESENTACION;
  const diapositivas = P.diapositivas;

  // ─── Utilidades ───────────────────────────────────────────────
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // *texto* → <em>texto</em> (acento naranja) y \n → <br>
  const rico = s => esc(s).replace(/\*(.+?)\*/g, '<em>$1</em>').replace(/\n/g, '<br>');
  const dinero = n => (n < 0 ? '−$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US');
  const rev = i => `class="rev" style="--i:${i}"`;
  // Títulos largos bajan de tamaño para caber en una línea
  const titulo = (t, i = 0, clase = 'rev') => `<h2 class="titulo ${clase} ${String(t).replace(/\*/g, '').length > 30 ? 'largo' : ''}" style="--i:${i}">${rico(t)}</h2>`;

  // Iconos de trazo (24×24), en el color del texto
  const TRAZOS = {
    pesa: '<path d="M6 7v10M3 9.5v5M18 7v10M21 9.5v5M6 12h12"/>',
    laptop: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18h2"/>',
    chip: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="10" y="10" width="4" height="4" rx=".5"/><path d="M9.5 3v4M14.5 3v4M9.5 17v4M14.5 17v4M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4"/>',
    card: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M6.5 14.5h4M15 10.5c.9.8.9 2.2 0 3M17.3 9c1.8 1.6 1.8 4.4 0 6"/>',
    reader: '<rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M9 9c1.7-1.3 4.3-1.3 6 0M10.4 11.6c.9-.6 2.3-.6 3.2 0"/><circle cx="12" cy="15.5" r=".9" fill="currentColor"/>',
    wifi: '<path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.7 16a5 5 0 0 1 6.6 0"/><circle cx="12" cy="19.3" r="1" fill="currentColor"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/>',
    cloud: '<path d="M7 18.5a4.5 4.5 0 1 1 .8-8.9A6 6 0 0 1 19.2 11 3.8 3.8 0 0 1 18 18.5z"/>',
    ledok: '<circle cx="12" cy="9.5" r="5" fill="#2f8f5b" stroke="#2f8f5b"/><path d="M10 14.5v6.5M14 14.5v6.5"/>',
    ledno: '<circle cx="12" cy="9.5" r="5" fill="#e0412a" stroke="#e0412a"/><path d="M10 14.5v6.5M14 14.5v6.5"/>',
    buzzer: '<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9.5a3.5 3.5 0 0 1 0 5M18 7a7 7 0 0 1 0 10"/>',
    servo: '<rect x="3" y="10" width="13" height="9" rx="2"/><circle cx="12" cy="14.5" r="1.8"/><path d="M12 12.7V5.5h7.5"/>',
    flecha: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    doble: '<path d="M4 9h15M15.5 5.5 19 9l-3.5 3.5M20 15H5M8.5 11.5 5 15l3.5 3.5"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8.2 12.4 2.6 2.6 5-5.4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.2M12 7.8h.01"/>',
    tendencia: '<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
    sincroniza: '<path d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9L20.5 8.5M20.5 3.5v5h-5M20.5 12a8.5 8.5 0 0 1-14.6 5.9L3.5 15.5M3.5 20.5v-5h5"/>',
    candado: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/>',
    externo: '<path d="M7 17 17 7M9 7h8v8"/>',
    codigo: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
    usuario: '<circle cx="12" cy="8" r="3.6"/><path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4"/>',
    bolsa: '<path d="M5.5 8h13l-1 12.5h-11z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
    recibo: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    estrella: '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    caja: '<path d="M3.5 7.5 12 3.5l8.5 4v9L12 20.5l-8.5-4z"/><path d="m3.5 7.5 8.5 4 8.5-4M12 11.5v9"/>',
    grafica: '<path d="M5 20v-8M12 20V5M19 20v-5M3 20.5h18"/>',
    casa: '<path d="M4 11 12 4l8 7"/><path d="M6.5 9.5V20h11V9.5"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5 3.5-5 3.5z"/>',
    campana: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    ant: '<path d="m15 6-6 6 6 6"/>',
    sig: '<path d="m9 6 6 6-6 6"/>',
    notas: '<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/>',
    rejilla: '<rect x="4" y="4" width="7" height="7" rx="1.2"/><rect x="13" y="4" width="7" height="7" rx="1.2"/><rect x="4" y="13" width="7" height="7" rx="1.2"/><rect x="13" y="13" width="7" height="7" rx="1.2"/>',
    completa: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>'
  };
  const ico = (n, clase = '') => `<svg class="ico ${clase}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${TRAZOS[n] || ''}</svg>`;

  const marcaGT = () => `<span class="marca-gt">${ico('pesa')}Gym<em>Track</em></span>`;

  const navegador = (img, ruta, clase = '', estilo = '', extra = '') => `
    <div class="navegador ${clase}" style="${estilo}" ${extra}>
      <div class="barra"><i></i><i></i><i></i><span>${ico('candado')}${esc(ruta || P.sitio.texto)}</span></div>
      <img src="${esc(img.src)}" alt="${esc(img.alt)}" loading="eager">
    </div>`;

  // ─── Gráficas en SVG (sin librerías, funcionan sin internet) ──────
  function graficaBarras(datos, o) {
    const W = o.ancho, H = o.alto, izq = o.izq ?? 0, arriba = 60, abajo = o.abajo ?? 70;
    const max = o.max ?? Math.max(...datos.map(d => d.valor));
    const altoUtil = H - arriba - abajo;
    const ranura = (W - izq) / datos.length;
    const anchoBarra = Math.min(ranura * 0.62, o.barraMax ?? 140);
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(o.aria)}">`;
    (o.lineas || []).forEach(v => {
      const y = H - abajo - (v / max) * altoUtil;
      s += `<line x1="${izq}" x2="${W}" y1="${y}" y2="${y}" stroke="${o.colorLinea}" stroke-width="1.5" stroke-dasharray="${v ? '4 8' : ''}"/>`;
      if (o.etiquetaLinea) s += `<text x="${izq - 16}" y="${y + 8}" text-anchor="end" font-size="22" fill="${o.colorEje}">${o.etiquetaLinea(v)}</text>`;
    });
    datos.forEach((d, i) => {
      const h = (d.valor / max) * altoUtil;
      const x = izq + ranura * i + (ranura - anchoBarra) / 2;
      const y = H - abajo - h;
      const color = o.color(d, i, datos.length);
      s += `<rect class="crece" style="--i:${i}" x="${x}" y="${y}" width="${anchoBarra}" height="${h}" rx="10" fill="${color}"/>`;
      s += `<text class="num rev" style="--i:${i + 3}" x="${x + anchoBarra / 2}" y="${y - 16}" text-anchor="middle" font-size="${o.tamValor ?? 40}" fill="${o.colorValor(d, i, datos.length)}">${o.formato(d.valor)}</text>`;
      String(d.etiqueta).split('\n').forEach((linea, k) => {
        s += `<text x="${x + anchoBarra / 2}" y="${H - abajo + 40 + k * 28}" text-anchor="middle" font-size="25" font-weight="600" fill="${o.colorEje}">${esc(linea)}</text>`;
      });
      if (d.nota) {
        s += `<g class="rev" style="--i:8"><rect x="${x + anchoBarra / 2 - 80}" y="${y - 118}" width="160" height="46" rx="23" fill="#20221f"/>`
          + `<text x="${x + anchoBarra / 2}" y="${y - 87}" text-anchor="middle" font-size="21" font-weight="700" fill="#f4f2eb">${esc(d.nota)}</text></g>`;
      }
    });
    return s + '</svg>';
  }

  function dona(d) {
    const r = 180, C = 2 * Math.PI * r, seg = C * d.vencidos / 100;
    return `<svg viewBox="0 0 470 470" role="img" aria-label="${d.alCorriente}% al corriente, ${d.vencidos}% vencidos">
      <circle cx="235" cy="235" r="${r}" fill="none" stroke="#20221f" stroke-width="62"/>
      <circle class="arco" cx="235" cy="235" r="${r}" fill="none" stroke="#f45124" stroke-width="62"
        style="stroke-dasharray:${seg} ${C};--desde:${seg}" transform="rotate(-90 235 235)"/>
      <text class="num" x="235" y="252" text-anchor="middle" font-size="128" fill="#f45124">${d.vencidos}%</text>
      <text x="235" y="306" text-anchor="middle" font-size="30" font-weight="700" fill="#20221f">${esc(d.detalle)} socios</text>
    </svg>`;
  }


  // ─── Plantillas por tipo ────────────────────────────────────────
  const tipos = {
    // Con "intro": primero se ve la captura a pantalla completa y, con el
    // siguiente clic, se recorre a su lugar y aparece la información.
    portada: d => {
      const r = d.intro ? 'rev2' : 'rev';
      return `
      <div class="portada">
        <div>
          <div class="logo ${r}" style="--i:0">${ico('pesa')}Gym<em>Track</em></div>
          <h1 class="${r}" style="--i:1">${rico(d.titulo)}</h1>
          <div class="puntos">
            ${d.puntos.map((p, i) => `<div class="punto ${r}" style="--i:${i + 2}"><b>${esc(p.etiqueta)}</b><span>${rico(p.texto)}</span></div>`).join('')}
          </div>
          ${d.pie ? `<div class="pie ${r}" style="--i:6">${esc(d.pie)}</div>` : ''}
          ${d.integrantes ? `<ul class="integrantes ${r}" style="--i:7">${d.integrantes.map(n => `<li>${esc(n)}</li>`).join('')}</ul>` : ''}
        </div>
        <div class="visual ${d.intro ? '' : 'rev'}" style="--i:3">
          ${navegador(d.imagen, '', d.intro ? 'intro-visual' : '', '', d.app ? 'data-objetivo="790,575,1260,840,2.4"' : '')}
          ${d.app ? `
          <div class="telefono ${d.intro ? 'intro-visual' : ''}" data-objetivo="1645,575,420,840,2.4">
            <img src="${esc(d.app.src)}" alt="${esc(d.app.alt)}" loading="eager">
          </div>` : ''}
          <div class="sello ${d.intro ? 'rev2' : ''}" style="--i:5">${ico('check')}En producción</div>
        </div>
      </div>`;
    },

    dato: d => `
      <div class="dato">
        <div>
          <div class="kicker rev" style="--i:0">El dato más impactante</div>
          <div class="cifra rev" style="--i:1"><span class="cuenta" data-valor="${d.cifra.valor}" data-prefijo="${esc(d.cifra.prefijo)}">${esc(d.cifra.prefijo)}${d.cifra.valor.toLocaleString('en-US')}</span></div>
          <div class="bajada rev" style="--i:2">${rico(d.bajada)}</div>
          <div class="formula rev" style="--i:3">${rico(d.formula)}</div>
          <p class="escala rev" style="--i:4">${rico(d.escala)}</p>
        </div>
        <div class="grafica-caja rev" style="--i:2">
          <h3>${esc(d.grafica.titulo)}</h3>
          ${graficaBarras(d.grafica.datos, {
            ancho: 860, alto: 640, izq: 110, max: 30000, lineas: [0, 10000, 20000, 30000], aria: d.grafica.titulo,
            colorLinea: '#3a3c37', colorEje: '#a9aaa1', etiquetaLinea: v => v ? '$' + v / 1000 + 'k' : '$0',
            color: (x, i, n) => i === n - 1 ? '#f45124' : `rgba(244,81,36,${0.28 + 0.5 * i / (n - 1)})`,
            colorValor: (x, i, n) => i === n - 1 ? '#f45124' : '#f4f2eb', formato: dinero, tamValor: 38
          })}
        </div>
      </div>`,

    problema: d => `
      ${titulo(d.titulo)}
      <div class="problema">
        <div class="dona-caja rev" style="--i:1">
          ${dona(d.dona)}
          <div class="leyenda">
            <div><i style="background:#20221f"></i><b>${d.dona.alCorriente}%</b><span>${esc(d.dona.textoAlCorriente)}</span></div>
            <div><i style="background:#f45124"></i><b style="color:#f45124">${d.dona.vencidos}%</b><span>${esc(d.dona.textoVencidos)}</span></div>
          </div>
        </div>
        <div class="causas">
          ${d.causas.map((c, i) => `<div class="causa rev" style="--i:${i + 2}"><div class="n">0${i + 1}</div><h4>${esc(c.titulo)}</h4><p>${rico(c.texto)}</p></div>`).join('')}
        </div>
      </div>`,

    solucion: d => `
      ${titulo(d.titulo)}
      <div class="pilares">
        ${d.pilares.map((p, i) => `<div class="pilar rev" style="--i:${i + 1}"><div class="ic">${ico(p.icono)}</div><h4>${esc(p.titulo)}</h4><ul>${p.items.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}
      </div>
      <div class="conector rev" style="--i:4">
        <svg viewBox="0 0 1680 92" preserveAspectRatio="none" aria-hidden="true"><path d="M265 0 V30 Q265 50 285 50 H760 M1415 0 V30 Q1415 50 1395 50 H920 M840 0 V40" fill="none" stroke="#f45124" stroke-width="4" stroke-linecap="round"/></svg>
        <div class="centro-eco">${ico('cloud')}${esc(d.centro)}</div>
      </div>
      <div class="flujo">
        ${d.flujo.map((f, i) => `${i ? `<div class="flecha rev" style="--i:${5 + i * 2 - 1}">${ico('flecha')}</div>` : ''}<div class="paso rev" style="--i:${5 + i * 2}"><div class="n">${i + 1}</div><div><h5>${esc(f.titulo)}</h5><p>${esc(f.texto)}</p></div></div>`).join('')}
      </div>`,

    // Con "intro": primero la fase en foco aparece en grande; con el siguiente
    // clic se recorre a su columna y aparece lo demás.
    fases: d => {
      const r = d.intro ? 'rev2' : 'rev';
      return `
      ${titulo(d.titulo, 0, r)}
      <div class="fases">
        ${d.fases.map((f, i) => {
          // foco: la fase que se presenta a continuación; las anteriores ya se vieron
          const estado = !d.foco ? '' : f.numero === d.foco ? 'foco' : f.numero < d.foco ? 'vista' : 'pendiente';
          const chip = estado === 'foco' ? `<span class="chip-fase sigue">${ico('flecha')}A continuación</span>`
            : estado === 'vista' && d.foco > 1 ? `<span class="chip-fase">${ico('check')}Presentada</span>` : '';
          // "recorrido": cada tarjeta entra en grande y se acomoda en su paso (tour)
          const clase = d.recorrido ? 'tour' : d.intro && estado === 'foco' ? 'intro-visual' : r;
          return `
          <div class="fase ${clase} ${estado} ${d.foco > 1 ? 'regreso' : ''}" data-n="${f.numero}" ${estado === 'foco' ? 'data-zoom' : ''} style="--i:${i + 1}">
            ${chip}
            <div class="num">Fase ${f.numero}</div>
            <h4>${esc(f.nombre)}</h4>
            <p>${esc(f.estado)}</p>
            <div class="avance"><div class="pista"><div class="lleno ${f.avance == null ? 'curso' : ''}" style="--w:${f.avance ?? 62}%;--i:${i}"></div></div><b>${f.avance == null ? esc(f.etiqueta) : f.avance + '%'}</b></div>
          </div>`;
        }).join('')}
      </div>
      <div class="metricas">
        ${d.metricas.map((m, i) => `<div class="metrica ${d.recorrido ? 'rev-final' : r}" style="--i:${i}"><div class="v"><span class="cuenta" data-valor="${m.valor}">${m.valor}</span></div><div class="t">${esc(m.texto)}</div><div class="demo">${ico('info')}Datos de demostración</div></div>`).join('')}
      </div>
      <p class="aclaracion ${d.recorrido ? 'rev-final' : r}" style="--i:3">${ico('info')}${esc(d.aclaracion)}</p>`;
    },

    // Qué hace cada fase: para quién, qué puede hacer y su flujo principal
    fase: d => `
      ${titulo(d.titulo)}
      <p class="subtitulo rev" style="--i:1">${rico(d.subtitulo)}</p>
      ${d.columnas ? `
      <div class="fase-cols">
        ${d.columnas.map((c, i) => `
          <div class="fase-col rev" style="--i:${i + 2}">
            <h4>${ico(c.icono)}${esc(c.titulo)}</h4>
            <ul>${c.items.map(it => `<li>${ico(it.icono)}<span>${rico(it.texto)}</span></li>`).join('')}</ul>
          </div>`).join('')}
      </div>` : ''}
      ${d.pestanas ? `
      <div class="pestanas">
        ${d.pestanas.map((p, i) => `<div class="pestana rev" style="--i:${i + 2}"><div class="ic">${ico(p.icono)}</div><b>${esc(p.nombre)}</b><span>${rico(p.texto)}</span></div>`).join('')}
      </div>
      <div class="extras rev" style="--i:7">${d.extras.map(x => `<span>${ico(x.icono)}${esc(x.texto)}</span>`).join('')}</div>` : ''}
      <div class="fase-flujo rev" style="--i:8">
        <h5>${esc(d.flujo.titulo)}</h5>
        <div class="pasos-f">${d.flujo.pasos.map((p, i) => `${i ? `<span class="flecha">${ico('flecha')}</span>` : ''}<div class="paso-f"><b>${i + 1}</b><span>${rico(p)}</span></div>`).join('')}</div>
      </div>`,

    hardware: d => `
      ${titulo(d.titulo)}
      <p class="subtitulo rev" style="--i:1">${esc(d.subtitulo)}</p>
      <div class="cadena-hw">
        <div class="linea"></div>
        ${d.nodos.map((n, i) => `<div class="nodo rev ${n.destacado ? 'destacado' : ''}" style="--i:${i + 2}">${n.enlace ? `<span class="enlace">${esc(n.enlace)}</span>` : ''}<div class="ic">${ico(n.icono)}</div><h5>${esc(n.titulo)}</h5><p>${esc(n.texto)}</p></div>`).join('')}
      </div>
      <div class="hw-abajo">
        <div class="actuadores rev" style="--i:8">
          <h4>Actuadores que controla el ESP32</h4>
          <div class="fila">${d.actuadores.map(a => `<div class="act"><div class="ic">${ico(a.icono)}</div><div><b>${esc(a.titulo)}</b><span>${esc(a.texto)}</span></div></div>`).join('')}</div>
        </div>
        <div class="offline rev" style="--i:9">${ico('sincroniza', 'ic')}<h4>${esc(d.offline.titulo)}</h4><p>${esc(d.offline.texto)}</p></div>
      </div>`,

    capas: d => `
      ${titulo(d.titulo)}
      <div class="capas-grid">
        <div class="capas">
          ${d.capas.map((c, i) => `<div class="capa rev" style="--i:${i + 1}"><div class="nombre"><small>0${i + 1}</small>${esc(c.nombre)}</div><div class="items">${c.items.map(x => `<p>${rico(x)}</p>`).join('')}</div></div>`).join('')}
        </div>
        <div class="captura rev" style="--i:3">
          ${navegador(d.imagen, d.imagen.ruta)}
          ${d.acceso ? `
          <div class="acceso-web">
            <div class="qr"><img src="${esc(P.sitio.qr)}" alt="Código QR a ${esc(P.sitio.texto)}"></div>
            <div>
              <small>${esc(d.acceso.texto)}</small>
              <a class="boton" href="${esc(P.sitio.url)}" target="_blank" rel="noopener">${esc(d.acceso.boton)}${ico('externo')}</a>
              <span class="url">${esc(P.sitio.texto)}</span>
            </div>
          </div>` : ''}
        </div>
      </div>`,

    app: d => `
      ${titulo(d.titulo)}
      <div class="app-grid">
        <div class="app-cols">
          <div class="app-card rev" style="--i:1">
            <span class="tag">${esc(d.front.nombre)}</span>
            <h4>${esc(d.front.tecnologia)}</h4>
            <div class="det">${esc(d.front.detalle)}</div>
            <div class="chips">${d.front.pantallas.map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div>
          </div>
          <div class="doble rev" style="--i:2">${ico('doble')}</div>
          <div class="app-card rev" style="--i:3">
            <span class="tag">${esc(d.back.nombre)}</span>
            <h4>${esc(d.back.tecnologia)}</h4>
            <ul>${d.back.items.map(x => `<li>${ico('check')}${esc(x)}</li>`).join('')}</ul>
          </div>
          <div class="api-barra rev" style="--i:4"><b>${esc(d.compartida)}</b><span>Spring Boot · Render · MongoDB Atlas</span></div>
        </div>
        <div class="kpis">
          ${d.kpis.map((k, i) => `<div class="kpi rev" style="--i:${i + 5}"><div class="v"><span class="cuenta" data-valor="${k.valor}">${k.valor}</span></div><div class="t">${esc(k.texto)}</div>${k.detalle ? `<div class="d">${esc(k.detalle)}</div>` : ''}</div>`).join('')}
        </div>
      </div>`,

    negocio: d => `
      ${titulo(d.titulo)}
      <div class="negocio">
        <div>
          <div class="b2b2c">
            ${d.cadena.map((c, i) => `${i ? `<div class="flecha rev" style="--i:${i * 2}">${ico('flecha')}</div>` : ''}<div class="eslabon rev ${c.destacado ? 'destacado' : ''}" style="--i:${i * 2 + 1}"><h5>${esc(c.titulo)}</h5><p>${esc(c.texto)}</p></div>`).join('')}
          </div>
          <div class="ingresos">
            ${d.ingresos.map((x, i) => `<div class="ingreso rev" style="--i:${i + 6}"><div class="v">${esc(x.valor)}<small>${esc(x.unidad)}</small></div><p>${rico(x.texto)}</p></div>`).join('')}
          </div>
          <div class="recurrente rev" style="--i:9">${ico('tendencia')}<span>${rico(d.recurrente)}</span></div>
          <div class="costos rev" style="--i:10"><b>Costos</b>${d.costos.map(c => `<span>${esc(c)}</span>`).join('')}</div>
        </div>
        <div class="grafica-caja rev" style="--i:4">
          <h3>${esc(d.grafica.titulo)}</h3>
          <div class="sub">${esc(d.grafica.subtitulo)}</div>
          ${graficaBarras(d.grafica.datos.map(x => ({ ...x, etiqueta: x.etiqueta + '\npiezas' })), {
            ancho: 520, alto: 560, max: 50, abajo: 84, lineas: [0], aria: d.grafica.titulo, barraMax: 104,
            colorLinea: '#d5d6cc', colorEje: '#62645d',
            color: (x, i, n) => i === n - 1 ? '#f45124' : '#dcdbd2',
            colorValor: (x, i, n) => i === n - 1 ? '#f45124' : '#20221f', formato: v => '$' + v, tamValor: 44
          })}
        </div>
      </div>`,

    repos: d => `
      ${titulo(d.titulo)}
      <div class="repos">
        ${d.repos.map((r, i) => `
          <div class="repo rev" style="--i:${i + 1}">
            <div class="qr"><img src="${esc(r.qr)}" alt="Código QR al repositorio ${esc(r.nombre)}"></div>
            <div class="repo-info">
              <span class="repo-tag">${ico('codigo')}Repositorio público</span>
              <h3>${esc(r.nombre)}</h3>
              <p>${esc(r.texto)}</p>
              <p class="tec">${esc(r.tecnologias)}</p>
              <a class="boton" href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.ruta)}${ico('externo')}</a>
            </div>
          </div>`).join('')}
      </div>
      <div class="despedida rev" style="--i:4">${esc(d.despedida)}</div>`
  };

  // Indicador "1 · 2 · 3" de las fases en la parte de arriba de cada fase
  const nombresFase = (diapositivas.find(d => d.tipo === 'fases') || {}).fases || [];
  const indicadorFase = n => `<span class="indicador-fase">${nombresFase.map((f, i) => {
    const estado = f.numero === n ? 'actual' : f.numero < n ? 'hecha' : '';
    return `${i ? '<i></i>' : ''}<span class="${estado}"><b>${f.numero < n ? '✓' : f.numero}</b>${esc(f.nombre)}</span>`;
  }).join('')}</span>`;

  // ─── Construcción del DOM ───────────────────────────────────────
  const escenario = document.getElementById('escenario');
  const total = diapositivas.length;

  escenario.innerHTML = diapositivas.map((d, i) => `
    <section class="slide ${esc(d.tema)} ${d.recorrido ? 'recorrido' : ''}" data-id="${esc(d.id)}" aria-roledescription="diapositiva" aria-label="${i + 1} de ${total}">
      <div class="cabecera">${marcaGT()}${d.fase ? indicadorFase(d.fase) : ''}<span class="seccion"><b>${String(i + 1).padStart(2, '0')}</b>${esc(d.seccion)}</span></div>
      ${(tipos[d.tipo] || (() => `<h2 class="titulo">${rico(d.titulo || d.id)}</h2>`))(d)}
    </section>`).join('');

  const slides = [...escenario.querySelectorAll('.slide')];
  document.title = P.titulo;

  // Escala el escenario de 1920×1080 a la ventana sin deformarlo
  function ajustar() {
    const s = Math.min(innerWidth / 1920, innerHeight / 1080);
    escenario.style.transform = `scale(${s})`;
    escenario.style.left = (innerWidth - 1920 * s) / 2 + 'px';
    escenario.style.top = (innerHeight - 1080 * s) / 2 + 'px';
  }
  addEventListener('resize', ajustar);
  ajustar();

  // ─── Navegación ─────────────────────────────────────────────────
  let actual = 0;
  const progreso = document.getElementById('progreso');
  const contador = document.getElementById('contador');
  const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function contar(slide) {
    slide.querySelectorAll('.cuenta').forEach(el => {
      const fin = Number(el.dataset.valor), pre = el.dataset.prefijo || '';
      if (reducido) { el.textContent = pre + fin.toLocaleString('en-US'); return; }
      const t0 = performance.now(), dur = 1300;
      el.textContent = pre + '0';
      const paso = t => {
        const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        el.textContent = pre + Math.round(fin * e).toLocaleString('en-US');
        if (p < 1 && slide.classList.contains('activa')) requestAnimationFrame(paso);
        else el.textContent = pre + fin.toLocaleString('en-US');
      };
      setTimeout(() => requestAnimationFrame(paso), 250);
    });
  }

  // Pasos dentro de una diapositiva (p. ej. la intro de la portada)
  const pasosDe = i => diapositivas[i].pasos || (diapositivas[i].intro ? 1 : 0);
  let paso = 0;
  function ponerPaso(s, p, directo) {
    paso = p;
    // "completa": se llega ya en el último paso, sin repetir la animación
    const completa = !!directo && p > 0;
    s.classList.toggle('completa', completa);
    for (let k = 1; k <= pasosDe(actual); k++) s.classList.toggle('paso-' + k, !completa && k <= p);
    // Las cifras cuentan cuando aparecen, no mientras están ocultas
    if (!directo && p > 0 && p === pasosDe(actual)) contar(s);
  }

  // ─── Transiciones especiales entre diapositivas vecinas ─────────
  // "zoom": la tarjeta [data-zoom] de la anterior crece hasta llenar la pantalla.
  // "deslizar": la diapositiva entra desde un lado empujando a la anterior.
  const CLASES_T = ['saliendo', 'entrando', 'sale-izq', 'sale-der', 'entra-der', 'entra-izq', 'oculta-zoom'];
  let relojes = [];
  function cancelarTransicion() {
    relojes.forEach(clearTimeout); relojes = [];
    slides.forEach(s => s.classList.remove(...CLASES_T));
    document.getElementById('zoom')?.remove();
  }
  const luego = (ms, fn) => relojes.push(setTimeout(fn, ms));

  function deslizar(sal, ent, adelante) {
    sal.classList.add('saliendo', adelante ? 'sale-izq' : 'sale-der');
    ent.classList.add('entrando', adelante ? 'entra-der' : 'entra-izq');
    luego(850, cancelarTransicion);
  }

  // Rectángulo de un elemento en coordenadas del escenario (sin transformaciones)
  function caja(el, slide) {
    let x = 0, y = 0, e = el;
    while (e && e !== slide) { x += e.offsetLeft; y += e.offsetTop; e = e.offsetParent; }
    return { x, y, w: el.offsetWidth, h: el.offsetHeight };
  }

  function zoom(sal, ent, adelante) {
    const fases = adelante ? sal : ent;
    const tarjeta = fases.querySelector('[data-zoom]');
    if (!tarjeta) return;
    const r = caja(tarjeta, fases);
    const capa = document.createElement('div');
    capa.id = 'zoom';
    capa.className = 'fase foco';
    capa.innerHTML = `<div class="contenido">${tarjeta.innerHTML}</div>`;
    const chica = () => Object.assign(capa.style, { left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px', borderRadius: '22px', backgroundColor: '#2b2d29', borderColor: '#f45124' });
    const grande = () => Object.assign(capa.style, { left: '0px', top: '0px', width: '1920px', height: '1080px', borderRadius: '0px', backgroundColor: '#f4f2eb', borderColor: 'transparent' });
    if (adelante) {
      // Fases → comercio electrónico: la tarjeta crece y luego entra la arquitectura
      chica();
      sal.classList.add('saliendo');
      ent.classList.add('oculta-zoom');
      escenario.appendChild(capa);
      void capa.offsetWidth;
      capa.classList.add('vacia');
      grande();
      luego(820, () => {
        sal.classList.remove('saliendo');
        ent.classList.add('entrando'); ent.classList.remove('oculta-zoom', 'activa');
        void ent.offsetWidth; ent.classList.add('activa'); // reinicia sus animaciones
        capa.style.opacity = '0';
        luego(400, cancelarTransicion);
      });
    } else {
      // Regreso: la pantalla se encoge de vuelta a la tarjeta de la fase
      grande();
      capa.classList.add('vacia');
      escenario.appendChild(capa);
      void capa.offsetWidth;
      chica();
      luego(380, () => capa.classList.remove('vacia'));
      luego(820, () => { capa.style.opacity = '0'; luego(400, cancelarTransicion); });
    }
  }

  function ir(n, desdeHash, alFinal) {
    n = Math.max(0, Math.min(total - 1, n));
    cancelarTransicion();
    const previo = actual, adelante = n > previo;
    const tipo = !desdeHash && !reducido && Math.abs(n - previo) === 1
      ? (adelante ? diapositivas[n].transicion : diapositivas[previo].transicion) : null;
    slides[actual].classList.remove('activa');
    actual = n;
    const s = slides[actual];
    void s.offsetWidth; // reinicia las animaciones de entrada
    // Al regresar desde la siguiente diapositiva se muestra ya completa
    ponerPaso(s, alFinal ? pasosDe(actual) : 0, true);
    if (tipo === 'deslizar') deslizar(slides[previo], s, adelante);
    s.classList.add('activa');
    if (tipo === 'zoom') zoom(slides[previo], s, adelante);
    if (!pasosDe(actual) || alFinal) contar(s);
    progreso.style.width = ((actual + 1) / total * 100) + '%';
    contador.textContent = `${actual + 1} / ${total}`;
    if (!desdeHash) history.replaceState(null, '', '#' + (actual + 1));
    pintarNotas();
    document.querySelectorAll('#general button').forEach((b, i) => b.classList.toggle('actual', i === actual));
  }
  const siguiente = () => paso < pasosDe(actual) ? ponerPaso(slides[actual], paso + 1) : ir(actual + 1);
  const anterior = () => paso > 0 ? ponerPaso(slides[actual], paso - 1) : ir(actual - 1, false, true);

  // Calcula cuánto agrandar y mover la captura para que llene la pantalla
  function medirIntros() {
    const k = escenario.getBoundingClientRect().width / 1920, base = escenario.getBoundingClientRect();
    escenario.querySelectorAll('.intro-visual, .tour').forEach(el => {
      el.style.transition = 'none'; el.style.transform = 'none';
      const r = el.getBoundingClientRect();
      const x = (r.left - base.left) / k, y = (r.top - base.top) / k, w = r.width / k, h = r.height / k;
      // Las fases del recorrido se agrandan debajo del título; la portada llena la pantalla
      const tour = el.classList.contains('tour');
      // data-objetivo="cx,cy,ancho,alto,tope" fija dónde y qué tan grande se ve al inicio
      const [cx, cy, mw, mh, tope] = el.dataset.objetivo ? el.dataset.objetivo.split(',').map(Number)
        : tour ? [960, 640, 1400, 640, 2.2] : [960, 575, 1680, 880, 2.4];
      const s = Math.min(mw / w, mh / h, tope);
      el.style.setProperty('--s', s.toFixed(4));
      el.style.setProperty('--dx', (cx - (x + w / 2)).toFixed(1) + 'px');
      el.style.setProperty('--dy', (cy - (y + h / 2)).toFixed(1) + 'px');
      el.style.transform = ''; void el.offsetWidth; el.style.transition = '';
    });
  }
  medirIntros();
  document.fonts && document.fonts.ready.then(medirIntros);

  // ─── Notas del orador y cronómetro ──────────────────────────────
  const notas = document.getElementById('notas');
  const aSeg = t => { const [m, s] = String(t).split(':').map(Number); return m * 60 + (s || 0); };
  const aTexto = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  let inicio = Date.now();

  function pintarNotas() {
    const d = diapositivas[actual];
    notas.querySelector('#nota-titulo').textContent = `${actual + 1} · ${d.seccion}`;
    notas.querySelector('#nota-tiempo').textContent = `sugerido ${d.duracion}`;
    notas.querySelector('p').textContent = d.notas || '';
  }
  setInterval(() => {
    const seg = (Date.now() - inicio) / 1000;
    const reloj = document.getElementById('reloj');
    reloj.textContent = `${aTexto(seg)} / ${P.duracionTotal}`;
    reloj.classList.toggle('tarde', seg > aSeg(P.duracionTotal));
  }, 500);

  // ─── Vista general ──────────────────────────────────────────────
  const general = document.getElementById('general');
  general.innerHTML = slides.map((s, i) => `<button type="button" data-n="${i}"><div class="mini"><div>${s.outerHTML.replace('slide ', 'slide activa completa ')}</div></div><span>${i + 1}. ${esc(diapositivas[i].seccion)}</span></button>`).join('');
  function alternarGeneral(forzar) {
    const on = document.body.classList.toggle('general', forzar);
    if (on) general.querySelectorAll('.mini').forEach(m => { m.firstElementChild.style.transform = `scale(${m.clientWidth / 1920})`; });
  }
  general.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    alternarGeneral(false); ir(Number(b.dataset.n));
  });

  // ─── Teclado, clic, toque ───────────────────────────────────────
  const pantallaCompleta = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key;
    if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(k)) { e.preventDefault(); siguiente(); }
    else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(k)) { e.preventDefault(); anterior(); }
    else if (k === 'Home') ir(0);
    else if (k === 'End') ir(total - 1);
    else if (k === 'n' || k === 'N') notas.classList.toggle('visible');
    else if (k === 'g' || k === 'G' || (k === 'Escape' && document.body.classList.contains('general'))) alternarGeneral();
    else if (k === 'f' || k === 'F') pantallaCompleta();
    else if (k === 'r' || k === 'R') inicio = Date.now();
  });
  escenario.addEventListener('click', e => {
    if (e.target.closest('a')) return;
    const r = escenario.getBoundingClientRect();
    (e.clientX - r.left < r.width * 0.3 ? anterior : siguiente)();
  });
  let toqueX = null;
  addEventListener('touchstart', e => { toqueX = e.touches[0].clientX; }, { passive: true });
  addEventListener('touchend', e => {
    if (toqueX == null) return;
    const dx = e.changedTouches[0].clientX - toqueX; toqueX = null;
    if (Math.abs(dx) > 50) (dx < 0 ? siguiente : anterior)();
  });

  document.getElementById('btn-ant').addEventListener('click', anterior);
  document.getElementById('btn-sig').addEventListener('click', siguiente);
  document.getElementById('btn-notas').addEventListener('click', () => notas.classList.toggle('visible'));
  document.getElementById('btn-general').addEventListener('click', () => alternarGeneral());
  document.getElementById('btn-completa').addEventListener('click', pantallaCompleta);

  // Muestra los controles solo cuando se mueve el ratón
  let ocultar;
  addEventListener('mousemove', () => {
    document.body.classList.add('raton');
    clearTimeout(ocultar);
    ocultar = setTimeout(() => document.body.classList.remove('raton'), 2200);
  });
  setTimeout(() => document.getElementById('ayuda').classList.add('oculta'), 4500);

  addEventListener('hashchange', () => ir((parseInt(location.hash.slice(1), 10) || 1) - 1, true));
  slides.forEach(s => s.classList.remove('activa'));
  actual = 0;
  ir((parseInt(location.hash.slice(1), 10) || 1) - 1, true);
})();
