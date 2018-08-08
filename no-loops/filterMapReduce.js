'use strict';


// get the first element of an array
const head = (array) => array[0];

// get the rest of the array except the first element
const tail = (array) => array.slice(1);



const filter = (array, predicateFn) => {
  if (array.length === 0) return [];
  const aHead = head(array);
  const aTail = tail(array);
  const filtered = predicateFn(aHead) ? [aHead] : [];
  return filtered.concat(filter(aTail, predicateFn));
}

const wholes = [1,2,3,4,5,6,7,8,9,10];

const evens = filter(wholes, (n) => n%2 === 0);
const odds = filter(wholes, (n) => n%2 !== 0);
const greaterThanFour = filter(wholes, (n) => n > 4);

const isPrime = (n) => {
  const possibleFactors = filter(wholes, (m) => m > 1 && m < n);
  const factors = filter(possibleFactors, (m) => n%m === 0);
  return factors.length === 0 ? true : false;
}

const primes = filter(wholes, isPrime);


const map = (array, fn) => {
  if (array.length === 0) return [];
  return [fn(head(array))].concat(map(tail(array), fn));
};

const doubled = map(wholes, (n) => n*2);
const halved = map(wholes, (n) => n/2);
const verbose = map(wholes, (n) => `number ${n}`);

const fizzBuzz = map(wholes, (n) => {
  const fizzed = n%3 === 0 ? 'fizz' : '';
  const buzzed = n%5 === 0 ? 'buzz' : '';
  return (fizzed || buzzed) ? fizzed + buzzed : n;
});


const reduce = (array, reducerFn, initialValue) => {
  // simplified reduce with no initial value argument
  console.log(array, initialValue);
  if (initialValue == undefined) {
    console.log('no initial');
    if (array.length === 0) throw TypeError('Cannot reduce an empty array without an initial accumulator value');
    if (array.length === 1) return array[0];
    return reduce(array.slice(1), reducerFn, array[0]);
  } else {
    console.log('initial', initialValue);
    if (array.length === 0) return initialValue;
    return reduce(array.slice(1), reducerFn, reducerFn(initialValue, array[0]))
  }
};

console.log(reduce([1, 2, 3, 4], (acc, el) => acc-el));

module.exports = { filter, map, reduce };
