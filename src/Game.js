const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');


class Game {
  constructor() {
    this.round = null;
    this.cards = [];
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(){
    for(var i = 0; i < prototypeQuestions.length; i++){
      var card = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer);
      this.cards.push(card);
    }
    var deck = new Deck(this.cards);
    var round = new Round(deck);
    this.round = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
    round.endRound();
  }
}

module.exports = Game;
