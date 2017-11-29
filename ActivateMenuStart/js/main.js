// JavaScript Document
/*jslint browser:true */
"use strict";


//example 1
var thelocation = location.href;


var resultArray = thelocation.split('/');


var test = document.querySelectorAll ("ul#mainmenu li a");




//loop through all the links on the page
var i;
for(i=0; i<test.length; i++) {
	var mypage = test[i].getAttribute("href");
   

//compare them to see if there are a match
    if(resultArray[resultArray.length-1] === mypage) {
    test[i].parentNode.className = "active";
	
    
    if(test[i].parentNode.parentNode.className == "" && (mypage == "hammer.php" || mypage == "drill.php")){
     test[i].parentNode.parentNode.parentNode.className = "parent";
    }
}
    else{
    	test[i].parentNode.className="";
    }

    
}