const array1 = [
  {
    id: 1,
    name: "aa",
  },
  {
    id: 4,
    name: "bb",
  },
  {
    id: 8,
    name: "cc",
  },
];

const array2 = [
  {
    id: 3,
    name: "dd",
  },
  {
    id: 4,
    name: "ee",
  },
  {
    id: 8,
    name: "ff",
  },
  {
    id: 13,
    name: "gg",
  },
];

const changed = array1.filter(({ id: id1 }) =>
  array2.every(({ id: id2 }) => id2 !== id1)
);
changed;

// const g = array2.filter(x => x.id !== 3, )
// g

// const changed = array2.map(x => {
//     return {
//         id: array1.find(v => id === v.id)
//     }
// })

// (({ array1 }) =>
// ({id: array1.map(el => array1.find(x => x.el === el) )}) )
// changed

// const z = array2.filter(x=> array1.every(y=> x.value !== y.value))
