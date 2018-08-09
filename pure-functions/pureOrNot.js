'use strict';


////////////////


const getDate = () => new Date().toDateString();

const getWorkshopDate = () => new Date(2018, 7, 9).toDateString();



////////////////



const jsonToObj = (filename) => {
  const fs = require('fs');
  const fileData = fs.readFileSync(filename, 'utf8');
  return JSON.parse(fileData);
}

const objToJson = (object) => {
  return JSON.stringify(object, null, 2);
}



////////////////


const logicalXor = (A, B) => (A || B) && !(A && B);

const truthTable = (logicalOperator) => {
  const values = [true, false];
  const table = [];
  for (const A of values) {
    for (const B of values) {
      table.push([A, B, logicalOperator(A, B)]);
    }
  }
  return table;
};

const xorTruthTable = () => {
  console.log('XOR truth table:\n================\n');
  const table = truthTable(logicalXor);
  console.log('\tA\t|\tB\t|\tA xor B');
  console.log('\t-----\t|\t-----\t|\t-----');
  table.map(([A, B, result]) => console.log(`\t${A}\t|\t${B}\t|\t${logicalXor(A,B)}`));
};




////////////////

// function examples in this section taken from
// https://github.com/mapbox/mapbox-sdk-js/blob/master/lib/helpers/url-utils.js

function encodeArray(arrayValue) {
  return arrayValue.map(encodeURIComponent).join(',');
}

function encodeValue(value) {
  if (Array.isArray(value)) {
    return encodeArray(value);
  }
  return encodeURIComponent(String(value));
}

/**
 * Append a query parameter to a URL.
 *
 * @param {string} url
 * @param {string} key
 * @param {string|number|boolean|Array<*>>} [value] - Provide an array
 *   if the value is a list and commas between values need to be
 *   preserved, unencoded.
 * @returns {string} - Modified URL.
 */
function appendQueryParam(url, key, value) {
  if (value === false || value === null) {
    return url;
  }
  var punctuation = /\?/.test(url) ? '&' : '?';
  var query = encodeURIComponent(key);
  if (value !== undefined && value !== '' && value !== true) {
    query += '=' + encodeValue(value);
  }
  return '' + url + punctuation + query;
}


////////////////


const sum = (numArray) => {
  let total = 0;
  for (let value of numArray) {
    total += value;
  }
  return total;
};
