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
    return this.deck.cards[this.turns];
  }

  takeTurn(turn){
    // create new t urn here, take out of test
    var cardId = turn.currentCard.id;
    this.turns += 1;
    turn.evaluateGuess();
    if(turn.evaluateGuess() === false){
      this.incorrectGuesses.push(cardId);
    }
    // The next card becomes current card
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
