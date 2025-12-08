var ch="javascript";
var vowels="aeiou";
var count=0;
for(var i=0;i<ch.length;i++)
{
    if(vowels.includes(ch[i]))
    {
        count++;        
    }
}
console.log(count);
