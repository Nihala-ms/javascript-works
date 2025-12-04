var n=345;
console.log("The number entered is:",n);
var sum=0;
while(n!=0) //345 34 3 0F
{
    let digit=n%10; //345%10=5 34%10=4 3%10=3
    console.log(digit);
    sum=sum+digit; //0+5=5 5+4=9 9+3=12
    n=Math.floor(n/10) // 345//10=34 34//10=3 3//10=0
}
console.log("The sum these numbers are:",sum);
