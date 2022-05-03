// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let total = 0 ;
    arrayOfSheep.forEach( element => {
      if(element == true) {
        total += 1;
      }
    })
    return total;
  }
  