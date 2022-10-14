const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  return str.split('').reduce((acc, cur, i) => {
    if (str[i + 1] === cur) {
      count++;
      return acc;
    } else {
      const t = count > 1 ? count + cur : cur;
      count = 1;
      return (acc += t);
    }
  }, '');
}

module.exports = {
  encodeLine,
};
