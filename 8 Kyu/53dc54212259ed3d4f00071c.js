// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

// Sum Numbers
function sum (numbers) {
    "use strict";
    if(numbers.length === 0) {
      return 0;
    } else {
      return numbers.reduce((total, current) => total + current, 0);
    }
    
};
