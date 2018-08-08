# First Steps into Functional Programming
A super fun(ctional) programming workshop by [@AnjanaVakil](https://twitter.com/AnjanaVakil)

## Why am I here?

In recent years you may have found yourself hearing more and more about this trendy topic of “functional programming", from a bunch of excited coders enthusiastically gushing about how it helps them write elegant, modular code that's easier to test, debug, and reason about. If you're like me, you may have started wondering:

- What is functional programming anyway, and why are people so excited about it?
- What does functional code look like? How is it different from imperative or OO code?
- What tools do I need to write functional programs? Do I have to learn Haskell? (spoiler alert: no!)

If you too have been asking yourself questions like these, please join me in this friendly, practical exploration of functional programming fundamentals.

## What will we learn in this workshop?

We'll learn how to follow the basic principles of the functional programming paradigm, such as:
- construct programs from pure, “input in-output out” functions through which data flows
- use higher-order functions like map & filter instead of iterative loops, and closures instead of objects & classes
- avoid mutation (changing things in-place), and use immutable data structures for efficiency


## Installation

The examples in this repository are written in Node.js, and instructions will assume that you're working in Node.

However, if you prefer to use client-side JavaScript, that's also fine: you can follow along with the exercises by copy-pasting the code samples into your browser's web console. For the closest similarity to Node.js, you may want to use Chrome.

- [ ] Install Node (version 6 or 8 recommended), if you don't already have it. I recommend installing via NVM (Node Version Manager). Installing Node also installs npm.
- [ ] Clone the workshop repository: `git clone https://github.com/vakila/functional-workshop.git`
  - If you don't use GitHub, no problem: download a zip file of the repository instead, and unzip it.
- [ ] Change into the repository directory and install the project dependencies:
  ```
  $ cd functional-workshop
  $ npm install
  ```





## Outline & Schedule


**10:00-10:15** Intro & icebreakers
**10:15-11:55** Functional Programming in a nutshell: `pure-functions`

#### Topics
  - Pure Functions vs. Side Effects
  - Time, state, and (in)sanity
  - Imperative vs. Declarative programming

#### Exercises
- Pure or not? game
- Find & fix the impurities
- Write tests for both pure & impure versions

**11:55-12:00** Quick break
**12:00-13:00** Staying out of the loop: `no-loops`

#### Topics
- Iteration vs. Recursion
- Recursive function basics
- Filter, Map, Reduce
- The problem with the problem with the problem with recursion

#### Exercises
- Recursive sum & average of an array
- Implement filter, map, and reduce
- Reimplement sum & average with reduce

### _And now, a word from our sponsors:_ Tail Call Optimization

### 3. Functions all the way down
#### Topics
  - Function composition
  - Data flow
  - Currying & pipelining

#### Exercises
- Write a pipeline function
  ```
  const pipeline = (array) => {
    if (array.length === 0) { return (x) => x; }
    else if (array.length === 1) { return (x) => array[0](x); }
    else { return (x) => pipeline(array.slice(1))(array[0](x)); }
  }
  ```
- Write a program that translates from snake_case to camelCase
- Write a program that transliterates an English sentence into Cyrillic (simplified, letter for letter)

### 4. Flying first class
#### Topics
  - Functions as values
  - Closures
  - FP & OOP: BFFs

#### Exercises
- Write a conference workshop manager in FOOP
  - conference has name, date, location, workshops
  - workshop has name, date, time, facilitator, students
  - facilitator is a person
  - student is a person
  - person has name, affiliation, title, country

### _And now, a word from our sponsors:_ The Lambda Calculus

### 5. Immutable data and you
#### Topics
  - Time, state, and (in)sanity, revisited
  - Copying vs. Mutating
  - The pitfalls of immutability

#### Exercises
- Rewrite your recursive sum, product, and average functions from earlier with immutable data structures (your choice of library)
- run both with large arrays, do you notice a difference?

### _And now, a word from our sponsors:_ Persistent Data Structures

### 6. Putting it all together
#### Topics
- Review: Thinking functionally
- When is FP the right choice?
- Libraries & languages to try

#### Exercises
- Functional Katas
- FP Pub Quiz



## References & Further Reading

## Libraries & Languages

### JavaScript Libraries

- [FP utilities] [Ramda](https://ramdajs.com/) (also available in [Українська (Ukrainian)](https://github.com/ivanzusko/ramda)!)
- [FP utilities] [Lodash](https://lodash.com/)
