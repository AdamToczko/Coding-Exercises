https://edabit.com/challenge/WikWd2QhrLbuNLYQ5

Get Student Names
Create a function that takes an array of students and returns an array of student names.

Examples
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Steve", "Mike", "John"]
Notes
Don't forget to return your result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

function getStudentNames(students) {
	return students.map(z => z.name)
}