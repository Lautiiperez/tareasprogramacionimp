console.log ('EJERCICIO 1')
//Crear una función que convierta pulgadas en centímetros.
//Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

function centimetros (numero){
    return numero * 2.54
}
console.log (centimetros(3));

console.log ('EJERCICIO 2')
//Crear una función que recibe un string y lo convierte en una URL.
//Ej: “pepito” es devuelto como “http://www.pepito.com”

function string (palabra){
return 'http://www.'+palabra+'.com'
}
console.log (string ('equipo1'))


console.log ('EJERCICIO 3')
//Crear una función que recibe un string y devuelve la misma frase pero con admiración.

function admiracion (palabra){
    return '¡'+palabra+'!'
}
console.log (admiracion('Equipo1'))



console.log ('EJERCICIO 4')
//Crear una función que calcule la edad de los perros, considerando que 1 añopara nosotros son 7 de ellos.

function Edad (numero){
    return numero * 7
}
console.log (Edad(5));


console.log ('EJERCICIO 5')
//Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
//PD: considerá que tu mes de trabajo tiene 40 horas.

function sueldo (numero){
    return numero / 40
}
console.log (sueldo(1000));


console.log ('EJERCICIO 6')
//Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
//probando diferentes valores.
//peso de una persona en kilogramos dividido por el cuadrado de la estatura en metros

function IMC (p,a){
    return (p/(a*a))
}
console.log (IMC(60,1.6));

//Seleccionar alguna de estas funciones —o de manera opcional, todas— y escribirla como función expresada y función flecha.

console.log ('Funcion Expresada')

let IMC2 = function (p,a){
    return (p/(a*a))
}
console.log (IMC2(60,1.6));

console.log ('Funcion Flecha')

let IMC3 = (p,a) => (p/(a*a));

console.log (IMC3(60,1.6));