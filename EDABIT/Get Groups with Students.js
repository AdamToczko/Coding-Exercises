// https://edabit.com/challenge/2TKegjnoSQ3Xeo8CB

// Get Groups with Students

// Create a function that takes two arrays: groups and students. 
//It should return one array with groups merged with students by id. 
// Students within groups should be ordered in the same way the studentIds were ordered.

// Examples
// getGroupsWithStudents([
//   { 
//     id: 1,
//     name: "G1",
//     studentIds: [2, 1]
//   }
// ], [
//   { 
//     id: 1,
//     name: "John"
//   },
//   {
//     id: 2,
//     name: "Steve"
//   }
// ]) ➞ [
//   { 
//     id: 1,
//     name: "G1",
//     students: [
//       {
//         id: 2,
//         name: "Steve"
//       },
//       { 
//         id: 1, 
//         name: "John"
//       }
//     ]
//   }
// ]

function getGroupsWithStudents(groups, students) {
    return groups.map(group => {
        return {
          id: group.id,
          name: group.name,
          students: group.studentIds.map(id => students.find(student => id === student.id))
            }
        })
    }

    // other way

const getGroupsWithStudents = (groups, students) =>
  groups.map(({ id, name, studentIds }) => ({
    id,
    name,
    students: studentIds.map(id => students.find(student => student.id === id)),
  }));