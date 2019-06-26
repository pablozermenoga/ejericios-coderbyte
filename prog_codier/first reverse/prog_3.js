/*Programa que te invierta cadenas*/ 
function Invertir_Cad(cad) { 
    var a = "";
     for(i=cad.length;i>=0;i--) {
          a += cad.charAt(i);
      }
     cad = a;    
      return cad; 
             
    }
       
    console.log(Invertir_Cad("coderbyte"));