/* DARI LOVE — вся логика страницы. Контент живёт в content.js. */

(function () {
  'use strict';

  var C = window.CONTENT;
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var clamp = function (v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); };
  var pad2 = function (n) { return n < 10 ? '0' + n : String(n); };

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
      document.dispatchEvent(new CustomEvent('darilove:enter'));
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
      return '<div class="rate"><dt>' + p.name + '<small>' + p.note + '</small></dt>' +
             '<dd class="tabular">' + p.value + '</dd></div>';
    }).join('');
  }

  // Кадр отдаём двумя форматами: AVIF там, где браузер его понимает, WebP
  // остальным. Размеры проставлены, чтобы место под картинку резервировалось
  // до загрузки и макет не дёргался.
  function picture(src, w, h, eager) {
    var avif = src.replace(/\.webp$/, '.avif');
    return '<picture>' +
      '<source srcset="' + avif + '" type="image/avif">' +
      '<img src="' + src + '" alt="" width="' + w + '" height="' + h + '" ' +
      (eager ? 'fetchpriority="high"' : 'loading="lazy"') + ' decoding="async" draggable="false">' +
    '</picture>';
  }

  function renderChapters() {
    var host = $('#gallery');
    if (!host) return;

    host.innerHTML = C.chapters.map(function (ch, i) {
      return '' +
        '<article class="pane" data-index="' + i + '" data-active="' + (i === 0 ? '1' : '0') + '">' +
          '<div class="pane__plate">' + picture(ch.image, 900, 1125, i === 0) + '</div>' +
          '<div class="pane__veil"></div>' +
          '<div class="pane__body">' +
            (ch.whom ? '<span class="pane__cat">' + ch.whom + '</span>' : '') +
            '<h3 class="pane__title">' + ch.title + '</h3>' +
            '<button class="pane__more" type="button" data-open="' + i + '">Подробнее' +
              '<svg viewBox="0 0 24 12" aria-hidden="true"><path d="M0 6h22M17 1l5 5-5 5"/></svg>' +
            '</button>' +
          '</div>' +
          '<span class="pane__spine">' + ch.title + '</span>' +
        '</article>';
    }).join('');
  }

  function renderLive() {
    if (!$('#live-seats')) return;
    $('#live-seats').textContent = C.live.seats + (C.live.seats === 1 ? ' место' : ' места');
    $('#live-deadline').textContent = 'до ' + C.live.deadline;
    $('#live-month').textContent = 'открыта запись на ' + C.live.month;
    $('#live-gift').textContent = C.live.gift;
  }

  function renderConsult() {
    var c = C.consult;
    if (!c) return;
    $('#consult-title').textContent = c.title;
    $('#consult-text').textContent = c.text;
    $('#consult-points').innerHTML = c.points.map(function (p) { return '<li>' + p + '</li>'; }).join('');
    $('#consult-price').textContent = c.price;
  }

  function renderAbout() {
    if (!$('#about-title')) return;
    $('#about-title').textContent = C.about.title;
    $('#about-text').textContent = C.about.text;
    $('#about-facts').innerHTML = C.about.facts.map(function (f) {
      return '<div class="about__fact"><b>' + f.value + '</b><span>' + f.label + '</span></div>';
    }).join('');
  }

  function renderReviews() {
    var sec = $('#reviews');
    if (!sec) return;
    if (!C.reviews.length) { sec.remove(); return; }
    $('#reviews-grid').innerHTML = C.reviews.map(function (r) {
      return '<blockquote class="review material"><p>' + r.text + '</p><cite>' + r.author + '</cite></blockquote>';
    }).join('');
  }

  function renderFaq() {
    var host = $('#faq-list');
    if (!host) return;

    host.innerHTML =
      '<div class="chat">' +
        '<p class="chat__stamp">' + (C.faqStamp || 'Отвечаю лично, обычно в течение дня') + '</p>' +
        C.faq.map(function (f, i) {
          return '' +
            '<div class="chat__item" data-open="0" data-faq="' + i + '">' +
              '<button class="chat__q" type="button" aria-expanded="false" aria-controls="faq-a-' + i + '">' +
                '<span class="chat__chip">' + f.q + '</span>' +
                '<span class="chat__sign" aria-hidden="true"></span>' +
              '</button>' +
              '<div class="chat__answer" id="faq-a-' + i + '" role="region">' +
                '<div><p class="chat__bubble">' + f.a + '</p></div>' +
              '</div>' +
            '</div>';
        }).join('') +
      '</div>';

    // Открыт один вопрос за раз: это переписка, а не список.
    host.addEventListener('click', function (e) {
      var btn = e.target.closest('.chat__q');
      if (!btn) return;
      var item = btn.closest('.chat__item');
      var open = item.dataset.open === '1';
      $$('.chat__item', host).forEach(function (other) {
        other.dataset.open = '0';
        $('.chat__q', other).setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.dataset.open = '1';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  function renderFooter() {
    if (!$('#foot-legal')) return;
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
    if (!dlg || !body) return;

    function open(i) {
      var ch = C.chapters[i];
      if (!ch) return;
      body.innerHTML = '' +
        '<div class="plate sheet__plate">' + picture(ch.image, 900, 1125, true) + '</div>' +
        '<div>' +
          '<p class="slab__num">' + ch.num + '</p>' +
          '<h3>' + ch.title + '</h3>' +
          (ch.whom ? '<p class="slab__whom">' + ch.whom + '</p>' : '') +
          '<p style="color:var(--ash);margin-top:16px">' + ch.about + '</p>' +
          '<ul class="sheet__list">' + ch.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' +
          '<p class="sheet__meta">' + ch.format + ' · ' + ch.price + '</p>' +
          '<p style="margin-top:22px"><a class="pill" data-tg="chapter_' + ch.id + '" href="#">Написать в Telegram</a></p>' +
        '</div>';
      wireLinks();
      dlg.showModal();
    }

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.pane__more');
      if (!btn) return;
      e.stopPropagation();
      open(+btn.dataset.open);
    });

    // Клик по раскрытой панели приходит сюда же.
    document.addEventListener('darilove:open', function (e) { open(e.detail); });

    $('#sheet-close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  }

  /* ------------------------------------------------- гармошка материалов

     Активная панель раздаётся, соседние сжимаются в полосы с вертикальной
     подписью. Раскрытие идёт по flex, а не по сдвигу ленты: ряд всегда равен
     окну, и уезжать за край, как это делала прокручиваемая лента, ему негде.
     Мышь раскрывает наведением, палец — касанием, клавиатура — фокусом на
     кнопке «Подробнее». Число панелей не зашито: сколько материалов в
     content.js, столько и панелей.                                          */

  function gallery() {
    var section = $('#chapters');
    var host = $('#gallery');
    if (!section || !host) return;

    var panes = $$('.pane', host);
    var counter = $('#deck-counter');
    var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    var active = -1;
    var pinned = false;

    if (!panes.length) return;

    function show(i) {
      var n = clamp(i, 0, panes.length - 1);
      if (n === active) return;
      active = n;
      panes.forEach(function (p, k) { p.dataset.active = k === active ? '1' : '0'; });
      if (counter) counter.textContent = pad2(active + 1) + ' / ' + pad2(panes.length);
    }

    function layout() {
      // Пин работает на любой ширине: на телефоне это единственный способ
      // пролистать ленту, там нет курсора. Отключаем только при запрете
      // движения — тогда панели просто идут колонкой.
      pinned = !reduce.matches;
      section.dataset.pin = pinned ? '1' : '0';
      // Экран на первую панель плюс по 70vh прокрутки на каждую следующую:
      // столько времени лента и держит экран.
      section.style.height = pinned ? (100 + (panes.length - 1) * 70) + 'vh' : '';
      paint();
    }

    // Раскрытие ведёт прокрутка: на телефоне это единственный способ
    // показать анимацию, курсора там нет.
    function paint() {
      var rect = section.getBoundingClientRect();
      var total = Math.max(1, section.offsetHeight - window.innerHeight);
      var p = pinned
        ? clamp(-rect.top / total, 0, 1)
        : clamp((window.innerHeight * 0.75 - rect.top) / Math.max(1, rect.height * 0.8), 0, 1);

      // Первая карточка держится, пока лента только подходит к экрану:
      // без этого она схлопывалась на первых же пикселях прокрутки.
      var steps = panes.length - 1;
      show(steps ? Math.round(clamp((p - 0.08) / 0.92, 0, 1) * steps) : 0);
    }

    // Без requestAnimationFrame: paint трогает DOM только когда индекс
    // действительно сменился, а во вкладке в фоне кадры не идут и панель
    // осталась бы на первой.

    panes.forEach(function (pane, i) {
      // Курсор перебивает прокрутку: пока мышь на панели, слушаем её.
      pane.addEventListener('mouseenter', function () { if (fine.matches) show(i); });

      // Клик по свёрнутой панели раскрывает её, клик по раскрытой открывает
      // подробности: то же, что кнопка «Подробнее», но по всей карточке.
      pane.addEventListener('click', function (e) {
        if (e.target.closest('.pane__more')) return;
        if (pane.dataset.active === '1') {
          document.dispatchEvent(new CustomEvent('darilove:open', { detail: i }));
        } else {
          show(i);
        }
      });

      $('.pane__more', pane).addEventListener('focus', function () { show(i); });
    });

    window.addEventListener('scroll', paint, { passive: true });

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(layout, 120);
    });

    show(0);
    layout();
  }

  /* --------------------------------------------------------- появления

     Секция въезжает на 14px с прозрачности, соседи с шагом 60 мс. Один
     проход: показали — наблюдатель отключается, чтобы прокрутка вверх не
     проигрывала всё заново.                                              */

  function reveals() {
    if (!('IntersectionObserver' in window)) return;

    var groups = [
      ['.hero__lead > *', 60],
      ['.rate', 50],
      ['.manifest__inner > *', 80],
      ['.about > *', 80],
      ['.chapters__head', 0],
      ['.live > *', 60],
      ['.private > *', 80],
      ['.faq h2, .chat__item', 40],
      ['.lead > *', 80],
      ['.foot > *', 40]
    ];

    // Обратимо: пока блок в окне — он на месте, вышел за край — уехал
    // обратно в ту сторону, с которой пришёл. Наблюдатель не отключается.
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.dataset.reveal = 'in';
          return;
        }
        // Ушёл вниз за нижний край окна — ждёт снизу; ушёл вверх — сверху.
        var below = e.boundingClientRect.top > 0;
        e.target.style.setProperty('--reveal-dir', below ? '1' : '-1');
        e.target.dataset.reveal = '';
      });
    }, { threshold: 0.12, rootMargin: '-4% 0px -8% 0px' });

    var watched = [];

    groups.forEach(function (g) {
      $$(g[0]).forEach(function (el, i) {
        el.dataset.reveal = '';
        el.style.setProperty('--reveal-delay', (i * g[1]) + 'ms');
        io.observe(el);
        watched.push(el);
      });
    });

    // Страховка: скрытый текст — худшая из возможных поломок. Если
    // наблюдатель по какой-то причине не сработал, через полторы секунды
    // показываем всё, что сейчас в окне.
    setTimeout(function () {
      watched.forEach(function (el) {
        if (el.dataset.reveal === 'in') return;
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.dataset.reveal = 'in';
      });
    }, 1500);
  }

  /* -------------------------------------------------- параллакс атрибутов

     Курсор ведёт две переменные на слое, каждый предмет умножает их на свою
     глубину. Пружины нет: у предметов долгий переход, поэтому они отстают от
     курсора и доплывают — это и читается как парение.                      */

  function parallax() {
    var layer = $('.attrs');
    if (!layer || reduce.matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    var pending = false;
    var mx = 0, my = 0;

    window.addEventListener('pointermove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      // Событий указателя приходит больше, чем кадров: копим и пишем раз в кадр.
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () {
        pending = false;
        // Одна запись на слой, а не на каждый предмет: наследование переменной
        // дешевле шестнадцати обращений к стилю.
        layer.style.setProperty('--px', ((mx / window.innerWidth - 0.5) * 46).toFixed(1) + 'px');
        layer.style.setProperty('--py', ((my / window.innerHeight - 0.5) * 34).toFixed(1) + 'px');
      });
    }, { passive: true });
  }

  /* ------------------------------------------------------- рябь по клику */

  function ripples() {
    if (reduce.matches) return;
    document.addEventListener('pointerdown', function (e) {
      var pill = e.target.closest('.pill');
      if (!pill) return;
      var r = pill.getBoundingClientRect();
      var dot = document.createElement('span');
      dot.className = 'ripple';
      dot.style.left = (e.clientX - r.left) + 'px';
      dot.style.top = (e.clientY - r.top) + 'px';
      pill.appendChild(dot);
      setTimeout(function () { dot.remove(); }, 620);
    });
  }

  /* ------------------------------------------------------ индикатор слева */

  function ticks() {
    var host = $('#ticks');
    if (!host) return [];

    var items = [
      { id: 'top', label: 'Начало' },
      { id: 'about', label: 'Обо мне' },
      { id: 'chapters', label: 'Материалы' },
      { id: 'live', label: 'Живой формат' },
      { id: 'private', label: 'Приватно' },
      { id: 'faq', label: 'Вопросы' }
    ].filter(function (it) { return document.getElementById(it.id); });

    host.innerHTML = items.map(function (it) {
      return '<a class="ticks__item" href="#' + it.id + '"><i aria-hidden="true"></i><span>' + it.label + '</span></a>';
    }).join('');

    return $$('.ticks__item', host).map(function (el, i) {
      return { el: el, section: document.getElementById(items[i].id) };
    });
  }

  /* ------------------------------------------------------- пружина виджета */

  function springWidget() {
    var el = $('#thanks');
    if (!el || reduce.matches) return null;

    var offset = 0, vel = 0, raf = null;

    function frame() {
      raf = null;
      vel += (0 - offset) * 0.16;
      vel *= 0.76;
      offset += vel;
      el.style.setProperty('--ty', offset.toFixed(2) + 'px');
      if (Math.abs(offset) > 0.2 || Math.abs(vel) > 0.2) raf = requestAnimationFrame(frame);
      else el.style.setProperty('--ty', '0px');
    }

    return function (dy) {
      offset = clamp(offset + dy * 0.16, -22, 22);
      if (!raf) raf = requestAnimationFrame(frame);
    };
  }

  /* ------------------------------------------------------ скролл-состояния

     Всё, что считается на прокрутке, должно быть дешёвым: кадр отдаётся
     композитору, а не пересчёту раскладки. Поэтому здесь три правила.
     Первое: переменные пишутся не в :root, а прямо на потребителей — запись
     в корень инвалидирует стили всего документа. Второе: пишем только когда
     значение действительно изменилось. Третье: положение секций меряется на
     resize и кэшируется, а не на каждом кадре через getBoundingClientRect. */

  function scrollStates() {
    var navTicks = $$('.rail__tick');
    var sideTicks = ticks();
    var kickWidget = springWidget();
    var thanks = $('#thanks');
    var head = $('#head');
    var fillHosts = $$('.shot, .seam');

    var last = window.scrollY;
    var lastFill = -1;
    var lastRead = -1;
    var ticking = false;

    // Кэш положений: обновляется на resize и после загрузки картинок.
    var marks = [];

    function measure() {
      marks = [];
      navTicks.forEach(function (el) {
        var sec = document.querySelector(el.getAttribute('href'));
        if (sec) marks.push({ el: el, top: sec.offsetTop, height: sec.offsetHeight });
      });
      sideTicks.forEach(function (t) {
        if (t.section) marks.push({ el: t.el, top: t.section.offsetTop, height: t.section.offsetHeight });
      });
    }

    function paint() {
      ticking = false;
      var y = window.scrollY;
      var vh = window.innerHeight;
      var max = Math.max(1, document.body.scrollHeight - vh);

      var fill = reduce.matches ? 1 : Math.min(1, y / (vh * 0.62));
      var read = y / max;

      // Шаг в полпроцента: глазу незаметно, кадру — заметно.
      if (Math.abs(fill - lastFill) > 0.005) {
        lastFill = fill;
        fillHosts.forEach(function (el) { el.style.setProperty('--fill', fill.toFixed(3)); });
      }
      if (Math.abs(read - lastRead) > 0.005) {
        lastRead = read;
        if (head) head.style.setProperty('--read', read.toFixed(3));
      }

      if (kickWidget) kickWidget(y - last);
      if (thanks) thanks.dataset.show = y > vh * 0.5 ? '1' : '0';
      last = y;

      // Активный раздел — сравнение чисел, без обращения к раскладке.
      var probe = y + vh * 0.4;
      marks.forEach(function (m) {
        m.el.setAttribute('aria-current', (probe >= m.top && probe < m.top + m.height) ? 'true' : 'false');
      });
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
      resizeTimer = setTimeout(function () { measure(); paint(); }, 120);
    });

    window.addEventListener('load', function () { measure(); paint(); });

    measure();
    paint();
  }

  /* ------------------------------------------------------------------ старт */

  // Каждый шаг падает сам за себя: одна сломанная секция не должна оставлять
  // посетителя за возрастным гейтом с мёртвой кнопкой.
  function safe(name, fn) {
    try { fn(); } catch (e) {
      if (window.console && console.error) console.error('DARI LOVE: шаг «' + name + '» упал', e);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Гейт первым: он пускает на страницу и не зависит ни от чего остального.
    safe('гейт', gate);
    safe('прайс', renderPrices);
    safe('материалы', renderChapters);
    safe('живой формат', renderLive);
    safe('консультация', renderConsult);
    safe('обо мне', renderAbout);
    safe('отзывы', renderReviews);
    safe('вопросы', renderFaq);
    safe('подвал', renderFooter);
    safe('ссылки', wireLinks);
    safe('модалка', sheets);
    safe('гармошка', gallery);
    safe('появления', reveals);
    safe('параллакс', parallax);
    safe('рябь', ripples);
    safe('состояния скролла', scrollStates);
    safe('росчерк', function () { if (window.HANDWRITE) window.HANDWRITE('[data-handwrite]'); });
  });
})();
