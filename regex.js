"use strict";
var $ = function(id) { return document.getElementById(id); };

var validatePhone = function() {
    var phone = $("phone").value;
	   //var pattern = /^\d{3}-\d{3}-\d{4}$/; // 999-999-9999
      //var pattern = /^\(\d{3}\)\s\d{3}-\d{4}/;//(###) ###-####
      //var pattern =/^[1-9]\d{2}\s\d{3}\s\d{4};/  //### ### ####
      var pattern =/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      //will match all
      // these 123-456-7890
      //(123) 456-7890
      //123 456 7890
      //123.456.7890
      //+91 (123) 456-7890
     var isValid = pattern.test(phone);

    $("message").firstChild.nodeValue = (isValid) ? "Valid phone number" : "Invalid phone number";
};

// mrc 11/28/2017
var clearMessage = function() {
	$("message").firstChild.nodeValue = "";
}

window.onload = function() {
    $("validate").onclick = validatePhone;
// mrc 11/28/2017
	$("phone").onclick = clearMessage;
	$("phone").onfocus = clearMessage;
    $("phone").value = "732.685.7158";  // set default phone number
};
