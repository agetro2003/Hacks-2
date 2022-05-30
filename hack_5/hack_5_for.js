/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let index2 = 0;
for (let index = 3; index >= 0; index--) {
    result[index2] = index * 2 + 1;
    index2++
}

//export result
module.exports = result;
console.log(result)