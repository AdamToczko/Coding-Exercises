// https://edabit.com/challenge/b7dXbWEhbr3bXCk7i

// Get Student Top Notes
// Create a function that takes an array of students and returns an array of their top notes. If student does not have notes then let's assume their top note is equal to 0.

// Examples
// getStudentTopNotes([
//   {
//     id: 1,
//     name: "Jacek",
//     notes: [5, 3, 4, 2, 5, 5]
//   },
//   {
//     id: 2,
//     name: "Ewa",
//     notes: [2, 3, 3, 3, 2, 5]
//   },
//   {
//     id: 3,
//     name: "Zygmunt",
//     notes: [2, 2, 4, 4, 3, 3]
//   }
// ]) ➞ [5, 5, 4]
// Notes
// Try it with Array.prototype.map and Array.prototype.reduce.
// Alternatively use Math.max instead of Array.prototype.reduce.

//does not pass all test as not working with no notes 
function getStudentTopNotes(students) {
    const grades = students.map(v => v.notes)
    return grades.map(v=>Math.max.apply(null, v))
}

// solution 

function getStudentTopNotes(students) {
	return students.map(s=>s.notes.reduce((a,b)=>a>b?a:b,0));
}

// other
function getStudentTopNotes(students) {
    return students.map(x => Math.max(...x.notes, 0))
}

//or
function getStudentTopNotes(students) {
	return students.map((a) => a.notes).map((v) => {
		if(v.length === 0) return 0;
		else return Math.max(...v)
	})

}