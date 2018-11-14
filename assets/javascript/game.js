//listening event when player clicks a get button.
$(document).ready(function() {

//player showed random number between 19-120. 
    var Random = Math.floor(Math.random()*119+19)

$("#randomNumber").text(Random);
//when player clicks on a crystal, it will add a specific amount of points to players total score

//crystal button value between 1-12.

var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

// zero out wins/losses/player score. 
var playerScore = 0;
var countWin = 0;
var countLoss = 0;

//jquery text feature. $(selector).text(content). Overrides html content. 

$('#countWin').text(countWin);
$('#countLoss').text(countLoss);

//when game restarts, player is shown new random number. All crystals will have 4 new hidden values. User score reset to zero. 
//moved reset function to be before win/loss functions due to scope. 

function reset() {
    Random = Math.floor(Math.random()*119+19);
    $('#randomNumber').text(Random);
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    playerScore = 0;
    $('#finalTotal').text(playerScore);
}

//function for counting wins.
function win(){
    countWin++;
    $('#countWin').text(countWin);
    reset();
}

//function for counting losses.
function loser() {
    countLoss++;
    $('#countLoss').text(countLoss);
    reset();
}

//jewel button function jquery

$('#one').on('click', function() {
    playerScore = playerScore + num1;
    $('#finalTotal').text(playerScore);

//player wins if total score matches the random number shown. Creating conditionals for each button which will call the win or lose functions. 

//player wins if total score matches the random number shown in the beginning

//player loses if their score goes above random number

    if (playerScore == Random) {
        win();
    } else if (playerScore > Random) {
        loser();
    }
})
$('#two').on('click', function() {
    playerScore = playerScore + num2;
    $('#finalTotal').text(playerScore);

    if (playerScore == Random) {
        win();
    } else if (playerScore > Random) {
        loser();
    }
})

$('#three').on('click', function() {
    playerScore = playerScore + num3;
    $('#finalTotal').text(playerScore);

    if (playerScore == Random) {
        win();
    } else if (playerScore > Random) {
        loser();
    }
})

$('#four').on('click', function() {
    playerScore = playerScore + num4;
    $('#finalTotal').text(playerScore);

    if (playerScore == Random) {
        win();
    } else if (playerScore > Random) {
        loser();
    }
})






//the game restarts whenever the player wins or loses. 



})

