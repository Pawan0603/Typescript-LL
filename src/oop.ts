// class Chai {
//     flavour: string;
//     price: number

//     // constructor(flavour: string, price: number){
//     //     this.flavour = flavour
//     //     this.price = price
//     // }
//     constructor(flavour: string){
//         this.flavour = flavour
//         console.log(this)
//     }
// }

// const masalaChai = new Chai("Ginger")
// masalaChai.flavour = "masala"



// ======================= Access modifier ========

class Chai {
    public flavor: string = "masala"

    private secretIngredients = "Cardamom"

    reveal(){
        return this.secretIngredients //ok
    }

}

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName //ok
    }
}

class Walet {
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()


//============== readonly propertis

class Cup {
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}

// =========== controls geter seter

class ModerChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if(value > 5) throw new Error("Too sweet")
            this._sugar = value
    }
}

const c = new ModerChai()
c.sugar = 3;

// ===============  static member

class EkChai {
    static shopName = "Chaicode cafe"

    constructor(public flavour: string){}
}

console.log(EkChai.shopName)


// ============ Abstract classes ==============

abstract class Drink{
    abstract make(): void
}

class Mychai extends Drink{
    make(){
        console.log("Briving chai");
    }
}

// ================== Composition 

class Heater{
    heat(){}
}

class chaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}