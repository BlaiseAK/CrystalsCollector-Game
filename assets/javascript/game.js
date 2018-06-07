$(document).ready(function() {

// variables

var wins = 0;
var losses = 0;
var compNum = Math.floor(Math.random()*101)+20;
var userNum = 0;
var currency1 = Math.floor(Math.random()*12)+12;
var currency2 = Math.floor(Math.random()*12)+12;
var currency3 = Math.floor(Math.random()*12)+12;
var currency4 = Math.floor(Math.random()*12)+12;

// functions

function newGame() {
    compNum = Math.floor(Math.random()*101)+20;
    userNum = 0;
    var currency1 = Math.floor(Math.random()*12)+12;
    var currency2 = Math.floor(Math.random()*12)+12;
    var currency3 = Math.floor(Math.random()*12)+12;
    var currency4 = Math.floor(Math.random()*12)+12;
}


console.log("wins:" + wins);
console.log("losses:" + losses);
console.log("CompNum:" + compNum);
console.log("UserNum:" + userNum);


// game flow

$(".britPound").on("click", function() {
    userNum = userNum + currency1;
    console.log(userNum);
    if (userNum > compNum) {
        wins ++;
        newGame();
    } else if (userNum === compNum) {
        losses ++;
        newGame();
    }
})

$(".euro").on("click", function() {
    userNum = userNum + currency2;
    console.log(userNum);
    if (userNum > compNum) {
        wins ++;
        newGame();
    } else if (userNum === compNum) {
        losses ++;
        newGame();
    }
})

$(".yen").on("click", function() {
    userNum = userNum + currency3;
    console.log(userNum);
    if (userNum > compNum) {
        wins ++;
        newGame();
    } else if (userNum === compNum) {
        losses ++;
        newGame();
    }
})

$(".rubel").on("click", function() {
    userNum = userNum + currency4;
    console.log(userNum);
    if (userNum > compNum) {
        wins ++;
        newGame();
    } else if (userNum === compNum) {
        losses ++;
        newGame();
    }
})

})