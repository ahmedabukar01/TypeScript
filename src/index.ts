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