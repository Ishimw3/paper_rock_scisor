let humanChoice;
let activeBtn;
let pcActive;
let humScore = 0;
let pcScore = 0;

const player = document.querySelectorAll(".player");
const scoreDisplay = document.querySelector(".result1");
const scoreDisplayPc = document.querySelector(".result");
const allScoreDisplay = document.querySelector(".score");
const again = document.querySelector(".again");

function getComputerChoice() {
  let choicePc = Math.random;

  choicePc = Math.floor(Math.random() * 3);

  if (choicePc < 0) {
    return "rock";
  } else if (choicePc > 0) {
    return "paper";
  } else {
    return "scisor";
  }
}

let pc = getComputerChoice();

function getHumanChoice() {
  let answer = prompt("paper, rock or scisor : ");

  answer = answer.toLowerCase();
  while (answer !== "rock" && answer !== "paper" && answer !== "scisor") {
    answer = prompt("paper, rock or scisor: ");
    answer = answer.toLowerCase();
  }

  return answer;
}

function compare(human, pc) {
  if (human == "1" + pc) {
    scoreDisplay.textContent = "it's a Tie";
    scoreDisplayPc.textContent = "it's a Tie";
    return 3;
  } else {
    if (human === "1rock") {
      switch (pc) {
        case "paper":
          scoreDisplayPc.textContent = "Computer won, +1";
          scoreDisplay.textContent = "You lost";
          return 2;
          break;

        case "scisor":
          scoreDisplay.textContent = "You won, +1";
          scoreDisplayPc.textContent = "You lost";
          return 1;
          break;
      }
    } else if (human == "1paper") {
      switch (pc) {
        case "scisor":
          scoreDisplayPc.textContent = "Computer won, +1";
          scoreDisplay.textContent = "You lost";
          return 2;
          break;

        case "rock":
          scoreDisplay.textContent = "You won, +1";
          scoreDisplayPc.textContent = "You lost";
          return 1;
          break;
      }
    } else if (human == "1scisor") {
      switch (pc) {
        case "rock":
          scoreDisplayPc.textContent = "Computer won, +1";
          scoreDisplay.textContent = "You lost";
          return 2;
          break;

        case "paper":
          scoreDisplay.textContent = "You won, +1";
          scoreDisplayPc.textContent = "You lost";
          return 1;
          break;
      }
    }
  }
}

function score(sc) {
  if (sc === 1) {
    humScore++;
  } else if (sc === 2) {
    pcScore++;
  }
}

player.forEach((button) => {
  button.addEventListener("click", function () {
    document
      .querySelectorAll(".action .player")
      .forEach((btn) => btn.classList.toggle("active"));
    this.classList.toggle("active");
    activeBtn = this;
    humanChoice = button.id;
    this.disabled = true;
    playRound();
  });
});

function toggleActive(choice) {
  document.querySelector("#hint").classList.toggle("active");
  document
    .querySelectorAll(".action img")
    .forEach((img) => img.classList.toggle("active"));
  document
    .querySelectorAll(".action img")
    .forEach((img) => img.classList.toggle("active"));
  document.getElementById(choice).classList.toggle("active");
  pcActive = document.getElementById(choice);
}

function playRound() {
  let i = 1;
  let play = 0;

  let scoreLog = "" + humScore + " : " + pcScore;
  const allScoreDisplay = document.querySelector(".score");
  allScoreDisplay.textContent = scoreLog;

  let computerChoice = getComputerChoice();
  toggleActive(computerChoice);

  let allScore = compare(humanChoice, computerChoice);

  score(allScore);
  scoreLog = "" + humScore + " : " + pcScore;

  allScoreDisplay.textContent = scoreLog;

  i++;
  play++;

  setTimeout(function () {
    pcActive.classList.toggle("active");
    document.querySelector("#hint").classList.toggle("active");
    activeBtn.classList.toggle("active");
    document
      .querySelectorAll(".action .player")
      .forEach((btn) => btn.classList.toggle("active"));
    activeBtn.disabled = false;
  }, 3000);
}

function reset() {
  humScore = 0;
  pcScore = 0;
  scoreLog = "" + humScore + " : " + pcScore;

  allScoreDisplay.textContent = scoreLog;
  scoreDisplay.textContent = "";
  scoreDisplayPc.textContent = "";
}

again.addEventListener(click, function() {
  reset();
});