// import { unary } from 'lodash';

const a = ["10", "20", "30"];

const x = a.map((value) => parseInt(value)); // made it one argument function , parseInt takes two arguments hence it did not work without this trick

x;

//function that always returns same value
const always = (val) => () => val;
const y = always(4);
console.log(y());
console.log(y());
