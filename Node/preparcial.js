//TODO 1) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
      //    ADEMAS LA POSICION DE UNA COLUMNA.
      //    NUESTRA FUNCION DEBE REMPLAZAR TOD0S LOS ELEMENTOS DE ESA COLUMNA
      //    POR UN STRING QUE DIGA "hello"
//TODO 2) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
      //    ADEMAS LA POSICION DE UNA FILA.
      //    NUESTRA FUNCION DEBE RETORNAR EL RESULTADO DE MULTIPLICAR
      //    TOD0S LOS ELEMENTOS DE ESA FILA

  //TODO 3) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
      //    Y RETORNE UN ARREGLO CON TOD0S LOS ELEMENTOS DE LA DIAGONAL SECUNDARIA
//TODO 4) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
      //    Y RETORNE LA SUMA DE TOD0S LOS ELEMENTOS DE LA MATRIZ
      //    TENIENDO EN CUENTA SOLO LOS NUMEROS IMPARES
    
      let matrix = [
        [1, 2, 1, 4],
        [55, 16, 61, 23],
        [13, 22, 13, 32],
        [12, 61, 18, 23],
    ]

/*     function reemplazo(matris, lugar) {
        for (let i = 0; i < matris.length; i++) {
            matris[i][lugar] = "hello"
            
            }
            return matris
        }
    console.table(reemplazo(matrix,2)); */

/*     function multip(matris, fila) {
        let resultado = 1
        for (let i = 0; i < matris.length; i++) {
            for (let j = 0; j < matris.length; j++) {
                console.log(matris[fila][j]);
                if (matris[fila][j]) {
                    resultado = matris[fila][j] * resultado
                }
            }
        return resultado 
        }
    }
    console.log(multip(matrix,3)); */

    function diagonal(matris) {
        let resultado = []
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (condition) {
                    
                }
            }
            
        }
    }


    const recorrerDiagonal = mat =>{

        let arr = []

        for (let i = 0; i < mat.length; i++) {
            
            arr.push( mat[i][mat.length - i - 1] )

        }

        return arr

    }

    let arrSecundaria = recorrerDiagonal(matrix)
    //console.log( arrSecundaria )