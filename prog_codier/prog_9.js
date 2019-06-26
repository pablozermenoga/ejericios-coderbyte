/*programa que tome la entrada de un numer entero y lo convierta a horas y minutos*/
function HorasMinuto(n){
    var horas = Math.floor(n/60);
    var minutos = n%60;

return horas +":"+minutos;
}
console.log(HorasMinuto(90));