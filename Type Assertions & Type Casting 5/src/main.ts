type One = string
type Two = string | number
type Three = 'hello'

// converting to more or less specific
let a: One = 'hello'
let b = a as Two    // less specific
let c = a as Three  // more specific

// keyword as can be replaced with angle brackets (<>)
let d = <One> 'world'
let e = <string | number> 'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a+b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2,'concat') as string 
  
let nextVal: number = addOrConcat(2,2,'concat') as number   // Be careful! TS sees no probelem - but a string is 
                                                            // returned and not a number 

//10 as string // this will have an error 
(10 as unknown) as string

// The Dom (an area where type assertion is useful)
const img = document.querySelector('img') ! // this is called a non-null assertion which tells TS value cannot be 
                                            // null
const myImg = document.getElementById('#myImg') as HTMLImageElement
const nextImg = <HTMLImageElement> document.getElementById('#nextImg')

img.src // it can be null, so if you don't add 'as HTMLImageElement' or a non-nul insertion in the declaration 
        // it will have a problem 
myImg.src // 
