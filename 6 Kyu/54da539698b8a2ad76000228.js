// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
    //insert brilliant code here
    let newArr = [];
    newArr['n'] = 0;
    newArr['s'] = 0;
    newArr['w'] = 0;
    newArr['e'] = 0;
    walk.forEach(element => {
        newArr[element]++;
    })
    if(walk.length === 10 && newArr['n'] === newArr['s'] && newArr['w'] === newArr['e']) {
      return true;
    }
    
    return false;
  }