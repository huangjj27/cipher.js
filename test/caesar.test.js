import assert from 'assert';
import {describe, it} from 'mocha';
import caesar from '../src/caesar';

describe('#caesar.js', () => {
  describe('#encryption', () => {
    // success testament ues cases
    it('"abc" should be "def"', () => {
      assert.strictEqual(caesar('encrypt', 'abc', 3), 'def');
    });

    it('"I love you" should be "o sgct ngx"', () => {
      assert.strictEqual(caesar('encrypt', 'I love you', 3), 'l oryh brx');
    });

    it('"" should be ""', () => {
      assert.strictEqual(caesar('encrypt', '', 3), '');
    });

    it('"    you" should be "brx"', () => {
      assert.strictEqual(caesar('encrypt', '    you', 3), 'brx');
    });
  });

  describe('#deciphering', () => {
    // success testament ues cases
    it('"def" should be "abc"', () => {
      assert.strictEqual(caesar('decipher', 'def', 3), 'abc');
    });

    it('"abc" should be "xyz"', () => {
      assert.strictEqual(caesar('decipher', 'abc', 3), 'xyz');
    });
    it('"l oryh brx" should be "i love you"', () => {
      assert.strictEqual(caesar('decipher', 'l oryh brx', 3), 'i love you');
    });
  });

   // exception testament use cases
  it('"中文" should be error', () => {
    assert.throws(
      () => caesar('encrypt', '中文', 3),
      Error, /the string can not be encrypted with Caesar codes!/
    );
  });

  it('".-/-.../-.-." should throw error', () => {
    assert.throws(
      () => caesar('encrypt', '.-/-.../-.-.'),
      Error, /the string can not be encrypted with Caesar codes!/
    );
  });

  it('movement of 27 should throw error', () => {
    assert.throws(
      () => caesar('encrypt', 'abc', 27),
      RangeError, /movement is not in range 1~25: \d{1,2}/
    );
  });

  it('movement of 0 should throw error', () => {
    assert.throws(
      () => caesar('decipher', 'abc', 0),
      RangeError, /movement is not in range 1~25: \d{1,2}/
    );
  });

  it('type of 17 should throw error', () => {
    assert.throws(
      () => caesar(17, 'abc', 3),
      TypeError, /type is not encrypt or decipher!/
    );
  });

  it('type of "other" should throw error', () => {
    assert.throws(
      () => caesar('other', 'abc', 3),
      TypeError, /type is not encrypt or decipher!/
    );
  });
});
