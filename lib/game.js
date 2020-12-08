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
    let frameIndex = 0;
    for(let frame = 0; frame < 10; frame++) {
      if(this.isStrike(frameIndex)) {
        score += 10 + this.#rolls[frameIndex + 1] + this.#rolls[frameIndex + 2];
        frameIndex++;
      } if(this.isSpare(frameIndex)) {
        score += 10 + this.#rolls[frameIndex+2];
        frameIndex += 2;
      } else {
        score += this.#rolls[frameIndex] + this.#rolls[frameIndex+1];
        frameIndex += 2;
      };
    };

    return score;
  };

  isSpare(frameIndex) {
    return this.#rolls[frameIndex] + this.#rolls[frameIndex+1] == 10;
  }

  isStrike(frameIndex) {
    return this.#rolls[frameIndex]  == 10;
  }
};

module.exports = Game;