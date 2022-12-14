'use strict';

function checker(string1, string2){
  const combined = string1 + string2;

  return combined === '()' || combined === '[]' || combined === '{}';
}

function validateBrackets(string){
  const stack = [];
  const regex = /[[({]/;
  for (let i of string){
    if(regex.test(i)){
      stack.push(i);
    } else if(!checker(stack.pop(), i))
      return false;
  }
  return stack.length === 0;
}

console.log(validateBrackets('()'));
console.log(validateBrackets('{code{{]'));
console.log(validateBrackets('()'));


// validateBrackets('[{()Code}Fellows}');

// validateBrackets('()');
