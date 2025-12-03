var n=1800;
console.log("Century year in b/w 1800 to 2025:");

while(n<=2025)
{
    if(n%100==0)
    {
        console.log(n);
        
    }
    n++;
}

console.log(".................................");

var i=1800;
console.log("leap year in b/w 1800 to 2025:");

while(i<=2025)
{
    if(i%100!=0 && i%4==0)
    {
        console.log(i);
        
    }
    i++;
}
