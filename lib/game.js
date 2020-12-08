class Game {
  #rolls;
  #currentRoll;


  constructor() {
    this.#rolls = [];
    this.#currentRoll = 0;
  }

  roll(pins) {
    this.#rolls[this.#currentRoll] = pins;
    this.#currentRoll++;
  };

  score() {
    let score = 0;
    for(let i = 0; i < this.#rolls.length; i++) {
      score += this.#rolls[i];
    }
    return score
  };
};

module.exports = Game;