/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let index = 3;
let index2 = 0;
while (index >= 0 ) {
    result[index2] = index * 2 + 1;
    index--;
    index2++;
}

//export result
module.exports = result;
console.log(result)