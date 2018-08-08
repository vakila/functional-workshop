'use strict';

const test = require('tape');
const { filter, map, reduce } = require('./filterMapReduce.js');


const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('[filterMapReduce] filter: evens', (assert) => {
  const evens = filter((n) => n%2 === 0, wholes);
  assert.deepEqual(evens, [0, 2, 4, 6, 8, 10]);
  assert.end();
});


test('[filterMapReduce] filter: odds', (assert) => {
  const odds = filter((n) => n%2 !== 0, wholes);
  assert.deepEqual(odds, [1, 3, 5, 7, 9]);
  assert.end();
});


test('[filterMapReduce] filter: greather than four', (assert) => {
  const greaterThanFour = filter((n) => n > 4, wholes);
  assert.deepEqual(greaterThanFour, [5, 6, 7, 8, 9, 10]);
  assert.end();
});

test('[filterMapReduce] filter: primes', (assert) => {
  const isPrime = (n) => {
    // TODO
    if (n <= 1) return false;
    const possibleFactors = filter((m) => m > 1 && m < n, wholes);
    const factors = filter((m) => n%m === 0, possibleFactors);
    return factors.length === 0 ? true : false;
  }

  const primes = filter(isPrime, wholes);
  assert.deepEqual(primes, [2, 3, 5, 7]);
  assert.end();
});


test('[filterMapReduce] map: doubled', (assert) => {
  const doubled = map((n) => n*2, wholes);
  assert.deepEqual(doubled, [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  assert.end();
});

test('[filterMapReduce] map: halved', (assert) => {
  const halved = map((n) => n/2, wholes);
  assert.deepEqual(halved, [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]);
  assert.end();
});

test('[filterMapReduce] map: fizz buzz', (assert) => {
  const fizzBuzz = map((n) => {
    // TODO
    const fizzed = n%3 === 0 ? 'fizz' : '';
    const buzzed = n%5 === 0 ? 'buzz' : '';
    return (fizzed || buzzed) ? fizzed + buzzed : n;
  }, wholes);
  assert.deepEqual(fizzBuzz, ['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz']);
  assert.end();
});


test('[filterMapReduce] reduce: sum', (assert) => {
  const sum = reduce((acc, val) => acc + val, 0, wholes);
  assert.equal(sum, 55);
  assert.end();
});
