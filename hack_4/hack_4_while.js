/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let index = 0;
while (index < 4) {
    result[index] = index * 2 + 1;
    index++;
}
//export result
module.exports = result;
console.log(result)