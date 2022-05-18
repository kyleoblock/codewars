// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b){
    // complete this function  
    console.log(r, g, b);
    return `${convertToHex(r)}${convertToHex(g)}${convertToHex(b)}`
    
    function convertToHex(num) {
      if(num <= 0) {
        return '00'
      }
      if(num >= 255) {
        return 'FF'
      }
      let firstDigit = toHex(Math.floor(num / 16));
      let secondDigit = toHex(num % 16);
      return firstDigit + secondDigit;
    }
    
    function toHex(singleNum) {
      if(singleNum < 10) {
        return String(singleNum);
      }
      if(singleNum === 10) {
        return "A";
      }
      if(singleNum === 11) {
        return "B";
      }
      if(singleNum === 12) {
        return "C";
      }
      if(singleNum === 13) {
        return "D";
      }
      if(singleNum === 14) {
        return "E";
      }
      if(singleNum === 15) {
        return "F";
      }
    }
    
  }