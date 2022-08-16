let edad = 21 //(el número es a modo de ejemplo, podés cambiarlo ocrear otras para tener varias pruebas)

if(edad < 18 && edad > 0) {
console.log("No puede pasar al bar.")
} else if (edad < 21 && edad >=18){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}else if (edad<0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.")

}else if (edad >= 21){
console.log("Puede pasar al bar y tomar alcohol.")
}

if (edad == 21){
    console.log("Felicidades tenes 21!")
}
if ((edad % 2) !== 0){
    console.log("Tu edad es impar")
}
