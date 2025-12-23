var num=1234;
var sum=0;

    while(num>0)
    {
    let dig=num%10;
    
    if(dig%2!=0)
    {
        sum+=dig;

    }
    num=Math.floor(num/10);
}

console.log("sum of odd digits:",sum);

