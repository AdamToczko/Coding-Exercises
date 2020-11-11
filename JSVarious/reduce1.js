// Exercise 16: Implement reduce()
// Let's add a reduce() function to the Array type. Like map. Take note this is different from the reduce in ES5, which returns a value instead of an Array!

Array.prototype.reduce = function (combiner, initialValue) {
    var counter, accumulatedValue;

    // If the array is empty, do nothing
    if (this.length === 0) {
        return this;
    } else {
        // If the user didn't pass an initial value, use the first item.
        if (arguments.length === 1) {
            counter = 1;
            accumulatedValue = this[0];
        } else if (arguments.length >= 2) {
            counter = 0;
            accumulatedValue = initialValue;
        } else {
            throw "Invalid arguments.";
        }

        // Loop through the array, feeding the current value and the result of
        // the previous computation back into the combiner function until
        // we've exhausted the entire array and are left with only one value.
        while (counter < this.length) {
            accumulatedValue = combiner(accumulatedValue, this[counter]);
            counter++;
        }

        return [accumulatedValue];
    }
};

// Exercise 18: Retrieve url of the largest boxart
// Let's try combining reduce() with map() to reduce multiple boxart objects to a single value: the url of the largest box art.

let boxarts = [
    {
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
    },
    {
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
    },
    {
        width: 300,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
    },
    {
        width: 425,
        height: 150,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
    },
];

const reduceArray = (array) => {
    return array
        .reduce((a, c) => {
            if (a.width * a.height > c.width * c.height) {
                return a;
            } else {
                return c;
            }
        })
        .map((x) => x.url);
};
