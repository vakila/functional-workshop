'use strict';

const pipeline = require('./pipeline.js');
const { count, head, tail } = require('../arrayHelpers.js');
const { map, reduce, filter } = require('../recursion/filterMapReduce.js');


const desnake = (snake_case_string) => snake_case_string.split('_');
const capitalize = (string) => string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
const capitalizeAll = (stringArray) => map(capitalize, stringArray)
const camelize = (stringArray) => [head(stringArray)].concat(capitalizeAll(tail(stringArray)));
const concatenate = (stringArray) => reduce((acc, str) => acc + str, '', stringArray);
const hyphenate = (stringArray) => reduce((acc, str) => [acc, str].join('-'), head(stringArray), tail(stringArray));


const snakeToCamel = pipeline(desnake, camelize, concatenate);
const snakeToTrain = pipeline(desnake, capitalizeAll, hyphenate);


module.exports = { snakeToCamel, snakeToTrain };
