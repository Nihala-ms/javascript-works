for(var r=1;r<=5;r++)
{
    let pattern="";
    for(var i=1;i<=r;i++)
    {
        pattern+=" \t";
    }
    for(var c=5;c>=r;c--)
    {
        pattern+="* \t"
    }
    console.log(pattern);
    
}