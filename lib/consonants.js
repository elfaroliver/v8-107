import { countGivenCharactersInString } from "./count.js";

const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

export function consonants(str) {
  return countGivenCharactersInString(str, CONSONANTS);
}