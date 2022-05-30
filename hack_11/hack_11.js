/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
// Primera parte
result = numberArray.concat(stringArray)

//Segunda parte
for (let index = 0; index < result.length; index++) {
   
    if(result[index] == 1) {result[index] = "one"}
else if(result[index] == 3) {result[index] = "three"}
else if(result[index] == 5) {result[index] = "five"}  
else if(result[index] == "foo") {result[index] = "f00"}
else if(result[index] == "bar") {result[index] = "Bar"}
else if(result[index] == "baz") {result[index] = "b@z"}
else if(result[index] == "qux") {result[index] = "quX"}
else if(result[index] == "echo") {result[index] = "3ch0"}
}

//Tercera parte
result.push("h@ck")
result.unshift("h@ck")
result.splice(6,0,"h@ck")



//export result
module.exports = result;
console.log(result)