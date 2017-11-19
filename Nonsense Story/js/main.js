// JavaScript Document
/*jslint browser:true */
"use strict()";

var LastM =(document.lastModified);

var showDate = new Date();
var myDateString = new Date();

document.getElementById("learned").innerHTML = "What I Learned";
document.getElementById("companyName").innerHTML = "Nonsense Story";
document.getElementById("quote").innerHTML = "String Manipulation";
document.getElementById("title").innerHTML = "Mad Libs";
document.getElementById("dateLast").innerHTML = "Last Motified:" + LastM;
document.getElementById("instructions").innerHTML = "Seven Nouns";
document.getElementById("adj").innerHTML = "Three Adjectives";
document.getElementById("vrbs").innerHTML = "Two Verbs";

//Get values from the text areas
var theStory = function(){
	//get text items
	var nounTxtArea = document.getElementById("nounsTxt").value;
	var adjectiveTxtArea = document.getElementById("AdjectivesTxt").value;
	var verbTxtArea = document.getElementById("verbsTxt").value;

	



//Split them up so you can assign one to each part in the story
	var nounList = nounTxtArea.split(/\s+/);
	var adjectiveList = adjectiveTxtArea.split(/\s+/);
	var verbList = verbTxtArea.split(/\s+/);

//lower case each box before they go into the story

	toLowerCase(nounList);
	toLowerCase(verbList);
	toLowerCase(adjectiveList);


	document.getElementById("space1").innerHTML = "Yesterday " + nounList[0] + " and i went to the park. On our way to the " + adjectiveList[0] + "  we saw a " + adjectiveList[1] + " " + nounList[1] +  " on a bike. We also saw " + nounList[2] + " holding a balloons tied to a " + adjectiveList[2] + ".";
	document.getElementById("space2").innerHTML = "Once we got to the " + nounList[3] + "s house, the sky turned black and we could no longer see " + nounList[4] + " or " + nounList[5] + ". All we could see was Jack " + verbList[0] + " in circles around the street. " + nounList[6] + " ran at jack but was " + verbList[1] + " before he coule get there" ;
	document.getElementById("space3").innerHTML = "We all " + verbList[3] + "  off before Jack could get us" ;








};


var x = document.getElementById("playButtn");
x.onclick = theStory;



function toLowerCase(myString){
	for (var i = 0; i < myString.length; i++) {
		myString[i] = myString[i].toLowerCase();
	}	
}


//error messages












	


