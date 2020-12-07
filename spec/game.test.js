const Game = require('../lib/game');

describe('Game', () => {
  it('is defined', () => {
    const game = new Game();
    expect(game).toBeDefined();
  });
});