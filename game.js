let rules = document.getElementById("rules-container");
let displayRules = 0;
let youSelect = document.querySelectorAll(".game-btn");
let triangle = document.getElementById("triangle");
let pcHands = document.querySelectorAll(".pc-hand");
let x = Math.floor(Math.random() * 3);
let youPickMsg = document.getElementById("youpick-txt");
let pcPickMsg = document.getElementById("pcpick-txt");

let winResult = document.getElementById("result-win");
let loseResult = document.getElementById("result-lose");
let drawResult = document.getElementById("result-draw");

let playAgain = document.getElementById("playAgain");
let playAgai = document.getElementById("playAgai");
let replay = document.getElementById("replay");

let nextButton = document.getElementById("next-btn");
let ruleButton = document.getElementById("rules-btn");

let yourScore = document.getElementById("yourScore");
let pcScore = document.getElementById("computerScore");

let userScore = parseInt(localStorage.getItem("userScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

yourScore.innerText = userScore;
pcScore.innerText = computerScore;

youSelect.forEach((element) => {
  element.addEventListener("click", () => {
    youSelect.forEach((item) => {
      item.style.display = "none";
    });
    triangle.style.display = "none";
    element.style.display = "block";
    element.classList.add("yourChoice");
    element.style.height = "130px";
    element.style.width = "130px";
    youPickMsg.style.display = "flex";
    var selectedDiv = pcHands[x];
    setTimeout(() => {
      selectedDiv.style.display = "flex";
      pcPickMsg.style.display = "flex";
    }, 500);
    let urChoice = element.getAttribute("value");
    setTimeout(() => {
      if (
        (urChoice == 0 && x == 1) ||
        (urChoice == 1 && x == 2) ||
        (urChoice == 2 && x == 0)
      ) {
        console.log("you win");
        winResult.style.display = "flex";
        userScore++;
        nextButton.style.display = "block";
        ruleButton.style.right = "150px";
      } else if (urChoice == x) {
        console.log("draw");
        drawResult.style.display = "flex";
      } else {
        console.log("You lose");
        loseResult.style.display = "flex";
        computerScore++;
      }
      updateScores();
    }, 1000);
  });
});

playAgain.addEventListener("click", () => {
  window.location.reload();
});
playAgai.addEventListener("click", () => {
  window.location.reload();
});
replay.addEventListener("click", () => {
  window.location.reload();
});

function updateScores() {
  yourScore.textContent = userScore;
  pcScore.textContent = computerScore;
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);
  yourScore.innerText = userScore;
  pcScore.innerText = computerScore;
}

function hideRules() {
  if (displayRules == 1) {
    rules.style.display = "block";
    displayRules = 0;
  } else {
    rules.style.display = "none";
    displayRules = 1;
  }
}
