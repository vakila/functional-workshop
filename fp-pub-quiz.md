# FP Pub Quiz

## Questions

1. What are the characteristics of a pure function?

2. In what year did Alonzo Church invent the Lambda Calculus?

3. Which of the following JS `Array` methods are functional?
  a) `.push`
  b) `.concat`
  c) `.slice`
  d) `.splice`
  e) `.sort`
  f) `.join`

4. When a deeply recursive function blows the call stack, Chrome gives the error message "Maximum call stack size exceeded". What error message does Firefox give?

5. Where does the term "currying" get its name?


## Answers

1. What are the characteristics of a pure function?

  a) It has no effect on the program state or world other than returning its output (no side effects)
  b) Its output only depends on its input values, and will always return the same output given the same input(s) (deterministic)

2. In what year did Alonzo Church invent the Lambda Calculus?

3. Which of the following JS `Array` methods are functional (pure)?
  a) `.push` impure
  b) `.concat` pure
  c) `.slice` pure
  d) `.splice` impure
  e) `.sort` impure
  f) `.join` pure

4. "Too much recursion"

5. Named after logician/mathematician Haskell Curry (the programming language Haskell is also named after him!)
