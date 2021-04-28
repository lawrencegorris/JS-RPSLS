(function game(){

    let userChoice;
    let computerChoice;

    document.querySelector('#u_rock').addEventListener('click', function(){
        userChoice = 'rock';
    });
    document.querySelector('#u_paper').addEventListener('click', function(){
        userChoice = 'paper';
    });
    document.querySelector('#u_scissors').addEventListener('click', function(){
        userChoice = 'scissors';
    });
    document.querySelector('#u_lizard').addEventListener('click', function(){
        userChoice = 'lizard';
    });
    document.querySelector('#u_spock').addEventListener('click', function(){
        userChoice = 'spock';
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

    function result(){
        console.log(computerChoice);
        if (userChoice === computerChoice){
            console.log('oh my, it is a tie');
        }else if (userChoice === 'rock'){
            if (computerChoice === 'scissors' || computerChoice === 'lizard'){
                console.log('you beat me')
            }else {
                console.log('ha, i won');
            }
        }else if (userChoice === 'paper'){
            if (computerChoice === 'rock' || computerChoice === 'spock'){
                console.log('you beat me')
            }else {
                console.log('ha, i won');
            }
        }else if (userChoice === 'scissors'){
            if (computerChoice === 'paper' || computerChoice === 'lizard'){
                console.log('you beat me')
            }else {
                console.log('ha, i won');
            }
        }else if (userChoice === 'lizard'){
            if (computerChoice === 'paper' || computerChoice === 'spock'){
                console.log('you beat me')
            }else {
                console.log('ha, i won');
            }
        }else if (userChoice === 'spock'){
            if (computerChoice === 'rock' || computerChoice === 'scissors'){
                console.log('you beat me')
            }else {
                console.log('ha, i won');
            }
        }
        
    }
    
})();