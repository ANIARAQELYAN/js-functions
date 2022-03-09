function isArray(value) {
    return Array.isArray(value);
}

function getDividesIntoFive(arr) {
    let newArray = [];
    if (isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 5 === 0) {
                newArray.push(arr[i]);
            }
        }
    }
    return newArray;
}

function getSameItemsFromArrays(firstArr, secondArr) {
    let newArray = [];
    if (isArray(firstArr) && isArray(secondArr)) {
        for (let i = 0; i < firstArr.length; i++) {
            for (let j = 0; j < secondArr.length; j++) {
                if (firstArr[i] === secondArr[j]) {
                    newArray.push(firstArr[i]);
                    break;
                }
            }
        }
    }
    return newArray;
}

let first = getDividesIntoFive([5, 4, 0, 25, 16, 9990, 10]);
let second = [4, 5, 6, 10, 'a45'];
let kk = getSameItemsFromArrays(first, second);

console.log(kk);
