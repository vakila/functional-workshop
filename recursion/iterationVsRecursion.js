'use strict';


const imperativeFactorial = (n) => {
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
};

console.log(imperativeFactorial(4));
console.log(imperativeFactorial(20));
console.log(imperativeFactorial(15717));
// 
//
// const recursiveFactorial = (n) => {
//   if (n === 0) return 1;
//   return n * recursiveFactorial(n-1);
// };
//
// console.log(recursiveFactorial(4));
// console.log(recursiveFactorial(20));
// console.log(recursiveFactorial(15717));
//


const tailRecursiveFactorial = (n) => {
  const fact = (n, acc) => {
    if (n === 0) return acc;
    return fact(n-1, acc*n);
  };
  return fact(n, 1);
}

console.log(tailRecursiveFactorial(4));
console.log(tailRecursiveFactorial(20));
console.log(tailRecursiveFactorial(15717));
