const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(deck){
    if(this.turns === 0){
      return this.deck.cards[0];
    }
  }

  takeTurn(){
    this.turns += 1;
// updates turns count, evaluates guesses, gives feedback, stores ids of incorrect guesses
  }

  calculatePercentCorrect(){
// calculates and returns percentage of correct guesses
  }

  endRound(){
// prints to console ** Round over! ** You answered <>% of the questions correctly!’
  }
}

module.exports = Round;
