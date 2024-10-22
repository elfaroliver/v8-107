import { countGivenCharactersInString } from "./count";

const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

export function consonants(str) {
  return countGivenCharactersInString(str, CONSONANTS);
}