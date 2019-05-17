// 1. Create a function called duplicate
// that given an array input, it will return a new duplicate array

const duplicate = arr => {
    return arr.concat(arr);
};

console.log(duplicate([1, 2, 3]));
// Returns ==>  [1, 2, 3, 1, 2, 3]
