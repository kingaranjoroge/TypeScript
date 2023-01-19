"use strict";
// Literal types
let myName; //myName can only be Brian
let userName;
userName = 'Brian';
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
// we can also use interface
/* interface mathFunction {
    (a: number, b: number): number
} */
const subtract = (c, d) => {
    return c - d;
};
logMsg(subtract(2, 1));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
const sumAll1 = (a = 3, b, c = 2) => {
    return a + b + c;
};
console.log(addAll(2, 3, 2));
console.log(addAll(2, 3));
console.log(sumAll(2, 3));
console.log(sumAll1(undefined, 3)); // expects undefined because it's at first index
// Rest Parameters(Rest Operator)
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
// Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    // it changes to type void
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of type never and type guard
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
