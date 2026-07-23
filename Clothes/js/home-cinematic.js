(() => {
  'use strict';

  /**
   * Director's Notes — ATELIER NOIR Homepage Cinematic v2
   * 1. Opening shot: the hero film slowly enlarges while the wordmark appears character by character, like a title card entering focus.
   * 2. Manifesto: the black pinned room holds one sentence; each word brightens on scroll, turning silence into material.
   * 3. Film strip: six product frames travel horizontally through a pinned 35mm track, then Flip into a quickview when opened.
   * 4. Cinematographer's scroll: a sticky viewfinder cuts between editorial scenes, flashes its shutter, shakes lightly, and advances timecode with scroll.
   * 5. Fabric physics: three garments breathe with an SVG displacement filter and reveal their traceability path as hand-drawn lines.
   * 6. Intentions: counter-moving typography loops with GSAP modifiers and slows under the visitor's hand.
   * 7. Atelier live: b-roll and rotating feed cards turn commerce into a live craft signal from Tehran.
   * 8. Stylist invitation: English and Farsi questions exchange presence every four seconds; the CTA behaves magnetically.
   * 9. Footer prologue: the wordmark grows into the frame and closes like a shutter so the footer can surface.
   */

  const ready = (fn) => {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
    else fn();
  };

  ready(() => {
    if (document.body.dataset.page !== 'home') return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger, window.Observer, window.CustomEase, window.Flip, window.MotionPathPlugin);
    ScrollTrigger.config({ ignoreMobileResize: true });
    if (window.CustomEase) CustomEase.create('film', 'M0,0 C0.2,0 0.1,1 1,1');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const data = window.ATELIER_DATA || { brand: { currencyRate: 62000, tagline: { en: 'Wear the Silence.', fa: 'سکوت را بپوش.' } }, products: [] };
    const locale = () => localStorage.getItem('atelier-locale') || 'en';
    const isFa = () => locale() === 'fa';
    const dir = () => (document.body.dir === 'rtl' || isFa()) ? -1 : 1;
    const q = (sel, root = document) => root.querySelector(sel);
    const qa = (sel, root = document) => gsap.utils.toArray(sel, root);

    const copy = {
      en: {
        enter: 'Enter', trace: 'Trace', nowCutting: 'Now cutting', tehran: 'Tehran', localTime: 'local time',
        manifestoEyebrow: 'Manifesto / Silence as material', manifestoLine: 'Garments that enter the room before you do.',
        filmStripEyebrow: 'Signature edit / Six frames', filmStripTitle: 'A collection projected as film.',
        cinematographerEyebrow: "Cinematographer's scroll", cinematographerTitle: 'The camera learns the garment.',
        sceneOne: 'Ivory light. A coat holds the doorframe like architecture.', sceneTwo: 'Shadow crosses silk; the silhouette answers without volume.',
        sceneThree: 'A champagne trench cuts through air, never through attention.', sceneFour: 'The final frame: marble, breath, restraint.',
        fabricPhysicsEyebrow: 'Fabric physics / Traceable craft', fabricPhysicsTitle: 'Cloth remembers every hand.',
        atelierLiveEyebrow: 'The atelier live', atelierLiveTitle: 'A pulse from the cutting table.',
        footerPrologueEyebrow: 'Prologue / Continue', footerPrologueTitle: 'The film closes. The fitting begins.'
      },
      fa: {
        enter: 'ورود', trace: 'ردیابی', nowCutting: 'در حال برش', tehran: 'تهران', localTime: 'زمان محلی',
        manifestoEyebrow: 'مانیفست / سکوت به‌عنوان ماده', manifestoLine: 'لباس‌هایی که پیش از شما وارد اتاق می‌شوند.',
        filmStripEyebrow: 'ادیت شاخص / شش فریم', filmStripTitle: 'کالکشنی که مانند فیلم نمایش داده می‌شود.',
        cinematographerEyebrow: 'اسکرول فیلم‌بردار', cinematographerTitle: 'دوربین، لباس را یاد می‌گیرد.',
        sceneOne: 'نور عاجی. کت، چارچوب در را مانند معماری نگه می‌دارد.', sceneTwo: 'سایه از ابریشم می‌گذرد؛ سیلوئت بی‌صدا پاسخ می‌دهد.',
        sceneThree: 'ترنچ شامپاینی هوا را می‌شکافد، نه توجه را.', sceneFour: 'فریم آخر: مرمر، نفس، خویشتن‌داری.',
        fabricPhysicsEyebrow: 'فیزیک پارچه / ساخت قابل ردیابی', fabricPhysicsTitle: 'پارچه هر دست را به خاطر می‌سپارد.',
        atelierLiveEyebrow: 'آتلیه زنده', atelierLiveTitle: 'نبضی از میز برش.',
        footerPrologueEyebrow: 'پرولوگ / ادامه', footerPrologueTitle: 'فیلم بسته می‌شود. پرو آغاز می‌شود.'
      }
    };
    const tr = (key) => (copy[locale()] && copy[locale()][key]) || key;
    const digits = (value) => isFa() ? String(value).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]) : String(value);
    const money = (usd) => isFa() ? `${digits(Math.round(usd * data.brand.currencyRate).toLocaleString('fa-IR'))} تومان` : `$${usd.toLocaleString('en-US')} USD`;
    const localName = (p) => (p.name && (p.name[locale()] || p.name.en)) || '';
    const productHref = (slug) => `shop/product/?slug=${encodeURIComponent(slug)}`;

    if (reduced) {
      document.body.classList.add('reduced-motion');
      if (window.lenis && window.lenis.destroy) window.lenis.destroy();
    } else if (window.lenis) {
      window.lenis.on('scroll', ScrollTrigger.update);
    }

    injectProgress();
    applyHomeCopy();
    renderFilmStrip();
    renderFabricCards();
    renderAtelierFeed();
    setupLazyMedia();
    setupCursorEnhancement();
    setupMagneticButtons();
    setupImageReveals();
    setupHeadingReveals();
    setupHero();
    setupManifesto();
    setupFilmStrip();
    setupCinematographer();
    setupFabricPhysics();
    setupIntentions();
    setupAtelierLive();
    setupStylistMorph();
    setupFooterPrologue();
    setupObserverNudges();

    setTimeout(() => ScrollTrigger.refresh(), 300);
    document.addEventListener('click', (event) => {
      if (event.target.closest('.lang-pill button')) setTimeout(refreshLanguage, 760);
    });

    function refreshLanguage() {
      applyHomeCopy();
      renderFilmStrip();
      renderFabricCards();
      renderAtelierFeed();
      setupFabricPhysics(true);
      ScrollTrigger.refresh();
    }

    function applyHomeCopy() {
      qa('[data-i18n]', q('#home-cinematic')).forEach(el => {
        const key = el.dataset.i18n;
        if (copy[locale()] && copy[locale()][key]) el.textContent = tr(key);
      });
      const tagline = q('#hero-tagline');
      if (tagline) tagline.textContent = data.brand.tagline[locale()] || data.brand.tagline.en;
    }

    function splitText(el, mode = 'chars') {
      if (!el || el.dataset.homeSplit === mode) return collectSplit(el, mode);
      const text = el.textContent.trim().replace(/\s+/g, ' ');
      el.textContent = '';
      const words = text.split(' ');
      const chars = [];
      const wordEls = [];
      words.forEach((word, wi) => {
        const wordEl = document.createElement('span');
        wordEl.className = mode === 'manifesto' ? 'manifesto-word split-word' : 'split-word';
        wordEl.setAttribute('aria-hidden', 'true');
        [...word].forEach(char => {
          const charEl = document.createElement('span');
          charEl.className = 'split-char';
          charEl.textContent = char;
          wordEl.appendChild(charEl);
          chars.push(charEl);
        });
        el.appendChild(wordEl);
        wordEls.push(wordEl);
        if (wi < words.length - 1) el.appendChild(document.createTextNode(' '));
      });
      el.setAttribute('aria-label', text);
      el.dataset.homeSplit = mode;
      el._homeSplit = { chars, words: wordEls };
      return el._homeSplit;
    }

    function collectSplit(el) {
      return el._homeSplit || { chars: qa('.split-char', el), words: qa('.split-word', el) };
    }

    function injectProgress() {
      if (q('.scroll-progress')) return;
      const line = document.createElement('div');
      line.className = 'scroll-progress';
      document.body.appendChild(line);
      gsap.to(line, { height: '100vh', ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: reduced ? false : .2 } });
    }

    function renderFilmStrip() {
      const track = q('#film-track');
      if (!track) return;
      track.innerHTML = data.products.slice(0, 6).map((p, index) => `
        <article class="film-cell" data-slug="${p.slug}" data-cursor="OPEN">
          <a class="film-cell-link" href="${productHref(p.slug)}" aria-label="${localName(p)}">
            <figure class="film-cell-media"><img src="${p.image}" alt="${localName(p)} editorial frame" loading="lazy"></figure>
            <div class="film-cell-body">
              <div class="film-cell-meta"><span>${String(index + 1).padStart(2, '0')}</span><span>${money(p.price)}</span><span>${tr('enter')}</span></div>
              <h3>${localName(p)}</h3>
            </div>
          </a>
        </article>${index < 5 ? '<div class="film-sprocket" aria-hidden="true"></div>' : ''}
      `).join('');
      bindFilmCards();
    }

    function bindFilmCards() {
      qa('.film-cell').forEach(card => {
        const media = q('.film-cell-media', card);
        const img = q('img', card);
        const title = q('h3', card);
        card.addEventListener('mouseenter', () => {
          gsap.to(media, { clipPath: 'polygon(4% 0, 100% 5%, 96% 96%, 0 100%)', duration: .8, ease: 'film' });
          gsap.to(img, { scale: 1.05, duration: 1.1, ease: 'expo.out' });
          const split = splitText(title);
          gsap.fromTo(split.chars, { yPercent: 105, rotateX: -50, opacity: 0 }, { yPercent: 0, rotateX: 0, opacity: 1, stagger: .018, duration: .7, ease: 'expo.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(media, { clipPath: 'polygon(0 4%, 100% 0, 96% 100%, 4% 96%)', duration: .8, ease: 'film' });
          gsap.to(img, { scale: 1.01, duration: 1.1, ease: 'expo.out' });
        });
        q('.film-cell-link', card)?.addEventListener('click', event => {
          event.preventDefault();
          const product = data.products.find(p => p.slug === card.dataset.slug);
          if (product) openHomeQuickview(product, card);
        });
      });
    }

    function renderFabricCards() {
      const grid = q('#fabric-grid');
      if (!grid) return;
      grid.innerHTML = data.products.slice(0, 3).map(p => `
        <article class="fabric-card" data-cursor="${tr('trace')}">
          <img src="${p.image}" alt="${localName(p)} fabric movement" loading="lazy">
          <div class="fabric-card-body">
            <p class="eyebrow">${p.fabric} / ${p.origin}</p>
            <h3>${localName(p)}</h3>
            <div class="trace-timeline" aria-label="${tr('trace')}">
              ${p.trace.map(node => `<div class="trace-step"><svg viewBox="0 0 44 10" aria-hidden="true"><path d="M1 5 H36 L43 5"></path></svg><span>${node}</span></div>`).join('')}
            </div>
          </div>
        </article>
      `).join('');
    }

    function renderAtelierFeed() {
      const stack = q('#feed-card-stack');
      if (!stack) return;
      stack.innerHTML = data.products.slice(0, 3).map((p, i) => `
        <article class="feed-card ${i === 0 ? 'is-active' : ''}">
          <span>${tr('nowCutting')}</span>
          <strong>${localName(p)}</strong>
          <span>${tr('tehran')} / <time data-tehran-time>--:--</time> ${tr('localTime')}</span>
        </article>
      `).join('');
    }

    function setupLazyMedia() {
      const videos = qa('[data-lazy-video]');
      if (!videos.length) return;
      const loadVideo = (video) => {
        if (video.dataset.loaded) return;
        const source = document.createElement('source');
        source.src = video.dataset.lazyVideo;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.dataset.loaded = 'true';
        video.load();
        video.play().catch(() => {});
      };
      if (!('IntersectionObserver' in window)) return videos.forEach(loadVideo);
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadVideo(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '320px' });
      videos.forEach(video => io.observe(video));
    }

    function setupHero() {
      const title = q('.hero-title');
      if (title) {
        const split = splitText(title);
        gsap.set(split.chars, { transformPerspective: 900, transformOrigin: '50% 100%' });
        gsap.from(split.chars, { yPercent: 110, skewY: 7, rotationX: -40, opacity: 0, stagger: .03, ease: 'expo.out', duration: 1.4, delay: .35, clearProps: 'willChange' });
      }
      if (!reduced) {
        gsap.to('.hero-video-wrap', { scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.home-hero', start: 'top top', end: 'bottom top', scrub: true } });
        gsap.to('[data-marquee="hero"]', { xPercent: -50 * dir(), ease: 'none', scrollTrigger: { trigger: '.home-hero', start: 'top top', end: 'bottom top', scrub: true } });
      }
    }

    function setupManifesto() {
      const title = q('[data-manifesto]');
      if (!title) return;
      const split = splitText(title, 'manifesto');
      if (reduced) return gsap.set(split.words, { color: '#F5F1EA' });
      gsap.timeline({ scrollTrigger: { trigger: '.manifesto-reveal', start: 'top top', end: '+=150%', scrub: true, pin: '.manifesto-pin' } })
        .to(split.words, { color: '#F5F1EA', opacity: 1, y: 0, stagger: .18, ease: 'none' }, 0);
      gsap.to('.manifesto-streak', { x: () => `${dir() * 140}vw`, ease: 'none', scrollTrigger: { trigger: '.manifesto-reveal', start: 'top top', end: 'bottom bottom', scrub: true } });
      gsap.to('.manifesto-noise', { backgroundPosition: '120px -180px', ease: 'none', scrollTrigger: { trigger: '.manifesto-reveal', start: 'top top', end: 'bottom bottom', scrub: true } });
    }

    function setupFilmStrip() {
      const track = q('#film-track');
      if (!track || reduced) return;
      ScrollTrigger.create({
        trigger: '.film-strip-section',
        start: 'top top',
        end: () => `+=${Math.max(900, track.scrollWidth - innerWidth + 420)}`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        animation: gsap.to(track, { x: () => -Math.max(0, track.scrollWidth - innerWidth + 160) * dir(), ease: 'none' })
      });
    }

    function setupCinematographer() {
      const vfMedia = q('#viewfinder-media');
      const flash = q('#shutter-flash');
      const vf = q('#viewfinder');
      const scenes = qa('.scene-card');
      if (!vfMedia || !scenes.length) return;
      vfMedia.innerHTML = scenes.map((scene, i) => {
        const img = q('img', scene);
        return `<img class="${i === 0 ? 'is-active' : ''}" src="${img.src}" alt="" aria-hidden="true">`;
      }).join('');
      const vfImages = qa('img', vfMedia);
      const setScene = (index) => {
        vfImages.forEach((img, i) => gsap.to(img, { opacity: i === index ? 1 : 0, duration: .42, ease: 'power2.out' }));
        if (!reduced) {
          gsap.fromTo(flash, { opacity: .8 }, { opacity: 0, duration: .06, ease: 'power1.out' });
          gsap.fromTo(vf, { x: gsap.utils.random(-3, 3), y: gsap.utils.random(-3, 3) }, { x: 0, y: 0, duration: .18, ease: 'expo.out' });
        }
      };
      scenes.forEach((scene, index) => {
        ScrollTrigger.create({ trigger: scene, start: 'top 58%', end: 'bottom 42%', onEnter: () => setScene(index), onEnterBack: () => setScene(index) });
      });
      const counter = { frame: 0 };
      gsap.to(counter, {
        frame: 8640,
        ease: 'none',
        scrollTrigger: { trigger: '.cinematographer-section', start: 'top top', end: 'bottom bottom', scrub: reduced ? false : true },
        onUpdate: () => updateTimecode(counter.frame)
      });
    }

    function updateTimecode(frame) {
      const el = q('#timecode');
      if (!el) return;
      const fps = 24;
      const total = Math.floor(frame);
      const ff = total % fps;
      const seconds = Math.floor(total / fps);
      const ss = seconds % 60;
      const mm = Math.floor(seconds / 60) % 60;
      const hh = Math.floor(seconds / 3600);
      el.textContent = [hh, mm, ss, ff].map(v => String(v).padStart(2, '0')).join(':');
    }

    function setupFabricPhysics(rebind = false) {
      const turbulence = q('#fabric-ripple-filter feTurbulence');
      const displacement = q('#fabric-ripple-filter feDisplacementMap');
      qa('.fabric-card').forEach(card => {
        if (card.dataset.fabricBound && !rebind) return;
        card.dataset.fabricBound = 'true';
        const timeline = q('.trace-timeline', card);
        const paths = qa('.trace-step path', card);
        card.addEventListener('mouseenter', () => {
          if (!reduced) {
            gsap.to(turbulence, { attr: { baseFrequency: .03 }, duration: .7, ease: 'expo.out' });
            gsap.to(displacement, { attr: { scale: 18 }, duration: .7, ease: 'expo.out' });
          }
          gsap.to(timeline, { maxHeight: 240, opacity: 1, duration: .7, ease: 'expo.out' });
          gsap.to(paths, { strokeDashoffset: 0, stagger: .08, duration: .7, ease: 'expo.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(turbulence, { attr: { baseFrequency: .01 }, duration: .7, ease: 'expo.out' });
          gsap.to(displacement, { attr: { scale: 0 }, duration: .7, ease: 'expo.out' });
          gsap.to(timeline, { maxHeight: 0, opacity: 0, duration: .45, ease: 'power2.out' });
          gsap.set(paths, { strokeDashoffset: 44, delay: .45 });
        });
      });
    }

    function setupIntentions() {
      const marquees = qa('.intention-marquee');
      if (!marquees.length || reduced) return;
      marquees.forEach((marquee, index) => {
        const direction = index === 0 ? -1 : 1;
        const tl = gsap.to(marquee, { xPercent: 50 * direction * dir(), duration: 18, ease: 'none', repeat: -1, modifiers: { xPercent: gsap.utils.wrap(-50, 0) } });
        marquee.parentElement.addEventListener('mouseenter', () => gsap.to(tl, { timeScale: .2, duration: .5, ease: 'power2.out' }));
        marquee.parentElement.addEventListener('mouseleave', () => gsap.to(tl, { timeScale: 1, duration: .5, ease: 'power2.out' }));
      });
    }

    function setupAtelierLive() {
      const formatter = new Intl.DateTimeFormat(isFa() ? 'fa-IR' : 'en-US', { timeZone: 'Asia/Tehran', hour: '2-digit', minute: '2-digit', hour12: false });
      const tick = () => qa('[data-tehran-time]').forEach(time => { time.textContent = formatter.format(new Date()); });
      tick();
      setInterval(tick, 1000);
      const cards = qa('.feed-card');
      if (!cards.length || reduced) return;
      let index = 0;
      setInterval(() => {
        cards[index].classList.remove('is-active');
        gsap.to(cards[index], { opacity: .46, x: 0, duration: .45, ease: 'power2.out' });
        index = (index + 1) % cards.length;
        cards[index].classList.add('is-active');
        gsap.fromTo(cards[index], { opacity: .5, x: 20 * dir() }, { opacity: 1, x: 0, duration: .65, ease: 'expo.out' });
      }, 3200);
    }

    function setupStylistMorph() {
      const titles = qa('#stylist-question .display');
      if (titles.length < 2 || reduced) return;
      titles.forEach(title => splitText(title));
      let active = 0;
      setInterval(() => {
        const current = titles[active];
        active = (active + 1) % titles.length;
        const next = titles[active];
        current.classList.remove('is-active');
        next.classList.add('is-active');
        gsap.fromTo(qa('.split-char', next), { opacity: 0, yPercent: 70, rotationX: -60 }, { opacity: 1, yPercent: 0, rotationX: 0, stagger: .025, duration: .85, ease: 'expo.out' });
        gsap.to(qa('.split-char', current), { opacity: 0, yPercent: -50, stagger: .012, duration: .45, ease: 'power2.in' });
      }, 4000);
      setupButtonMagnet(q('#stylist-magnetic'), 60, .32);
    }

    function setupFooterPrologue() {
      const mark = q('#footer-wordmark');
      if (!mark || reduced) return;
      gsap.timeline({ scrollTrigger: { trigger: '.footer-prologue', start: 'top top', end: 'bottom bottom', scrub: true, pin: mark, pinSpacing: false } })
        .to(mark, { scale: () => Math.max(1, innerWidth / Math.max(1, mark.offsetWidth)), ease: 'none' }, 0)
        .to(mark, { clipPath: 'inset(0 50% 0 50%)', ease: 'none' }, .55)
        .to('.footer-emerge', { opacity: 1, y: -40, ease: 'none' }, .62);
    }

    function setupHeadingReveals() {
      qa('[data-split-heading]').forEach(heading => {
        if (heading.classList.contains('hero-title')) return;
        const split = splitText(heading);
        if (reduced) return gsap.set(split.chars, { opacity: 1 });
        gsap.from(split.chars, { opacity: 0, yPercent: 100, rotationX: -60, stagger: .018, duration: 1.05, ease: 'expo.out', scrollTrigger: { trigger: heading, start: 'top 82%', once: true } });
      });
    }

    function setupImageReveals() {
      qa('img', q('#home-cinematic')).forEach(img => {
        if (img.closest('.film-cell') || img.closest('.fabric-card') || img.closest('.viewfinder-media')) return;
        const fromClip = dir() === -1 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)';
        gsap.fromTo(img, { clipPath: fromClip }, { clipPath: 'inset(0 0% 0 0)', duration: reduced ? .01 : 1.4, ease: 'expo.out', scrollTrigger: { trigger: img, start: 'top 84%', once: true } });
      });
    }

    function setupMagneticButtons() {
      qa('.btn, button, .magnet', document).forEach(el => setupButtonMagnet(el, 80, .35));
    }

    function setupButtonMagnet(el, radius = 80, strength = .35) {
      if (!el || el.dataset.homeMagnet) return;
      el.dataset.homeMagnet = 'true';
      const xTo = gsap.quickTo(el, 'x', { duration: .45, ease: 'expo.out' });
      const yTo = gsap.quickTo(el, 'y', { duration: .45, ease: 'expo.out' });
      el.addEventListener('mousemove', event => {
        const rect = el.getBoundingClientRect();
        const dx = event.clientX - rect.left - rect.width / 2;
        const dy = event.clientY - rect.top - rect.height / 2;
        const dist = Math.hypot(dx, dy);
        if (dist < radius) { xTo(dx * strength); yTo(dy * strength); }
      });
      el.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
    }

    function setupCursorEnhancement() {
      const cursor = q('#cursor');
      if (!cursor) return;
      const scaleTo = gsap.quickTo(cursor, 'scale', { duration: .28, ease: 'expo.out' });
      document.addEventListener('mouseover', event => {
        const target = event.target.closest('[data-cursor]');
        if (!target) return;
        cursor.dataset.label = target.dataset.cursor || '';
        cursor.classList.toggle('is-play', /PLAY/.test(cursor.dataset.label));
        scaleTo(/PLAY|OPEN|ASK|REC/.test(cursor.dataset.label) ? 1.35 : 1);
      });
      document.addEventListener('mouseout', event => {
        if (event.target.closest('[data-cursor]')) {
          cursor.classList.remove('is-play');
          scaleTo(1);
        }
      });
      if (!reduced) gsap.to(cursor, { rotation: 360, duration: 6, repeat: -1, ease: 'none' });
    }

    function openHomeQuickview(product, sourceCard) {
      let modal = q('#home-quickview');
      if (!modal) {
        modal = document.createElement('aside');
        modal.id = 'home-quickview';
        modal.className = 'home-quickview';
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('role', 'dialog');
        document.body.appendChild(modal);
        modal.addEventListener('click', event => {
          if (event.target === modal || event.target.closest('[data-close-home-quickview]')) closeQuickview(modal);
        });
      }
      modal.innerHTML = `
        <button class="icon-btn home-quickview-close" data-close-home-quickview aria-label="Close">×</button>
        <article class="home-quickview-card">
          <figure class="home-quickview-media"><img src="${product.image}" alt="${localName(product)}"></figure>
          <div class="home-quickview-copy">
            <p class="eyebrow">${product.badge} / ${product.origin}</p>
            <h2 class="display">${localName(product)}</h2>
            <p class="lede">${product.story}</p>
            <p>${money(product.price)} · ${product.fabric} · ${digits(product.sustainability)}/100</p>
            <div class="cta-row"><button class="btn" data-home-cart="${product.slug}">Add to cart</button><a class="btn ghost" href="${productHref(product.slug)}">${tr('enter')}</a></div>
          </div>
        </article>`;
      const img = q('img', sourceCard);
      let state;
      if (window.Flip && img) {
        img.dataset.flipId = 'home-quickview-image';
        q('.home-quickview-media img', modal).dataset.flipId = 'home-quickview-image';
        state = Flip.getState(img);
      }
      modal.classList.add('open');
      gsap.to(modal, { opacity: 1, duration: .35, ease: 'power2.out' });
      if (state) Flip.from(state, { targets: q('.home-quickview-media img', modal), duration: .8, ease: 'expo.out', absolute: true });
      q('[data-home-cart]', modal)?.addEventListener('click', event => {
        const cart = JSON.parse(localStorage.getItem('atelier-cart') || '[]');
        cart.push(event.currentTarget.dataset.homeCart);
        localStorage.setItem('atelier-cart', JSON.stringify(cart));
        q('#cart-count') && (q('#cart-count').textContent = digits(cart.length));
      });
    }

    function closeQuickview(modal) {
      gsap.to(modal, { opacity: 0, duration: .28, ease: 'power2.out', onComplete: () => modal.classList.remove('open') });
    }

    function setupObserverNudges() {
      if (!window.Observer || reduced) return;
      Observer.create({
        target: window,
        type: 'wheel,touch',
        tolerance: 40,
        onDown: () => document.body.classList.add('is-scrolling-down'),
        onUp: () => document.body.classList.remove('is-scrolling-down')
      });
      if (window.MotionPathPlugin) {
        gsap.to('.live-dot', { motionPath: { path: [{ x: 0, y: 0 }, { x: 2, y: -2 }, { x: 0, y: 0 }] }, duration: 1.8, repeat: -1, ease: 'sine.inOut' });
      }
    }
  });
})();
