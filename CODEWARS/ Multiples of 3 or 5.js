// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

const solution = (number) => {
  let array = [];
  for (let i = 1; i < number; i++) {
    if (Number.isInteger(i / 3) || Number.isInteger(i / 5)) {
      array.push(i);
    }
  }
  return array.reduce((acc, a) => acc + a, 0);
};

// another solution

function solution(number) {
  return number < 1
    ? 0
    : [...new Array(number).keys()]
        .filter((n) => n % 3 == 0 || n % 5 == 0)
        .reduce((a, b) => a + b);
}
