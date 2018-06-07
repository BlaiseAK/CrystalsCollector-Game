$(document).ready(function() {

// variables

var wins = 0;
var losses = 0;
var compNum = Math.floor(Math.random()*101)+20;
var userNum = 0;
var currency1 = Math.floor(Math.random()*12)+1;
var currency2 = Math.floor(Math.random()*12)+1;
var currency3 = Math.floor(Math.random()*12)+1;
var currency4 = Math.floor(Math.random()*12)+1;

$("#winsCounter").html("<p>Wins: " + wins + "</p>");
$("#lossesCounter").html("<p>Losses: " + losses + "</p>");
$("#userNum").html("<h6>" + userNum + "</h6>");
$("#compNum").html("<h6>" + compNum + "</h6>");


// functions

function newGame() {
    compNum = Math.floor(Math.random()*101)+20;
    userNum = 0;
    var currency1 = Math.floor(Math.random()*12)+1;
    var currency2 = Math.floor(Math.random()*12)+1;
    var currency3 = Math.floor(Math.random()*12)+1;
    var currency4 = Math.floor(Math.random()*12)+1;
}


console.log("wins:" + wins);
console.log("losses:" + losses);
console.log("CompNum:" + compNum);
console.log("UserNum:" + userNum);
console.log("currency1:" + currency1);
console.log("currency2:" + currency2);
console.log("currency3:" + currency3);
console.log("currency4:" + currency4);


// game flow

$(".britPound").on("click", function() {
    userNum = userNum + currency1;
    console.log(userNum);
    if (userNum > compNum) {
        losses ++;
        newGame();
    } else if (userNum === compNum) {
        wins ++;
        newGame();
    }
    $("#winsCounter").html("<p>Wins: " + wins + "</p>");
    $("#lossesCounter").html("<p>Losses: " + losses + "</p>");
    $("#userNum").html("<h6>" + userNum + "</h6>");
    $("#compNum").html("<h6>" + compNum + "</h6>");

})

$(".euro").on("click", function() {
    userNum = userNum + currency2;
    console.log(userNum);
    if (userNum > compNum) {
        losses ++;
        newGame();
    } else if (userNum === compNum) {
        wins ++;
        newGame();
    }
    $("#winsCounter").html("<p>Wins: " + wins + "</p>");
    $("#lossesCounter").html("<p>Losses: " + losses + "</p>");
    $("#userNum").html("<h6>" + userNum + "</h6>");
    $("#compNum").html("<h6>" + compNum + "</h6>");

})

$(".yen").on("click", function() {
    userNum = userNum + currency3;
    console.log(userNum);
    if (userNum > compNum) {
        losses ++;
        newGame();
    } else if (userNum === compNum) {
        wins ++;
        newGame();
    }
    $("#winsCounter").html("<p>Wins: " + wins + "</p>");
    $("#lossesCounter").html("<p>Losses: " + losses + "</p>");
    $("#userNum").html("<h6>" + userNum + "</h6>");
    $("#compNum").html("<h6>" + compNum + "</h6>");

})

$(".rubel").on("click", function() {
    userNum = userNum + currency4;
    console.log(userNum);
    if (userNum > compNum) {
        losses ++;
        newGame();
    } else if (userNum === compNum) {
        wins ++;
        newGame();
    }
    $("#winsCounter").html("<p>Wins: " + wins + "</p>");
    $("#lossesCounter").html("<p>Losses: " + losses + "</p>");
    $("#userNum").html("<h6>" + userNum + "</h6>");
    $("#compNum").html("<h6>" + compNum + "</h6>");
    
})

})