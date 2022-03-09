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

function isSame(value, arr) {
    for (let j = 0; j < arr.length; j++) {
        if (value === arr[j]) {
            return true;
        }
    }
    return false;
}

function getSameItemsFromArrays(firstArr, secondArr) {
    let newArray = [];
    if (isArray(firstArr) && isArray(secondArr)) {
        for (let i = 0; i < firstArr.length; i++) {
            if (isSame(firstArr[i], secondArr)) {
                newArray.push(firstArr[i]);
                break;
            }
        }
    }
    return newArray;
}

let first = getDividesIntoFive([5, 4, 0, 25, 16, 9990, 10]);
let second = [4, 5, 6, 10, 'a45'];
let kk = getSameItemsFromArrays(first, second);

console.log(kk);


function getA(aa = '15', bb = 14) {
    return aa + ' ' + bb;
}

/*
console.log(getA());//29 - 15''14 // 15 14
console.log(getA(1,2));// - 3 // 1 2
console.log(getA('1'));// - 1 undefined // 1 14

*/

let j = 15;
let ch = 27;


function counter() {
    j++;
}

counter();
counter();
counter();
counter();
counter();
console.log(j);


let newArray = [];

function sameItemsFromArrays(firstArr, secondArr) {
    if (isArray(firstArr) && isArray(secondArr)) {
        for (let i = 0; i < firstArr.length; i++) {
            if (isSame(firstArr[i], secondArr)) {
                newArray.push(firstArr[i]);
                break;
            }
        }
    }
}

sameItemsFromArrays([4, 5, 8, 11], [11, 321956, 410]);
console.log(newArray);