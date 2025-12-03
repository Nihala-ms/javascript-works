var num1=37; //num1
var num2=45; //num2
console.log("num1:",num1); //display
console.log("num2:",num2); //display

if(num1==num2)//false is not equal 
{
    console.log(`${num1} is equal to ${num2}`); 
    
}
else if(num1>num2) //false is num1 is smaller
{
    console.log(`${num1} is Largest`);
    
}
else if(num2>num1)// true num2 is largest
{
    console.log(`${num2} is Largest`);
    
}
else{ // false its valid input
    console.log("invalid input");
    
}