/* A - Nivel 1

1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos
2 - Desarrollar una función que reciba 2 numeros y 
     retorne la suma de ambos, si el primer parametro es mayor, 
     caso contrario retornar la resta.
3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
     caso contrario retornar 'otra chance '.

4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es par, retornar la mitad del total,  
     caso contrario retornar el doble del total.



B  Nivel 2
- Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:

1 - Funcion que reciba un array de edades y retorne el promedio 
2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
3 - Funcion que reciba un array de edades y retorne el menor elemento // 5
4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
   {
      edadesMenor : "// edades menor a 18",  
      edadesMayor : "// edades menor a 18"
   }

C  Nivel 3

1 - Desarrollar un objeto literal que contenga 5 propiedades que sean del siguiente tipo:
   - 2 String   
   - 1 Boolean
   - 1 Number
   - 1 Array
   - 1 Metodo que retorne un saludito
    * por ejemplo:
    
     let canHijo = {
       nombre : 'Negrito',
       color  : 'Negrito',
       estaVacunado : true,
       edad : 10,
       vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
       saludo: function(){
           return 'wouf wouf wouf..'
       } 
     }
    
  - Luego desarrollar una funcion que liste individualmente los elementos de la propiedad del tipo Array 


2 - Dado el Siguiente array de personas desarrollar funciones:
  - Funcion que reciba el array de personas y liste el nombre de cada una. 
  - Funcion que reciba el array de personas y retorne en un array los que son programadores.
  - Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null
  - Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null 


[
    {
      "id": 0,
      "isProgrammer": true,
      "age": 28,
      "name": "Harrington Curry",
      "company": "TRANSLINK",
      "favoriteFruit": "strawberry"
    },
    {
      "id": 1,
      "isProgrammer": false,
      "age": 38,
      "name": "Greta Morton",
      "company": "PYRAMI",
      "favoriteFruit": "apple"
    },
    {
      "id": 2,
      "isProgrammer": false,
      "age": 32,
      "name": "Hester Bowen",
      "company": "TURNABOUT",
      "favoriteFruit": "apple"
    },
    {
      "id": 3,
      "isProgrammer": false,
      "age": 25,
      "name": "Melendez Mcfarland",
      "company": "XSPORTS",
      "favoriteFruit": "strawberry"
    },
    {
      "id": 4,
      "isProgrammer": false,
      "age": 31,
      "name": "Kimberly Matthews",
      "company": "KNOWLYSIS",
      "favoriteFruit": "banana"
    },
    {
      "id": 5,
      "isProgrammer": false,
      "age": 36,
      "name": "Hardin Sims",
      "company": "SEALOUD",
      "favoriteFruit": "banana"
    },
    {
      "id": 6,
      "isProgrammer": false,
      "age": 29,
      "name": "Natalia Huff",
      "company": "ENERSOL",
      "favoriteFruit": "apple"
    }
  ]


Tips

* Es para que practiquen sintaxis ademas del pensamiento computacional, piensen tipo de datos posibles.
* Desarrollen y lean enunciados en voz alta, utilicen abstracción, vean las alternativas de llegar al mismo resultado de diferentes formas


nota : Se recomienda utilizar estructuras y conceptos vistos en la materia
``` */

 //Desarrollar una función que reciba 2 numeros y retorne la suma de ambos
function suma (A,B) {
    return A+B
}
console.log(suma(2,2));
/* 
2 - Desarrollar una función que reciba 2 numeros y 
     retorne la suma de ambos, si el primer parametro es mayor, 
     caso contrario retornar la resta. */
function suma2(A,B) {
    if(A>B){
  return  A + B}
    else { return (A - B)}
}
console.log(suma2(2,10));


/* 3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
     caso contrario retornar 'otra chance '. */
function altaFuncion(a,b,c,d){
    if ((a+b+c+d)>=7) {
        return "Aprobado"}
        else {return "Otra Chance"}
    }
console.log(altaFuncion(1,2,3,0));

/* 4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es par, retornar la mitad del total,  
     caso contrario retornar el doble del total. */
function funcion2 (a,b,c,d) {
    let suma = (a+b+c+d)
    if (suma % 2 == 0) {
        return suma / 2
    }else return suma * 2
}
console.log(funcion2(2,2,2,5));

/* - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] ,
luego desarrollar las siguientes funciones:

 */

let edad1 = [2,4,6,8,10]
let edad2 = [3,5,7,9,11]
let edad3 = [45,13,4,45,1]
/* 1 - Funcion que reciba un array de edades y retorne el promedio  */
function promedio(edades) {
    let prome = 0;
    for (let i = 0; i < edades.length; i++) {
        prome = prome + edades[i];
    }
        let fin = prome / edades.length;
        return fin
    }

console.log(promedio(edad1));
/* 
2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80 */

function alto (edades) {
    let mayor = edades[0]
    for (let i = 0; i < edades.length; i++) 
    if (edades[i]>mayor) {
        mayor = edades[i]
    }
    return mayor
    }
    console.log(alto(edad3));

/* 
    3 - Funcion que reciba un array de edades y retorne el menor elemento  */
    function menor(array) {
      let menore = array[0]
      for (let i = 0; i < array.length; i++) 
        if (array[i] < menore) {
          menore = array[i]
        }
        return menore
      }
    console.log(menor(edad3));

    /* 
4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario */
function repetido (arrayEdad) {
  let repetido = false
    for (let i = 0; i < arrayEdad.length; i++) {
      for (let j = 0; j < arrayEdad.length; j++) {
        if (arrayEdad[i] == arrayEdad[j] && i!=j) {
          repetido = true
        }
        
      }
    }
    return repetido
}
console.log(repetido(edad3));

/* 
5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia 
o null caso contrario */

function coincide (array, numero) {
  if (array.indexOf(numero)>= 0) {
    return array.indexOf(numero)
  } else {return null}
}
console.log(coincide(edad3,100))

/* 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array */

function objeto(array) {
  let elObjeto={propiedad1:[],
  propiedad2:[]}
  for (let i = 0; i < array.length; i++) {
    if (i<=(array.length/2)) {
      elObjeto.propiedad1.push(array[i])
    }else {elObjeto.propiedad2.push(array[i])}
    
  }
return elObjeto
}
console.log(objeto(edad3))