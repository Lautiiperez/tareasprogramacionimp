/* 1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos */

    function suma(a,b) {
        return a+b
    }
    console.log(suma(6,10))

/*     2 - Desarrollar una función que reciba 2 numeros y 
    retorne la suma de ambos, si el primer parametro es mayor, 
    caso contrario retornar la resta. */

    function suma2 (a,b) {
        if (a>b) {
        return a+b
        }else {
            return a-b
        }
    }
console.log(suma2(15,5));

/* 3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
    si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
    caso contrario retornar 'otra chance '. */

function suma3(a,b,c,d) {
    if (a+b+c+d >=7) {
    return "aprobado"
    }else {
        return "otra chance"
    }
}
console.log(suma3(1,1,3,1));

/* 4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
    si el el resultado es par, retornar la mitad del total,  
     caso contrario retornar el doble del total. */
    function suma4(a,b,c,d) {
        let resultado = (a+b+c+d)
        if ((resultado)%2 == 0) {
            return (resultado)/2
        }else return resultado*2
    }
    console.log(suma4(1,1,3,2));

/* B  Nivel 2
- Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:







 */

let edad = [3, 56, 12, 11, 7, 3, 18]
let edad2 = [10, 9, 8, 22, 55, 80, 5]
let edad3 = [99, 3, 5, 63, 29, 1, 9]

/* 1 - Funcion que reciba un array de edades y retorne el promedio  */
function promedio(array) {
    let resu = 0
    for (let i = 0; i < array.length; i++) {
        resu = array[i] + resu        
    }
    return (resu/array.length)
}
console.log(promedio(edad2));

/* 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80 */
function mayor(array) {
    let grande = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i]>grande) {
            grande = array[i]
        }
    }
    return grande
}
console.log(mayor(edad3));

/* 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5 */
function menor(array) {
    let chico = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i]<chico) {
            chico = array[i]
        }
    }
    return chico
}
console.log(menor(edad2));

/* 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario */
function igual(array) {
    let final = false
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j] && i != j) {
                final = true
            } 
        }
        return final
}
}

console.log(igual(edad2));

/* 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si 
encuentra coincidencia o null caso contrario */

function buscar(array, num) {
    let fin = 1
    if ((array.indexOf(num))>= 0){
    fin = array.indexOf(num)} else {
        fin = null
    }
    return fin 
}
console.log(buscar(edad,11));

/* 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
   {
      edadesMenor : "// edades menor a 18",  
        edadesMayor : "// edades menor a 18"
   } */

    function pase (array) {
        objeto = {
            edadesMenor:[],
            edadesMayor:[],
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 18) {
                objeto.edadesMayor.push(array[i])
            }else {objeto.edadesMenor.push(array[i])}
            
        }
        return objeto 
    }
console.table(pase(edad2));


/* 1 - Desarrollar un objeto literal que contenga 5 propiedades que sean del siguiente tipo:
   - 2 String   
   - 1 Boolean
   - 1 Number
   - 1 Array
   - 1 Metodo que retorne un saludito
     por ejemplo:
    
     let canHijo = {
       nombre : 'Negrito',
       color  : 'Negrito',
       estaVacunado : true,
       edad : 10,
       vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
       saludo: function(){
           return 'wouf wouf wouf..'
       } 
     } */

    let miObjeto = {
        nombre: "Lautaro",
        apellido: "Perez",
        argentino: true,
        altura: 1.8,
        coloresFav: ["verde", "negro", "violeta", "naranja"],
        saludo: function saludar(nombres) {
            return "Hola, " + this.nombre 
        }
    }

    /* Luego desarrollar una funcion que liste individualmente los elementos de la propiedad del tipo Array */

    function lista(objeto) {
        for (let i = 0; i < objeto.length; i++) {
            console.log(objeto[i]);
        }
    }
    lista (miObjeto.coloresFav)


    Obje = [
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
          "isProgrammer": true,
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

/* Funcion que reciba el array de personas y liste el nombre de cada una. */
function nombres(objeto) {
    for (let i = 0; i < objeto.length; i++) {
        console.log(objeto[i].name);
    }
}
nombres(Obje)

/* Funcion que reciba el array de personas y retorne en un array los que son programadores. */
function programadores(objeto) {
    program = []
    for (let i = 0; i < objeto.length; i++) {
        if (objeto[i].isProgrammer == true) {
            program.push(objeto[i].name)
        }
    }
    return program
}
console.log(programadores(Obje))

/* - Funcion que reciba el array de personas y un id a buscar, 
    retorne la persona en caso de encontrar, 
       caso contrario retorne null */
    function busca(objeto, num) {
    persona = null
        for (let i = 0; i < objeto.length; i++) {
            if (objeto[i].id == num) {
                persona = objeto[i].name
            }
        }
        return persona
    }
    console.log(busca(Obje,10))