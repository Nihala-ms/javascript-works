var num=4;
if(num%3==0) //False 4 is not divisible by 3
{
    console.log(`ping`);
    
}
else if(num%5==0) // False 4 is not divisible by 5
{
    console.log(`pong`);
    
}
else if(num%15==0) // False 4 is not divisible by 15
{
    console.log(`pingpong`);
    
}
else // False it is a valid input
{
    console.log(`invalid input`);
    
}