const Game = require('../lib/game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  const rollMany = (n, pins) => {
    for(let i = 0; i < n; i++) {
      game.roll(pins);
    };
  };

  const rollSpare = () => {
    game.roll(7);
    game.roll(3);
  }

  it('is defined', () => {
    expect(game).toBeDefined();
  });

  it('calculates a gutter game', () => {
    rollMany(20, 0);

    expect(game.score()).toEqual(0);
  });

  it('calculates when all roles are 1', () => {
    rollMany(20, 1);
    
    expect(game.score()).toEqual(20);
  });

  it('calculates a spare', () => {
    rollSpare();
    game.roll(8);
    rollMany(17, 0);

    expect(game.score()).toEqual(26);
  });

  it('calculates a strike', () => {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);

    expect(game.score()).toEqual(24);
  });
});