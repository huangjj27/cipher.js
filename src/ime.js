/**
 * ime.js: the IME encrypting and deciphering
 *
 * @module ime
 * @time 2016-12-29
 * @author huanjj27
 */

// the dictionary of IME texts.
const encryptMap = {
  'a': '21', 'b': '22', 'c': '23',
  'd': '31', 'e': '32', 'f': '33',
  'g': '41', 'h': '42', 'i': '43',
  'j': '51', 'k': '52', 'l': '53',
  'm': '61', 'n': '62', 'o': '63',
  'p': '71', 'q': '72', 'r': '73', 's': '74',
  't': '81', 'u': '82', 'v': '83',
  'w': '91', 'x': '92', 'y': '93', 'z': '94'
};
const decipherMap = {
  '21': 'a', '22': 'b', '23': 'c',
  '31': 'd', '32': 'e', '33': 'f',
  '41': 'g', '42': 'h', '43': 'i',
  '51': 'j', '52': 'k', '53': 'l',
  '61': 'm', '62': 'n', '63': 'o',
  '71': 'p', '72': 'q', '73': 'r', '74': 's',
  '81': 't', '82': 'u', '83': 'v',
  '91': 'w', '92': 'x', '93': 'y', '94': 'z'
};

function cipher(type, text) {
  if (type === 'encrypt') {
    // checks if the text can be encrypted to IME texts
    let re = /^( |[A-Za-z])*$/;
    if (!re.test(text)) {
      throw new Error('the text can not be encrypted to IME texts!');
    }

    let words = text.trim().toLowerCase().split(/\s+/);
    return words.map(word => {
      return word.split('').map(alpha => encryptMap[alpha]).join('');
    }).join(' ');
  } else if (type === 'decipher') {
    // checks if the texts is written in IME codes
    let re = /^( |([2-68][1-3])|([79][1-4]))+$/;
    if (!re.test(text)) {
      throw new Error('Error: the text is not written in IME texts!\n');
    }

    let words = text.trim().toLowerCase().split(/\s+/);
    return words.map(word => {
      let alphas = word.match(/([2-68][1-3])|([79][1-4])/g);
      return alphas.map(alpha => decipherMap[alpha]).join('');
    }).join(' ');
  } else {
    throw new TypeError('Type is not encrypt or decipher!');
  }
}

/**
 * encrypt only English text to IME CODES, or in reverse direction
 * @function
 * @param  {string} text - the text for encryption or deciphering
 * @return {string} encrypted string in the form of number.
 */
export default cipher;
