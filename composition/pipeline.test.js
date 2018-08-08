'use strict';

const test = require('tape');
const pipeline = require('./pipeline.js');


const pluralize = (singularWord) => singularWord + 's';
const heart = (word) => "I <3 " + word;
const exclaim = (sentence) => sentence + "!";


const showSomeLove = pipeline(pluralize, heart, exclaim);

test('[pipeline] output is as expected', (assert) => {
  assert.equal(showSomeLove('pipeline'), 'I <3 pipelines!');
  assert.equal(showSomeLove('pure function'), 'I <3 pure functions!');
  assert.equal(showSomeLove('coffee break'), 'I <3 coffee breaks!');
  assert.end();
});

test('[pipeline] order is as expected', (assert) => {
  const wrongOrder = pipeline(exclaim, heart, pluralize);

  assert.equal(wrongOrder('pipeline'), 'I <3 pipeline!s');
  assert.notEqual(showSomeLove('pipeline'), wrongOrder('pipeline'));
  assert.end();
});

test('[pipeline] pipelines can be composed', (assert) => {
  const pipe1 = pipeline(pluralize, pipeline(heart, exclaim));
  const pipe2 = pipeline(pipeline(pluralize, heart), exclaim);

  assert.equal(showSomeLove('composition'), pipe1('composition'));
  assert.equal(pipe1('composition'), pipe2('composition'));
  assert.end();
});
