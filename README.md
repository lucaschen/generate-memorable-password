# Memorable Password Generator

Currently not very secure; however, it dose generate some pretty neat passwords.

## Usage

```
const generateMemorablePassword = require('generate-memorable-password');
generateMemorablePassword(); // granite-extensible-chicken-nugget-676969
generateMemorablePassword(); // interactive-sleek-towels-533362
```

## Current wordlist sizes:

* **Adjectives** - 110
* **Nouns** - 190

## Generation algorithm

Uses NodeJS' `crypto` to get random bytes. Combines two adjectives and a noun (in that order), and then a random number between (and including) 100000 and 999999.

**Current number of possibilities:** 110 &times; 110 &times; 190 &times; 90000 = 206910000000, or approximately 2<sup>37.59</sup>. Nowhere near secure (just yet), but more for generating temporary passwords (**that expire soon, mind you**), or maybe for fun name generators.

This library focuses more on fun word combinations than actual secure passwords. If you want real, secure strings, you're probably looking in the wrong place.

## Contributing

Feel free to add more words to either list. **I do like food, and would appreciate a longer (or better curated) list of foods.** 😊😊

## License

MIT
