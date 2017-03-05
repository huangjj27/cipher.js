/**
 * Caesar.js: the Caesar encrypting and deciphering
 * @module casaer
 * @author huangjj27
 */

/***
 * transform between English text and caesar cipher
 * @param {string} type - 'encrypt' or 'deciper', otherwise will throw a TypeError
 * @param {string} text - text to be transformed.
 * @param {number} movement - move an alpha to the its nth right's alpha if type is 'encrypt'
 * while left if type is 'decipher' 
 * @return {string} a text of transformed codes.
 */
function caesar(type, text, movement) {
  // check if the type is correct
  if (type !== 'encrypt' && type !== 'decipher') {
    throw TypeError('type is not encrypt or decipher!');
  }
  
  // checks if the text can be encrypted to Caesar codes
  let re = /^( |[A-Za-z])*$/;
  if (!re.test(text)) {
    throw new Error('the string can not be encrypted with Caesar codes!');
  }

  // checks if movement valid
  movement = parseInt(movement);
  if (isNaN(movement)) {
    throw new TypeError('movement is not a number!');
  } else if (movement <= 0 || movement >=26) {
    throw new RangeError(`movement is not in range 1~25: ${movement}`);
  }

  return text.toLowerCase().trim().split(/\s+/).map(word => {
    return word.split('').map(alpha => {
      if ('a' <= alpha && alpha <= 'z') {
        if (type === 'encrypt') {
          let num = (alpha.charCodeAt(0) - 97 + movement) % 26;  // changes to number and get encrypted number
          alpha = String.fromCharCode(num + 97);  // from encrypted number to alpha
        } else if (type === 'decipher') {
          let num = (alpha.charCodeAt(0) - 97 - movement) % 26;
          // due to the negative number produced by modding an negative number,
          // it may easy for some number to get out of the range. thus need a trick as follow:
          if (num < 0) {
            num += 26;
          }

          alpha = String.fromCharCode(num + 97);
        } else {
          // do nothing
        }
      }

      return alpha;
    }).join('');
  }).join(' ');
}

/** 
 * transform between English text and caesar cipher
 * @function
 * @param {string} type - 'encrypt' or 'deciper', otherwise will throw a TypeError
 * @param {string} text - text to be transformed.
 * @param {number} movement - move an alpha to the its nth right's alpha if type is 'encrypt'
 * while left if type is 'decipher' 
 * @return {string} a text of transformed codes.
 */
export default caesar;
