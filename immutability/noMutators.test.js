'use strict';

const test = require('tape');
const { append, update, pop } = require('./noMutators.js');

test('[noMutators] append', (assert) => {
  const a = [1, 2, 3];
  const b = append(4, a);
  assert.deepEqual(b, [1, 2, 3, 4], 'returns an array with the element appended');
  assert.deepEqual(a, [1, 2, 3], 'does not change the original array');
  assert.end();
});

test('[noMutators] update', (assert) => {
  const a = ['wow', 'spellling', 'is', 'hard'];
  const b = update(1, 'spelling', a);
  assert.equal(b[1], 'spelling', 'returns an updated array');
  assert.equal(a[1], 'spellling', 'does not change the original array');
  assert.end();
});

test('[noMutators] pop', (assert) => {
  const a = [1, 2, 3, -159];
  const b = pop(a);
  assert.deepEqual(b, [1, 2, 3], 'returns an array with the last element removed');
  assert.deepEqual(a, [1, 2, 3, -159], 'does not change the original array');
  assert.end();
});
