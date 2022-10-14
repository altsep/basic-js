const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const methods = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];
  let newArr = arr.slice();
  let discarded = false;
  for (const method of methods) {
    if (newArr.includes(method)) {
      for (let i = 0; i < arr.length; i++) {
        switch (newArr[i]) {
          case '--discard-next':
            newArr.splice(i, 2);
            discarded = true;
            break;
          case '--discard-prev':
            !discarded && i !== 0
              ? newArr.splice(i - 1, 2)
              : newArr.splice(i, 1);
            break;
          case '--double-next':
            i !== newArr.length - 1
              ? newArr.splice(i, 1, arr[i + 1])
              : newArr.splice(i, 1);
            break;
          case '--double-prev':
            !discarded && i !== 0
              ? newArr.splice(i, 1, arr[i - 1])
              : newArr.splice(i, 1);
            break;
          default:
            continue;
        }
      }
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
