function deepClone(obj) {
    if (obj === null || typeof(obj) !== "object") return obj;

    let result = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        console.log(obj[key]);
        result[key] = deepClone(obj[key])
    }
    return result
}

let obj = {
    name : "Akshay",
    age : 27,
    address : [{
        street : "Sector 70",
        society : "Pan Oasis"
    }],
    phoneNumber : [234, 405, 304]
}

console.log(deepClone(obj));


const arr = [1, 3, 5];

for (let key in arr) {
    console.log(key);
    console.log(arr[key])
}

console.log(typeof(arr) === "object")