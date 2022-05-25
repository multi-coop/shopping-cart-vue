const array = [1,2,3.956576,22.5000, 128.7979]

let total = array.reduce((partialSum, a) => partialSum + a, 0)
console.log(total);