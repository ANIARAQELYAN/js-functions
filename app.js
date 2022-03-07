let a = 15;
function isNumber(value) {
    return (typeof value == "number");
}
console.log(isNumber(a));

function changeArr(arr) {
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i = i - 1) {
        if (isNumber(arr[i])){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

console.log(changeArr([12, 52, 78, "aa"]))
