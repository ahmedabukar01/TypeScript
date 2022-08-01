// TypeScript Basics
let id: number = 3;
let company: string = "normed";
let isPublished : boolean = true;
let x: any = 'Hello ahmed';

let ids: number[] = [1,2,3,4,5];
let arr: any[] = [2,3,'names','Asha'];

// Tuple
let person: [number, string, boolean] = [1, 'name', false];

// Tuple array
let employee: [number, string][]

employee = [
    [1,'ahmed'],
    [2,'abukar'],
    [3,'omar'],
]

// Union
let pId: string | number = 22;
pId = '22';

// Enums 
enum direction1{
    Up,
    Down,
    Left,
    Right,
}
enum direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(direction1.Left);
console.log(direction2.Left);

// Objects
const user1: {
    id: number,
    name: string,
    phone: string
} = {
    id: 1,
    name: 'John',
    phone: '2532212'
}

// another way of creating object data types
type User2 = {
    id: string | number,
    name: string,
    phone: number | string,
}

const user2: User2 = {
    id: 3,
    name: 'Omar',
    phone: '616161'
}

// Type Assertions
let cId: any = 2;
// let customerId = <number>cId;
let customerId = cId as number;

customerId = 3

// function
function add(x: number,y: number): number{
    return x + y;
}

// void
function log(message: string | number): void {
    console.log(message)
}
console.log(add(3,2));

log('here we are')