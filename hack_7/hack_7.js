/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let index = 0; index < arr.length; index++) {
    result[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1);
}

//export result
module.exports = result;

console.log(result)