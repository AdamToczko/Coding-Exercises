//  Print names in array
var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

// option 1
names.map((x) => console.log(x));

// option 2
for (counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
}

// option 3
names.forEach((x) => console.log(x));
