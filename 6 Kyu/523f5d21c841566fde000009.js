// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
    let newArr = [];
    for(let i = 0; i < a.length; i++) {
      if(!b.includes(a[i])) {
        newArr.push(a[i]);
      }
    }
    return newArr;
  }