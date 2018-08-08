'use strict';


//
// const imperativeSum = (numArray) => {
//   let total = 0;
//   for (let value of numArray) {
//     total += value;
//   }
//   return total;
// };
//
//
// console.log(imperativeSum([1,2,3,4,5]));
// console.log(imperativeSum([]));
//
//
//
// const imperativeMean = (numArray) => {
//   let nValues = 0;
//   let total = 0;
//   for (let value of numArray) {
//     total += value;
//     nValues++;
//   }
//   return total/nValues;
// };
//
// console.log(imperativeMean([1,2,3,4,5]));
// console.log(imperativeMean([1,1.5,1.3,0.4]));
// console.log(imperativeMean([]));



const recursiveSum = (numArray) => {
  if (numArray.length === 0) return 0;
  return numArray[0] + recursiveSum(numArray.slice(1));
};

console.log(recursiveSum([1,2,3]));
console.log(recursiveSum([]));


const recursiveMean = (numArray) => {

  const mean = (numArray, sum, nValuesSeen) => {
    if (numArray.length === 0) return sum; // TODO check on this!
    if (numArray.length === 1) return (sum+numArray[0])/(nValuesSeen+1);
    return mean(numArray.slice(1), sum+numArray[0], nValuesSeen+1);
  };
  return mean(numArray, 0, 0)
};

console.log(recursiveMean([1,2,3,4,5]));
console.log(recursiveMean([]));
