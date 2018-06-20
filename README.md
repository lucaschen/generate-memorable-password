# Memorable Password Generator

Currently not very secure; however, it dose generate some pretty neat passwords.

## Usage

```
const generateMemorablePassword = require('generate-memorable-password');
generateMemorablePassword(); // granite-extensible-nugget-6769
generateMemorablePassword(); // concerned-sleek-towels-5333
```

## Current wordlist sizes:

* **Adjectives** - 1271
* **Nouns** - 1501

## Generation algorithm

Uses NodeJS' `crypto` to get random bytes. Combines two adjectives and a noun (in that order), and then a random number between (and including) 1000 and 9999.

**Current number of possibilities:** 1271 &times; 1271 &times; 1501 &times; 9000 = 21822992469000, or approximately 2<sup>44.31</sup>. Nowhere near 128-bit secure (just yet), but more for generating temporary passwords (**that expire soon, mind you**), or maybe for fun name generators.

This library focuses more on fun word combinations than actual secure passwords. If you want real, secure strings, you're probably looking in the wrong place.

## Contributing

Feel free to add more words to either list. **I do like food, and would appreciate a longer (or better curated) list of foods.** 😊😊

## License

MIT
