
function computerPlay() {
    return randomString(["Rock" , "Paper" , "Scissors"])
}

function randomString(strings) {
    return strings[Math.floor(Math.random() * strings.length)]
}

function playRound(playerSelection , computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection == "rock") {// could make first character caps so it's "Rock" instead, but doesn't matter much
        if(computerSelection == "Rock") {return "It's A Tie! You Both Pick Rock!"}
        else if(computerSelection == "Paper") {return "You Lose! Paper Beats Rock!"}
        else if(computerSelection == "Scissors") {return "You Win! Rock Beats Scissors!"}
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "Rock") return "You Win! Paper Beats Rock!"
        else if(computerSelection == "Paper") return "It's A Tie! You Both Pick Paper!"
        else if(computerSelection == "Scissors") return "You Lose! Scissors Beats Paper!"
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "Rock") {
            return "You Lose! Rock Beats Scissors!"
        }
        else if(computerSelection == "Paper") {
            return "You Win! Scissors Beats Paper!"
        }
        else if(computerSelection == "Scissors") {
            return "It's A Tie! You Both Pick Scissors!"
        }
    }
    else return "Invalid Input! You Must Choose 'Rock,' 'Paper,' Or 'Scissors!'"
    // 3 different ways ^ , same line return does not require curly braces
}

function game() {
    let score = 0
    let winner = ""
    let playerSelection
    for(let P = 0 ; P < 5 ; P ++) {
        playerSelection = prompt("Choose A Handsign! 'Rock', 'Paper', Or 'Scissors'!")
        winner = playRound(playerSelection , computerPlay())
        console.log(winner)
        if(winner.substring(0 , 7) == "You Win") {
            score ++;
        }
        else if(winner.substring(0 , 8) == "You Lose") {
            score --;
        }
        // don't need another else, score will just remain unchanged in the event of a tie, but could make it so that if it's an invalid input, it disregards the round
        else if(winner.substring(0 , 2) == "Inv") {
            P -- // doesn't count this round
        }
    }
    if(score > 0){
        alert(`You Win The Game Of Five! You Won By ${score} Point(s)!`)
    }
    else if (score == 0) {
        alert(`What A Rare Occurence! The Game Of Five Ended In A Draw!`)
    }
    else {
        alert(`Better Luck Next Time! You Lost The Game Of Five! You Lost By ${score} Point(s)!`)
    }
}


game();
// This whole code was supposed to be under the HTML file in <script> but made an accident, I'll just keep it as is