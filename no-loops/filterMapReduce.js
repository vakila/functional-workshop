'use strict';

// HELPER FUNCTIONS to get used to a more functional style
// Use these (e.g. count(array) instead of array.length, etc.)

// get the number of elements in an array
const count = (array) => array.length;

// get the first element of an array
const head = (array) => array[0];

// get the rest of the array (all except the first element)
const tail = (array) => array.slice(1);



const filter = (array, predicateFn) => {
  // TODO
  if (count(array) === 0) return [];
  const aHead = head(array);
  const aTail = tail(array);
  const filtered = predicateFn(aHead) ? [aHead] : [];
  return filtered.concat(filter(aTail, predicateFn));
}



const map = (array, fn) => {
  // TODO
  if (count(array) === 0) return [];
  return [fn(head(array))].concat(map(tail(array), fn));
};



const reduce = (array, reducerFn, initialValue) => {
  // TODO
  if (initialValue == undefined) {
    if (count(array) === 0) throw TypeError('Cannot reduce an empty array without an initial accumulator value');
    if (count(array) === 1) return array[0];
    return reduce(tail(array), reducerFn, head(array));
  } else {
    if (count(array) === 0) return initialValue;
    return reduce(tail(array), reducerFn, reducerFn(initialValue, head(array)));
  }
};

if (require.main === module) {
  // Warning! Non-functional console.log statements ahead!


}

module.exports = { filter, map, reduce };
