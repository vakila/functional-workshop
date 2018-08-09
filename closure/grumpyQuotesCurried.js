'use strict';


const curriedQuote = //TODO (name) => (year) => (text) => `"${text}"\n\t- ${name} (${year})\n\n`;


const quoteCrockford = curriedQuote('Doug Crockford');
const quoteDijkstra = curriedQuote('Edsger Dijkstra');
const quoteDijkstra75 = quoteDijkstra(1975);


const grumpyQuotes = [

  curriedQuote('Guido van Rossum')(2001)("Don't you hate code that's not properly indented?"), // https://slashdot.org/story/01/04/20/1455252/guido-van-rossum-unleashed

  quoteCrockford(2005)('There are no good texts on JavaScript programming.'), // http://crockford.com/javascript/style1.html
  quoteCrockford(2008)('JavaScript is an astonishing language, in the very worst sense.'), // http://crockford.com/javascript/popular.html

  quoteDijkstra(1978)('Object oriented programming is an exceptionally bad idea which could only have originated in California.'), // https://www.quora.com/Why-did-Dijkstra-say-that-%E2%80%9CObject-oriented-programming-is-an-exceptionally-bad-idea-which-could-only-have-originated-in-California-%E2%80%9D/answer/Terry-Moore-32
  quoteDijkstra75('By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.'), // https://www.cs.utexas.edu/users/EWD/ewd04xx/EWD498.PDF
  quoteDijkstra75("Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer."), // ibid.
  quoteDijkstra75("The irony of my self-contradiction is lost on me. [Just kidding, he didn't actually say this one - making it all the more true!]") // ibid.

];

if (require.main === module) {
  const { map } = require('../recursion/filterMapReduce.js');

  // Warning: non-functional console.logging ahead!
  map(grumpyQuotes, console.log);
}
