var n=16;
var isPrime=true; //assumes its a prime number
for(let i=2;i<n;i++) //avoids 1 and same number ,range takes <n
{
    if(n%i==0)   //checking any other divisors
    {
        isPrime=false;

    }
}
console.log(isPrime?"is a prime number":"not a prime number");
