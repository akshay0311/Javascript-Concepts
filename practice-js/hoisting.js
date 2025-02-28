// variables declared with var, let, const are all hoisted i.e variable reach to the top of their scope 

// In case of var variable is set undefined value before declaration  

console.log(a);
var a = 100;

// In case of let and const variable remain in the TDZ and give reference error 
// until their actual line of declaration

console.log(a); // Reference Error 
let a;

// Function is also hoisted

hoisted(2, 3);

function hoisted(a, b) {
    console.log(a+b);
}


// Function Expression is a variable assignment
// variable is hoisted but its value (function) is not initialized until the actual assignment

greeting;

let greeting = function() {
    console.log("greeted");
} // Behaves like a variable until function is assigned to the variable


// Throws ReferenceError 
let a = 10;

function myFunc() {
    console.log(a);
    let a = 20;
}


// Class is also hoisted but remains in their TDZ like let and const 

const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {
  constructor() {
    this.name = "JavaScript";
  }
}







