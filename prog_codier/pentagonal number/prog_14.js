function PentagonalNumber(num) { 
    var cont = 1;
    for(var i = 1; i < num; i++) 
    cont+= i * 5;
    return cont;
   }
console.log(PentagonalNumber(2))                 
   
   