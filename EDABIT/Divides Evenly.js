// https://edabit.com/challenge/JfB9mWmbwYHbupxCB

// Divides Evenly
// Given two integers, a and b, return True if a can be divided evenly by b. Return False otherwise.

// Examples
// dividesEvenly(98, 7) ➞ True
// # 98/7 = 14

// dividesEvenly(85, 4) ➞ False
// # 85/4 = 21.25
// Notes
// a will always be greater than or equal to b.

function dividesEvenly(a, b) {
    if(a % b == 0) {
        return true
    }
else {
    return false
}
}

// other
function dividesEvenly(a, b) {
	return a%b === 0;
}