// JavaScript Document
/*jslint browser:true */
"use strict()";

var LastM =(document.lastModified);

var showDate = new Date();
var myDateString = new Date();


document.getElementById("companyName").innerHTML = "Inspector Clouseau";
document.getElementById("quote").innerHTML = "Properties";
document.getElementById("dateLast").innerHTML = "Last Motified:" + LastM;
document.getElementById("docWindow").innerHTML = "Window Properties";
document.getElementById("docProp").innerHTML ="Document Properties";

function myWindowResize(){
	var winWidth = window.innerWidth;
	var winHeight=window.innerHeight;
	

	var winSentence = "Your window size is " + winWidth + " wide by " + winHeight+ " tall.";



	document.getElementById("windowSize").innerHTML = winSentence;
	

}

myWindowResize();

var windowLeft= window.screenLeft;
var windowTop = window.screenTop;
var windoLocation = window.location.href;
var docTitle = document.title;

document.getElementById("offSet").innerHTML ="Windows offset is " + windowLeft + " from the left edge and "+ windowTop + " from the top of the display";
document.getElementById("winLocation").innerHTML ="The page URL is " + windoLocation;
document.getElementById("docTitle").innerHTML ="Document title is " + docTitle;