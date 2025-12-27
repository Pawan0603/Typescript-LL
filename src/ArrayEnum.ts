const frute: string[] = ["apple", "mongo"];
const price: number[] = [12, 43];

const rating: Array<number> = [3.4, 5.0];

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "masala", price: 15},
    {name: "Adrak", price: 20},
]

// ====== read only array

const cities: readonly string[] = ["Delhi", "Mumbai"];

// cities.push("pune") // do not do push on readonly array

// ========== multydimantion array

const table: number[][] =[
    [1,2,3],
    [2,3,4]
]

// =========== tuples ---------

let strTuple: [string, number];

strTuple = ["hello", 12];
// strTuple = [34, "flkdjl"] // you cant do this

// ------ optional tuples

let userInfo: [string, number, boolean?];
userInfo = ["pawan", 100];
userInfo = ["hemant", 2000, true];

// --------- readonly tuples

const lacation: readonly [number, number] = [23.44, 55.44];

// -------- named tuple

const chaiItems: [name: string, price: number] = ["masala", 24];


// ======================== Enums ============

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

// ----- auto incrimental value in enums

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED, // 102
}

// 

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}
function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)
// makeChai("masala") // you cand do this

// ------------ Heterogeneous value

enum RandomEnum {
    ID = 1,
    NAME = "pawan"
}

// ---------- constant enum

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.HIGH