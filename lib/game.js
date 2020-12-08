class Game {
  #rolls;
  #currentRoll;


  constructor() {
    this.#rolls = new Array(21).fill(0);
    this.#currentRoll = 0;
  }

  roll(pins) {
    this.#rolls[this.#currentRoll] = pins;
    this.#currentRoll++;
  };

  score() {
    let score = 0;
    let i = 0;
    for(let frame = 0; frame < 10; frame++) {
      score += this.#rolls[i] + this.#rolls[i+1];
      i += 2;
    }
    return score
  };
};

module.exports = Game;