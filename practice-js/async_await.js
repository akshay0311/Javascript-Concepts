// it is an async function
// always return a promise
async function getData() {
    return "Namaste"; // wrap it inside a promise and then return 
}

// const dataPromise = getData();

// dataPromise.then(res => console.log(res))

// directly returns a promise
async function getPromiseData() {
    return promise
}

// Async and await is to handle promises 

// await is keyword that is only be used inside an async function

const promise = new Promise((resolve, reject) => {
    console.log("It is promise 1")
    setTimeout(() => {
        resolve("Promise resolved value 1")
    },5000)
})

const promise2 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved value 2")
        },1000)
    })
}

async function handlePromise() {
    let start = Date.now();

    console.log("Before the promise");
    const val = await promise; // waits at this point 

    console.log("Namaste JS");
    console.log(val);
    let end = Date.now();
    console.log(end - start);

    start = Date.now();
    const val2 = await promise2(); // waits at this point 

    console.log("Namaste JS 2");
    console.log(val2);
    end = Date.now();

    console.log(end-start);
}

handlePromise();

console.log("After the function");