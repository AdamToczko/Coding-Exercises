Array.prototype.concatAll = function () {
  let results = [];
  this.forEach((subArray) => {
    results.push.apply(results, subArray);
  });

  return results;
};

Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
  return (
    this.map(function (item) {
      // Apply the projection function to each item. The projection
      // function will return a new child array. This will create a
      // two-dimensional array
      return projectionFunctionThatReturnsArray(item);
    })
      // apply the concatAll function to flatten the two-dimensional array
      .concatAll()
  );
};

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

// Exercise 20: Retrieve the id, title, and smallest box art url for every video.
let movieLists = [
  {
    name: 'New Releases',
    videos: [
      {
        id: 70111470,
        title: 'Die Hard',
        boxarts: [
          {
            width: 150,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
          },
          {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
          },
        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 654356453,
        title: 'Bad Boys',
        boxarts: [
          {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
          },
          {
            width: 140,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg',
          },
        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
  {
    name: 'Thrillers',
    videos: [
      {
        id: 65432445,
        title: 'The Chamber',
        boxarts: [
          {
            width: 130,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg',
          },
          {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
          },
        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 675465,
        title: 'Fracture',
        boxarts: [
          {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
          },
          {
            width: 120,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg',
          },
          {
            width: 300,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
          },
        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
];

// Use one or more concatMap, map, and reduce calls to create an array with the following items (order matters)
// [
//     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
//     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
//     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
//     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
// ];

movieLists.concatMap((movieList) =>
  movieList.videos.concatMap((video) =>
    video.boxarts
      .reduce((a, c) => {
        if (a.width * a.height < c.width * c.height) {
          return a;
        } else {
          return c;
        }
      })
      .map((boxart) => ({
        id: video.id,
        title: video.title,
        boxart: boxart.url,
      }))
  )
);
