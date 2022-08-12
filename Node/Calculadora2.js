const prompt = require("prompt-sync")({ sigint: true });
// Nivel I

// Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos./

// Declarada
function sumarD(a , b){
    return a + b
}

// Expresada
let sumarE = function(a , b){
    return a + b
}

// Arrow
let sumarA = (a , b) => a + b


// Crear una función restar, la cual deberá recibir dos parámetros y retornar la resta del primero menos el segundo./

//Declarada
function restarD(a , b){
    return a - b
}

// Expresada
let restarE = function(a , b){
    return a - b
}

// Arrow
let restarA = (a , b) => a - b

// Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar el resultado de su multiplicación./

// Declarada
function multiplicarD(a , b){
    return a* b
}

// Expresada
let multiplicarE = function(a , b){
    return a * b
}

// Arrow
let multiplicarA = (a , b) => a * b;

/* Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
de la división del primero sobre el segundo.*/

// Declarada
function dividirD(a , b){
    return a / b
}

// Expresada
let dividirE = function(a , b){
    return a / b
}

// Arrow
let dividirA = (a , b) => a / b;

console.log (multiplicarD(2,4))