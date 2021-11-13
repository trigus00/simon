

let greenButton = document.querySelector('.simon-button.green');
let count = 0; 

// Green Button On and off 
greenButton.addEventListener('mousedown', function () {
  
  if (pressed) {
    greenButton.classList.add('light')
    var audio = new Audio("sound-1.mp3");
    audio.play();
    count ++; 
    console.log("green: " + count)
  }
})

greenButton.addEventListener("mouseup", function () {
  if (pressed) {
    greenButton.classList.remove('light')
  }

})


// Red botton On and Off 
let redButton = document.querySelector('.simon-button.red');

redButton.addEventListener('mousedown', function () {
  
  if (pressed) {
    redButton.classList.add('light')
    // Audio 
    var audio = new Audio("sound-2.mp3");
    audio.play();
    count ++; 
    console.log("red: " + count)
   
  }
});
redButton.addEventListener("mouseup", function () {
  if (pressed) {
    redButton.classList.remove('light')
  }
})



// Yellow button On and Off 
  let yellowButton = document.querySelector('.simon-button.yellow');

  yellowButton.addEventListener('mousedown', function () {
    
    if(pressed){
      
      yellowButton.classList.add('light')
    // Audio 
    var audio = new Audio("sound-3.mp3");
    audio.play();
    count ++; 
    console.log("Yellow: " + count)
  }
  });
  yellowButton.addEventListener("mouseup",function(){
    if(pressed){
      yellowButton.classList.remove('light')
    }
  })


  // Blue button On and Off 

  let blueButton = document.querySelector('.simon-button.blue');
  blueButton.addEventListener('mousedown', function () {
 
    if(pressed){
      blueButton.classList.add('light')
    // Audio 
    var audio = new Audio("sound-4.mp3");
    audio.play();
    count ++; 
    console.log("blue "+ count)
   
    }
  });
  blueButton.addEventListener('mouseup',function(){
    if(pressed){
      blueButton.classList.remove('light')
    }


  })