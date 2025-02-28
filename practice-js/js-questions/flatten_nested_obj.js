const obj = {
    name : "Akshay",
    address : {
        street : "Faizabad",
        lane : 22
    },
    phoneNumber : [7897998229, 9012060443]
}

const newObj = {
    name : "Akshay",
    "address.street" : "Faizabad",
    "address.lane" : 22,
    phoneNumber : [7897998229, 9012060443]
}


// function flattenNestedObj(obj, newObj={}, prefix="") {
//     if(obj !== "object") return obj;
    
//     for (let key in obj) {
//         let newKey = prefix ? `${prefix}.${key}` : key;
//         newObj[newKey] = flattenNestedObj(obj[key], newObj, newKey)
//     }
//     return newObj;
// }

function flattenObject(obj, prefix = '') {
    let result = {};
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let newKey = prefix ? `${prefix}.${key}` : key;
            
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                Object.assign(result, flattenObject(obj[key], newKey));
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    
    return result;
}

console.log(flattenObject(obj));
