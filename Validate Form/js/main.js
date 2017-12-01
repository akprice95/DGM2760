/*jslint browser:true */
"use strict";



//second video
function thisTest() {
	var x;
	var i;
	var status = true;


	var requiredSections = ['fullName','phoneNumber','payMethod','ccNumber','vehicle'];
for (i = 0; i <  requiredSections.length; i++){
	document.getElementById(requiredSections[i]).className = "normal";
}
	


//name
	x = document.forms.myForm.fullName.value;
	if (x=== "" || x=== null) {
		status = false;
		document.getElementById('fullName').className = "error";

	}



//PhoneNumber
	x = document.forms.myForm.phoneNumber.value;
 	x = x.replace(/-/g, '');
	if (x.length < 10 || x.length>15) {
		status = false;
		document.getElementById('phoneNumber').className = "error";

	}



//CC
	x = document.forms.myForm.ccNumber.value;
	x = x.replace(/ /g, '');

	if (x.length != 15 ) {
		status = false;
		document.getElementById('ccNumber').className = "error";

	}

	//paymentMethod
	var foundCheckedButton = false;
	x = document.getElementsByName('payMethod')
	for(i=0; i<x.length; i++){
		if (x[i].checked) {
			foundCheckedButton = true;
			break;
			
		}//end of if
	}//end of for

	if (foundCheckedButton === false ) {
		status = false;
		document.getElementById('payMethod').className = "error";

	}

	//vehicle
	x = document.forms.myForm.vehicle.selectedIndex;
	if (x === 0 ) {
		status = false;
		document.getElementById('vehicle').className = "error";
	}

	if(status === false){
		document.getElementById('formProblems').className = 'showErrorMsg';
	}



	return status;
}