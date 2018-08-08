'use strict';

const pipeline = require('./pipeline.js');
const { filter, map, reduce } = require('../recursion/filterMapReduce.js');

const desnake = (snake_case_string) => snake_case_string.split('_');
const capitalize = (string) => string.toUpper();
const camelize = (stringArray) => {}

const snakeToCamel = (snake_case_string) => {
  // TODO return camelCaseString
};

const snakeToTrain = (snake_case_string) => {
  // TODO return Train-Case-String
};


module.exports = { snakeToCamel, snakeToTrain };
