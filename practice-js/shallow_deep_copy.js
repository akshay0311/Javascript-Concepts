const obj = [1, 2, {city : "Lucknow", pincode : 226016}];

// Shallow Copy using spread operator
let copy = [...obj];
copy[2].city = "Kanpur";

console.log("Original", obj) // {city : "Kanpur", pincode : ..}
console.log("Copied", copy); // {city : "Kanpur", pincode : ..}


// Shallow Copy using Object.assign
const obj1 = {name : "Akshay", address : {pincode : 22016}}

copy = Object.assign({}, obj1);

copy.address.city = "Kanpur";
console.log("Original", obj1) // {city : "Kanpur", pincode : ..}
console.log("Copied", copy); // {city : "Kanpur", pincode : ..}


// For Deep Cloning use structuredClone, plus it also works in Nodejs 
// For Deep Cloning use JSON.parse(JSON.stringify()) 
// Doesn't handle functions, undefined, or special objects like Date or Set

/***** Recursive Approach For Deep Copying **** */

function DeepCopy(obj) {
    if (obj === null || typeof(obj) !== "object") return obj;

    const copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = DeepCopy(obj[key]);
        }
    }
    return copy;
}


let cp = DeepCopy(obj1);

cp.address.pincode = 201301;
console.log("Original101", obj1)
console.log("Copied101", cp);

// Shadowing and this Keyword
const object = {
    value: 42,
    getValue: function () {
      let value = 10; // Shadows the `value` property of `obj`
      return value; // Returns 10, not obj.value
    },
  };
  
console.log(object.getValue()); // Output: 10
  









