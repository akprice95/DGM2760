// JavaScript Document
/*jslint browser:true */
"use strict()";

var LastM =(document.lastModified);

var showDate = new Date();
var myDateString = new Date();

document.getElementById("learned").innerHTML = "What I Learned";
document.getElementById("companyName").innerHTML = "Pizza Emporium";
document.getElementById("quote").innerHTML = "Literal Objects";
document.getElementById("title").innerHTML = "Pizza Order";
document.getElementById("dateLast").innerHTML = "Last Motified:" + LastM;
document.getElementById("crustOpt").innerHTML = "Crust Options";
document.getElementById("toppingOpt").innerHTML = "Topping Options";
document.getElementById("sizeOpt").innerHTML = "Size Options";
document.getElementById("timeToEat").innerHTML = "Build My Pizza Now!!!";
document.getElementById("shoppingLst").innerHTML = "Shopping List";
document.getElementById("userMessage").innerHTML = "What do you need?";

var pizzalist ={
	crust: "thin",
	toppingType: "sausage",
	sizeType: "large",

//for the Pizza Build Button
	buildPizzaNow: function(){
		document.getElementById("displayPizza").innerHTML = "Baking a " + pizzalist.sizeType + " pizza on a " + pizzalist.crust + " crust with " + pizzalist.toppingType + " and Your favorite cheese!";
	},

 //for building the shopping list for the pizza
	shoppingLst: function(){
		if (pizzalist.sizeType == "large") {
			document.getElementById("displayPizza").innerHTML = "You are going to need 4 cups of flour and 1 lbs of " + pizzalist.toppingType + " for your delecious pizza!";
		}
		else{
			document.getElementById("displayPizza").innerHTML = "You are goingto need 2 cups of flour and 1 lbs of " + pizzalist.toppingType + " for your delecious pizza!";
		}
		
	}
}; 












	


