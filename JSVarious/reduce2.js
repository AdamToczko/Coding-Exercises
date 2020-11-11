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

// Exercise 17: Retrieve the largest rating.
// Let's use our new reduce function to isolate the largest value in an array of ratings.

let ratings = [2, 3, 1, 4, 5];

const reducedArray = (array) => {
    return array.reduce((a, c) => Math.max(a, c));
};
