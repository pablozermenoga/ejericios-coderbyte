function ScaleBalancing(strArr) { 

    let scale = JSON.parse(strArr[0]);
    let weights = JSON.parse(strArr[1]);
    
    if (scale[0] === scale[1]) return '';
    
    function isEqual(scaleArr, weight1, weight2) {
        if (scaleArr[0] + weight1 + weight2 === scaleArr[1]) return true;
        if (scaleArr[0] + weight1 === weight2 + scaleArr[1]) return true;
        if (scaleArr[0] + weight2 === weight1 + scaleArr[1]) return true;
        if (scaleArr[0] === weight1 + weight2 + scaleArr[1]) return true;
        return false;
    }
    
    for (let i = 0; i < weights.length; i++) {
        if (isEqual(scale, weights[i], 0)) {
            return weights[i].toString();
        }
    }
    for (let i = 0; i < weights.length; i++) {
        for (let j = i + 1; j < weights.length; j++) {
            if (isEqual(scale, weights[i], weights[j])) {
                return weights[i].toString() + ',' + weights[j].toString();
            }
        }
    }
    return 'not possible'; 
           
  }
     
 console.log(ScaleBalancing(  ["[13, 4]", "[1, 2, 3, 6, 14]"]));