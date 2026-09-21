interface User{
    name:string;
    age:number;
    isWorking:"NO" | "Yes";
}

function createUser(name:string,age:number):User{
    return{
        name,
        age,
        isWorking:"Yes"
    }
}

function printUserName(user:User):void{
    console.log(`${user.name}`);   
}


const User1 = createUser("Jayp",20);

printUserName(User1);