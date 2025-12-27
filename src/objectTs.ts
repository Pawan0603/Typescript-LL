const chai = {

}


let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "ginger tea",
    price: 34,
    isHot: true
}

// ==========

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakchai: Tea = {
    name: "Adrak Chai",
    price: 34,
    ingredients: ["ginger", "tea leaves"]
}

// =========== duck typing =======\

type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup;


// ===========

type Item = {name: string, quantity: number}
type Address= {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}


// =============

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates);
}

updateChai({price: 34})
updateChai({isHot: true})

// ===========

type ChaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder =(order: Required<ChaiOrder>) =>{
    console.log(order)
}

placeOrder({name: "masala chai", quantity: 3})

// ===================== Pick

type user = {
    id: string;
    name: string;
    password: string;
    active: boolean;
}

type BasicUserInfo = Pick<user, "id" | "name">;

const userInfo: BasicUserInfo = {
    id: "ldjf",
    name: "pawan"
}

// ====================== omet

type User = {
    id: string;
    name: string;
    password: string;
    active: boolean;
}

type PuclicUser = Omit<User, "password">;