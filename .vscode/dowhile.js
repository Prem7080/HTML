let i = 1;
do {
    console.log(i);
    i++;
} while(i <= 10);



let sum = 0;
let j = 1; 
do {
    sum = sum + j;
    j++;
}while(j <= 10);
console.log(sum);

//Reverse a number
let num = 1234;
let rev = 0;
let k = num;    
do {
    let digit = k % 10;
    rev = rev * 10 + digit;
    k = Math.floor(k / 10);
}while(k > 0);
console.log(rev);