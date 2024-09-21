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
    return "ibuye";
  } else if (choicePc > 0) {
    return "urupapuro";
  } else {
    return "umukasi";
  }
}

let pc = getComputerChoice();

function getHumanChoice() {
  let answer = prompt("urupapuro, ibuye or umukasi : ");

  answer = answer.toLowerCase();
  while (answer !== "ibuye" && answer !== "urupapuro" && answer !== "umukasi") {
    answer = prompt("urupapuro, ibuye or umukasi: ");
    answer = answer.toLowerCase();
  }

  return answer;
}

function compare(human, pc) {
  if (human == "1" + pc) {
    scoreDisplay.textContent = "Mwanganyije";
    scoreDisplayPc.textContent = "Mwanganyije";
    return 3;
  } else {
    if (human === "1ibuye") {
      switch (pc) {
        case "urupapuro":
          scoreDisplayPc.textContent = "Nyabwonko Yagukubise, +1";
          scoreDisplay.textContent = "Waneshejwe";
          return 2;
          break;

        case "umukasi":
          scoreDisplay.textContent = "Watsinze, +1";
          scoreDisplayPc.textContent = "Waneshejwe";
          return 1;
          break;
      }
    } else if (human == "1urupapuro") {
      switch (pc) {
        case "umukasi":
          scoreDisplayPc.textContent = "Nyabwonko Yagukubise, +1";
          scoreDisplay.textContent = "Waneshejwe";
          return 2;
          break;

        case "ibuye":
          scoreDisplay.textContent = "Watsinze, +1";
          scoreDisplayPc.textContent = "Waneshejwe";
          return 1;
          break;
      }
    } else if (human == "1umukasi") {
      switch (pc) {
        case "ibuye":
          scoreDisplayPc.textContent = "Nyabwonko Yagukubise, +1";
          scoreDisplay.textContent = "Waneshejwe";
          return 2;
          break;

        case "urupapuro":
          scoreDisplay.textContent = "Watsinze, +1";
          scoreDisplayPc.textContent = "Waneshejwe";
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