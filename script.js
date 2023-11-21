const textArray = [
    'Rock',
    'Paper',
    'Scissors',
    'Rock',
    'Paper',
    'Scissors',
    'Rock',
    'Paper',
    'Scissors',
];
let round = 1;
let score = 0;

while (round <= 5) {
    console.log(`Round ${round}`);
    function game() {
        let userInput = prompt('Rock, Paper or Scissors?', '');
        function getComputerChoice() {
        computerSelection = textArray[Math.floor(Math.random() * textArray.length)];
        console.log(computerSelection)}
        function answer() {
            round += 1
            if (userInput.toLowerCase() == 'rock' & computerSelection == 'Paper'){
                console.log('You Lose! Paper beats rock')
            } else if (userInput.toLowerCase() == 'paper' & computerSelection == 'Scissors'){
                console.log('You Lose! Scissor beats paper')
            } else if (userInput.toLowerCase() == 'scissors' & computerSelection == 'Rock'){
                console.log('You Lose! Rock beats scissors')
            } else if (userInput.toLowerCase() == 'scissors' & computerSelection == 'Paper'){
                console.log('You Win! Scissors beat Paper')
                score += 1
            } else if (userInput.toLowerCase() == 'paper' & computerSelection == 'Rock'){
                console.log('You Win! Paper beats rock')
                score += 1
            } else if (userInput.toLowerCase() == 'rock' & computerSelection == 'Scissors'){
                console.log('You Win! Rock beats scissors')
                score += 1
            } else if (userInput.toLowerCase() == 'paper' & computerSelection == 'Paper'){
                console.log('Its a tie! No winner')
                round -= 1
            } else if (userInput.toLowerCase() == 'rock' & computerSelection == 'Rock'){
                console.log('Its a tie! No winner')
                round -= 1
            } else if (userInput.toLowerCase() == 'scissors' & computerSelection == 'Scissors'){
                console.log('Its a tie! No winner')
                round -= 1
            } else {
                console.log('Please enter either rock, paper or scissors')
                round -= 1
            }
        }
        getComputerChoice()
        answer();
    }
    game();
}
if (score >= 3) {
    console.log('Well done! You won overall')
} else (console.log('You Lose!'))