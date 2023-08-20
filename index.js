// class ko select kiya h
// ek array aayega jiske sabhi element ko eventlistner se add karna h


//we are attaching eventlistner to buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", clicked);         // here we are directly adding the function to event listner
}

// describing function to do when clicked
function clicked() {
  // "this" is used to access the element that triggered the function
  playaudio(this.innerHTML);                                                        // innerHTMl will help in its key and pass as argument to playaudio
  active(this.innerHTML);                   // to add animation to the button
}


document.addEventListener("keydown", function(event) {
    playaudio(event.key);        
    active(event.key);                  // to add animation to the button
});                                                                          // here event will identify which key is pressed

function playaudio(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;                                                                 // to exit the function and avoid furthur execution

    case "a":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}


function active(key){

    var pointer = document.querySelector("." + key);
    pointer.classList.add("pressed");
    setTimeout(function(){ pointer.classList.remove("pressed");} , 100);            // set delay in execution of a function

}