import { isString, split } from './helpers.js';
/*export const VOWELS = 'aeiouyáéýúíóöæ'.split('');
export const CONSONANTS = 'bcdfghjklmnpqrstvwxzþð'.split('');*/

export function countGivenCharactersInString(str, characters) {
  if (!isString(str)) {
    return 0;
  }

  const splitStr = split(str, '');
  //const splitStr = str.split('')

  let count = 0;

  for (const char of splitStr) {
    if (characters.includes(char)) {
      count++;
    }
  }

  return count;
}

/*export function vowels(str) {
  return countGivenCharactersInString(str, VOWELS);
}

export function consonants(str) {
  return countGivenCharactersInString(str, CONSONANTS);
}*/