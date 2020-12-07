const Game = require('../lib/game');

describe('Game', () => {
  const game = new Game();

  it('is defined', () => {
    expect(game).toBeDefined();
  });

  it('calculates a getter game', () => {
    for(let i = 0; i < 20; i++) {
      game.roll(0);
    };

    expect(game.score()).toEqual(0);
  });
});