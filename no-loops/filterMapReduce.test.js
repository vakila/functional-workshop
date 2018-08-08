'use strict';

const test = require('tape');
const { filter, map, reduce } = require('./filterMapReduce.js');


const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('[filter] evens', (assert) => {
  const evens = filter(wholes, (n) => n%2 === 0);
  assert.equal(evens, [0, 2, 4, 6, 8, 10]);
  assert.end();
});


test('[filter] odds', (assert) => {
  const odds = filter(wholes, (n) => n%2 !== 0);
  assert.equal(odds, [1, 3, 5, 7, 9]);
  assert.end();
});


test('[filter] greather than four', (assert) => {
  const greaterThanFour = filter(wholes, (n) => n > 4);
  assert.equal(greaterThanFour, [5, 6, 7, 8, 9, 10]);
  assert.end();
});

test('[filter] primes', (assert) => {
  const isPrime = (n) => {
    // TODO
    if (n <= 1) return false;
    const possibleFactors = filter(wholes, (m) => m > 1 && m < n);
    const factors = filter(possibleFactors, (m) => n%m === 0);
    return factors.length === 0 ? true : false;
  }

  const primes = filter(wholes, isPrime);
  assert.equal(primes, [2, 3, 5, 7]);
  assert.end();
});


test('[map] doubled', (assert) => {
  const doubled = map(wholes, (n) => n*2);
  assert.equal(doubled, [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  assert.end();
});

test('[map] halved', (assert) => {
  const halved = map(wholes, (n) => n/2);
  assert.equal(halved, [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]);
  assert.end();
});

test('[map] fizz buzz', (assert) => {
  const fizzBuzz = map(wholes, (n) => {
    // TODO
    const fizzed = n%3 === 0 ? 'fizz' : '';
    const buzzed = n%5 === 0 ? 'buzz' : '';
    return (fizzed || buzzed) ? fizzed + buzzed : n;
  });
  assert.equal(fizzBuzz, ['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz']);
  assert.end();
});


test('[reduce] sum', (assert) => {
  const sum = reduce(wholes, (acc, val) => acc + val);
  assert.equal(sum, 55);
  assert.end();
});
