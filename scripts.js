/**
 * Sýnilausn á verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
/*const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');*/

/** Íslenskir samhljóðar */
/*const VOWELS = 'aeiouyáéýúíóöæ'.split('');*/

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
/*import { constants } from './lib/constants.js';*/
/*const isString = (str) => typeof str === 'string';*/

// Prófum fallið
/*console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');*/

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */

import { isString } from './lib/helpers.js';

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

/*Longest var hér */
import { longest } from './lib/longest.js';

/*Shortest var hér*/
import { shortest } from './lib/shortest.js';

/*Reverse var hér*/
import { reverse } from './lib/reverse.js';

/* Palindrome var hér */
import { palindrome } from './lib/palindrome.js';

/**
 * Telur fjölda stafa í streng sem eru í characters fylki.
 * @param {string} str Strengur til að telja stafi í
 * @param {string[]} characters Fylki af stöfum sem á að telja
 * @returns {number} Fjöldi stafa í streng sem eru í characters
 */
/* countGivenCharactersInString var hér */
import { countGivenCharactersInString } from './lib/count.js';

/* vowels var hér */
import { vowels } from './lib/vowels.js';

/* consonants var hér */
import { consonants } from './lib/consonants.js';


//------------------------------------------------------------------------------
// Leiðbeint ferli
/* Start var hér */
//import { start } from './lib/start.js';

const formElement = document.querySelector('form');

formElement.addEventListener('submit', (event) => {
  event.preventDefault(); // Hættir við default submit
  updateOutput(); // Callar function til að greina
  outputElement.classList.remove('hidden'); // Sýnir output
});

formElement.addEventListener('reset', () => {
  // Hreinsar textarea og output
  textareaElement.value = '';
  inputDisplay.textContent = '';
  longestElement.textContent = '';
  shortestElement.textContent = '';
  vowelsElement.textContent = '';
  consonantsElement.textContent = '';
  countElement.textContent = '';
  palindromeElement.textContent = '';
  reversedElement.textContent = '';
});

const textareaElement = document.getElementById('string');
const outputElement = document.querySelector('.output');
const inputDisplay = document.querySelector('.input');
const longestElement = document.querySelector('.longest');
const shortestElement = document.querySelector('.shortest');
const vowelsElement = document.querySelector('.vowels');
const consonantsElement = document.querySelector('.consonants');
const countElement = document.querySelector('.count');
const palindromeElement = document.querySelector('.palindrome');
const reversedElement = document.querySelector('.reversed');

function updateOutput() {
  const inputValue = textareaElement.value;
  
    // Sýnir núverandi input
    inputDisplay.textContent = inputValue; 

    // Reikna gildi úr imported functions
    // Ef characters er fjarlægt, virka palindrome og reversed ekki. Veit ekki hvers vegna
    const characters = [vowels, consonants];
    const words = inputValue.split(/\s+/).filter(Boolean);

    // Prentar lengsta orð
    longestElement.textContent = longest(inputValue);
    // Prentar stysta orð
    shortestElement.textContent = shortest(inputValue);
    // Prentar fjölda sérhljóða
    vowelsElement.textContent = vowels(inputValue);
    // Prentar fjölda samhljóða
    consonantsElement.textContent = consonants(inputValue);
    // Prentar fjölda stafa(eina sem virkar ekki)
    countElement.textContent = countGivenCharactersInString(inputValue, characters).toString();
    // Prentar hvort input er palindrome með 'samhverfur' eða 'ekki samhverfur'
    palindromeElement.textContent = palindrome(inputValue) ? 'samhverfur' : 'ekki samhverfur';
    // Prentar speglað input. T.d. halló = óllah
    reversedElement.textContent = reverse(inputValue) || '';
}

textareaElement.addEventListener('input', updateOutput);

function removeHidden(el) {
  el.classList.remove('hidden');
}
  
if (outputElement) {
  removeHidden(outputElement);
}

//start()

