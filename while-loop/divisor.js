var num1=24; //n1=24
var num2=12; //n2=12
var min=0;   //min=0
console.log("The common divisor of 24 and 12:");

if(num1<num2) //T 12<24
{
    min=num1; //Min=12
}
else{         //F
    min=num2;
}

var i=1;       //i=1 2 3 4 5 6 7...
while(i<=min)  //1<=12 2<=12 3<=12 4<=12 5<=12 6<=12...
{
    if(num1%i==0 && num2%i==0)   //1T 2T 3T 4T 5F 6T...
    {
        console.log(i); //1 2 3 4 6...
        
    }
    i++;          //2 3 4 5 6 7...
}