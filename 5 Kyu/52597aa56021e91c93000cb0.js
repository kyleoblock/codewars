// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
    let newArr = [];
    let numZeroes = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === 0) {
        numZeroes++;
      } else {
        newArr.push(arr[i]);
      }
    }
    for(let i = 0; i < numZeroes; i++) {
      newArr.push(0);
    }
    return newArr;
  }