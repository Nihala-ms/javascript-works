function duplicate(str)
{

var res="";
for(let i=0;i<str.length;i++)
{
    let isduplicate=false;
    for(let j=0;j<res.length;j++)
    {
        if(str[i]==res[j])
        {
            isduplicate=true;
            break;
        }
    }
    if(!isduplicate)
    {
        res+=str[i];
    }
}
return res;
}

console.log(duplicate("hello"));
