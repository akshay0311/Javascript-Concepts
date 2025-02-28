a(); // a is called
b(); // throws TypeError which says b is not a function cuz it is hoisted as a variable 

// Function Statement aka Function Declaration
function a() {
    console.log("a");
}

// Function Expression i.e assigning function to a variable which function acts like a value
var b = function() {
    console.log("New");
}

// Difference is hoisting 
// b is hoisted as a variable while a is hoisted as function itself


// anonymous function doesnot have its identity 
// It is used in a place where function is used as a value i.e in CB or Function Expression


// Named Function Expression i.e Same as Function Expression but with a Name

var b = function xyz() {
    console.log(xyz); // Within Scope 
}

b();
xyz(); // ReferenceError : xyz is not defined 
// outside its scope 


// First Class Function i.e ability to use function as a val 
// We can pass a function as an argument to another function or return a function i.e closure


var c = function(param) {
    console.log(param());
}

c(function() {
    console.log("This is called from c");
})

// Also think of it as 
// param = function () { console.log ("This is called from c")}