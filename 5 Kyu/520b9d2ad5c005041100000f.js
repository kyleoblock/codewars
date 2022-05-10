// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
    //Code here
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    console.log(str);
    let newStrArr = str.split(' ');
    let newStr = '';
    for(let i = 0; i < newStrArr.length; i++) {
      let tempStrArr = newStrArr[i].split('');
      if(!newStrArr[i].includes('!') && !newStrArr[i].includes('?')) {
        tempStrArr.push(tempStrArr[0]);
        tempStrArr.shift();
        newStr += tempStrArr.join('');
        newStr += 'ay';
      }
      else {
        console.log("REGEX");
        newStr += tempStrArr.join('');
      }
        if(i < newStrArr.length - 1) {
          newStr += ' ';
        }
      //console.log(tempStrArr);
      //console.log(newStr);
    }
    return newStr;
  }
  