/* ==========================================================================
   Alison Amorim — Portfolio · interações
   ========================================================================== */
(function () {
  'use strict';
  var D = window.SITE_DATA;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = localStorage.getItem('lang') || 'pt';

  /* ---------- helpers ---------- */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  function $(s) { return document.querySelector(s); }

  /* ---------- i18n (static nodes with data-en) ---------- */
  var staticNodes = Array.prototype.slice.call(document.querySelectorAll('[data-en]'));
  staticNodes.forEach(function (n) { n.dataset.pt = n.innerHTML; });

  function applyStaticLang() {
    staticNodes.forEach(function (n) {
      n.innerHTML = (lang === 'en') ? n.dataset.en : n.dataset.pt;
    });
    document.documentElement.lang = (lang === 'en') ? 'en' : 'pt-BR';
    var opts = document.querySelectorAll('.lang-opt');
    opts.forEach(function (o) { o.classList.toggle('is-active', o.dataset.lang === lang); });
  }

  /* ---------- builders ---------- */
  function buildStats() {
    var g = $('#statsGrid'); g.innerHTML = '';
    D.stats.forEach(function (s) {
      var box = el('div', 'stat');
      box.innerHTML = '<div class="stat-num" data-target="' + s.value + '" data-suffix="' + s.suffix + '">0</div>' +
        '<div class="stat-label">' + esc(s[lang]) + '</div>';
      g.appendChild(box);
    });
  }

  function buildFacts() {
    var ul = $('#aboutFacts'); ul.innerHTML = '';
    D.facts.forEach(function (f) { ul.appendChild(el('li', null, esc(f[lang]))); });
  }

  function buildStack() {
    var g = $('#stackGrid'); g.innerHTML = '';
    D.stack.forEach(function (c) {
      var card = el('div', 'stack-card reveal');
      var chips = c.items.map(function (i) { return '<span class="chip">' + esc(i) + '</span>'; }).join('');
      card.innerHTML = '<div class="stack-card-head"><span class="stack-icon">' + c.icon + '</span>' +
        '<h3>' + esc(c[lang]) + '</h3></div><div class="chips">' + chips + '</div>';
      g.appendChild(card);
    });
  }

  function buildTimeline() {
    var t = $('#timeline'); t.innerHTML = '';
    D.experience.forEach(function (e) {
      var item = el('div', 'tl-item reveal');
      var bullets = e.bullets[lang].map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('');
      var tags = e.tags.map(function (g) { return '<span class="tl-tag">' + esc(g) + '</span>'; }).join('');
      item.innerHTML =
        '<div class="tl-head"><span class="tl-company">' + esc(e.company) + '</span>' +
        '<span class="tl-period">' + esc(e.period) + '</span></div>' +
        '<div class="tl-role">' + esc(e.role[lang]) + '</div>' +
        '<ul class="tl-bullets">' + bullets + '</ul>' +
        '<div class="tl-tags">' + tags + '</div>';
      t.appendChild(item);
    });
  }

  function buildProjects() {
    var g = $('#projectsGrid'); g.innerHTML = '';
    D.projects.forEach(function (p) {
      var card = el('a', 'project-card reveal');
      card.href = 'https://github.com/slipalison/' + p.repo;
      card.target = '_blank'; card.rel = 'noopener';
      card.style.setProperty('--card-accent', p.accent);
      card.innerHTML =
        '<div class="pc-head"><span class="pc-name"><span class="pc-icon">⌥</span>' + esc(p.name) + '</span>' +
        '<span class="pc-stars" data-repo="' + p.repo + '"></span></div>' +
        '<p class="pc-desc">' + esc(p[lang]) + '</p>' +
        '<div class="pc-foot"><span class="pc-lang"><span class="dot-lang"></span>' + esc(p.lang) + '</span>' +
        '<span class="pc-link">' + (lang === 'en' ? 'View repo' : 'Ver repo') + ' →</span></div>';
      g.appendChild(card);
    });
  }

  function buildCerts() {
    var g = $('#certsGrid'); g.innerHTML = '';
    D.certs.forEach(function (c) {
      var card = el('div', 'cert-card reveal');
      var lines = c.lines[lang].map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('');
      var year = c.year ? '<span class="cert-year">' + esc(c.year) + '</span>' : '';
      card.innerHTML =
        '<div class="cert-head"><span class="cert-icon">' + c.icon + '</span>' +
        '<h3>' + esc(c[lang]) + '</h3>' + year + '</div>' +
        '<ul class="cert-lines">' + lines + '</ul>';
      g.appendChild(card);
    });
  }

  function buildAll() {
    buildStats(); buildFacts(); buildStack(); buildTimeline(); buildProjects(); buildCerts();
    observeReveals();
    hydrateStars();
  }

  /* ---------- count-up ---------- */
  function countUp(node) {
    var target = parseFloat(node.dataset.target);
    var suffix = node.dataset.suffix || '';
    if (reduce) { node.textContent = target + suffix; return; }
    var dur = 1500, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- reveal + count observers ---------- */
  var revealObs;
  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (n) { n.classList.add('visible'); });
      document.querySelectorAll('.stat-num').forEach(countUp);
      return;
    }
    if (!revealObs) {
      revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.classList.add('visible');
          en.target.querySelectorAll && en.target.querySelectorAll('.stat-num').forEach(countUp);
          if (en.target.classList.contains('stat-num')) countUp(en.target);
          revealObs.unobserve(en.target);
        });
      }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
    }
    document.querySelectorAll('.reveal:not(.visible)').forEach(function (n, i) {
      n.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
      revealObs.observe(n);
    });
    document.querySelectorAll('.stat-num').forEach(function (n) { revealObs.observe(n); });
  }

  /* ---------- typing effect ---------- */
  var typeTimer;
  function startTyping() {
    clearTimeout(typeTimer);
    var node = $('#typed');
    var phrases = D.typed[lang];
    var pi = 0, ci = 0, deleting = false;
    if (reduce) { node.textContent = phrases[0]; return; }
    function tick() {
      var word = phrases[pi];
      node.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; typeTimer = setTimeout(tick, 55); }
      else if (!deleting && ci === word.length) { deleting = true; typeTimer = setTimeout(tick, 1600); }
      else if (deleting && ci > 0) { ci--; typeTimer = setTimeout(tick, 28); }
      else { deleting = false; pi = (pi + 1) % phrases.length; typeTimer = setTimeout(tick, 320); }
    }
    tick();
  }

  /* ---------- live GitHub stars ---------- */
  function hydrateStars() {
    if (!window.fetch) return;
    fetch('https://api.github.com/users/slipalison/repos?per_page=100&sort=updated')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (repos) {
        if (!repos || !repos.length) return;
        var byName = {};
        repos.forEach(function (r) { byName[r.name.toLowerCase()] = r; });
        document.querySelectorAll('.pc-stars').forEach(function (s) {
          var r = byName[(s.dataset.repo || '').toLowerCase()];
          if (r && r.stargazers_count > 0) s.innerHTML = '★ ' + r.stargazers_count;
        });
      })
      .catch(function () { /* silencioso — enriquecimento opcional */ });
  }

  /* ---------- language toggle ---------- */
  function setLang(next) {
    lang = next;
    localStorage.setItem('lang', lang);
    applyStaticLang();
    buildAll();
    startTyping();
  }
  $('#langToggle').addEventListener('click', function () {
    setLang(lang === 'pt' ? 'en' : 'pt');
  });

  /* ---------- nav scroll state + active link + progress ---------- */
  var nav = $('#nav');
  var progress = $('#scrollProgress');
  var toTop = $('#toTop');
  var sections = ['about', 'stack', 'experience', 'projects', 'certs', 'contact'];
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle('scrolled', y > 30);
    toTop.classList.toggle('show', y > 600);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    var current = '';
    sections.forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec && sec.getBoundingClientRect().top < window.innerHeight * 0.4) current = id;
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  /* ---------- mouse spotlight ---------- */
  if (!reduce && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('pointermove', function (e) {
      document.body.style.setProperty('--mx', e.clientX + 'px');
      document.body.style.setProperty('--my', e.clientY + 'px');
    }, { passive: true });
  }

  /* ---------- year ---------- */
  $('#year').textContent = String(new Date().getFullYear());

  /* ---------- init ---------- */
  applyStaticLang();
  buildAll();
  startTyping();
  onScroll();
})();
