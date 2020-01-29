const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
  }

  returnGuess(){
    return guess;
  }

  returnCard(){
    return currentCard;
  }

  evaluateGuess(){
    if(guess === currentCard.correctAnswer){
      return true;
    } else {
      return false;
    }
  }
  
  giveFeedback(){
    if(evaluateGuess()){
      return 'CORRECT!'
    } else {
      return 'INCORRECT!'
    }
  }
}

module.exports = Turn;
