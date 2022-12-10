//! Ejercicio 1:
/*rear un arreglo de objetos donde cada objeto representa un tweet. Cada tweet debe tener 
las siguientes propiedades:
Id (number)
Texto (string)
Cantidad de likes (number)
Cantidad de retweets  (number)
Es privado (bool)
Tu arreglo debe tener, al menos, 6 tweets.
Implementa una función que reciba por parámetro él array creado y un id. la misma deberá retornar 
un booleano indicando si ese tweet es privado o no.
*/

let twitter = [
    {
        id:10,
        Texto:"Lautaro Perez" ,
        likes:100 ,
        retweets:200  ,
        privado: false ,
    },
    {
        id: 13,
        Texto: "Stella Cufre",
        likes: 1000,
        retweets:  3,
        privado: true,
    },
    {
        id:300 ,
        Texto:"Hector Perez" ,
        likes: 300,
        retweets: 59 ,
        privado: true,
    },
    {
        id: 120,
        Texto: "Antoine Vera",
        likes: 90,
        retweets: 5 ,
        privado: false,
    },
    {
        id: 60,
        Texto: "Yesica Olmos" ,
        likes: 900,
        retweets: 350 ,
        privado: false,
    },
    {
        id: 77,
        Texto:"Natalia Ascagorta" ,
        likes: 14,
        retweets:22  ,
        privado: true,
    }
]

function estado (arreglo,numero) {
    for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i].id == numero) {
            return arreglo[i].privado
        }
    }
}
console.log(estado(twitter,120) )

//! Ejercicio 2:
/*Dado el siguiente array:
Crear una función que recibe por parámetro el arreglo y lo ordene de forma descendente según la propiedad anio.*/

const autos = [{
    marca: 'Toyota',
    anio: 2014,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2015,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2017,
    color: 'rojo'
},
{
    marca: 'Fiat',
    anio: 2019,
    color: 'negro'
}]

function orden(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1; j++) {
            if (array[j].anio < array[j+1].anio) {
                let temp = array[j]
				array[j]= array[j + 1]
				array[j + 1] = temp
            }
        }
    }
    }
orden(autos)
console.table(autos);



//!Ejercicio 3:
//Dada la siguiente matriz://

let matriz = [
    [13, 21, 3, 10],
    [39, 14, 52, 12],
    [6, 72, 87, 1],
    [6, 72, 8, 11],
    [5, 67, 1, 79]
];

/*1. Crear una función que reciba a la matriz por parámetro y devuelva la multiplicación  de 
los elementos de la segunda fila. (Recordá que las posiciones inician en 0)*/

function multi(matriz) {
    let resultado = 1
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[1][j]) {
                resultado = matriz[1][j] * resultado
            }
        }return resultado
    }
}
console.log(multi(matriz))

/*2. Crear una función que reciba a la matriz por parámetro y devuelva un nuevo array con 
todos los valores de la matriz que sean pares y mayores a 6. */

function pares(matriz) {
    let nuevoR =[]
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] %2 == 0 && matriz[i][j] > 6) {
                nuevoR.push(matriz[i][j])
            }
        }
        
    }
    return nuevoR
}
console.table(pares(matriz))

function multiplicacion(array, posFila) {
    let acum = 1
    for (let i = 0; i < array.length; i++) {
       acum = array[posFila][i] * acum  
    }return acum    
        
    
    
}

console.log(multiplicacion(matriz,1));