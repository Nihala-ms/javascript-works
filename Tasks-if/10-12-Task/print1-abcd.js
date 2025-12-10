for(var r=1;r<=4;r++)
{
    let pattern="";
    for(var c=1;c<=4;c++)
    {
        if(c==1)
        {
            pattern=pattern+"A\t";
        }
        else if(c==2)
        {
            pattern=pattern+"B\t";
        }
        else if(c==3)
        {
            pattern=pattern+"C\t";
        }
        else if(c==4)
        {
            pattern=pattern+"D\t";
        }
    }
    console.log(pattern);
    
}