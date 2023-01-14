let stringArr = ['one', 'hey', 'Brian']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van Halen')

//Tuple
let myTuple: [string, number, boolean] = ['Brian', 42, true]

let mixed = ['John', 1, false]

myTuple[1] = 42

//Objects
let myObj: object
myObj = [] //arrays are types of objects
myObj = bands
myObj = {} //shows myObj is an object

const exampleObj = {
    prop1: 'Brian',
    prop2: true
}

exampleObj.prop1 = 'Dave'

type Guitarist = {              //you can also write interface Guitarist {} , note there is no equals sign
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}
console.log(greetGuitarist(evh))

const greetGuitarist2 = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name?.toUpperCase()}!`
}
console.log(greetGuitarist2(jp))

const greetGuitarist3 = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!'
}
console.log(greetGuitarist3(jp))

// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
    U = 1,
    D,
    C,
    B, 
    A,
}
