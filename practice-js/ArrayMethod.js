


const arr1 = [1, 2, 3, [3, 4, [5, 6]]];

function flattenNested(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat((Array.isArray(curr) ? flattenNested(curr): curr))
    },[])
}

console.log(flattenNested(arr1))