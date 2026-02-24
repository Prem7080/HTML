let base  = 500;
console.log(base);
for(let i = 1; i <= 10; i++)
{
    let result = i ** 3;
    base = base - result;
    console.log(base);   
}


for ( let i = 1; i<= 5; i++)
{
    console.log("*");
}


for(let i = 1; i <= 5; i++)
{
    let row = "";
    for(let j = 1; j <= 5; j++)
    {
        row += "*";
    }
    console.log(row);
}

for(let i = 1; i <= 5; i++)
{
    let row = "";
    for(let j = 1; j <= i; j++)
    {
        row += "*";
    }
    console.log(row);
}

for(let i =5; i>= 1; i--)
{
    let row ="";
    for(let j= 1;j <=i; j++)
    {
        row += "*";
    }console.log(row);
}

for(let i =1; i<=8; i++)
{
    let row ="";
    for(let j =2; j <= i; j++)
    {
        row += "*";
    }
    console.log(row);
}


for (let i = 1; i <= 5; i++)
{
    console.log("*");   
    
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}


Pyramid patter
let n = 5;

for(let i = 1; i <= n; i++)
{   
    let row = "";
    for(let s = 1; s <= n - i; s++)
    {
        row += " ";
    }
    for(let j = 1; j <= i; j++)
    {
        row +="* ";
    }   
    console.log(row);
}