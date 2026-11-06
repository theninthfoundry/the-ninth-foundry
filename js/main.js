/* THE NINTH FOUNDRY — MAIN INTERACTION & RENDERING ENGINE
   Renders content from data.js and wires navigation, index drawer, telemetry and modals. */

(function () {
  const N = window.NF;
  const $ = (s, c = document) => c.querySelector(s);
  const B = 'assets/images/';

  // Safe image rendering with lazy loading and clean error fallback
  const img = (src, alt, lazy) =>
    `<img ${lazy === false ? '' : 'loading="lazy"'} src="${B + src}" alt="${alt}" onerror="this.remove()">`;

  // 02 — SELECTED WORK: 4 Flagship Projects (No cyclical loops)
  const meta = p =>
    `<span>${p.n} — ${p.c}</span><span>Year — ${p.year} · Status — ${p.status}</span>`;

  const wkEl = $('#wk');
  if (wkEl && N.featuredProjects) {
    wkEl.innerHTML = N.featuredProjects.map(p => `
      <a class="pj ${p.cls}" href="${p.url}" target="_blank" rel="noopener noreferrer" data-cursor="Open" data-reveal>
        <div class="art" data-ph="${p.t} — ${B + p.img}">
          ${img(p.img, p.t + ' visual representation')}
        </div>
        <div class="cp">
          <h3 class="t"><span>${p.t}</span><em>↗</em></h3>
          <p>${p.d}</p>
          <div class="mono">${meta(p)}</div>
        </div>
      </a>
    `).join('');
  }

  // 03 — THE INDEX: Secondary Projects Catalog (Zero Duplication)
  const rowsEl = $('#rows');
  if (rowsEl && N.archiveProjects) {
    rowsEl.innerHTML = N.archiveProjects.map(p => `
      <a class="row" href="${p.url}" target="_blank" rel="noopener noreferrer" data-cursor="Open" data-img="${p.img || ''}">
        <span class="mono mute">${p.n}</span>
        <b>${p.t}</b>
        <span class="c mute">${p.c}</span>
        <span class="s mono mute">${p.status}</span>
        <span>↗</span>
      </a>
    `).join('');
  }

  // 04 — THE WORKBENCH: Technical Investigations & Blueprint Plate
  const bp = `<svg viewBox="0 0 300 160" fill="none" stroke="currentColor" stroke-width=".7" aria-hidden="true">
    <circle cx="110" cy="80" r="62"/>
    <circle cx="110" cy="80" r="38" stroke-dasharray="3 3"/>
    <circle cx="110" cy="80" r="8"/>
    <path d="M110 8V152M38 80h144M190 80h100M190 18h100M190 142h100M286 18v124"/>
    <path d="M280 18l6-6 6 6M280 142l6 6 6-6"/>
  </svg>`;

  const workgEl = $('#workg');
  if (workgEl && N.workbench) {
    workgEl.innerHTML = N.workbench.map((w, i) => `
      <div class="lc" data-reveal>
        <div class="mono tag">${w.type}</div>
        ${w.blueprint ? bp : ''}
        <h3>${w.desc}</h3>
        <span class="mono mute">${w.title}</span>
      </div>
    `).join('');
  }

  // 05 — THE COLLECTION: Curated Objects & Disciplines (No "Date — add")
  const colgEl = $('#colg');
  if (colgEl && N.collection) {
    colgEl.innerHTML = N.collection.map((c, i) => `
      <figure class="ci" data-cursor="Explore" data-reveal>
        <div class="art" data-ph="${c.t} ${c.r} — ${B + c.img}">
          ${img(c.img, c.t)}
        </div>
        <figcaption class="cap mono">
          <span>Nº 00${i + 1} · ${c.k} — ${c.t}</span>
          <span>${c.cat}</span>
        </figcaption>
      </figure>
    `).join('');
  }

  // 07 — TRANSMISSION (CONTACT): Verified Channels Only (No scaffolding strings)
  const L = N.links;
  const mailEl = $('.em');
  if (mailEl && L.email) {
    mailEl.setAttribute('href', 'mailto:' + L.email);
    mailEl.textContent = L.email;
  }

  const socEl = $('#soc');
  if (socEl) {
    const activeChannels = [
      ['GitHub', L.github],
      ['LinkedIn', L.linkedin],
      ['Instagram', L.instagram]
    ].filter(([, url]) => Boolean(url));

    socEl.innerHTML = activeChannels.map(([name, url]) =>
      `<a href="${url}" rel="noopener noreferrer" target="_blank" data-mag>${name} ↗</a>`
    ).join('');
  }

  // GLOBAL NAVIGATION & INDEX DRAWER
  const menuEl = $('#menu');
  if (menuEl && N.nav) {
    menuEl.innerHTML = N.nav.map((n, i) =>
      `<a href="${n[1]}"><small>0${i + 1}</small>${n[0]}</a>`
    ).join('');
  }

  const indexEl = $('#index');
  if (indexEl && N.index) {
    indexEl.innerHTML = N.index.map((n) =>
      `<a href="${n[1]}" data-h="${n[1]}">${n[0]}</a>`
    ).join('');
  }

  // MENU & INDEX ACCESSIBLE CONTROLS
  const mb = $('#burger'), mn = $('#menu'), ix = $('#index'), bi = $('#ix');

  function toggleMenu(open) {
    if (!mn || !mb) return;
    mn.classList.toggle('open', open);
    mb.setAttribute('aria-expanded', open);
    mb.textContent = open ? 'Close' : 'Menu';
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (mb) mb.onclick = () => toggleMenu(!mn.classList.contains('open'));
  if (mn) mn.onclick = (e) => {
    if (e.target.closest('a')) toggleMenu(false);
  };

  if (bi && ix) {
    bi.onclick = () => {
      const open = ix.classList.toggle('open');
      bi.setAttribute('aria-expanded', open);
      bi.textContent = open ? 'Index −' : 'Index +';
    };
    ix.onclick = (e) => {
      if (e.target.closest('a')) {
        ix.classList.remove('open');
        bi.setAttribute('aria-expanded', false);
        bi.textContent = 'Index +';
      }
    };
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleMenu(false);
      if (ix && bi) {
        ix.classList.remove('open');
        bi.setAttribute('aria-expanded', false);
        bi.textContent = 'Index +';
      }
    }
  });

  // TELEMETRY SECTION OBSERVER (Tracks active system coordinates)
  const secs = [...document.querySelectorAll('section[data-l]')];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = '#' + entry.target.id;
      const lbl = $('#lbl');
      if (lbl) lbl.textContent = 'System / ' + entry.target.dataset.l;

      document.querySelectorAll('#index a').forEach((a) => {
        a.classList.toggle('on', a.getAttribute('href') === id);
      });
      document.querySelectorAll('.nl').forEach((a) => {
        a.classList.toggle('on', a.getAttribute('href') === id);
      });
    });
  }, { rootMargin: '-40% 0px -45% 0px' });

  secs.forEach(s => io.observe(s));
})();
