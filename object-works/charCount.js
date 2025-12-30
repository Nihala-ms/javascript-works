var text="hii hello good morning";
var charCount={};
for(let t of text)
{
    if(t in charCount)
    {
        charCount[t]+=1;
    }
    else
    {
        charCount[t]=1;
    }
}
console.log(charCount);
