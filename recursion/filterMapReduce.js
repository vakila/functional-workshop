'use strict';

// NOTE: The functions in this module are for educational purposes, not high-performance production use!

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
  // NOTE: many reduce implementations allow the user to omit
  if (count(array) === 0) return initialValue;
  return reduce(reducerFn, reducerFn(initialValue, head(array)), tail(array));
};


module.exports = { filter, map, reduce };
