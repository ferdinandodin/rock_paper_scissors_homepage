let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    
    const choices = ["r", "p", "s"];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}


function win(userChoice, computerChoice) {

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!"
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You lost."
}

function draw(userChoice, computerChoice) {
    
    result_div.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ". It's a draw."
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);;
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);;
        break;

    }

    if (userScore === 5) {
        alert("Game is over. You won the best to five. Congratulation! \nPlease refresh the page to play again.");
        return;
        
        
    }
    else if (computerScore === 5) {
        alert("Game is over. You lost the best to five. Better luck next time. \nPlease refresh the page to play again.");
        return;
    }

     
}

function main() {

rock_div.addEventListener('click', function() {
    game("r")
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})

}

main();


