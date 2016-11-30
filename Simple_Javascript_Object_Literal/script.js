//name of the object is myObjectLiteral
// {} denotes the structure
myObjectLiteral = {
  //Both name and myDate are said to be member of the object myObjectLiteral
  //Each members are separated by Comma
  name : "arunpandian",//This is property
  myMsg : function(){//This an ANANOMOUS function
    document.write("hello arun<br/>");//This is method
  }
}


// dot . denotes member accessing operator
if (myObjectLiteral.name === "arunpandian") {
  myObjectLiteral.myMsg();
}


secondObjectLiteral = {
  printAllMembers : function(targetObject) {
    for (var index in targetObject)
    document.write("<br/>" + targetObject[index]);
  }
}

secondObjectLiteral.printAllMembers(myObjectLiteral);

//create an complex object LITERAL
//create an object literal inside an object literal
myComplexObjectLiteral = {
  name : "kutty",
  DOB : 1995,
  myFunction : { //inner object literal
    name : "arun",
    notify : function() {
      document.write("Happy javascript coding");
    },
    myArray : [//multi dimentional array
      {location : 12, item : "cake"}, // index 0
      {location : 13, item : "jam"}, // index 1
      {location : 14, item : "chocolate"} // index 2
    ]
  }
}

//Accessing complex object literal
document.write("<br/><br/><br/>Accessing complex object literal<br/>");
document.write("Outer Name : " + myComplexObjectLiteral.name + "<br/>");
document.write("Inner Name : " + myComplexObjectLiteral.myFunction.name + "<br/>");
document.write("Inner function : " + myComplexObjectLiteral.myFunction.notify() + "<br/>");
document.write("Array call : " + myComplexObjectLiteral.myFunction.myArray[2].location + ","
+ myComplexObjectLiteral.myFunction.myArray[2].item + "<br/>");


//Creating an Reference Object literal
var reference = myComplexObjectLiteral;
document.write("<br/><br/><br/>Reference Accessing complex object literal<br/>");
document.write("Reference Inner name : " + reference.myFunction.name + "<br/>");

//Create an member in Object if not exists
if(typeof myComplexObjectLiteral.age === "undefined") {
  myComplexObjectLiteral.age = 21;
}
document.write("My age is " + myComplexObjectLiteral.age + "<br/>");

//To view the structure of object literal
document.write("<br/><br/><br/>To view the structure of object literal<br/>");
for (var member in myComplexObjectLiteral) {
  document.write("<br/>" + member + " ==> " + myComplexObjectLiteral[member]);
}
