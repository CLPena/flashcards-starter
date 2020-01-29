const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
  }

  returnGuess(){
    return this.guess;
  }

  returnCard(){
    return this.currentCard;
  }

  evaluateGuess(){
    if(this.guess === this.currentCard.correctAnswer){
      return true;
    } else {
      return false;
    }
  }

  giveFeedback(){
    if(this.evaluateGuess()){
      return 'CORRECT!'
    } else {
      return 'INCORRECT!'
    }
  }
}

module.exports = Turn;
