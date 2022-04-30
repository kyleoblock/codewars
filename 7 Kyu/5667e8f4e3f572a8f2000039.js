// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
	// your code
  let newWord = "";
  for(let i = 0; i < s.length; i++) {
    for(let j = 0; j <= i; j++) {
      if(j == 0) {
          newWord += s[i].toUpperCase();
        } else {
          newWord += s[i].toLowerCase();
        }
    }
    if(i < s.length - 1) {
      newWord += "-"
    }
  }
  return newWord;
}