// testment for morse encryption
import assert from 'assert';
import {describe, it} from 'mocha';
import cipher from '../src/morse';

describe('#morse.js', () => {
  describe('#encrypt()', () => {
    // success testament ues cases
    it('"abc" should be ".-/-.../-.-."', () => {
      assert.strictEqual(cipher('encrypt', 'abc'), '.-/-.../-.-.');
    });

    it('"" should be ""', () => {
      assert.strictEqual(cipher('encrypt', ''), '');
    });

    it('"I love you" should be ".. .-../---/...-/. -.--/---/..-"', () => {
      assert.strictEqual(cipher('encrypt', 'I love you'), '.. .-../---/...-/. -.--/---/..-');
    });

    // exception testament use cases
    it('"中文" should be error', () => {
      assert.throws(
        () => cipher('encrypt', '中文'),
        Error, /the text can\'t be encrypted to morse codes!/
      );
    });
  });

  describe('#decipher()', () => {
    // success testament ues cases
    it('".-/-.../-.-." should be "abc"', () => {
      assert.strictEqual(cipher('decipher', '.-/-.../-.-.'), 'abc');
    });

    it('".. .-../---/...-/. -.--/---/--." should be "i love you"', () => {
      assert.strictEqual(cipher('decipher', '.. .-../---/...-/. -.--/---/..-'), 'i love you');
    });

    // exception testament use cases
    it('"中文" should throw an Error', () => {
      assert.throws(
        () => cipher('decipher', '中文'), 
        Error, /the text is not written in morse codes!/
      );
    });
  });
});
