// https://edabit.com/challenge/SS23vniCZ6ssGwsQP

// Sort Numbers in Ascending Order
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If functions argument is null, an empty array or undefined, return an empty array.
// Return new array of sorted numbers.
// Examples
// sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]

// sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]

// sortNumsAscending(null) ➞ []

// sortNumsAscending([]) ➞ []
// Notes
// The numbers being passed to sortNumsAscending() can be positive or negative.

function sortNumsAscending(arr) {
	if(arr == [] || arr == null){
		return []
	} else {
	return arr.sort((a,b) => a-b)}
}

//shorter

function sortNumsAscending(arr) {
    return arr ? arr.sort(function(a, b){ return a - b; }) : [];
  }