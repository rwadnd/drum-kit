

for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("touchstart", function(){
    handleClick(this.innerHTML)
  })
}


document.addEventListener("keydown", function(event){
  handleClick(event.key)
})

var tom1 = new Audio("sounds/tom-1.mp3")
var tom2 = new Audio("sounds/tom-2.mp3")
var tom3 = new Audio("sounds/tom-3.mp3")
var tom4 = new Audio("sounds/tom-4.mp3")
var crash = new Audio("sounds/aagh.mp3")
var kick_bass = new Audio("sounds/crash.mp3")
var snare = new Audio("sounds/snare.mp3")


function handleClick(key){
  switch (key) {
    case "w":
      tom1.play();
      break;
  
     case "a":
  
      tom2.play();
      break;
     
     case "s":
      tom3.play();
      break;

     case "d":
      
      tom4.play();
      break;

     case "l":
      
      crash.play();
      break;

      case "k":
      
      kick_bass.play();
      break;

      case "j":
        
        snare.play();
        break;
    default:
      console.log(clicked)
      break;
  }
}


