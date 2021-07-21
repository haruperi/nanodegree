//Display possibilities
/*
Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
*/

//Using innerHTML
document.getElementById("innerDisp").innerHTML = "This is innerHTML display";

//Using document.write()
//The document.write() method should only be used for testing. since Using document.write() after an HTML document is loaded, will delete all existing HTML:
document.getElementById("docWrite").onclick = function () {
     document.write("This is Using document.write()");
}

//using window.alert().
document.getElementById("alertDisp").onclick = function () {
     window.alert("This is using alert");
}

//using window.alert().
document.getElementById("printPage").onclick = function () {
     window.print();
}

//using console
console.log("this is using console");

// This is a single line comment

/*
This 
is 
a multi
line
comment
*/


//variables
// Javascripts is loosely bound, dynamic type language, meaning it detemines type by itself, you dont have to be explicit
let name; //for inside brackets only
var number; //can be global


//Operators
/*
Arithmetic Operators
Comparison (Relational) Operators
Bitwise Operators
Logical Operators
Assignment Operators
Special Operators
*/





//get element
document.getElementById("button1").onclick=function(){
    
    //change HTML content
    document.getElementById("changeContent").innerHTML = "<p>This is now the new Info with green background </p>";
    
    //Change style the professional way (changing id instead of inner css style)
    document.getElementById("bluebox").setAttribute("id", "greenbox");
}

//Change Image
document.getElementById("turnOn").onclick=function () {
    document.getElementById("bulb").src='assets/img/pic_bulbon.gif';
}

document.getElementById("turnOff").onclick=function () {
    document.getElementById("bulb").src='assets/img/pic_bulboff.gif';
}

