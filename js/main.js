// JavaScript Document

function formSubmit() {
    alert("Thank you for signing up!");
}


function ValidateForm() {
var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var address = document.getElementById("address").value; 
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var phoneReg = /^[0-9]+$/;
if (firstname != '' && lastname != '' && email != '' && phone != '' && address != '') {
if (email.match(emailReg)) {
if (phone.match(phoneReg)) {
}
alert("Thank you for signing up!");
return true;
}
} else {
alert("Please fill out your details");
return false;
}
alert("Invalid Email Address");
return false;
}

	