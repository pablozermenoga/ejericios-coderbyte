/*programa que te evlue cadena valida */
function Simbolosimple(cad) { 
    var str = '=' + cad + '=';
     for (i = 0; i < str.length; i++) {
       if (str[i].match(/[a-z]/i)!== null) {
        if (str[i-1] !== '+'||str[i+1]!== '+') { 
          return false;
        }
      }
    }
    return true;
  }
     
  //SimpleSymbols("+d+=3=+s+");   
console.log(Simbolosimple("+d+=3=+s+"));