// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds % 3600 / 60);
    let newSeconds = Math.floor(seconds % 3600 % 60);
    let strHours = '00';
    let strMinutes = '00';
    let strSeconds = '00';
    if(hours > 0) {
      if(hours < 10) {
        strHours = `0${hours}`
      } else {
        strHours = hours;
      }
    }
    if(minutes > 0) {
      if(minutes < 10) {
        strMinutes = `0${minutes}`
      } else {
        strMinutes = minutes;
      }
    }
    if(newSeconds > 0) {
      if(newSeconds < 10) {
        strSeconds = `0${newSeconds}`
      } else {
        strSeconds = newSeconds;
      }
    }
    return `${strHours}:${strMinutes}:${strSeconds}`;
  }
  