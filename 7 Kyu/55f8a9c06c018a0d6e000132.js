// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN (pin) {
    //return true or false
    const reg = new RegExp('^[0-9]+$');
    if(pin.match(reg)) {
      if(pin.length == 4 || pin.length == 6) {
        return true;
      }
    }
    return false;
  }