const Game = require('../lib/game');

describe('Game', () => {
  const game = new Game();

  it('is defined', () => {
    expect(game).toBeDefined();
  });

  it('responds to #roll', () => {
    expect(game.roll()).toBe();
  });

  it('responds to #score', () => {
    expect(game.score()).toBe();
  });
});