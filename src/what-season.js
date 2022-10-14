const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(d) {
  const isDate = d instanceof Date;
  const mm = isDate && d.getUTCMonth();
  console.log(d instanceof Date, mm, d && d.toLocaleString('en-US'));
  switch (true) {
    case !d:
      return 'Unable to determine the time of year!';
    case !isDate:
      throw new Error('Invalid date!');
    case mm === 11 || (mm >= 0 && mm <= 1):
      return 'winter';
    case mm <= 4:
      return 'spring';
    case mm <= 7:
      return 'summer';
    case mm <= 10:
      return 'autumn';
  }
}

module.exports = {
  getSeason,
};
