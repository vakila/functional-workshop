'use strict';

const test = require('tape');
const { iterativeSum, reduceSum, moriSum } = require('./compareSums.js');
const { List } = require('immutable');
const SeamlessImmutable = require("seamless-immutable");
const m = require('mori');

test('[compareSums] small array', (assert) => {
  const a = [1, 2, 3, 4, 5];
  assert.equal(reduceSum(a), 15);
  assert.equal(reduceSum(a), iterativeSum(a));
  assert.end();
});

test('[compareSums] big array', (assert) => {
  const bigArray = [...Array(10000).keys()];

  console.time('# imperative time');
  const iterativeResult = iterativeSum(bigArray);
  console.timeEnd('# imperative time');
  assert.ok('iterativeResult');

  console.time('# reduce time');
  const reduceResult = reduceSum(bigArray);
  console.timeEnd('# reduce time');
  assert.equal(reduceResult, iterativeResult);

  const bigImmutable = List(bigArray);
  console.time('# immutable time');
  const immutableResult = reduceSum(bigImmutable);
  console.timeEnd('# immutable time');
  assert.equal(immutableResult, iterativeResult);

  const bigSeamless = SeamlessImmutable(bigArray);
  console.time('# seamless time');
  const seamlessResult = reduceSum(bigSeamless);
  console.timeEnd('# seamless time');
  assert.equal(seamlessResult, iterativeResult);

  const bigMori = m.toClj(bigArray);
  console.time('# mori time');
  const moriResult = moriSum(bigMori);
  console.timeEnd('# mori time');
  assert.equal(moriResult, iterativeResult);

  assert.end();
});
