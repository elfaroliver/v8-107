/*export function reverse () {
  return '';
}*/
import { isString, /*splitOnWhitespace*/ } from './helpers.js';
//import { palindrome } from './palindrome.js';

export function reverse(str) {
  if (!isString(str)) {
    return null;
  }

  //const words = splitOnWhitespace(str);

  return str.split('').reverse().join('');
}