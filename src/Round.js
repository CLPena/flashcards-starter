// const data = require('./data');
// const prototypeQuestions = data.prototypeData;
// const util = require('./util');
const Turn = require('../src/Turn');


class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(deck){
    return this.deck.cards[this.turns];
  }

  takeTurn(guess){
    var turn = new Turn(guess, this.deck.cards[this.turns]);
    var cardId = turn.currentCard.id;
    turn.evaluateGuess();
    if(turn.evaluateGuess() === false){
      this.incorrectGuesses.push(cardId);
    }
    var result = turn.giveFeedback();
    this.turns += 1;
    return result;
  }

  calculatePercentCorrect(){
    var rightAnswers = this.turns - this.incorrectGuesses.length;
    var percentCorrect = Math.round((rightAnswers / this.turns) * 100);
    return percentCorrect;
  }

  endRound(){
    console.log(`** ROUND OVER! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
