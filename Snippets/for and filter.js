// citiesVisited = ['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'];
// citiesOffered = ['Stockholm','Paris','Melbourne'];

// const a = citiesOffered.filter(x => !citiesVisited.includes(x))[0]
// console.log(a)

// for(let i =0; i<a.length; i++){
//     if(a[i] === true){
//         console.log(citiesOffered[i])
//         return citiesOffered[i]
//     }
// }

// findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"])

const santasList = ["Jason", "Jackson", "Jordan", "Johnny"];
const children = ["Jason", "Jordan", "Jennifer"];

const a = children.filter((x) => santasList.includes(x));
console.log(a);
