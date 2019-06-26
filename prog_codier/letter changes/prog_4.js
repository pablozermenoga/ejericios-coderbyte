/*Programa que te cambie la una letra por la siguiente en el abecedario*/
function CambioL(cad) { 
    cad= cad.replace(/[a-zA-Z]/g,function(cambio) {
      if (cambio =='z') 
      return 'a';
        else if (cambio == 'Z') 
            return 'A';
              else return String.fromCharCode(cambio.charCodeAt(0) + 1);
    });
   
    return cad.replace(/[aeiou]/g, function(cambio) {
      return cambio.toUpperCase();
    });
  }
  console.log(CambioL("hola"));
     