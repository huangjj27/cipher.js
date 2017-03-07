/**
 * QWE.js: the keyboard encrypting and deciphering
 * @module qwe
 * @author huangjj27
 */

// dictionary of QWE encryption, add test comments
const encryptMap = {
  'a':'q', 'b':'w', 'c':'e', 'd':'r', 'e':'t', 'f':'y', 'g':'u', 'h':'i', 'i':'o', 'j':'p',
  'k':'a', 'l':'s', 'm':'d', 'n':'f', 'o':'g', 'p':'h', 'q':'j', 'r':'k', 's':'l',
  't':'z', 'u':'x', 'v':'c', 'w':'v', 'x':'b', 'y':'n', 'z':'m'
};
const decipherMap = {
  'q':'a', 'w':'b', 'e':'c', 'r':'d', 't':'e', 'y':'f', 'u':'g', 'i':'h', 'o':'i', 'p':'j',
  'a':'k', 's':'l', 'd':'m', 'f':'n', 'g':'o', 'h':'p', 'j':'q', 'k':'r', 'l':'s',
  'z':'t', 'x':'u', 'c':'v', 'v':'w', 'b':'x', 'n':'y', 'm':'z'
};

function cipher(type, text) {
  // checks if the text can be encrypted to QWE codes
  // only check syntax like this:
  // "some words without signs or digit   but any space are allowed".
  let re = /^( |[A-Za-z])*$/;
  if (!re.test(text)) {
    throw new Error('the text can not be encrypted by QWE algorithm!');
  }

  return text.toLowerCase().trim().split(/\s+/).map(word => {
    return word.split('').map(alpha => {
      if (type === 'encrypt' && alpha in encryptMap) {
        alpha =  encryptMap[alpha];
      } else if (type === 'decipher' && alpha in decipherMap) {
        alpha = decipherMap[alpha];
      } else {
        throw new TypeError('type is not encrypt or decipher!');
      }

      return alpha;
    }).join('');
  }).join(' ');
}

/**
 * transforms between qwe codes and English text
 * @function
 * @param {string} type - 'encrypt' or 'decipher'
 * @param {string} text - the text to be encrypted or decipherd
 * @returns {string} some text of transformed code
 */
export default cipher;
