const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;
  for (const i = 0; i < matrix.length; i++) {
    for (const j = 0; j < matrix[i].length; j++) {
      if (i === 0 || (i > 0 && matrix[i - 1][j] !== 0)) count += matrix[i][j];
    }
  }
  return count;
}

module.exports = {
  getMatrixElementsSum,
};
