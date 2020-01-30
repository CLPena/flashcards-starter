const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
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
});
