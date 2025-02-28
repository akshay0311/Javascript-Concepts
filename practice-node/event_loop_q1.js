setTimeout(() => {console.log("Timeout 1")}, 0)
setTimeout(() => {
    console.log("Timeout 2")
    process.nextTick(() => {
        console.log("Next tick inside set timeout")
    })
}, 0)
setTimeout(() => {console.log("Timeout 3")}, 0)

process.nextTick(() => {
    console.log("This is next tick 1");
})

process.nextTick(() => {
    console.log("this is next tick 2");
    process.nextTick(() => {
        console.log("Next tick 2.a")
    })
})

Promise.resolve().then(() => {
    console.log("Promise 1")
})

Promise.resolve().then(() => {
    console.log("Promsie 2")

    Promise.resolve().then(() => {
        console.log("last promise")
    })

    process.nextTick(() => {
        console.log("Next tick Inside Promise")
    })
})

Promise.resolve().then(() => {
    console.log("This is promise 3")
})

/**
 * 1
 * 
 */