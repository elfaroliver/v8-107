import { countGivenCharactersInString } from "./count.js";

const VOWELS = 'aeiouyáéýúíóöæ'.split('');

export function vowels(str) {
  return countGivenCharactersInString(str, VOWELS);
}