var num=312;
var min=9;
while(num>0)
{
    let dig=num%10;
    if(dig<min)
    {
        min=dig;
    }
    num=Math.floor(num/10);
}
console.log(min);
