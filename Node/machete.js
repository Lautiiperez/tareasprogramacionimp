
//!BUBBLE SORT
//dato:EL BUBBLE SORT NO RETORNA NADA. MANIPULA MI ARREGLO ORIGINAL

    //TODO EJERCICIO : DADO EL SIGUIENTE ARREGLO(DE OBJETOS LITERALES) DE MASCOTAS
    //1.ORDENARLO DE FORMA DESCENDENTE EN BASE A LA EDAD

    
    let mascotas = [
        {
            nombre: "lola",
            edad: 1
        },
        {
            nombre: "jack",
            edad: 2
        },
        {
            nombre: "firulais",
            edad: 4
        },
        {
            nombre: "mora",
            edad: 3
        },
    ]

const orden = array =>{
    let aux = undefined
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].edad > array[j + 1].edad) {
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
        
    }
}

//orden(mascotas)
//console.log(mascotas);


//2.DADO EL SIGUIENTE ARREGLO DE NUMEROS, ORDENAR:
//DE FORMA ASCENDENTE 
let numeros = [1,5,2,7,4,6,3]


const ordenador = array =>{
    //creo una variable aux undefined
    let aux = undefined
    //hago el 1er for 
    for( let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j] > array[j + 1]){
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            } 
        }
    }
}

//ordenador(numeros)
//console.log(numeros);

//DE FORMA DESCENDENTE
const ordenadordesc = array =>{
    //creo una variable aux undefined
    let aux = undefined
    //hago el 1er for 
    for( let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j] < array[j + 1]){ //solo cambia el operador <>
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            } 
        }
    }
}

//ordenadordesc(numeros)
//console.log(numeros);

//!MATRIZ 

//!Machete:
/*Un solo CICLO FOR => una fila, una columna, una diagonal principal, una diagonal secundaria*/
//Si recorro una fila => le pido la longitud a esa FILA ej: for(let = i; 0 < matrix[2].length; i++)
//Si recorro una columna, diagonal, etc => le pido la longitud a la matrix = matrix.length
/*Dos CICLOS FOR => Recorrer toda la matriz completa*/

//!REEMPLAZAR ELEMENTOS EN UNA MATRIZ
//TODO 1) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
    //    ADEMAS LA POSICION DE UNA COLUMNA.
    //    NUESTRA FUNCION DEBE REMPLAZAR TOD0S LOS ELEMENTOS DE ESA COLUMNA
    //    POR UN STRING QUE DIGA "hello"

    let matrix = [
        [14, 12, 17, 41],
        [55, 16, 61, 23],
        [13, 22, 13, 32],
        [12, 61, 18, 23],
    ]

    const reemplazar = (mat,posicionColum) =>{
        for (let i = 0; i < mat.length; i++) {
            //mat[i][posicionColum] = "Hello"
            mat[i][posicionColum] = mat[i][posicionColum] * (-1);
        }
    }

    //reemplazar(matrix,2)
    //console.table(matrix);
    //!SUMAR ELEMENTOS EN UNA MATRIZ
    //TODO 2) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
    //    ADEMAS LA POSICION DE UNA COLUMNA.
    //    NUESTRA FUNCION DEBE MOSTRAR EL TOTAL DE ESA POSICION DE UNA COLUMNA.

    const verTotal = (mat,posicionColum) =>{
        let acc = 0;
        for (let i = 0; i < mat.length; i++) {
            acc = acc + mat[i][posicionColum]
        }
        return acc //porque al ejecutar la funcion, queres ver el resultado acumulado en esa variable
    }

    //let resultado = (verTotal(matrix,2)) //En este caso guardo el resultado de la funcion en una variable, porque hay un return dentro de la funcion. 
    //console.table(resultado);

    //!MULTIPLICAR ELEMENTOS EN UNA MATRIZ
    //TODO 2) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
    // Y ADEMAS LA POSICION DE UNA FILA 
    // NUESTRA FUNCION DEBE RETORNAR EL RESULTADO 
    // DE MULTIPLICAR TODOS LOS ELEMENTOS DE ESA FILA

    const recorrerFila =(mat,posicionFila)=>{
        let acc = 1;
        for (let i = 0; i < mat.length; i++) {
            acc = (mat[posicionFila][i] * acc)
            
        }
        return acc 
    }

let resultado = (recorrerFila(matrix,2))
console.log(resultado);

//!CREAR UNA MATRIZ CUADRADA
//TODO 3)2) Crear una función que genere una matriz de 10x10. 
// Cada fila debe tener solo 10 números. 
/* Matriz cuadrada */
//1ERA FORMA DE HACERLO
function matriz (tamaño)
{
    let cuadrada = [];
    let contador = 1;

    for (let f =  0; f < tamaño; f++)
     {
        cuadrada[f] = [];
        for (let c =  0; c < tamaño; c++)
        {
            cuadrada[f][c] = contador;
            contador +=  1;
        }
    }
    return cuadrada;
}

//let matrizCuadrada  =  matriz (10) //aca le pasamos el tamaño que querramos
//console.table(matrizCuadrada)

//2DA FORMA DE HACERLO

function matriz2(fila, columna) {
    let matriz = []
    let contador = 1
    for (let i = 0; i < fila; i++) {  
        matriz.push ([])
     /*    matriz2[i]=[] */
     for (let j = 0; j < columna; j++) {
        matriz[i][j]= contador++
     }
        
    }
    return matriz
}
//console.table(matriz2(10,10))

//!DIAGONAL PRINCIPAL
//TODO 3) DADA UNA MATRIZ, MOSTRAR POR CONSOLA LA DIAGONAL PRINCIPAL

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
    
}
//!DIAGONAL SECUNDARIA
//TODO 4) DADA UNA MATRIZ, MOSTRAR POR CONSOLA LA DIAGONAL SECUNDARIA

for (let i = 0; i < matrix.length; i++) {
    matrix[i][matrix.length - i - 1]
    
}
//! ARRAY CON DIAGONAL SECUNDARIA
//TODO 5) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
    //    Y RETORNE UN ARREGLO CON TOD0S LOS ELEMENTOS DE LA DIAGONAL SECUNDARIA

    const recorrerDiagonal = mat =>{

        let arr = []

        for (let i = 0; i < mat.length; i++) {
            
            arr.push( mat[i][mat.length - i - 1] )

        }

        return arr

    }

    let arrSecundaria = recorrerDiagonal(matrix)
    //console.log( arrSecundaria )

    //! NUMEROS IMPARES DE LOS ELEMENTOS EN UNA MATRIZ
    //TODO 6) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
    //    Y RETORNE LA SUMA DE TOD0S LOS ELEMENTOS DE LA MATRIZ
    //    TENIENDO EN CUENTA SOLO LOS NUMEROS IMPARES


    let matrix2 = [
        [14, 12, 17, 41],
        [55, 16, 61, 23],
        [13, 22, 13, 32],
        [12, 61, 18, 23],
    ]

    const recorrerMat = mat =>{
        let acc = 0

        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                
                if( mat[i][j] % 2 !== 0 ){
                    acc += mat[i][j]
                }

            }
            
        }

        return acc

    }

    let resultadoMatriz = recorrerMat(matrix2)
    //console.log( resultadoMatriz )
