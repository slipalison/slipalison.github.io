/* ==========================================================================
   Alison Amorim — Monochrome Editorial · interações
   ========================================================================== */
(function () {
  'use strict';
  var D = window.SITE_DATA;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = localStorage.getItem('lang') || 'pt';
  function $(s) { return document.querySelector(s); }
  function el(t, c) { var n = document.createElement(t); if (c) n.className = c; return n; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  function pad2(n) { return ('0' + n).slice(-2); }

  /* ---------- i18n ---------- */
  var staticNodes = Array.prototype.slice.call(document.querySelectorAll('[data-en]'));
  staticNodes.forEach(function (n) { n.dataset.pt = n.innerHTML; });
  var ARIA = {
    pt: { carPrev: 'Anterior', carNext: 'Próximo', langSwitch: 'Idioma', nav: 'Seções' },
    en: { carPrev: 'Previous', carNext: 'Next', langSwitch: 'Language', nav: 'Sections' },
  };
  function applyStaticLang() {
    staticNodes.forEach(function (n) { n.innerHTML = (lang === 'en') ? n.dataset.en : n.dataset.pt; });
    document.documentElement.lang = (lang === 'en') ? 'en' : 'pt-BR';
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (o) { o.classList.toggle('on', o.dataset.lang === lang); });
    var a = ARIA[lang];
    $('#carPrev').setAttribute('aria-label', a.carPrev);
    $('#carNext').setAttribute('aria-label', a.carNext);
    $('#langSwitch').setAttribute('aria-label', a.langSwitch);
    $('.mast-nav').setAttribute('aria-label', a.nav);
  }

  /* ---------- ticker ---------- */
  var TICK = {
    pt: ['Principal Engineer', 'Arquitetura de Software', 'Sistemas Distribuídos', 'Mercado Financeiro', 'Match Engine', 'Baixa Latência', '.NET · C#', 'Go', 'Kubernetes', 'Fintech', 'IA & Agentes', 'Liderança Técnica'],
    en: ['Principal Engineer', 'Software Architecture', 'Distributed Systems', 'Capital Markets', 'Match Engine', 'Low Latency', '.NET · C#', 'Go', 'Kubernetes', 'Fintech', 'AI & Agents', 'Technical Leadership'],
  };
  function buildTicker() {
    var html = TICK[lang].map(function (t) { return '<span class="ticker-item">' + esc(t) + '</span>'; }).join('');
    $('#ticker').innerHTML = html + html;
  }

  /* ---------- pillars ---------- */
  function buildPillars() {
    var g = $('#pillarsGrid'); g.innerHTML = '';
    D.pillars.forEach(function (p, i) {
      var pill = el('div', 'pill reveal');
      pill.innerHTML =
        '<div class="pill-k">' + pad2(i + 1) + ' — ' + (lang === 'en' ? 'Pillar' : 'Pilar') + '</div>' +
        '<h3 class="pill-title">' + esc(lang === 'en' ? p.ke : p.k) + '</h3>' +
        '<p class="pill-text">' + esc(p[lang]) + '</p>';
      g.appendChild(pill);
    });
  }

  /* ---------- ledger ---------- */
  function buildLedger() {
    var g = $('#ledger'); g.innerHTML = '';
    D.experience.forEach(function (e) {
      var row = el('div', 'ledger-row reveal');
      var period = typeof e.period === 'object' ? e.period[lang] : e.period;
      var bullets = e.bullets[lang].map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('');
      var tags = e.tags.map(function (t) { return '<span class="lr-tag">' + esc(t) + '</span>'; }).join('');
      row.innerHTML =
        '<div class="lr-left"><div class="lr-period">' + esc(period) + '</div>' +
        '<div class="lr-company">' + esc(e.company) + '</div></div>' +
        '<div class="lr-right"><div class="lr-role">' + esc(e.role[lang]) + '</div>' +
        '<ul class="lr-bullets">' + bullets + '</ul><div class="lr-tags">' + tags + '</div></div>';
      g.appendChild(row);
    });
  }

  /* ---------- capabilities ---------- */
  function buildCaps() {
    var g = $('#caps'); g.innerHTML = '';
    D.stack.forEach(function (c) {
      var cap = el('div', 'cap reveal');
      var hi = (c.hi || []).map(function (x) { return '<b>' + esc(x) + '</b>'; });
      var items = hi.concat(c.items.map(esc)).join('<span class="sep">·</span>');
      cap.innerHTML = '<h3>' + esc(c[lang]) + '</h3><div class="cap-items">' + items + '</div>';
      g.appendChild(cap);
    });
  }

  /* ---------- works ---------- */
  function buildWorks() {
    var g = $('#works'); g.innerHTML = '';
    var list = D.projects.slice().sort(function (a, b) { return (b.feat ? 1 : 0) - (a.feat ? 1 : 0); });
    list.forEach(function (p, i) {
      var w = el('div', 'work reveal' + (p.feat ? ' is-feat' : ''));
      var url = 'https://github.com/slipalison/' + p.repo;
      var tag = p.feat ? '<span class="work-feat">' + (lang === 'en' ? 'Featured' : 'Destaque') + '</span>' : '';
      w.innerHTML =
        '<div class="work-top"><span class="work-name-wrap"><a class="work-name" href="' + url + '" target="_blank" rel="noopener">' + esc(p.name) + '</a>' + tag + '</span>' +
        '<span class="work-idx">' + pad2(i + 1) + ' / ' + pad2(list.length) + '</span></div>' +
        '<div class="work-lang">' + esc(p.lang) + ' <span class="star" data-repo="' + p.repo + '"></span></div>' +
        '<p class="work-desc">' + esc(p[lang]) + '</p>' +
        '<a class="work-go" href="' + url + '" target="_blank" rel="noopener">' + (lang === 'en' ? 'View repository ↗' : 'Ver repositório ↗') + '</a>';
      g.appendChild(w);
    });
  }

  /* ---------- writing: categories + carousel + toc ---------- */
  var CATS = [
    { k: 'all', pt: 'Todos', en: 'All' },
    { k: 'ia', pt: 'IA', en: 'AI' },
    { k: 'arq', pt: 'Arquitetura', en: 'Architecture' },
    { k: 'perf', pt: 'Performance', en: 'Performance' },
    { k: 'lid', pt: 'Liderança', en: 'Leadership' },
    { k: 'prat', pt: 'Práticas', en: 'Practices' },
  ];
  var CAT_BY_ID = {
    '7380968832477159425': 'perf', '7465692123263086593': 'ia', '7464604962849902592': 'ia', '7462792990118502400': 'ia',
    '7462068225753710592': 'ia', '7460256283770920960': 'ia', '7459531505548234752': 'ia', '7457719662966046722': 'ia',
    '7456994804002955265': 'ia', '7455182841866407936': 'ia', '7454458104118730752': 'ia', '7452646147682353152': 'ia',
    '7451921375780384768': 'ia', '7450109414692339712': 'ia', '7449384659542728704': 'ia', '7447672882652094465': 'ia',
    '7446847939034996736': 'ia', '7445035995772829696': 'ia', '7444386729945616384': 'ia', '7442499298451243009': 'ia',
    '7441774493506621440': 'ia', '7440324948180537344': 'ia', '7439237790359248896': 'ia', '7437425871776296960': 'arq',
    '7436701065523269632': 'ia', '7435251547556667392': 'ia', '7434164354264174592': 'prat', '7432745022711750656': 'lid',
    '7431360188315705345': 'prat', '7427286543200874496': 'lid', '7426561817923112960': 'arq', '7424013785729949696': 'arq',
    '7422209620221247488': 'arq', '7421507293244108800': 'perf', '7419729252608266240': 'arq', '7419004481562042368': 'arq',
    '7417554906703847424': 'arq', '7416467782470545410': 'prat', '7409582384301428736': 'arq', '7408857628145258496': 'arq',
    '7407019244066017280': 'arq', '7406294532847288320': 'prat', '7404871336420020224': 'prat', '7403784166904938498': 'perf',
    '7402334630705762304': 'perf', '7401247464290238465': 'perf', '7399435531232833536': 'perf', '7398710738774585344': 'perf',
    '7396898804299452416': 'perf', '7396177914918068225': 'perf', '7394354553325871104': 'prat', '7393629759127244800': 'perf',
    '7388560155245723648': 'perf', '7391825381588185088': 'perf', '7391100613368983554': 'prat', '7389368094160355328': 'prat',
    '7386751940594126848': 'lid', '7386027163155578880': 'perf', '7384215230072926208': 'ia', '7383490456132665344': 'perf',
    '7376034258471182336': 'ia', '7378111993569800192': 'perf',
  };
  function idOf(u) { var m = u.match(/(\d{6,})/); return m ? m[1] : ''; }
  function catOf(u) { return CAT_BY_ID[idOf(u)] || 'prat'; }
  function embedUrl(u) { return u.replace('/feed/update/', '/embed/feed/update/').replace(/\/$/, '') + '?collapsed=1'; }

  var artFilter = 'all', artPage = 0, lastPS;
  function pageSize() { return window.innerWidth < 900 ? 1 : 3; }
  function artList() { return artFilter === 'all' ? D.articles.all : D.articles.all.filter(function (a) { return catOf(a.u) === artFilter; }); }
  function artPages() { return Math.max(1, Math.ceil(artList().length / pageSize())); }

  function buildCats() {
    var g = $('#artCats'); g.innerHTML = '';
    CATS.forEach(function (c) {
      var n = c.k === 'all' ? D.articles.all.length : D.articles.all.filter(function (a) { return catOf(a.u) === c.k; }).length;
      var b = el('button', 'art-cat' + (c.k === artFilter ? ' on' : ''));
      b.setAttribute('aria-pressed', c.k === artFilter ? 'true' : 'false');
      b.innerHTML = esc(c[lang]) + ' <span class="ac-n">' + n + '</span>';
      b.addEventListener('click', function () { artFilter = c.k; artPage = 0; buildCats(); buildCarousel(); });
      g.appendChild(b);
    });
  }
  function buildCarousel() {
    var track = $('#carTrack'); track.innerHTML = '';
    var list = artList(), ps = pageSize(), pages = Math.max(1, Math.ceil(list.length / ps));
    if (artPage >= pages) artPage = 0;
    list.slice(artPage * ps, artPage * ps + ps).forEach(function (a) {
      var cell = el('div', 'car-cell');
      cell.innerHTML = '<div class="car-embed"><iframe src="' + embedUrl(a.u) + '" title="LinkedIn" frameborder="0" loading="lazy" allowfullscreen></iframe></div>' +
        '<a class="car-fallback" href="' + a.u + '" target="_blank" rel="noopener">' + esc(a.t) + ' ↗</a>';
      track.appendChild(cell);
    });
    $('#carInd').textContent = (artPage + 1) + ' / ' + pages;
    lastPS = ps;
  }

  var tocOpen = false;
  function tocLabel() {
    var n = D.articles.all.length;
    if (lang === 'en') return tocOpen ? '— close index' : '+ all ' + n + ' articles';
    return tocOpen ? '— fechar índice' : '+ todos os ' + n + ' artigos';
  }
  function buildToc() {
    var all = $('#tocAll'); all.innerHTML = '';
    D.articles.all.forEach(function (a, i) {
      var li = el('li');
      li.innerHTML = '<a href="' + a.u + '" target="_blank" rel="noopener"><span class="tn">' + pad2(i + 1) + '</span><span>' + esc(a.t) + '</span></a>';
      all.appendChild(li);
    });
    var tt = $('#tocToggle');
    tt.textContent = tocLabel();
    tt.setAttribute('aria-expanded', tocOpen ? 'true' : 'false');
  }
  function buildWriting() { buildCats(); buildCarousel(); buildToc(); }

  /* ---------- credentials ---------- */
  function buildCreds() {
    var g = $('#creds'); g.innerHTML = '';
    D.certs.forEach(function (c) {
      var cr = el('div', 'cred reveal');
      var year = c.year ? '<span class="cred-year">' + esc(c.year) + '</span>' : '';
      var lines = c.lines[lang].map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('');
      cr.innerHTML = '<h3>' + esc(c[lang]) + year + '</h3><ul class="cred-lines">' + lines + '</ul>';
      g.appendChild(cr);
    });
  }

  function buildAll() {
    buildTicker(); buildPillars(); buildLedger(); buildCaps(); buildWorks(); buildWriting(); buildCreds();
    observeReveals(); hydrateStars();
  }

  /* ---------- reveal ---------- */
  var obs;
  function observeReveals() {
    if (!('IntersectionObserver' in window)) { document.querySelectorAll('.reveal').forEach(function (n) { n.classList.add('in'); }); return; }
    if (!obs) obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal:not(.in)').forEach(function (n) { obs.observe(n); });
  }

  /* ---------- live stars ---------- */
  function hydrateStars() {
    if (!window.fetch) return;
    fetch('https://api.github.com/users/slipalison/repos?per_page=100&sort=updated')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (repos) {
        if (!repos) return; var by = {};
        repos.forEach(function (r) { by[r.name.toLowerCase()] = r; });
        document.querySelectorAll('.star').forEach(function (s) {
          var r = by[(s.dataset.repo || '').toLowerCase()];
          if (r && r.stargazers_count > 0) s.textContent = '★ ' + r.stargazers_count;
        });
      }).catch(function () {});
  }

  /* ---------- parallax ---------- */
  var pxEls = [];
  function collectPx() { pxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]')); }
  function parallax() {
    if (reduce) return;
    var vh = window.innerHeight;
    pxEls.forEach(function (e) {
      var sp = parseFloat(e.dataset.speed || '0');
      var r = e.getBoundingClientRect();
      var off = ((r.top + r.height / 2) - vh / 2) * sp;
      e.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0)';
    });
  }

  /* ---------- nav active ---------- */
  var ids = ['pillars', 'work', 'capabilities', 'selected', 'writing', 'contact'];
  function navActive() {
    var cur = '';
    ids.forEach(function (id) { var s = document.getElementById(id); if (s && s.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id; });
    document.querySelectorAll('.mast-nav a').forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + cur); });
  }

  var ticking = false;
  function onScroll() {
    navActive();
    if (!reduce && !ticking) { requestAnimationFrame(function () { parallax(); ticking = false; }); ticking = true; }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { collectPx(); parallax(); if (pageSize() !== lastPS) { artPage = 0; buildCarousel(); } });

  /* ---------- language ---------- */
  function setLang(next) { lang = next; localStorage.setItem('lang', lang); applyStaticLang(); buildAll(); }
  $('#langSwitch').addEventListener('click', function () { setLang(lang === 'pt' ? 'en' : 'pt'); });

  /* ---------- toc toggle ---------- */
  $('#tocToggle').addEventListener('click', function () {
    tocOpen = !tocOpen; var all = $('#tocAll'); all.hidden = !tocOpen;
    this.textContent = tocLabel();
    this.setAttribute('aria-expanded', tocOpen ? 'true' : 'false');
    if (tocOpen) observeReveals();
  });

  /* ---------- carousel nav ---------- */
  $('#carPrev').addEventListener('click', function () { var p = artPages(); artPage = (artPage - 1 + p) % p; buildCarousel(); });
  $('#carNext').addEventListener('click', function () { var p = artPages(); artPage = (artPage + 1) % p; buildCarousel(); });

  /* ---------- year ---------- */
  $('#year').textContent = String(new Date().getFullYear());

  /* ---------- phone (montado em runtime para dificultar scraping) ---------- */
  (function () {
    var a = $('#phoneLink'); if (!a) return;
    var dd = '11', p1 = '9467', p2 = '8466', n9 = '9';
    a.href = 'tel:+55' + dd + n9 + p1 + p2;
    a.textContent = '(' + dd + ') ' + n9 + '.' + p1 + '-' + p2;
  })();

  /* ---------- reduced motion: pausar vídeo do hero ---------- */
  if (reduce) {
    var hv = $('.hero-video');
    if (hv) {
      hv.removeAttribute('autoplay'); hv.pause();
      hv.addEventListener('canplay', function () { hv.pause(); }, { once: true });
    }
  }

  /* ---------- init ---------- */
  applyStaticLang();
  buildAll();
  collectPx();
  parallax();
  navActive();
})();
