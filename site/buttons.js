require('prompt-sync')();

let greenButton = document.querySelector('.simon-button.green');

greenButton.addEventListener('click', function () {
    console.log("I'm green");
  })


let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function () {
  //alert('You clicked the red button');
  // Audio 
  var audio = new Audio("sound-2.mp33");
  audio.play();
  document.getElementById("red")

  console.log("I's red")
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function () {
  //alert('You clicked the yellow button');
  // Audio 
  var audio = new Audio("sound-3.mp33");
  audio.play();
  document.getElementById("yellow")
  console.log("I'm yellow ")
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function () {
  //alert('You clicked the blue button');
  // Audio 
  var audio = new Audio("sound-4.mp33");
  audio.play();
  document.getElementById("blue")
  console.log("I'm blue ")
});
