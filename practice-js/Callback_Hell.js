console.log("Namaste Javascript");


// Callback Allows to do asynchronous things in js 
// Take a piece of code inside a function and pass it as a callback fn which can be 
// executed at a later point in time 

setTimeout(function () {
    console.log("Time 1");
}, 5000)

console.log("Time 2")


// 0. Importance of Callbacks 
// 1. Issues with Callbacks 
      // a. Callback Hell (Unmaintainble code) and bcoz of its structure it is pyramid of doom 
      // b. Inversion of Control 
      // (Lost the control of your code as it becomes the duty of the function to which the callback function is passed to call the callback function)


// List of items in an array 

const cart = ["shoes", "pants", "kurta"];

// 3 apis and all the three apis are dependent on each other 
// i.e only when one api is executed then only we will call another api 

// api.createOrder();

// api.proceedToPayment();

// api.showOrderSummary();



// Unreadable and Unmaintainble code 


// Callback Hell or (Pyramid of Doom) -> Bcoz of its structure 
api.createOrder(cart, function(orderId) {
    api.proceedToPayment(orderId, function(paymentInfo) {
        api.showOrderSummary(paymentInfo, function() {
            api.updateWalletBalance()
        }); 
    })
})

// Inversion Control 
// What happens is we are blindly trusting createOrder api to create an order and then call the cb function
// This createOrder api could be another service or another developer wrote it and it could be buggy 
// or createOrder api could be called twice





