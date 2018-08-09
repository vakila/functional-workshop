# Functions all the way down

In functional programming we construct programs entirely out of modular pure functions, using function composition to "combine" functions' effects to create a pipeline through which our program's data can flow through.

## Exercises

- Pipelining (`pipeline.js`)
  - [ ] Run the tests in `pipeline.test.js` with the command `node pipeline.test.js` - tests should be failing
  - [ ] Get the tests to pass by implementing the `pipeline` function, which takes as arguments any number of single-argument functions and returns a single function representing their composition, i.e. a function that passes the input value through a "pipeline" of the functions.
    - [ ] [challenge] Implement the `pipeline` function in one line, using the `reduce` function you implemented in `no-loops/filterMapReduce.js`
  - [ ] Compare your implementation(s) with those of your partner/group

- The case for composition (`snakeCharmer.js`)
  - [ ] Run the tests in `snakeCharmer.test.js` with the command `node snakeCharmer.test.js` - tests should be failing, let's get them to pass
  - [ ] Fill in the `snakeToCamel` function to make a composed function that reformats a string from `snake_case` to `camelCase`. Try to break down the transformation into small functions, then use your `pipeline` function to compose them.
  - [ ] Fill in the `snakeToTrain` function to reformat a string from `snake_case` to `Train-Case`. How much of your code from `snakeToCamel` can you reuse?
  - [ ] [challenge] Write more functions to translate to more cases, e.g. `PascalCase`, `kebab-case`, `SCREAMING_SNAKE_CASE`, `SCREAMING-TRAIN-CASE`, etc... - try to use pipelining to reuse as much code as possible!
  - [ ] [challenge] Since our pipeline operates on single-argument functions, it will work great in combination with currying, which transforms a multi-argument function into a series of single-argument ones. Try to de-clutter your `snakeCharmer` code by writing & using curried versions of the `filter`, `map`, and `reduce` functions - in what cases does currying help?
