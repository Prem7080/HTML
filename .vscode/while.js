// // // // let n = 1;
// // // // while(n <= 10)
// // // // {
// // // //     console.log(n);
// // // //     n++;
// // // // }
// // //
// // // // ///Reversr a number
// // // // let num = 1234;
// // // // let rev = 0;    
// // // // while(num > 0)
// // // // {
// // // //     rev = rev * 10 + num % 10;
// // // //     num = Math.floor(num / 10);
// // // // }
// // // // console.log(rev);


// // // const process = require ("node:process");
// // // let name = (process.argv[2]);
// // // console.log("Hello", name);


// // // const prompt = require("prompt-sync")();
// // // let name = prompt("Enter your name: ");
// // // console.log("Hello", name);

// // let n = prompt("Enter a number: ");
// // n = parseInt(n);
// // for(let i = 1; i <= n; i++)
// // {
// //     console.log(i);
// // }


// let num1 = prompt("enter first number: ");
// num1 = parseInt(num1);

// let num2 = prompt("enter second number: ");
// num2 = parseInt(num2);
// let operator = prompt("Enter operator : ");

// switch(operator)
// {
//     case "+":
//         console.log(num1 + num2);
//         break;
    
//     case "-":
//         console.log(num1 - num2);
//         break;

//     case "*":
//         console.log(num1 * num2);
//         break;

//     case "/":
//         console.log(num1/num2);
//         break;

//     default:
//         console.log("wrong choice of operator");
// }

const prompt = require("prompt-sync")();
let age = prompt("Enter your age: ");
age = parseInt(age);    
if(age >= 18)
{
    console.log("able tovote");
}
else{
    console.log("not able to vote");
}