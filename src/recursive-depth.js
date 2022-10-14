const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.count = 1;
  }

  calculateDepth(arr) {
    if (arr.some(Array.isArray)) {
      let x = [].concat(...arr);
      this.inc();
      return this.calculateDepth(x);
    }
    const ct = this.count;
    this.count = 1;
    return ct;
  }

  inc() {
    this.count++;
  }
}

module.exports = {
  DepthCalculator,
};
