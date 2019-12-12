// Get Students with Names and Top Notes

// https://edabit.com/challenge/GJD5x54NaFZwbtxQW

// Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4]} and returns an array of objects like { name: "John", topNote: 5 }.

// If student has no notes (an empty array) then let's assume topNote: 0.

// Examples
// [
//   { name: "John", notes: [3, 5, 4]}
// ] ➞ [
//   { name: "John", topNote: 5}
// ]
// Notes
// Try doing it with an arrow function.

function getStudentsWithNamesAndTopNotes(students) {
	return students.map(v => {
        return {
            name: v.name,
            topNote: v.notes.length > 0 ? (Math.max(...v.notes)) : 0
        }
    }
   )
}

    // another way 

    function getStudentsWithNamesAndTopNotes(students) {
    const getTopNote = (notes) => notes.length > 0 ? Math.max(...notes) : 0
     return	students.reduce((accu, curr) => {
            return [...accu, {
                name: curr.name,
                topNote: getTopNote(curr.notes)
            }]
        }, [])
    }