// JavaScript Document
/*jslint browser:true */
"use strict()";

var LastM =(document.lastModified);

var showDate = new Date();
var myDateString = new Date();

document.getElementById("learned").innerHTML = "What I Learned";
document.getElementById("companyName").innerHTML = "The Arborist";
document.getElementById("quote").innerHTML = "Events and Arrays";
document.getElementById("title").innerHTML = "The Arborist";
document.getElementById("dateLast").innerHTML = "Last Motified:" + LastM;
document.getElementById("instructions").innerHTML = "Adding Tree Pactice";
document.getElementById("removingTree").innerHTML = "Removing Tree Practice";
document.getElementById("manipulatingTree").innerHTML = "Manipulating the tree list";
document.getElementById("gettingTreeFromList").innerHTML = "Getting any tree from the list";
document.getElementById("treeList").innerHTML = "The Tree List";
document.getElementById("errorMessage").innerHTML = "Error Messages:";


var treeArray = ["Oak", "Apple", "Lime", "Spruce", "Orange"];

function displayArray(){
	var myString = "";
	var i;
	for (i =0; i < treeArray.length; i++){
		myString += treeArray[i] + "<br>";
	}
	document.getElementById("displayArrays").innerHTML = myString;
}

//error messages
//var display2 = function() {
	//document.getElementById('actualErrors').innerHTML = treeArray[1];
	//displayArrays();


//};


var addRedwood = document.getElementById('addRedwood');

//remove last tree





//button functions

function addEnd(){
treeArray.push("Redwood");
displayArray();

if(treeArray.length > 8){
	document.getElementById("actualErrors").innerHTML = "TOOO MANY TREEEESSS";

}
}

//add to end
function addTop(){
treeArray.unshift("Pear Tree");
displayArray();

if(treeArray.length >8){
	document.getElementById("actualErrors").innerHTML = "TOOO MANY TREEEESSS";

}
}

//remove first item
function removeFirst(){
treeArray.shift();
displayArray();


if(treeArray.length == 0){
	document.getElementById("actualErrors").innerHTML = "All your trees are dead....Sorry";

}
}
//remove second item?

function removeSecond(){
treeArray.splice(1,1);
displayArray();
if(treeArray.length == 0){
	document.getElementById("actualErrors").innerHTML = "There is no All your trees are dead....Sorry";

}
}

//remove last tree
function removeLast(){
treeArray.pop();
displayArray();
if(treeArray.length == 0){
	document.getElementById("actualErrors").innerHTML = "All your trees are dead....Sorry";

}
}

//sort A>Z
function arraySort(){
treeArray.sort();
displayArray();
if(treeArray.length == 0){
	document.getElementById("actualErrors").innerHTML = "All your trees are dead....Sorry";

}
}


//Lower case
function arrayLower(){

for (i =0; i < treeArray.length; i++){
		treeArray[i]=treeArray[i].toLowerCase();
	}
	displayArray();
}


//name of tree 3
function arrayTree3(){
displayArray();
document.getElementById("actualErrors").innerHTML = treeArray[2];
if(treeArray.length == 0){
	document.getElementById("actualErrors").innerHTML = "There is no third item..Please Try Again";

}
}

//name of tree 4
function arrayTree4(){
displayArray();
document.getElementById("actualErrors").innerHTML = treeArray[3];
if(treeArray.length == 0){
	document.getElementById("actualErrors").innerHTML = "There is no fourth item..Please Try Again";

}
}

//error messages



//








	


