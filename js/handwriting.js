/* DARI LOVE — слово, которое дописывается на глазах.

   Порт React-компонента handwriting-text на ванильный JS. Три вещи делают
   это росчерком, а не проявлением:

   1. Глифы разбираются из сырого TTF в контуры. Веб-шрифт рисуется залитыми
      фигурами — обводки нет, анимировать нечего; разбор и даёт линию.
   2. Каждый контур — отдельный <path>. Пунктир в SVG перезапускается на
      каждом подпути, поэтому одна общая кривая на всё слово рисоваться
      постепенно не может. Разные пути со сдвинутыми задержками и дают
      ощущение пера, идущего слева направо.
   3. Плотность даёт одна залитая копия слова снизу, проявляющаяся к концу
      росчерка. Заливка должна быть одним путём: дырка в «о» — отдельный
      контур, и она читается как дырка только вместе с внешним контуром.

   Шрифт и парсер лежат в репозитории: внешних запросов на рантайме нет.
   Если что-то не загрузилось, слово остаётся обычным текстом. */

(function () {
  'use strict';

  var LIB = 'vendor/opentype.min.js';
  var FONT = 'assets/fonts/MarckScript-Regular.ttf';
  var EM = 100;                 // произвольный: viewBox всё равно нормализует
  var DURATION = 1.6;           // секунд на всё слово
  var DELAY = 0.25;
  var STROKE = 2.2;             // в единицах кегля 100px

  var libPromise = null;
  var fontPromise = null;

  function loadLib() {
    if (window.opentype) return Promise.resolve(window.opentype);
    if (!libPromise) {
      libPromise = new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = LIB;
        s.onload = function () {
          window.opentype ? resolve(window.opentype) : reject(new Error('opentype loaded empty'));
        };
        s.onerror = function () { reject(new Error('opentype failed')); };
        document.head.appendChild(s);
      });
    }
    return libPromise;
  }

  function loadFont() {
    if (!fontPromise) {
      fontPromise = Promise.all([
        loadLib(),
        fetch(FONT).then(function (r) {
          if (!r.ok) throw new Error('font ' + r.status);
          return r.arrayBuffer();
        })
      ]).then(function (both) { return both[0].parse(both[1]); });
    }
    return fontPromise;
  }

  function svgEl(name, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', name);
    for (var k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  function write(host, font) {
    var text = host.textContent.trim();
    if (!text) return;

    var path = font.getPath(text, 0, EM, EM);
    var box = path.getBoundingBox();
    var pad = EM * 0.18;                       // место под обводку и выносные
    var full = path.toPathData(2);
    // Режем по moveto, открывающему каждый контур, оставляя M при сегменте.
    var contours = full.split(/(?=M)/).filter(function (d) { return d.trim().length > 1; });
    if (!contours.length) return;

    var x = box.x1 - pad, y = box.y1 - pad;
    var w = box.x2 - box.x1 + pad * 2;
    var h = box.y2 - box.y1 + pad * 2;

    var svg = svgEl('svg', {
      viewBox: x + ' ' + y + ' ' + w + ' ' + h,
      role: 'img',
      'aria-label': text,
      focusable: 'false',
      class: 'handwrite'
    });
    svg.style.width = 'calc(1em * ' + (w / h).toFixed(4) + ')';
    svg.style.overflow = 'visible';

    var fill = svgEl('path', { d: full, fill: 'currentColor', stroke: 'none', class: 'handwrite__fill' });
    svg.appendChild(fill);

    var strokes = contours.map(function (d) {
      var p = svgEl('path', {
        d: d,
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': STROKE,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      });
      svg.appendChild(p);
      return p;
    });

    host.textContent = '';
    host.appendChild(svg);
    host.dataset.handwritten = '1';

    // Меньше движения — слово сразу залито, без росчерка.
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      fill.style.opacity = '1';
      strokes.forEach(function (p) { p.style.opacity = '0'; });
      return;
    }

    var count = strokes.length;
    var lengths = strokes.map(function (p) { return p.getTotalLength() || 1; });
    var playing = false;

    // Готовое слово без росчерка: страховка на случай, когда кадры не идут.
    function ink() {
      strokes.forEach(function (p) { p.style.transition = 'none'; p.style.strokeDashoffset = '0'; });
      fill.style.transition = 'none';
      fill.style.opacity = '1';
      playing = false;
    }

    function reset() {
      strokes.forEach(function (p, i) {
        p.style.strokeDasharray = lengths[i];
        p.style.transition = 'none';
        p.style.strokeDashoffset = lengths[i];
      });
      fill.style.transition = 'none';
      fill.style.opacity = '0';
    }

    function play() {
      if (playing) return;
      playing = true;
      reset();

      // Два кадра: первый фиксирует полный сдвиг без перехода, второй включает
      // переход и уводит в ноль. В одном коммите анимировать было бы нечего.
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          strokes.forEach(function (p, i) {
            // Контуры перекрываются, чтобы читалось одно движение, а не
            // включение букв по очереди.
            var each = (DURATION / count) * 2.4;
            var start = DELAY + (i / count) * DURATION;
            p.style.transition = 'stroke-dashoffset ' + each.toFixed(3) + 's ease-out ' + start.toFixed(3) + 's';
            p.style.strokeDashoffset = '0';
          });
          fill.style.transition = 'opacity 0.45s ease-out ' + (DELAY + DURATION * 0.72).toFixed(3) + 's';
          fill.style.opacity = '1';
          setTimeout(function () { playing = false; }, (DELAY + DURATION + 0.6) * 1000);
        });
      });

      // Страховка: если кадры не идут (вкладка в фоне, панель скрыта),
      // росчерк не начнётся, а слово останется невидимым. Дописываем его
      // принудительно — пустое место хуже, чем анимация без анимации.
      setTimeout(function () {
        if (fill.style.opacity !== '1') ink();
      }, (DELAY + DURATION + 1.2) * 1000);
    }

    reset();
    host.__hwPlay = play;

    // Если за две секунды росчерк так и не начался — вкладка в фоне, кадры
    // заморожены, наблюдатель молчит — слово дописывается само. Пустое место
    // на первом экране хуже, чем анимация, которую никто не увидел.
    setTimeout(function () {
      if (fill.style.opacity !== '1' && !playing) ink();
    }, 2000);

    // Пишется при появлении в кадре и переписывается каждый раз, когда слово
    // возвращается в кадр после прокрутки.
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) play(); });
      }, { threshold: 0.55 }).observe(svg);
    } else {
      play();
    }

    // Гейт 18+ закрывает страницу собой: после входа пишем заново, иначе
    // росчерк проходит за размытой плашкой и посетитель его не видит.
    document.addEventListener('darilove:enter', function () {
      playing = false;
      play();
    });
  }

  window.HANDWRITE = function (selector) {
    var hosts = Array.prototype.slice.call(document.querySelectorAll(selector || '[data-handwrite]'));
    if (!hosts.length) return;
    loadFont().then(function (font) {
      hosts.forEach(function (host) {
        if (host.dataset.handwritten) return;
        try { write(host, font); } catch (e) { /* остаётся обычным текстом */ }
      });
    }).catch(function () { /* остаётся обычным текстом */ });
  };
})();
