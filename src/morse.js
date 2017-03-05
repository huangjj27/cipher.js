/**
 * module of morse cipher
 * @module morse
 * @author huangjj27
 */

// the dictionary of Morse codes.
const encryptMap = {
  // letters
  'a': '.-',   'b': '-...', 'c': '-.-.', 'd': '-..',  'e': '.',    'f': '..-.',
  'g': '--.',  'h': '....', 'i': '..',   'j': '.---', 'k': '-.-',  'l': '.-..',
  'm': '--',   'n': '-.',   'o': '---',  'p': '.--.', 'q': '--.-', 'r': '.-.',
  's': '...',  't': '-',    'u': '..-',  'v': '...-', 'w': '.--',  'x': '-..-',
  'y': '-.--', 'z': '--..',

  // nubmers
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',

  // signs.
  // the space and the '\n' are here to simplify the encoding operation.
  ' ': '/', '\n': '\n',
  '.': '.-.-.-',  ',': '--..--', '?': '..--..', '\'': '.----.', '!': '-.-.--',
  '/': '-..-.',   '(': '-.--.',  ')': '-.--.-', '&': '.-...',   ':': '---...',
  ';': '-.-.-.',  '=': '-...-',  '+': '.-.-.',  '-': '-....-',  '_': '..--.-',
  '\"': '.-..-.', '$': '...-..-', '@': '.--.-.'
};
const decipherMap = {
  // letters
  '.-': 'a',   '-...': 'b', '-.-.': 'c', '-..': 'd',  '.': 'e',    '..-.': 'f',
  '--.': 'g',  '....': 'h', '..': 'i',   '.---': 'j', '-.-': 'k',  '.-..': 'l',
  '--': 'm',   '-.': 'n',   '---': 'o',  '.--.': 'p', '--.-': 'q', '.-.': 'r',
  '...': 's',  '-': 't',    '..-': 'u',  '...-': 'v', '.--': 'w',  '-..-': 'x',
  '-.--': 'y', '--..': 'z',

  // nubmers
  '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
  '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',

  // signs.
  // the space and the '\n' are here to simplify the decoding operation.
  '/': ' ', '\n': '\n',
  '.-.-.-': '.',  '--..--': ',', '..--..': '?', '.----.': '\'', '-.-.--': '!',
  '-..-.': '/',   '-.--.': '(',  '-.--.-': ')', '.-...': '&',   '---...': ':',
  '-.-.-.': ';',  '-...-': '=',  '.-.-.': '+',  '-....-': '-',  '..--.-': '_',
  '.-..-.': '\"', '...-..-': '$', '.--.-.': '@'
};

function cipher(type, text) {
  if (type === 'encrypt') {
    // checks if the text can be encrypted to Morse codes
    let re = /^(\s|[A-Za-z0-9]|[.,?\'!/()&:;=+-_\"$@\n])*$/;
    if (!re.test(text)) {
      throw new Error('the text can\'t be encrypted to morse codes!\n');
    }

    let words = text.toLowerCase().trim().split(/\s+/);
    return words.map(word => {
      return word.split('').map(alpha => encryptMap[alpha]).join('/');
    }).join(' ');
  } else if (type ==='decipher') {
    // checks if the text written in morse code
    let re = /^([.-]+(\/[.-]+)*)([ ]([.-]+(\/[.-]+)*))*$/;
    if (!re.test(text)) {
      throw new Error('the text is not written in morse codes!\n');
    }

    let words = text.trim().split(/\s+/);
    return words.map(word => {
      return word.split(/\//).map(alpha => decipherMap[alpha]).join('');
    }).join(' ');
  } else {
    throw new TypeError('Type should be encrypt or decipher!');
  }
}

/**
 * encrypt or decipher a string of English text to morse code
 * @function
 * @param {string} text - the text to be encrypted or morse code.
 * @returns {string} a string of encrypted English text of morse code.
 */
export default cipher;
