// Get Students with Names and Notes Average

// https://edabit.com/challenge/aZiwEFEdFvWoBvDWS

// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.

// Examples
// [
//   { name: "John", notes: [3, 5, 4]}
// ] ➞ [
//   { name: "John", avgNote: 4 }
// ]
// Notes
// Try doing it with an arrow function.

function getStudentsWithNamesAndAvgNote(students) {
    
    return students.map(v => {
        return {
            name: v.name,
            avgNote: v.notes.length > 0 ? (Math.round(v.notes.reduce((a,b) => a + b))/v.notes.length) : 0
        }
    }
   )
}
