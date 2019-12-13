// https://edabit.com/challenge/ve7mQnJsjtFep97fm

// Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

// Examples
// countOnes([
//   [1, 0],
//   [0, 0]
// ]) ➞ 1

// countOnes([
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ]) ➞ 7

// countOnes([
//   [1, 2, 3],
//   [0, 2, 1],
//   [5, 7, 33]
// ]) ➞ 2

function countOnes(matrix) {
	const array = [...matrix]
	const flatArray = array.flat()
	return (flatArray.filter(e => e ==1)).length
}

// or

function countOnes(matrix) {
	return matrix.toString().split(',').filter(x => x == '1').length
}