function KaprekarsConstant(num) {
    var cont = 0;
    while (num != 6174) {
      cont += 1;
      var d = num.toString().split('');
      while (d.length < 4) {
        d.push('0');
      }
      var smaller = d.sort().join('');
      var bigger = d.reverse().join('');
      num = bigger - smaller;
    }
    return cont;
  }
 console.log(KaprekarsConstant(9831))