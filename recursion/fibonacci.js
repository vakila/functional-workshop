'use strict';


const imperativeFibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let previous = 0;
  let current = 1;
  for (let i = n; i > 1; i--) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;

};



const recursiveFibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n-2) + recursiveFibonacci(n-1);
};


const tailRecursiveFibonacci = (n) => {
  
  const fib = (n, current, previous) => {
    if (n === 0) return previous;
    if (n === 1) return current; 
    return fib(n-1, current + previous, current);
  }
  return fib(n, 1, 0); 
};




