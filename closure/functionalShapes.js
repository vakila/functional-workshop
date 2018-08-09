'use strict';

const rectangle = (height, width) => {
  return (method) => {
    switch (method) {
      case 'getWidth': return () => width;
      case 'getHeight': return  //TODO
      case 'getArea': return //TODO
      case 'setWidth': return (newWidth) => rectangle(height, newWidth);
      case 'setHeight': return  //TODO
      case 'toString': return () => new Array(height+1).join(new Array(width+1).join('X ') + '\n');
      default: return (...args) => `unknown method "${method}"`;
    }
  }
};

const square = (side) => {
  return (method) => {
    if (method === 'setSize' || method === 'setWidth' || method === 'setHeight') {
      return (size) => // TODO
    }
    else return //TODO
  }
};

module.exports = { rectangle, square };
