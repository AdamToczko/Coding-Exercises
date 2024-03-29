// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

var list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
  },
  {
    firstName: 'Ramon',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
  },
];
// your function should return the following object (associative array in PHP):

// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:

// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.

// const rubyDevelopers1 = list1.filter(z => z.language == 'Ruby')
// const cDevelopers1 = list1.filter(z => z.language == 'C')
// const jSDevelopers1 = list1.filter(z => z.language == 'JavaScript')

// return {C: cDevelopers1.length, JavaScript: jSDevelopers1.length, Ruby: rubyDevelopers1.length}

function countLanguages(list1) {
  const obj = {};
  list1.map((v) => (obj[v.language] = (obj[v.language] || 0) + 1));
  return obj;
}

// inaczej
function countLanguages(list) {
  var count = {};
  list.forEach((x) => (count[x.language] = (count[x.language] || 0) + 1));
  return count;
}

// inaczej
function countLanguages(developers) {
  let counts = {};
  for (const developer of developers)
    counts[developer.language] = (counts[developer.language] || 0) + 1;
  return counts;
}

// with reduce
function countLanguages(list) {
  return list.reduce((count, dev) => {
    if (!count.hasOwnProperty(dev.language)) {
      count[dev.language] = 0;
    }
    count[dev.language]++;
    return count;
  }, {});
}
