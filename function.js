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
function greet3(user)//user is a local variable
{
    return `Hello ${user}!`
}

let user = 'Navin';//user is a global variable
let str1 = greet3(user);
console.log(str1);

//function expression
let add = function(num1,num2 = 3)
        {
            return num1 + num2;
        }

let sum = add;
let result = sum(6,7);
console.log(result);


