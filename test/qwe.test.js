import assert from 'assert';
import {describe, it} from 'mocha';
import qwe from '../src/qwe';

describe('#qwe.js', () => {
  describe('#encryption', () => {
    // success testament ues cases
    it('"abc" should be "qwe"', () => {
      assert.strictEqual(qwe('encrypt', 'abc'), 'qwe');
    });

    it('"I love you" should be "o sgct ngx"', () => {
      assert.strictEqual(qwe('encrypt', 'I love you'), 'o sgct ngx');
    });

    it('"" should be ""', () => {
      assert.strictEqual(qwe('encrypt', ''), '');
    });

    it('"    you" should be "    ngx"', () => {
      assert.strictEqual(qwe('encrypt', '    you'), 'ngx');
    });
  });

  describe('#deciphering', () => {
    // success testament ues cases
    it('"qwe" should be "abc"', () => {
      assert.strictEqual(qwe('decipher', 'qwe'), 'abc');
    });

    it('"o sgct ngx" should be "i love you"', () => {
      assert.strictEqual(qwe('decipher', 'o sgct ngx'), 'i love you');
    });
  });

  // exception testament use cases
  it('"中文" should be error', () => {
    assert.throws(
      () => qwe('encrypt', '中文'),
      Error, /the text can not be encrypted by QWE algorithm!/
    );
  });

   it('".-/-.../-.-." should throw error', () => {
    assert.throws(
      () => qwe('encrypt', '.-/-.../-.-.'),
      Error, /the text can not be encrypted by QWE algorithm!/
    );
  });
});
