var num1=84;
var num2=92;
var num3=67;
if(num1>num2&&num1>num3) //false bcz num2>num1 and num3<num1
{
    console.log("Num1 is largest");
    
}
else if(num2>num3&&num2>num1) //true bcz num1<num2 and num3<num2
{
    console.log("Num2 is largest");
    
}
else
{
    console.log("Num3 is largest"); //false num3<num1,num2
    
}
