import { longest } from 'longest.js';
import { shortest } from 'shortest.js';
import { reverse } from 'reverse.js';
import { vowels } from 'vowels.js';
import { consonants } from 'consonants.js';
import { palindrome } from 'palindrome.js';

export function start() {
  // Birta leiðbeiningar
  const instructions = `Sláðu inn streng með nokkrum orðum til að fá upplýsingar um:
- Lengsta orðið.
- Stysta orðið.
- Strenginn snúið við.
- Fjölda sérhljóða í streng.
- Fjölda samhljóða í streng.
- Hvort strengurinn sé samhverfur.`;
  alert(instructions);

  do {
    // Biðja um streng
    const str = prompt('Sláðu inn streng með nokkrum orðum');

    // Ýtt á cancel eða tómi strengur? Bjóða að keyra aftur.
    if (str === null || str === '') {
      continue;
    }

    // Birta upplýsingar
    const longestWord = longest(str);
    const shortestWord = shortest(str);
    const reversed = reverse(str);
    const vowelCount = vowels(str);
    const consonantCount = consonants(str);
    const isPalindrom = palindrome(str);

    const result = `Lengsta orðið er: ${longestWord}
Stysta orðið er: ${shortestWord}
Strengurinn snúinn við: ${reversed}
Fjöldi sérhljóða í streng: ${vowelCount}
Fjöldi samhljóða í streng: ${consonantCount}
Strengurinn ${isPalindrom ? 'er' : 'er ekki'} samhverfur.`;

    alert(result);

    // Spyrja hvort notandi vilji prófa aftur
  } while (confirm('Viltu prófa aftur?'));
} 
