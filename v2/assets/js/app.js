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
  function applyStaticLang() {
    staticNodes.forEach(function (n) { n.innerHTML = (lang === 'en') ? n.dataset.en : n.dataset.pt; });
    document.documentElement.lang = (lang === 'en') ? 'en' : 'pt-BR';
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (o) { o.classList.toggle('on', o.dataset.lang === lang); });
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
      var bullets = e.bullets[lang].map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('');
      var tags = e.tags.map(function (t) { return '<span class="lr-tag">' + esc(t) + '</span>'; }).join('');
      row.innerHTML =
        '<div class="lr-left"><div class="lr-period">' + esc(e.period) + '</div>' +
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
      var items = c.items.map(esc).join('<span class="sep">·</span>');
      cap.innerHTML = '<h3>' + esc(c[lang]) + '</h3><div class="cap-items">' + items + '</div>';
      g.appendChild(cap);
    });
  }

  /* ---------- works ---------- */
  function buildWorks() {
    var g = $('#works'); g.innerHTML = '';
    D.projects.forEach(function (p, i) {
      var w = el('div', 'work reveal');
      var url = 'https://github.com/slipalison/' + p.repo;
      w.innerHTML =
        '<div class="work-top"><a class="work-name" href="' + url + '" target="_blank" rel="noopener">' + esc(p.name) + '</a>' +
        '<span class="work-idx">' + pad2(i + 1) + ' / ' + pad2(D.projects.length) + '</span></div>' +
        '<div class="work-lang">' + esc(p.lang) + ' <span class="star" data-repo="' + p.repo + '"></span></div>' +
        '<p class="work-desc">' + esc(p[lang]) + '</p>' +
        '<a class="work-go" href="' + url + '" target="_blank" rel="noopener">' + (lang === 'en' ? 'View repository ↗' : 'Ver repositório ↗') + '</a>';
      g.appendChild(w);
    });
  }

  /* ---------- writing ---------- */
  var tocOpen = false;
  function tocLabel() {
    var n = D.articles.count;
    if (lang === 'en') return tocOpen ? '— close index' : '+ all ' + n + ' articles';
    return tocOpen ? '— fechar índice' : '+ todos os ' + n + ' artigos';
  }
  function buildWriting() {
    var f = $('#tocFeatured'); f.innerHTML = '';
    D.articles.featured.forEach(function (a, i) {
      var li = el('li', 'toc-item reveal');
      li.innerHTML = '<span class="toc-no">' + pad2(i + 1) + '</span>' +
        '<a class="toc-t" href="' + a.u + '" target="_blank" rel="noopener">' + esc(a.t) + '</a>' +
        '<span class="toc-tag">' + esc(a.tag) + '</span>';
      f.appendChild(li);
    });
    var all = $('#tocAll'); all.innerHTML = '';
    D.articles.all.forEach(function (a, i) {
      var li = el('li');
      li.innerHTML = '<a href="' + a.u + '" target="_blank" rel="noopener"><span class="tn">' + pad2(i + 1) + '</span><span>' + esc(a.t) + '</span></a>';
      all.appendChild(li);
    });
    $('#tocToggle').textContent = tocLabel();
  }

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
  window.addEventListener('resize', function () { collectPx(); parallax(); });

  /* ---------- language ---------- */
  function setLang(next) { lang = next; localStorage.setItem('lang', lang); applyStaticLang(); buildAll(); }
  $('#langSwitch').addEventListener('click', function () { setLang(lang === 'pt' ? 'en' : 'pt'); });

  /* ---------- toc toggle ---------- */
  $('#tocToggle').addEventListener('click', function () {
    tocOpen = !tocOpen; var all = $('#tocAll'); all.hidden = !tocOpen;
    this.textContent = tocLabel(); if (tocOpen) observeReveals();
  });

  /* ---------- year ---------- */
  $('#year').textContent = String(new Date().getFullYear());

  /* ---------- init ---------- */
  applyStaticLang();
  buildAll();
  collectPx();
  parallax();
  navActive();
})();
