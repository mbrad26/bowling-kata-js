class Game {
  #score;

  constructor() {
    this.#score = 0;
  }

  roll(pins) {
    this.#score += pins
  };

  score() {
    return this.#score
  };
};

module.exports = Game;