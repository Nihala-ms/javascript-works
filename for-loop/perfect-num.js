var n=4; //4
var sum=0; //initalizes to sum=0
for(var i=1;i<n;i++) //1 2 3 4F
{
    if(n%i==0) //1 2 3F
    {
        sum=sum+i; //1 1+2=3
 
    }
}
console.log(n==sum?"is a perfect":"is not a perfect number"); //4!=3


