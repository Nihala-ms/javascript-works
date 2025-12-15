function isPrime(num){
    let primeNum=true;
    for(var i=2;i<num;i++)
    {
        if(num%i==0)
        {
           return primeNum=false;
        }
        
    }
    
}
console.log(isPrime(9));
