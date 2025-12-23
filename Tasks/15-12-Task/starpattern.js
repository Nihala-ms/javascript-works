var n=3;
for(var r=1;r<=n;r++)
{
    let pattern="";
    for(var c=1;c<=n;c++)
    {
        if(c==1)
        {
            pattern+=".\t";
        }
        else{
            pattern+="*\t";
        }
    }
    console.log(pattern);
    
}