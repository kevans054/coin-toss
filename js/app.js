/* options to try
* 1. Display text that says whether the player won or lost
* 2. Count wins AND losses
* 3. Allow the player to place monetary bets
* 4. Style the game and make it look cool (check out www.bulma.io)
*/



var scoreboard = document.querySelector('.score');
var resetButton = document.querySelector('.reset');
var resultText = document.querySelector('.result');
var headsButton = document.querySelector('.heads');
var tailsButton = document.querySelector('.tails');
var tallyText = document.querySelector('.tally');
var gameCount = 0;

function playRound(guess) {
    var possibilities = ['heads', 'tails'];
    gameCount++;
    console.log('Number of games is ' + gameCount);
    // Math.floor rounds any decimal number down to the whole number
    // Math.random() returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) 
    // Math.round method rounds a number to the nearest integer.
    var cointoss = Math.round(Math.random())
    var resultString = 'The coin came up ' + possibilities[cointoss];
    resultText.innerText = resultString;


    if (guess == possibilities[cointoss]) {
        // win
        // update wins count cookie
        // var wins = Number(Cookies.get('wins') ) || 0; OR
        if (Number(Cookies.get('wins'))) { //check if wins is defined if not do else
            // get wins as a number not a string
            var wins = Number(Cookies.get('wins'));
            // add one win
            wins++;
            Cookies.set('wins', wins);
            var Msg = 'You have won ' + wins + ' games out of ' + gameCount;
            tallyText.innerText = Msg;
            console.log('wins:' + Cookies.get('wins'));

        } else {
            Number(Cookies.set('wins', '1')); //This block will only run the first time through to set the cookie
            var firstWin = (Cookies.get('wins'));
            console.log(firstWin);
            var Msg = 'You have won ' + firstWin + ' games out of ' + gameCount;
            tallyText.innerText = Msg;
            wins++;
        }

    } else {
        if(Cookies.get('losses')) {
        var losses = Number(Cookies.get('losses'));
        console.log('You lost ' + losses);
        var Msg = 'You have lost ' + losses + ' games out of ' + gameCount;
        tallyText.innerText = Msg;
        losses++;
        Cookies.set('losses', losses);
        } else {
        Cookies.set('losses', '1');
        var losses = Number(Cookies.get('losses'));
        console.log('Line 74 - You lost ' + losses);
        var Msg = 'Oh no! You have lost ' + losses + ' games out of ' + gameCount;
        tallyText.innerText = Msg;
        losses++;
        Cookies.set('losses' , losses);
    }
}
console.log(wins);
upDateScoreBoard();
};

function upDateScoreBoard() {

    scoreboard.innerText = Cookies.get('wins') || 0;
    var score = Cookies.get('wins');
}

headsButton.addEventListener('click', function () {

    playRound('heads');
});

tailsButton.addEventListener('click', function () {
    playRound('tails');
});

resetButton.addEventListener('click', function () {
    Cookies.remove('wins');
    Cookies.remove('losses');
    location.reload();
    upDateScoreBoard();
})
upDateScoreBoard();
