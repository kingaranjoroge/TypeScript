// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type userId = stringOrNumber


// Literal types
let myName: 'Brian' //myName can only be Brian

let userName: 'Brian' | 'Dave' | 'Amy'
userName = 'Brian'


// Functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)    
}
logMsg('Hello!')
logMsg(add(2,3))

type mathFunction = (a: number, b: number) => number

// we can also use interface
/* interface mathFunction {
    (a: number, b: number): number
} */

const subtract: mathFunction = (c, d) => {
    return c - d
}
logMsg(subtract(2,1))


// optional parameters
const addAll = (a: number, b: number, c?: number): number => { // the optional parameter should come in the last
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}

const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c
}

const sumAll1 = (a: number = 3, b: number, c: number = 2): number => {
    return a + b + c
}

console.log(addAll(2,3,2))
console.log(addAll(2,3))
console.log(sumAll(2,3))
console.log(sumAll1(undefined, 3)) // expects undefined because it's at first index


// Rest Parameters(Rest Operator)
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}
logMsg(total(1,2,3,4))


// Never type
const createError = (errMsg: string): never => { 
    throw new Error(errMsg)
}

const infinite = () => { // it's of type never even without including never, after adding the if statement, 
                         // it changes to type void
    let i: number = 1 
    while (true) {
        i++
        if (i > 100) break 
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

// use of type never and type guard
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}
