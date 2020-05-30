Computer problem series #1: Fill the Hard Disk Drive

Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11

// function save(a, hd) {
//     for (let i = 0, total = 0; i < a.length; i++){
//         total += a[i]
//         if(total > hd) return i;
//         console.log(i)
//         }
//         return a.length
//     }
//     console.log(save([4, 4, 4, 3, 3],12))
    

function save(sizes, hd) {
    for (let i = 0, total = 0; i < sizes.length; i++){
        total += sizes[i]
        if(total > hd) return i;
        }
        return sizes.length
}

//other solution

function save(sizes, hd) {
    let i = -1;
    while (hd >=0) {
      hd -= sizes.shift();
      i++;
    }
    return i;
}

  // and another 

function save(sizes, hd) {
    let result = 0;
    sizes.reduce((acc, curr) => {
        if ((acc += curr) <= hd) result += 1;
        return acc;
    }, 0);
    return result;
}