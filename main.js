var userScore = 0;
var computerScore = 0;

var userScoreSpan = document.getElementById("user-score");
var computerScoreSpan = document.getElementById("computer-score");
var scoreBoardDiv = document.querySelector(".score-board");
var resultDiv = document.querySelector(".result");
var rockDiv = document.getElementById("rock");
var paperDiv = document.getElementById("paper");
var scrissorsDiv = document.getElementById("scrissors");
var lizardDiv = document.getElementById("lizard");
var spockDiv = document.getElementById("spock");

function randomCOmputerChoice() {
    var choices = ["rock", "paper", "scrissors", "lizard", "spock"];
    var randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function win(player, computer) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;

    var roundStatus = document.getElementById(player);
    roundStatus.classList.add('winningStyles');
    setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}

function lose(player, computer) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;

    const roundStatus = document.getElementById(player);
    roundStatus.classList.add('losingStyles');

    setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}

function draw(player, computer) {
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;

    const roundStatus = document.getElementById(player);
    roundStatus.classList.add('drawStyles');
    setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);

}

function game(userChoice) {
    var computerChoice = randomCOmputerChoice();

    switch (userChoice + computerChoice) {
        //asa castigi
        case "rockscrissors":
        case "rocklizard":
        case "paperrock":
        case "paperspock":
        case "scrissorspaper":
        case "scrissorslizard":
        case "lizardspock":
        case "lizardpaper":
        case "spockrock":
        case "spockscrissors":
            win(userChoice, computerChoice);
            break;
            //asa pierzi
        case "scrissorsrock":
        case "lizardrock":
        case "rockpaper":
        case "spockpaper":
        case "paperscrissors":
        case "lizardscrissors":
        case "spocklizard":
        case "paperlizard":
        case "rockspock":
        case "scrissorsspock":
            lose(userChoice, computerChoice);
            break;
            //egalitate
        case "rockrock":
        case "paperpaper":
        case "scrissorsscrissors":
        case "lizardlizard":
        case "spockspock":
            draw(userChoice, computerChoice);
            break;
    }

}


function mainGame() {
    rockDiv.addEventListener("click", function () {
        game("rock");
    })

    paperDiv.addEventListener("click", function () {
        game("paper");
    })

    scrissorsDiv.addEventListener("click", function () {
        game("scrissors");
    })

    lizardDiv.addEventListener("click", function () {
        game("lizard");
    })

    spock.addEventListener("click", function () {
        game("spock");
    })
}

mainGame();