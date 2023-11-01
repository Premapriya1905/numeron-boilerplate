// Iteration 5: Store the player score and display it on the game over screen
var score_display=document.getElementById("score-board");

let  x = localStorage.getItem("score");
score_display.textContent = x;

var playagain = document.getElementById("play-again-button")
playagain.addEventListener("click", () => {
    window.location.href = "game.html"
})
