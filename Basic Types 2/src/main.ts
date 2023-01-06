let myName: string = 'Brian'
let meaningOfLife: number
let isLoading: boolean
let album: any //allows any type of value
let value: string | number // | is union type
let re: RegExp =  /\w+/g

myName = 'Njoroge'
meaningOfLife = 42
isLoading = true
album = 42
album = 'Renaissance'

const sum = (a: number, b: string) => {
    return a +b 
}