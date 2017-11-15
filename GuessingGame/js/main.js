// JavaScript Document
/*jslint browser:true */
"use strict()";

var LastM =(document.lastModified);

var showDate = new Date();
var myDateString = new Date();

document.getElementById("learned").innerHTML = "What I Learned";
document.getElementById("companyName").innerHTML = "Guessing Game";
document.getElementById("quote").innerHTML = "Loops";
document.getElementById("title").innerHTML = "Hi/Lo Guessing";
document.getElementById("dateLast").innerHTML = "Last Motified:" + LastM;
document.getElementById("instructions").innerHTML = "Instructions";
document.getElementById("daInstructions").innerHTML ="In this game you try to guess a random number between 1 and 15 in as few tries as possible. You will be awarded a ribbon for your skills. Good Luck to you. If you would like to play again, refresh the page.";



var randNum = Math.floor(Math.random() * 15) +1;
var timeClicked = 0;

function Win(){

switch (timeClicked){
	case 1:

	case 2:

	case 3:
	var pathToImage = "css/images/BlueRibbon.png";
	var awardImage = document.createElement("IMG");
	awardImage.setAttribute('src', pathToImage);
	document.getElementById('face').appendChild(awardImage);
	break;

	case 4:

	case 5:

	case 6:

	pathToImage = "css/images/RedRibbon.png";
	 awardImage = document.createElement("IMG");
	awardImage.setAttribute('src', pathToImage);
	document.getElementById('face').appendChild(awardImage);
	break;
	default:
	 pathToImage = "css/images/YellowRibbon.png";
	 awardImage = document.createElement("IMG");
	awardImage.setAttribute('src', pathToImage);
	document.getElementById('face').appendChild(awardImage);
	break;
}
}



function randomNum(){

	var inputValue = document.getElementById("inputBox").value;
	

	if(inputValue > 15 || inputValue < 1 ){
		document.getElementById("errorMessage").innerHTML ="Please Re-enter a number between 1-15";
	}
	else if(inputValue < randNum){
		document.getElementById("errorMessage").innerHTML ="Your guess was too low";
		timeClicked ++;
	}
	else if(inputValue > randNum){
		document.getElementById("errorMessage").innerHTML ="Your guess was too high";
		timeClicked ++;
	}
	else{
		document.getElementById("errorMessage").innerHTML ="Good Guess";
		timeClicked ++;
		Win();


	

	}
	document.getElementById("displayError").innerHTML = "You have guessed: " + timeClicked;



	

}
