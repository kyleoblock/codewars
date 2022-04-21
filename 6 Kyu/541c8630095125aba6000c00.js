//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
    // ...
    let total = n;
    while(total > 9) {
      total = total % 10 + 
              Math.trunc(total % 100 / 10) + 
              Math.trunc(total % 1000 / 100) + 
              Math.trunc(total % 10000 / 1000) + 
              Math.trunc(total % 100000 / 10000) + 
              Math.trunc(total % 1000000 / 100000)
    }
    return total;
  }