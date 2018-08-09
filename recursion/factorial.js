'use strict';


const imperativeFactorial = (n) => {
  // TODO
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
};


const recursiveFactorial = (n) => {
  // TODO
  if (n === 0) return 1;
  return n * recursiveFactorial(n-1);
};


const tailRecursiveFactorial = (n) => {
  // TODO
  const fact = (n, acc) => {
    if (n === 0) return acc;
    return fact(n-1, acc*n);
  };
  return fact(n, 1);
}
