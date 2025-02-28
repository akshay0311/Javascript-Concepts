// createOrder();

// proceedToPayment();

// updateWallet();


// //

// const cart = ["Pants", "Trousers"];

// createOrder(cart, function() {
//     proceedToPayment();
// })



// //


// // line 1...
// // line 2....

// //line 108

// fetch("api")
// .then(function(response) {
//     return response.json()
// })
// .then(function(json) {
//     console.log(json)
// })
// .catch(err => {
//     console.log(err)
// })

// // line 110

// function createOrder(cart) {

//     const promise = new Promise((resolve, reject) => {
//         if (validateCart) 
//             resolve();
//         else
//             reject();
//     })

//     return promise;
// }


// let pr = createOrder(cart); 

// {data : undefined}

// pr.then((data) => {
//     console.log(data);  
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally



// async function myFunc(cart) {
//     let orderId = await createOrder(cart);
//     let paymentInfo = await proceedToPayment(orderId);
//     return data; 
// }


// myFunc(cart);

console.time();

setTimeout(() => {
    console.log("Something")
},3000)

setTimeout(() => {
    console.log("Take 3 seconds")
},2000)
