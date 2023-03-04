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
      throw 'Invalid arguments.';
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

// Exercise 19: Reducing with an initial value
// Sometimes when we reduce an array, we want the reduced value to be a different type than the items stored in the array. Let's say we have an array of videos and we want to reduce them to a single map where the key is the video id and the value is the video's title.

let videos = [
  {
    id: 65432445,
    title: 'The Chamber',
  },
  {
    id: 675465,
    title: 'Fracture',
  },
  {
    id: 70111470,
    title: 'Die Hard',
  },
  {
    id: 654356453,
    title: 'Bad Boys',
  },
];

// Expecting this output...
// [
//     {
//         "65432445": "The Chamber",
//         "675465": "Fracture",
//         "70111470": "Die Hard",
//         "654356453": "Bad Boys"
//     }
// ]

const reduceArray = (array) => {
  return array.reduce(
    (accumulatedMap, video) => {
      let obj = {};
      // ----- CODE TO ADD THE VIDEO TITLE TO THE ----
      // ----- NEW MAP USING THE VIDEO ID AS THE KEY	 ----
      obj[video.id] = video.title;
      // Object.assign() takes all of the enumerable properties from
      // the object listed in its second argument (obj) and assigns them
      // to the object listed in its first argument (accumulatedMap).
      return Object.assign(accumulatedMap, obj);
    },
    // Use an empty map as the initial value instead of the first item in
    // the list.
    {}
  );
};
