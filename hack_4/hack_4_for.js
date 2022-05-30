/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
for (let index = 0; index < 4; index++) {
    result[index] = index * 2 + 1;
}


//export result
module.exports = result;
console.log(result)