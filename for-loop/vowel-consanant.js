var str="javascript";
var vcount=0;
var ccount=0;
for(let ch of str)
{
    if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u")
    {
        vcount++;
        
    }
    else
    {
        ccount++;
        
    }
}
        console.log(`consanats count of ${str}: ${ccount}`);
        console.log(`vowels count of ${str}: ${vcount}`);
