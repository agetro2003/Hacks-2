/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];


for (let index = 0; index < 3; index++) {
    result[index] = arr[index+1]
}

for (let index2 = 0; index2 < 2; index2++) {
    for (let index3 = 0; index3 < 3; index3++) {
        if (result[index2][index3] == "a") {
            result[index2] = result[index2].slice(0,index3) + '@' + result[index2].slice(index3 + 1)
        }   
    } 
}


result[result.length - 1] = result[result.length-1].toUpperCase()

//export result
module.exports = result;
console.log(result)
