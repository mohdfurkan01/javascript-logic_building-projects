const clock = document.getElementById('clock');
//const clock = document.getElementById('#clock')

//let date = new Date();
//console.log(date.toLocaleTimeString());
//9:50:38 pm

// Method: 1
//1sec = 1000 ms
//setInterval(function () {}, milliseconds); //Syntax:

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// Method: 2
// Define a callback function
// function updateClock() {
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }

// setInterval(updateClock, 1000);

//setInterval() function in JavaScript is used to repeatedly execute a specified function or code snippet at a defined time interval (in milliseconds).
