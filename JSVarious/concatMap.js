// Exercise 13: Implement concatMap()
// Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's just a map operation, followed by a concatAll.

// First need toadd contactAll() to prototype
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

// Exercise 14: Use concatMap() to retrieve id, title, and 150x200 box art url for every video

let movieLists = [
    {
        name: "Instant Queue",
        videos: [
            {
                id: 70111470,
                title: "Die Hard",
                boxarts: [
                    {
                        width: 150,
                        height: 200,
                        url:
                            "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
                    },
                    {
                        width: 200,
                        height: 200,
                        url:
                            "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
                    },
                ],
                url: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 4.0,
                bookmark: [],
            },
            {
                id: 654356453,
                title: "Bad Boys",
                boxarts: [
                    {
                        width: 200,
                        height: 200,
                        url:
                            "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
                    },
                    {
                        width: 150,
                        height: 200,
                        url:
                            "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
                    },
                ],
                url: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 5.0,
                bookmark: [{ id: 432534, time: 65876586 }],
            },
        ],
    },
    {
        name: "New Releases",
        videos: [
            {
                id: 65432445,
                title: "The Chamber",
                boxarts: [
                    {
                        width: 150,
                        height: 200,
                        url:
                            "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg",
                    },
                    {
                        width: 200,
                        height: 200,
                        url:
                            "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
                    },
                ],
                url: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 4.0,
                bookmark: [],
            },
            {
                id: 675465,
                title: "Fracture",
                boxarts: [
                    {
                        width: 200,
                        height: 200,
                        url:
                            "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
                    },
                    {
                        width: 150,
                        height: 200,
                        url:
                            "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
                    },
                    {
                        width: 300,
                        height: 200,
                        url:
                            "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
                    },
                ],
                url: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 5.0,
                bookmark: [{ id: 432534, time: 65876586 }],
            },
        ],
    },
];

const newArray = movieLists.concatMap((movieList) =>
    movieList.videos.concatMap((video) =>
        video.boxarts
            .filter((boxart) => boxart.width === 150 && boxart.height === 200)
            .map((boxart) => ({
                id: video.id,
                title: video.title,
                boxart: boxart.url,
            }))
    )
);
