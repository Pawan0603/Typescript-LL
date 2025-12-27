interface Chai {
    flavor: string;
    price: number;
    milk?: boolean;
}

const masala:Chai = {
    flavor: "masala",
    price: 30
}

interface Shop {
    readonly id: number;
    name: string
}

const s: Shop = {id: 1, name: "pawan thake"}
// s.id = 2

interface DiscountCalulator{
    (price: number): number
}

const apply50: DiscountCalulator =(p) => p * 0.5

interface TeaMachine{
    start(): void
    stop(): void
}

const machine:TeaMachine={
    start() {
        console.log("start")
    },
    stop() {
        console.log("stop");
    },
}

// ========= index signiture

interface ChaiRating {
    [flavor: string]: number
}

const ratings: ChaiRating={
    masala: 4.5,
    ginger: 3.4,
}


// =========

interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    name: 'pawan',
    age: 25
}


// =======

interface A {a: string}
interface B {b: string}

interface C extends A, B {}





