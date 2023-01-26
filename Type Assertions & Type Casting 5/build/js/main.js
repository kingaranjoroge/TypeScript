"use strict";
// converting to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
// keyword as can be replaced with angle brackets (<>)
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
let nextVal = addOrConcat(2, 2, 'concat'); // Be careful! TS sees no probelem - but a string is 
// returned and not a number 
//10 as string // this will have an error 
10;
// The Dom (an area where type assertion is useful)
const img = document.querySelector('img'); // this is called a non-null assertion which tells TS value cannot be 
// null
const myImg = document.getElementById('#myImg');
const nextImg = document.getElementById('#nextImg');
img.src; // it can be null, so if you don't add 'as HTMLImageElement' or a non-nul insertion in the declaration 
// it will have a problem 
myImg.src; // 
