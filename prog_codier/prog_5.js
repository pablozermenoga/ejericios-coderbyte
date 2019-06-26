/*Programa que sume los numero desde 1 a un argumento dado*/
function SumaSimple(n){
    var cont = 0;
    for(i=1;i<=n;i++){
        if(n==0){
            cont = 0
        }else{
            cont=cont+i;
        }
    }
    return cont
} 
console.log(SumaSimple(0))