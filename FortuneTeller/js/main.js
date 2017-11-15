// JavaScript Document
/*jslint browser:true */
"use strict()";

var LastM =(document.lastModified);

var showDate = new Date();
var myDateString = new Date();

document.getElementById("learned").innerHTML = "What I Learned";
document.getElementById("companyName").innerHTML = "Fortune Teller";
document.getElementById("quote").innerHTML = "Swtich Statment";
document.getElementById("title").innerHTML = "Fortune Telling";
document.getElementById("dateLast").innerHTML = "Last Motified:" + LastM;
document.getElementById("instructions").innerHTML = "Tell my fortune!";



var randNum = Math.floor(Math.random() * 15) +1;
var timeClicked = 0;
var montTxt;

function gernerateRandom(top) {
	var x = Math.random();
	x = x * top;
	x = (Math.floor(x)) + 1;
	return x;
}
var ranMonths= gernerateRandom(12);
var ranDays= gernerateRandom(30);
var ranFortune= gernerateRandom(5);



function month(){
	switch (ranMonths){
	case 1:
	monthTxt = "January";
	break;

	case 2:
	monthTxt = "Febuary";
	break;

	case 3:
	monthTxt = "March";
	break;

	case 4:
	monthTxt = "April";
	break;

	case 5:
	monthTxt = "May";
	break;

	case 6:
	monthTxt = "June";
	break;

	case 7:
	monthTxt = "July";
	break;

	case 8:
	monthTxt = "August";
	break;

	case 9:
	monthTxt = "September";
	break;

	case 10:
	monthTxt = "October";
	break;

	case 11:
	monthTxt = "Novemeber ";
	break;

	case 12:
	monthTxt = "December";
	break;

	
	
	}
}


function fortune(){
	month();
	switch(ranFortune){
	case 1:
		document.getElementById("feedback").innerHTML ="On " + monthTxt + " " + ranDays +" You will be hungry.";
		break;

	case 2:
		document.getElementById("feedback").innerHTML = "On " + monthTxt + " " + ranDays +" you will die of thurst..";
		break;

	case 3:
		document.getElementById("feedback").innerHTML ="On " + monthTxt + " " + ranDays +" true love will find you";
		break;

	case 4:
		document.getElementById("feedback").innerHTML = "On " + monthTxt + " " + ranDays +" You will be hit by a car";
		break;

	case 5:
		document.getElementById("feedback").innerHTML ="On " + monthTxt + " " + ranDays + " Win the 5.6 billion dollar lottery";
		break;
	}
}	





	


