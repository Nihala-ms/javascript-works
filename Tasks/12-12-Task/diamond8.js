for(var r=1;r<=4;r++)
{
    let pattern="";
    for(var i=1;i<=4-r;i++)
    {
        pattern+=" ";
    }   
    for(var c=1;c<=r;c++)
        {
            pattern+="* ";
        }
        console.log(pattern);       
}
for(var r=3;r>0;r--)
{
    let pattern="";
    for(var i=1;i<=4-r;i++)
    {
        pattern+=" ";
    }   
    for(var c=1;c<=r;c++)
        {
            pattern+="* ";
        }
        console.log(pattern);       
}
    
    