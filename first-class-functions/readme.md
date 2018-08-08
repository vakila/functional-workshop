# First-class functions

We say a language has "first-class functions" if it supports functions being passed as input or output values of other functions. JS has this feature, and JavaScripters take advantage of it all the time - e.g. it's what allows us to pass a callback function as an input parameter for another function.

Returning functions as values also ends up being very useful in functional programming. We've already seen some examples of this: for instance, the `pipeline` function returns a new function composing the functions being pipelined.

Closures are functions that remember something about the context in which they were defined.
