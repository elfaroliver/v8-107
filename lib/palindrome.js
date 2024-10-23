/*import { isString } from './helpers.js';
import { reverse } from './reverse.js';

export function palindrome(str) {
  if (!isString(str) || str === '') {
    return false;
  }

  if (str === '') {
    return false;
  }

  const reversed = reverse(str);

  // Hér lendum við í því að þar sem `reverse` *getur* skilað `null` þá ættum
  // við að athuga það líka þó svo að við vitum að við sendum inn streng.
  // Ef kveikt er á „JS Check“ í VSCode þá kemur villumelding ef við gerum ekki.
  if (!isString(reversed)) {
    return false;
  }

  return str.toLocaleLowerCase() === reversed.toLocaleLowerCase();
}*/

import { isString } from './helpers.js';
import { reverse } from './reverse.js';

export function palindrome(str) {
  if (!isString(str) || str.trim() === '') { // Skoðar gildi, tryggir str er ekki bara whitespace
    return false;
  }

  const reversed = reverse(str);

  // Tryggir reverse skilar gildum str
  if (!isString(reversed)) {
    return false;
  }

  // Staðfestir lowercase str jafngildir reversed lowercase str
  return str.toLocaleLowerCase() === reversed.toLocaleLowerCase();
}
