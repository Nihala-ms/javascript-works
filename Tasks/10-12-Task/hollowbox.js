for(var r=1;r<=5;r++)
{
    let pattern="";
    for(var c=1;c<=5;c++)
    {
        if(c==1 || c==5 || r==1 ||r==5)
        {
            pattern=pattern+"1\t";
        }
        else
        {
            pattern=pattern+"0\t";
        }
    }
    console.log(pattern);
    
}