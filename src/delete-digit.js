const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const d = str
    .split('')
    .reduce((acc, cur) =>
      +str.replace(acc, '') > +str.replace(cur, '') ? acc : cur
    );
  return +str.replace(d, '');
}

module.exports = {
  deleteDigit,
};
