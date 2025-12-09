var n=8976;
for(var i=1;i<=n;i++)
{
    var dig=n%10;
    console.log(dig);
    n=Math.floor(n/10);
}