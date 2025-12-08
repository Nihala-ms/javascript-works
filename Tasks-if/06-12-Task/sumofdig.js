var n=35;
sum=0;
while(n>0)
{
    var dig=n%10;
    sum=sum+dig;
    n=Math.floor(n/10);
}
console.log(sum);
