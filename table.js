for(let i = 1; i <= 20; i++)
{
    let result = Math.sqrt(i);
    console.log(result);
}


let sum =0;
for(let i = 1; i <= 20; i = i+2)
{
    sum = sum + i;
}
console.log(sum);


//Prime Number Code

let num = 7;
let count = 0;

if( num <=1)
{
    console.log("Not Priem")
}else {

    {
       for(let i =2; i<num; i++)
        {
            if(num % i == 0)
            {
                count++;
                break;
            }
        } 
        if(count == 0)
        {
            console.log("Prime");
        }
        else
        {
            console.log("Not Prime");
        }   
    }
}