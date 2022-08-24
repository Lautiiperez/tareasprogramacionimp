function num(x){
    for (let i=x; i<=(x+10); i++)
    console.log (i)
}
num (10)

//Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function num(x,y){
    for (let i=x; i<=y; i= (i+3))
    console.log (i)
}
num (5,20)

for (let numero = 5; numero <= 20; numero = numero + 3) {
    console.log(numero);
  }

//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

// function num(x,y){
//     for (let i=x; i<=y; i = (i+i++)){
//         let nroAnterior = i   
//     }
//     return 
//     console.log (i)
// }
// num (0,5)

const num = function(x, y){
    for (let i = x; i <= y; i++ ){
        
        console.log (i);
    }
}

num (0,5);

for (let i = 0; i < arrayLenguajes.length; i++) {
    for (let j = 0; j < arrayLenguajes[i].length; j++) {
            console.log(arrayLenguajes[i][j]);
        
    }
}
