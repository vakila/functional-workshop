'use strict';


const curriedQuote = //TODO (name) => (year) => (text) => `"${text}"\n\t- ${name} (${year})\n\n`;


const quoteCrockford = curriedQuote('Doug Crockford');
const quoteDijkstra = curriedQuote('Edsger Dijkstra');
const quoteDijkstra75 = quoteDijkstra(1975);


const grumpyQuotes = [
  curriedQuote('Guido van Rossum')(2001)("Don't you hate code that's not properly indented?"),

  quoteCrockford(2005)('There are no good texts on JavaScript programming.'),
  quoteCrockford(2008)('JavaScript is an astonishing language, in the very worst sense.'),

  quoteDijkstra(1978)('Object oriented programming is an exceptionally bad idea which could only have originated in California.'),
  quoteDijkstra75('By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.'),
  quoteDijkstra75("Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer."),
  quoteDijkstra75("The irony of my self-contradiction is lost on me. [Just kidding, he didn't actually say this one - making it all the more true!]")
];

if (require.main === module) {
  const { map } = require('../recursion/filterMapReduce.js');

  // Warning: non-functional console.logging ahead!
  map(grumpyQuotes, console.log);
}
