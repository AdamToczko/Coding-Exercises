// All Star Code Challenge #16

// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"
// Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least one non-repeating letter in the input string

function noRepeatTypescript(str: string): string {
  const charCount: { [key: string]: number } = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  throw new Error('No non-repeating character found.');
}

//   console.log(noRepeat("aabbccdde")); // Output: "e"
//   console.log(noRepeat("wxyz")); // Output: "w"
//   console.log(noRepeat("testing")); // Output: "e"

function noRepeat(str) {
  const charCount = {};

  [...str].forEach((char) => {
    charCount[char] = (charCount[char] || 0) + 1;
  });

  const nonRepeatingChar = [...str].find((char) => charCount[char] === 1);

  if (nonRepeatingChar) {
    return nonRepeatingChar;
  }

  throw new Error('No non-repeating character found.');
}

//   console.log(noRepeat("aabbccdde")); // Output: "e"
//   console.log(noRepeat("wxyz")); // Output: "w"
//   console.log(noRepeat("testing")); // Output: "e"

//  BETTER
function noRepeat2(str) {
  return [...str].find(
    (char, _i, arr) => arr.indexOf(char) === arr.lastIndexOf(char)
  );
}
