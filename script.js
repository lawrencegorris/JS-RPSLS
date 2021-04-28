(function game(){

    const username = prompt('Enter your username here: ');
    const userScoreText = document.querySelector('#user-score');
    const compScoreText = document.querySelector('#comp-score')

    let userChoice;
    let computerChoice;
    const userResult = document.querySelector('#user_choice');
    const compResult = document.querySelector('#opponent_choice');
    const resultBox = document.querySelector('#result');
    
    document.querySelector('#reset').addEventListener('click', function(){
        location.reload();
    });

    document.querySelector('#u_rock').addEventListener('click', function(){
        userChoice = 'rock';
        userResult.innerHTML = username + ' chose rock';
        resetText()
    });
    document.querySelector('#u_paper').addEventListener('click', function(){
        userChoice = 'paper';
        userResult.innerHTML = username + ' chose paper';
        resetText()
    });
    document.querySelector('#u_scissors').addEventListener('click', function(){
        userChoice = 'scissors';
        userResult.innerHTML = username + ' chose scissors';
        resetText()
    });
    document.querySelector('#u_lizard').addEventListener('click', function(){
        userChoice = 'lizard';
        userResult.innerHTML = username + ' chose lizard';
        resetText()
    });
    document.querySelector('#u_spock').addEventListener('click', function(){
        userChoice = 'spock';
        userResult.innerHTML = username + ' chose spock';
        resetText()
    });

    document.querySelector('#comp_button').addEventListener('click', function(){
        const calc_c = Math.floor(Math.random()*5);
        if (calc_c == 0){
            computerChoice = 'rock';
            result();
        }else if (calc_c == 1){
            computerChoice = 'paper';
            result();
        }else if (calc_c == 2){
            computerChoice = 'scissors';
            result();
        }else if (calc_c == 3){
            computerChoice = 'lizard';
            result();
        }else {
            computerChoice = 'spock';
            result();
        }
    });

    //let userScore = 0;
    //let computerScore = 0;

    function result(){
        compResult.innerHTML = 'The computer chose ' + computerChoice;
        if (userChoice === computerChoice){
            resultBox.innerHTML = 'Oh my, it\'s is a tie!';
        }else if (userChoice === 'rock'){
            if (computerChoice === 'scissors' || computerChoice === 'lizard'){
                playerWin();
            }else {
                computerWin();
            }
        }else if (userChoice === 'paper'){
            if (computerChoice === 'rock' || computerChoice === 'spock'){
                playerWin();
            }else {
                computerWin();
            }
        }else if (userChoice === 'scissors'){
            if (computerChoice === 'paper' || computerChoice === 'lizard'){
                playerWin();
            }else {
                computerWin();
            }
        }else if (userChoice === 'lizard'){
            if (computerChoice === 'paper' || computerChoice === 'spock'){
                playerWin();
            }else {
                computerWin();
            }
        }else if (userChoice === 'spock'){
            if (computerChoice === 'rock' || computerChoice === 'scissors'){
                playerWin();
            }else {
                computerWin();
            }
        }
    }
    function resetText(){
        compResult.innerHTML = "";
        resultBox.innerHTML = "";
    }
    
    function playerWin(){
        //userScore = userScore + 1;        
        resultBox.innerHTML = username + ' wins. Good job';
    }

    function computerWin(){
        //computerScore++;
        resultBox.innerHTML = 'Computer wins. Better luck next time';
    }

    //userScoreText.innerHTML = username + "<br>" + userScore;
    //compScoreText.innerHTML = 'Computer ' + "<br>" + computerScore;

    console.log(userScore);

})();