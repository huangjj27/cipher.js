// testment for morse encryption
import assert from 'assert';
import {describe, it} from 'mocha';
import reverse from '../src/reverse';

describe('#reverse.js', () => {
  // success testament ues cases
  it('"abcdefghijklmnopqrstuvwxyz" should be "zyxwvutsrqponmlkjhgfedcba"', () => {
    assert.strictEqual(reverse('abcdefghijklmnopqrstuvwxyz'), 'zyxwvutsrqponmlkjihgfedcba');
  });

  it('"   spaces should    be trimmed.   " should be ".demmirt eb dluohs secaps"', () => {
    assert.strictEqual(reverse('   spaces should    be trimmed.   '), '.demmirt eb dluohs secaps');
  });

  // exception testament use cases
  it('"中文" should "文中"', () => {
    assert.strictEqual(reverse('中文'), '文中');
  });
});
