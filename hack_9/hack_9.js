/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

for (let index = 0; index < arr.length; index++) {
       if (arr[index][0] == 'b') 
       {
           result++;
       } 
    }
    

//export result
module.exports = result;
console.log(result)