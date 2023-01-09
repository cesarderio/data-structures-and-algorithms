
function repeatedWord(str) {
// let words = str.lowerCase().split(' ');
// let mapWords = {};
  let mapWords = new Map();
  let tempStr = '';
  let responseWord = '';

  for(let i = str.length - 1; i >= 0; i--){
    if(str[i] !== ' '){
      tempStr += str[i];
    } else{
      if(mapWords.has(tempStr)){
        responseWord = tempStr;
      } else{
        mapWords.set(tempStr, 1);
        tempStr = '';
      }
    }
    if(mapWords.has(tempStr)){
      responseWord = tempStr;
    }
    if(responseWord !== ''){
      responseWord = [...responseWord].reverse().join('');
      return responseWord;
    } else{
      return 'No repeated words found';
    }
  }
}

