type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}

// ===========================

// type TeaRecipe = {
//     water: number;
//     milk: number;
// }

interface TeaRecipe {
    water: number;
    milk: number;
}

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

// type CupSize = "small" | "large"

interface CupSize {
    size: "small" | "large"
}

class Chai implements CupSize {
    size: "small" | "large" = "large";
}


// ===========================

// type Response = {ok: true} | {ok: false};

// class myRes implements Response{
    
// }


// =======================
// uniun
type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType){
    console.log(t);
}

// ========================= intersection =

type BaseChai = {teaLeaves: number};
type Extra = {masala: number};

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 1
}

// ======= optional data type

type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "pawan"}
const u2: User = {username: "pawan", bio: "hi this is pawan"}

// ===== readonly

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "pawna",
    version: 1
}

// cfg.appName = "somkhjglk" // you cant do this on readonly values