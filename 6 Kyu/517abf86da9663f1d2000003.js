// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str){
    if(str == '') {
      return '';
    }
    let strArr = str.split(/[-_]/g);
    let camelCase = strArr[0];
    for(let i = 1; i < strArr.length; i++) {
      camelCase += strArr[i].substring(0, 1).toUpperCase();
      camelCase += strArr[i].substring(1).toLowerCase();
    }
    //console.log(strArr;)
    return camelCase;
  }