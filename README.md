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

The examples in this repository are written in [Node.js](https://nodejs.org), and exercise instructions will assume that you're working in Node.


- [ ] Install Node (version 6 or 8 recommended), if you don't already have it - I recommend installing via [NVM](https://github.com/creationix/nvm) (Node Version Manager). Installing Node also installs the package manager [npm](https://www.npmjs.com/).
- [ ] Clone the workshop repository: `git clone https://github.com/vakila/functional-workshop.git`
  - Feel free to fork the repo first, and track your work in your own fork!
  - If you don't use GitHub, no problem: download a zip file of the repository instead, and unzip it.
- [ ] Change into the repository directory and install the project dependencies:
  ```
  $ cd functional-workshop
  $ npm install
  ```
- [ ] Follow along with the exercises in each section's `readme.md`, linked in the schedule below.

### Do I have to use Node?

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

**10:15-10:45** Functional Programming in a nutshell: `pure-functions`
  - Pure Functions vs. Side Effects
  - Time, state, and (in)sanity
  - Imperative vs. Declarative programming

**10:45-11:15** Staying out of the loop: `recursion`
  - Iteration vs. Recursion
  - Recursive function basics
  - The problem with the problem with the problem with recursion

  _And now, a word from our sponsors:_ Tail Call Optimization

**11:15-11:45** Higher-order functions: `higher-order`
  - Functions as values
  - Filter, Map, Reduce

**11:45-12:00** Discussion & Questions so far

**12:00-12:30** Coffee break

**12:30-13:30** Closure: `closure`
  - Closures
  - Currying
  - FP & OOP: BFFs

**13:30-14:00** FOOP demo & discussion

  _And now, a word from our sponsors:_ The Lambda Calculus

**14:00-15:00** Lunch

**15:00-15:30** It's functions all the way down: `composition`
  - Function composition
  - Data flow
  - Pipelining

**15:30-16:00** Immutable data and you: `immutability`
  - Time, state, and (in)sanity, revisited
  - Copying vs. Mutating
  - The pitfalls of immutability

  _And now, a word from our sponsors:_ Persistent Data Structures

**16:00-16:30** Recap & takeaways (discussion)
  - Review: Thinking functionally
  - When is FP the right choice?
  - Libraries & languages to try

**16:30** End


## References & Further Reading

### FP Principles & Concepts
- Mary Rose Cook, ["A Practical Introduction to Functional Programming"](https://maryrosecook.com/blog/post/a-practical-introduction-to-functional-programming)
- [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/)
- Anouk Ruhaak, Get started with Functional Programming, [otsconf 2015](https://www.youtube.com/watch?v=6f5dt923FmQ)
- J. Kerr, “Functional Principles for OO Development”, [GOTO Chicago '14](youtu.be/GpXsQ-NIKXY)
- B. Stokke, "The Miracle of Generators", [GOTO Chicago '16](youtu.be/6mCkLZ0cwAI)
- [_Code Words_ by the Recurse Center](codewords.recurse.com)
  - Mary Rose Cook, "An introduction to functional programming"
  - Sal Becker, "This just isn't functional"
  - Patrick Dubroy, "Immutability is not enough"
- James Hague
  - [Back to the Basics of Functional Programming](https://prog21.dadgum.com/18.html)
  - [Purely Functional Retrogames](https://prog21.dadgum.com/23.html)

### Closures & Currying
- Scott Sauyet
  - ["Favoring Curry"](https://fr.umio.us/favoring-curry/#header)
  - ["Why Ramda"](https://fr.umio.us/why-ramda/#header)
- Hugh FD Jackson
  - ["Why Curry Helps"](https://hughfdjackson.com/javascript/why-curry-helps/)
  - ["Does Curry Help?"](https://hughfdjackson.com/javascript/does-curry-help/)
- Todd Motto, [Everything you wanted to know about JavaScript scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/#closures)

### Immutable data structures
- D. Nolen, “Immutability, interactivity & JS”, [FutureJS '14](youtu.be/mS264h8KGwk)
- L. Byron, “Immutable Data & React”, [React.js Conf '15](youtu.be/I7IdS-PbEgI)
- A. Vakil, "Immutable data structures for functional JS", [JSConf EU '17](youtu.be/Wo0qiGPSV-s)

### Messaging & OOP
- Alan Kay:
  -  [The early history of Smalltalk](worrydream.com/EarlyHistoryOfSmalltalk)
  -  [Comment on Moti Ben-Ari's “Objects never? Well, hardly ever!”](computinged.wordpress.com/2010/09/11/moti-asks-objects-never-well-hardly-ever/#div-comment-3766)
  -  [E-mail to Squeak list on "messaging"](wiki.c2.com/?AlanKayOnMessaging)
- William Cook:
  -  [A Proposal for Simplified, Modern Definitions of "Object" and "Object Oriented"](wcook.blogspot.com/2012/07/proposal-for-simplified-modern.html)
  -  [On Understanding Data Abstraction, Revisited](www.cs.utexas.edu/%7Ewcook/Drafts/2009/essay.pdf)
- [Structure & Interpretation of Computer Programs](mitpress.mit.edu/sicp)

## Libraries & Languages to try

### Functional JavaScript Libraries

- [FP utilities] [Ramda](https://ramdajs.com/) (also available in [Українська (Ukrainian)](https://github.com/ivanzusko/ramda)!)
- [FP utilities] [Lodash](https://lodash.com/)
- [Persistent Data Structures] [Immutable.js](https://facebook.github.io/immutable-js/)
- [Persistent Data Structures] [Seamless-Immutable](https://github.com/rtfeldman/seamless-immutable)  
- [FP utilities, Persistent Data Structures] [Mori](http://swannodette.github.io/mori/)

### Functional Languages

- [frontend] [Elm](http://elm-lang.org/)
- [frontend] [ClojureScript](https://clojurescript.org/)
- [backend] [Clojure](https://clojure.org/)
- [backend] [Elixir](https://elixir-lang.org/)
