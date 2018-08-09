# First-class functions

We say a language has "first-class functions" if it supports functions being passed as input or output values of other functions. JS has this feature, and JavaScripters take advantage of it all the time - e.g. it's what allows us to pass a callback function as an input parameter for another function.

Returning functions as values also ends up being very useful in functional programming. When a function is defined within another function, the inner function can remember things about the outer function's scope at the time it was created. Such "remembering" functions, aka closures, are an extremely useful way of representing some notion of state in the stateless functional world.

To make functions more modular and easier to reuse, we can use techniques like currying, which lets us use the concept of closure to turn a function with any number of arguments into a composition of single-argument functions.
