var num1=12; 
var num2=24;
var gcd=1;
var min=num1<num2?num1:num2  //1,2,3,4,5,6,7,8,9,10,11,12
for(let i=1;i<=min;i++) //13F
{
    if(num1%i==0 && num2%i==0) //12%1==0 && 24%1==0  2T 3T 4T 5F 6T 7F 8F 9F 10F 11F 12T
    {
        gcd=i; //1 2 3 4 6 12 it changes the iterate
    }
}
console.log(gcd); //12 displays


