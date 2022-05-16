// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
    let leftPar = 0;
    let rightPar = 0;
    let parensArr = parens.split('');
    for(let i = 0; i < parensArr.length; i++) {
      if(parensArr[i] === '(') {
        leftPar++;
      } else if (parensArr[i] === ')') {
        rightPar++;
      }
      if(leftPar < rightPar) {
        return false;
      }
    }
    if(leftPar !== rightPar) {
      return false;
    } else {
      return true;
    }
  }
  