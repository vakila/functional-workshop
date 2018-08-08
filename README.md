# First Steps into Functional Programming
A super fun(ctional) programming workshop by [@AnjanaVakil](https://twitter.com/AnjanaVakil)

## Why am I here?

You may have found yourself hearing more and more about this trendy topic of “functional programming", from a bunch of excited coders enthusiastically gushing about how it helps them write elegant, modular code that's easier to test, debug, and reason about. If you're like me, you may have started wondering:

- What is functional programming anyway, and why are people so excited about it?
- What does functional code look like? How is it different from imperative or OO code?
- What tools do I need to write functional programs? Do I have to learn Haskell? (spoiler alert: no!)

If you too have been asking yourself questions like these, you're in the right place! If you're a functional programming pro or have zero interest in learning a new paradigm, then this probably isn't the workshop for you.

## What will we learn in this workshop?

This will be a friendly, practical exploration of functional programming fundamentals.

We'll learn how to follow the basic principles of the functional programming paradigm, such as:
- construct programs from pure, “input in-output out” functions through which data flows
- use higher-order functions like map & filter instead of iterative loops, and closures instead of objects & classes
- avoid mutation (changing things in-place), and use immutable data structures for efficiency


## How do I use this repository?

The examples in this repository are written in Node.js, and exercise instructions will assume that you're working in Node.


- [ ] Install Node (version 6 or 8 recommended), if you don't already have it. I recommend installing via NVM (Node Version Manager). Installing Node also installs npm.
- [ ] Clone the workshop repository: `git clone https://github.com/vakila/functional-workshop.git`
  - If you don't use GitHub, no problem: download a zip file of the repository instead, and unzip it.
- [ ] Change into the repository directory and install the project dependencies:
  ```
  $ cd functional-workshop
  $ npm install
  ```

## Do I have to use Node?

Not necessarily! If you prefer to use client-side JavaScript, that's also fine: you can follow along with the exercises by copy-pasting the code samples into your browser's web console. For the closest similarity to Node.js, you may want to use Chrome.

## What should I do if I get confused?

If you are struggling to wrap your head around a functional concept, that means you're completely normal and doing things right! But to keep things from getting too frustrating:

- Ask questions at any time - there are no dumb questions!
- Read up on the topic with the resources listed below. You might find an explanation or example that makes it click for you.
- Ask the facilitator for additional exercises you can do to practice working with the concept

### What should I do if I get bored?

If the workshop is moving too slowly for you or you're already familiar with some concept(s) we're working on, no worries! Take your learning into your own hands:

- Work on solving small programming problems in a functional style. Find a problem from [Exercism](https://exercism.io/tracks/javascript/exercises), [Daily Programmer](https://www.reddit.com/r/dailyprogrammer/), or a similar site you like, and force yourself to solve it functionally.
- Feel like reading rather than coding? Dive deeper into the topic(s) we're covering by checking out some of the resources listed below.



## Outline & Schedule


**10:00-10:15** Intro & icebreakers
**10:15-10:55** Functional Programming in a nutshell: `pure-functions`

#### Topics
  - Pure Functions vs. Side Effects
  - Time, state, and (in)sanity
  - Imperative vs. Declarative programming

#### Exercises
- Pure or not? game
- Find & fix the impurities
- Write tests for both pure & impure versions

**11:55-11:00** Quick break
**11:00-12:00** Staying out of the loop: `recursion`

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

**12:00-12:30** Coffee break
**12:30-1:00** Functions all the way down: `composition`
#### Topics
  - Function composition
  - Data flow
  - Pipelining

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
- Extend your program to be able to translate to and from more cases: PascalCase, kebab-case, Train-Case, SCREAMING_SNAKE_CASE, SCREAMING-TRAIN-CASE - try to use pipelining to reuse as much code as possible!


**13:00-14:00** Flying first class: `first-class-functions`

#### Topics
  - Functions as values
  - Closures
  - Currying
  - FP & OOP: BFFs

#### Exercises
- Write a conference workshop manager in FOOP
  - conference has name, date, location, workshops
  - workshop has name, date, time, facilitator, students
  - facilitator is a person
  - student is a person
  - person has name, affiliation, title, country

### _And now, a word from our sponsors:_ The Lambda Calculus

**14:00-15:00** Lunch
**15:00-15:30** Demo your FOOP program
**15:30-16:00** Immutable data and you
#### Topics
  - Time, state, and (in)sanity, revisited
  - Copying vs. Mutating
  - The pitfalls of immutability

#### Exercises
- Rewrite your recursive sum, product, and average functions from earlier with immutable data structures (your choice of library)
- run both with large arrays, do you notice a difference?

### _And now, a word from our sponsors:_ Persistent Data Structures

**16:00-16:30** Putting it all together
#### Topics
- Review: Thinking functionally
- When is FP the right choice?
- Libraries & languages to try

#### Exercises
- Functional Katas
- FP Pub Quiz



## References & Further Reading

## Libraries & Languages to try

### Functional JavaScript Libraries

- [FP utilities] [Ramda](https://ramdajs.com/) (also available in [Українська (Ukrainian)](https://github.com/ivanzusko/ramda)!)
- [FP utilities] [Lodash](https://lodash.com/)
- [Persistent Data Structures] Seamless-Immutable
- [Persistent Data Structures] Immutable.js
- [FP utilities, Persistent Data Structures] Mori

### Functional Languages

- [frontend] Elm
- [frontend] ClojureScript
- [backend] Clojure
- [backend] Elixir
