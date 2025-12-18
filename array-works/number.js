var numbers=[2,3,4,5,6,7,7,8,3,9,9,7];
var min=numbers[0];
var max=0;
var sum=0;
var oddsum=0;
var evensum=0;
var avg=0;
for(let num of numbers)
{
    sum+=num;
    sum++;
    avg=sum/numbers.length;
    if(num>max)
    {
        max=num;
    }
    else if(num<min)
    {
        min=num;

    }
    if(num%2==0)
    {
        evensum+=num;
        evensum++;    
    }
    else{
        oddsum+=num;
        oddsum++;
    }
    if(num%3==0)
    {
        console.log("the divisors of 3:",num);
        
    }

}

function frequent(arr)
{
    for(let a of arr)
    {
        if(a==arr[a])
            {
                return a;
                
            }  
    }

}

console.log("minimum number:",min);
console.log("maximum number:",max);
console.log("sum of these numbers:",sum);
console.log("sum of even numbers:",evensum);
console.log("sum of odd numbers:",oddsum);
console.log("Average of these numbers:",avg);
console.log(frequent([2,3,4,5,6,7,7,8,3,9,9,7]));







