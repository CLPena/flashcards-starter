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

  takeTurn(turn){
    this.turns += 1;
    turn.evaluateGuess();
    // if(turn.evaluateGuess() === false){
    //   this.incorrectGuesses.push()
    // }
// gives feedback, stores ids of incorrect guesses
  }

  calculatePercentCorrect(){
    var rightAnswers = this.turns - this.incorrectGuesses.length;
    var percentCorrect = (rightAnswers / this.turns) * 100;
    this.endRound(percentCorrect);
    return percentCorrect;
  }

  endRound(percentCorrect){
    return `** ROUND OVER! ** You answered ${percentCorrect}% of the questions correctly!`
  }
}

module.exports = Round;
