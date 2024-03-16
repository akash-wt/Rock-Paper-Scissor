let userScore = 0;
let systemScore = 0;
let result = document.querySelector(".result")
let userTurn = document.querySelectorAll(".moves");
let user = document.querySelector(".you");
let system = document.querySelector(".system");

let choices = ["rock", "paper", "scissior"];

// system choice 

const printtiemsg = () => {
    result.innerText = "It's a Tie,Let's try next one!";
    result.style.backgroundColor = "#2168db";
    result.style.color = "white";

}
const checkWin = (gameWin) => {
    if (gameWin === true) {
        console.log("you win");
        result.innerText = "Congratulations,You win";
        result.style.backgroundColor = "green";
        result.style.color = "white";
        userScore++;
        user.innerText = userScore;

    }
    else {
        console.log("you lost");
        result.innerText = "You lost,Try next one!";
        result.style.backgroundColor = "red";
        result.style.color = "white";
        systemScore++;
        system.innerText = systemScore;
    }

}
const systemChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;
}

// main 
userTurn.forEach((userTurn) => {
    userTurn.addEventListener("click", () => {
        const systemChoose = choices[systemChoice()];
        console.log("system chooses :", systemChoose);

        const userChoice = userTurn.getAttribute("id");
        console.log("user choose :", userChoice);

        let gameWin = true;
        if (systemChoose === userChoice) {

            console.log("it's a tie ");
            printtiemsg();
            return;

        }
        else {

            if (userChoice === "paper") { //rock scissor
                gameWin = systemChoose === "rock" ? true : false;
            }

            else if (userChoice === "rock") {
                gameWin = systemChoose === "paper" ? false : true;

            }
            else {
                gameWin = systemChoose === "paper" ? true : false;
            }


        }

        checkWin(gameWin);
    })
})