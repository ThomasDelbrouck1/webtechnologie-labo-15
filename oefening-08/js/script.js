function mergeArrays(arrayOne, arrayTwo) {
    return [...arrayOne, ...arrayTwo];
}

// Arrow notatie:
// const mergeArrays = (arrayOne, arrayTwo) => {
//     return [...arrayOne, ...arrayTwo];
// };

const firstNumbers = [1, 2, 3];
const secondNumbers = [4, 5, 6];

console.log(mergeArrays(firstNumbers, secondNumbers));
