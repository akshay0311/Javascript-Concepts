Array.prototype.myMap = function(cb) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            result.push(cb(this[i], i, this))
        }
    }
    return result;
}

Array.prototype.myFilter = function(cb) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i) && cb(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result;
}

Array.prototype.myReduce = function(cb, acc) {
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            acc = cb(acc, this[i], i)
        }
    }
    return acc;
}


const arr = [1, 2, 3, 4, 5];

let result = arr.myMap((a, i, arr) => a*2);

let res = arr.myFilter((a, i, arr) => a > 2)

console.log(result);

console.log(res);


let sum = arr.myReduce((acc, a, ind) => {
    acc[ind] = a;
    return acc;    
}, {})

console.log("sum", sum);




let arr1 = [1, 2, 3, 4, 5];

Array.prototype.newReduce = function(cb, init) {
    let acc = init;
    for(let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i], i, this)
    }
    return acc;
}


let newArr = arr1.newReduce((acc, current) => {
    return acc - current
}, 0)

console.log("New", newArr);