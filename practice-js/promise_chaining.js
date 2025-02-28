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

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        let orderSummary = {orderId, message: "Done it is"};
        if (true) resolve(orderSummary)
        else reject("Payment Failed")
    })
}