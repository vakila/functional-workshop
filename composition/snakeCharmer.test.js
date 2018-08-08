'use strict';

const test = require('tape');
const { snakeToCamel, snakeToTrain } = require('./snakeCharmer.js');

test('[snakeCharmer] snakeToCamel', (assert) => {
  assert.equal(snakeToCamel('super_cool_name'), 'superCoolName');
  assert.end();
});

test('[snakeCharmer] snakeToTrain', (assert) => {
  assert.equal(snakeToCamel('super_cool_name'), 'Super-Cool-Name');
  assert.end();
});

// write more tests here if you create other case-converter functions!
// (and don't forget to export them from snakeCharmer.js and require them here)
