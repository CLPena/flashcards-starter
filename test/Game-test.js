const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should create a new instance of Deck', function() {
    const game = new Game();
    game.start();
    expect(Deck).to.be.a('function');
  });

  it('should create a new instance of Round', function() {
    const game = new Game();
    game.start();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should store the current round', function() {
    const game = new Game();
    game.start();
    expect(game.round).to.be.an('object');
  });

  it('should hold all the cards in the cards array', function() {
    const game = new Game();
    game.start();
    expect(game.cards.length).to.equal(prototypeQuestions.length);
  });

});
