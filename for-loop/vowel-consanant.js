var str="javascript";
var vcount=0;
var ccount=0;
var vowels=["a","e","i","o","u"];
for(let ch of str)
{
    if(vowels.includes(ch))
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
