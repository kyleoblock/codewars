// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr,n){
    // ...
    let newArr = [], countArr = [];
    for(let i = 0; i < arr.length; i++) {
      if(countArr[arr[i]] == undefined) {
        countArr[arr[i]] = 1;
        newArr.push(arr[i]);
      } else if (countArr[arr[i]] < n) {
        countArr[arr[i]]++;
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }