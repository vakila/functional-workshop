# Getting Closure

When a function is defined within another function, the inner function can remember things about the outer function's scope at the time it (the inner function) was defined. This "remembering", aka closure, is useful for avoiding long function signatures in the stateless functional world where we need to pass in all relevant inputs as arguments.

To make functions more modular and easier to reuse, we can use techniques like currying, which lets us take advantage of closure to turn a function with any number of arguments into a series of single-argument functions, such that we can provide only some of the input arguments and get a "partially applied" function.

In fact, we can even take advantage of closure to write functional code that emulates object-oriented programming. It might sound strange, but with closures we can take advantage of closure to create functions that "feel" like objects, since they remember the "properties" of the scope in which they were defined.

## Exercises

### Basic Closures
  - In `basicClosure.js`, the `signMessage` function takes a message, a salutation (e.g. "Farewell" or "Best regards"), and a name, and formats them into a signed message like one might use in an email.
  - [ ] Work through the `TODO`s to complete the `signAs`, `signWith`, and `makeSignature` functions, all of which return closures as described.
  - [ ] Run the module with the command `node basicClosures.js` to ensure that the closures work as intended.

### Currying
  - In the module `grumpyQuotes.js`, we define the `quote` function to attribute a (grumpy) statement to a given (grumpy) person and year. Unfortunately, even though several quotes share the same author or both author & year, we have to re-type all 3 values every time.
  - [ ] Run `node grumpyQuotes.js` to see the desired output. Laugh at how grumpy all these programmers were/are.
  - [ ] Fill in the `curriedQuote` function in `grumpyQuotesCurried.js` to create reusable, single-argument functions that save us from having to repeat ourselves so much.
  - [ ] Run `node grumpyQuotesCurried.js` to verify that the output is the same as before.

### Functional Object-Oriented Programming - yes, it's (kind of) a thing!
  - The `functionalShapes.js` module contains functional code that emulates an object-oriented approach to working with related geometric shapes (rectangles and squares).
    - [ ] Read the tests in `functionalShapes.test.js` to get a sense for how a programmer might manipulate these "fobjects". Run the tests (`node functionalShapes.test.js`) - they should be failing.
    - [ ] Work through the `TODO`s in `functionalShapes.js` to get the tests to pass.
    - [ ] [challenge] Add functions for other related shapes, e.g. ellipses and circles or trapezoids and rhombuses.

  - [ ] [challenge] Write a small FOOP program for a domain of your choice. Work together or with a partner/group, as you prefer. Be creative! Here are some ideas:
    - Conference session manager (e.g. each session has title, speaker, time, etc.; speaker and organizer are persons; person has name, affiliation, etc.)
    - Restaurant menu (e.g. menu has dishes/categories of dishes; dish has name, price, ingredients; ingredients have dietary warnings, etc.)
    - Dungeon map (e.g. dungeon has rooms; each room may have characters, items, connecting rooms up/down/left right; items have effects; characters have names, etc.)
