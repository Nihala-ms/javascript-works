for(var r=1;r<=4;r++)
{
    let pattern="";
    for(var c=1;c<=4;c++)
    {
        if(c+r==2 || c+r==6)
        {
            pattern=pattern+"A\t";
        }
        else if(c+r==3 || c+r==7)
        {
            pattern=pattern+"B\t";
        }
        else if(c+r==4 || c+r==8)
        {
            pattern=pattern+"C\t";
        }
        else if(c+r==5)
        {
            pattern=pattern+"D\t";
        }
    }
    console.log(pattern);
    
}