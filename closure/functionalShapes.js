'use strict';

const rectangle = (height, width) => {
  return (method) => {
    switch (method) {
      case 'getWidth': return () => width;
      case 'getHeight': return () => height; //TODO
      case 'getArea': return () => width * height; //TODO
      case 'setWidth': return (newWidth) => rectangle(height, newWidth);
      case 'setHeight': return (newHeight) => rectangle(newHeight, width); //TODO
      case 'toString': return () => new Array(height+1).join(new Array(width+1).join('X ') + '\n');
      default: return (...args) => `unknown method "${method}"`;
    }
  }
};

const square = (side) => {
  return (method) => {
    if (method === 'setSize' || method === 'setWidth' || method === 'setHeight') {
      // TODO
      return (size) => square(size);
    }
    else return rectangle(side, side)(method); //TODO
  }
};

module.exports = { rectangle, square };
