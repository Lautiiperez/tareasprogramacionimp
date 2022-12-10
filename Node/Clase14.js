const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo",
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: true,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo",
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
]

/* Desarrollar una función llamada generarID que reciba como parámetro el array
de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id
con un valor Numérico
 */

function generarID(array) {
    
    for (let i = 0; i < array.length; i++) {
        array[i].id = (i+1)
        }
        return array
    } 
    generarID(arrayCuentas)
/* console.log(arrayCuentas); */


/* Desarrollar una función llamada buscarPorId que reciba como parámetro el
array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto
literal completo), caso contrario retornar null */
function buscarPorId(array,num) {
    let persona = [null]
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == num) {
            persona = array[i]
        }
    }
    return persona
}
/* console.log(buscarPorId(arrayCuentas,3)) */


/* Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el
array de cuentas y un saldo (Number), deberá retornar un array que se cuyas
cuentas se encuentren por debajo del saldo enviado por parámetro */
function filtrarPorSaldos (array, numero) {
    let personas = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].saldo < numero) {
            personas.push(array[i].titular)
        }
    }
    return personas
}
/* console.log(filtrarPorSaldos(arrayCuentas, 1500)); */

/* Desarrollar una función llamada incrementarSaldo que reciba como parámetro
el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta,
en caso de encontrar, caso contrario retornar undefined
a. Reutilizando la función buscarPorId
 */
function incrementarSaldo(array, num, saldo) {
    let persona = [undefined]
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == num) {
            array[i].saldo = array[i].saldo + saldo;
            persona = array[i]
        }
    }
    return persona
}
console.log(incrementarSaldo(arrayCuentas,5,2000));