// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
    //...
    let newStr = str.toLowerCase().split('');
    let numCount = [];
    for(let i = 0; i < newStr.length; i++) {
      if(numCount[newStr[i]] === undefined) {
        numCount[newStr[i]] = 1;
      } else {
        return false;
      }
    }
    return true;
  }
  