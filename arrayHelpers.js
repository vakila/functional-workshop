'use strict';


// HELPER FUNCTIONS to get used to a more functional style
// Use these (e.g. count(array) instead of array.length, etc.)

// get the number of elements in an array
const count = (array) => array.length;

// get the first element of an array
const head = (array) => array[0];

// get the rest of the array (all except the first element)
const tail = (array) => array.slice(1);

module.exports = { count, head, tail };
