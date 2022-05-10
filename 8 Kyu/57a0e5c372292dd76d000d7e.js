// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr (n, s) {
    let newStr = '';
    for(let i = 0; i < n; i++) {
      newStr = newStr.concat(s);
    }
    return newStr;
  }
  