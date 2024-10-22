import { countGivenCharactersInString } from "./count";

const VOWELS = 'aeiouyáéýúíóöæ'.split('');

export function vowels(str) {
  return countGivenCharactersInString(str, VOWELS);
}