function isPerfect(num)
{
    let perfectnum=true;
    var sum=0;
    for(var i=1;i<num;i++)
    {
        if(num%i==0)
        {
            sum+=i;
        }
    }
    return sum==num?true:false


}

console.log(isPerfect(6));
