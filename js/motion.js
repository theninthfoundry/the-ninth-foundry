/* THE NINTH FOUNDRY — MOTION & KINEMATIC CHOREOGRAPHY
   Engineered using GSAP 3.12.5 + ScrollTrigger.
   Hidden states are bound via JavaScript so layout renders complete without JS or with reduced motion. */

(function () {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const intro = $('#intro');

  // Fallback: If GSAP is missing or user prefers reduced motion, bypass animations
  if (!window.gsap || !window.ScrollTrigger || rm) {
    if (intro) intro.remove();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.style.scrollBehavior = 'smooth';

  // Helper to split text glyphs into animated spans
  const chars = el => {
    el.innerHTML = [...el.textContent].map(c => `<span class="ch">${c}</span>`).join('');
    return $$('.ch', el);
  };

  /* ---------- HERO ENTRANCE (Paused initially, executed when intro reveals) ---------- */
  const heroC = $$('.hero-name .split').flatMap(chars);
  const hero = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })
    .from(heroC, { yPercent: 118, duration: 1.1, stagger: 0.035 }, 0)
    .fromTo('.portrait .art', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.3, ease: 'power3.inOut' }, 0.15)
    .from('.portrait .art img', { scale: 1.25, duration: 1.6 }, 0.15)
    .from('.hero-meta > *, .hero-sub, .hero-foot > *', { opacity: 0, y: 14, stagger: 0.08, duration: 0.8 }, 0.6)
    .from('.hero-rule', { scaleX: 0, transformOrigin: 'left', duration: 1.3, ease: 'power3.inOut' }, 0.4)
    .from('.portrait .anno', { opacity: 0, x: -12, stagger: 0.2, duration: 0.8 }, 1.2);

  /* ---------- 00 — OPENING: Crisp Vector Assembly & Iris Mask Reveal (1.1s Total) ---------- */
  let seen = false;
  try {
    seen = sessionStorage.getItem('nf');
  } catch (e) {}

  if (seen) {
    if (intro) intro.remove();
    hero.timeScale(1.6).play();
  } else {
    const cx = innerWidth / 2 - 170 + 22;
    const cy = innerHeight / 2;
    const X = cx - 22;
    const Y = cy - 42;

    gsap.set(['#hole', '#lstroke'], { x: X, y: Y });
    gsap.set('#hole', { scale: 0, svgOrigin: `${cx} ${cy}` });
    gsap.set('#iring', { attr: { cx, cy }, opacity: 0 });

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        if (intro) intro.remove();
        try {
          sessionStorage.setItem('nf', '1');
        } catch (e) {}
      }
    });

    tl.fromTo('#lstroke', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.inOut' }, 0.1)
      .fromTo('.iname b', { yPercent: 112 }, { yPercent: 0, duration: 0.6 }, 0.3)
      .from('.iname i', { opacity: 0, duration: 0.4 }, 0.5)
      .to('#iring', { opacity: 1, duration: 0.3 }, 0.4)
      .to('#iring', { rotation: 360, svgOrigin: `${cx} ${cy}`, duration: 1.6, ease: 'none' }, 0.4)
      .fromTo('.iline', { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power3.inOut' }, 0.45)
      .addLabel('open', 0.8)
      .set('#hole', { scale: 1 }, 'open')
      .to(['.iw', '#lstroke', '#iring', '.ib', '#skip'], { opacity: 0, duration: 0.25, ease: 'none' }, 'open')
      .to('#hole', { scale: 110, duration: 0.6, ease: 'power3.in' }, 'open+=0.05')
      .add(() => hero.play(), 'open+=0.25');

    const skipBtn = $('#skip');
    if (skipBtn) {
      skipBtn.onclick = () => tl.timeScale(4);
    }
  }

  /* ---------- TELEMETRY PROGRESS & MANIFESTO BACKGROUND SHIFT ---------- */
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: s => {
      gsap.set('#prog', { scaleX: s.progress });
      const pc = $('#pc');
      if (pc) pc.textContent = Math.round(s.progress * 100);
    }
  });

  gsap.fromTo('#manifesto',
    { backgroundColor: '#111110', color: '#F8F7F3' },
    {
      backgroundColor: '#EAE7DF',
      color: '#171715',
      ease: 'none',
      scrollTrigger: {
        trigger: '#manifesto',
        start: 'top 92%',
        end: 'top 22%',
        scrub: true
      }
    }
  );

  gsap.from('.vl', {
    scaleY: 0,
    transformOrigin: 'top',
    ease: 'none',
    scrollTrigger: {
      trigger: '#manifesto',
      start: 'top 60%',
      end: 'bottom 70%',
      scrub: true
    }
  });

  /* ---------- HERO SCROLL SCRUBBING ---------- */
  gsap.timeline({
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })
    .to('.hero-name', { yPercent: -24, ease: 'none' }, 0)
    .to('.portrait', { yPercent: -10, ease: 'none' }, 0)
    .to('.portrait .art', { scale: 1.12, ease: 'none' }, 0)
    .to('.hero-sub, .hero-meta', { opacity: 0, ease: 'none' }, 0);

  /* ---------- EDITORIAL TEXT LINE REVEALS ---------- */
  $$('.rl').forEach(h =>
    gsap.from($$('.ln > span', h), {
      yPercent: 112,
      duration: 1.0,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: h, start: 'top 84%', once: true }
    })
  );

  $$('.rv, [data-reveal]').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 1.0,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true }
    });
    const a = $('.art', el);
    if (a && el.matches('.pj')) {
      gsap.from(a, {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    }
  });

  gsap.from('.five span', {
    opacity: 0.08,
    yPercent: 45,
    stagger: 0.2,
    ease: 'none',
    scrollTrigger: { trigger: '.five', start: 'top 88%', end: 'bottom 62%', scrub: true }
  });

  gsap.to('.mq .tr', {
    xPercent: -38,
    ease: 'none',
    scrollTrigger: { trigger: '.mq', start: 'top bottom', end: 'bottom top', scrub: 0.6 }
  });

  /* ---------- SPATIAL PARALLAX & PORTRAIT FRAMING ---------- */
  $$('.art img').forEach(i =>
    gsap.fromTo(i, { yPercent: -5 }, {
      yPercent: 5,
      ease: 'none',
      scrollTrigger: { trigger: i.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
    })
  );

  gsap.fromTo('.pt .art',
    { clipPath: 'inset(9% 9% 9% 9%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      ease: 'none',
      scrollTrigger: { trigger: '.pt', start: 'top 85%', end: 'center 45%', scrub: true }
    }
  );

  gsap.from('.pt .anno', {
    opacity: 0,
    x: 24,
    scrollTrigger: { trigger: '.pt', start: 'top 55%', once: true }
  });

  /* ---------- KINEMATIC MECHANICAL WHEEL ---------- */
  const wheel = $('#wheel'), track = $('#track');
  if (wheel && track) {
    ScrollTrigger.create({
      trigger: track,
      start: 'top 88%',
      end: 'bottom 30%',
      scrub: true,
      onUpdate: s => {
        const p = s.progress;
        const W = track.clientWidth - wheel.clientWidth;
        const x = p * W;
        const R = wheel.clientWidth * 0.49;
        gsap.set(wheel, { x });
        gsap.set('#wg', { rotation: (x / R) * 57.2958, svgOrigin: '100 100' });
        $$('.wl').forEach(l => gsap.set(l, { opacity: Math.max(0, 1 - Math.abs(p - Number(l.dataset.p)) * 9) }));
        $$('.tk').forEach(t => t.classList.toggle('on', p >= Number(t.dataset.at) - 0.03 && p < (Number(t.dataset.at) + 0.3)));
      }
    });
  }

  /* ---------- FINE-POINTER INTERACTIONS (Hover Shaders, Preview, Magnetics) ---------- */
  if (fine) {
    // Project Hover Displacement Shader
    $$('.pj').forEach(p => {
      const a = $('.art', p), im = $('img', a);
      p.addEventListener('mouseenter', () => {
        a.classList.add('hov');
        gsap.to('#dm', { attr: { scale: 34 }, duration: 0.45, ease: 'power2.out' });
        gsap.to(im || a, { scale: 1.025, duration: 0.9, ease: 'power3.out' });
      });
      p.addEventListener('mouseleave', () => {
        gsap.to('#dm', {
          attr: { scale: 0 },
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => a.classList.remove('hov')
        });
        gsap.to(im || a, { scale: 1, duration: 0.9, ease: 'power3.out' });
      });
    });

    // Floating Preview Card with Viewport Boundary Clamping
    const pv = $('#pv');
    if (pv) {
      const pi = $('img', pv);
      const px = gsap.quickTo(pv, 'x', { duration: 0.45, ease: 'power3' });
      const py = gsap.quickTo(pv, 'y', { duration: 0.45, ease: 'power3' });

      $$('.row').forEach(r => {
        r.addEventListener('mouseenter', () => {
          const s = r.dataset.img;
          if (pi) {
            pi.style.display = '';
            pi.src = s ? 'assets/images/' + s : '';
          }
          const b = $('b', r);
          if (b) pv.dataset.ph = b.textContent;
          gsap.to(pv, { opacity: 1, scale: 1, duration: 0.35 });
        });
        r.addEventListener('mouseleave', () => {
          gsap.to(pv, { opacity: 0, scale: 0.92, duration: 0.25 });
        });
      });

      addEventListener('mousemove', e => {
        const clampedX = Math.min(e.clientX + 28, window.innerWidth - 300);
        const clampedY = Math.max(20, Math.min(e.clientY - 90, window.innerHeight - 240));
        px(clampedX);
        py(clampedY);
      });
      gsap.set(pv, { scale: 0.92 });
    }

    // Precision Vernier Cursor
    const c = $('#cur');
    if (c) {
      const cx = gsap.quickTo(c, 'x', { duration: 0.25 });
      const cy = gsap.quickTo(c, 'y', { duration: 0.25 });
      addEventListener('mousemove', e => {
        cx(e.clientX + 46);
        cy(e.clientY + 4);
      });
      document.addEventListener('mouseover', e => {
        const t = e.target.closest('[data-cursor]');
        c.textContent = t ? t.dataset.cursor : '';
        gsap.to(c, { opacity: t ? 1 : 0, duration: 0.25 });
      });
    }

    // Hero Pointer Coordinates & Parallax
    const hs = $('#hero');
    if (hs) {
      const qx = gsap.quickTo('.portrait', 'x', { duration: 0.9, ease: 'power3' });
      const qy = gsap.quickTo('.portrait', 'y', { duration: 0.9, ease: 'power3' });
      const nx = gsap.quickTo('.hero-name', 'x', { duration: 1.1, ease: 'power3' });
      hs.addEventListener('mousemove', e => {
        const x = e.clientX / innerWidth - 0.5;
        const y = e.clientY / innerHeight - 0.5;
        qx(x * -26);
        qy(y * -18);
        nx(x * 10);
        const co = $('#co');
        if (co) co.textContent = `X ${(x * 100).toFixed(2)} · Y ${(y * 100).toFixed(2)}`;
      });
    }

    // Magnetic Elements with Damped Elastic Settling
    $$('[data-mag]').forEach(m => {
      const mx = gsap.quickTo(m, 'x', { duration: 0.5, ease: 'power3' });
      const my = gsap.quickTo(m, 'y', { duration: 0.5, ease: 'power3' });
      m.addEventListener('mousemove', e => {
        const r = m.getBoundingClientRect();
        mx((e.clientX - r.left - r.width / 2) * 0.3);
        my((e.clientY - r.top - r.height / 2) * 0.3);
      });
      m.addEventListener('mouseleave', () => {
        gsap.to(m, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1.1, 0.4)' });
      });
    });
  }

  /* ---------- CONTINUOUS TRANSMISSION LASER PULSE ---------- */
  gsap.to('.road i', { left: '100%', duration: 7, ease: 'none', repeat: -1 });

  addEventListener('load', () => ScrollTrigger.refresh());
})();
