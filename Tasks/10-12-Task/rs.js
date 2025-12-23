for(var r=1;r<=4;r++)
{
    let pattern="";
    for(var c=1;c<=4;c++)
    {
        if(r==1 || r==4 || c==1 || c==4)
        
        
        {
            pattern=pattern+"R\t";
        }
        else{
            pattern=pattern+"S\t"
        }
        
    }

    console.log(pattern);
    
}