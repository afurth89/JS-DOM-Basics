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


//THE KEYWORD "RETURN"

// We have now seen functions that take a set of inputs as parameters. 
// It is also often desireable to return an value from the function. 
// Our function examples have all been printing to the console,
// but in many cases we want the function to return a value for us. For example:

var total = sum(5, 20);
// In the example above, sum is a function that takes 2 parameters. 
// The values are summed in the function and the result will be returned 
// and saved in the variable total.

//The implementation of sum looks like this:

function sum(num1, num2) {
    return num1 + num2;
}

// Let's make another method that returns a greeting for a name. 
// If the name is Tim, return: "Hello Tim! Your favorite color is blue." 
// If the name is anything other than Tim, return Hello name.

function getGreeting(name) {
    if (name === "Tim") {
        return "Hello Tim!  Your favorite color is blue.";
    }

    return "Hello " + name;
}

// EXERCISE

// What is output to the console with the following function invocation?
getGreeting("Elie");
//"Hello Elie"

// With the following function invocation, which return statement is 
// executed (the first, the second, or both)?

getGreeting("Tim");
//The first only ("Hello Tim!  Your favorite color is blue.").
// Once something is returned, the function stops

// Write a function called average that takes an array of numbers 
// as a parameter and returns the average of the array of numbers.
function average(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total/array.length;
}

average([2,4,6]) // Returns 4


// Write a function called calculate that takes 3 arguments: num1, num2, 
// and a string representing addition or multiplication ('+' or '*'). 
// Have that function decide which math operation to perform, then call 
// another function for the appropriate operation. 
// For example, calculate(4, 5, '*'); should call another function 
// internally that looks like this multiply(4, 5) and returns the value 20.

function add(a, b) {
  return (a + b);
}

function subtract(a, b) {
  return (a - b);
}

function multiply(a, b) {
  return (a * b);
}

function divide(a, b) {
  return (a / b);
}

function calculate(num1, num2, string) {
  if (string === "+") {
    return add(num1, num2);
  } else if (string === "-") {
    return subtract(num1, num2);
  } else if (string === "*") {
    return multiply(num1, num2);
  } else if (string === "/") {
    return divide(num1, num2);
  } else {
    return "This is not a valid operator"
  }
}

calculate(12, 4, "+"); //Returns 16
calculate(12, 4, "-"); //Returns 8
calculate(12, 4, "*"); //Returns 48
calculate(12, 4, "/"); //Returns 3
calculate(12, 4, "."); //Returns "This is not a valid operator"