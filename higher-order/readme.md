# Higher-order functions

We say a language has "first-class functions" if it supports functions being passed as input or output values of other functions. JS has this feature, and JavaScripters take advantage of it all the time - e.g. it's what allows us to pass a callback function as an input parameter for another function. It's also possible to have a function as a return value. A function which either takes or returns another function is called a "higher-order function".


## Exercises

### Filter, Map, Reduce (`filterMapReduce.js`)
  - [ ] Run the tests in `filterMapReduce.test.js` with the command `node filterMapReduce.test.js` - tests should be failing
  - [ ] Work through the `TODO`s in `filterMapReduce.js` to write recursive implementations of all three functions
    - To move away from the object-oriented method-calling mindset to a functional mindset, use the helper functions `head`, `tail`, and `count` defined in `arrayHelpers.js`
    - [ ] Run the tests again - most should now be passing
  - [ ] Work through the `TODO`s in `filterMapReduce.test.js` to write applications of these functions that get the remaining tests to pass
  - [ ] Compare your implementations with those of your partner/group and discuss
