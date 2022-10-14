const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value = '') {
    this.str.push('( ' + value + ' )');
    return this;
  },
  removeLink(position = this.str.length) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.str.length
    ) {
      this.str = [];
      throw new Error("You can't remove incorrect link!");
    }
    const newStr = this.str.slice();
    newStr.splice(position - 1, 1);
    this.str = newStr;
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    const r = this.str.join('~~');
    this.str = [];
    return r;
  },
};

module.exports = {
  chainMaker,
};
