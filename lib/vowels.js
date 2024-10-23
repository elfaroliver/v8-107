//import { isString } from "./helpers.js";

import { countGivenCharactersInString } from "./count.js";
//import { constants } from "./constants.js";

const VOWELS = 'aeiouyáéýúíóöæ'.split('');

export function vowels(str) {
  return countGivenCharactersInString(str, VOWELS);
}

