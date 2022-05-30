/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];
let index = 0
while (index < 6) {
result[index] = index;
index++;
}

//export result
module.exports = result;

console.log(result)