for(var r=1;r<=4;r++)
{
    let pattern="";
    for(var i=1;i<=4-r;i++)
    {
        pattern+=" ";
    }
    for(var c=1;c<=r;c++)
        {
            if((r==3 && c==2)||(r==4 && c==2)||(r==4 && c==3))
            {
                pattern+="  ";
            }
            else
            {
                pattern+="* "
            }
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
            if((r==3 && c==2))
            {
                pattern+="  ";
            }
            else{ 
            pattern+="* ";
            }
        }
        console.log(pattern);        
}
    
    