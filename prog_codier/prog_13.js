/*Programa que te buesque dentro de una matriz la matriz mas grande*/
function MatrizMayor(strArr) {
    let arregloLleno = strArr.map(val => val.split(''));
  
    let arregloInicial= initialEval(arregloLleno);
  
    if (arregloInicial.length === 0) {
      return 0;
    }
    count = 1;
  
    while (arregloInicial.length) {
      arregloInicial = arregloInicial.filter(val => {
        return testOne(arregloLleno, count + 1, val[0], val[1]);
      })
      count++;
      if (count > 10) break;
    }
    return Math.pow(count - 1, 2);
  }
  
  function initialEval (arr) {
    let arregloInicial = [];
    arr.forEach((row, rowNum) => {
      row.forEach((val, colNum) => {
        if (val === '1') {
          arregloInicial.push([rowNum, colNum]);
        }
      });
    });
    return arregloInicial;
  }
  
  function testOne(arr, tam, r, c) {
    for (let i = 0; i < tam; i++) {
      for (let j = 0; j < tam; j++) {
        if (!arr[r + i] || !arr[r + i][c + j] || arr[r + i][c + j] !== '1') {
          return false;
        }
      }
    }
    return true;
  }
     
  
  //MaximalSquare(readline());
  console.log(MatrizMayor(["0111", "1111", "1111", "1111"]));