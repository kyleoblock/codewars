// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr)
{
  //Code goes here!
  let leftTotal = 0;
  for(let i = 0; i < arr.length; i++) {
    if(i > 0) {
      leftTotal += arr[i - 1];
    }
    let rightTotal = 0;
    for(let j = i + 1; j < arr.length; j++) {
      rightTotal += arr[j];
    }
    if(leftTotal === rightTotal) {
      return i;
    }
    console.log(leftTotal, rightTotal);
  }
  return -1;
}