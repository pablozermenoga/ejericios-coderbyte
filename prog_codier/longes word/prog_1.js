/*determinar la palabra mas larga de una cadena*/ 
function PalabraLarga(cad) { 
    
    var letras = cad.replace(/[^a-z0-9+]+/gi, ' ');
    var palabras = letras.split(" ");
    
    palabras.sort(function(a,b){
        return a.length-b.length;
    })
    var final = palabras.length - 1;
    var ultima_palabra = palabras[final].length;
    
    for(i=0;i<=palabras.length;i++){ 
        if(palabras[i].length == ultima_palabra){
            return palabras[i];
        }
    }
}
console.log(PalabraLarga("aplicaciones empresariales"));