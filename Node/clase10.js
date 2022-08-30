/* a lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ]; */
/* podes continuar tu codigo a partir de aca!  */

//Ejercicio 1
let banco = {
    clientes: [  {  
          nroCuenta: 5486273622,
          tipoDeCuenta: "Cuenta Corriente",
          saldoEnPesos: 27771,
          titularCuenta: "Abigael Natte",
     } ,
        {
          nroCuenta: 1183971869,
          tipoDeCuenta: "Caja de Ahorro",
          saldoEnPesos: 8675,
          titularCuenta: "Ramon Connell",
        },
        {
          nroCuenta: 9582019689,
          tipoDeCuenta: "Caja de Ahorro",
          saldoEnPesos: 27363,
          titularCuenta: "Jarret Lafuente",
        },
        {
          nroCuenta: 1761924656,
          tipoDeCuenta: "Cuenta Corriente",
          saldoEnPesos: 32415,
          titularCuenta: "Ansel Ardley",
        },
        {
          nroCuenta: 7401971607,
          tipoDeCuenta: "Cuenta Unica",
          saldoEnPesos: 18789,
          titularCuenta: "Jacki Shurmer",
        },
    ]

}


function consultarCliente (datos) {
        for (let i = 0; i < datos.clientes.length; i++) {

        
        console.log(datos.clientes[i].titularCuenta);}
}
consultarCliente (banco)

/* 
let textoSinGuiones = ('Este texto es mala onda','mala','buena');
function reemplazoFastFast(a,b,c){
console.log(textoSinGuiones[0].replace([1],[2]))
}
reemplazoFastFast(textoSinGuiones)

console.log(textoSinGuiones) */


let textoSinGuiones = ['Este texto es mala onda','mala','buena']
function reemplazoFastFast(a) {
  return a[0].replace(a[1],a[2]);
}

console.log(reemplazoFastFast(textoSinGuiones));


function menciona (texto, palara){
  return texto.includes(palabra)
}
let textos = menciona("Este texto es mala onda","mala")
console.log(textos)