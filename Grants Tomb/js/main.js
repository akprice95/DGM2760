// JavaScript Document
/*jslint browser:true */
"use strict()";

var LastM =(document.lastModified);

var showDate = new Date();
var myDateString = new Date();

document.getElementById("learned").innerHTML = "What I Learned";
document.getElementById("companyName").innerHTML = "Grants Tomb";
document.getElementById("quote").innerHTML = "Literal Objects";
document.getElementById("title").innerHTML = "Movie Test";
document.getElementById("dateLast").innerHTML = "Last Motified:" + LastM;
document.getElementById("result").innerHTML = "Result:";








var test ={
	buttonOne: "Star Wars",
	buttonTwo: "Harry Potter",
	buttonThree: "Pirates",
	buttonFour:  "Lord of the Rings",

	theResults: function(answer){
	if(answer == 1){
			document.getElementById("result").innerHTML = "Very Close choice...but " + test.buttonOne + " is too mainstream. Think outside the box a little! Try again.";
		}
	else if (answer == 2) {
			document.getElementById("result").innerHTML = "Such a muggle choice. " + test.buttonTwo + " is Ok but still not the answer im looking for. Please try again.";
		}
	else if (answer == 3) {
			document.getElementById("result").innerHTML = "Yes!!! althought " + test.buttonThree + " may be a strange choice, it is very underrated and has a very good plot. Nice choice mate!!";
		}
	else{
			document.getElementById("result").innerHTML = "You would fail as a movie Critic... " + test.buttonFour + " is by far the worst option from the answers. Please try again.";
		}
	},

	question: function(){
		document.getElementById("quizQuestion").innerHTML = "What is the best movie on this planet?";
		
	}



};














	


