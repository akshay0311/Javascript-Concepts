// When creating an object, JS attaches hidden properties and functions to your object 
// Same with function

// arr.__proto__, __proto__ is attached to array 
// arr.__proto === Array.prototype
// arr.__proto.__proto__ === Object.prototype
// obj2.__proto__ = Object.prototype;
// func.__proto__ = Function.prototype
// func.__proto__ = Object.prototype

let obj = {
    name : "Akshay",
    city : "Dehradun",
    getInfo : function() {
        console.log(this.name, " ", this.city);
    }
}

let obj2 = {
    name : "Aditya"
}


obj.getInfo()

obj2.__proto__ = obj;

obj2.getInfo();


// Polyfill 
Function.prototype.mybind = function() {
    console.log("This is my bind");
}

function myFunc(a, b) {
    return a+b;
}


myFunc.mybind();



//------------------------------------------------------------------------------------//

// In js everthing is an object 

class String {
    addString() {
        System.out.println("Add the string")
    }
    concatString() {
        System.out.println("Concat the string")
    }
}

let string = "dskfnsdkn";

console.log(Object.getPrototypeOf(string));