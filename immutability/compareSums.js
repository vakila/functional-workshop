'use strict';


const iterativeSum = (numArray) => {
  let total = 0;
  for (let value of numArray) {
    total += value;
  }
  return total;
};

const reduceSum = (numArray) => {
  return numArray.reduce((acc, val) => acc + val);
};

const moriSum = (numVector) => {
  const { reduce, sum } = require('mori');
  return reduce(sum, 0, numVector);
}

module.exports = { iterativeSum, reduceSum, moriSum };
