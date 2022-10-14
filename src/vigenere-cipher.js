const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.table = [];
    this.direct = direct;

    const charCodes = Array.from(Array(26)).map((_, i) => i + 65);
    const alphabet = charCodes.map((x) => String.fromCharCode(x));
    for (let i = 0; i < alphabet.length; i++) {
      let cp = alphabet.slice();
      const part = cp.splice(0, i);
      this.table.push(cp.concat(part));
    }
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    let fullKey = '';
    for (let i = 0; i < str.length; i += key.length) {
      fullKey += key;
    }
    const letterStr = str.replace(/[^a-z]/gi, '');
    fullKey = fullKey.slice(0, letterStr.length);
    let r = '';
    let keyCount = 0;
    for (const l of str) {
      const row = fullKey.toUpperCase().charCodeAt(keyCount) - 65;
      const col = l.toUpperCase().charCodeAt(0) - 65;
      if (/[a-z]/i.test(l)) {
        r += this.table[row][col];
        keyCount++;
      } else r += l;
    }
    return this.direct ? r : r.split('').reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    let fullKey = '';
    for (let i = 0; i < str.length; i += key.length) {
      fullKey += key;
    }
    const letterStr = str.replace(/[^a-z]/gi, '');
    fullKey = fullKey.slice(0, letterStr.length);
    let r = '';
    let keyCount = 0;
    for (const l of str) {
      if (/[a-z]/i.test(l)) {
        const row = fullKey.toUpperCase().charCodeAt(keyCount) - 65;
        const i = this.table[row].indexOf(l);
        const char = this.table[0][i];
        r += char;
        keyCount++;
      } else r += l;
    }
    return this.direct ? r : r.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
