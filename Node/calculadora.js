// Nivel I

/* Crear una función sumar, esta deberá recibir dos parámetros y retornar la
suma de los mismos.*/

// Declarada
function sumarD(a , b){
    return a + b
}

// Expresada
let sumarE = function(a , b){
    return a + b
}

// Arrow
let sumarA = (a , b, c) => a + b + c ;



/* Crear una función restar, la cual deberá recibir dos parámetros y retornar la
resta del primero menos el segundo.*/

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

/* Crear una función multiplicar, la misma deberá recibir dos parámetros y
retornar el resultado de su multiplicación.*/

// Declarada
function multiplicarD(a , b){
    return a * b
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


// Nivel II

console.log("-------------- Testeo de Operaciones / Calculadora --------------");

const prompt = require("prompt-sync")({ sigint: true });

/* Ejecutar la función que permite sumar y la función que permite restar pasando
como argumentos dos números cualesquiera. Mostrar en consola los
resultados.*/
/* console.log("-------------- Suma y Resta --------------")
{
let a = parseInt(prompt("Ingrese primer número: "));
let b = Number(prompt("Ingrese segundo número: "));

console.log("Suma: " + sumarA(a , b));
console.log("Resta: " + restarA(a , b));} */

/* Ejecutar la función que permite multiplicar pasando como argumentos dos
números cualesquiera. Mostrar en consola el resultado. */
/* console.log("-------------- Multiplicacion --------------")
{
let a = Number (prompt("Ingrese primer número: "));
let b = Number(prompt("Ingrese segundo número: "));

console.log("Multiplicacion: " + multiplicarA(a , b));
}

console.log("-------------- Division --------------")
{
    let a = Number (prompt("Ingrese primer número: "));
    let b = Number(prompt("Ingrese segundo número: "));
    
    console.log("Division: " + dividirA(a , b));
    } */


// Nivel III


    console.log("-------------- CUADRADO --------------")
    {
        let a = Number (prompt("Ingrese primer número: "));
        let b = a;
        
        
        console.log("Cuadrado: " + multiplicarA(a , b));
    }

    console.log("-------------- Promedio --------------")
    {
        let a = Number (prompt("Ingrese primer número: "));
        let b = Number (prompt("Ingrese sefundo número: "));
        let c = Number (prompt("Ingrese tercer número: "));
        
        
        console.log("Promedio: " + (sumarA(a , b, c)/3));
    }