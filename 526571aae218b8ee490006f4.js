// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

var countBits = function(n) {
    // Program Me
    return n.toString(2).split('0').join('').length;
  };