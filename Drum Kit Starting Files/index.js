var bt = document.querySelectorAll(".drum").length;

for(var i=0; i<bt; i++){
  document.querySelectorAll("button")[i].addEventListener("click",
  function () {
    var buttonInnerHtml = this.innerHTML;
    makesound(buttonInnerHtml);
    btnAnimation(buttonInnerHtml)

  });
}
document.addEventListener("keydown", function(event){
  makesound(event.key);
  btnAnimation(event.key);
});
function makesound(k){
  switch (k) {
    case "w":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      break;
    case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;
    case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      break;
    case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      break;
    case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      break;
    case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      break;
    case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      break;


    default:

  }
}

function btnAnimation (currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("class", "pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
}