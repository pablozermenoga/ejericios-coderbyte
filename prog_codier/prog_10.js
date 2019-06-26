/*programaque ordene los caracteres de una cadena */
function Sopadeletras(cad){

    var car = cad.split("");
    var ordenar = car.sort();
    return ordenar.join("");
           
  
}
console.log(Sopadeletras("cba"));