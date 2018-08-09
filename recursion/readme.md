# Avoiding loops using recursion

In functional programming, we avoid mutable state, and therefore avoid iterative loops using `for` or `while`. As an alternative to iteration, we use _recursion_ to break down the problem into smaller ones.

A recursive function has two parts:
- A base case: condition(s) under which the function returns an output without making a recursive call  
- A recursive case: condition(s) under which the function calls itself to return the output


## Exercises

### Iteration vs. recursion
  - [ ] Implement both iterative and recursive versions of functions in to compute the factorial of a given number (`factorial.js`) and the Nth number in the Fibonacci sequence (`fibonacci.js`)
  - [ ] Compare your implementations with those of your partner/group
  - [ ] Discuss with your partner/group: Which version did you find easier to write/read? Why?
  - [ ] Return to your iterative and recursive implementations in `factorial.js` or `fibonacci.js`, and try running both functions with higher and higher input numbers. When does performance become an issue for the recursive implementations?

### [challenge] Tail Recursion

  A tail-recursive function makes its recursive call in "tail position", i.e. as the very last operation in the function. In other words, the calling function does no additional work after the recursive function call is evaluated.

  - [ ] Implement tail-recursive versions of both functions. Try running the function with Node's tail call optimization enabled, which is available in Node 6 under the "harmony" flag:
    ```
    $ nvm use 6
    $ node --harmony iterationVsRecursion.js
    ```
    Can you get the function to successfully run with inputs that the non-tail-recursive version couldn't handle?
