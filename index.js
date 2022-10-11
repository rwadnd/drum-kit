
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      handleClick(this.innerHTML)
    })
}



document.addEventListener("keydown", function(event){
  handleClick(event.key)
})



function handleClick(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play();
      break;
  
     case "a":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;
     
     case "s":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play();
      break;

     case "d":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
      break;

     case "l":
      var crash = new Audio("sounds/aagh.mp3")
      crash.play();
      break;

      case "k":
      var kick_bass = new Audio("sounds/crash.mp3")
      kick_bass.play();
      break;

      case "j":
        var snare = new Audio("sounds/snare.mp3")
        snare.play();
        break;
    default:
      console.log(clicked)
      break;
  }
}


