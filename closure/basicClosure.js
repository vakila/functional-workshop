'use strict';


// Not using closures
const signMessage = (message, salutation, name) => `${message}\n\n${salutation},\n${name}\n\n`;


// Closure territory
const signAs = (name) => {
  // TODO
};

const signWith = (salutation) => {
  // TODO
};

const makeSignature = (salutation, name) => {
  // TODO
};


if (require.main === module) {
  // Warning: non-functional console.logging ahead!

  const signAsAnimal = signAs('The Party Animal');
  const friendlyMessageFromAnimal = signAsAnimal('Hey folks! Party at my place tonight, bring snacks!', 'See ya soon');
  console.log(friendlyMessageFromAnimal);

  const signForBusiness = signWith('Best');
  const officeMessage = signForBusiness("Hi, Peter. We need to talk about your TPS reports.", "Bob");
  console.log(officeMessage);

  const shakespeareanSign = makeSignature('Thine evermore', 'William');
  const sonnet = shakespeareanSign("Shall I compare thee to a summer's day? Thou art more lovely and more temperate.");
  console.log(sonnet);
}
