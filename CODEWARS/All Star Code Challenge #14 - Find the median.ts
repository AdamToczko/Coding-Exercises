// Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

// Write a function that takes an array of integers as an argument and returns the median of those integers.

// Notes:

// The sorting step is vital.
// Input arrays are non-empty.
// Examples
// Median of [33,99,100,30,29,50] is 41.5.
// Median of [3,2,1] is 2.
// median([3,4,1,2,5]) is 3

/**
 * Calculates the median of an array of numbers.
 *
 * @param n An array of numbers
 * @returns The median value
 */
export function median(n: number[]): number {
  // Sort the array in ascending order
  const sortedArray = n.sort((a, b) => a - b);

  /**
   * Returns the middle item(s) of an array.
   *
   * @param array An array of numbers
   * @returns An array containing one or two middle items
   */
  function getMiddleItems(array: number[]): number[] {
    const middle1 = Math.floor((array.length - 1) / 2);
    const middle2 = Math.floor(array.length / 2);
    return array.slice(middle1, middle2 + 1);
  }

  // Get the middle item(s) of the sorted array
  const middleItems = getMiddleItems(sortedArray);

  // Calculate the median based on the middle item(s)
  return middleItems.reduce((a, b) => a + b, 0) / middleItems.length;
}

console.log(median([33, 99, 100, 30, 29, 50]));
console.log(median([3, 2, 1]));
console.log(median([3, 4, 1, 2, 5]));
