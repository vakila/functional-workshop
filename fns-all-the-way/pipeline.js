'use strict';

const { map } = require('../no-loops/filterMapReduce.js');

const pipeline = (fnArray) => {
  if (fnArray.length === 0) { return (x) => x; }
  else if (fnArray.length === 1) { return (x) => fnArray[0](x); }
  else { return (x) => pipeline(fnArray.slice(1))(fnArray[0](x)); }
};


const tokenize = (string) => string.split(' ');
const splitSyllables = (stringArray) => map(stringArray, (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  //TODO
});


const engToPigLatin = pipeline([tokenize, splitSyllables, piggify, merge]);
