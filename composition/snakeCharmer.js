'use strict';

const pipeline = require('./pipeline.js');
const { count, head, tail } = require('../arrayHelpers.js');
const { map, reduce, filter } = require('../higher-order/filterMapReduce.js');

// TODO Define reusable, single-argument functions for pipelining here


const snakeToCamel = pipeline( ); //TODO
const snakeToTrain = pipeline( ); //TODO


module.exports = { snakeToCamel, snakeToTrain };
