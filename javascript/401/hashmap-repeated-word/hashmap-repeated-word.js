const { LinkedList } = require('../linked-list/index');
const { HashTable } = require('../hashTables/hashTable');



let aStr = 'Once upon a time, there was a brave princess who...';
let itStr = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
let summerStr = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';



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
module.exports = repeatedWord;

repeatedWord(aStr);
repeatedWord(itStr);
repeatedWord(summerStr);

console.log(repeatedWord(aStr));
console.log(repeatedWord(itStr));
console.log(repeatedWord(summerStr));
