//document is whole DOM object is sent to jQuery function
//jQuery(document) returns an jQuery Object
//ready() will be executed once the DOM is ready
//ready() overcomes the window.onload

//Method 1
jQuery(document).ready(function() {
  //alert("My jQuery worked!!!");// This the handler code
});

//Method 2
$(document).ready(function() {
  //alert("$ replace the word jQuery");
});

//Method 3 it is professional approach
$(function() {
  //alert("Method 3 worked");
});


//How to use CSS selector in jQuery

$(".myClass")//class selector
$("#first")//ID selector
$("p")//Element tag selector



$(function() {
  //$("#first") returns an jQuery Object
  //And using that jQuery Object we can access the method text()
  $("#first").text("Hello arun, my first jQuery code");
  $("#second").html("<h3>I love javascript</h3>");
  $("#second").append("<h5>This is append method</h5>");
  $("#second").prepend("<h5>This is prepend method</h5>");

  $("#myWebsite").attr("href", "http://www.arunpandianm.com");
  $("#third").addClass("standout");
});
