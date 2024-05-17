let testArray = [1, 2];

let palabraUnida = testArray.join('&filterCategory=');
// console.log(palabraUnida);
let string = "filterCategory="

if (testArray.length > 0){
string = string + palabraUnida;
} else {
    string = "";
}
console.log(string);
