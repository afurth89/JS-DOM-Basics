/*
EXERCISE: Write a function called yell that prints out 
a phrase 10 times in a row. On the 10th iteration, the phrase 
should be in all caps and have an extra exlimation point at the end.
*/

function yell() { 
  for (var i = 0; i < 10; i++) {
    if (i === 9) {
      console.log("PHRASE!");
    } else {
      console.log("phrase");
    }
  }
}


// EXERCISE: Create a function that takes name of a month as a parameter. 
// Print out every day in that month. Assume leap years don't exist.
function daysInMonth(month) {
  switch (month) {
    case "February":
      for (var i = 1; i <= 28; i++) {
        console.log(month + " " + i);
      }
      break;
    case "April":
      for (var i = 1; i <= 30; i++) {
        console.log(month + " " + i);
      }
      break;
    case "June":
      for (var i = 1; i <= 30; i++) {
        console.log(month + " " + i);
      }
      break;
    case "September":
      for (var i = 1; i <= 30; i++) {
        console.log(month + " " + i);
      }
      break;
    case "November":
      for (var i = 1; i <= 30; i++) {
        console.log(month + " " + i);
      }
      break;
    default:
      for (var i = 1; i <= 31; i++) {
        console.log(month + " " + i);
      }
      break;
  }
}