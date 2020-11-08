// ([4, 4, 4, 3, 3], 12)

// const a = [4, 4, 4, 3, 3]
// let total = 0
// for (let i =0; i < a.length; i++){
//     total += a[i]
//     if(total > 9) return i;
//     }
// //     return a.length
// // }
// console.log(total)

function save(sizes, hd) {
  let i = -1;
  while (hd >= 0) {
    hd -= sizes.shift();
    i++;
    console.log(hd);
    console.log(sizes);
  }
  console.log(i);
  return i;
}
console.log(save([4, 4, 4, 3, 3], 8));

// function save(sizes, hd) {
//     for (var i = 0, a = 0; i < sizes.length; i++) {
//       a += sizes[i];
//       if (a > hd) return i;
//     }
//     return sizes.length;
//   }
