/* Пересчёт рукописного слова в контуры.

   Раньше это делал браузер: тянул opentype.js (167 КБ) и TTF (82 КБ), чтобы
   разобрать одно слово. Разбор детерминированный, поэтому он выполняется один
   раз здесь, а на страницу уезжает готовая геометрия — около трёх килобайт.

   Запуск:  node tools/bake-handwriting.mjs вслух
   Результат печатается в stdout и вставляется в js/handwriting.js.          */

import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const opentype = require('./opentype.min.js');

const text = process.argv[2] || 'вслух';
const EM = 100;
const PAD = EM * 0.18;

const font = opentype.parse(readFileSync(new URL('./MarckScript-Regular.ttf', import.meta.url)).buffer);
const path = font.getPath(text, 0, EM, EM);
const box = path.getBoundingBox();
const full = path.toPathData(2);
const contours = full.split(/(?=M)/).filter((d) => d.trim().length > 1);

const geom = {
  text,
  view: [
    +(box.x1 - PAD).toFixed(2),
    +(box.y1 - PAD).toFixed(2),
    +(box.x2 - box.x1 + PAD * 2).toFixed(2),
    +(box.y2 - box.y1 + PAD * 2).toFixed(2)
  ],
  full,
  contours
};

process.stdout.write('  var GEOM = ' + JSON.stringify(geom, null, 2).replace(/\n/g, '\n  ') + ';\n');
