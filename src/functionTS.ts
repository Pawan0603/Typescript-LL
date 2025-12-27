function myFun (userName: string): string{
    return userName;
}

function logUser (user: {
    name: string;
    age: number;
    password: string
}): void {
    console.log(user.name);
}

function Fun (data?: string): void{
    console.log(data)
}