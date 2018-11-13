//listening event when player clicks a get button.
$(document).ready(function() {

//player showed random number between 19-120. 
    var Random = Math.floor(Math.random()*119+19)

$("#randomNumber").text(random);
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

$('#countWin').text(wins);
$('#countLoss').text(losses);

//player wins if total score matches the random number shown in the beginning

//player loses if their score goes above random number

//the game restarts whenever the player wins or loses. 

//when game restarts, player is shown new random number. All crystals will have 4 new hidden values. User score reset to zero. 
function reset() {
    Random = Math.floor(Math.random()*119+19);
    $('#randomNumber').text(Random);
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

}
//show running count of number of games won/lost

})

