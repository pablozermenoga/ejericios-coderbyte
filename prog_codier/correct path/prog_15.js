function CorrectPath(str) { 
    var strComplete;
    var qCount = questionCount(str);
    for(let j = 0; j < Math.pow(4,qCount); j++) {  
      strComplete = "";
      var cnt = 0;
      for(let i = 0; i < str.length; i++) {
        if(str[i] !== "?") {
          strComplete += str[i];
        } else {
          strComplete += whatLetter(j,cnt++);
        }
      }   
      
      if(checkPath(strComplete)) {
        return strComplete;   
      }  
    }
    return false; 
           
  }
  
  function questionCount(str) {
    return str.match(/(\?)/g).length;
  }
  
  function checkPath(str) { 
    let pos = {};
    let lastPos = [1,1];
    pos[11] = true;
  
    for(let i = 0; i < str.length; i++) {   
      if(str[i] === "d") {
        lastPos[1]++; 
        if(lastPos[1] > 5)  return false;  
      }
      if(str[i] === "u") {
        lastPos[1]--; 
        if(lastPos[1] < 1)  return false; 
      }
      if(str[i] === "r") {
        lastPos[0]++; 
        if(lastPos[0] > 5)  return false;  
      }
      if(str[i] === "l") {
        lastPos[0]--; 
        if(lastPos[0] < 0)  return false; 
      }
       
      if(pos[lastPos[0].toString() + lastPos[1].toString()] === true) return false; 
      pos[lastPos[0].toString() + lastPos[1].toString()] = true; 
  
    }
    if(lastPos[0] === 5 && lastPos[1] === 5) { 
      return true;
    }
  
    
  }
  
  function whatLetter(total, pos) {
    var totalB4 = total.toString(4).split('');
    if(totalB4[totalB4.length - pos -1] !== undefined) {
      if(totalB4[totalB4.length - pos -1] == "0") return "d";
      if(totalB4[totalB4.length - pos -1] == "1") return "r";
      if(totalB4[totalB4.length - pos -1] == "2") return "u";
      if(totalB4[totalB4.length - pos -1] == "3") return "l";
    }
    else{
      return "d";
    }
  }   
 
 console.log(CorrectPath("???rrurdr?"));