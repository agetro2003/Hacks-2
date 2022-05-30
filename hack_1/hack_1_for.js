/**
 * mediante el loop for agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];

for (let index = 0; index < 6; index++) {
    result[index] = index;
}
//export result
module.exports = result;

console.log (result)