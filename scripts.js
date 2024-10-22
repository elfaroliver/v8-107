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
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

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
import { start } from './lib/start.js';

function exampleSplit(str, separator = ' ') {
  if (!isString(str)) {
      return [];
  }
  return str.split(separator);
}
/*
// Bý til exampleString til að nota öll föll
const exampleString = "Hello, world!";

// Nota split til að losa við error
const words = exampleSplit(exampleString);
console.log(words); // ["Hello,", "world!"]

// Nota longest til að losa við error
const longestWord = longest(words);
console.log(`Longest word: ${longestWord}`); // Output lengsta

// Nota shortest til að losa við error
const shortestWord = shortest(words);
console.log(`Shortest word: ${shortestWord}`); // Outputs stysta

// Nota reverse til að losa við error
const reversedString = reverse(exampleString);
console.log(`Reversed string: ${reversedString}`); // Output reverse

// Nota palindrome til að losa við error
const isPalin = palindrome("madam");
console.log(`Is "madam" a palindrome? ${isPalin}`); // Output true

// Nota countvowel.. til að losa við error
const vowelCount = countGivenCharactersInString(exampleString, vowels);
console.log(`Number of vowels: ${vowelCount}`); // Output sérhljóðatal

// Nota countconso.. til að losa við error
const consonantCount = countGivenCharactersInString(exampleString, consonants);
console.log(`Number of consonants: ${consonantCount}`); // Output samhljóðatal

// Start function call (if applicable)
start();*/


/*textarea.addEventListener('input', () => {
  console.log('textarea inniheldur:', textarea.value);
});*/

/*const textareaElement = document.querySelector('textarea');*/
const formElement = document.querySelector('form');

function submitHandler(event) {
  event.preventDefault();
  updateOutput();
  //const { target } = event;
  //const textareaElement = target.querySelector('textarea');
  //console.log('textareaElement inniheldur', textareaElement.value);
}

//const textareaElement = document.querySelector('textarea')

//formElement.addEventListener('submit', submitHandler);

formElement.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  updateOutput(); // Call the function to analyze the input
  outputElement.classList.remove('hidden'); // Show the output
});

formElement.addEventListener('reset', () => {
  // Clear the textarea and output
  textareaElement.value = '';
  inputDisplay.textContent = '';
  longestElement.textContent = '';
  shortestElement.textContent = '';
  vowelsElement.textContent = '';
  consonantsElement.textContent = '';
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
const palindromeElement = document.querySelector('.palindrome');
const reversedElement = document.querySelector('.reversed');

function updateOutput() {
  //outputElement.textContent = textareaElement.value;
  const inputValue = textareaElement.value;
    inputDisplay.textContent = inputValue; // Display the current input

    // Reikna gildi úr imported functions
    const words = inputValue.split(/\s+/).filter(Boolean);
    longestElement.textContent = longest(inputValue);
    shortestElement.textContent = shortest(inputValue);
    vowelsElement.textContent = vowels(inputValue);
    consonantsElement.textContent = consonants(inputValue);
    palindromeElement.textContent = palindrome(inputValue) ? 'samhverfur' : 'ekki samhverfur';
    reversedElement.textContent = reverse(inputValue);
}

textareaElement.addEventListener('input', updateOutput);

function removeHidden(el) {
  el.classList.remove('hidden');
}

if (outputElement) {
  removeHidden(outputElement);
}

/*const longestElement = document.querySelector('.longest');
if (longestElement) {
  longestElement.textContent = '';
}*/

