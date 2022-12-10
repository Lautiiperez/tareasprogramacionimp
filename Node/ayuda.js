
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

function arreglarAutos(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j].anio < array[j + 1].anio) {
          let aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
        }
      }
    }
  }
  arreglarAutos(autos)
  console.log(autos);



  const verificador = (array, id) =>{
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].privado > array[j + 1].privado) {
                let aux = true
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
        
    }
}

verificador(twitter)
console.log(twitter);

 function tweet(array, id) {
     for (let i = 0; i < array.length; i++) {
         if (array[i].esPrivado === true ) {
           return "el tweet es privado"
         }else if (array[i].esPrivado === false) {
            return "el tweet no es privado"
        }
        
     }
}

console.log(tweet(tweets,3));


function esprivado(array, idd){
    for (let i = 0; i< array.length; i++) {
        console.log(array[i]);
        if (array[i].Id === idd){
            return array[i].Privado
            }
        }  
    }


