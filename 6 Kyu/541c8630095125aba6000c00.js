//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
    // ...
    if(n < 10) {
      return n;
    }
    let total = 0;
    let newStr = String(n);
    for(let i = 0; i < newStr.length; i++) {
      total += Number(newStr[i]);
    }
    return digital_root(total);
  }