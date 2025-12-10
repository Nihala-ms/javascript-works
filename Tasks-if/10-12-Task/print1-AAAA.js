for(var r=1;r<=4;r++)
{
    let pattern="";
    for(var c=1;c<=4;c++)
    {
        if(r==1)
        {
            pattern=pattern+"A\t";
        }
        else if(r==2)
        {
            pattern=pattern+"B\t";
        }
        else if(r==3)
        {
            pattern=pattern+"C\t";
        }
        else if(r==4)
        {
            pattern=pattern+"D\t";
        }
    }
    console.log(pattern);
    
}