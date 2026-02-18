for(let i =1; i<= 100; i++)
{
    if(i == 5)
    {
        continue;
    }
    console.log(i);
    
}

let sum = 0;
for(let i = 1; i <= 10; i++)
{
    sum = sum + i;
}
console.log(sum);


let fact = 1;
for(let i = 1; i <= 5; i++)
{
    fact = fact * i;
}
console.log(fact)


let num = 1234;
let rev = 0;

for (let i = num; i > 0; i =Math.floor(i / 10))
{
    let digit = i % 10;       
    rev = rev * 10 + digit;   
}

console.log(rev);

