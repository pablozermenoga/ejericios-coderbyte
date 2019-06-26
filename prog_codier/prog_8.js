/* programa que de verdadero si el numero 1 es mas grande que el numero 2 */
function Mayorque(n1,n2){
    if(n2==n1){
        return -1;
    }else if(n2>n1){
        return true;
    }else{
        return false;
    }
   
            
   }
console.log(Mayorque(5,6));