// Встроенный в Node.JS модуль для проверок
let assert = require('assert');

// Подключаем свою функцию
let is_converted = require('./word-transform.js');

assert.equal(is_converted('привет прикол'), '1');
assert.equal(is_converted('ааббдд ддббаа'), '1');
assert.equal(is_converted('абаб ааах'), '0');
assert.equal(is_converted('трансформатор гшлнсфешмлгеш'), '1');
assert.equal(is_converted('достопримечательность йфсгфпкимечагелынфсгы'), '1');
assert.equal(is_converted('северянин срврряииг'), '0');
assert.equal(is_converted('дверь дрова'), '1');
assert.equal(is_converted('дверь дров'), '0');

// Двойные и более высокоуровневые преобразования
/*
 * assert.equal(is_converted('достопримечательность йфргфмкимечагелынфргы'), '0');
 * assert.equal(is_converted('кипр кккк'), '1');
 * assert.equal(is_converted('кипр ррик'), '1');
 * assert.equal(is_converted('властелин вбксммбин'), '1');
 * assert.equal(is_converted('иллюзорный ишеюзаашьй'), '0');
 * assert.equal(is_converted('салют сгггт'), '1');
 * assert.equal(is_converted('восток ваааек'), '0');
 */
console.info('OK!');
