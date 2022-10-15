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
  if (typeof d === 'undefined') return 'Unable to determine the time of year!';
  const isDate = d && d instanceof Date;
  if (!isDate || d.hasOwnProperty('toString')) throw new Error('Invalid date!');
  const mm = isDate && d.getUTCMonth();
  switch (true) {
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
