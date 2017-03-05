/**
 * reverse.js: just reverses anything imputed.
 *
 * @module reverse
 * @author huangjj27
 * @time 2017-1-1
 */

function reverse(text) {
  let words = text.trim().toLowerCase().split(/\s+/);
  return words.map(word => {
    return word.split('').reverse().join('');
  }).reverse().join(' ');
}

export default reverse;