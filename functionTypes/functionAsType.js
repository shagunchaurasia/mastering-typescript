"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result", num);
}
function undefinedType(num) {
    console.log("result", num);
    return;
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
console.log(combineValues(2, 4));
