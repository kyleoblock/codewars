// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
    if(array === null || array === undefined|| array.length < 2) {
      console.log(array, "Returning 0")
      return 0;
    }
    
    let max = array[0];
    let min = array[0];
    let total = 0;
    
    for(let i = 0; i < array.length; i++) {
      if(max < array[i]) {
        max = array[i];
      }
      if(min > array[i]) {
        min = array[i];
      }
      total += array[i]
    }
    return total - max - min;
  }
  