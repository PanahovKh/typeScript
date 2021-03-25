const isFetching: boolean = false
const isLoading: boolean = true

const int: number = 43
const float: number = 1.3

const message: string = 'Hello Khanali'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray1:Array<number>  = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'TypeScript']

const contact: [string, number] = ['Khanali', 5845314]

let variable: any = 23
variable = 'hello'

//Void

function nameIs (name: string): void {
    console.log(name)
}
nameIs('Khanali')
//Never

function throwError(message: string): never {
    throw new Error(message);   
}

function isFinite() :never {
    while(true)
}

//Type

type Login = string

const login: Login = 'admin'
// const login1: Login = 2

type ID = number | string

const id1: ID = 1
const id2: ID = 'qq'
// const id3: ID = boolean

