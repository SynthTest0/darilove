/* DARI LOVE — вся логика страницы. Контент живёт в content.js. */

(function () {
  'use strict';

  var C = window.CONTENT;
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var coarse = window.matchMedia('(pointer: coarse)');
  var narrow = window.matchMedia('(max-width: 1020px)');

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------------------------------------------------------------- ссылки */

  function tgLink(slug) {
    var base = C.contacts.telegram;
    if (!C.contacts.useBotStartParam || !slug) return base;
    return base + '?start=' + encodeURIComponent(slug);
  }

  function wireLinks() {
    $$('[data-tg]').forEach(function (el) { el.href = tgLink(el.getAttribute('data-tg')); });
    $$('[data-href="tribute"]').forEach(function (el) {
      el.href = C.contacts.tribute;
      el.target = '_blank';
      el.rel = 'noopener';
    });
  }

  /* ------------------------------------------------------------------ гейт */

  function gate() {
    var el = $('#gate');
    if (!el) return;

    var passed;
    try { passed = localStorage.getItem('darilove:age') === 'ok'; } catch (e) { passed = false; }

    if (passed) { el.remove(); return; }

    document.body.dataset.gated = '1';
    el.hidden = false;

    $('#gate-yes').addEventListener('click', function () {
      try { localStorage.setItem('darilove:age', 'ok'); } catch (e) {}
      delete document.body.dataset.gated;
      el.remove();
    });

    $('#gate-no').addEventListener('click', function () {
      location.href = C.gate.exit;
    });
  }

  /* ------------------------------------------------------------- рендеринг */

  function renderPrices() {
    var host = $('#prices');
    if (!host) return;
    host.innerHTML = C.prices.map(function (p) {
      return '<div class="colophon__row"><dt>' + p.name + '<small>' + p.note + '</small></dt>' +
             '<dd class="tabular">' + p.value + '</dd></div>';
    }).join('');
  }

  function renderChapters() {
    var track = $('#deck-track');
    var dots = $('#deck-dots');
    if (!track) return;

    track.innerHTML = C.chapters.map(function (ch, i) {
      return '' +
        '<article class="tome material' + (ch.private ? ' tome--private' : '') + '" data-index="' + i + '" tabindex="0" role="button" aria-label="' + ch.title + ' — подробнее">' +
          '<div class="plate tome__plate"><img src="' + ch.image + '" alt="" loading="lazy"></div>' +
          '<div>' +
            '<p class="tome__num">' + ch.num + '</p>' +
            '<h3 class="tome__title">' + ch.title + '</h3>' +
            (ch.whom ? '<p class="tome__whom">' + ch.whom + '</p>' : '') +
            '<p class="tome__teaser">' + ch.teaser + '</p>' +
            '<span class="tome__more">Подробнее</span>' +
          '</div>' +
        '</article>';
    }).join('');

    dots.innerHTML = C.chapters.map(function (ch, i) {
      return '<button class="deck__dot" type="button" data-go="' + i + '" aria-label="Том ' + ch.num + ': ' + ch.title + '"></button>';
    }).join('');
  }

  function renderLive() {
    $('#live-seats').textContent = C.live.seats + (C.live.seats === 1 ? ' место' : ' места');
    $('#live-deadline').textContent = 'до ' + C.live.deadline;
    $('#live-month').textContent = 'открыта запись на ' + C.live.month;
    $('#live-gift').textContent = C.live.gift;
    $('#dock-note').textContent = 'Ближайший поток — ' + C.live.month + ' · ' + C.live.seats +
      (C.live.seats === 1 ? ' место' : ' места');
  }

  function renderAbout() {
    $('#about-title').textContent = C.about.title;
    $('#about-text').textContent = C.about.text;
    $('#about-facts').innerHTML = C.about.facts.map(function (f) {
      return '<div class="about__fact"><b>' + f.value + '</b><span>' + f.label + '</span></div>';
    }).join('');
  }

  function renderReviews() {
    var sec = $('#reviews');
    if (!C.reviews.length) { sec.remove(); return; }
    $('#reviews-grid').innerHTML = C.reviews.map(function (r) {
      return '<blockquote class="review material"><p>' + r.text + '</p><cite>' + r.author + '</cite></blockquote>';
    }).join('');
  }

  function renderFaq() {
    $('#faq-list').innerHTML = C.faq.map(function (f) {
      return '<details><summary>' + f.q + '</summary><p>' + f.a + '</p></details>';
    }).join('');
  }

  function renderFooter() {
    $('#foot-legal').textContent = C.footer.legal + ' ' + C.footer.entity;
    $('#foot-links').innerHTML = C.footer.links.map(function (l) {
      return l.href === 'tribute'
        ? '<a data-href="tribute" href="#">' + l.label + '</a>'
        : '<a href="' + l.href + '">' + l.label + '</a>';
    }).join('');
  }

  /* ---------------------------------------------------------------- модалка */

  function sheets() {
    var dlg = $('#sheet');
    var body = $('#sheet-body');

    function open(i) {
      var ch = C.chapters[i];
      body.innerHTML = '' +
        '<div class="plate sheet__plate"><img src="' + ch.image + '" alt=""></div>' +
        '<div>' +
          '<p class="tome__num">' + ch.num + '</p>' +
          '<h3>' + ch.title + '</h3>' +
          (ch.whom ? '<p class="tome__whom">' + ch.whom + '</p>' : '') +
          '<p style="color:var(--skin);margin-top:16px">' + ch.about + '</p>' +
          '<ul class="sheet__list">' + ch.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' +
          '<p class="sheet__meta">' + ch.format + ' · ' + ch.price + '</p>' +
          '<p style="margin-top:22px"><a class="pill" data-tg="chapter_' + ch.id + '" href="#">Написать в Telegram</a></p>' +
        '</div>';
      wireLinks();
      dlg.showModal();
    }

    document.addEventListener('click', function (e) {
      var card = e.target.closest('.tome');
      if (card) { open(+card.dataset.index); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var card = document.activeElement && document.activeElement.closest && document.activeElement.closest('.tome');
      if (card) { e.preventDefault(); open(+card.dataset.index); }
    });

    $('#sheet-close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  }

  /* ------------------------------------------------------- пин-карусель */

  var deck = {
    section: null,
    slide: 0,
    active: false
  };

  function setupDeck() {
    deck.section = $('#chapters');
    var track = $('#deck-track');
    var dots = $$('.deck__dot');
    var count = C.chapters.length;

    // На мобильном, при грубом указателе и при выключенной анимации
    // пин не используется: карточки идут обычной вертикальной лентой.
    var pinned = !(coarse.matches || narrow.matches || reduce.matches);

    deck.section.dataset.pin = pinned ? '1' : '0';
    deck.section.style.height = pinned ? (count * 85 + 60) + 'vh' : 'auto';

    if (!pinned) {
      track.style.transform = '';
      $$('.tome', track).forEach(function (el) { el.style.setProperty('--away', '0'); });
      $('#deck-counter').textContent = count + ' тома';
      deck.paint = null;
      deck.active = false;
      return;
    }

    function step() {
      var cards = $$('.tome', track);
      if (cards.length < 2) return cards.length ? cards[0].offsetWidth : 0;
      return cards[1].offsetLeft - cards[0].offsetLeft;
    }

    function paint() {
      var rect = deck.section.getBoundingClientRect();
      var total = Math.max(1, deck.section.offsetHeight - window.innerHeight);
      var p = Math.min(1, Math.max(0, -rect.top / total));
      var exact = p * (count - 1);
      var index = Math.round(exact);

      deck.active = rect.top <= 0 && rect.bottom >= window.innerHeight;
      track.style.transform = 'translate3d(' + (-exact * step()).toFixed(2) + 'px,0,0)';

      $$('.tome', track).forEach(function (el, i) {
        el.style.setProperty('--away', Math.min(1, Math.abs(exact - i)).toFixed(3));
      });

      dots.forEach(function (d, i) { d.setAttribute('aria-current', i === index ? 'true' : 'false'); });
      $('#deck-counter').textContent = (index + 1) + ' / ' + count;
    }

    deck.paint = paint;
    paint();

    if (!deck.wired) {
      deck.wired = true;
      dots.forEach(function (d) {
        d.addEventListener('click', function () {
          var i = +d.dataset.go;
          var total = deck.section.offsetHeight - window.innerHeight;
          var y = deck.section.offsetTop + total * (i / (count - 1));
          window.scrollTo({ top: y, behavior: reduce.matches ? 'auto' : 'smooth' });
        });
      });
    }
  }

  /* --------------------------------------------- инерция и резиновый край */

  function smoothScroll() {
    if (reduce.matches || coarse.matches) return;

    var bounce = $('#bounce');
    var target = window.scrollY;
    var current = target;
    var over = 0;
    var running = false;

    function maxScroll() {
      return Math.max(0, document.body.scrollHeight - window.innerHeight);
    }

    function frame() {
      current += (target - current) * 0.14;
      over += (0 - over) * 0.12;

      if (Math.abs(target - current) < 0.4) current = target;
      if (Math.abs(over) < 0.3) over = 0;

      window.scrollTo(0, current);
      bounce.style.transform = over ? 'translate3d(0,' + over.toFixed(2) + 'px,0)' : '';

      if (current !== target || over !== 0) {
        requestAnimationFrame(frame);
      } else {
        running = false;
      }
    }

    window.addEventListener('wheel', function (e) {
      // Внутри пина инерция снимается: там свой ритм по карточкам.
      if (deck.active) { target = window.scrollY; current = target; return; }
      if (e.ctrlKey) return;

      e.preventDefault();
      var max = maxScroll();
      var next = target + e.deltaY;

      if (next < 0 || next > max) {
        // Резиновый край: страница пружинит, а не упирается.
        over += (next < 0 ? -next : max - next) * 0.12;
        over = Math.max(-90, Math.min(90, over));
      }

      target = Math.max(0, Math.min(max, next));
      if (!running) { running = true; requestAnimationFrame(frame); }
    }, { passive: false });

    window.addEventListener('scroll', function () {
      if (!running) { target = window.scrollY; current = target; }
    }, { passive: true });
  }

  /* ------------------------------------------------------ скролл-состояния */

  function scrollStates() {
    var head = $('#head');
    var dock = $('#dock');
    var chapters = $('#chapters');
    var ticks = $$('.spine__tick');
    var last = window.scrollY;
    var ticking = false;

    function paint() {
      ticking = false;
      var y = window.scrollY;
      var vh = window.innerHeight;
      var max = Math.max(1, document.body.scrollHeight - vh);

      root.style.setProperty('--fill', reduce.matches ? '1' : Math.min(1, y / (vh * 0.62)).toFixed(4));
      root.style.setProperty('--read', (y / max).toFixed(4));

      head.dataset.hidden = (y > 240 && y > last) ? '1' : '0';
      last = y;

      dock.dataset.show = chapters.getBoundingClientRect().bottom < vh * 0.9 ? '1' : '0';

      ticks.forEach(function (t) {
        var sec = document.querySelector(t.getAttribute('href'));
        if (!sec) return;
        var r = sec.getBoundingClientRect();
        t.setAttribute('aria-current', (r.top <= vh * 0.4 && r.bottom > vh * 0.4) ? 'true' : 'false');
      });

      if (deck.paint) deck.paint();
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(paint); }
    }, { passive: true });

    // Во вкладке в фоне rAF заморожен: при возврате состояние синхронизируем сразу.
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) paint();
    });

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { setupDeck(); paint(); }, 150);
    });
    paint();
  }

  /* ------------------------------------------------------------------ старт */

  document.addEventListener('DOMContentLoaded', function () {
    renderPrices();
    renderChapters();
    renderLive();
    renderAbout();
    renderReviews();
    renderFaq();
    renderFooter();
    wireLinks();
    gate();
    sheets();
    setupDeck();
    scrollStates();
    smoothScroll();
  });
})();
