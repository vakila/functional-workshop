'use strict';

const { count, head, tail } = require('../arrayHelpers.js');

const filter = (predicateFn, array) => {
  // TODO
  if (count(array) === 0) return [];
  const aHead = head(array);
  const aTail = tail(array);
  const filtered = predicateFn(aHead) ? [aHead] : [];
  return filtered.concat(filter(predicateFn, aTail));
}



const map = (mappingFn, array) => {
  // TODO
  if (count(array) === 0) return [];
  return [mappingFn(head(array))].concat(map(mappingFn, tail(array)));
};



const reduce = (reducerFn, initialValue, array) => {
  // TODO
  // if (initialValue == undefined) {
  //   if (count(array) === 0) throw TypeError('Cannot reduce an empty array without an initial accumulator value');
  //   if (count(array) === 1) return array[0];
  //   return reduce(tail(array), reducerFn, head(array));
  // } else {
    if (count(array) === 0) return initialValue;
    return reduce(reducerFn, reducerFn(initialValue, head(array)), tail(array));
  // }
};


module.exports = { filter, map, reduce };
