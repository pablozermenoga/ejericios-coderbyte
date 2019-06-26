/*Determinar el factorial de un numero*/
function Factorial(n){
    var fac = 1;
    for(var i=1;i<=n;i++){
        fac=fac*i; 
    }
    return fac
} 
console.log(Factorial("4"));