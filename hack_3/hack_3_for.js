/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];
let index2 = 0
for (let index = 5; index > 0; index--) {
   
    result[index2] = index;
    index2++
}


//export result
module.exports = result;
console.log(result)