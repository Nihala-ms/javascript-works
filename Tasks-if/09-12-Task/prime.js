var n=34;
var isPrime=true;
for(var i=2;i<n;i++)
{
    if(n%i==0)
    {
        isPrime=false
    }
}
console.log(isPrime?"is a prime":"not a prime");
