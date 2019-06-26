/*Programa que te ponga en mayusculas la primera letra de cada palabra*/
function Cadena(cad) { 
  
    var palabras = cad.split(" ");
    for (i = 0;i<palabras.length; i++) {
      palabras[i]=palabras[i].substring(0,1).toUpperCase()+palabras[i].substring(1);
    }
    return palabras.join(" ");
           
  }
     
  //LetterCapitalize("hello world from coderbyte");   
  console.log(Cadena("insitutto tecnologico"));            