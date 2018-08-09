'use strict';

// instead of myArray.push(element)
const append = (element, array) => {
  // TODO return a new array with the new element at the end
  return array.concat([element]);
};

// instead of myArray[index] = value
const update = (index, value, array) => {
  // TODO return a new copy of the array with the given value at index
  return array.slice(0, index).concat([value]).concat(array.slice(index + 1));
};

// instead of myArray.pop();
const pop = (array) => {
  // TODO return a new array with the last old element removed
  return array.slice(0, -1);
};


module.exports = { append, update, pop };
