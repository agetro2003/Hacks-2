/**
 * mediante el loop for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];

for (let index = 1; index < 6; index++) {
    result[index] = index;
}

//export result
module.exports = result;

console.log (result)