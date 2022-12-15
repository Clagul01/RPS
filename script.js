let wins = 0;
let losses = 0;
let ties = 0;
let choices = ["R", "P", "S"];


alert("Rock, Paper, Scissors: best out of 10!");
for (let games = 0; games < 10; games++) {
    let playersChoice = prompt("R, P or S?");
    let computerChoice = choices[(Math.floor(Math.random() * 3)) - 1];
    if (computerChoice == playersChoice) {
        alert("Tie!");
        ties++
    } else if (computerChoice === "R" && playersChoice === "S") {
        alert("You lose :(");
        losses++;
    } else if (computerChoice ===  "P" && playersChoice === "R") {
        alert("You lose :(");
        losses++;
    } else if (computerChoice === "S" && playersChoice === "P") {
        alert("You lose :(");
        losses++;
    } else {
        alert("You win :)");
        wins++;
    }
    alert("That was game " + (games + 1)+ ".");
}
if (wins > losses) {
    alert("You win the game :)");
} else if (wins == losses) {
        alert("Its a tie!");
} else {
        alert("You have lost the game :(");
}
alert("Wins: " + wins + ". Ties: " + ties + ". Losses: " + losses + ".");