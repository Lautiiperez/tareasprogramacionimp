/* let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];



function orden (objeto){
	for (let i = 0; i < objeto.length; i++) {
		for (let j = 0; j < objeto.length -1; j++) {
			if (objeto[j].estatura > objeto[j+1].estatura) {
				let temp = objeto[j]
		objeto[j]= objeto[j + 1]
				objeto[j + 1] = temp
			}
		}
	}
	
}
orden(personas)
console.log(personas);



let numeross = [6, 5, 1, 2, 4, 3, 8, 7];

function orden (array){
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length -1; j++) {
			if (array[j] > array[j+1]) {
				let temp = array[j]
				array[j]= array[j + 1]
				array[j + 1] = temp
			}
		}
	}
	
}
orden(numeros)
console.log(numeros);
 */



let array= [1,5,7,9]

function orden(array) {
	let resultado = true
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length -1; j++) {
			if (array[j] > array[j+1] )
			resultado = false; 
			
		}
		return resultado
	}
}
console.log(orden (array))


// 2. Desarrollar una función que genere una matriz, deberá recibir por parámetros la
// cantidad de filas y columnas y retornar con valores secuenciales numéricos.

function creaArray(fila,columna) {
	let nuevo = []
		for (let i = 0; i < fila; i++) {
		nuevo[i] = [i*fila]
		for (let j = 0; j < columna; j++) {
			nuevo[i][j] = i+j*columna
		}
	}
	return nuevo
}
console.log(creaArray(5,5))

