// Let's add a concatAll() function to the Array type. The concatAll() function iterates over each sub-array in the array and collects the results in a new, flat array. Notice that the concatAll() function expects each item in the array to be another array.

Array.prototype.concatAll = function () {
    let results = [];
    this.forEach((subArray) => {
        results.push.apply(results, subArray);
    });

    return results;
};

console.log(
    JSON.stringify(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ].concatAll()
    )
);

// Use map() and concatAll() to project and flatten the movieLists into an array of video ids

let movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                id: 70111470,
                title: "Die Hard",
                boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                uri: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 4.0,
                bookmark: [],
            },
            {
                id: 654356453,
                title: "Bad Boys",
                boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                uri: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 5.0,
                bookmark: [{ id: 432534, time: 65876586 }],
            },
        ],
    },
    {
        name: "Dramas",
        videos: [
            {
                id: 65432445,
                title: "The Chamber",
                boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                uri: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 4.0,
                bookmark: [],
            },
            {
                id: 675465,
                title: "Fracture",
                boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                uri: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 5.0,
                bookmark: [{ id: 432534, time: 65876586 }],
            },
        ],
    },
];

const VideosIds = movieLists
    .map((x) => x.videos)
    .concatAll()
    .map((x) => x.id);
