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
    readonly name: string,
    phone: number | string,
}

const user2: User2 = {
    id: 3,
    name: 'Omar',
    phone: '616161'
}

// user2.name = 'ali'

// Type Assertions
let cId: any = 2;
// let customerId = <number>cId;
let customerId = cId as number;

customerId = 3

// function
function func(x: number,y: number): number{
    return x + y;
}

// void
function log(message: string | number): void {
    console.log(message)
}
console.log(func(3,2));

log('here we are')

// Interfaces
interface UserInterface{
    readonly id: number,
    name: string,
    phone: number,
    email?: string,
}

let inUser: UserInterface = {
    id: 4,
    name: 'nur',
    phone: 34342333,
}

// function interfaces
interface mathFunc {
    (x: number, y: number): number
}

const add: mathFunc = (x: number, y: number): number => x + y;
const sub: mathFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
    private id: number
    name: string
    protected phone: number

    constructor(id: number, name: string, phone: number){
        this.id = id
        this.name = name
        this.phone = phone
    }

    register(){
        return `${this.name} is now registered`;
    }
}

const ahmed = new Person(1,'ahmed',34);

console.log(ahmed.register())

// Classes with interface
interface classInterface {
    id: number
    name: string
    register(): string
}

class Person2 implements classInterface {
    id: number
    name: string
    phone?: number

    constructor(id: number, name: string, phone?: number){
        this.id = id
        this.name = name
        this.phone = phone
    }

    register(){
        return `${this.name} is now registered`;
    }
}

const omar = new Person2(2,'omar',34);

console.log(omar.register())

// Extending Classes (SubClasses)

class Employee extends Person {
    position: string

    constructor(id: number, name: string, phone: number, position: string){
        super(id,name,phone)
        this.position = position
    }
}

const emp = new Employee(4, 'Hassan', 333, 'Developer')
console.log(emp.register())

// Generics
function getArray<T>(items: T[]): T[]{
    return items
}

const arrNumbers = getArray<number>([2,2,2]);
const arrString = getArray<string>(['ahmed','ali','sacdiyo']);

arrNumbers.push(3)

console.log(arrNumbers)