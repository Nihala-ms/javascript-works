var n=1234;
var rev=0;
while(n>0)
{
    var dig=n%10;
    rev=rev*10+dig;
    n=Math.floor(n/10);
    
}
console.log(`the reverse of the is:${rev}`);

