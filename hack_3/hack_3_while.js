/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
let index = 5;
let index2 = 0;
while (index > 0) {
result[index2] = index;
index--;
index2++;
}


//export result
module.exports = result;
console.log(result)