/*   ---  SETUP - USER ---   */

let userChoice ;

const u_rock = document.querySelector('#u_rock').addEventListener('click', function(){
    userChoice = "rock";
    console.log(userChoice);

});
const u_paper = document.querySelector('#u_paper').addEventListener('click', function(){
    userChoice = "paper";
    console.log(userChoice);
});
const u_scissors = document.querySelector('#u_scissors').addEventListener('click', function(){
    userChoice = "scissors";
    console.log(userChoice);
});
const u_lizard = document.querySelector('#u_lizard').addEventListener('click', function(){
    userChoice = "lizard";
    console.log(userChoice);
});
const u_spock = document.querySelector('#u_spock').addEventListener('click', function(){
    userChoice = "spock";
    console.log(userChoice);
});

/*   ---  SETUP - COMPUTER ---   */

let computerChoice;

const u_choice = document.querySelector('#comp_button').addEventListener('click', function(){
    switch (Math.floor(Math.random()*5)){
        case 0: 
            computerChoice = "rock";
            break;
        case 1: 
            computerChoice = "paper";
            break;
        case 2: 
            computerChoice = "scissors";
            break;
        case 3: 
            computerChoice = "lizard";
            break;
        case 4: 
            computerChoice = "spock";
            break;
    }

    console.log(computerChoice)
});

/*   ---  CHECK FOR RESULTS ---   */
