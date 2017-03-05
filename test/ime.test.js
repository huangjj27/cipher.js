import assert from 'assert';
import {describe, it} from 'mocha';
import cipher from '../src/ime';

describe('#ime.js', () => {
  describe('#encrypt()', () => {
    // success testament ues cases
    it('"abc" should be "212223"', () => {
      assert.strictEqual(cipher('encrypt', 'abc'), '212223');
    });

    it('"I love you" should be "43 53638332 936382"', () => {
      assert.strictEqual(cipher('encrypt', 'I love you'), '43 53638332 936382');
    });
    
    it('"" should be ""', () => {
      assert.strictEqual(cipher('encrypt', ''), '');
    });

    // exception testament use cases
    it('"中文" should be error', () => {
      assert.throws(
        () => cipher('encrypt', '中文'),
        Error, /the text can not be encrypted to IME codes!/
      );
    });
  });

  describe('#decipher()', () => {
    // success testament ues cases
    it('"212223" should be "abc"', () => {
      assert.strictEqual(cipher('decipher', '212223'), 'abc');
    });

    it('"43 53638332 936382" should be "i love you"', () => {
      assert.strictEqual(cipher('decipher', '43 53638332 936382'), 'i love you');
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
