// Below code doesn't work because clickMe id in not created in DOM
/*
var myButtonClicked = document.getElementById('clickMe');
myButtonClicked.onclick = display;
*/

//So in order to slow down the process we use window object
//Because window object will be work once the complete webpage is loaded
//But for huge website it take time to load all resource
//In that case you have to use javascript inside html file
window.onload = function() {//This is an ANANOMOUS function
  //getElementById is used to get the object reference from DOM tree
    var myButtonClicked = document.getElementById('clickMe');
    myButtonClicked.onclick = display;
}

function display() {
  alert("Hello world");
}



//Find the Element tag name
window.onload = function() {
  //This is first approach
  /*
    var myButtonClicked = document.getElementById('nodeName');
    myButtonClicked.onclick = nodeName;
    */

  //This is professional approach
  document.getElementById('nodeName').onclick = nodeName;
}

function nodeName() {
  var myElement = document.getElementById('nodeName');
  //used to find the referenced element type (i.e. p,div,input)
  var myNodeName = myElement.nodeName;
  alert(myNodeName);
}



//Used to change the text
window.onload = function() {
  document.getElementById('replace').onclick = replace;
}
 function replace (){
   var mySecondParagraph = document.getElementById('second');
   if (mySecondParagraph !== null) {
     mySecondParagraph.innerHTML = "I love javascript";
   }
 }


 //list the paragraph count
 window.onload = function(){
   document.getElementById('listParagraph').onclick = listParagraph;
 }

function listParagraph(){
  var listParagraph = document.getElementsByTagName('p');
  var count = listParagraph.length;
  alert(count);
}

//display third paragraph text
window.onload = function(){
  document.getElementById('display3rdParagraph').onclick = display3rd;
}

function display3rd() {
  var paraList = document.getElementsByTagName('p');
  var text = paraList[2].innerHTML;
  alert(text);
}

//access the various node
window.onload = function(){
  document.getElementById('childNode').onclick = childNode;
}

function childNode() {
  var myElementName = document.getElementById('second');
  alert("Parent tag name : " + myElementName.parentNode.nodeName);
  //alert("childNode name : " + myElementName.childNode[0]);
  //alert("firstChild name : " + myElementName.firstChild);
  //alert("lastChild name : " + myElementName.lastChild);

  //alert("nextSibling name : " + myElementName.nextSibling);
  //alert("previousSibling name : " + myElementName.previousSibling);
}


//change the href to www.arunpandianm.complex
window.onload = function() {
  document.getElementById('changeLink').onclick = changeWebsite;
}
function changeWebsite(){
  var myAnchor = document.getElementById('mywebsite');
  //var mylink = myAnchor.href;
  //alert(mylink);
  myAnchor.href = "http://www.arunpandianm.com";
}
