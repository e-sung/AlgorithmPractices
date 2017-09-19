function caesar(s, n) {
	// 함수를 완성하세요.
  var numberOfAlphabet = 26
  n = n%numberOfAlphabet 
  var returnString = ""
  
  for(let i=0; i<s.length;i++){
    var originNum = s[i].charCodeAt()
    var unicodeNum = s[i].charCodeAt()
    
    if(isAlphabet(s[i])){
      unicodeNum += n
      if(beyondAlpha(originNum,unicodeNum)){
        unicodeNum -= numberOfAlphabet
      }
    }
    returnString += String.fromCharCode(unicodeNum)
  }
	return returnString;
}

function isAlphabet(str) {
  return /[a-zA-Z]/.test(str);
}
      
function beyondAlpha(originNum, newNum){
  if(isCapital(originNum)){
    return newNum > "Z".charCodeAt()
  }else{
    return newNum > "z".charCodeAt()
  }
}

function isCapital(num){
  return (num >= "A".charCodeAt() && num <="Z".charCodeAt())
}