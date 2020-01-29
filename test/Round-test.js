const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');


describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should keep track of number of turns', function(){
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card]);
    const round = new Round(deck);

    round.takeTurn('pug');
    expect(round.turns).to.equal(1);
  });

  it('should return the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn('pug');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should evaluate the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card]);
    const round = new Round(deck);
    // round.takeTurn('function');
    expect(round.takeTurn('function')).to.equal(false);
    // expect(turn.evaluateGuess()).to.equal(false);
    round.takeTurn('object');
    expect(turn.evaluateGuess()).to.equal(true);
  });
  //
  // it('should give feedback', function() {
  //   const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const deck = new Deck([card]);
  //   const round = new Round(deck);
  //   const turn1 = new Turn('array', card);
  //   round.takeTurn(turn1);
  //   expect(turn1.evaluateGuess()).to.equal(false);
  //   expect(turn1.giveFeedback()).to.equal('INCORRECT!');
  //   const turn2 = new Turn('object', card);
  //   round.takeTurn(turn2);
  //   expect(turn2.evaluateGuess()).to.equal(true);
  //   expect(turn2.giveFeedback()).to.equal('CORRECT!');
  // });
  //
  // it('should store the ids of incorrect guesses', function(){
  //   const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const deck = new Deck([card]);
  //   const round = new Round(deck);
  //   // const turn = new Turn('array', card);
  //   // const turn2 = new Turn('function', card);
  //   // const turn3 = new Turn('object', card);
  //   round.takeTurn();
  //   expect(turn.evaluateGuess()).to.equal(false);
  //   expect(round.incorrectGuesses.length).to.equal(1);
  //   round.takeTurn();
  //   expect(turn.evaluateGuess()).to.equal(false);
  //   expect(round.incorrectGuesses.length).to.equal(2);
  //   round.takeTurn();
  //   expect(turn.evaluateGuess()).to.equal(true);
  //   expect(round.incorrectGuesses.length).to.equal(2);
  // })
});
