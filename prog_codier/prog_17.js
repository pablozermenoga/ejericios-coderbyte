function allVowels(matrix) {
    return matrix.every(row => row.every(letter => 'aeiou'.indexOf(letter) !== -1));
}

function VowelSquare(strArr) { 
    var matrix = strArr.map(row => row.split(''));
 
    for (var row = 0; row < matrix.length - 1; row++) {
        for (var column = 0; column < matrix[0].length - 1; column++) {
            var subMatrix = matrix.slice(row, row + 2).map(rowArr => rowArr.slice(column, column + 2));
            if (allVowels(subMatrix)) {
                return row + '-' + column;
            }
        }
    }
    
    return 'no encontrado';
}
console.log(VowelSquare(["aqrst", "ukaei", "ffooo"]));

