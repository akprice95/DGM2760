/*jslint browser:true */
"use strict";

var temp = document.querySelectorAll('ul#primaryNavigation li a');



function onstart(){
for(var i = 0; i < temp.length; i++){
var temp2 = temp[i].getAttribute("href");
var temp3 = temp[i].text;
var diaper = document.createElement("A");
diaper.setAttribute('href', temp2);
diaper.innerHTML = temp3;
var baby = document.createElement("LI");


baby.appendChild(diaper);
document.getElementById('smallArea').appendChild(baby);

}
}
onstart();

