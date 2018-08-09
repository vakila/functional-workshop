# Immutability

Functional programming goes hand in hand with immutability, because if you work only with immutable data there's less chance of accidental side effects!

Mutable data and mutating functions/methods allow us to change things in place - meaning we have values changing over time, aka state - the functional programmer's enemy. Immutable data, on the other hand, can never be changed once it has been created.

With immutable data, when we need to update something we can create a new, slightly different copy, rather than changing the original. This lets us avoid state and all the headaches that come with it.


## Exercises


- [ ] Living without mutation (`noMutation.js`)
  - [ ] Run the tests in `noMutators.test.js` with the command `node noMutators.test.js` - tests should be failing
  - [ ] Get the tests to pass by filling in the functions to create replacements for some commonly-used array mutations
  - [ ] [challenge] Which other mutating array methods/operations do you use frequently? Write non-mutating functions to replace them, and the corresponding tests

- [ ] Immutable data structures (`compareSums.js`)
  - Several libraries exist for immutable/persistent data structures (these terms are technically slightly different, but are often used interchangeably), which aim to make writing functional, non-mutating code in JS more efficient. The file `compareSums.test.js` tries out several of these libraries ([Immutable.js](https://facebook.github.io/immutable-js), [seamless-immutable](https://github.com/rtfeldman/seamless-immutable), and [mori](http://swannodette.github.io/mori/)) in the context of a simple summing operation on a series of numbers.
  - [ ] Read through the functions in `compareSums.js`, and take a glance at the way these functions are called in `compareSums.test.js`. What differences do you notice? Do you have predictions about which will be more performant? Discuss with your partner/group.
  - [ ] Run the tests in `compareSums.test.js` several times to get a sense for the relative performance of these data structures. Are there any surprises? How did your predictions hold up?
  - [ ] If time allows, read through the docs of the three libraries mentioned above. Which would you choose for functional programming, and why? (There isn't a single right answer.) Discuss with your partner/group.
