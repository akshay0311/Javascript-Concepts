/**
 * Promise : {data: undefined} data will hold whatever that is returned by createOrder api at some later point of time 
 * A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 * It has 3 states 
 * 1. Pending
 * 2. Fulfilled
 * 3. Rejected
 * We do not give up the control like in callback but we retain the control by chaining object with .then() method and handling error with 
 * .catch() method
 * Better error handling we have 
 * 
 * We are able to make sure that callback is called only once
 * 
 * Instead of passing a callback and relying on another function to execute it, we get a Promise object back and decide what to do with it using .then() and .catch().
 * 
The function calling the Promise does not have direct access to our handling logic. We have full control over how to respond to success (.then()) or failure (.catch()).

centralized error handling
 */


function createOrder(cart, item="Pant") {
    let promise = new Promise((resolve, reject) => {
        try {
            if (cart.length) {
                resolve(219);
            }
            else {
                reject("Oh no!!");
            }
        }
        catch(err) {
            console.log(err);
        }
    })
    return promise;
} 



const cart = ["Pant", "Trouser"];


createOrder(cart) 
.then(function(orderId) {
    console.log(orderId)
})
.catch(err => {
    console.log(err)
})


/**
 * 1. Promise.all([p1, p2, p3]) => Fails if any of them fails otherwise array of results
 * 2. Promise.allSettled([p1, p2, p3]) => Doesnot fail, always return an array having failed and successful promises
 * 3. Promise.race([p1, p2, p3]) => Wait for the first promise and give its value whether if it is (failed or successful)
 * 
 * 4. Promise.any([p1, p2, p3]) => Wait for first success and ignore the fail even if it is resolved first. If everything fails then return the aggregate error 
 * 
 * 
 * 
 * 
 * 
 * 
 */