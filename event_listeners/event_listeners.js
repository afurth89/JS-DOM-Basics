// var button = document.querySelector("button"); //grab an element

// button.addEventListener("click", function(){
//   alert("YOU CLICKED ON THE BUTTON!");          //create an event listener
// });

// window.addEventListener("click", function(){
//   alert("YOU CLICKED ON ME!!!!!!!");
// });

// var button = document.querySelector("button"); //grab an element
// var clickCount = 0;

// button.addEventListener("click", function(foo){
//   clickCount++;
//   foo.target.innerText = "Number of times you've clicked on me: " + clickCount;
//   console.log("is foo.target the same as button?", foo.target === button);
//   console.log("Here's the entire event!", foo);
// });

// var div = document.querySelector("div");

// function logText(event) {
//   console.log(event.target.innerText);
//   console.log("EVENT TARGET", event.target);
//   console.log("THIS", this);
// }
// div.addEventListener("click", logText);

//***************************************************************************
//Attaching Listeners to Multiple Events
//***************************************************************************

//THIS DOES NOT WORK
// var paragraphs = document.querySelectorAll("p");
// paragraphs.addEventListener("click", function(){
//  console.log("Woof!");
// });

//THIS WORKS
var paragraphs = document.querySelectorAll("p");

var container = document.getElementById('container');

container.addEventListener('click', function(e) {
  if (e.target.tagName === "P") {
    console.log('Woof!');
  }
});

// for (var i=0;i<paragraphs.length;i++) {
//   paragraphs[i].addEventListener('click', function() {
//     console.log("Woof!");
//   });
// }