function flatten(arr, result) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i], result)
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}


const arr = [1, [2, [3, 4]], [4, [5]], [6]];

let res = flatten(arr, []);

console.log("Result", res);