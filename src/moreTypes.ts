let response: any = "45";

let numericLength: number = (response as string).length;

type Book = {
    name: string
}

let bookString = '{"name": "whw moved my cheese"}';
let bookObjext = JSON.parse(bookString) as Book;

console.log(bookObjext);


const inputElement = document.getElementById("username") as HTMLInputElement



let value:any
value = "chai"
value = [1,2,3];
value = 2.5
value.toUpperCase()

let newValue:unknown
newValue = "chai"
newValue = [1,2,3];
newValue = 2.5

if(typeof newValue === "string"){
    newValue.toUpperCase()
}



try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error", error)
}


const data:unknown = "chai or code"
const strData: string = data as string




type Role = "admin" | "user"

function redirectBasedOnRole(role: Role): void{
    if(role === "admin"){
        console.log("redirection to adimn dashboard")
        return
    }
    if(role === "user"){
        console.log("redirection to user dashboard")
        return
    }
    role; // hover on role to see never type...
}


function neverReturn():never{
    while(true){}
}