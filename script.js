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
    'Rock',
    'Paper',
    'Scissors',
];
let round = 1;
let score = 0;
let archScore = 0;

let userInput = '';

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let resultText = document.querySelector('#result');
let botChoice = document.querySelector('#bot-choice');
let roundCounter = document.querySelector('#round-counter');
let restartCont = document.querySelector('#restart-cont');
let scoreCounter = document.querySelector('#score');
let archScoreCounter = document.querySelector('#arch-score');

roundCounter.textContent = `Round ${round}`;

function getComputerChoice() {
    computerSelection = textArray[Math.floor(Math.random() * textArray.length)];
    botChoice.textContent = `Archie chose ${computerSelection}`;
}

function answer() {
    if (userInput == 'rock' & computerSelection == 'Paper'){
        resultText.textContent = `You chose ${userInput}, You Lose! Paper beats rock`;
        archScore += 1;
        archScoreCounter.textContent = `${archScore} to Archie`;
    } else if (userInput.toLowerCase() == 'paper' & computerSelection == 'Scissors'){
        resultText.textContent = `You chose ${userInput}, You Lose! Scissors beats paper`;
        archScore += 1;
        archScoreCounter.textContent = `${archScore} to Archie`;
    } else if (userInput.toLowerCase() == 'scissors' & computerSelection == 'Rock'){
        resultText.textContent = `You chose ${userInput}, You Lose! Rock beats scissors`;
        archScore += 1;
        archScoreCounter.textContent = `${archScore} to Archie`;
    } else if (userInput.toLowerCase() == 'scissors' & computerSelection == 'Paper'){
        resultText.textContent = `You chose ${userInput}, You Win! Scissors beats paper`;
        score += 1;
        scoreCounter.textContent = `${score} to Player`
    } else if (userInput.toLowerCase() == 'paper' & computerSelection == 'Rock'){
        resultText.textContent = `You chose ${userInput}, You Win! Paper beats rock`;
        score += 1;
        scoreCounter.textContent = `${score} to Player`
    } else if (userInput.toLowerCase() == 'rock' & computerSelection == 'Scissors'){
        resultText.textContent = `You chose ${userInput}, You Win! Rock beats scissors`;
        score += 1;
        scoreCounter.textContent = `${score} to Player`
    } else if (userInput.toLowerCase() == 'paper' & computerSelection == 'Paper'){
        resultText.textContent = `You chose ${userInput}, it's a tie!`;
    } else if (userInput.toLowerCase() == 'rock' & computerSelection == 'Rock'){
        resultText.textContent = `You chose ${userInput}, it's a tie!`;
    } else if (userInput.toLowerCase() == 'scissors' & computerSelection == 'Scissors'){
        resultText.textContent = `You chose ${userInput}, it's a tie!`;
    } else {
        resultText.textContent = `Please select either Rock, Paper or Scissors :)`;
    };
};

rockBtn.addEventListener('click', () => {
    userInput = 'rock';
    getComputerChoice();
    answer();
    round += 1
    roundCounter.textContent = `Round ${round}`;

    if (score == 5 || archScore == 5) {
        document.getElementById('main-container').style.display = 'none';
        let winner = '';

        if (score == 5) {
            winner = 'YOU WIN'
        } else {winner = 'ARCHIE WINS'};

        const restartText = document.createElement('h1');
        restartText.textContent = `${winner}! YOU SCORED ${score} AND ARCHIE SCORED ${archScore}`;
        restartText.setAttribute('id', 'restart-text-user');
        restartText.style.fontFamily = 'Bebas Neue';
        restartText.style.fontSize = '50px';
        restartCont.appendChild(restartText);

        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Restart';
        restartBtn.setAttribute('id', 'restart-button');
        restartCont.appendChild(restartBtn);
        
        restartBtn.addEventListener('click', () => {
            document.getElementById('main-container').style.display = 'block';
            score = 0;
            archScore = 0;
            round = 1;
            botChoice.textContent = '';
            resultText.textContent = '';
            scoreCounter.textContent = `${score} to Player`;
            archScoreCounter.textContent = `${archScore} to Archie`;
            roundCounter.textContent = 'Round 1';
            restartCont.removeChild(restartBtn);
            restartCont.removeChild(restartText);
    })};
});

paperBtn.addEventListener('click', () => {
    userInput = 'paper';
    getComputerChoice();
    answer();
    round += 1
    roundCounter.textContent = `Round ${round}`;

    if (score == 5 || archScore == 5) {
        document.getElementById('main-container').style.display = 'none';
        let winner = '';

        if (score == 5) {
            winner = 'YOU WIN'
        } else {winner = 'ARCHIE WINS'};

        const restartText = document.createElement('h1');
        restartText.textContent = `${winner}! YOU SCORED ${score} AND ARCHIE SCORED ${archScore}`;
        restartText.setAttribute('id', 'restart-text-user');
        restartText.style.fontFamily = 'Bebas Neue';
        restartText.style.fontSize = '50px';
        restartCont.appendChild(restartText);

        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Restart';
        restartBtn.setAttribute('id', 'restart-button');
        restartCont.appendChild(restartBtn);
        
        restartBtn.addEventListener('click', () => {
            document.getElementById('main-container').style.display = 'block';
            score = 0;
            archScore = 0;
            round = 1;
            botChoice.textContent = '';
            resultText.textContent = '';
            scoreCounter.textContent = `${score} to Player`;
            archScoreCounter.textContent = `${archScore} to Archie`;
            roundCounter.textContent = 'Round 1';
            restartCont.removeChild(restartBtn);
            restartCont.removeChild(restartText);
    })};
});

scissorsBtn.addEventListener('click', () => {
    userInput = 'scissors';
    getComputerChoice();
    answer();
    round += 1;
    roundCounter.textContent = `Round ${round}`;

    if (score == 5 || archScore == 5) {
        document.getElementById('main-container').style.display = 'none';
        let winner = '';

        if (score == 5) {
            winner = 'YOU WIN'
        } else {winner = 'ARCHIE WINS'};

        const restartText = document.createElement('h1');
        restartText.textContent = `${winner}! YOU SCORED ${score} AND ARCHIE SCORED ${archScore}`;
        restartText.setAttribute('id', 'restart-text-user');
        restartText.style.fontFamily = 'Bebas Neue';
        restartText.style.fontSize = '50px';
        restartCont.appendChild(restartText);

        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Restart';
        restartBtn.setAttribute('id', 'restart-button');
        restartCont.appendChild(restartBtn);
        
        restartBtn.addEventListener('click', () => {
            document.getElementById('main-container').style.display = 'block';
            score = 0;
            archScore = 0;
            round = 1;
            botChoice.textContent = '';
            resultText.textContent = '';
            scoreCounter.textContent = `${score} to Player`;
            archScoreCounter.textContent = `${archScore} to Archie`;
            roundCounter.textContent = 'Round 1';
            restartCont.removeChild(restartBtn);
            restartCont.removeChild(restartText);
    })};
});


