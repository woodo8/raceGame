alert("Click Right side of ur screen to move right, left side for left")

function moveLeft() {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left -= 100;
  if (left >= 0) {
    character.style.left = left + "px";
  }
}
function moveRight() {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left += 100;
  if (left < 300) {
    character.style.left = left + "px";
  }
}
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    moveRight();
  }
});

var block = document.getElementById("block");
var message = document.getElementById("message")
var counter = 0

block.addEventListener("animationiteration", () => {
  var random = Math.floor(Math.random() * 3);
  left = random * 100;
  block.style.left = left + "px";
  counter++
});
setInterval(function () {
  var characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var blockTop = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );
  if (characterLeft == blockLeft && blockTop<500 && blockTop>300) {
    message.classList.add("show")
    block.style.animation = "none"
    document.getElementById("score").innerText = ` Score: ${counter}`
    
  }
}, 1);
document.getElementById('restart').addEventListener("click", ()=>{
    block.style.animation = "slide 1.5s infinite"
    message.classList.remove("show")
  counter = 0
})



document.getElementById("left").addEventListener('touchstart', moveLeft)
document.getElementById("right").addEventListener('touchstart', moveRight)
