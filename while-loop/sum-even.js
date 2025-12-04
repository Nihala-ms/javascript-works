var limit=5;
var sum=0;
var i=1; //1 2 3 4 5
while(i<=limit) //1<5 2<5 3<5 4<5 5<=5
{
    if(i%2==0) //1F 2T 3F 4T 5F
    {
        sum=sum+i; //0+2=2 2+4=6
        
    }
    i++; //2 3 4 5
}
console.log("The sum of even numbers b/w 1 to",limit,"is:",sum); //6
