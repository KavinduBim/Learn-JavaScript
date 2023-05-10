function greet()
{
    console.log("Hello World");
}

greet();
greet();
greet();

//returning values

function greet1(){
    return "Hello World"
}

let str = greet1();
console.log(str);


//Passing a value
function greet3(user)
{
    return `Hello ${user}!`
}

let user = 'Navin';
let str1 = greet3(user);
console.log(str1);


