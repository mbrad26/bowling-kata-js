const Game = require('../lib/game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('is defined', () => {
    expect(game).toBeDefined();
  });

  it('calculates a gutter game', () => {
    for(let i = 0; i < 20; i++) {
      game.roll(0);
    };

    expect(game.score()).toEqual(0);
  });

  it('calculates when all roles are 1', () => {
    for(let i = 0; i < 20; i++) {
      game.roll(1);
    }
    
    console.log('GAME: ', game);
    
    expect(game.score()).toEqual(20);
  });
});