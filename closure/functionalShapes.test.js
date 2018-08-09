'use strict';

const test = require('tape');
const { rectangle, square } = require('./functionalShapes.js');


const rect4x5 = rectangle(4, 5);

test('[functionalShapes] rectangle: constructor & getters', (assert) => {
  assert.equal(rect4x5('getWidth')(), 5, 'should remember width');
  assert.equal(rect4x5('getHeight')(), 4, 'should remember height');
  assert.equal(rect4x5('getArea')(), 20, 'should compute correct area');
  assert.equal(rect4x5('toString')(), 'X X X X X \nX X X X X \nX X X X X \nX X X X X \n', 'should output correct string');
  assert.end();
});

test('[functionalShapes] rectangle: setHeight', (assert) => {

  const rect6x5 = rect4x5('setHeight')(6);
  assert.equal(rect6x5('getHeight')(), 6, 'should remember new height');
  assert.equal(rect6x5('getWidth')(), 5, 'should remember original width');
  assert.equal(rect6x5('getArea')(), 30, 'should compute correct area');
  assert.equal(rect6x5('toString')(), 'X X X X X \nX X X X X \nX X X X X \nX X X X X \nX X X X X \nX X X X X \n', 'should output correct string');
  assert.end();
})

test('[functionalShapes] rectangle: setHeight', (assert) => {

  const rect4x3 = rect4x5('setWidth')(3);
  assert.equal(rect4x3('getWidth')(), 3, 'should remember new width');
  assert.equal(rect4x3('getHeight')(), 4, 'should remember original height');
  assert.equal(rect4x3('getArea')(), 12, 'should compute correct area');
  assert.equal(rect4x3('toString')(), 'X X X \nX X X \nX X X \nX X X \n', 'should output correct string');
  assert.end();
})



const square7 = square(7);

test('[functionalShapes] square: constructor & getters', (assert) => {
  assert.equal(square7('getWidth')(), 7, 'should remember width');
  assert.equal(square7('getHeight')(), 7, 'should remember height');
  assert.equal(square7('getArea')(), 49, 'should compute correct area');
  assert.equal(square7('toString')(),
               'X X X X X X X \nX X X X X X X \nX X X X X X X \nX X X X X X X \nX X X X X X X \nX X X X X X X \nX X X X X X X \n',
               'should output correct string');
  assert.end();
});

test('[functionalShapes] square: setHeight', (assert) => {
  const square8 = square7('setHeight')(8);
  assert.equal(square8('getWidth')(), 8, 'should remember new width');
  assert.equal(square8('getHeight')(), 8, 'should remember new height');
  assert.equal(square8('getArea')(), 64, 'should compute correct area');
  assert.end();
});

test('[functionalShapes] square: setHeight', (assert) => {
  const square9 = square7('setHeight')(9);
  assert.equal(square9('getWidth')(), 9, 'should remember new width');
  assert.equal(square9('getHeight')(), 9, 'should remember new height');
  assert.equal(square9('getArea')(), 81, 'should compute correct area');
  assert.end();
});

test('[functionalShapes] square: setSize', (assert) => {
  const square5 = square7('setSize')(5);
  assert.equal(square5('getWidth')(), 5, 'should remember new width');
  assert.equal(square5('getHeight')(), 5, 'should remember new height');
  assert.equal(square5('getArea')(), 25, 'should compute correct area');
  assert.end();
});



test('[functionalShapes] unknown method', (assert) => {
  assert.equal(rect4x5('rotate')(45), 'unknown method "rotate"');
  assert.equal(square7('getDiameter')(), 'unknown method "getDiameter"');
  assert.end();
});
