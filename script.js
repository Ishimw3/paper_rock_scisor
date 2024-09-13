function getComputerChoice(){
    let choicePc = Math.random;

    choicePc = Math.floor(Math.random() * 3);

    if(choicePc < 0) {
        return "rock";
    } else if(choicePc > 0) {
        return "paper";
    } else {
        return "scisor";
    }
}

let pc = getComputerChoice();

function getHumanChoice() {
    let answer = (prompt("paper, rock or scisor : "));
    
    answer = answer.toLowerCase();
    console.log(answer);
    while (answer !== "rock" && answer !== "paper" && answer !== "scisor") {
        answer = prompt("paper, rock or scisor: ");
        answer = answer.toLowerCase();
    }
    console.log("You choosed : " + answer) 

    return answer;
}

function compare(human, pc) {

    console.log("Human :" + human + " vs Computer : " + pc)

    if(human == pc) {
        console.log("it's a Tie both get 0");
        return 3;
    } else {
        if(human === "rock") {
            switch(pc) {
                case "paper" :
                    console.log("Computer win, +1");
                    return 2;
                    break;

                case "scisor" :
                    console.log("You win, +1");
                    return 1;
                    break;
            }
        } else if(human == "paper") {
            switch(pc) {
                case "scisor" :
                    console.log("Computer win, +1");
                    return 2;
                    break;

                case "rock" :
                    console.log("You win, +1");
                    return 1;
                    break;
            }
        } else if(human == "scisor") {
            switch(pc) {
                case "rock" :
                    console.log("Computer win, +1");
                    return 2;
                    break;

                case "paper" :
                    console.log("You win, +1");
                    return 1;
                    break;
            }
        }
    }
}

let humScore = 0;
let pcScore = 0;

function score(sc) {
    if(sc === 1) {
        humScore++;
    } else if (sc === 2) {
        pcScore++;
    }
}

function playRound() {
    let i = 1;
    let play = 0;
    
    do {
        console.log("Game: " +i)
        console.log("Human " + humScore + " : Computer " + pcScore);

        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        let allScore = compare(humanChoice, computerChoice);
        
        score(allScore);
        console.log("Human " + humScore + " : Computer " + pcScore);

        i++;
        play++;
            


    }while(play < 5)

        console.log("Final score is Human " + humScore + " : Computer " + pcScore);

        if (humScore > pcScore) {
            console.log("You Win!!!!")
        } else if (humScore < pcScore) {
            console.log("You Loosed!!!!")
        } else (
            console.log("It's a TIE !!!!")
        )
}

