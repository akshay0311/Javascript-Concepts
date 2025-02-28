

// const API_URL = 

console.log("First One");

async function handlePromise(p) {
    console.log("Inside Function One")
    let promise = await new Promise((resolve , reject) => {
        if(true) resolve("Inside Promise");
    })    
    console.log(promise);   
    console.log("Inside Function Two");
}

handlePromise();
console.log("Second One");