// Scope refers to the part of the program where a variable is referenced or accessible 
// Global Scope -> Outside of any function and is accessible from anywhere 
// Function Scope -> Accessible within a function
// Block Scope -> Block Scope 


// Function Scope variable accessible within a function
function functionScopeExample() {
    var functionScopedVar = "I am function scoped";
    console.log(functionScopedVar); // Accessible here
}
  
functionScopeExample();
console.log(functionScopedVar); // Error: functionScopedVar is not defined
  
// Block Scope variable accessible within a block 
if (true) {
    let blockScopedLet = "I am block scoped with let";
    const blockScopedConst = "I am block scoped with const";
    console.log(blockScopedLet);  // Accessible
    console.log(blockScopedConst); // Accessible
}
  
console.log(blockScopedLet);  // Error: blockScopedLet is not defined
console.log(blockScopedConst); // Error: blockScopedConst is not defined
  

// Shadowing

var a = 10;

function func() {
    console.log('Inner', a); // undefined cuz local var a overshadowed global
    var a = 20;
}

func();

console.log('Outer', a);

// Function Scope Shadowing 
let value = 10;

function shadowFunction() {
  var value = 20; // Shadows the outer 'value'
  console.log(value); // Output: 20
}

shadowFunction();
console.log(value); // Output: 10


{
    var a = 20;
}

console.log(`Var ${a}`);

let num = 50;

if (true) {
  let num = 100; // Shadows the outer 'num'
  console.log(num); // Output: 100
}

console.log(num); // Output: 50

var a = 10;
console.log("Out", a);
{   
    console.log("In 1", a);
    let a = 20;
    console.log("In 2", a);
}

console.log("Out 1", a);


// Illegal Shadowing since var variable is reference outside the block 

let a = 100;

{
    var a = 10;
}

